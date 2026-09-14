import postgres from "postgres";

export async function connect() {
    try {
        if (!F.cfg.DATABASE_PWD) {
            throw new Error("DATABASE_PWD não configurada (settings.json ou variável de ambiente).");
        }
        // DATABASE_ARGS é opcional e vai no fim da string, ex.: "?sslmode=require&channel_binding=require"
        F.sql = postgres(`postgres://${encodeURIComponent(F.cfg.DATABASE_USER)}:${encodeURIComponent(await F.decrypt(F.cfg.DATABASE_PWD))}@${F.cfg.DATABASE_HOST}:${F.cfg.DATABASE_PORT}/${F.cfg.DATABASE_NAME}${F.cfg.DATABASE_ARGS || ""}`);
        const rows = await F.sql`SELECT version(), now()`;
        if (!rows.length) {
            throw new Error("Falha na consulta de conexão.");
        }
        console.log(`[OK] Banco de dados conectado em: ${F.cfg.DATABASE_HOST}`);
    } catch (err) {
        const e = err instanceof Error ? err : new Error(String(err));
        console.error("[X] Falha ao conectar com banco de dados! Message:", e.message);
        Deno.exit(1);
    }
}

export async function disconnect() {
    if (F.sql) {
        await F.sql.end({ timeout: 0 });
    }
}

export default {
    connect,
    disconnect,
}
