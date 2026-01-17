/* LISTA DE EXERCICIOS SOBRE VARIAVEIS */


// 1. Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
console.log("Exercicio 1\n");
let nome = "Vinicius"; //String
let idade = 28; //Inteiro
let estaChovendo = false; //Boolean

console.log(typeof nome + " - " + nome); // Exibe "string"
console.log(typeof idade + " - " +  idade); // Exibe "number"
console.log(typeof estaChovendo + " - " +  estaChovendo); // Exibe "boolean"

//2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

console.log("\n\nExercicio 2")
let primeiroNome = "Vinicius";
let ultimoNome = "Sibin";

let nomeCompleto = `${primeiroNome} ${ultimoNome}`;

console.log(nomeCompleto);

//3. Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
console.log("\n\nExercicio 3")
nome = 'Vinicius';
idade = 28;

console.log(`Me chamo ${nome} e tenho ${idade} anos.`)

//4. Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
console.log("\n\nExercicio 4")
let numero = 5; 
console.log(numero);
numero = 10;
console.log(numero);

//5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
console.log("\n\nExercicio 5")
console.log("Declaração com VAR")
var variavel1 = 1;

if(true){
    var variavel2 = 2;
    console.log(`Variavel ${variavel1} - Variavel ${variavel2}`);
}

    console.log(`Variavel ${variavel1} - Variavel ${variavel2}`);

    console.log("\nDeclaração com let");
let variavel3 = 3;

if(true){
    let variavel4 = 4;
        console.log(`Variavel ${variavel3} - Variavel ${variavel4}`);

}

        //console.log(`Variavel ${variavel3} - Variavel ${variavel4}`);
        
        console.log("Com LET ocorreu o erro: ReferenceError: variavel4 is not defined por conta da variável 4 ser de uso exclusivo do bloco if e não pode ser utilizado fora.");
         

//6. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável. 
console.log("\n\nExericio 6");
estaChovendo = true;

if(estaChovendo){
    console.log("Está chovendo, leve o guarda chuva.");
} else {
    console.log("Não está chovendo não precisa levar o guarda chuva.");
}