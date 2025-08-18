// Exercício01
let nome;
nome = prompt("Digite seu nome: ");
alert("Olá, " + nome + "!");

// Exercício02
let materia;
materia = prompt("Digite sua matéria favorita: ");
alert("A matéria " + materia + " realmente e uma bosta!");

// Exercício03
let dataHoje;
dataHoje = prompt("Digite a data de hoje: ");

// Exercício04
confirm("Você está preparado para o segundo semestre de desenvolvimento de sistemas?");

// Operador ternário
let input = confirm("Você está bem?")
let reposta = (input) ? "Que pena!":"Que bom!";
alert(reposta);



// Loop
let marcas= ["Ferrari","Chevrolet","Lamborgni","Fiat"];
for (let i = 0; i <= marcas.length-1; i++){
    console.log(marcas[i]);
};

let condicao = true;
while (condicao){
    if (condicao){
        condicao = confirm("Quer continuar?");
    } else {
        condicao = false;
    };
};

condicao = true;
do{
    if (condicao){
        condicao = confirm("Quer continuar?");
    } else {
        condicao = false;
    };
} while (condicao);


// Arrays
let lista = ["JAILSON", "PEDRO", "ENZO", "MARIO"];

// PUSH - ADICIONA ALGO NO FIM DA LISTA
lista.push("ROBERTO");
console.log(lista);

// UNSHIFT - ADICIONA ALGO NO INICIO DA LISTA
lista.unshift("MARCOS");
console.log(lista);

// POP - RETIRA SEMPRE O ULTIMO ELEMENTO DA LISTA 
lista.pop();
console.log(lista);

// SHIFT- RETIRA SEMPRE O PRIMEIRO ELEMENTO DA LISTA
lista.shift();
console.log(lista);


// Funções
function soma(n1, n2){
    console.log(n1 + n2);
};
soma(4,7);

const soma_braba = function(n1,n2){
    return n1+n2;
};
console.log(soma_braba(4,4));

const sub = (n1, n2) => n1-n2;
console.log(sub(10,9));


let btn = document.querySelector("button");

function random(num){
    return Math.floor(Math.random() * (num+1));
};

btn.onclick = function() {
    let cor = 
    "rgb(" +random(255) + "," +random(255) + ","+random(255) + ")";

    document.body.style.backgroundColor = cor;
};

