function ejecutar(){

    numero = " ";
    errores = ' ';

    while (numero != "19"){
        numero = prompt("Introduce un numero ");
        if (numero != 19) {
            errores = errores + '  ' + numero;
        }
    }
    document.writeln("El numero de errores es " + errores);
}

