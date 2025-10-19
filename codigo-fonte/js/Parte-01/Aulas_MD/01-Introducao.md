# Aula Introdutória ao JavaScript

## Por que usar JavaScript?

- **HTML**: Responsável pela estrutura da página.
- **CSS**: Responsável pelo estilo e aparência.
- **JavaScript (JS)**: Responsável pela interatividade e lógica das aplicações web.

JavaScript é a linguagem de programação que permite criar páginas dinâmicas, interativas e modernas. Ele é executado no navegador e pode manipular tanto o conteúdo quanto o comportamento da página.

---

## O que você pode fazer com JavaScript?

- Manipular elementos do HTML (DOM)
- Responder a eventos do usuário (cliques, teclas, etc.)
- Validar formulários
- Fazer requisições para servidores (AJAX)
- Criar animações e efeitos visuais
- Desenvolver aplicações completas (front-end e back-end)

---

## Primeiro Exemplo de Código

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Minha Primeira Página JS</title>
    </head>
    <body>
        <h1>Olá, JavaScript!</h1>
        <button onclick="mostrarMensagem()">Clique aqui</button>

        <script>
            function mostrarMensagem() {
                alert('Bem-vindo ao JavaScript!');
            }
        </script>
    </body>
</html>
```

---

## Sintaxe Básica

- **Variáveis**: `let`, `const`, `var`
- **Funções**: Blocos de código reutilizáveis
- **Eventos**: Ações do usuário que podem ser capturadas pelo JS

```js
let nome = "Maria";
function saudacao() {
    console.log("Olá, " + nome + "!");
}
saudacao();
```

---

## Dicas para Aprender JavaScript

- Pratique escrevendo pequenos códigos todos os dias.
- Experimente modificar exemplos e veja o que acontece.
- Use o console do navegador para testar comandos rapidamente.
- Leia a documentação oficial e busque referências confiáveis.

---

## Resumo

- JavaScript é essencial para criar páginas web modernas.
- Ele trabalha junto com HTML e CSS.
- Aprenda com calma, praticando e explorando exemplos.

---

**Próximos passos:**  
Vamos aprofundar nos conceitos de variáveis, funções, eventos e manipulação do DOM nas próximas aulas!