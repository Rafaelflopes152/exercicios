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
let selected = '';
let cores = 4;
let board = 5;

colorPalete.addEventListener('click', function (event) {
    // console.log(event.target);
    limpaSelecao();
    event.target.setAttribute("class", 'color selected');
    //event.target.style.backgroundColor = 'gray';
});

//limpa seleção
function limpaSelecao() {
    selected = document.getElementsByClassName("selected");

    for (let i = 0; i < selected.length; i += 1) {
        console.log(i);
        // funcao 'replace' conforme site https://www.delftstack.com/pt/howto/javascript/javascript-change-css-class/
        selected[i].classList.replace('selected', 'color');

    }
}

genera_tabela(board);

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