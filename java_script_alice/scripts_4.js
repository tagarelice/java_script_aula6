// Problema 4: Crie uma função que recebe um número como parâmetro e decrementa esse
// número de 1 em 1.
// Ao passar o número 5 como parâmetro da função, ela deve exibir no console:
// 4
// 3
// 2
// 1
// 0
// Dica: Utilize laços de repetição (For ou While).


function decrementarNumero(n) {
    for (let i = n - 1; i >= 0; i--) {
        console.log(i);
    }
}

decrementarNumero(5);