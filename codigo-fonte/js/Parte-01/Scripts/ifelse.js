/* Controlador de Fluxo - If...Else

Estrutura básica de um comando if...else em JavaScript:

if (se) {
    bloco de código a ser executado se a condição for verdadeira
} else (se não) {
    bloco de código a ser executado se a condição for falsa
}

Operadores de comparação comuns:
- Igualdade: ==
- Estritamente igual: ===
- Diferente: !=
- Estritamente diferente: !==
- Maior que: >
- Menor que: <
- Maior ou igual a: >=
- Menor ou igual a: <=

*/

//Exemplos:

5 > 10 // Falso
5 < 10 // Verdadeiro

const notaAluno = 10;
const notaCorte = 5;

if (notaAluno > notaCorte) {
    // O que sera executado se a condição for verdadeira
    console.log("Parabéns, você foi aprovado!");
} else {
    // O que sera executado se a condição for falsa
    console.log("Infelizmente, você foi reprovado. Tente novamente!");
}

// Outro exemplo

const senhaUsuario = 123456;
const senhaDigitada = 123456;

if (senhaUsuario === senhaDigitada) {
    console.log("Acesso concedido. Bem-vindo!");
} else {
    console.log("Acesso negado. Senha incorreta.");
}