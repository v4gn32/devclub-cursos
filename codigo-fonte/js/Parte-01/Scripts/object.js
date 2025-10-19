/**
 * Exemplos completos de objetos em JavaScript
 */

// Objeto simples
const pessoa = {
    nome: "Vagner",
    idade: 42,
    profissao: "Desenvolvedor",
    saudacao: function() {
        return `Olá, meu nome é ${this.nome}.`;
    }
};

console.log(pessoa.nome); // Vagner
console.log(pessoa.saudacao()); // Olá, meu nome é Ana.

// Objeto com propriedades aninhadas
const carro = {
    marca: "Toyota",
    modelo: "Yaris XL",
    ano: 2024,
    motor: {
        tipo: "Flex",
        potencia: "150cv"
    }
};

console.log(carro.motor.tipo); // Flex

// Objeto com array como propriedade
const aluno = {
    nome: "Carlos",
    notas: [8, 7.5, 9, 10],
    media: function() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
};

console.log(aluno.media()); // 8.625

// Criando objeto com função construtora
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = function() {
        return `${this.nome} custa R$${this.preco}`;
    };
}

const produto1 = new Produto("Notebook", 3500);
console.log(produto1.descricao()); // Notebook custa R$3500

// Objeto usando Object.create
const animal = {
    tipo: "Mamífero",
    som: function() {
        return "Algum som";
    }
};

const cachorro = Object.create(animal);
cachorro.nome = "Rex";
cachorro.som = function() {
    return "Au Au!";
};

console.log(cachorro.tipo); // Mamífero
console.log(cachorro.som()); // Au Au!

let usuario = {
    name: "Vagner",
    age: 30,
    address: {
        street: "Rua Maniel Alves",
        number: 155,
        city: "Jandira",
        state: "SP"
    },
    isAdmin: true
}; 

usuario.address.number = 200;

console.log(usuario); // Vagner

