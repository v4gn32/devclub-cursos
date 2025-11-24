/*

    Eventos

*/

const input = document.querySelector("#main-input")
const select = document.querySelector("#curso")
const button = document.querySelector(".main-button")

select.addEventListener("change", function() {
    console.log("O valor do select mudou")   
})