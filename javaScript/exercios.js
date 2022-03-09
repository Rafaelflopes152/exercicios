// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
let soma = 0;
for(let index = 1; index <= 50; index += 1) {
    soma += index;
}
//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let count = 0;
let limite = 300;
for (let index = 2; index <= limite; index += 1) {
    if(index % 3 === 0){
        count += 1;
        console.log(count);
    }
}
if(count === 50){
    console.log('ola mundo');
}
//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
let p1 = 'tesoura';
let p2 = 'pedra';
if(p1 === 'pedra' && p2 === 'tesoura'){
    console.log('Player 1 won');
}
else if (p1 === 'tesoura' && p2 === 'pedra'){
    console.log('Player 2 won');
}
else if (p1 === 'tesoura' && p2 === 'papel'){
    console.log('Player 1 won');
}
else if (p1 === 'papel' && p2 === 'tesoura'){
    console.log('Player 2 won');
}
else if (p1 === 'papel' && p2 === 'pedra'){
    console.log('Player 1 won');
}
else if (p1 === 'pedra' && p2 === 'papel'){
    console.log('Player 2 won');
}
else if (p1 === p2){
    console.log('A Ties');
}
//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
let idade = 14;
if (idade >= 18){
    console.log("A pessoa é maior de idade")
} else {
    console.log("A pessoa é menor de idade")
}
​//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.
let idadeManu = 19;
let idadeAna = 14;
let idadeRonald = 18;

if (idadeManu < idadeAna && idadeManu < idadeRonald){
    console.log("Manu é a mais nova");
}else if (idadeAna < idadeRonald){
    console.log("Ana é a mais nova");
}else {
    console.log("Roanld é a mais nova");
}