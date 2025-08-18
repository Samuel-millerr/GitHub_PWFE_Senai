let numero = 0;
let contador = 0;

for (let i = 1; i <= 10; i++){
    numero = prompt("Digite o "+ i + "° número: ");
    if (numero >= 10 & numero <= 20){
        contador++;
    }
}

alert(contador + " numero(s) estão entre 10 e 20")