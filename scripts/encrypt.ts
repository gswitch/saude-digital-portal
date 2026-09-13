// Utilitário de linha de comando (não entra no exe):
//   deno task secret:key              → gera uma nova PORTAL_KEY (64 hex)
//   deno task secret:encrypt "<valor>" → cifra o valor com a PORTAL_KEY do ambiente
// Mesmo formato de F.encrypt: base64(IV 12 bytes + AES-GCM).

const encoder = new TextEncoder();

function toHex(bytes: Uint8Array): string {
    return Array.from(bytes).map(byte => byte.toString(16).padStart(2, "0")).join("");
}

async function main() {
    if (Deno.args[0] === "--gen-key") {
        console.log(toHex(crypto.getRandomValues(new Uint8Array(32))));
        return;
    }

    const value = Deno.args[0];
    if (!value) {
        console.error("[X] Uso: deno task secret:encrypt \"<valor>\"");
        Deno.exit(1);
    }

    const hex = Deno.env.get("PORTAL_KEY") ?? "";
    if (!/^[0-9a-fA-F]{64}$/.test(hex)) {
        console.error("[X] PORTAL_KEY não definida ou inválida (esperado 64 caracteres hex).");
        Deno.exit(1);
    }

    const raw = Uint8Array.from(hex.match(/../g)!, h => parseInt(h, 16));
    const key = await crypto.subtle.importKey("raw", raw, { name: "AES-GCM" }, false, ["encrypt"]);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encoder.encode(value)));
    const result = new Uint8Array(iv.length + encrypted.length);
    result.set(iv, 0);
    result.set(encrypted, iv.length);
    console.log(btoa(String.fromCharCode(...result)));
}

main();
