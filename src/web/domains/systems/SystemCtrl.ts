import { Context } from "hono";

export const info = (c: Context) => {
    return c.json({ version: F.version }, 200);
}

export default {
    info,
};
