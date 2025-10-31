# Aula: getElementsByTagName

Descrição rápida  
getElementsByTagName é um método DOM que retorna uma coleção (HTMLCollection) de elementos com determinado nome de tag dentro de um contexto (document ou elemento).

---

## Sintaxe
```js
const collection = context.getElementsByTagName(tagName);
```
- context: `document` ou qualquer `Element` (ex.: `document`, `section`, `div`)
- tagName: string com o nome da tag, ex.: `'div'`, `'li'`, `'p'`

Observações:
- Em HTML o nome da tag não é sensível a maiúsculas/minúsculas; em XML/XHTML é sensível.
- Retorna um HTMLCollection “live”: mudanças no DOM atualizam automaticamente a coleção.

---

## O que é retornado
- HTMLCollection: array-like (tem índice e length) mas não é um Array.
- Métodos de array como `forEach` não estão garantidos; usar `for`, `for...of` (compatibilidade variável) ou converter para Array.

Converter:
```js
const arr = Array.from(document.getElementsByTagName('li'));
// ou
const arr2 = [...document.getElementsByTagName('li')];
```

---

## Exemplos práticos

HTML:
```html
<ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

1) Selecionar todos os `<li>` e alterar texto:
```js
const itens = document.getElementsByTagName('li');
for (let i = 0; i < itens.length; i++) {
    itens[i].textContent = `Novo item ${i + 1}`;
}
```

2) Seleção dentro de um elemento:
```js
const lista = document.getElementById('lista');
const liDentro = lista.getElementsByTagName('li'); // só os li dentro de #lista
```

3) Alterar estilo:
```js
const divs = document.getElementsByTagName('div');
Array.from(divs).forEach(d => d.style.background = '#f0f0f0');
```

---

## Diferenças importantes vs querySelectorAll
- getElementsByTagName('div') → HTMLCollection (live)
- querySelectorAll('div') → NodeList (static)
- querySelectorAll aceita seletores CSS complexos; getElementsByTagName só aceita nome de tag
- Para estabilidade durante iteração, prefira converter em Array ou usar querySelectorAll se precisar de resultado estático.

---

## Boas práticas e performance
- Para performance, restrinja o contexto (use um elemento pai em vez de document) quando possível.
- Para seletores complexos e comportamento estático, use `querySelectorAll`.
- Evite iterar e modificar a coleção diretamente sem convertê-la se as alterações mudarem a estrutura que está sendo iterada (porque HTMLCollection é live).

---

## Exercícios (rápidos)
1. Selecionar todos os `<p>` e imprimir seu texto no console.  
2. Trocar o atributo `data-index` de cada `<li>` pelo seu índice.  
3. Selecionar `<img>` dentro de um container e adicionar `loading="lazy"`.  
4. Contar quantas `<section>` existem dentro de `main`.

Respostas (resumo):
```js
// 1
Array.from(document.getElementsByTagName('p')).forEach(p => console.log(p.textContent));

// 2
const lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) lis[i].setAttribute('data-index', i);

// 3
const imgs = document.querySelector('#container').getElementsByTagName('img');
Array.from(imgs).forEach(img => img.loading = 'lazy');

// 4
const count = document.querySelector('main').getElementsByTagName('section').length;
```

---

## Referências rápidas
- Use getElementsByTagName quando precisar de uma seleção por tag e comportamento "live" for desejado.
- Use querySelectorAll para seletores CSS e resultados estáticos.
- Converter para Array para usar métodos de array e evitar efeitos colaterais ao modificar o DOM.

Fim.