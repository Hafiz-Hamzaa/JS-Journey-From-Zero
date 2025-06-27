// ---- create a calculator with using a function
function calculator(num1,num2,operator){
    if(operator === "+"){
        return num1 + num2
    }else if (operator === "-"){
        return num1 - num2
    }else if (operator === "*"){
        return num1 * num2
    }else if (operator === "/"){
        return num1 / num2
    }else if (operator === "**"){
        return num1 ** num2
    }else if (operator === "%"){
        return num1 % num2
    }else{
        return "invalid operator"
    }
}
console.log(calculator(10 , 20 , "/"));