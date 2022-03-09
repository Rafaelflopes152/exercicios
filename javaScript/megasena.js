let numeros = [10,20,30,60,11,5];
let sorteio = [10,20,30,60,11,5];
let resultado = [];
let acertos = 0;
for(let i = 0;i<numeros.length;i++){
    sorteio[i] = (Math.floor(Math.random() * 60+1));
    for(let o = 0; o < numeros.length;o++){
        if (sorteio[o] === numeros[i]) {
            acertos += 1;
            
        }
    }
}
console.log("Jogo é "+numeros);
console.log("Sorteio é "+sorteio);

if(acertos>=6){
    console.log('Ganhou! com '+acertos);
}else{
    console.log('Não foi dessa fez! acertou: '+acertos);
}
// array1.find(element => element > 10);
// console.log("Acertos: "+acertos);