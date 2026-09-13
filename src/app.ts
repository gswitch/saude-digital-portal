import "./core/f.ts";
import db from "./core/db.ts";
import server from "./web/server.ts";

Deno.addSignalListener("SIGINT", shutdown);
Deno.addSignalListener("SIGTERM", shutdown);

async function main() {
    try {
        await F.load();
        await db.connect();
        server.start();
        // cron.start();
    } catch (err) {
        const e = err instanceof Error ? err : new Error(String(err));
        console.log("[X] Main:", e.message);
    } finally {
        // await db.disconnect();
    }
}

async function shutdown() {
  await db.disconnect();
  Deno.exit(0);
}

main();
