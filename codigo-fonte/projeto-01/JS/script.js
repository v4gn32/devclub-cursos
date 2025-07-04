let webhook = "https://v4gn320l1v32.app.n8n.cloud/webhook/animacao-css";

async function cliqueiNoBotao() {
  let textoInput = document.querySelector(".input-animacao").value;

  let resposta = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pergunta: textoInput }),
  });

  console.log(resposta);
}
