// 4. Escreva um programa em JavaScript que solicite um número ao usuário e exiba a tabuada desse número de 1 a 10. Utilize uma estrutura de repetição while ou for para calcular e exibir a tabuada do número informado pelo usuário. O resultado deve ser exibido no console.

let number = Number(prompt(`Digite um número de 1 a 10`))

if (number > 10){
    alert(`Digite um número menor ou igual a 10`)
} else{
    for(i = 1; i <= 10; i++ ) {
            console.log(` ${number} X ${i} = ${number*i}` )
    
    }
}
