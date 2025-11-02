# Aula: querySelector e querySelectorAll

## Objetivo
Apresentar o uso de `querySelector` e `querySelectorAll` para selecionar elementos do DOM usando seletores CSS, manipular nós retornados e aplicar boas práticas e padrões comuns.

---

## Conceito rápido
- `element.querySelector(selectors)` retorna o primeiro elemento que corresponde ao seletor CSS ou `null`.
- `element.querySelectorAll(selectors)` retorna um NodeList estático com todos os elementos correspondentes (pode estar vazio).

Ambos aceitam qualquer seletor CSS válido (ids, classes, atributos, pseudo-classes, combinadores).

---

## Sintaxe
```js
const primeiro = document.querySelector('.minha-classe');
const todos = document.querySelectorAll('ul > li');
const dentro = document.getElementById('pai').querySelectorAll('a');
```

---

## Exemplos práticos

Selecionar por id:
```html
<div id="header"></div>

<script>
const header = document.querySelector('#header');
```

Selecionar por classe ou tag:
```js
const destaque = document.querySelector('.destaque'); // primeiro com essa classe
const paragrafo = document.querySelector('p'); // primeiro <p>
```

Selecionar atributos:
```html
<input type="text" name="email" data-required>
```
```js
const email = document.querySelector('input[name="email"]');
const required = document.querySelector('[data-required]');
```

Combinadores e pseudo-classes:
```js
const primeiroAtivo = document.querySelector('ul li.active:first-child');
const linksExternos = document.querySelectorAll('a[target="_blank"]');
```

---

## Diferença entre querySelectorAll e getElementsBy*
- `querySelectorAll` retorna um NodeList estático (pode usar forEach).
- `getElementsByClassName`/`getElementsByTagName` retornam HTMLCollection vivo (reflete mudanças no DOM).
- `getElementById` retorna um único elemento por id; `querySelector('#id')` faz o mesmo, porém `getElementById` é ligeiramente mais rápido.

---

## Trabalhando com NodeList
NodeList suporta forEach, ou pode converter em array:
```js
const items = document.querySelectorAll('.item');
items.forEach(el => el.classList.add('ativo'));

// converter
const arr = Array.from(items);
```

---

## Modificação do DOM após seleção
Alterar texto, atributos, classes e estilos:
```js
const botao = document.querySelector('.btn');
botao.textContent = 'Salvar';
botao.setAttribute('disabled', 'true');
botao.classList.add('btn--loading');
botao.style.backgroundColor = '#f00';
```

---

## Eventos com valores selecionados
```js
const formulário = document.querySelector('#form-contato');
formulário.addEventListener('submit', event => {
    event.preventDefault();
    const input = formulário.querySelector('input[name="nome"]');
    console.log(input.value);
});
```

---

## Boas práticas e performance
- Cache selecionar quando reutilizar: const header = document.querySelector('header');
- Escopo: use `element.querySelector` para limitar busca e melhorar performance.
- Evite seletores muito complexos em loops (busque fora do loop).
- Prefira classes para manipulação de estilo (evitar mudanças diretas em .style quando possível).
- Cheque retorno nulo antes de acessar propriedades:
    ```js
    const el = document.querySelector('.possivel');
    if (el) el.textContent = 'novo';
    ```

---

## Problemas comuns
- `querySelector` retornando null: elemento não está no DOM ainda — execute após `DOMContentLoaded` ou coloque script no fim do body.
- Confusão entre NodeList (estático) e HTMLCollection (vivo).
- Seletores CSS inválidos geram exceção.

---

## Exercícios práticos
1) Selecionar o primeiro item de uma lista e adicionar classe "selecionado".  
2) Encontrar todos os inputs dentro de um formulário e limpar seus valores.  
3) Mostrar um alerta com o texto do primeiro parágrafo que contenha a classe "importante".  
4) Dentro de um container com id "galeria", fazer toggle da classe "expandido" no clique da imagem.

---

## Sugestões de soluções (respostas curtas)

1)
```js
const li = document.querySelector('ul li');
if (li) li.classList.add('selecionado');
```

2)
```js
const inputs = document.querySelectorAll('form#meuForm input');
inputs.forEach(i => i.value = '');
```

3)
```js
const p = document.querySelector('p.importante');
if (p) alert(p.textContent);
```

4)
```js
document.querySelectorAll('#galeria img').forEach(img => {
    img.addEventListener('click', () => img.classList.toggle('expandido'));
});
```

---

Foque em praticar seletores CSS (combinadores, atributos e pseudo-classes) e sempre validar retornos nulos. Boa prática: construir utilitários pequenos que encapsulem seleções frequentemente usadas.
