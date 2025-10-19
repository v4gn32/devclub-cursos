# Aula: Introdução ao DOM em JavaScript

Objetivo: entender o que é o DOM, como selecionar e manipular elementos, reagir a eventos e aplicar boas práticas de desempenho e acessibilidade.

Pré-requisitos: HTML básico, noções de JavaScript (variáveis, funções).

---

## 1. O que é o DOM?
DOM (Document Object Model) é a representação em árvore do HTML que o navegador constrói. Cada elemento, atributo e texto vira um nó que pode ser lido e modificado via JavaScript em tempo de execução.

Conceitos:
- Nó (node): element, text, comment, etc.
- Element node: tags HTML (div, p, button...)
- Árvore: document é a raiz.

---

## 2. Selecionando elementos
Principais APIs:

```js
// Único elemento
const elById = document.getElementById('meuId');
const first = document.querySelector('.classe'); // CSS selector

// Coleções
const byClass = document.getElementsByClassName('classe'); // HTMLCollection (live)
const byTag = document.getElementsByTagName('li');
const all = document.querySelectorAll('.classe'); // NodeList (static)
```

Observações:
- querySelector/querySelectorAll aceitam seletores CSS.
- HTMLCollection é "live" (reflete mudanças); NodeList retornado por querySelectorAll é estático.

---

## 3. Ler e alterar conteúdo
```js
const p = document.querySelector('p');
p.textContent = 'Novo texto';      // seguro, preserva HTML
p.innerText = 'Novo texto visível';// considera estilos/visibilidade
p.innerHTML = '<strong>HTML</strong>'; // insere HTML (cuidado com XSS)
```

Cuidado: evite innerHTML com conteúdo vindo do usuário sem sanitização.

---

## 4. Atributos, classes e estilos
```js
const img = document.querySelector('img');
const src = img.getAttribute('src');
img.setAttribute('alt', 'Descrição');

const btn = document.querySelector('button');
btn.classList.add('ativo');
btn.classList.remove('inativo');
btn.classList.toggle('ativo');

btn.style.backgroundColor = 'blue'; // inline style
// Prefira classes para estilos
```

Atributos data-:
```html
<div id="item" data-id="123"></div>
```
```js
const item = document.getElementById('item');
console.log(item.dataset.id); // "123"
```

---

## 5. Criar, inserir e remover nós
```js
const ul = document.querySelector('ul');
const li = document.createElement('li');
li.textContent = 'Item novo';
ul.appendChild(li);           // adiciona ao final
ul.insertBefore(li, ul.firstChild); // insere antes

// Remover
li.remove();                  // moderno
// ou ul.removeChild(li);

// Clonar
const clone = li.cloneNode(true); // true = deep
```

DocumentFragment para inserir vários nós com menos repaints:
```js
const frag = document.createDocumentFragment();
for (let i=0; i<100; i++){
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    frag.appendChild(li);
}
ul.appendChild(frag);
```

---

## 6. Navegação na árvore
Propriedades úteis:
- parentElement, children, childNodes
- firstElementChild, lastElementChild
- nextElementSibling, previousElementSibling
- closest(selector) — sobe a árvore até encontrar selector

Exemplo:
```js
const el = document.querySelector('.botao');
const form = el.closest('form');
```

---

## 7. Eventos
Adicionar listeners:
```js
const btn = document.querySelector('button');
btn.addEventListener('click', (event) => {
    console.log('clicou', event.target);
});
```

Event object:
- event.target, event.currentTarget
- event.preventDefault() — evita comportamento padrão (ex: submit)
- event.stopPropagation() — evita propagação

Opções: { once: true } para auto remover após disparo.

Event delegation (delegação): anexar listener a um ancestral para tratar muitos elementos dinamicamente:
```js
ul.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    console.log('clicou no item', li.textContent);
});
```

---

## 8. Formulários e inputs
Ler/alterar valor:
```js
const input = document.querySelector('input[name="email"]');
console.log(input.value);
input.value = 'novo@exemplo.com';
```

Eventos úteis: input (tempo real), change (quando perde foco), submit (form).
Evitar envio padrão:
```js
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // validar e enviar via fetch/AJAX
});
```

---

## 9. Performance e boas práticas
- Minimizar leituras/escritas intercaladas ao DOM (batch reads then writes).
- Usar DocumentFragment para inserir muitos elementos.
- Debounce/throttle em handlers de scroll/resize/input.
- requestAnimationFrame para animações.
- Evitar reflows excessivos (leitura de layout como offsetHeight força reflow).

---

## 10. Acessibilidade e semântica
- Use elementos semânticos (button, form, nav, main, header).
- Mantenha foco visível e gerencie foco com keyboard (tabindex quando necessário).
- Use ARIA somente quando semântica não for suficiente (role, aria-label).
- Lembre-se de labels para inputs (label for/id ou aria-label).

---

## 11. Depuração
- Ferramentas do navegador: Elements, Console, Event Listeners, Performance.
- Breakpoints em Event Listener, DOM breakpoints (subtree modifications).
- console.log, console.dir, inspeção de elementos.

---

## 12. Exercícios práticos
1) Alterar texto de um botão ao clicar.
     - Objetivo: entender querySelector, addEventListener, textContent.

2) Criar uma lista dinâmica a partir de um array e inserir em UL usando DocumentFragment.
     - Objetivo: createElement, appendChild, fragment.

3) Validação simples: impedir submit de form se campo vazio e mostrar mensagem.
     - Objetivo: preventDefault, value, classList.

4) Delegação: capturar cliques em itens gerados dinamicamente.
     - Objetivo: event delegation, closest.

(Solução exemplo para exercício 1)
```js
const btn = document.querySelector('#meuBtn');
btn.addEventListener('click', () => {
    btn.textContent = 'Clicado!';
});
```

---

## 13. Recursos e leitura adicional
- MDN Web Docs — Document Object Model (https://developer.mozilla.org/)
- Pesquisar por: querySelector, addEventListener, DocumentFragment, reflow/repaint.

---

Fim da aula — pratique os exercícios e experimente inspecionar o DOM no DevTools enquanto altera o código.
