function ejecutar(){

    numero=prompt("introduce un numero");
    numero=parseInt(numero);

    if (numero % 2 == 0){
        document.writeln("El numero es par");
    }else{
        document.writeln("es impar");
    }
}