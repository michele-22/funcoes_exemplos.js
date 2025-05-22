// 1. Função Declarativa (function Declaration)
function saudacao(nome, idade, profissão) {
    console.log(`O ${nome} tem ${idade} anos de iadade e trabalha como ${profissao}!`)
}

saudacao("João", 30, 'Engenheiro');


// Criem uma função e retorne uma frase com 3 nomes de pessoas famosas.



//2. Função Anônima (Function Expression)
const saudacaoAnonima = function (nome) {
    return `Olá, ${nome}!`;
};





//3. Arrow Function (Função de Seta)
const saudacaoArrow = (nome) => `Olá, ${nome}!`;
console.log(saudacaoArrow("Pedro"));

const somaValor = (a,b) => `Soma: ${a} + ${b} =` +a +b;
console.log(somaValor(2,3));

const subtraiValor = (a,b) => {
    return `Subtração: ${a} - ${b} =` +(a-b);
}
console.log(subtraiValor(5,3));





//4. Função como método de Objeto
const pessoa = {
    nome: "Ana",
    falar: function () {
        return `Meu nome é ${this.nome}`;
    },
    andar: function (){
        return `Estou andando`;
    },
    cantar: function (){
        return `${this.nome} está cantando`;
    }
};


console.log(pessoa.falar());
console.log(pessoa.andar());
console.log(pessoa.cantar());


// Carro - funções: nome:Corolla, ano:2022, andar, parar, acelerar, dessacelerar, buzinar, anoModelo...







//5. Método com Sintaxe Concisa (ES6)
const pessoaConcisa = {
    nome: "Carlos",
    falar: function
}