// 2. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é par ou ímpar. Utilize uma estrutura de decisão if para verificar se o número é par ou ímpar, e exiba a mensagem correspondente no console.

let number = Number(prompt(`Digite um número`))

if (number % 2 == 1){
    alert(`O número ${number} é ímpar`)

}
else{
    alert(`O número ${number} é par`)
}