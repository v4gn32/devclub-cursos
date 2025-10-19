# Aula: Boolean em JavaScript

## O que é Boolean?

- **Boolean** é um tipo de dado que representa dois valores: `true` (verdadeiro) ou `false` (falso).
- Usado para decisões lógicas e controle de fluxo.

## Exemplos de valores booleanos

```js
let ligado = true;
let desligado = false;
```

## Operadores de Comparação

| Operador | Descrição           | Exemplo           | Resultado |
|----------|---------------------|-------------------|-----------|
| `==`     | Igualdade           | `5 == '5'`        | `true`    |
| `===`    | Igualdade estrita   | `5 === '5'`       | `false`   |
| `!=`     | Diferente           | `5 != 3`          | `true`    |
| `!==`    | Diferente estrito   | `5 !== '5'`       | `true`    |
| `>`      | Maior que           | `10 > 5`          | `true`    |
| `<`      | Menor que           | `2 < 1`           | `false`   |
| `>=`     | Maior ou igual      | `3 >= 3`          | `true`    |
| `<=`     | Menor ou igual      | `4 <= 2`          | `false`   |

## Operadores Lógicos

| Operador | Descrição      | Exemplo             | Resultado |
|----------|---------------|---------------------|-----------|
| `&&`     | E (AND)       | `true && false`     | `false`   |
| `||`     | OU (OR)       | `true || false`     | `true`    |
| `!`      | NÃO (NOT)     | `!true`             | `false`   |

## Conversão para Boolean

- Alguns valores são considerados **falsy** (falso) em JavaScript:
    - `false`, `0`, `""`, `null`, `undefined`, `NaN`
- Todos os outros valores são **truthy** (verdadeiro).

```js
Boolean(0);        // false
Boolean("texto");  // true
Boolean("");       // false
Boolean([]);       // true
```

## Uso em Estruturas de Controle

```js
let idade = 18;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

## Resumo

- Boolean é fundamental para lógica de programação.
- Usado em comparações, condições e loops.

---