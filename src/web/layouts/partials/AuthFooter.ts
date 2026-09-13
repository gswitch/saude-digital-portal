import { html } from "hono/html";

const AuthFooter = () => {
    return html`
        <footer class="shrink-0 w-full bg-footer border-t border-t-neutral-300 dark:border-t-0">
            <div class="w-full px-2 sm:px-2 lg:px-2 flex items-stretch justify-between gap-4">
                <div class="flex items-stretch gap-x-2">
                    <a href="/" class="flex items-center gap-x-2 py-2 px-2 hover:bg-surface-hover active:bg-surface-active">
                        <img src="/assets/img/favicon.png" alt="" class="h-5 w-auto" width="440" height="400">
                        <span class="text-sm text-muted-foreground-2">Saúde Digital</span>
                    </a>
                </div>

                <div class="flex items-stretch gap-x-2">
                    <a href="/" class="flex items-center text-sm text-muted-foreground-2 py-2 px-3 hover:bg-surface-hover">Privacidade</a>
                    <a href="/" class="flex items-center text-sm text-muted-foreground-2 py-2 px-3 hover:bg-surface-hover">Termos</a>
                </div>
            </div>
        </footer>
    `;
}

export default AuthFooter;
