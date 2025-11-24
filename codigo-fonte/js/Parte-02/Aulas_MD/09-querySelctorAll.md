# Aula: querySelectorAll (JavaScript) — guia completo

## Objetivo
Apresentar o uso de `document.querySelectorAll` para selecionar múltiplos elementos DOM, explicar retornos, métodos de iteração, diferenças com outras APIs e boas práticas.

## Pré-requisitos
- Conhecimentos básicos de HTML e CSS (seletores).
- Noções básicas de JavaScript e DOM.

---

## O que é
`querySelectorAll` é um método do DOM que retorna todos os elementos que correspondem a um seletor CSS fornecido.

Sintaxe:
```js
const nodeList = document.querySelectorAll(selector);
```
- `selector` é uma string com qualquer seletor CSS válido (classes, ids, atributos, pseudo-classes, combinadores).

---

## Exemplo simples
HTML:
```html
<ul>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
</ul>
```
JS:
```js
const items = document.querySelectorAll('.item');
console.log(items); // NodeList(3) [...]
```

---

## Tipo retornado — NodeList
- Retorna um `NodeList` estático (não "live" como getElementsByClassName).
- Pode ser vazio mas não nulo.
- Possui `.length` e, em navegadores modernos, `.forEach`.

---

## Iterando sobre os resultados
Usando forEach:
```js
document.querySelectorAll('.item').forEach(el => {
    console.log(el.textContent);
});
```
Usando for-of:
```js
for (const el of document.querySelectorAll('.item')) {
    // ...
}
```
Convertendo para Array (quando precisar de métodos como map/filter):
```js
const arr = Array.from(document.querySelectorAll('.item'));
const texts = arr.map(el => el.textContent);
```
ou
```js
const arr = [...document.querySelectorAll('.item')];
```

---

## Seletores avançados
Aceita qualquer seletor CSS:
```js
document.querySelectorAll('div > p.highlight, a[href^="http"]');
document.querySelectorAll('input[type="checkbox"]:checked');
document.querySelectorAll('[data-role="card"] .title');
```

---

## Diferenças importantes
- `querySelector` retorna o primeiro elemento; `querySelectorAll` retorna todos.
- `getElementsByClassName` / `getElementsByTagName` retornam HTMLCollection "live": atualizam com mudanças no DOM; `querySelectorAll` retorna NodeList estático.
- Para performance: seletores simples e específicos são mais rápidos (ex.: `#id .classe`).

---

## Manipulação após seleção
Adicionar classe:
```js
document.querySelectorAll('.item').forEach(el => el.classList.add('ativo'));
```
Adicionar listener com delegação (recomendado para muitos elementos dinâmicos):
```js
const container = document.querySelector('#lista');
container.addEventListener('click', (e) => {
    const li = e.target.closest('.item');
    if (!li) return;
    // lógica para o item clicado
});
```

---

## Uso comum e boas práticas
- Se precisa apenas do primeiro elemento, use `querySelector` (mais direto).
- Para grande número de elementos alterados frequentemente, considere delegação.
- Para operações que exigem métodos de array, converta o NodeList.
- Evite seletores muito genéricos em loops de alto impacto — cache seletores externos ao loop.

---

## Performance (prático)
- Cache resultados se reutilizados:
```js
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', handler));
```
- Evite chamar `querySelectorAll` dentro de loops quando possível.

---

## Exercícios práticos
1. Selecione todos os parágrafos e adicione a classe `texto-grande`.
2. Conte quantos inputs checkbox estão marcados.
3. Crie uma função que retorna um array com os valores `data-id` de todos os elementos `.card`.

Respostas (exemplo):
```js
// 1
document.querySelectorAll('p').forEach(p => p.classList.add('texto-grande'));

// 2
const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;

// 3
const ids = Array.from(document.querySelectorAll('.card')).map(c => c.dataset.id);
```

---

## Compatibilidade
`querySelectorAll` é suportado por todos os navegadores modernos e navegadores antigos razoavelmente (IE8+ com limitações em alguns seletores). Verifique suporte a pseudo-seletores muito novos em ambientes antigos.

---

## Referências rápidas
- Seletores CSS (combinadores, pseudo-classes, atributos)
- MDN: document.querySelectorAll

---

Fim da aula. Aplicar os exemplos em um arquivo .html para testar.