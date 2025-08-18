const n = prompt("Digite o número que você deseja saber a tabuada: ");

if (n <= 0){
    alert("O número precisa ser maior que 0!");
} else {
    console.log("TABUADINHA");
    for (let i = 1;i <= 10; i++){
        console.log(n + " * " + i + " = " + i*n);
    };
};