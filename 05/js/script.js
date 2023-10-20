// 5. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console.

let number = Number(prompt(`Digite um número aletório`))

if( number > 0){
    alert(`O  número ${number} é positivo`);
}else if (number === 0){
    alert (`O número ${number} é igual a zero`)
}else{
    alert(`O número ${number} é negativo`)
}