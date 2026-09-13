import { Context, Next } from "hono";

export const notFound = (c: Context) => {
    if (c.req.path.startsWith("/api")) {
        return c.json({ status: 404, message: "Recurso não encontrado!" }, 404);
    }
    return c.text("Recurso não encontrado!", 404);
}

export const onError = (err: Error, c: Context) => {
    console.error("[X] OnError Middleware:", err.message);
    if (c.req.path.startsWith("/api")) {
        return c.json({ status: 500, message: "Erro interno!" }, 500);
    }
    return c.text("Erro interno!", 500);
}

export const cleanHtml = async (c: Context, next: Next) => {
    await next();
    
    const type = c.res.headers.get("content-type") ?? "";

    if (!type.includes("text/html")) return;

    const min = (await c.res.text())
    // .replace(/>[ \t]*\r?\n[ \t]*</g, '><')
    // .replace(/[ \t]*\r?\n[ \t]*/g, ' ')
    .trim()
    
    c.res = new Response(min, {
      status: c.res.status,
      headers: c.res.headers,
    });
}

export const minifyApp = async (c: Context, next: Next) => {
    await next();
    
    if (!c.req.path.includes("/assets/js/app.js")) return;

    const min = (await c.res.text())
    .replace(/>[ \t]*\r?\n[ \t]*</g, '><')
    .replace(/[ \t]*\r?\n[ \t]*/g, ' ')
    .trim();

    c.res = new Response(min, {
      status: c.res.status,
      headers: c.res.headers,
    });
}

export default {
    notFound,
    onError,
    cleanHtml,
    minifyApp,
};
