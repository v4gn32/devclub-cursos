# Aula: getElementById (JavaScript / DOM)

Objetivo: entender e aplicar document.getElementById para selecionar e manipular elementos do DOM de forma segura e eficiente.

---

## 1. O que é
document.getElementById(id) é um método DOM que retorna o elemento cujo atributo `id` corresponde à string fornecida. Retorna `null` se não encontrar.

- Sintaxe: `const el = document.getElementById('meuId');`
- Só aceita um id (único por documento).
- É rápido e suportado por todos os navegadores.

---

## 2. Uso básico

Exemplo mínimo (arquivo HTML + script):
```html
<!doctype html>
<html>
<head><meta charset="utf-8"><title>Exemplo</title></head>
<body>
    <div id="mensagem">Olá</div>
    <script>
        const msg = document.getElementById('mensagem');
        console.log(msg); // <div id="mensagem">Olá</div>
    </script>
</body>
</html>
```

Observação: se o script for executado antes do elemento existir, `msg` será `null`. Use `defer`, coloque o script no final do `body` ou ouça `DOMContentLoaded`.

---

## 3. Acessando e alterando conteúdo

- innerText: texto visível (respeita CSS).
- textContent: texto bruto (mais rápido).
- innerHTML: HTML dentro do elemento (cuidado com XSS).

```js
const el = document.getElementById('mensagem');
el.innerText = 'Olá, mundo!';
el.textContent = 'Olá, mundo!'; // alternativa
el.innerHTML = '<strong>Olá</strong>'; // insere HTML
```

---

## 4. Inputs e value

Para campos de formulário:
```html
<input id="nome" value="Ana">
```
```js
const nome = document.getElementById('nome');
console.log(nome.value); // "Ana"
nome.value = 'Bruno';
```

---

## 5. Manipulação de classes e estilo

- classList para adicionar/remover/toggle.
- style para estilos inline.

```js
const box = document.getElementById('box');
box.classList.add('ativo');
box.classList.remove('inativo');
box.classList.toggle('escondido');

box.style.backgroundColor = '#f0f0f0';
```

---

## 6. Eventos

Ligando eventos diretamente:
```js
const botao = document.getElementById('btn');
botao.addEventListener('click', function (e) {
    console.log('clicado', e);
});
```

Evitar atribuir `onclick = ...` quando possível; use addEventListener.

---

## 7. Checagens e boas práticas

- Sempre verifique nulo:
```js
const el = document.getElementById('x');
if (el) {
    // manipula el
}
```
- Use `defer` em scripts externos ou coloque scripts no final do `body`.
- Prefira `textContent` quando só precisar de texto (mais seguro/rápido).
- Evite innerHTML com conteúdo vindo de usuário sem sanitização (Risco XSS).

---

## 8. Performance & caching

Se usar repetidamente o mesmo elemento, armazene em variável:
```js
const titulo = document.getElementById('titulo');
titulo.textContent = 'Novo';
```
Evite chamar getElementById várias vezes no mesmo fluxo.

---

## 9. Diferenças e alternativas

- document.querySelector('#id') retorna o mesmo elemento, mas é mais genérico e um pouco mais lento.
- getElementsByTagName / getElementsByClassName retornam coleções ao invés de um único elemento.
- Quando tiver vários elementos com mesma classe, use querySelectorAll ou getElementsByClassName.

---

## 10. Erros comuns

- Usar id duplicado no HTML (ID deve ser único).
- Executar script antes do elemento existir (resulta em null).
- Confundir innerText / textContent / innerHTML.
- Modificar DOM excessivamente em loops; prefira fragmentos ou atualização em lote.

---

## 11. Exercícios práticos

1. Crie uma página com um parágrafo (id="texto") e um botão. Ao clicar no botão, altere o texto.
2. Crie um input (id="entrada") e um botão. Ao clicar, copie o value do input para um elemento span (id="saida").
3. Tenha uma lista <ul id="lista"> e um botão "Adicionar". Ao clicar, crie um novo <li> com texto do input e adicione à lista usando createElement e appendChild.
4. Adicione/remova uma classe "ativo" em um elemento ao clicar (use classList.toggle).

---

## 12. Resumo rápido

- getElementById é simples, rápido e adequado para selecionar elementos únicos por id.
- Verifique nulo, prefira scripts com defer ou após o body.
- Combine com classList, value, textContent/innerHTML e addEventListener para manipular o DOM.

---

Fim da aula. Trabalho recomendado: implementar os exercícios e testar no console do navegador.