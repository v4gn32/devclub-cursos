# If / Else em JavaScript — Aula Completa

## Objetivo
Aprender a usar estruturas condicionais `if`, `else if`, `else` e alternativas (operador ternário, short-circuit) em JavaScript, identificar armadilhas comuns e aplicar boas práticas.

## Pré-requisitos
Noções básicas de JavaScript: variáveis, operadores, funções e console.

---

## Sumário
- Sintaxe básica
- Valores truthy e falsy
- Comparações: `==` vs `===`
- `else if` e `else`
- Aninhamento e escopo de bloco
- Operador ternário
- Short-circuit (`&&`, `||`)
- Boas práticas e armadilhas comuns
- Exercícios com soluções

---

## Sintaxe básica
```js
if (condicao) {
    // executa quando condicao for verdadeira
}
```

Exemplo:
```js
const idade = 18;
if (idade >= 18) {
    console.log('Maior de idade');
}
```

---

## Valores truthy e falsy
Expressões são avaliadas em contexto booleano. Valores falsy em JS: `false`, `0`, `-0`, `0n`, `""` (string vazia), `null`, `undefined`, `NaN`. Todo o resto é truthy.

```js
if ("") console.log('não executa'); // string vazia é falsy
if ("texto") console.log('executa'); // truthy
```

---

## Comparações: `==` vs `===`
- `==` faz coerção de tipo (pode ser imprevisível).
- `===` verifica valor e tipo (recomendado).

Exemplo:
```js
0 == false    // true
0 === false   // false
'5' == 5      // true
'5' === 5     // false
```

Use `===` e `!==` na maior parte dos casos.

---

## `else if` e `else`
```js
const nota = 75;
if (nota >= 90) {
    console.log('A');
} else if (nota >= 75) {
    console.log('B');
} else {
    console.log('C ou menor');
}
```

`else if` permite cadeias de condições; `else` é o bloco padrão quando nenhuma condição anterior é satisfeita.

---

## Aninhamento e escopo de bloco
Use chaves sempre para evitar ambiguidades. Variáveis declaradas com `let/const` são limitadas ao bloco.

```js
if (true) {
    let x = 1;
    console.log(x); // 1
}
console.log(typeof x); // "undefined"
```

Evitar aninhamento profundo — prefira retornar cedo (guard clauses).

---

## Operador ternário
Sintaxe: `condicao ? valorSeVerdadeiro : valorSeFalso`

```js
const idade = 20;
const podeEntrar = idade >= 18 ? 'sim' : 'não';
console.log(podeEntrar); // 'sim'
```

Use para expressões simples; evite ternários encadeados complexos.

---

## Short-circuit com `&&` e `||`
- `&&` retorna o primeiro valor falsy ou o último truthy.
- `||` retorna o primeiro valor truthy ou o último falsy.

Exemplos práticos:
```js
const user = null;
const nome = user && user.name; // null — evita erro

const input = "";
const valor = input || 'valor padrão'; // 'valor padrão'
```

Também usado para executar funções condicionalmente:
```js
func && func(); // executa se func for truthy (por exemplo, definido)
```

---

## Boas práticas e armadilhas comuns
- Prefira `===`/`!==` em vez de `==`/`!=`.
- Use chaves `{}` sempre, mesmo em um único statement.
- Evite atribuição acidental em condição (`if (a = 5)`): isso atribui, não compara.
- Lembrar de `null` e `undefined` quando checar propriedades.
- Prefira guard clauses para reduzir aninhamento:
    ```js
    function processar(valor) {
        if (!valor) return;
        // lógica principal
    }
    ```
- Ternário para expressões curtas; `switch` para múltiplos casos discretos.
- Teste casos limites (0, '', null, undefined, NaN).

---

## Exercícios

1. Escreva uma função `maiorOuIgualZero(n)` que retorna `'positivo'` se n > 0, `'zero'` se n === 0, e `'negativo'` caso contrário.
2. Dada uma variável `usuario`, imprima `Bem-vindo, <nome>` se `usuario` existir e tiver `nome`. Caso contrário, imprima `Faça login`.
3. Reescreva a função:
     ```js
     function valida(x) {
         if (x) return true;
         else return false;
     }
     ```
     usando uma única linha.

---

## Soluções

1.
```js
function maiorOuIgualZero(n) {
    if (n > 0) return 'positivo';
    else if (n === 0) return 'zero';
    else return 'negativo';
}
```

2.
```js
const usuario = { nome: 'Ana' }; // exemplo
if (usuario && usuario.nome) {
    console.log(`Bem-vindo, ${usuario.nome}`);
} else {
    console.log('Faça login');
}
```

3.
```js
function valida(x) {
    return !!x;
}
// ou simplesmente: const valida = x => Boolean(x);
```

---

Fim da aula. Material pronto para salvar em /C:/DEV/devclub-cursos/codigo-fonte/js/13-If_Else.md