function realizarOperacion(operacion) {
    if (operacion == suma) {
        num1=prompt("Introduce un numero ");
        num1=parseInt(num1);
        num2=prompt("Introduce otro numero ");
        num2=parseInt(num2);
        resultado = num1 + num2;
        alert("El resultado de la + operacion + es: " + resultado);
    }else if (operacion == resta) {
        num1=prompt("Introduce un numero ");
        num1=parseInt(num1);
        num2=prompt("Introduce otro numero ");
        num2=parseInt(num2);
        resultado = num1 - num2;
        alert("El resultado de la + operacion + es: " + resultado);
    }else if (operacion == multiplicacion) {
        num1=prompt("Introduce un numero ");
        num1=parseInt(num1);
        num2=prompt("Introduce otro numero ");
        num2=parseInt(num2);
        resultado = num1 * num2;
        alert("El resultado de la + operacion + es: " + resultado);
    }
        num1=prompt("Introduce un numero ");
        num1=parseInt(num1);
        num2=prompt("Introduce otro numero ");
        num2=parseInt(num2);
        resultado = num1 / num2;
        alert("El resultado de la + operacion + es: " + resultado); 
}
