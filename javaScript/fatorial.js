// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
let numero = 10;
let fator = numero;

for (let i=10; i >= 1 ;i--){
    fator=fator*i;
    console.log(i);
}
console.log("O fator é:"+fator);