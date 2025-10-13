# Aula: Null & Undefined em JavaScript

## Introdução

Em JavaScript, `null` e `undefined` são dois valores primitivos usados para representar ausência de valor, mas possuem diferenças importantes.

---

## O que é `undefined`?

- Valor padrão de variáveis não inicializadas.
- Retornado quando uma função não possui `return`.
- Propriedades inexistentes de objetos retornam `undefined`.

```js
let a;
console.log(a); // undefined

function foo() {}
console.log(foo()); // undefined

const obj = {};
console.log(obj.prop); // undefined
```

---

## O que é `null`?

- Valor atribuído explicitamente para indicar "ausência intencional de valor".
- Usado quando queremos "zerar" uma variável ou propriedade.

```js
let b = null;
console.log(b); // null

const user = { name: "Ana" };
user.name = null;
console.log(user); // { name: null }
```

---

## Diferenças principais

| Característica      | `undefined`                  | `null`                        |
|---------------------|-----------------------------|-------------------------------|
| Tipo (`typeof`)     | "undefined"                 | "object"                      |
| Valor padrão        | Sim                         | Não                           |
| Atribuição explícita| Não comum                   | Comum                         |

---

## Comparações

```js
console.log(null == undefined);  // true (igualdade frouxa)
console.log(null === undefined); // false (igualdade estrita)
```

---

## Boas práticas

- Use `undefined` para variáveis não inicializadas.
- Use `null` para indicar ausência intencional de valor.
- Sempre prefira comparações estritas (`===`).

---

## Exercício

1. O que será impresso?

```js
let x;
let y = null;
console.log(x, y, x == y, x === y);
```

---

## Referências

- [MDN: null](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/null)
- [MDN: undefined](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/undefined)
