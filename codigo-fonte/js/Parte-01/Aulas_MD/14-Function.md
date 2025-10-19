# Functions em JavaScript — Aula Completa (.md)

Objetivos
- Entender o que são funções e por que são importantes.
- Conhecer formas de declarar e usar funções.
- Praticar callbacks, closures, funções de ordem superior e async.

---

## 1. O que é uma função?
Função é um bloco reutilizável de código que pode receber entradas (parâmetros), executar lógica e retornar um valor.

---

## 2. Declaração de função (Function Declaration)
```js
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3)); // 5
```

---

## 3. Expressão de função (Function Expression)
```js
const sub = function(a, b) {
    return a - b;
};
console.log(sub(5, 2)); // 3
```

---

## 4. Arrow Functions
- Sintaxe curta, lexical `this`.
```js
const mul = (a, b) => a * b;
const sq = n => n * n;
console.log(mul(2, 3), sq(4)); // 6 16
```

---

## 5. Parâmetros, valores padrão e rest
```js
function greet(name = 'Visitante') {
    return `Olá, ${name}!`;
}

function somaTodos(...nums) {
    return nums.reduce((s, n) => s + n, 0);
}

console.log(greet(), somaTodos(1,2,3)); // Olá, Visitante! 6
```

---

## 6. Retorno
- Sem `return` => `undefined`.
```js
function semRetorno() {}
console.log(semRetorno()); // undefined
```

---

## 7. Hoisting
- Declarações de função são içadas (hoisted).
- Expressões de função e arrow functions atribuídas a `const` não são içadas.
```js
console.log(foo()); // "ok"
function foo() { return "ok"; }

// console.log(bar()); // Erro: bar is not a function
const bar = () => "ok";
```

---

## 8. Funções como cidadãos de primeira classe
- Podem ser atribuídas, passadas e retornadas.
```js
function applyFn(fn, value) {
    return fn(value);
}
console.log(applyFn(x => x * 2, 5)); // 10
```

---

## 9. Callbacks e funções de ordem superior
- map, filter, reduce são exemplos práticos.
```js
const nums = [1,2,3,4];
const pares = nums.filter(n => n % 2 === 0);
const dobro = nums.map(n => n * 2);
const soma = nums.reduce((s,n) => s + n, 0);
```

---

## 10. Closures
- Função "lembra" do escopo onde foi criada.
```js
function contador() {
    let count = 0;
    return () => ++count;
}
const c = contador();
console.log(c(), c(), c()); // 1 2 3
```

---

## 11. IIFE (Immediately Invoked Function Expression)
```js
(function() {
    const msg = "Executado";
    console.log(msg);
})();
```

---

## 12. Recursão
```js
function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}
console.log(fatorial(5)); // 120
```

---

## 13. Métodos vs Funções e `this`
- Em métodos, `this` refere-se ao objeto que chama.
- Arrow functions não têm `this` próprio.
```js
const obj = {
    x: 10,
    getX() { return this.x; },
    getXArrow: () => this.x // geralmente undefined em contexto global/strict
};
console.log(obj.getX()); // 10
```

---

## 14. Funções puras vs impuras
- Pura: mesmo input => mesmo output, sem efeitos colaterais.
- Impura: depende de estado externo ou causa efeitos (ex: modificar array, console.log).

---

## 15. Async / Promises / Async-Await
```js
// exemplo com fetch (assume ambiente com fetch)
async function buscar(url) {
    const res = await fetch(url);
    return await res.json();
}
```

---

## 16. Boas práticas rápidas
- Dar nomes descritivos.
- Funções curtas e com responsabilidade única.
- Evitar efeitos colaterais inesperados.
- Usar const para funções quando possível.

---

## 17. Exercícios práticos
1. Escreva uma função que retorna os únicos valores de um array.  
2. Crie uma função `debounce(fn, wait)` simples.  
3. Implemente `compose(f, g)` que retorna x => f(g(x)).  
4. Faça um contador com closure que permita incrementar e resetar.

Dicas: usar Set para únicos; usar setTimeout/clearTimeout para debounce; retornar funções para compose.

---

Fim da aula. Pratique os exercícios e experimente combinar conceitos (closures + async, HOF + callbacks).
