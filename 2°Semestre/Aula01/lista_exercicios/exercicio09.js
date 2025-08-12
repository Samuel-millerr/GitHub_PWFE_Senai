let nota = 0;
let qtdAlunos = 0;
let somaNotas = 0;

qtdAlunos = prompt("Digite a quantidades de alunos presentes na sala: ");
for (let i = 1; i <= qtdAlunos; i++){
    nota = parseInt(prompt("Digite a nota do " + i + "º aluno: "));
    somaNotas += nota;
}

alert("A média da sala de "+ qtdAlunos +" alunos é de "+ (somaNotas/qtdAlunos))