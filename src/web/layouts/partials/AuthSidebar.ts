import illustrationDarkSvg from "@/src/web/assets/img/dark/device-security.svg" with { type: "text" };
import illustrationLightSvg from "@/src/web/assets/img/light/device-security.svg" with { type: "text" };
import { html, raw } from "hono/html";

// A ilustração é inline (não <img>) para trocar de tema (claro/escuro) sem nova requisição.
function withThemeClass(svg: string, className: string): string {
    return svg.replace(/<svg\b([^>]*)>/, (_match, attrs: string) => {
        const withoutSize = attrs.replace(/\s(?:width|height)="[^"]*"/g, "");
        return `<svg${withoutSize} class="${className}">`;
    });
}

const illustrationLight = withThemeClass(illustrationLightSvg, "dark:hidden w-full h-auto");
const illustrationDark = withThemeClass(illustrationDarkSvg, "hidden dark:block w-full h-auto");

interface AuthSidebarProps {
    titulo: string;
    rodape: string;
}

const AuthSidebar = (props: AuthSidebarProps) => {
    return html`
        <div class="hidden h-full overflow-hidden lg:w-100 xl:w-107.5 bg-primary lg:flex flex-col p-6">
            <!-- Body -->
            <div class="grow flex flex-col items-center justify-center text-center">
                <span class="text-3xl font-medium text-white">${props.titulo}</span>
                ${raw(illustrationLight)}
                ${raw(illustrationDark)}
            </div>
            <!-- End Body -->

            <!-- Footer -->
            <div class="flex justify-center gap-x-8 text-white">
                ${props.rodape}
            </div>
            <!-- End Footer -->
        </div>
    `;
}

export default AuthSidebar;
