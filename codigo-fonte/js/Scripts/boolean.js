/**
 * Exemplos completos de uso de boolean em JavaScript
 */

// Declarando variáveis booleanas diretamente
let isActive = true;
let isComplete = false;

console.log("isActive:", isActive); // true
console.log("isComplete:", isComplete); // false

// Comparações retornam boolean
let a = 10;
let b = 20;

let isGreater = a > b; // false
let isEqual = a === 10; // true

console.log("a > b:", isGreater);
console.log("a === 10:", isEqual);

// Operadores lógicos com booleanos
let hasPermission = true;
let isAdmin = false;

let canAccess = hasPermission && isAdmin; // false
let canEdit = hasPermission || isAdmin; // true
let isNotAdmin = !isAdmin; // true

console.log("canAccess:", canAccess);
console.log("canEdit:", canEdit);
console.log("isNotAdmin:", isNotAdmin);

// Conversão de outros tipos para boolean
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(''):", Boolean('')); // false
console.log("Boolean('texto'):", Boolean('texto')); // true
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false

// Uso em estruturas de controle
if (isActive) {
    console.log("O sistema está ativo.");
} else {
    console.log("O sistema está inativo.");
}

if (!isComplete) {
    console.log("A tarefa ainda não foi concluída.");
}