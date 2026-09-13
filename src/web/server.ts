import routes from "./routes.ts";

export function start() {
    Deno.serve({
        port: F.cfg.HTTP_PORT || 80,
        hostname: "0.0.0.0",
        onListen: (params) => {
            console.log(`[OK] Servidor WEB iniciado na porta: ${params.port}`);
        },
        onError: (err) => {
            const e = err instanceof Error ? err : new Error(String(err));
            console.error("[X] Ocorreu uma exceção não tratada no handler! Message:", e.message, e.stack);
            return new Response("Desculpe! Ocorreu um erro inesperado.", { status: 500 });
        },
    }, routes.fetch);
}

export default {
    start,
};
