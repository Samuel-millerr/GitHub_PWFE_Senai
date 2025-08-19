let gridNumbers = document.getElementById("gridNumbers")

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
    };
};
