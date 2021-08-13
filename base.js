// operadores: Podemos usar +, -, *, / para executar as operações básicas como os números inteiros

/* Soma OK
let numero = 2;
let numero1 = 5;
let resultado = numero + numero1;
console.log(resultado);
*/

// Subtração OK
/*
let numero = 2;
let numero1 = 5;
let resultado = numero - numero1;
console.log(resultado);
*/

/* Multiplicação OK
let numero = 5;
let resultado = numero * 0.5;
console.log(resultado);
*/

/* Divisão OK
let numero = 54245;
let resultado = numero / 5;
console.log(resultado);
*/

//Strings: São valores de texto, normalmente chamados de "cadeias de caracteres".
/*
let olaMundo = "olá Mundo!"
console.log(olaMundo);
*/

// Podemos usar aspas duplas ou simples em strings
/*
let olaMundo = 'olá Mundo!'
console.log(olaMundo);
*/

/* caracteres especias nas strings

\n:  Nova Linha
\\:  exibe a \
\':  exibe ' (aspas simples)
\" : exibe "
*/

// Leitura de caaracteres especiais OK
/*
let caracteresEspecias = "Lorem \n Inpsum \\ dolor \' \" amet" 
console.log(caracteresEspecias);
*/



//Concatenação de strings: diversas formas:

// Primeira forma: Utilizando sinal de +
/*
let ola = "Olá";
let Mundo = " Mundo!"
let olaMundo = ola+Mundo;
console.log(olaMundo);
*/


// Primeira forma: Utilizando o string.concat
/*
let ola = "Olá ";
let Mundo = "Mundo!"
let olaMundo = ola.concat(Mundo);
console.log(olaMundo);
*/


// Terceira forma: template de Strings ---- utiliza o ${expressão} e a crase
/*
let ola = "Olá ";
let Mundo = "Mundo!"
let olaMundo = `${ola} ${Mundo} ${1+1}`;
console.log(olaMundo);
*/


/* 
Booleanos: Tipos de dados que possuem apenas dois valores
TRUE: VERDADEIRO
FALSE: FALSO
Não são escritos entre aspas, pois se forem entre aspas será uma string

let verdadeiro = true
let false = false
*/

//exemplos:
/*
//true OK
let comparacao = 1==1; // 1 igual a 1 
console.log(comparacao);

//false
let comparacao2 = 1 > 5;
console.log(comparacao2);

//true comparação entre strings
let comparacaoString = "banana" == "banana";
console.log(comparacaoString);
*/
// Se testar 1 == "1", obterá true. Para fazer comparações que levem
// em consideração o valor e o tipo de dado, devemos utilzar ===

/*
//exemplos
//true
console.log(1 == "1")

//false
console.log(1==="1")
*/

