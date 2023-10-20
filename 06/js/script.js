// 6. Escreva um programa em JavaScript que solicite uma letra ao usuário e verifique se ela é uma vogal ou consoante. Utilize uma estrutura de decisão if para verificar se a letra informada é uma vogal ou consoante, e exiba a mensagem correspondente no console.

let letter = String(prompt(`Digite uma letra aleatória`))


if (letter == "a" || letter == "e" ||  letter== "i" || letter=="o" || letter=="u") {
    alert(`É uma vogal`)
} else{
    alert(`É uma consoante`)
}

