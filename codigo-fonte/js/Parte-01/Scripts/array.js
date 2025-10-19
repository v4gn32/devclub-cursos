// /**
//  * Exemplos complexos de manipulação de arrays em JavaScript
//  */

// // 1. Agrupar objetos por propriedade (group by)
// const pessoas = [
//     { nome: 'Ana', cidade: 'SP' },
//     { nome: 'João', cidade: 'RJ' },
//     { nome: 'Maria', cidade: 'SP' },
//     { nome: 'Pedro', cidade: 'MG' }
// ];

// const agrupadoPorCidade = pessoas.reduce((acc, pessoa) => {
//     acc[pessoa.cidade] = acc[pessoa.cidade] || [];
//     acc[pessoa.cidade].push(pessoa.nome);
//     return acc;
// }, {});
// console.log('Agrupado por cidade:', agrupadoPorCidade);

// // 2. Flatten (achatando arrays aninhados de profundidade arbitrária)
// const aninhado = [1, [2, [3, [4, 5]]], 6];
// function flatten(arr) {
//     return arr.reduce(
//         (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
//         []
//     );
// }
// console.log('Array achatado:', flatten(aninhado));

// // 3. Encontrar elementos duplicados em um array
// const numeros = [1, 2, 3, 2, 4, 5, 1, 6, 7, 5];
// const duplicados = [...new Set(numeros.filter((item, idx, arr) => arr.indexOf(item) !== idx))];
// console.log('Duplicados:', duplicados);

// // 4. Ordenar array de objetos por múltiplas propriedades
// const produtos = [
//     { nome: 'Teclado', preco: 100, estoque: 10 },
//     { nome: 'Mouse', preco: 50, estoque: 0 },
//     { nome: 'Monitor', preco: 1000, estoque: 5 },
//     { nome: 'Mouse', preco: 60, estoque: 2 }
// ];
// produtos.sort((a, b) => {
//     if (a.nome !== b.nome) return a.nome.localeCompare(b.nome);
//     return b.preco - a.preco;
// });
// console.log('Produtos ordenados:', produtos);

// // 5. Gerar todas as combinações possíveis de dois arrays
// const cores = ['vermelho', 'azul'];
// const tamanhos = ['P', 'M', 'G'];
// const combinacoes = cores.flatMap(cor => tamanhos.map(tam => ({ cor, tam })));
// console.log('Combinações:', combinacoes);

// // 6. Exemplos do curso

// const users = [
//     {
//         nome: "Vagner",
//         idade: 42,
//         nomeDoConjuge: "Michele",
//         filhos: ["Isabella", "Heloiza ou Bernardo"]
//     },
//     {
//         nome: "Michele",
//         idade: 32,
//         nomeDoConjuge: "Vagner",
//         filhos: ["Isabella", "Heloiza ou Bernardo"]
//     }
// ]

const numbers= [20, 30, 40, 50, 60, 70, 80]

console.log(numbers)
    