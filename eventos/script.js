// const ths = document.getElementsByTagName('th');
// recebe o tamanho do board e inicia a função que gera a tabela.
let boardSize = '';
const gBoard = document.querySelector("#generate-board");
gBoard.onclick = function () {
    boardSize = document.querySelector("#board-size");
    // verifica tamanho do quadro de pixels se esta entre 5 e 50
    if(boardSize.value<5){
        // mostre um alert caso menor que 5
        alert('Board inválido!');
        genera_tabela(5);
    }else if(boardSize.value>50){
        // mostre um alert caso maior que 50
        alert('Board inválido!');
        genera_tabela(50);
    }else{
        genera_tabela(boardSize.value);
    }
    
}
//gera tabela
function genera_tabela(numero) {
    let N = numero;
    console.log(N);
    // Obtendo a referência do elemento body
    var body = document.getElementsByTagName("body")[0];
    // Obtendo a referência do elemento main
    var main = document.getElementsByTagName("main")[0];

    // Crie um elemento <table> e um elemento <tbody>
    var tabela = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // CRIE as células
    for (var i = 0; i < N; i++) {
        // Criar as linhas da tabela
        var fila = document.createElement("tr");

        for (var j = 0; j < N; j++) {
            // Crie um elemento <td> e um nó de texto, faça do nó de texto o conteúdo do <td>, coloque o elemento <td> no final da linha da tabela
            var celula = document.createElement("td");
            var textoCelda = document.createTextNode(i + " " + j);
            celula.appendChild(textoCelda);
            fila.appendChild(celula);
            celula.setAttribute("class","pixel");
            // const celula2 = document.getElementsByTagName('td');
            // if (celula2.classList) celula2.classList.add("pixel");
            // else celula2.className += " pixel";
        }

        // adicione a linha ao final da tabela (no final do elemento tblbody)
        tblBody.appendChild(fila);
    }
    
    // posicione o <tbody> abaixo do elemento <table>
    tabela.appendChild(tblBody);
     // acrescenta <table> em <main>
    main.appendChild(tabela);
    // acrescenta <main> em <body>
    body.appendChild(main);
    // modifica o atributo "border" da tabela e o define como "2";
    tabela.setAttribute("border", "2");
    tabela.setAttribute("id",'pixel-board');
}