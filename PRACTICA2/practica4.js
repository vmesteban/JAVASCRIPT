function ejecutar(){

    numero=prompt("introduce tu edad");
    numero=parseInt(numero);

    if ((numero == 18) || (numero > 18)){
        document.writeln("Eres mayor de edad");
    }else {
        document.writeln("Eres menor de edad");
    }
}