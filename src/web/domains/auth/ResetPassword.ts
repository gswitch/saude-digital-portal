import AuthSidebar from "@/src/web/layouts/partials/AuthSidebar.ts";
import AuthLayout from "@/src/web/layouts/AuthLayout.ts";
import { Context } from "hono";
import { html } from "hono/html";

export default (c: Context) => {
    return c.html(
        AuthLayout({
            title: "Nova senha",
            sidebar: AuthSidebar({
                titulo: "Ponto de encontro para Pacientes, Médicos e Instituições.",
                rodape: "Jamais compartilhe seu acesso."
            }),
            children: html`
                <!-- Content -->
                <div class="h-full px-5 bg-background-1">
                    <div class="min-h-full sm:w-md flex flex-col justify-center mx-auto space-y-5 py-8" x-data="ResetPasswordData">
                        <!-- Reset Password Details -->
                        <div class="space-y-8" x-show="step === 'form'">
                            <div class="text-center">
                                <div class="mb-4 flex justify-center items-center">
                                    <span class="flex justify-center items-center size-16 sm:size-20 rounded-full bg-layer border border-layer-line text-muted-foreground">
                                        <svg class="shrink-0 size-8 sm:size-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M18 20a6 6 0 0 0-12 0" />
                                            <circle cx="12" cy="10" r="4" />
                                        </svg>
                                    </span>
                                </div>
                                <h1 class="text-xl sm:text-2xl font-semibold text-foreground">Defina sua nova senha</h1>
                                <p class="mt-1 text-sm text-muted-foreground-1">Escolha uma senha forte para proteger sua conta.</p>
                            </div>

                            <form>
                                <div class="space-y-3">
                                    <div>
                                        <label for="hs-pro-rp-password" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">Nova senha:</label>
                                        <div class="relative">
                                            <input id="hs-pro-rp-password" type="password" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="***********">
                                            <button type="button" data-hs-toggle-password='{ "target": "#hs-pro-rp-password" }' class="absolute inset-y-0 inset-e-0 flex items-center z-20 px-3 cursor-pointer text-muted-foreground rounded-e-md hover:text-primary-hover focus:outline-hidden focus:text-primary-focus">
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
                                    <div>
                                        <label for="hs-pro-rp-confirm-password" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">Confirmar nova senha:</label>
                                        <div class="relative">
                                            <input id="hs-pro-rp-confirm-password" type="password" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="***********">
                                            <button type="button" data-hs-toggle-password='{ "target": "#hs-pro-rp-confirm-password" }' class="absolute inset-y-0 inset-e-0 flex items-center z-20 px-3 cursor-pointer text-muted-foreground rounded-e-md hover:text-primary-hover focus:outline-hidden focus:text-primary-focus">
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
                                    <button type="button" @click="resetPassword" class="py-2.5 px-3 mt-1 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none">Redefinir Senha</button>
                                </div>
                            </form>

                            <p class="text-sm text-muted-foreground-1 text-center mb-1">
                                <span class="mr-2">Lembrou da senha?</span>
                                <a class="inline-flex items-center gap-x-0 text-sm text-primary decoration-1 hover:underline font-medium focus:outline-hidden focus:underline" href="/login">
                                    <span>Entrar</span>
                                </a>
                            </p>
                        </div>
                        <!-- End Reset Password Details -->

                        <!-- Reset Password Success -->
                        <div class="space-y-8 text-center" x-show="step === 'success'" x-cloak>
                            <div>
                                <div class="mb-4 flex justify-center items-center">
                                    <span class="flex justify-center items-center size-16 sm:size-20 rounded-full bg-layer border border-layer-line text-muted-foreground">
                                        <svg class="shrink-0 size-8 sm:size-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M18 20a6 6 0 0 0-12 0" />
                                            <circle cx="12" cy="10" r="4" />
                                        </svg>
                                    </span>
                                </div>
                                <h1 class="text-xl sm:text-2xl font-semibold text-foreground">Pronto!</h1>
                                <p class="mt-1 text-sm text-muted-foreground-1">Sua senha foi alterada, agora você já pode entrar com a nova senha.</p>
                            </div>

                            <a href="/login" class="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none">Entrar</a>
                        </div>
                        <!-- End Reset Password Success -->
                    </div>
                </div>
                <!-- End Content -->
            `
        })
    );
}
