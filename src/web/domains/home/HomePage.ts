import MainLayout from "@/src/web/layouts/MainLayout.ts";
import { Context } from "hono";
import { html } from "hono/html";

export default (c: Context) => {
    return c.html(
        MainLayout({
            title: "Portal de Entrega de Exames",
            children: html`
                <!-- HERO -->
                <div class="max-w-6xl px-4 pt-0 pb-10 mx-auto">
                    <div class="py-10 flex items-center justify-center">
                        <span class="inline-flex items-center py-1.5 px-5 rounded-full font-medium text-xs bg-black text-white dark:bg-layer dark:border dark:border-layer-line">
                            <svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                            <span class="mx-2 text-xs"> Nenhuma licença de uso é necessário </span>
                            <svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                        </span>
                    </div>

                    <div class="grid md:grid-cols-2 gap-12">
                        <div class="lg:w-3/4">
                            <h2 class="sm:hidden text-xl text-foreground text-center mb-5"> Portal de Entrega de Exames </h2>

                            <h2 class="text-2xl text-foreground font-bold lg:text-3xl mb-2"> Conectando pacientes, profissionais e instituições de saúde. </h2>

                            <p class="text-foreground"> Nosso objetivo é organizar registros clínicos — exames, consultas e procedimentos — oferecendo mais facilidade, segurança e economia. </p>

                            <p class="mt-5">
                                <a href="/login" class="py-2 px-3 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary-hover focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                    <span>Criar Conta</span>
                                </a>

                                <a class="group py-2 px-3 md:py-2.5 md:px-4 inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg border border-transparent text-foreground disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden" href="/login">
                                    Já tenho minha conta
                                    <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path class="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition" d="M5 12h14"/><path class="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition" d="m12 5 7 7-7 7"/></svg>
                                </a>
                            </p>
                        </div>

                        <div class="space-y-6 lg:space-y-8">
                            <div class="flex gap-x-5 sm:gap-x-8">
                                <span class="shrink-0 inline-flex justify-center items-center size-11 rounded-full bg-layer border border-layer-line text-layer-foreground shadow-2xs mx-auto">
                                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                                </span>
                                <div class="grow">
                                    <h3 class="text-base sm:text-lg font-semibold text-foreground">
                                        Pacientes
                                    </h3>
                                    <p class="mt-1 text-muted-foreground-2">
                                        Um jeito novo de organizar seus registros clínicos — exames, consultas, procedimentos, anotações, receitas e muito mais. Tudo associado ao seu CPF e organizado em linha do tempo.
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-x-5 sm:gap-x-8">
                                <span class="shrink-0 inline-flex justify-center items-center size-11 rounded-full bg-layer border border-layer-line text-layer-foreground shadow-2xs mx-auto">
                                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stethoscope-icon lucide-stethoscope"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>
                                </span>
                                <div class="grow">
                                    <h3 class="text-base sm:text-lg font-semibold text-foreground">
                                        Profissionais
                                    </h3>
                                    <p class="mt-1 text-muted-foreground-2">
                                        Acompanhe seus pacientes de perto — exames, consultas, procedimentos, anotações, receitas e muito mais..
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-x-5 sm:gap-x-8">
                                <span class="shrink-0 inline-flex justify-center items-center size-11 rounded-full bg-layer border border-layer-line text-layer-foreground shadow-2xs mx-auto">
                                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hospital-icon lucide-hospital"><path d="M12 7v4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M14 9h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></svg>
                                </span>
                                <div class="grow">
                                    <h3 class="text-base sm:text-lg font-semibold text-foreground">
                                        Instituições
                                    </h3>
                                    <p class="mt-1 text-muted-foreground-2">
                                        O seu portal de entrega de exames está aqui! Ofereça comodidade e segurança aos seus pacientes, além de reduzir custos com impressões desnecessárias.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END HERO -->

                <!-- STATS -->
                <div class="max-w-6xl px-0 py-4 mx-auto border-y border-line-3 dark:border-line-1">
                    <div class="flex justify-center">
                        <div class="w-full max-w-3xl">
                            <div class="grid gap-0 grid-cols-3 text-center">
                                <div>
                                    <p class="text-2xl font-semibold text-foreground">5.2k</p>
                                    <p class="mt-1 text-muted-foreground-1">Pacientes</p>
                                </div>

                                <div>
                                    <p class="text-2xl font-semibold text-foreground">1.5k</p>
                                    <p class="mt-1 text-muted-foreground-1">Profissionais</p>
                                </div>

                                <div>
                                    <p class="text-2xl font-semibold text-foreground">+45%</p>
                                    <p class="mt-1 text-muted-foreground-1">Redução de Custos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END STATS -->

                <!-- FEATURES -->
                <div class="max-w-4xl mx-auto px-4 pt-10">
                    <div class="mb-8 max-w-xl mx-auto text-center">
                        <h2 class="font-semibold text-2xl md:text-3xl text-foreground"> Desde 2020, ajudando as instituições de saúde na entrega dos exames. </h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="flex gap-5 p-6 rounded-xl bg-stone-100 border border-stone-300 dark:bg-transparent dark:border-stone-800">
                            <svg class="shrink-0 size-6 md:size-8 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                                <path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
                                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                                <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                                <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                                <path d="M12 13h4"></path>
                                <path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
                                <path d="M12 8h8"></path>
                                <path d="M16 8V5a2 2 0 0 1 2-2"></path>
                                <circle cx="16" cy="13" r=".5"></circle>
                                <circle cx="18" cy="3" r=".5"></circle>
                                <circle cx="20" cy="21" r=".5"></circle>
                                <circle cx="20" cy="8" r=".5"></circle>
                            </svg>

                            <div class="grow">
                                <p class="font-medium text-foreground">
                                    Acesso rápido e unificado
                                </p>
                                <p class="mt-1 text-muted-foreground-1">
                                    O CPF é a fonte única da verdade, tudo é associado a ele e organizado para facilitar a experiência dos usuários.
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-5 p-6 rounded-xl bg-stone-100 border border-stone-300 dark:bg-transparent dark:border-stone-800">
                            <svg class="shrink-0 size-6 md:size-8 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                <path d="M4 22h16"></path>
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                            </svg>

                            <div class="grow">
                                <p class="font-medium text-foreground">
                                    Computador, tablet ou celular
                                </p>
                                <p class="mt-1 text-muted-foreground-1">
                                    Acesse o portal de qualquer dispositivo, cuidamos disso com carinho para que os usuários tenham a melhor experiência.
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-5 p-6 rounded-xl bg-stone-100 border border-stone-300 dark:bg-transparent dark:border-stone-800">
                            <svg class="shrink-0 size-6 md:size-8 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                <path d="M16 2v4"></path>
                                <path d="M8 2v4"></path>
                                <path d="M3 10h5"></path>
                                <path d="M17.5 17.5 16 16.3V14"></path>
                                <circle cx="16" cy="16" r="6"></circle>
                            </svg>

                            <div class="grow">
                                <p class="font-medium text-foreground">
                                    Redução com deslocamento
                                </p>
                                <p class="mt-1 text-muted-foreground-1">
                                    O paciente não precisa se deslocar até a instituição para retirar seu exame, reduzindo tempo, custos de transporte e filas.
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-5 p-6 rounded-xl bg-stone-100 border border-stone-300 dark:bg-transparent dark:border-stone-800">
                            <svg class="shrink-0 size-6 md:size-8 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path>
                                <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path>
                                <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path>
                                <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path>
                            </svg>

                            <div class="grow">
                                <p class="font-medium text-foreground">
                                    Redução de custos operacionais
                                </p>
                                <p class="mt-1 text-muted-foreground-1">
                                    Não há mais motivos para — impressão de laudos, envelopes, armazenamento físico, logística de documentos e fluxo na recepção.
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-5 p-6 rounded-xl bg-stone-100 border border-stone-300 dark:bg-transparent dark:border-stone-800">
                            <svg class="shrink-0 size-6 md:size-8 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                            </svg>

                            <div class="grow">
                                <p class="font-medium text-foreground">
                                    Maior segurança e rastreabilidade
                                </p>
                                <p class="mt-1 text-muted-foreground-1">
                                    Maior controle no acesso aos exames por meio de autenticação, além de registrar quem acessou, quando acessou e quais documentos foram visualizados.
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-5 p-6 rounded-xl bg-stone-100 border border-stone-300 dark:bg-transparent dark:border-stone-800">
                            <svg class="shrink-0 size-6 md:size-8 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <path d="M12 17h.01"></path>
                            </svg>

                            <div class="grow">
                                <p class="font-medium text-foreground">
                                    Melhora da experiência do paciente
                                </p>
                                <p class="mt-1 text-muted-foreground-1">
                                    Tudo associado ao seu CPF e organizado em uma linha do tempo, uma visão simples de todo seu histórico de registros clínicos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END FEATURES -->

                <!-- STEPS ACCOUNT -->
                <div class="max-w-4xl mx-auto px-4 pt-10">
                    <div class="mb-8 max-w-xl mx-auto text-center">
                        <h2 class="font-semibold text-2xl md:text-3xl text-foreground"> Em apenas três passos, sua instituição está pronta para entregar os exames aos seus pacientes </h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div class="flex gap-5 p-6 rounded-xl bg-stone-100 border border-stone-300 dark:bg-transparent dark:border-stone-800">
                            <svg class="shrink-0 size-6 md:size-8 mt-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-plus-icon lucide-mail-plus"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M19 16v6"/><path d="M16 19h6"/></svg>

                            <div class="grow">
                                <p class="font-medium text-foreground">
                                    Crie uma Conta
                                </p>
                                <p class="mt-1 text-muted-foreground-1">
                                    Acompanhe no seu painel, o volume de exames publicados, índices de acessos, faturas e mais.
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-5 p-6 rounded-xl bg-stone-100 border border-stone-300 dark:bg-transparent dark:border-stone-800">
                            <svg class="shrink-0 size-6 md:size-8 mt-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>

                            <div class="grow">
                                <p class="font-medium text-foreground">
                                    Ativação do Serviço
                                </p>
                                <p class="mt-1 text-muted-foreground-1">
                                    Entraremos em contato para entender seu cenário e definir o melhor formato para envio dos exames.
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-5 p-6 rounded-xl bg-stone-100 border border-stone-300 dark:bg-transparent dark:border-stone-800">
                            <svg class="shrink-0 size-6 md:size-8 mt-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-upload-icon lucide-cloud-upload"><path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>

                            <div class="grow">
                                <p class="font-medium text-foreground">
                                    Publicação dos Exames
                                </p>
                                <p class="mt-1 text-muted-foreground-1">
                                    Uma vez recebido o exame, nós cuidamos do resto, para que o paciente tenha a melhora experiência.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END STEPS ACCOUNT -->

                <!-- Partners -->
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                    <div class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-4">
                        <h2 class="text-muted-foreground-2">Utilizamos o maior provedor de infraestrutura do mundo.</h2>
                    </div>

                    <div class="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24 mb-8">
                        <svg class="text-muted-foreground-1" xmlns="http://www.w3.org/2000/svg" width="121" height="60"><path d="M64.87 11.572l1.144.02 3.108-3.108.15-1.317c-2.47-2.197-5.72-3.534-9.277-3.534-6.44 0-11.876 4.382-13.486 10.318.34-.237 1.065-.06 1.065-.06l6.212-1.022s.32-.53.48-.497a7.76 7.76 0 0 1 10.605-.8z" fill="#ea4335"/><path d="M73.5 13.962a13.99 13.99 0 0 0-4.216-6.796l-4.402 4.402a7.75 7.75 0 0 1 2.895 6.039v.777c2.142 0 3.88 1.743 3.88 3.88s-1.743 3.88-3.88 3.88h-7.762l-.777.78v4.658l.777.773h7.762A10.11 10.11 0 0 0 77.86 22.265c-.004-3.436-1.736-6.48-4.37-8.303z" fill="#4285f4"/><path d="M52.234 32.362h7.76V26.15h-7.76a3.84 3.84 0 0 1-1.597-.347l-1.12.343-3.108 3.108-.272 1.05a9.96 9.96 0 0 0 6.098 2.06z" fill="#34a853"/><path d="M52.234 12.175A10.11 10.11 0 0 0 42.14 22.269a10.08 10.08 0 0 0 4 8.04l4.5-4.5a3.88 3.88 0 0 1-2.288-3.538c0-2.142 1.743-3.88 3.88-3.88a3.89 3.89 0 0 1 3.538 2.288l4.5-4.5c-1.846-2.43-4.76-4-8.04-4z" fill="#fbbc05"/><path d="M12 51.937c-2.12 0-3.94-.75-5.474-2.25s-2.3-3.304-2.3-5.408.765-3.908 2.3-5.408S9.883 36.62 12 36.62a7.32 7.32 0 0 1 5.249 2.11l-1.477 1.477a5.32 5.32 0 0 0-3.773-1.495c-1.53 0-2.83.54-3.896 1.627a5.41 5.41 0 0 0-1.597 3.941c0 1.546.53 2.857 1.597 3.94a5.25 5.25 0 0 0 3.896 1.627c1.558 0 2.845-.5 3.87-1.534.6-.6 1-1.5 1.14-2.635h-5.006v-2.092h7.044c.075.372.1.8.1 1.3 0 2.056-.603 3.686-1.813 4.895-1.372 1.435-3.15 2.15-5.345 2.15zm16.37-1.4c-.96.94-2.13 1.4-3.512 1.4s-2.554-.47-3.512-1.4-1.438-2.113-1.438-3.52.48-2.58 1.438-3.52 2.13-1.4 3.512-1.4 2.554.47 3.512 1.4 1.438 2.116 1.438 3.52-.48 2.58-1.438 3.52zm-5.474-1.38a2.63 2.63 0 0 0 1.963.849c.76 0 1.414-.282 1.963-.85s.822-1.28.822-2.14c0-.87-.27-1.588-.813-2.15s-1.198-.84-1.972-.84a2.64 2.64 0 0 0-1.972.84c-.543.56-.813 1.276-.813 2.15 0 .858.273 1.573.822 2.14zm16.273 1.38c-.96.94-2.13 1.4-3.512 1.4s-2.554-.47-3.512-1.4-1.438-2.113-1.438-3.52.48-2.58 1.438-3.52 2.13-1.4 3.512-1.4 2.554.47 3.512 1.4 1.438 2.116 1.438 3.52-.48 2.58-1.438 3.52zm-5.474-1.38a2.63 2.63 0 0 0 1.963.849c.76 0 1.414-.282 1.963-.85s.822-1.28.822-2.14c0-.87-.27-1.588-.813-2.15s-1.198-.84-1.972-.84a2.64 2.64 0 0 0-1.972.84c-.543.56-.813 1.276-.813 2.15 0 .858.273 1.573.822 2.14zm12.573 7.22c-1.095 0-2.017-.294-2.764-.88s-1.282-1.264-1.606-2.038l1.888-.783c.198.474.5.885.933 1.234s.94.522 1.552.522c.822 0 1.468-.25 1.933-.747s.7-1.216.7-2.15v-.7h-.075c-.6.747-1.477 1.122-2.596 1.122-1.258 0-2.36-.48-3.307-1.438a4.76 4.76 0 0 1-1.42-3.476 4.82 4.82 0 0 1 1.42-3.503c.945-.963 2.05-1.447 3.307-1.447.56 0 1.068.105 1.522.318s.813.474 1.074.783h.075V42.4h2.056v8.857c0 1.72-.438 3.004-1.318 3.86-.88.85-2.002 1.28-3.373 1.28zm.15-6.372a2.41 2.41 0 0 0 1.879-.849c.504-.567.756-1.273.756-2.122 0-.858-.252-1.576-.756-2.15a2.4 2.4 0 0 0-1.879-.858c-.76 0-1.408.288-1.942.858s-.804 1.288-.804 2.15c0 .846.267 1.555.804 2.122s1.183.85 1.942.85zM54.62 37.14v14.5h-2.167v-14.5zm5.94 14.796c-1.396 0-2.56-.474-3.494-1.42s-1.402-2.116-1.402-3.512c0-1.444.45-2.63 1.354-3.55a4.45 4.45 0 0 1 3.298-1.384c.597 0 1.153.108 1.663.327a3.92 3.92 0 0 1 1.27.84 5.84 5.84 0 0 1 .804.999 6.12 6.12 0 0 1 .486.972l.225.56L58.17 48.5c.5.996 1.3 1.495 2.392 1.495.996 0 1.807-.453 2.428-1.363l1.68 1.122c-.375.56-.903 1.065-1.588 1.513s-1.528.67-2.524.67zm-2.746-5.08l4.4-1.83c-.126-.312-.354-.564-.7-.756a2.26 2.26 0 0 0-1.14-.288c-.636 0-1.23.26-1.783.783s-.82 1.222-.795 2.092zm18.33 5.08c-1.97 0-3.62-.666-4.952-2s-2-2.995-2-4.988.666-3.656 2-4.988 2.983-2 4.952-2c2.017 0 3.656.73 4.913 2.185l-1.195 1.16c-.9-1.134-2.15-1.7-3.72-1.7-1.46 0-2.686.492-3.7 1.477s-1.504 2.272-1.504 3.866.5 2.884 1.504 3.87 2.233 1.477 3.7 1.477c1.606 0 2.977-.648 4.1-1.942l1.195 1.195a6.51 6.51 0 0 1-2.3 1.747 7.02 7.02 0 0 1-3.004.642zm8.556-.296h-1.72V38.263h1.72zm2.803-8.06c.885-.927 2-1.393 3.382-1.393s2.497.465 3.382 1.393 1.327 2.1 1.327 3.485-.44 2.557-1.327 3.485-2 1.393-3.382 1.393-2.497-.465-3.382-1.393-1.327-2.1-1.327-3.485.44-2.557 1.327-3.485zm1.28 5.883c.6.603 1.294.906 2.1.906s1.5-.303 2.1-.906.888-1.405.888-2.4-.297-1.798-.888-2.4-1.294-.906-2.1-.906-1.5.303-2.1.906-.888 1.405-.888 2.4.297 1.798.888 2.4zm16.32 2.177h-1.645v-1.27h-.075c-.26.435-.66.807-1.195 1.1s-1.1.46-1.7.46c-1.147 0-2.014-.348-2.605-1.047s-.888-1.633-.888-2.803v-5.606h1.72v5.324c0 1.708.753 2.56 2.26 2.56a2.1 2.1 0 0 0 1.738-.858 3.13 3.13 0 0 0 .672-1.981v-5.045h1.72v9.157zm5.828.297c-1.183 0-2.206-.468-3.064-1.402s-1.288-2.092-1.288-3.476.43-2.542 1.288-3.476 1.882-1.402 3.064-1.402c.696 0 1.324.15 1.88.447s.97.672 1.243 1.122h.075l-.075-1.27v-4.22h1.72v13.38h-1.645v-1.27h-.075c-.273.447-.687.822-1.243 1.122-.555.294-1.183.444-1.88.444zm.28-1.57a2.74 2.74 0 0 0 2.065-.897c.567-.597.85-1.402.85-2.4s-.282-1.813-.85-2.4a2.74 2.74 0 0 0-2.065-.897c-.798 0-1.483.303-2.056.906s-.858 1.405-.858 2.4.285 1.798.858 2.4a2.73 2.73 0 0 0 2.056.906z" fill="#5f6368"/></svg>
                    </div>
                </div>
                <!-- End Partners -->
            `
        })
    );
}
