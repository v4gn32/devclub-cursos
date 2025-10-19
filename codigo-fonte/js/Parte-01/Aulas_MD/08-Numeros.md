# Aula 8: Tipos de Dados - Número

Nesta aula, vamos aprender sobre o tipo de dado **Número** em JavaScript.

## O que é um Número?

Em JavaScript, números podem ser inteiros ou decimais.

```js
let inteiro = 10;
let decimal = 3.14;
```

## Operações com Números

Você pode realizar operações matemáticas básicas:

```js
let soma = 5 + 3;      // 8
let subtracao = 10 - 2; // 8
let multiplicacao = 4 * 2; // 8
let divisao = 16 / 2;  // 8
```

## Métodos úteis

```js
let numero = 7.56789;
console.log(numero.toFixed(2)); // "7.57"
console.log(Number.isInteger(numero)); // false
```

## Exercício

Crie duas variáveis numéricas e exiba a soma delas no console.

```js
let a = 5;
let b = 7;
console.log(a + b); // 12
```