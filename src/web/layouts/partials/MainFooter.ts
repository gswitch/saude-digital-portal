import { html } from "hono/html";

const MainFooter = () => {
    return html`
        <footer class="mt-auto w-full max-w-6xl py-4 mx-auto border-t border-line-3 dark:border-line-1">
            <!-- Grid -->
            <div class="flex flex-col md:flex-row md:justify-between gap-10 mb-4 md:px-4">
                <div class="text-center md:text-left">
                <a class="flex-none font-semibold text-xl text-foreground focus:outline-hidden focus:opacity-80" href="" aria-label="Brand">Saúde Digital</a>
                <p class="mt-1 text-xs sm:text-sm text-muted-foreground-2">
                    Organizando registros clínicos.
                </p>
                </div>
                <!-- End Brand Col -->

                <div class="grid grid-cols-3 md:gap-12 text-center md:text-left">
                <div>
                    <h3 class="text-xs font-semibold text-foreground uppercase">Product</h3>

                    <div class="mt-3 grid space-y-3 text-sm">
                    <p><a class="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Pricing</a></p>
                    <p><a class="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Docs</a></p>
                    <p><a class="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Download</a></p>
                    </div>
                </div>
                <!-- End Col -->

                <div>
                    <h3 class="text-xs font-semibold text-foreground uppercase">Resources</h3>

                    <div class="mt-3 grid space-y-3 text-sm">
                    <p><a class="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Community</a></p>
                    <p><a class="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Help & Support</a></p>
                    <p><a class="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">eBook</a></p>
                    </div>
                </div>
                <!-- End Col -->

                <div>
                    <h3 class="text-xs font-semibold text-foreground uppercase">Developers</h3>

                    <div class="mt-3 grid space-y-3 text-sm">
                    <p><a class="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Api</a></p>
                    <p><a class="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Status</a></p>
                    <p><a class="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">GitHub</a></p>
                    </div>
                </div>
                <!-- End Col -->
                </div>
            </div>
            <!-- End Grid -->

            <div class="pt-3 border-t border-line-3 dark:border-line-1 mx-0">
                <div class="flex flex-row justify-center items-center gap-3 px-4 sm:px-6 lg:px-8">
                <p class="text-xs sm:text-sm text-muted-foreground-2">
                    <!-- © 2026 Saúde Digital. -->
                    © 2026 Saúde Digital - Todos os direitos reservados.
                </p>

                <!-- <div class="space-x-4 text-sm">
                    <a class="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Terms</a>
                    <a class="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Privacy</a>
                    <a class="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Status</a>
                </div> -->
                </div>
            </div>
        </footer>
    `;
}

export default MainFooter;
