function ejecutar(){
    secreto = 33;
    numero = '';
    intentos = 1;

    while (numero != secreto && intentos <= 6) {

        
        numero = prompt("introduce un numero ");
        numero = parseInt(numero);

        if ( numero < secreto ) {
            alert("El numero secreto es mayor ");
        }
        else  if ( numero > secreto ) { 
            alert("El numero secreto es menor ");
        }
        intentos ++;
    }

    if (numero == secreto) {
        document.writeln("has acertado el numero "); 
    }
    else {
        document.writeln("Se han acabado los intentos ");
    }
}

