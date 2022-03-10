let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}
info["recorrente"] = 'Sim';
// console.table(info);
// console.log("Bem-vinda, "+info.personagem);
for (let key in info) {
  if (info[key] === info2[key]) {
    console.log("Ambos recorrentes");
  }else{
    console.log(info[key] + ' e ' + info2[key]);
  }
  
}