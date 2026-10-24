# viu, — o site

Site estático do blog [viu.blog.br](https://viu.blog.br), feito com [Astro](https://astro.build), hospedado na Cloudflare Pages e editado pelo painel [Pages CMS](https://app.pagescms.org).

## Como publicar um texto

1. Entre em **app.pagescms.org** com sua conta do GitHub e abra este repositório.
2. Em **Textos**, clique em **Novo**. Preencha título, subtítulo, categoria e data; escreva o texto.
3. Deixe **Rascunho** desligado e clique em **Salvar**. Em cerca de um minuto o texto está no ar.

Para editar um texto antigo, abra-o na mesma lista, mude o que quiser e salve. Para tirar um texto do ar sem apagar, ligue **Rascunho**.

Regras da casa (do brand book): título com até 60 caracteres, afirmação ou pergunta direta, terminando com ponto ou interrogação — o sinal final fica em vinho. Subtítulo com uma frase. Uma citação em destaque por texto, no máximo, usando o bloco "Citação".

## O que mais dá para editar no painel

- **Página Sobre** — o texto de `/sobre/`.
- **Configurações do site** (`src/config.ts`) — a manchete, a linha descritiva, o e-mail de contato, o usuário do Buttondown e quantos textos aparecem na home.

## Imagens

No painel, o campo **Imagem para redes sociais** aceita um arquivo 1200×630; ele vai para `public/media/` e vira a capa do texto no LinkedIn e no WhatsApp. Sem imagem, o site usa a capa padrão do viu (`public/og-default.png`). Imagens dentro do texto: use o botão de imagem do editor.

## Newsletter

O formulário em `/newsletter/` usa o [Buttondown](https://buttondown.com). Crie a conta, escolha o nome de usuário e coloque-o em `src/config.ts` (`buttondown: 'seu-usuario'`). Até isso acontecer, a página mostra "A lista abre em breve" e o RSS (`/rss.xml`) já funciona — o Buttondown consegue mandar cada texto novo por e-mail a partir dele.

## Como funciona por baixo

- Os textos são arquivos Markdown em `src/content/posts/`, um por texto, nomeados `AAAA-MM-DD-titulo.md`. O endereço do texto é o nome do arquivo sem a data: `viu.blog.br/titulo/`.
- Cada salvamento no painel vira um commit no GitHub; a Cloudflare Pages detecta o commit, roda `npm run build` e publica a pasta `dist/`.
- O tema visual está em `src/styles/global.css` (os tokens do design system) e nos componentes em `src/`.
- Fontes (Fraunces e Hanken Grotesk, licença OFL) em `public/fonts/`.

## Rodar no computador (opcional)

```bash
npm install
npm run dev      # abre em http://localhost:4321 — rascunhos aparecem aqui
npm run build    # gera o site em dist/
```
