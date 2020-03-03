function adicionar(...numeros){
    let total = numeros.reduce(function(total,proximo){
        return total+ proximo
    });
    console.log(total);
}


adicionar(1,2,3,4,5);

function adicionar2(...numeros){
    let total = numeros.reduce((total,proximo)=>{
        return total+ proximo
    });
    console.log(total);
}


adicionar2(1,2,3,4,5);