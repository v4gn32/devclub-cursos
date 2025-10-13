## Atalho para rodar código JavaScript

Se você está usando o **VS Code**, pode rodar código JavaScript rapidamente usando a extensão **Code Runner**:

1. Instale a extensão [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner).
2. Abra o arquivo `.js`.
3. Use o atalho:  
    - **Windows/Linux:** <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>  
    - **Mac:** <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>N</kbd>

Isso executa o código JavaScript diretamente no terminal do VS Code.

> Alternativamente, você pode rodar pelo terminal com:
> ```sh
> node nome-do-arquivo.js
> ```

---

## Outras formas de executar JavaScript

### 1. No Navegador

Você pode executar JavaScript diretamente no navegador usando o console de desenvolvedor:

1. Abra seu navegador (Chrome, Firefox, Edge, etc.).
2. Pressione <kbd>F12</kbd> ou <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> para abrir as ferramentas de desenvolvedor.
3. Vá até a aba **Console**.
4. Digite seu código JavaScript e pressione <kbd>Enter</kbd> para executar.

### 2. Usando um arquivo HTML

Crie um arquivo `.html` e inclua seu código JavaScript dentro da tag `<script>`:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Executando JavaScript</title>
    </head>
    <body>
        <script>
            console.log('Olá, mundo!');
        </script>
    </body>
</html>
```

Abra o arquivo no navegador para ver o resultado no console.

### 3. Usando Node.js no terminal

Se você tiver o Node.js instalado, pode criar um arquivo `.js` e executar pelo terminal:

```sh
node seu-arquivo.js
```

### 4. Em ambientes online

Existem sites que permitem executar JavaScript sem instalar nada, como:

- [JSFiddle](https://jsfiddle.net/)
- [CodePen](https://codepen.io/)
- [PlayCode](https://playcode.io/)

Essas plataformas são ótimas para testes rápidos e compartilhamento de código.

---