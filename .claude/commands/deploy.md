---
description: Executa o deploy completo do portal no Cloud Run (build, tag, push, deploy), perguntando a tag da versão
---

Execute o deploy do saude-digital-portal no Cloud Run, seguindo exatamente o padrão de nomes
documentado em AGENTS.md, seção "Deploy". Ao contrário de "Comandos para Deploy" (que só mostra
os comandos), `/deploy` é pedido explícito do usuário para você mesmo rodar os passos.

1. Se a tag não veio em `$ARGUMENTS`, pergunte ao usuário qual é a tag desta versão (ex.: `v2`),
   sugerindo o próximo valor a partir da última tag conhecida (`docker images saude-digital-image`
   para achar a mais recente; senão sugira `v1`). A tag é o único valor que muda a cada deploy —
   nome de imagem, repositório e serviço são fixos.
2. Confira a autenticação antes de começar: `gcloud auth list --filter=status:ACTIVE --format="value(account)"`.
   Se vier vazio, pare e peça para o usuário rodar `gcloud auth login` manualmente (é um fluxo
   interativo de navegador, não dá para automatizar aqui) — não tente executar o login você mesmo.
3. Com a tag confirmada e a autenticação ok, rode em sequência, parando e reportando o erro se
   algum passo falhar (não force adiante):

```bash
# 1. Gerar imagem docker
docker build -t saude-digital-image:<TAG> .

# 2. Marcar a imagem local com o path do Artifact Registry
docker tag saude-digital-image:<TAG> southamerica-east1-docker.pkg.dev/saude-digital-504118/saude-digital-deploy/saude-digital-image:<TAG>

# 3. Enviar a imagem para o Artifact Registry
docker push southamerica-east1-docker.pkg.dev/saude-digital-504118/saude-digital-deploy/saude-digital-image:<TAG>

# 4. Deploy no Cloud Run
gcloud run deploy saude-digital-service --image southamerica-east1-docker.pkg.dev/saude-digital-504118/saude-digital-deploy/saude-digital-image:<TAG> --region southamerica-east1 --allow-unauthenticated
```

4. Ao final, mostre a URL do serviço que o `gcloud run deploy` imprime e confirme que o deploy
   terminou sem erro. Não altere nomes de imagem, repositório, projeto ou serviço — são fixos
   conforme AGENTS.md.
