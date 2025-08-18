let btn = document.querySelector("button");
let textoSorteador = document.querySelector("h2");
let listaNumeros = document.querySelector("p");

let lista = [];
let numero;

function random(num){
    return Math.floor((Math.random() * num)+1);
};

btn.onclick = function() {
    let cor = 
    "rgb(" +random(15) + "," +random(15) + ","+random(15) + ")";

    if (lista.length >= 70) {
        alert("Todos os números já foram sorteados!")
    } else {
        do {
            numero = random(70);
        } while (lista.includes(numero));

        lista.push(numero);
        
        if (numero <= 15){
            numero = "B" + numero;
        } else if (numero < 30){
            numero = "I" + numero;
        } else if (numero < 45){
            numero = "N" + numero;
        } else if (numero < 60){
            numero = "G" + numero;
        } else {
            numero = "O" + numero;
        };
        
        textoSorteador.textContent = numero;  

        listaNumeros.innerHTML = lista.join(" | ");
        document.body.style.backgroundColor = cor;
    }
};

