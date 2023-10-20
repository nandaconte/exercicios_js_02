// 9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.

let number1 = Number(prompt(`Digite um número`))

let number2 = Number(prompt(`Digite um segundo número`))

let operacao = String(prompt(`Escolha o tipo de operação matemática: + , - , * , /`))

    switch(operacao){
        case "+":
            alert(`${number1} ${operacao} ${number1} = ${number1+number2}`)
            break;
        case "-":
            alert(`${number1} ${operacao} ${number1} = ${number1-number2}`)
            break;
        case "*":
            alert(`${number1} ${operacao} ${number1} = ${number1*number2}`)
            break;
        case "/":
            alert(`${number1} ${operacao} ${number1} = ${number1/number2}`)
            break;
        default:
            alert(`Tente novamente`)        
    }
