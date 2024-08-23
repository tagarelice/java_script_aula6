// Problema 1: 
//Crie uma função com dois parâmetros, um inteiro e um booleano (True or
//False), que determina se uma pessoa pode dirigir com base na idade e se ela tem ou não
//carteira de motorista. 


function podeDirigir(idade, temCarteira) {
    if (idade >= 18 && temCarteira) {
        console.log("Você está apto(a) a dirigir.");
    } else if (idade >= 18 && !temCarteira) {
        console.log("Você não está apto(a) a dirigir.");
    } else {
        console.log("Você não está apto(a) a dirigir.");
    }
}

podeDirigir(18, true);  
podeDirigir(15, false); 
podeDirigir(16, false); 
podeDirigir(21, true);