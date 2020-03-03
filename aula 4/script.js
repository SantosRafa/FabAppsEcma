const pessoa = {
    nome: "Matheus",
    sobrenome:"Fraga",
    idade:10,
    cargo: "Dev"
}

let { nome } = pessoa;

console.log( pessoa );
console.log( nome );

let nomes = ['Matheus', 'Fraga', 10];

let { 1: sobrenome} = nomes;
console.log(sobrenome);

let nomes2 = ['Matheus', 'Fraga', 10];

let [nominho, sobrenomenominho, idadinha] = nomes2;

console.log(nominho);
console.log(sobrenomenominho);
console.log(idadinha);
