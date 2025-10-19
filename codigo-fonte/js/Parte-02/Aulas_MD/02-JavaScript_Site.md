# Aula: Como conectar JavaScript em sites usando arquivos .md

Objetivo: mostrar formas práticas de incluir e executar JavaScript quando seu conteúdo é escrito em Markdown (.md), com exemplos claros e dicas de compatibilidade.

Pré-requisitos:
- Noções básicas de HTML, JS e Markdown.
- Saber como seu gerador/host de Markdown transforma .md em HTML (GitHub, Jekyll, Hugo, etc.).

Nota importante: muitos renderizadores (por exemplo, o visualizador do GitHub) removem ou desativam <script> em Markdown por motivos de segurança. Em sites estáticos gerados (Jekyll/Hugo) ou páginas HTML geradas a partir do .md, scripts funcionam normalmente se forem incluídos no template/layout ou via HTML embutido.

## 1. Inserir HTML e <script> diretamente no .md
Markdown permite HTML inline. Exemplo mínimo (pode funcionar ou ser removido dependendo do renderer):

```markdown
# Minha página

<button id="btn">Clique</button>

<script>
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        alert('Olá do JavaScript em Markdown!');
    });
});
</script>
```

Se o renderer não permitir <script>, veja as alternativas abaixo.

## 2. Usar arquivo JS externo (recomendado)
Coloque o script como arquivo separado e referencie-o no template HTML ou no próprio .md (quando suportado).

Estrutura:
- index.md  (conteúdo)
- assets/js/main.js

No layout HTML (recomendado), inclua:
```html
<script src="/assets/js/main.js" defer></script>
```

Exemplo de main.js:
```js
// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    if (btn) btn.addEventListener('click', () => console.log('Clicado!'));
});
```

Por que externar:
- Evita problemas de segurança e sanitização.
- Facilita cache e manutenção.
- Permite usar bundlers (Webpack, Vite) e sourcemaps.

## 3. defer, async e posição do script
- Colocar <script> antes de </body> garante que o DOM já esteja pronto.
- <script src="..." defer> executa após parsing do HTML.
- <script src="..." async> executa o mais rápido possível, não garante ordem.

Recomendação prática:
- Use defer para scripts que dependem do DOM.
- Use type="module" para código moderno e import/export.

Exemplo de module:
```html
<script type="module" src="/assets/js/app.js"></script>
```

## 4. Exemplo completo: botão contador (arquivo .md convertido em HTML com layout que inclui o script)
Conteúdo .md:
```markdown
# Contador

<p>Cliques: <span id="count">0</span></p>
<button id="inc">Adicionar</button>
```

assets/js/counter.js:
```js
document.addEventListener('DOMContentLoaded', () => {
    const countEl = document.getElementById('count');
    const btn = document.getElementById('inc');
    let count = 0;
    if (!countEl || !btn) return;
    btn.addEventListener('click', () => {
        count++;
        countEl.textContent = count;
    });
});
```

No layout HTML:
```html
<body>
    <!-- aqui entra o HTML gerado do Markdown -->
    <script src="/assets/js/counter.js" defer></script>
</body>
```

## 5. Integração com geradores de site (Jekyll/Hugo)
- Em Jekyll: coloque o <script> no _includes/head.html ou _layouts/default.html.
- Em Hugo: adicione no layouts/_default/baseof.html.
- Para assets versionados, use tags do gerador para criar links corretos.

## 6. Boas práticas e dicas rápidas
- Prefira arquivos externos e inclusão no template.
- Use defer ou coloque scripts no final do body.
- Para módulos JS, use type="module".
- Teste no navegador e use DevTools (console, network).
- Atenção: GitHub e alguns renderizadores removem scripts por segurança — nesse caso inclua o JS no template do site, não no .md.
- Evite inline scripts quando o site aplica Content Security Policy (CSP).

## 7. Depuração
- console.log / console.error
- breakpoint com debugger;
- verificar Network para 404 em arquivos .js;
- ver mensagens de CSP no console.

Resumo rápido:
- Se o .md for apenas conteúdo, inclua o JS no layout/site template.
- Se o renderer permitir, HTML com <script> funciona em .md, mas não é garantido.
- Para aplicações, use type="module" + bundler + arquivos externos.

Ficou como exercício prático: crie um pequeno projeto com index.md contendo o markup, um layout HTML que inclui /assets/js/main.js com defer, e implemente uma funcionalidade simples (ex.: contador, troca de tema, ou validação).