
class Pessoa{
    constructor(){
        this.nome ='',
        this.sobrenome =''
    }

    nomePessoa(primeiroNome){
        this.nome = primeiroNome;
        console.log(this.nome);
    }

    segundoNome(segundoNome){
        this.sobrenome = segundoNome;
        console.log(this.sobrenome);
    }

    nomeCompleto(){
        let nomeCompleto =this.nome + ' '+ this.sobrenome;
        console.log(nomeCompleto);
    }
};

let pessoa1 = new Pessoa();

pessoa1.nomePessoa('Rafael');
pessoa1.segundoNome('Santos');
pessoa1.nomeCompleto();