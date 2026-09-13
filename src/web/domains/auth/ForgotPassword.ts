import AuthSidebar from "@/src/web/layouts/partials/AuthSidebar.ts";
import AuthLayout from "@/src/web/layouts/AuthLayout.ts";
import { Context } from "hono";
import { html } from "hono/html";

export default (c: Context) => {
    return c.html(
        AuthLayout({
            title: "Esqueci minha senha",
            sidebar: AuthSidebar({
                titulo: "Ponto de encontro para Pacientes, Médicos e Instituições.",
                rodape: "Jamais compartilhe seu acesso."
            }),
            children: html`
                <!-- Content -->
                <div class="h-full px-5 bg-background-1">
                    <div class="min-h-full sm:w-md flex flex-col justify-center mx-auto space-y-5 py-8" x-data="ForgotPasswordData">
                        <!-- Forgot Password Details -->
                        <div class="space-y-8" x-show="step === 'request'">
                            <div class="text-center">
                                <div class="mb-4 flex justify-center items-center">
                                    <img src="/assets/img/logo-color.png" alt="" class="dark:hidden h-[35px] sm:h-[42px] w-auto" width="60" height="55">
                                    <img src="/assets/img/favicon.png" alt="" class="hidden dark:block h-[35px] sm:h-[42px] w-auto" width="60" height="55">
                                </div>
                                <h1 class="font-medium text-xl text-foreground">
                                    Redefinir senha
                                </h1>
                                <p class="mt-1 text-sm text-muted-foreground-1">
                                    Enviaremos um código para o seu e-mail se ele existir.
                                </p>
                            </div>
                            <div class="space-y-3">
                                <!-- Input -->
                                <div>
                                    <label for="hs-pro-fp-email" class="sr-only">
                                        E-mail
                                    </label>
                                    <input id="hs-pro-fp-email" type="email" x-model="email" class="py-3 px-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="Informe seu e-mail ou CPF">
                                </div>
                                <!-- End Input -->
                                <div class="space-y-4">
                                    <button type="button" @click="sendResetCode" class="py-3 px-4 mt-1 w-full inline-flex justify-center items-center gap-x-2 sm:text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-primary-focus">
                                        Enviar
                                    </button>
                                    <p class="text-center text-sm text-muted-foreground-1">
                                        <span class="mr-2">Lembrou sua senha?</span>
                                        <a class="inline-flex items-center gap-x-0 text-sm text-primary decoration-1 hover:underline font-medium focus:outline-hidden focus:underline" href="/login">
                                            <span>Entrar</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- End Forgot Password Details -->

                        <!-- Verify Email -->
                        <div class="space-y-5" x-show="step === 'verify'" x-cloak>
                            <!-- Title -->
                            <div>
                                <div class="mb-4 flex justify-center items-center">
                                    <img src="/assets/img/logo-color.png" alt="" class="dark:hidden h-[35px] sm:h-[42px] w-auto" width="60" height="55">
                                    <img src="/assets/img/favicon.png" alt="" class="hidden dark:block h-[35px] sm:h-[42px] w-auto" width="60" height="55">
                                </div>
                                <h1 class="text-xl sm:text-2xl font-semibold text-foreground text-center">
                                    Confira seu e-mail
                                </h1>
                                <p class="mt-1 text-sm text-muted-foreground-1 text-center">
                                    <span>Enviamos um código para o seu endereço de e-mail abaixo</span>
                                </p>
                                <p class="mt-1 text-sm text-muted-foreground-1 text-center">
                                    <span class="font-semibold text-foreground" x-text="email"></span>
                                </p>
                                <p class="text-sm text-muted-foreground-1 text-center mt-4">
                                    <span class="mr-1">Já recebeu seu código?</span>
                                </p>
                            </div>
                            <!-- End Title -->
                            <form class=" text-center">
                                <button type="button" @click="goToCodeStep" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-1 focus:ring-primary-focus">
                                    Continuar
                                </button>
                            </form>
                            <p class="text-sm text-muted-foreground-1 text-center">
                                <span class="mr-1">Não recebeu o e-mail?</span>
                                <a class="inline-flex items-center gap-x-1 text-sm text-primary decoration-1 hover:underline font-medium focus:outline-hidden focus:underline" href="/forgot-password">
                                    Tentar novamente
                                </a>
                            </p>
                        </div>
                        <!-- End Verify Email -->

                        <!-- 2-Step Verification -->
                        <div class="space-y-5 text-center" x-show="step === 'code'" x-cloak>
                            <!-- Title -->
                            <div>
                                <div class="mb-4 flex justify-center items-center">
                                    <img src="/assets/img/logo-color.png" alt="" class="dark:hidden h-[35px] sm:h-[42px] w-auto" width="60" height="55">
                                    <img src="/assets/img/favicon.png" alt="" class="hidden dark:block h-[35px] sm:h-[42px] w-auto" width="60" height="55">
                                </div>
                                <h1 class="text-xl sm:text-2xl font-semibold text-foreground">
                                    Verificação em duas etapas
                                </h1>
                                <p class="mt-1 text-sm text-muted-foreground-1">
                                    Enviamos um código de verificação para o seu e-mail.
                                </p>
                                <p class="text-sm text-muted-foreground-1">
                                    Digite o código recebido no campo abaixo.
                                </p>
                            </div>
                            <!-- End Title -->
                            <form>
                                <div class="space-y-2">
                                    <div class="flex justify-center gap-x-2" data-hs-pin-input>
                                        <input type="text" class="py-2 px-3 block size-12 bg-layer border-layer-line text-center rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" data-hs-pin-input-item>
                                        <input type="text" class="py-2 px-3 block size-12 bg-layer border-layer-line text-center rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" data-hs-pin-input-item>
                                        <input type="text" class="py-2 px-3 block size-12 bg-layer border-layer-line text-center rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" data-hs-pin-input-item>
                                        <input type="text" class="py-2 px-3 block size-12 bg-layer border-layer-line text-center rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" data-hs-pin-input-item>
                                        <input type="text" class="py-2 px-3 block size-12 bg-layer border-layer-line text-center rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" data-hs-pin-input-item>
                                        <input type="text" class="py-2 px-3 block size-12 bg-layer border-layer-line text-center rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" data-hs-pin-input-item>
                                    </div>
                                    <div class="pt-2 flex justify-center">
                                        <a href="/reset-password" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-1 focus:ring-primary-focus">
                                            Confirmar
                                        </a>
                                    </div>
                                </div>
                            </form>
                            <p class="text-sm text-muted-foreground-1">
                                <span class="mr-1">Não recebeu o e-mail?</span>
                                <a class="inline-flex items-center gap-x-1 text-sm text-primary decoration-1 hover:underline font-medium focus:outline-hidden focus:underline" href="/forgot-password">
                                    Tentar novamente
                                </a>
                            </p>
                        </div>
                        <!-- End 2-Step Verification -->
                    </div>
                </div>
                <!-- End Content -->
            `
        })
    );
}
