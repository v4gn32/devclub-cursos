# Aula: addEventListener (JavaScript)

Objetivo
- Entender como registrar e gerenciar manipuladores de eventos no DOM usando addEventListener.
- Aprender opções avançadas (capture, once, passive, signal) e técnicas recomendadas (delegação, remoção de listeners).

Pré-requisitos
- Noções básicas de JavaScript (funções, scope).
- DOM básico (querySelector, elementos, eventos simples como click).

Conteúdo

## 1. Conceito rápido
addEventListener é o método padrão para escutar eventos em elementos DOM. Permite múltiplos listeners no mesmo tipo de evento e fornece controle sobre fase de propagação e opções adicionais.

Sintaxe
```js
element.addEventListener(type, listener[, options]);
```
- type: string (ex.: 'click', 'input', 'submit', 'keydown').
- listener: função (event) { ... }.
- options: boolean (antigo, indica capture) ou objeto com propriedades:
    - capture: boolean — ouvir na fase de captura (default false, isto é bubbling).
    - once: boolean — auto-remove após primeira execução.
    - passive: boolean — melhora performance em scroll/touch (não permite preventDefault).
    - signal: AbortSignal — permite remover via AbortController.

## 2. Exemplo básico
```html
<button id="btn">Clique</button>
<script>
const btn = document.getElementById('btn');

function handleClick(e) {
    console.log('Botão clicado', e);
}

btn.addEventListener('click', handleClick);
</script>
```

## 3. Remover listener
Para remover, passe a mesma referência de função para removeEventListener:
```js
btn.removeEventListener('click', handleClick);
```
Listeners anônimos não podem ser removidos dessa forma:
```js
// NÃO REMOÇÃO POSSÍVEL depois:
btn.addEventListener('click', () => console.log('anon'));
```

## 4. Opções úteis
- once:
```js
btn.addEventListener('click', handleClick, { once: true });
```
- passive:
```js
window.addEventListener('touchstart', onTouch, { passive: true });
```
- capture:
```js
parent.addEventListener('click', onParent, { capture: true });
```
- signal (AbortController):
```js
const ac = new AbortController();
element.addEventListener('mousemove', onMove, { signal: ac.signal });
// para remover:
ac.abort();
```

## 5. Event object
O listener recebe um objeto Event (ou subclass: MouseEvent, KeyboardEvent, etc.). Propriedades importantes:
- e.target: elemento que originou o evento.
- e.currentTarget: elemento onde o listener está registrado.
- e.type, e.preventDefault(), e.stopPropagation().

Exemplo:
```js
elem.addEventListener('submit', function(e) {
    e.preventDefault(); // impede envio do formulário
});
```

Observação: não use passive: true se pretende chamar preventDefault() no handler.

## 6. Propagação: captura vs bubble
- Fase de captura: do documento para o alvo (capture: true).
- Fase de bolha: do alvo para cima (padrão).
Exemplo para testar:
```html
<div id="pai"><button id="filho">Ok</button></div>
<script>
pai.addEventListener('click', () => console.log('pai bubble'));
pai.addEventListener('click', () => console.log('pai capture'), { capture: true });
filho.addEventListener('click', (e) => {
    console.log('filho');
    // e.stopPropagation(); // previne propagação para outros nós
});
</script>
```

## 7. Delegação de eventos
Útil para muitos elementos dinâmicos: registre um listener no container e verifique event.target.
```html
<ul id="lista">
    <li data-id="1">Item 1</li>
    <li data-id="2">Item 2</li>
</ul>
<script>
const lista = document.getElementById('lista');
lista.addEventListener('click', (e) => {
    const item = e.target.closest('li');
    if (!item || !lista.contains(item)) return;
    console.log('clicou em', item.dataset.id);
});
</script>
```

Vantagens: menos listeners, funciona para itens criados dinamicamente.

## 8. Boas práticas e performance
- Prefira delegação para muitos elementos.
- Use once/passive/signal quando aplicável.
- Evite listeners pesados em scroll/resize (debounce/throttle).
- Remova listeners em componentes desmontados (SPA) para evitar leaks.

## 9. Compatibilidade
addEventListener é suportado em todos os navegadores modernos e muitos antigos. Propriedades options são amplamente suportadas; para fallback ao boolean capture, ainda funciona.

## 10. Exercícios práticos
1. Crie um contador que incrementa ao clicar e o botão se remove após 5 cliques (use once ou lógica manual).
2. Implemente uma lista onde itens adicionados dinamicamente respondam a cliques (use delegação).
3. Adicione listener de scroll com throttle para atualizar uma barra de progresso.

Sugestões de solução (resumo)
- Ex1: manter contador em outer scope; remover com removeEventListener quando atingir 5 ou usar once com lógica adicional.
- Ex2: registrar em ul > usar e.target.closest('li').
- Ex3: usar requestAnimationFrame ou setTimeout para throttle.

Recursos adicionais
- Documentação MDN: addEventListener, removeEventListener, Event, event delegation.
- Pratique em pequenos projetos: to-do list, galeria de imagens, formulários dinâmicos.

Fim.

Exemplos: 

