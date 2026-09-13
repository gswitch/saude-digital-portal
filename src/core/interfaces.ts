import type { HtmlEscapedString } from "hono/utils/html";

export interface IEnvelop {
    from: string,
    to: string,
    subject: string,
    text?: string,
    html: string
}

export interface IProps {
    title?: string
    children?: HtmlEscapedString | Promise<HtmlEscapedString> | (HtmlEscapedString | Promise<HtmlEscapedString>)[]
}

