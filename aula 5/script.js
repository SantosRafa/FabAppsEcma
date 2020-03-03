let primeiros = [1,2,3];

console.log(primeiros);

let numeros = [...primeiros, 4,5,6];

console.log(numeros);


let pessoa={
    nome:"rafa",
    idade:"21",
    cargo:"programador"
}

console.log(pessoa);

let novaPessoa ={
    ...pessoa,
    anoAtual:2050,
    cidade:"sfc"
}

console.log(novaPessoa);

function cadastroPessoa(info){
    let novosDados={
        ...info,
        status:"fodao"
    }

    return novosDados;
}

console.log(cadastroPessoa(pessoa));


