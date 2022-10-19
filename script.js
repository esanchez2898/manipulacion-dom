const h1 = document.querySelector('#h1');
const form = document.querySelector('#form');
const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');
const btn = document.getElementById('btnCalcular');
const r = document.getElementById('result');

btn.addEventListener('click', suma);

h1.innerHTML = "Hello World!";

function suma() {
    event.preventDefault(); // Evita que la pagina recarge
    const total = parseInt(i1.value) + parseInt(i2.value);
    console.log(total);
    r.innerText = "Total: " + total + " Por favor no pases el mouse encima de mi o.o";
}


//addEventListener

r.addEventListener("mouseover", enviarFormulario)

function enviarFormulario(e){
    e.preventDefault();
    alert("Te dije -.- ahora moriras")
}