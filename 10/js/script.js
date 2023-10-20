
// 10. Escreva um programa em JavaScript que solicite um número ao usuário e exiba todos os números ímpares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é ímpar, e exibir os números ímpares encontrados no console.

let number = Number(prompt(`Digite um número`))

console.log(`Os números ímpares são:`)

for (i = 1;  i <= number; i++){
    if (i % 2 == 1){
        console.log(i)
    }
    
}

// let contador = 1

// while (contador <= number && contador ++){

//     if (contador % 2 == 1){
//         console.log(contador)
    
//     }
// }