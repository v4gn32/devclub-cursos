# Selecionando Elementos por Classe com getElementById

## Introdução
O método `getElementsByClassName()` é uma forma poderosa de selecionar elementos HTML que compartilham a mesma classe. Este método retorna uma coleção HTML viva (HTMLCollection) de todos os elementos que possuem a classe especificada.

## Sintaxe
```javascript
document.getElementsByClassName('nomeClasse');
```

## Exemplos Práticos

### HTML Base
```html
<div class="container">
    <p class="texto">Primeiro parágrafo</p>
    <p class="texto">Segundo parágrafo</p>
    <p class="texto destaque">Terceiro parágrafo</p>
</div>
```

### Selecionando Elementos
```javascript
// Seleciona todos os elementos com a classe 'texto'
const elementosTexto = document.getElementsByClassName('texto');

// Percorrendo os elementos
for(let elemento of elementosTexto) {
    console.log(elemento.textContent);
}
```

## Características Importantes
- Retorna uma HTMLCollection (array-like object)
- A coleção é atualizada automaticamente quando elementos são adicionados/removidos
- Pode selecionar elementos com múltiplas classes
- É case-sensitive

## Dicas de Uso
1. Para converter em array:
```javascript
const arrayElementos = Array.from(document.getElementsByClassName('texto'));
```

2. Selecionando elementos com múltiplas classes:
```javascript
const elementosDestaque = document.getElementsByClassName('texto destaque');
```

## Exercício Prático
```javascript
// HTML:
// <div class="card">
//     <h2 class="titulo">Título 1</h2>
//     <p class="conteudo">Conteúdo 1</p>
// </div>
// <div class="card">
//     <h2 class="titulo">Título 2</h2>
//     <p class="conteudo">Conteúdo 2</p>
// </div>

const cards = document.getElementsByClassName('card');
const titulos = document.getElementsByClassName('titulo');

// Modificando todos os títulos
for(let titulo of titulos) {
    titulo.style.color = 'blue';
}
```

## Considerações Finais
O `getElementsByClassName` é uma ferramenta essencial para manipulação do DOM, especialmente útil quando precisamos trabalhar com múltiplos elementos que compartilham características comuns através de classes.