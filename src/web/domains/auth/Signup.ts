import AuthSidebar from "@/src/web/layouts/partials/AuthSidebar.ts";
import AuthLayout from "@/src/web/layouts/AuthLayout.ts";
import { Context } from "hono";
import { html } from "hono/html";

export default (c: Context) => {
    return c.html(
        AuthLayout({
            title: "Criar conta",
            sidebar: AuthSidebar({
                titulo: "Ponto de encontro para Pacientes, Médicos e Instituições.",
                rodape: "Jamais compartilhe seu acesso."
            }),
            children: html`
                <!-- Content -->
                <div class="min-h-full px-5 bg-background-1">
                    <div class="min-h-full sm:w-md flex flex-col justify-center mx-auto space-y-5 py-8" x-data="SignupData">
                        <!-- Title -->
                        <div class="text-center">
                            <div class="mb-4 flex justify-center items-center">
                                <img src="/assets/img/logo-color.png" alt="" class="dark:hidden h-[35px] sm:h-[42px] w-auto" width="60" height="55">
                                <img src="/assets/img/favicon.png" alt="" class="hidden dark:block h-[35px] sm:h-[42px] w-auto" width="60" height="55">
                            </div>
                            <h1 class="text-xl sm:text-2xl font-semibold text-foreground">Crie sua conta</h1>
                            <p class="mt-1 text-sm text-muted-foreground-1">O ponto de encontro para Pacientes, Médicos e Instituições.</p>
                        </div>
                        <!-- End Title -->

                        <!-- Checkbox Grid -->
                        <div class="grid grid-cols-3 gap-3">
                            <!-- Checkbox -->
                            <label for="hs-pro-signup-perfil1" class="p-2 sm:p-3 text-xs flex flex-col justify-center items-center sm:text-[13px] text-center bg-layer text-layer-foreground border border-layer-line has-checked:border-primary-checked has-checked:ring-1 has-checked:ring-primary-checked cursor-pointer rounded-lg">
                                <input type="radio" id="hs-pro-signup-perfil1" class="hidden" value="paciente" name="hs-pro-signup-perfil" x-model="perfil" checked>
                                <svg class="shrink-0 size-5 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg><span class="block mt-2">Paciente</span>
                            </label>
                            <!-- End Checkbox -->
                            <!-- Checkbox -->
                            <label for="hs-pro-signup-perfil2" class="p-2 sm:p-3 text-xs flex flex-col justify-center items-center sm:text-[13px] text-center bg-layer text-layer-foreground border border-layer-line has-checked:border-primary-checked has-checked:ring-1 has-checked:ring-primary-checked cursor-pointer rounded-lg">
                                <input type="radio" id="hs-pro-signup-perfil2" class="hidden" value="medico" name="hs-pro-signup-perfil" x-model="perfil">
                                <svg class="shrink-0 size-5 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg><span class="block mt-2">Médico</span>
                            </label>
                            <!-- End Checkbox -->
                            <!-- Checkbox -->
                            <label for="hs-pro-signup-perfil3" class="p-2 sm:p-3 text-xs flex flex-col justify-center items-center sm:text-[13px] text-center bg-layer text-layer-foreground border border-layer-line has-checked:border-primary-checked has-checked:ring-1 has-checked:ring-primary-checked cursor-pointer rounded-lg">
                                <input type="radio" id="hs-pro-signup-perfil3" class="hidden" value="instituicao" name="hs-pro-signup-perfil" x-model="perfil">
                                <svg class="shrink-0 size-5 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg><span class="block mt-2">Instituição</span>
                            </label>
                            <!-- End Checkbox -->
                        </div>
                        <!-- End Checkbox Grid -->

                        <form>
                            <div class="space-y-3">
                                <div>
                                    <label for="hs-pro-signup-nome" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">Nome completo:</label>
                                    <input type="text" id="hs-pro-signup-nome" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="Informe seu nome (evite abreviações)">
                                </div>
                                <div x-show="perfil === 'instituicao'" x-cloak>
                                    <label for="hs-pro-signup-instituicao-nome" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">Nome da Instituição:</label>
                                    <input type="text" id="hs-pro-signup-instituicao-nome" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="Informe o nome da empresa">
                                </div>
                                <div x-show="perfil !== 'instituicao'" x-cloak class="space-y-3">
                                <div>
                                    <label for="hs-pro-signup-nascimento" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">Data de nascimento:</label>
                                    <input type="text" inputmode="numeric" id="hs-pro-signup-nascimento" x-mask="99/99/9999" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="DD/MM/AAAA">
                                </div>
                                <div>
                                    <label for="hs-pro-signup-cpf" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">CPF:</label>
                                    <input type="text" inputmode="numeric" id="hs-pro-signup-cpf" x-mask="999.999.999-99" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="000.000.000-00">
                                </div>
                                <div>
                                    <label for="hs-pro-signup-celular" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">Celular:</label>
                                    <input type="text" inputmode="numeric" id="hs-pro-signup-celular" x-mask:dynamic="$input.length <= 14 ? '(99) 9999-9999' : '(99) 99999-9999'" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="(00) 00000-0000">
                                </div>
                                <div x-show="perfil === 'medico'" x-cloak>
                                    <p class="mb-1 pl-0.5 text-sm font-medium text-foreground">Conselho:</p>
                                    <div class="flex gap-2">
                                        <div class="w-24 shrink-0 relative">
                                            <label for="hs-pro-signup-conselho-tipo" class="sr-only">Tipo do conselho</label>
                                            <select id="hs-pro-signup-conselho-tipo" class="hidden" data-hs-select='{
                                              "placeholder": "Tipo",
                                              "toggleTag": "<button type=\\"button\\" aria-expanded=\\"false\\"></button>",
                                              "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 sm:py-2.5 ps-3 pe-7 flex items-center w-full cursor-pointer bg-layer border border-layer-line text-layer-foreground rounded-lg text-start sm:text-sm focus:outline-hidden focus:border-primary-focus focus:ring-primary-focus",
                                              "dropdownClasses": "mt-2 z-50 w-full min-w-20 max-h-72 p-1 space-y-0.5 overflow-hidden overflow-y-auto bg-select border border-select-line rounded-xl shadow-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb",
                                              "optionClasses": "hs-selected:bg-select-item-active py-2 px-3 w-full text-sm text-select-item-foreground cursor-pointer hover:bg-select-item-hover rounded-lg focus:outline-hidden focus:bg-select-item-focus",
                                              "extraMarkup": "<div class=\\"absolute top-1/2 inset-e-2 -translate-y-1/2 pointer-events-none\\"><svg class=\\"shrink-0 size-4 text-muted-foreground-1\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"m6 9 6 6 6-6\\"/></svg></div>"
                                            }'>
                                              <option value=""></option>
                                              <option value="CRM">CRM</option>
                                              <option value="CRO">CRO</option>
                                              <option value="CRMV">CRMV</option>
                                            </select>
                                        </div>
                                        <div class="w-20 shrink-0 relative">
                                            <label for="hs-pro-signup-conselho-uf" class="sr-only">UF do conselho</label>
                                            <select id="hs-pro-signup-conselho-uf" class="hidden" data-hs-select='{
                                              "placeholder": "UF",
                                              "toggleTag": "<button type=\\"button\\" aria-expanded=\\"false\\"></button>",
                                              "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 sm:py-2.5 ps-3 pe-7 flex items-center w-full cursor-pointer bg-layer border border-layer-line text-layer-foreground rounded-lg text-start sm:text-sm focus:outline-hidden focus:border-primary-focus focus:ring-primary-focus",
                                              "dropdownClasses": "mt-2 z-50 w-full min-w-16 max-h-72 p-1 space-y-0.5 overflow-hidden overflow-y-auto bg-select border border-select-line rounded-xl shadow-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb",
                                              "optionClasses": "hs-selected:bg-select-item-active py-2 px-3 w-full text-sm text-select-item-foreground cursor-pointer hover:bg-select-item-hover rounded-lg focus:outline-hidden focus:bg-select-item-focus",
                                              "extraMarkup": "<div class=\\"absolute top-1/2 inset-e-2 -translate-y-1/2 pointer-events-none\\"><svg class=\\"shrink-0 size-4 text-muted-foreground-1\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"m6 9 6 6 6-6\\"/></svg></div>"
                                            }'>
                                              <option value=""></option>
                                              <option value="AC">AC</option>
                                              <option value="AL">AL</option>
                                              <option value="AP">AP</option>
                                              <option value="AM">AM</option>
                                              <option value="BA">BA</option>
                                              <option value="CE">CE</option>
                                              <option value="DF">DF</option>
                                              <option value="ES">ES</option>
                                              <option value="GO">GO</option>
                                              <option value="MA">MA</option>
                                              <option value="MT">MT</option>
                                              <option value="MS">MS</option>
                                              <option value="MG">MG</option>
                                              <option value="PA">PA</option>
                                              <option value="PB">PB</option>
                                              <option value="PR">PR</option>
                                              <option value="PE">PE</option>
                                              <option value="PI">PI</option>
                                              <option value="RJ">RJ</option>
                                              <option value="RN">RN</option>
                                              <option value="RS">RS</option>
                                              <option value="RO">RO</option>
                                              <option value="RR">RR</option>
                                              <option value="SC">SC</option>
                                              <option value="SP">SP</option>
                                              <option value="SE">SE</option>
                                              <option value="TO">TO</option>
                                            </select>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <label for="hs-pro-signup-conselho-codigo" class="sr-only">Código do conselho</label>
                                            <input type="text" id="hs-pro-signup-conselho-codigo" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="Código">
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label for="hs-pro-signup-senha" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">Senha:</label>
                                    <div class="relative">
                                        <input id="hs-pro-signup-senha" type="password" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="***********">
                                        <button type="button" data-hs-toggle-password='{ "target": "#hs-pro-signup-senha" }' class="absolute inset-y-0 inset-e-0 flex items-center z-20 px-3 cursor-pointer text-muted-foreground rounded-e-md hover:text-primary-hover focus:outline-hidden focus:text-primary-focus">
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
                                    <label for="hs-pro-signup-confirmar" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">Confirmar senha:</label>
                                    <div class="relative">
                                        <input id="hs-pro-signup-confirmar" type="password" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="***********">
                                        <button type="button" data-hs-toggle-password='{ "target": "#hs-pro-signup-confirmar" }' class="absolute inset-y-0 inset-e-0 flex items-center z-20 px-3 cursor-pointer text-muted-foreground rounded-e-md hover:text-primary-hover focus:outline-hidden focus:text-primary-focus">
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
                                <div class="flex items-center">
                                    <input type="checkbox" id="hs-pro-signup-termos" class="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none">
                                    <label for="hs-pro-signup-termos" class="ms-3 text-sm text-muted-foreground-1">
                                        Eu concordo com os <a class="text-primary decoration-1 hover:underline font-medium focus:outline-hidden focus:underline" href="#">Termos de Uso</a> e a <a class="text-primary decoration-1 hover:underline font-medium focus:outline-hidden focus:underline" href="#">Política de Privacidade</a>.
                                    </label>
                                </div>
                                </div>
                                <div x-show="perfil === 'instituicao'" x-cloak class="space-y-3">
                                    <div>
                                        <label for="hs-pro-signup-instituicao-telefone" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">Telefone:</label>
                                        <input type="text" inputmode="numeric" id="hs-pro-signup-instituicao-telefone" x-mask:dynamic="$input.length <= 14 ? '(99) 9999-9999' : '(99) 99999-9999'" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="(00) 00000-0000">
                                    </div>
                                    <div>
                                        <label for="hs-pro-signup-instituicao-email" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">E-mail:</label>
                                        <input type="email" id="hs-pro-signup-instituicao-email" class="py-2 sm:py-2.5 px-3 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" placeholder="Informe seu melhor e-mail">
                                    </div>
                                    <div>
                                        <label for="hs-pro-signup-instituicao-contato" class="block mb-1 pl-0.5 text-sm font-medium text-foreground">Forma de contato:</label>
                                        <select id="hs-pro-signup-instituicao-contato" class="hidden" data-hs-select='{
                                          "placeholder": "Selecione",
                                          "toggleTag": "<button type=\\"button\\" aria-expanded=\\"false\\"></button>",
                                          "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 sm:py-2.5 ps-3 pe-7 flex items-center w-full cursor-pointer bg-layer border border-layer-line text-layer-foreground rounded-lg text-start sm:text-sm focus:outline-hidden focus:border-primary-focus focus:ring-primary-focus",
                                          "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 overflow-hidden overflow-y-auto bg-select border border-select-line rounded-xl shadow-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb",
                                          "optionClasses": "hs-selected:bg-select-item-active py-2 px-3 w-full text-sm text-select-item-foreground cursor-pointer hover:bg-select-item-hover rounded-lg focus:outline-hidden focus:bg-select-item-focus",
                                          "extraMarkup": "<div class=\\"absolute top-1/2 inset-e-2 -translate-y-1/2 pointer-events-none\\"><svg class=\\"shrink-0 size-4 text-muted-foreground-1\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"m6 9 6 6 6-6\\"/></svg></div>"
                                        }'>
                                          <option value=""></option>
                                          <option value="telefone">Telefone</option>
                                          <option value="email">E-mail</option>
                                          <option value="whatsapp">WhatsApp</option>
                                        </select>
                                    </div>
                                    <div class="pt-3">
                                        <button type="button" class="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none">SOLICITAR CONTATO</button>
                                    </div>
                                </div>
                                <button type="button" x-show="perfil !== 'instituicao'" x-cloak class="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none">CRIAR CONTA</button>
                            </div>
                        </form>

                        <p x-show="perfil !== 'instituicao'" x-cloak class="text-sm text-muted-foreground-1 text-center mb-1">
                            <span>Já tem uma conta? </span>
                            <a class="inline-flex items-center gap-x-0 text-sm text-primary decoration-1 hover:underline font-medium focus:outline-hidden focus:underline" href="/login">
                                <span>Entrar</span>
                            </a>
                        </p>
                    </div>
                </div>
                <!-- End Content -->
            `
        })
    );
}
