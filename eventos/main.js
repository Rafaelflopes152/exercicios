const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
var mybody =document.getElementsByTagName("body")[0];

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function handleChangeTech(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', handleChangeTech);
secondLi.addEventListener('click', handleChangeTech);
thirdLi.addEventListener('click', handleChangeTech);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://blog.betrybe.com/');
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
});

myWebpage.addEventListener('mouseout', function(event) {
  event.target.style.color = 'unset';
});

function set_background() {
    // obtém uma lista de todos os elementos do corpo (só haverá um),
    // e então selecione o zero (ou primeiro) tal elemento
    myBody = document.getElementsByTagName("body")[0];
  
    // agora, pegue todos os p elementos que são descendentes do corpo
    myBodyElements = myBody.getElementsByTagName("p");
  
    // obter o segundo item da lista de elementos p
    myP = myBodyElements[1];
    myP.style.background = "rgb(255,0,0)";
  }

function start() {
    mytable     = document.createElement("table");
    mytablebody = document.createElement("tbody");

    for(var j = 0; j < 2; j++) {
        mycurrent_row=document.createElement("tr");
        for(var i = 0; i < 2; i++) {
            mycurrent_cell = document.createElement("td");
            currenttext = document.createTextNode("cell is:" + i + j);
            mycurrent_cell.appendChild(currenttext);
            mycurrent_row.appendChild(mycurrent_cell);
            // definir a cor de fundo da célula
            // if the column is 0. If the column is 1 hide the cel
            if (i == 0) {
                mycurrent_cell.style.background = "rgb(255,0,0)";
            } else {
                mycurrent_cell.style.display = "none";
            }
        }
        mytablebody.appendChild(mycurrent_row);
    }
    mytable.appendChild(mytablebody);
    mybody.appendChild(mytable);
 }

