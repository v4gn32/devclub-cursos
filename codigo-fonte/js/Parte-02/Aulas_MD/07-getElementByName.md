# getElementsByName — Aula completa

## Introdução
`document.getElementsByName` seleciona elementos do DOM cujo atributo `name` corresponde ao valor informado. É especialmente útil para controlar grupos de campos de formulário (por exemplo radios, checkboxes, inputs) que compartilham o mesmo `name`.

> Observação: o nome correto do método é `getElementsByName` (plural).

## Sintaxe
```js
const lista = document.getElementsByName(name);
```
- `name` (string): valor do atributo `name` a ser procurado.
- Retorna uma coleção (NodeList) de elementos que possuem esse `name`. Pode variar entre navegadores quanto à “dinamicidade”; se precisar de uma coleção estática use `querySelectorAll`.

## Exemplo básico
HTML:
```html
<form id="f">
    <input type="text" name="usuario" value="Ana">
    <input type="text" name="usuario" value="Bruno">
</form>
```
JS:
```js
const usuarios = document.getElementsByName('usuario');
console.log(usuarios.length); // 2
console.log(usuarios[0].value); // "Ana"
```

## Uso comum: radios
HTML:
```html
<label><input type="radio" name="cor" value="vermelho"> Vermelho</label>
<label><input type="radio" name="cor" value="azul"> Azul</label>
<label><input type="radio" name="cor" value="verde"> Verde</label>
```
JS para obter o valor selecionado:
```js
const radios = document.getElementsByName('cor');
let selecionado = null;
for (const r of radios) {
    if (r.checked) {
        selecionado = r.value;
        break;
    }
}
console.log(selecionado);
```

## Diferenças e alternativas
- `querySelectorAll('[name="foo"]')` — retorna NodeList estático e aceita seletores CSS.
- `getElementById('id')` — retorna um único elemento por ID.
- `getElementsByClassName('cls')` / `getElementsByTagName('tag')` — retornam coleções (HTMLCollection).

Escolha `getElementsByName` quando trabalhar explicitamente com `name` (ex.: formulários) e quiser compatibilidade direta; prefira `querySelectorAll` para seletores mais flexíveis.

## Boas práticas
- Usar `name` para agrupar campos de formulário (radio/checkbox) — evite duplicar `id`.
- Se for iterar muitas vezes, converta para array: `Array.from(document.getElementsByName('x'))`.
- Para código moderno e previsível, `document.querySelectorAll('[name="x"]')` costuma ser mais claro.
- Evite depender de coleções “live” quando for manipular DOM dinamicamente — pode levar a bugs.

## Exercícios sugeridos
1. Criar um formulário com um grupo de radios nomeado `tamanho` e exibir o valor selecionado quando o usuário clicar em um botão.
2. Obter todos os inputs com `name="tag"` e substituir o texto por letras maiúsculas.
3. Comparar resultados entre `getElementsByName('a')` e `querySelectorAll('[name="a"]')` após adicionar/remover elementos dinamicamente.

## Resumo rápido
- Método: `document.getElementsByName(name)`
- Uso: seleciona elementos por atributo `name`
- Retorno: coleção de elementos
- Alternativas: `querySelectorAll`, `getElementById`
- Caso de uso típico: formulários (radios, checkboxes)

Fim da aula.