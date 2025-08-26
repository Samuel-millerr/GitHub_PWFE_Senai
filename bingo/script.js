let gridNumbers = document.getElementById("gridNumbers");
let btn = document.getElementById("drawButton");
let caseNumber  = document.getElementById("drawNumber");

let listaSorteados = [];
let drawNumber = 1;

// Adiciona o grid dos números do bingo assim que a página é iniciada
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
    return Math.floor(Math.random(1, 75) * (num+1));
}

// Verifica qual letra corresponde a certo número
function getLetterByNumber(num) {
    if (num <= 15) return "B";
    if (num <= 30) return "I";
    if (num <= 45) return "N";
    if (num <= 60) return "G";
    return "O"; 
}

function draw() {
    // Condição para verificar se todos os números já foram sorteados
    if (listaSorteados.length > 75) {
        alert("Todos os números já foram sorteados!")
    } else {
        let number;
        do {
            number = random(75);
        } while (listaSorteados.includes(number));

        listaSorteados.push(number) // Adiciona o número sorteado na lista

        const result = getLetterByNumber(number) + number;

        caseNumber.innerText = result; // Injeta o número sorteado no HTML
        
        let groupNumbers = gridNumbers.querySelectorAll(".numbersStyle") // Pega as tags HTML com a classe numbersStyle (Todos os números)
        console.log(groupNumbers)
        // Utiliza um for para procurar o número sorteado e qual for encontrado o mesmo muda de classe
        for (let i=0;i < groupNumbers.length; i++){
            let actualNumber = parseInt(groupNumbers[i].innerText);
            if (actualNumber == number) {
                groupNumbers[i].classList.add("numbersDrawStyle");
            }      
        }
    }
}

btn.addEventListener("click", draw);