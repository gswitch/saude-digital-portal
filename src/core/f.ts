import config from '../../deno.json' with { type: 'json' }
import type { HtmlEscapedString } from "hono/utils/html";
import { fromFileUrl, toFileUrl, dirname, SEPARATOR } from "@std/path";
import { IEnvelop } from "./interfaces.ts";
import mailer from "@neabyte/deno-mailer";
import { createHash } from "node:crypto";
import postgres from "postgres";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

// Chave AES vem da variável de ambiente PORTAL_KEY (64 hex); nunca embutida no exe
let key: CryptoKey | null = null;

export const F = Object.seal({
    version: config.version || "0.0.1",

    // No exe compilado, import.meta.url aponta para o FS embutido; settings.json fica ao lado do exe
    rootURL: Deno.build.standalone ? toFileUrl(dirname(Deno.execPath()) + SEPARATOR) : new URL("../../", import.meta.url),

    loaded: {
        cfg: false,
    },

    cfg: {
        HTTP_PORT: 80,
        DATABASE_HOST: "127.0.0.1",
        DATABASE_PORT: 5432,
        DATABASE_NAME: "portal",
        DATABASE_USER: "postgres",
        DATABASE_PWD: "",
        DATABASE_ARGS: "",
    },

    sql: postgres(""),

    load,
    sleep,
    base64Encode,
    base64Decode,
    sha256,
    encrypt,
    decrypt,
    strToMD5,
    randomString,
    capitalize,
    sendMail,
    fromFileUrl,
    dirname,
    existsAsync,
    cleanHtml,
});

Object.defineProperty(globalThis, "F", {
    value: F,
    writable: false,
    configurable: false,
    enumerable: false,
});

export async function load() {
    try {
        const fileURL = new URL("./settings.json", F.rootURL);

        if (!F.loaded.cfg) {
            // settings.json tem prioridade; sem ele (ex.: Cloud Run) o banco vem das variáveis de ambiente
            if (await F.existsAsync(fileURL)) {
                F.cfg = { ...F.cfg, ...JSON.parse(await Deno.readTextFile(fileURL)) };
            } else {
                for (const name of ["DATABASE_HOST", "DATABASE_NAME", "DATABASE_USER", "DATABASE_PWD", "DATABASE_ARGS"] as const) {
                    const value = Deno.env.get(name);
                    if (value !== undefined) {
                        F.cfg[name] = value;
                    }
                }

                const dbPort = Deno.env.get("DATABASE_PORT");
                if (dbPort !== undefined) {
                    F.cfg.DATABASE_PORT = Number(dbPort);
                }
            }

            // Cloud Run injeta PORT e exige escutar nela
            const port = Number(Deno.env.get("PORT"));
            if (port) {
                F.cfg.HTTP_PORT = port;
            }

            F.loaded.cfg = true;
        }
    } catch (err) {
        const e = err instanceof Error ? err : new Error(String(err));
        console.error("[X]", e.message);
        Deno.exit(1);
    }
}

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function base64Encode(str: string) {
    return btoa(String.fromCharCode(...new TextEncoder().encode(str)));
}

export function base64Decode(base64: string) {
    const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
}

export async function sha256(str: string) {
    const data = new TextEncoder().encode(str);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2, "0")).join("");
}

async function getKey(): Promise<CryptoKey> {
    if (!key) {
        const hex = Deno.env.get("PORTAL_KEY") ?? "";
        if (!/^[0-9a-fA-F]{64}$/.test(hex)) {
            throw new Error("PORTAL_KEY não definida ou inválida (esperado 64 caracteres hex).");
        }
        const raw = Uint8Array.from(hex.match(/../g)!, h => parseInt(h, 16));
        key = await crypto.subtle.importKey("raw", raw, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
    }
    return key;
}

export async function encrypt(text: string): Promise<string> {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, await getKey(), encoder.encode(text));
    const result = new Uint8Array(iv.length + encrypted.byteLength);
    result.set(iv, 0);
    result.set(new Uint8Array(encrypted), iv.length);
    return btoa(String.fromCharCode(...result));
}

export async function decrypt(text: string): Promise<string> {
    const data = Uint8Array.from(atob(text), c => c.charCodeAt(0));
    const iv = data.slice(0, 12);
    const encrypted = data.slice(12);
    const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, await getKey(), encrypted);
    return decoder.decode(decrypted);
}

export function strToMD5(str: string): string {
    return createHash("md5").update(str).digest("hex");
}

export function randomString(length: number): string {
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return Array.from(bytes).map(byte => byte.toString(16).padStart(2, "0")).join("");
}

export function capitalize(str: string) {
  return str.replace(/\w/, (c) => c.toUpperCase());
}

export async function sendMail(envelop: IEnvelop): Promise<boolean> {
  try {
    const u = JSON.parse(await decrypt("SezKQ0d9CGEvwd89gU5LhwnrspVlSrmWczYnmzzKI76KLRJBBdrX3cAf7x7g+FonMwkRnYQK3l+RXUbjaKtVpva+hiJXfzOK8AcC50fzjLCwdmKO0FinV3psgbzQaNKjKPqNMiQ+N7PGfbw="));

    const transporter = mailer.transporter({
        host: "email-smtp.sa-east-1.amazonaws.com",
        port: 587,
        secure: false,
        auth: {
            type: "password",
            user: u.l,
            pass: u.p,
        },
    });

    const sent = await transporter.send(envelop);

    if (!sent.messageId) {
        return false;
    }

    return true;
  } catch (err) {
    if (err instanceof Error) {
        console.error("[X]", err.message);
    } else {
        console.error("[X] valor não-Error lançado:", err);
    }
    return false;
  }
}

async function existsAsync(strPath: string | URL): Promise<boolean> {
  try {
    await Deno.stat(strPath);
    return true;
  } catch (_err) {
    // const e = err instanceof Error ? err : new Error(String(err));
    // console.log("[X] existsAsync:", e.message);
    return false;
  }
}

export function cleanHtml(str: HtmlEscapedString | Promise<HtmlEscapedString> | (HtmlEscapedString | Promise<HtmlEscapedString>)[]): string {
    return String(str).trim();
}

