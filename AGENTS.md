# AGENTS.md

Saúde Digital - Portal de entrega de exames, voltado para o paciente, médico e instituições.

## Stack

**Backend:** 
- Deno + Hono 4.13 (com Deno.serve) + PostgreSQL (via postgres.js)
- Roteamento, páginas (hono/html) middlewares, serveStatic, workers e services
- Email (@neabyte/deno-mailer) sobre AWS SES (sa-east-1).

**Frontend:** 
- Aplicação SSR, HTML renderizado no servidor com template literals do hono/html;
- AlpineJS + Tailwind CSS 4 + lodash + Preline UI 5 (Design System);
- Utilize componentes e blocos existentes do Preline sempre que possível;
- Antes de criar um componente visual customizado, consulte o Preline MCP;
- Para seções completas de interface, preferir blocos existentes do Preline;
- Para componentes individuais, preferir componentes existentes do Preline;
- Preserve as classes Tailwind, atributos `data-hs-*` e inicializações JavaScript necessárias ao funcionamento do Preline;
- Adaptar o conteúdo e a estrutura do bloco às necessidades da aplicação, sem substituir desnecessariamente sua implementação por HTML/Tailwind criado manualmente;
- Manter consistência visual entre blocos utilizados na mesma tela;
- Quando um componente Preline possuir comportamento JavaScript, consultar sua documentação antes de implementar ou alterar o comportamento;

### Preline MCP

O agente deve utilizar o Preline MCP para descobrir e consultar componentes, blocos e documentação quando essa integração estiver disponível.

Ao implementar uma interface, o agente deve preferir o seguinte fluxo:
- Identificar o tipo de interface necessária;
- Pesquisar componentes/blocos Preline;
- Selecionar o bloco mais próximo da necessidade;
- Obter o código original através do Preline MCP;
- Adaptar o código ao projeto;
- Preservar comportamentos, atributos e scripts necessários;
- Validar visualmente a implementação.

**Distribuição:**
- Binário único `portal.exe` via `deno task build:exe`, com `public/` embutido.
- Em produção bastam `portal.exe` + `settings.json` na mesma pasta (o exe lê o `settings.json` ao lado dele, via `F.rootURL`) + variável de ambiente `PORTAL_KEY` (chave AES, 64 hex).
- Segredos só cifrados com `PORTAL_KEY`: credencial SMTP no código (`sendMail`), `DATABASE_PWD` no `settings.json`. A chave nunca vai para o código. Gere chave com `portal --keygen` e cifre com `portal --encrypt "<valor>"`; trocar a chave ou a senha SMTP exige recifrar e recompilar.
- Sem `settings.json` (ex.: Cloud Run), o banco vem das variáveis `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`, `DATABASE_USER`, `DATABASE_PWD` (cifrado) e `DATABASE_ARGS` (opcional, sufixo da string de conexão, ex.: `?sslmode=require`). Com o arquivo presente, as variáveis são ignoradas.
- Atalho: `/cfg local` (`.claude/commands/cfg.md`) define essas variáveis em nível de máquina (`setx ... /M`, mesmo padrão do task `set:key` para `PORTAL_KEY`) para rodar o portal localmente sem `settings.json`.
- `settings.json` fica fora do git e da imagem; o modelo versionado é `settings-sample.json`.
- Alterou css/js/img? É preciso recompilar o exe.
- Só pacotes npm importados pelo servidor entram no exe (`--exclude-unused-npm`); deps só de build (vite, tailwind) ficam de fora.
- Worker ou `import()` dinâmico novo precisa de `--include <caminho>` no `build:exe`, senão não entra no exe.
- Cloud Run: detalhes da imagem e comandos de deploy: ver seção **Deploy** abaixo.

## Comandos

| Task | O que faz |
|---|---|
| `deno task srv:dev` | Sobe o servidor com `--watch` (requer Postgres local e a porta do `settings.json`) |
| `deno task app:dev` | Build do frontend em modo watch |
| `deno task build:app` | Build do frontend uma vez → `public/assets` |
| `deno task build:exe` | Roda `build:app` e compila binário único (`portal`) com `public/` embutido |

## Deploy

GCP: Project ID `saude-digital-504118`, região `southamerica-east1`, Artifact Registry
`saude-digital-deploy`, imagem `saude-digital-image`, serviço Cloud Run `saude-digital-service`.

A imagem é gerada pelo `Dockerfile` da raiz (build do frontend + `deno compile` → binário em
distroless). No container não há `settings.json`: valem os defaults de `F.cfg`, e a porta vem da
variável `PORT` que o Cloud Run injeta.

Setup único (já feito neste projeto GCP, referência caso seja recriado):

```bash
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com
gcloud artifacts repositories create saude-digital-deploy --repository-format=docker --location=southamerica-east1
```

A cada deploy, incrementa-se **somente a tag** (`v1` → `v2` → ...); nome de imagem, repositório
e serviço são sempre os mesmos. Quando o usuário pedir "Comandos para Deploy", mostrar a sequência
abaixo, na ordem, com `<TAG>` substituída:

```bash
# 1. Gerar imagem docker
docker build -t saude-digital-image:<TAG> .

# 2. Login no gcloud (só se a sessão tiver expirado)
gcloud auth login

# 3. Marcar a imagem local com o path do Artifact Registry
docker tag saude-digital-image:<TAG> southamerica-east1-docker.pkg.dev/saude-digital-504118/saude-digital-deploy/saude-digital-image:<TAG>

# 4. Enviar a imagem para o Artifact Registry
docker push southamerica-east1-docker.pkg.dev/saude-digital-504118/saude-digital-deploy/saude-digital-image:<TAG>

# 5. Deploy no Cloud Run
gcloud run deploy saude-digital-service --image southamerica-east1-docker.pkg.dev/saude-digital-504118/saude-digital-deploy/saude-digital-image:<TAG> --region southamerica-east1 --allow-unauthenticated
```

Atalho: `/deploy` (`.claude/commands/deploy.md`) pergunta a tag e **executa** os passos (build →
tag → push → deploy) — diferente de "Comandos para Deploy", que só mostra a sequência.

Teste local da imagem:

```bash
docker build -t saude-digital-image:<TAG> .
docker run --rm -p 8080:8080 saude-digital-image:<TAG>
```

## Estrutura

```
├── public/assets/         # servido em /assets/* — css/js gerados, htmx vendorizado, img
├── src/
│   ├── app.ts             # entrypoint: parseia flags (--keygen/--encrypt/--help/--run) → F.load() → db.connect() → server.start()
│   ├── core/              # f.ts (global F), db.ts, cron.ts, interfaces.ts, globals.d.ts
│   ├── services/          # VAZIA
│   ├── workers/           # VAZIA
│   └── web/
│       ├── server.ts, routes.ts, middlewares.ts
│       ├── layouts/       # MainLayout.ts, AuthLayout.ts, partials/
│       ├── domains/       # auth/, home/, systems/ — Page.ts e/ou Ctrl.ts
│       └── assets/        # FONTE do frontend (entra no Vite)
├── deno.json              # tasks, import map, fmt/lint, version (fonte de F.version)
├── vite.config.js         # build frontend → public/assets
├── settings-sample.json   # modelo versionado do settings.json
├── settings.json          # local, fora do git/imagem: porta + banco (DATABASE_PWD cifrado)
```

Separação clara entre fonte e artefato: `src/` é código-fonte, `public/` contém apenas
arquivos estáticos mais o htmx vendorizado. **Nunca edite** nada em `public/assets` 
— são gerados; altere a fonte em `src/web/assets/` e rode o build.

## Convenções e Padronizações

- Organização por domínio: `src/web/domains/<domínio>/<Nome><Sufixo>`.
- Cada controller exporta funções nomeadas **e** um `export default` com o mesmo conjunto.
- Sufixos por papel: `Page.ts`, `Ctrl.ts`, `Layout.ts`, `Worker.ts`.
- Indentação de 4 espaços, `lineWidth: 50000` no `fmt` (uma instrução por linha, sem quebra).
- Logs prefixados `[OK]` / `[X]`; mensagens de log e textos de usuário em **português**.
- `no-explicit-any` desativado no lint; `src/web/assets` excluído do lint.
- Em domains e layouts, nunca retorne diretamente uma template literals sem declarar o corpo da função, sempre crie o corpo.
- Em domains e layouts os nomes de arquivos devem seguir PascalCase.
- Sempre que criar páginas (retorno HTML) deve ter sufixo `Page.ts`.
- Sempre que criar uma rota de API (retorno diferente de HTML) deve ter o sufixo `Ctrl.ts`.
- Sempre que criar um fragmento HTML, crie dentro da pasta `partials` dentro do próprio `domain` ou `layout`, sempre seguir PascalCase no nome dos arquivos criados.
- Não crie `IndexPage.ts` ou `IndexCtrl.ts`, sempre crie com mesmo nome do domain `DomainPage.ts`.
- Sempre que acessar o banco de dados, crie o arquivo `src/services/<domain>.svc.ts` (sufixo `.svc.ts`) se não existir e dentro do arquivo, crie exporte funções relacionadas ao domínio.

### O objeto global `F`

Padrão central do projeto: registrado em `globalThis` por `src/core/f.ts` e selado com
`Object.seal`. Concentra config (`F.cfg`), o handle do SQL (`F.sql`) e utilitários
(`F.encrypt`, `F.sha256`, `F.sendMail`, `F.sleep`, …). Dispensa imports em toda a base — use
`F.x` diretamente, sem importar. A tipagem vem de `src/core/globals.d.ts`; ao adicionar um
utilitário, inclua-o no objeto `F` para que apareça no tipo global.

Nunca use `F` no topo de um módulo (fora de função): `f.ts` tem top-level await e o módulo pode
ser avaliado antes de `F` existir (`F is not defined`). No topo, importe direto (ex.: `@std/path`).

## Fluxo e rotas

`app.ts` importa `core/f.ts` (registra `F`) e trata as flags de linha de comando (`--help`,
`--keygen`, `--encrypt <valor>`) antes de iniciar a aplicação; sem flag (ou com `--run`), segue o
fluxo normal: `F.load()` lê `settings.json` (ou, sem ele, as variáveis `DATABASE_*`) → `db.connect()`
decifra `DATABASE_PWD` com `PORTAL_KEY` e valida com `SELECT version(), now()` → `server.start()`. Falha em
qualquer etapa encerra com `Deno.exit(1)`. `SIGINT`/`SIGTERM` fecham a conexão e saem com `0`.

Ao criar rotas, dê preferência no retorno de fragmentos html e htmx.

Caminhos para arquivos do projeto (ex.: `public/`) devem derivar de `import.meta.url`, nunca do cwd
nem de `F.rootURL` — no exe, `import.meta.url` aponta para os arquivos embutidos e `F.rootURL` para
a pasta do exe.
