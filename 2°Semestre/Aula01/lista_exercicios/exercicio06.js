let contador = 1;
let numero = 0;
let qtdNegativos = 0;

do{
    numero = prompt("Digite o " + contador + "° número: ");  
    if (numero < 0){
        console.log("O número " + numero + " é menor que 0!");
        qtdNegativos++;
    } else {
        console.log("O número " + numero + " é maior que 0!");
    };
    contador++;
} while (contador <= 10);

alert(qtdNegativos + " são negativos");