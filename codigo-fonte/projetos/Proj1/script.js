// const input = document.getElementById("main-input")

// console.log(input)

// const elements = document.getElementsByClassName("paragraph-js")

// console.log(elements)

// const element = document.querySelector(".paragraph-js")

// console.log(element.textContent) // Só o texto, sem tags HTML
// console.log(element.innerText) // Só o texto visível, sem tags HTML
// console.log(element.innerHTML) // Texto com tags HTML

// const addTexto = document.querySelector("#add-texto")

// function clickButton() {
//     alert("Botão clicado!")
// }

// function digiteiNoInput() {
// console.log("Digitei algo no input!")
// }

const inputEl = document.getElementById('main-input');
const buttonEl = document.querySelector('#add-texto');
const paragraphEl = document.querySelector('.paragraph-js');

if (buttonEl && inputEl && paragraphEl) {
    buttonEl.addEventListener('click', () => {
        paragraphEl.textContent = inputEl.value;
    });
}