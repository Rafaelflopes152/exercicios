let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: 
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
  };
//   console.table(leitor);
  console.log("O livro favorito de "+leitor.nome+" se chama "+leitor.livrosFavoritos.titulo);