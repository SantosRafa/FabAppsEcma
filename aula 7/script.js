

const lista = [1, 2, 3, 4, 5, 6];

const novaLista = lista.map(function(item){
    return item *5;

});

const novaLista2 = lista.map(function(item, index){
    return item + index;

});

console.log(novaLista);
console.log(novaLista2);

const some = lista.reduce(function(total, proximo){
    return total+proximo;
});

console.log(some); 

const achacaralho = lista.find(function(item){
    return item === 6;
})
console.log(achacaralho);