# Aula: Array em JavaScript

## O que é um Array?

Um **array** é uma estrutura de dados que permite armazenar vários valores em uma única variável. Cada valor em um array é chamado de **elemento** e pode ser acessado por um índice numérico.

---

## Criando Arrays

```js
// Array vazio
let frutas = [];

// Array com elementos
let numeros = [1, 2, 3, 4, 5];
let nomes = ["Ana", "Bruno", "Carlos"];
```

---

## Acessando Elementos

Os índices começam em 0.

```js
let cores = ["vermelho", "azul", "verde"];
console.log(cores[0]); // vermelho
console.log(cores[2]); // verde
```

---

## Modificando Elementos

```js
let animais = ["gato", "cachorro"];
animais[1] = "papagaio";
console.log(animais); // ["gato", "papagaio"]
```

---

## Propriedade `length`

Retorna o número de elementos do array.

```js
let numeros = [10, 20, 30];
console.log(numeros.length); // 3
```

---

## Métodos Comuns de Array

### Adicionar Elementos

- **push()**: adiciona ao final
- **unshift()**: adiciona ao início

```js
let lista = [1, 2];
lista.push(3); // [1, 2, 3]
lista.unshift(0); // [0, 1, 2, 3]
```

### Remover Elementos

- **pop()**: remove do final
- **shift()**: remove do início

```js
lista.pop(); // [0, 1, 2]
lista.shift(); // [1, 2]
```

---

## Percorrendo Arrays

### Usando `for`

```js
let frutas = ["maçã", "banana", "uva"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

### Usando `forEach`

```js
frutas.forEach(function(fruta) {
    console.log(fruta);
});
```

---

## Outros Métodos Úteis

- **map()**: cria novo array com base em outro
- **filter()**: filtra elementos
- **find()**: encontra um elemento

```js
let numeros = [1, 2, 3, 4];
let dobrados = numeros.map(n => n * 2); // [2, 4, 6, 8]
let pares = numeros.filter(n => n % 2 === 0); // [2, 4]
let primeiroMaiorQue2 = numeros.find(n => n > 2); // 3
```

---

## Exercícios

1. Crie um array com 5 nomes e exiba todos usando um laço.
2. Adicione um elemento ao início e ao fim de um array.
3. Remova o primeiro e o último elemento de um array.
4. Dado o array `[10, 20, 30, 40]`, crie um novo array com todos os valores multiplicados por 3.

---

## Referências

- [MDN Web Docs: Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info: Arrays](https://javascript.info/array)


---

