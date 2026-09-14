import "./core/f.ts";
import db from "./core/db.ts";
import server from "./web/server.ts";

const HELP = `Uso: portal [opção]

Opções:
  --run              Inicia a aplicação normalmente (padrão sem opções)
  --keygen           Gera uma nova PORTAL_KEY (64 caracteres hex)
  --encrypt <valor>  Cifra <valor> com a PORTAL_KEY do ambiente
  --help             Mostra esta ajuda
`;

async function main() {
    const args = Deno.args;

    if (args.includes("--help")) {
        console.log(HELP);
        return;
    }

    if (args.includes("--keygen")) {
        console.log(F.randomString(32));
        return;
    }

    const encryptIndex = args.indexOf("--encrypt");
    if (encryptIndex !== -1) {
        const value = args[encryptIndex + 1];
        if (!value) {
            console.error('[X] Uso: portal --encrypt "<valor>"');
            Deno.exit(1);
        }
        console.log(await F.encrypt(value));
        return;
    }

    await start();
}

async function start() {
    Deno.addSignalListener("SIGINT", shutdown);
    Deno.addSignalListener("SIGTERM", shutdown);

    try {
        await F.load();
        await db.connect();
        server.start();
    } catch (err) {
        const e = err instanceof Error ? err : new Error(String(err));
        console.log("[X] Main:", e.message);
    }
}

async function shutdown() {
    await db.disconnect();
    Deno.exit(0);
}

main();
