let nota = 0;
let somaNotas = 0;
let media = 0;

for (let i = 0; i < 10; i++){
    nota = parseInt(prompt("Digite a " + (i+1) + "° nota: "));
    somaNotas += nota;
};

media = somaNotas/10;
alert("A média entre as notas é de " + media);