---
description: Define, em nível de máquina (HKLM), as variáveis de ambiente de banco/porta usadas pelo portal quando não há settings.json (hoje só o ambiente "local")
---

Configure as variáveis de ambiente do Windows usadas pelo portal quando ele roda sem
`settings.json` (ver AGENTS.md, seção "Distribuição"), seguindo o mesmo padrão de `setx ... /M`
já usado pelo task `set:key` do `deno.json` para `PORTAL_KEY`.

1. Se `$ARGUMENTS` não for `local`, pergunte ao usuário qual ambiente ele quer configurar — hoje só
   existe `local`; não invente valores para outro ambiente.
2. Antes de rodar qualquer comando, avise o usuário que:
   - `setx ... /M` e `reg delete HKCU\Environment ...` alteram variáveis de ambiente **de
     máquina/usuário do Windows**, não só deste repositório — afeta qualquer processo futuro na
     máquina, não só este projeto.
   - `/M` grava em `HKLM`, o que exige terminal elevado (Administrador); se faltar permissão o
     `setx` falha — reporte o erro, não tente contornar.
   - As mudanças só valem para **novos** processos/terminais abertos depois deste comando.
3. Com a confirmação do usuário, rode em sequência, parando e reportando o erro se algum passo
   falhar (não force adiante):

```bash
setx HTTP_PORT 80 /M
setx DATABASE_HOST "127.0.0.1" /M
setx DATABASE_PORT 5432 /M
setx DATABASE_NAME "portal" /M
setx DATABASE_USER "postgres" /M
setx DATABASE_PWD "tfu7cqoPTKb9XCQUN0tDybtrzESZcBd1gzPzibohCTzNjb4=" /M
reg delete HKCU\Environment /v DATABASE_ARGS /f
```

   O `reg delete` pode retornar erro se a chave já não existir em `HKCU\Environment` — trate isso
   como não-fatal, já que o objetivo é garantir que a variável não exista, não que a remoção
   aconteça.

4. Ao final, confirme para o usuário quais variáveis foram definidas (não reimprima o valor de
   `DATABASE_PWD` em texto claro — só confirme que foi setado) e lembre que é preciso abrir um novo
   terminal para os valores surtirem efeito.
