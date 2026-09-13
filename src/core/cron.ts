
export function start() {
    Deno.cron("one-minute", "* * * * *", () => {
        console.log("[OK] Tarefa executada.");
    });
}

export default {
    start,
};
