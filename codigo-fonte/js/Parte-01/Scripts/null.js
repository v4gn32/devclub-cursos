/**
 * Exemplos completos de Null & Undefined em JavaScript
 */

// Exemplo 1: Variável não inicializada (undefined)
let a;
console.log('a:', a); // undefined

// Exemplo 2: Variável explicitamente definida como undefined
let b = undefined;
console.log('b:', b); // undefined

// Exemplo 3: Variável explicitamente definida como null
let c = null;
console.log('c:', c); // null

// Exemplo 4: Função sem return retorna undefined
function semRetorno() {}
console.log('semRetorno():', semRetorno()); // undefined

// Exemplo 5: Propriedade inexistente de objeto é undefined
const obj = { nome: 'Maria' };
console.log('obj.idade:', obj.idade); // undefined

// Exemplo 6: Array com elemento vazio (undefined)
const arr = [1, , 3];
console.log('arr[1]:', arr[1]); // undefined

// Exemplo 7: Comparação entre null e undefined
console.log('null == undefined:', null == undefined); // true
console.log('null === undefined:', null === undefined); // false

// Exemplo 8: Uso comum de null para "sem valor"
let usuario = null;
if (!usuario) {
    console.log('Usuário não está definido (null ou undefined)');
}

// Exemplo 9: undefined em parâmetros de função
function saudacao(nome) {
    if (nome === undefined) {
        console.log('Olá, visitante!');
    } else {
        console.log('Olá,', nome + '!');
    }
}
saudacao(); // Olá, visitante!
saudacao('Ana'); // Olá, Ana!

// Exemplo 10: null como valor de reset
let resultado = 42;
resultado = null; // resetando valor
console.log('resultado:', resultado); // null

// Exemplo 11: Verificação de null e undefined
const user = {
    nome: "Vagner",
    age: 42,
    nomeDoConjuge: null,
    id: null,   
}

console.log(user.nome); // "Vagner"