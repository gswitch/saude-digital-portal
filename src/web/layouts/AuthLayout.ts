import AuthFooter from "@/src/web/layouts/partials/AuthFooter.ts";
import AuthHeader from "@/src/web/layouts/partials/AuthHeader.ts";
import { html } from "hono/html";

export default (props: any) => {
    return html`
        <!DOCTYPE html>
        <html lang="pt-BR" class="min-h-full">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#155dfc">
            <link rel="icon" href="/favicon.ico" sizes="any">
            <link rel="icon" type="image/png" href="/assets/img/favicon.png">
            <title>${props.title}</title>

            <link rel="stylesheet" href="/assets/css/app.min.css">

            <script>
                (function () {
                    const html = document.querySelector("html");
                    const isLightOrAuto = localStorage.getItem("hs_theme") === "light" || (localStorage.getItem("hs_theme") === "auto" && !window.matchMedia("(prefers-color-scheme: dark)").matches);
                    const isDarkOrAuto = localStorage.getItem("hs_theme") === "dark" || (localStorage.getItem("hs_theme") === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);

                    if (isLightOrAuto && html.classList.contains("dark")) html.classList.remove("dark");
                    else if (isDarkOrAuto && html.classList.contains("light")) html.classList.remove("light");
                    else if (isDarkOrAuto && !html.classList.contains("dark")) html.classList.add("dark");
                    else if (isLightOrAuto && !html.classList.contains("light")) html.classList.add("light");
                })();
            </script>

            <script src="/assets/libs/htmx/htmx.min.js"></script>
            <script src="/assets/js/app.min.js" defer></script>
        </head>
        <body class="h-dvh flex flex-col overflow-hidden bg-background text-foreground" x-data="AppData">
            ${AuthHeader()}

            <div class="grow min-h-0 flex overflow-hidden">
                ${props.sidebar}

                <div class="grow min-h-0 flex flex-col overflow-hidden">
                    <div class="grow min-h-0 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                        ${props.children}
                    </div>

                    ${AuthFooter()}
                </div>
            </div>
        </body>
        </html>
    `
}
