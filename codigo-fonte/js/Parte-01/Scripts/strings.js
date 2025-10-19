// String com aspas simples
const nome = 'Maria';

// String com aspas duplas
const sobrenome = "Silva";

// String com template literals (crase)
const cidade = `São Paulo`;

// Concatenando strings com o operador +
const nomeCompleto = nome + ' ' + sobrenome;

// Usando template literals para interpolação de variáveis
const mensagem = `Olá, meu nome é ${nomeCompleto} e moro em ${cidade}.`;

// String multilinha com template literals
const textoMultilinha = `Esta é uma string
que ocupa várias linhas
usando template literals.`;

// Exibindo os exemplos
console.log(nome);
console.log(sobrenome);
console.log(cidade);
console.log(nomeCompleto);
console.log(mensagem);
console.log(textoMultilinha);