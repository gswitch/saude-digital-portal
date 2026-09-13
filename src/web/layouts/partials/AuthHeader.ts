import { html } from "hono/html";

const AuthHeader = () => {
    return html`
        <header class="fixed top-4 end-4 z-50 flex">
            <div class="hs-dark-mode hs-dark-mode-active:hidden hs-tooltip --placement:bottom-right inline-block">
                <button type="button" class="hs-tooltip-toggle relative flex justify-center items-center size-9 cursor-pointer bg-layer border border-layer-line text-layer-foreground rounded-full hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus" data-hs-theme-click-value="dark">
                    <span class="sr-only">Ativar modo escuro</span>
                    <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible start-0 z-20 py-1.5 px-2.5 bg-tooltip border border-tooltip-line text-xs text-nowrap text-tooltip-foreground rounded-lg" role="tooltip">
                    Ativar modo escuro
                </span>
            </div>
            <div class="hs-dark-mode hs-dark-mode-active:inline-block hidden hs-tooltip --placement:bottom-right">
                <button type="button" class="hs-tooltip-toggle relative flex justify-center items-center size-9 cursor-pointer bg-layer border border-layer-line text-layer-foreground rounded-full hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus" data-hs-theme-click-value="light">
                    <span class="sr-only">Ativar modo claro</span>
                    <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible start-0 z-20 py-1.5 px-2.5 bg-tooltip border border-tooltip-line text-xs text-nowrap text-tooltip-foreground rounded-lg" role="tooltip">
                    Ativar modo claro
                </span>
            </div>
        </header>
    `;
}

export default AuthHeader;
