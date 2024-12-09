function ejecutar(){

    for (i=0; i<3; i++) {

        intentos = prompt("Introduce la palabra secreta ");

        if (intentos == "hola"){
            document.writeln("!!!FELICIDADES!!!");
            break;
        }
    }
    document.writeln("Se han acabado los intentos")
}
