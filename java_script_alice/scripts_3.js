// Problema 3: 
// Crie uma função que recebe um número (x) como parâmetro e determine se ele
// é impar ou par. A função deve exibir as seguintes mensagens em seus devidos casos.
// ● Caso o número seja par: “O número 2 é par.”
// ● Caso o número seja ímpar: “O número 25 é ímpar.”
// Dica: Utilize estruturas condicionais e trabalhe com operadores.



function verificarParidade(x) {
    if (x % 2 === 0) {
        console.log(`O número ${x} é par.`);
    } else {
        console.log(`O número ${x} é ímpar.`);
    }
}

verificarParidade(6); 
verificarParidade(23);