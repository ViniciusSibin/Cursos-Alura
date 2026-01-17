//CASO 1 

if (true) {
    var x = 10;
    console.log(x);
}

x = 'Trocou o valor';
console.log(x);

/*
    O escopo de uma variável é o contexto em que ela é definida e acessível.
    No caso da variável 'x', ela é definida dentro do bloco if, mas como foi declarada com 'var',
    ela é elevada (hoisting) e pode ser acessada fora do bloco. Isso pode levar a comportamentos inesperados,
    como a modificação do valor da variável fora do bloco em que foi definida.
*/


/*----------------------------------------------------------------------------*/
//CASO 2

if (true) {
    let y = 20;
    console.log(y);
}

y = 'Trocou o valor';
console.log(y);

/*
    No caso da variável 'y', ela é definida dentro do bloco if, mas como foi declarada com 'let',
    ela possui escopo de bloco e não pode ser acessada fora do bloco. Isso evita comportamentos inesperados,
    como a modificação do valor da variável fora do bloco em que foi definida.

    Como a variável y existe somente no dentro do bloco, quando foi utilizana novamente fora foi criada uma nova variável.
    Poderia ser por exemplo let y = 'Trocou o valor'
*/

