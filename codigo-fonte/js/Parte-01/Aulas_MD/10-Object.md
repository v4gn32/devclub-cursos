# Aula Completa de `Object` em JavaScript

## O que é um `Object`?

Um **objeto** em JavaScript é uma estrutura que armazena dados em pares chave-valor. Ele permite organizar e manipular informações de forma flexível e dinâmica.

```js
const pessoa = {
    nome: "Ana",
    idade: 25,
    profissao: "Desenvolvedora"
};
```

## Como Criar Objetos

### 1. Sintaxe Literal

A forma mais comum de criar objetos é usando a sintaxe literal:

```js
const carro = {
    marca: "Toyota",
    modelo: "Corolla"
};
```

### 2. Usando `new Object()`

Outra forma é utilizando o construtor `Object`:

```js
const livro = new Object();
livro.titulo = "JS Essencial";
livro.autor = "Dev Club";
```

## Acessando Propriedades

Você pode acessar as propriedades de um objeto usando ponto (`.`) ou colchetes (`[]`):

```js
console.log(pessoa.nome);      // Ana
console.log(pessoa["idade"]); // 25
```

## Adicionando e Removendo Propriedades

Propriedades podem ser adicionadas ou removidas dinamicamente:

```js
pessoa.email = "ana@email.com";
delete pessoa.profissao;
```

## Métodos em Objetos

Objetos podem conter funções, chamadas de métodos:

```js
const cachorro = {
    nome: "Rex",
    latir: function() {
        console.log("Au Au!");
    }
};

cachorro.latir(); // Au Au!
```

## Iterando sobre Objetos

Para percorrer todas as propriedades de um objeto, use o `for...in`:

```js
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
```

## Métodos Úteis de `Object`

- `Object.keys(obj)` — retorna um array com as chaves do objeto.
- `Object.values(obj)` — retorna um array com os valores.
- `Object.entries(obj)` — retorna um array de pares `[chave, valor]`.

```js
console.log(Object.keys(pessoa));   // ["nome", "idade", "email"]
console.log(Object.values(pessoa)); // ["Ana", 25, "ana@email.com"]
console.log(Object.entries(pessoa));// [["nome", "Ana"], ["idade", 25], ["email", "ana@email.com"]]
```

## Clonando Objetos

Para copiar objetos (shallow copy):

```js
const copia = Object.assign({}, pessoa);
// ou
const copia2 = { ...pessoa };
```

## Comparando Objetos

Objetos são comparados por referência, não por valor:

```js
const a = { x: 1 };
const b = { x: 1 };
console.log(a === b); // false
```

## Resumo

- Objetos armazenam dados em pares chave-valor.
- Permitem métodos e propriedades dinâmicas.
- São fundamentais para estruturar dados em JavaScript.
- Possuem métodos nativos úteis para manipulação.
- Comparações entre objetos consideram a referência, não o conteúdo.
