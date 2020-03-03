var listaProdutos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];

console.log(listaProdutos);
console.log(listaProdutos.length);
listaProdutos.splice(2,1);
console.log(listaProdutos);
console.log(listaProdutos.indexOf('Computador'));

if(listaProdutos.indexOf('Computador')> -1){
    console.log(`O produto ${listaProdutos[listaProdutos.indexOf('Computador')]} esta na posicao ${listaProdutos.indexOf('Computador')}`);
}else{
    console.log("Este produto não existe");
}
listaProdutos.splice(1,1);
console.log(listaProdutos);

var listaNumeros = [1,3,5,7,0,9]

listaNumeros.sort();
console.log(listaNumeros);
listaNumeros.shift();
console.log(listaNumeros);
listaNumeros.reverse();
console.log(listaNumeros);

var Data = new Date();
var data = Data.getDate();
var mes = (Data.getMonth()+1);
var ano = Data.getFullYear();

let hoje =`${data}/${mes}/${ano}`;
console.log(hoje);
console.log(Data);
console.log(data);
console.log(mes);
console.log(ano);