// **variaveis do sistema***
// Seleciona cor
const colorPalete = document.getElementById("color-palette");
// botão para gerar board
const generateBoard = document.querySelector("#generate-board");
// Obtendo a referência do elemento body
const body = document.getElementsByTagName("body")[0];
// Obtendo a referência do elemento main
const main = document.getElementsByTagName("main")[0];
// Obtendo a referência do elemento 'pixel-board'
const pixelBoard = document.getElementById("pixel-board");
// board
const pixel = document.getElementsByClassName('pixel');
// botão limpa tudo
const clear = document.getElementById('clear-board');

let selected = '';
let cores = 'rgb(0,0,0)';
let board = 6;

genera_tabela(board);

// recebe o tamanho do board e inicia a função que gera a tabela.
let boardSize = '';
const gBoard = document.querySelector("#generate-board");
gBoard.onclick = function () {
    boardSize = document.querySelector("#board-size");
    // // verifica tamanho do quadro de pixels se esta entre 5 e 50
    // if (boardSize.value < 5) {
    //     // mostre um alert caso menor que 5
    //     alert('Board inválido!');
    //     genera_tabela(5);
    // } else if (boardSize.value > 50) {
    //     // mostre um alert caso maior que 50
    //     alert('Board inválido!');
    //     genera_tabela(50);
    // } else {
    //     genera_tabela(boardSize.value);
    // }
    inserirLinhaTabela(boardSize);

}
colorPalete.addEventListener('click', function (event) {
    limpaSelecao();
    event.target.setAttribute("class", 'color selected');
    corSelecionada(event.target.id);
});

pixelBoard.addEventListener('click', function (event) {
    event.target.style.backgroundColor = cores;
});

// pinta todas as pexil de branco
clear.addEventListener('click', function (e) {
    // console.log(pixel.length);
    for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = 'white';
    }
});

// seleciona cor
function corSelecionada(ID) {
    let cor
    if (ID === "color1") {
        cor = "rgb(0,0,0)";
    } else if (ID === "color2") {
        cor = 'rgb(255, 0, 0)';
    } else if (ID === "color3") {
        cor = 'rgb(0, 0, 255)';
    } else if (ID === "color4") {
        cor = 'rgb(0, 255, 0)';
    }
    cores = cor;
    return (cores);
}

//limpa seleção
function limpaSelecao() {
    selected = document.getElementsByClassName("selected");
    for (let i = 0; i < selected.length; i += 1) {
        // funcao 'replace' conforme site https://www.delftstack.com/pt/howto/javascript/javascript-change-css-class/
        selected[i].classList.replace('selected', 'color');
    }
}

//gera tabela
function genera_tabela(numero) {
    let N = numero;
    // console.log(numero);
    // Crie um elemento <tbody>
    var tblBody = document.createElement("tbody");

    // CRIE as células
    for (var i = 0; i < numero; i++) {
        // Criar as linhas da tabela
        var fila = document.createElement("tr");

        for (var j = 0; j < numero; j++) {
            // Crie um elemento <td> e um nó de texto, faça do nó de texto o conteúdo do <td>, coloque o elemento <td> no final da linha da tabela
            var celula = document.createElement("td");
            fila.appendChild(celula);
            celula.setAttribute("class", "pixel");
        }

        // adicione a linha ao final da tabela (no final do elemento tblbody)
        tblBody.appendChild(fila);
    }

    // posicione o <tbody> abaixo do elemento <table>
    pixelBoard.appendChild(tblBody);
    // acrescenta <table> em <main>
    main.appendChild(pixelBoard);
    // acrescenta <main> em <body>
    body.appendChild(main);
    // modifica o atributo "border" da tabela e o define como "2";
    // tabela.setAttribute("border", "2");
    pixelBoard.setAttribute("id", 'pixel-board');

}

// Função responsável por inserir linhas na tabela

function inserirLinhaTabela(N) {
    // pixelBoard
    // Captura a quantidade de linhas já existentes na tabela
    let numRows = pixelBoard.rows.length;
    // Captura a quantidade de colunas da última linha da tabela
    let numCols = pixelBoard.rows[numRows - 1].cells.length;
    for (let i = 0; i < numCols; i += 1) {
        // Insere uma linha no fim da tabela.
        var newCol = pixelBoard.insertRow(N);
        var newRow = pixelBoard.insertRow(i);
        console.log(newRow);

        // Faz um loop para criar as colunas
        for (var j = 0; j < numCols; j++) {
            // Insere uma coluna na nova linha 
            newCell = newRow.insertCell(j);
            newCell.setAttribute("class", "pixel");

        }
    }
}