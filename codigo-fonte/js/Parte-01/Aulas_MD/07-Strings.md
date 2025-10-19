/*
Aula Completa sobre Strings em JavaScript

Strings são sequências de caracteres usadas para representar texto.
Podem ser declaradas com aspas simples (' '), duplas (" ") ou crase (` `) para template literals.
*/

// Declaração de strings
const nome1 = 'Maria';
const nome2 = "João";
const nome3 = `Ana`;

// Propriedade length
console.log(nome1.length); // 5

// Acessando caracteres
console.log(nome1[0]); // 'M'
console.log(nome1.charAt(1)); // 'a'

// Concatenando strings
const saudacao = 'Olá, ' + nome2 + '!';
console.log(saudacao);

// Template literals (interpolação)
const idade = 25;
const mensagem = `Meu nome é ${nome3} e tenho ${idade} anos.`;
console.log(mensagem);

// Métodos comuns de string
const frase = "  JavaScript é incrível!  ";

// toUpperCase e toLowerCase
console.log(frase.toUpperCase()); // "  JAVASCRIPT É INCRÍVEL!  "
console.log(frase.toLowerCase()); // "  javascript é incrível!  "

// trim, trimStart, trimEnd
console.log(frase.trim()); // "JavaScript é incrível!"
console.log(frase.trimStart()); // "JavaScript é incrível!  "
console.log(frase.trimEnd()); // "  JavaScript é incrível!"

// indexOf, lastIndexOf, includes, startsWith, endsWith
console.log(frase.indexOf('Script')); // 5
console.log(frase.lastIndexOf('!')); // 22
console.log(frase.includes('incrível')); // true
console.log(frase.startsWith('  Java')); // true
console.log(frase.endsWith('!  ')); // true

// slice, substring, substr (substr está obsoleto)
console.log(frase.slice(2, 13)); // "JavaScript"
console.log(frase.substring(2, 13)); // "JavaScript"

// replace, replaceAll
console.log(frase.replace('incrível', 'fantástico')); // "  JavaScript é fantástico!  "
console.log('a-b-c'.replaceAll('-', ':')); // "a:b:c"

// split e join
const palavras = frase.trim().split(' '); // ["JavaScript", "é", "incrível!"]
console.log(palavras);
console.log(palavras.join('-')); // "JavaScript-é-incrível!"

// Repetição de strings
console.log('ha'.repeat(3)); // "hahaha"

// Comparação de strings
console.log('abc' === 'abc'); // true
console.log('abc' > 'abd'); // false

// Caracteres especiais e escape
const texto = 'Ele disse: "Olá!"\nNova linha\tTab';
console.log(texto);

// Unicode e emojis
const emoji = '😀';
console.log(emoji.length); // 2 (cuidado com emojis!)

// Convertendo outros tipos para string
console.log(String(123)); // "123"
console.log((456).toString()); // "456"

// Exercício: Inverter uma string
function inverter(str) {
    return str.split('').reverse().join('');
}
console.log(inverter('JavaScript')); // "tpircSavaJ"