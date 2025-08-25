let gridNumbers = document.getElementById("gridNumbers");
let btn = document.getElementById("drawButton");
let caseNumber  = document.getElementById("caseNumber");

let listaSorteados = [];
let drawNumber = 1;

for (let i = 1; i <= 5; i++){
    let newColumn = document.createElement("hgroup"); // Cria uma nova coluna 
    newColumn.classList.add("columnDrawnNumbers"); // Adiciona a classe de style a nova coluna
    gridNumbers.appendChild(newColumn); // Adiciona a nova coluna no grid de números 
    for (let j = 1; j <= 15; j++){ // Usa o for para percorrer a coluna criada
        let caseNumber = document.createElement("h2"); // Cria um novo número
        caseNumber.classList.add("numbersStyle"); // Adiciona classe de style para o novo número
        newColumn.appendChild(caseNumber); // Adiciona o novo número a coluna
        caseNumber.innerText = drawNumber; // Seta o numero correspondente a case 
        drawNumber ++;
    }
}

function random(num){
    return Math.floor(Math.random() * (num+1));
}

function getLetterByNumber(num) {
    if (num <= 15) return "B";
    if (num <= 30) return "I";
    if (num <= 45) return "N";
    if (num <= 60) return "G";
    return "O"; 
}

function draw() {
    if (listaSorteados.length == 75) {
        alert("Todos os números já foram sorteados!")
    } else {
        let number;
        do {
            number = random(75);
        } while (listaSorteados.includes(number));
        listaSorteados.push(number)

        let result = getLetterByNumber(number) + number;
        console.log(number)

        caseNumber.innerText = result;
    }
}

btn.addEventListener("click", draw);