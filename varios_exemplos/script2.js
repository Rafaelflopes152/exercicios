// variaveis do sistema
const criarTarefa = document.querySelector("#criar-tarefa");
// Obtendo a referência do elemento body
const body = document.getElementsByTagName("body")[0];
// Obtendo a referência do elemento 'lista-tarefas'
const listaTarefa = document.getElementById("lista-tarefas");
let lis = '';
let textoTarefa = '';

// muda cor de fundo quando clicado
listaTarefa.addEventListener('click', function (event) {
    // console.log(event.target);
    limpaSelecao(lis.length);
    // event.target.setAttribute("class", 'selected');
    event.target.style.backgroundColor = 'gray';
});

listaTarefa.addEventListener('dblclick', function (event) {
    let cName = event.target.className
    // console.log(cName);
    if (cName === 'completed') {
        event.target.setAttribute("class", ' ');
    } else {
        event.target.setAttribute("class", 'completed');
    }
});

//limpa seleção
function limpaSelecao(lista) {
    lis = document.getElementsByTagName('li');

    for (let i = 0; i < lista; i += 1) {

        lis[i].style.backgroundColor = 'white';
    }
}


// espera o click do botão
criarTarefa.onclick = function () {
    textoTarefa = document.querySelector("#texto-tarefa");
    inseriTarefa(textoTarefa.value);
    textoTarefa.value = '';
}

// inseri tarefa
function inseriTarefa(texto) {
    let linha = document.createElement("li");
    let tarefa = document.createTextNode(texto);
    linha.appendChild(tarefa);
    listaTarefa.appendChild(linha);
    body.appendChild(listaTarefa);
}
// function genera_tabela(numero) {
//     let N = numero;
//     console.log(N);
//     // Obtendo a referência do elemento body
//     // var body = document.getElementsByTagName("body")[0];
//     // Obtendo a referência do elemento main
//     var main = document.getElementsByTagName("main")[0];

//     // Crie um elemento <table> e um elemento <tbody>
//     var tabela = document.createElement("table");
//     var tblBody = document.createElement("tbody");

//     // CRIE as células
//     for (var i = 0; i < N; i++) {
//         // Criar as linhas da tabela
//         var fila = document.createElement("tr");

//         for (var j = 0; j < N; j++) {
//             // Crie um elemento <td> e um nó de texto, faça do nó de texto o conteúdo do <td>, coloque o elemento <td> no final da linha da tabela
//             var celula = document.createElement("td");
//             var textoCelda = document.createTextNode(i + " " + j);
//             celula.appendChild(textoCelda);
//             fila.appendChild(celula);
//             celula.setAttribute("class", "pixel");
//             // const celula2 = document.getElementsByTagName('td');
//             // if (celula2.classList) celula2.classList.add("pixel");
//             // else celula2.className += " pixel";
//         }

//         // adicione a linha ao final da tabela (no final do elemento tblbody)
//         tblBody.appendChild(fila);
//     }

//     // posicione o <tbody> abaixo do elemento <table>
//     tabela.appendChild(tblBody);
//     // acrescenta <table> em <main>
//     main.appendChild(tabela);
//     // acrescenta <main> em <body>
//     body.appendChild(main);
//     // modifica o atributo "border" da tabela e o define como "2";
//     tabela.setAttribute("border", "2");
//     tabela.setAttribute("id", 'pixel-board');
// }

// monitora a tabela e pinta a celula quando clicado
// function monitoraClick(){
//     let lis = document.getElementsByTagName('li');
// for (let i = 0; i < lis.length; i += 1) {
//     lis[i].addEventListener('click', function (e) {
//       // 'this' no site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
//       lis.style.backgroundColor = 'gray';
//     });
//   }
// }