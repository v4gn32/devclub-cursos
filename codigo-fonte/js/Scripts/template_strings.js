const nome = "Maria";
const idade = 28;

// Exemplo 1: Interpolação de variáveis
const saudacao = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(saudacao);

// Exemplo 2: Expressões dentro do template string
const a = 5;
const b = 10;
const resultado = `A soma de ${a} + ${b} é igual a ${a + b}.`;
console.log(resultado);

// Exemplo 3: Multilinhas
const mensagem = `
Olá, ${nome}!
Bem-vinda ao nosso sistema.
Idade cadastrada: ${idade}
`;
console.log(mensagem);

// Exemplo 4: Função retornando template string
function boasVindas(usuario) {
    return `Bem-vindo(a), ${usuario}!`;
}
console.log(boasVindas("João"));

// Exemplo 5: Template string com objeto
const produto = { nome: "Notebook", preco: 3500 };
const infoProduto = `Produto: ${produto.nome} - Preço: R$ ${produto.preco}`;
console.log(infoProduto);