import AuthSidebar from "@/src/web/layouts/partials/AuthSidebar.ts";
import AuthLayout from "@/src/web/layouts/AuthLayout.ts";
import { Context } from "hono";
import { html } from "hono/html";

export default (c: Context) => {
    return c.html(
        AuthLayout({
            title: "Login",
            sidebar: AuthSidebar({
                titulo: "Ponto de encontro para Pacientes, Médicos e Instituições.",
                rodape: "Jamais compartilhe seu acesso."
            }),
            children: html`
                <!-- Content -->
                <div class="h-full px-5 bg-background-1">
                    <div class="min-h-full sm:w-md flex flex-col justify-center mx-auto space-y-5 py-8">
                        <!-- Title -->
                        <div class="text-center">
                            <div class="mb-4 flex justify-center items-center">
                                <img src="/assets/img/logo-color.png" alt="" class="dark:hidden h-[35px] sm:h-[42px] w-auto" width="60" height="55">
                                <img src="/assets/img/favicon.png" alt="" class="hidden dark:block h-[35px] sm:h-[42px] w-auto" width="60" height="55">
                            </div>
                            <h1 class="text-xl sm:text-2xl font-semibold text-foreground">Acesse ou crie sua conta</h1>
                            <p class="mt-1 text-sm text-muted-foreground-1">O ponto de encontro para Pacientes, Médicos e Instituições.</p>
                        </div>
                        <!-- End Title -->

                        <!-- Button Group -->
                        <div class="flex flex-col sm:flex-row gap-2">
                            <button type="button" class="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-layer-focus">
                                <svg class="shrink-0 size-4" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4132_5805)">
                                        <path d="M32.2566 16.36C32.2566 15.04 32.1567 14.08 31.9171 13.08H16.9166V19.02H25.7251C25.5454 20.5 24.5866 22.72 22.4494 24.22L22.4294 24.42L27.1633 28.1L27.4828 28.14C30.5189 25.34 32.2566 21.22 32.2566 16.36Z" fill="#4285F4"/>
                                        <path d="M16.9166 32C21.231 32 24.8463 30.58 27.5028 28.12L22.4694 24.2C21.1111 25.14 19.3135 25.8 16.9366 25.8C12.7021 25.8 9.12677 23 7.84844 19.16L7.66867 19.18L2.71513 23L2.65521 23.18C5.2718 28.4 10.6648 32 16.9166 32Z" fill="#34A853"/>
                                        <path d="M7.82845 19.16C7.48889 18.16 7.28915 17.1 7.28915 16C7.28915 14.9 7.48889 13.84 7.80848 12.84V12.62L2.81499 8.73999L2.6552 8.81999C1.55663 10.98 0.937439 13.42 0.937439 16C0.937439 18.58 1.55663 21.02 2.63522 23.18L7.82845 19.16Z" fill="#FBBC05"/>
                                        <path d="M16.9166 6.18C19.9127 6.18 21.9501 7.48 23.0886 8.56L27.6027 4.16C24.8263 1.58 21.231 0 16.9166 0C10.6648 0 5.27181 3.6 2.63525 8.82L7.80851 12.84C9.10681 8.98 12.6821 6.18 16.9166 6.18Z" fill="#EB4335"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4132_5805">
                                            <rect width="32" height="32" fill="white" transform="translate(0.937439)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Entrar com Google
                            </button>
                            <button type="button" class="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-layer-focus">
                                <svg class="shrink-0 size-4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <radialGradient id="instagram-gradient-login" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 30) rotate(-55.3758) scale(35.6803)">
                                            <stop stop-color="#FFDD55"/>
                                            <stop offset="0.1" stop-color="#FFDD55"/>
                                            <stop offset="0.5" stop-color="#FF543E"/>
                                            <stop offset="1" stop-color="#C837AB"/>
                                        </radialGradient>
                                    </defs>
                                    <rect x="2" y="2" width="28" height="28" rx="7" fill="url(#instagram-gradient-login)"/>
                                    <path d="M16 10.667a5.333 5.333 0 1 0 0 10.666 5.333 5.333 0 0 0 0-10.666Zm0 8.8a3.467 3.467 0 1 1 0-6.934 3.467 3.467 0 0 1 0 6.934Z" fill="#fff"/>
                                    <circle cx="21.867" cy="10.133" r="1.267" fill="#fff"/>
                                </svg>
                                Entrar com Instagram
                            </button>
                        </div>
                        <!-- End Button Group -->

                        <div class="flex items-center text-xs text-muted-foreground uppercase before:flex-1 before:border-t before:border-line-2 before:me-6 after:flex-1 after:border-t after:border-line-2 after:ms-6">Ou</div>

                        <form>
                            <div class="space-y-3">
                                <div>
                                    <label for="hs-pro-dale" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">E-mail, CPF ou Protocolo:</label>
                                    <input type="email" id="hs-pro-dale" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="E-mail, CPF ou Protocolo">
                                </div>
                                <div>
                                    <div class="flex justify-between items-center mb-1 pl-0.5">
                                        <label for="hs-pro-dalp" class="block text-sm font-medium text-foreground">Senha:</label>
                                        <a class="inline-flex items-center gap-x-1.5 text-sm text-muted-foreground-2 hover:text-foreground decoration-1 hover:underline focus:outline-hidden focus:underline" href="/forgot-password">Esqueci minha senha</a>
                                    </div>
                                    <div class="relative">
                                        <input id="hs-pro-dalp" type="password" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="***********">
                                        <button type="button" data-hs-toggle-password='{ "target": "#hs-pro-dalp" }' class="absolute inset-y-0 inset-e-0 flex items-center z-20 px-3 cursor-pointer text-muted-foreground rounded-e-md hover:text-primary-hover focus:outline-hidden focus:text-primary-focus">
                                            <svg class="shrink-0 size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path class="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                                                <path class="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                                                <path class="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                                                <line class="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"/>
                                                <path class="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                                <circle class="hidden hs-password-active:block" cx="12" cy="12" r="3"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <a href="/patients" class="py-2.5 px-3 mt-1 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none">ENTRAR</a>
                            </div>
                        </form>

                        <p class="text-sm text-muted-foreground-1 text-center mb-1">
                            <span class="mr-1">Não tem uma conta? </span>
                            <a class="inline-flex items-center text-sm text-primary decoration-1 hover:underline font-medium focus:outline-hidden focus:underline" href="/signup">
                                <span>Cadastre-se agora!</span>
                            </a>
                        </p>
                        <p class="text-sm text-muted-foreground-1 font-semibold text-center mb-1">Grátis hoje e sempre!</p>
                    </div>
                </div>
                <!-- End Content -->
            `
        })
    );
}
