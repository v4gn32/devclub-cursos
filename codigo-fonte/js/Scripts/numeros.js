// Números inteiros
const inteiro = 42;

// Números decimais (ponto flutuante)
const decimal = 3.14159;

// Números em notação científica
const cientifico = 1.2e3; // 1200

// Operações matemáticas básicas
const soma = 10 + 5;
const subtracao = 10 - 5;
const multiplicacao = 10 * 5;
const divisao = 10 / 5;

// Arredondamento
const arredondado = Math.round(4.7); // 5

// Número para string
const numeroComoString = inteiro.toString(); // "42"

// Converter string para número
const stringParaNumero = Number("123.45"); // 123.45

// Verificar se é um número
const ehNumero = !isNaN("123"); // true

// Exemplo de uso no console
console.log(inteiro);
console.log(decimal);
console.log(cientifico);
console.log(soma, subtracao, multiplicacao, divisao);
console.log(arredondado);
console.log(numeroComoString);
console.log(stringParaNumero);
console.log(ehNumero);