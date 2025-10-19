# Aula Completa sobre Variáveis em JavaScript

## O que são Variáveis?

Variáveis são espaços na memória do computador usados para armazenar dados temporariamente durante a execução de um programa.

---

## Como Declarar Variáveis

Em JavaScript, existem três formas principais de declarar variáveis:

```js
var nome = "Maria";
let idade = 25;
const PI = 3.14;
```

- `var`: declaração antiga, escopo de função.
- `let`: declaração moderna, escopo de bloco.
- `const`: valor constante, não pode ser reatribuído.

---

## Regras para Nomes de Variáveis

- Devem começar com letra, `$` ou `_`
- Não podem começar com números
- Não podem conter espaços ou caracteres especiais
- Case sensitive (`idade` ≠ `Idade`)

---

## Tipos de Dados

Exemplos de tipos de dados que podem ser armazenados em variáveis:

```js
let nome = "João";      // String
let idade = 30;         // Number
let ativo = true;       // Boolean
let lista = [1, 2, 3];  // Array
let pessoa = { nome: "Ana", idade: 22 }; // Objeto
let nada = null;        // Null
let indefinido;         // Undefined
```

---

## Diferença entre `var`, `let` e `const`

| Palavra-chave | Escopo      | Pode ser reatribuída? | Pode ser redeclarada? |
|---------------|-------------|----------------------|-----------------------|
| var           | Função      | Sim                  | Sim                   |
| let           | Bloco       | Sim                  | Não                   |
| const         | Bloco       | Não                  | Não                   |

---

## Boas Práticas

- Use `let` e `const` no lugar de `var`
- Prefira `const` quando o valor não muda
- Use nomes descritivos para variáveis

---

## Exemplos Práticos

```js
let contador = 0;
contador = contador + 1;

const URL_API = "https://api.exemplo.com";
```

---

## Exercício

1. Crie uma variável chamada `nome` e atribua seu nome a ela.
2. Crie uma variável `idade` e atribua sua idade.
3. Crie uma constante `PAIS` com o valor do seu país.

```js
let nome = "SeuNome";
let idade = 20;
const PAIS = "Brasil";
```

---

## Resumo

- Variáveis armazenam dados temporários.
- Use `let` e `const` para declarar variáveis.
- Escolha nomes claros e siga as regras de nomenclatura.
