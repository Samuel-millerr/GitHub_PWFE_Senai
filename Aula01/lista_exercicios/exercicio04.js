const n = prompt("Digite um número: ");

if (n <= 0){
    alert("O número não pode ser menor que 0!");
} else {
    for (let i = 1; i <= n; i++){
        console.log(i);
    };
};