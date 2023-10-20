// 7. Escreva um programa em JavaScript que solicite uma nota ao usuário e verifique se ela é válida. Utilize uma estrutura de decisão if para verificar se a nota informada está dentro do intervalo de 0 a 10, e exiba a mensagem correspondente no console.


let grade = Number(prompt(`Digite uma nota de 0 a 10`))

if(grade > 10 || grade < 0){
    alert(`Nota inválida, favor digitar uma nota entre 0 a 10`)
}
else if (grade > 0 && grade <= 10){
    alert(`É uma nota válida.`)
}
