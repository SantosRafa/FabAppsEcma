function minhaLista(...nomes){
    console.log(nomes);
}

minhaLista("Rafael","Guilherme", "Ian");

function minhaLista2(...numeros){
    console.log(numeros);
}

minhaLista(1, 2, 3);

function cadastrarUsers(usuarios,...novosUsuarios){
  let usersTudo =[
      ...usuarios,
      ...novosUsuarios
  ]
    console.log(usersTudo);
}

let usuarios =["Matheus", "Joao"];

let novosUsuarios = cadastrarUsers(usuarios, "Henrique", "Lucas");
