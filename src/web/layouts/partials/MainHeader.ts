import { html } from "hono/html";

const HeaderPartial = () => {
    return html`
        <header class="fixed top-0 inset-x-0 py-3 flex flex-wrap md:justify-start md:flex-nowrap z-50 bg-lua-background-1/85 border-b border-navbar-line backdrop-blur-xs">
            <nav class="max-w-6xl w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
                <div class="flex items-center gap-x-2 w-[160px]">
                    <a class="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="/" aria-label="Saúde Digital">
                        <img src="/assets/img/favicon.png" alt="" class="dark:hidden h-[25px] w-auto" width="60" height="55" />
                        <img src="/assets/img/favicon.png" alt="" class="hidden dark:block h-[25px] w-auto" width="60" height="55" />
                    </a>
                    <span class="text-lg font-semibold">Saúde Digital</span>
                </div>

                <div class="sm:order-3 flex items-center justify-end gap-x-2 w-[160px]">
                    <button type="button" class="hidden hs-collapse-toggle relative size-8 flex justify-center items-center gap-x-2 rounded-md bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-alignment-collapse" aria-expanded="false" aria-controls="hs-navbar-alignment" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-alignment">
                        <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                        <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        <span class="sr-only">Toggle</span>
                    </button>

                    <!-- Theme Toggle Button -->
                    <div class="flex items-center">
                        <div class="hs-dark-mode hs-dark-mode-active:hidden group">
                            <button type="button" class="flex justify-center items-center py-1.5 px-3 rounded-md text-xs disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden group-hover:bg-gray-300 transition" data-hs-theme-click-value="dark">
                                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="hs-dark-mode hs-dark-mode-active:block hidden group">
                            <button type="button" class="flex justify-center items-center py-1.5 px-3 rounded-md text-xs disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden group-hover:bg-navbar-nav-hover transition" data-hs-theme-click-value="light">
                                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                        </div>
                    </div>
                    <!-- End Theme Toggle Button -->
                </div>

                <div id="hs-navbar-alignment" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2" aria-labelledby="hs-navbar-alignment-collapse" role="region">
                <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0">
                    <span class="text-lg">Portal de Entrega de Exames</span>
                </div>
                </div>
            </nav>
        </header>
    `;
}

export default HeaderPartial;
