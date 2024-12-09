function ejecutar(){

    numero = prompt("Introduce un numero: ");
    numero = parseInt(numero);

    for (i=0;i<=10;i++) {
        resultado = numero * i;
        document.writeln("resultado de " + numero + " por " + i + " = " + resultado + "<br>");
    }
 }
 