import HeaderPartial from "./partials/MainHeader.ts";
import MainFooter from "./partials/MainFooter.ts";
import { html } from "hono/html";

export default (props: any) => {
    return html`
        <!DOCTYPE html>
        <html lang="pt-BR" class="min-h-full bg-lua-background-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-stone-800 dark:scrollbar-thumb-stone-700">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${props.title}</title>
            
            <link rel="stylesheet" href="/assets/css/app.min.css">

            <script src="/assets/libs/htmx/htmx.min.js"></script>
            <script src="/assets/js/app.min.js" defer></script>
        </head>
        <body x-data="AppData" x-cloak class="min-h-dvh flex flex-col text-foreground bg-lua-background-1">
            ${HeaderPartial()}

            <main id="content" class="grow pt-[59px]">
                <div class="max-w-6xl w-full mx-auto">
                    ${props.children}
                </div>
            </main>

            ${MainFooter()}
        </body>
        </html>
    `
}
