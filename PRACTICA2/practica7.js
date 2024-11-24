function ejecutar(){

    numero=prompt("introduce un numero");
    numero=parseInt(numero);

    if ((numero > 100) || (numero == 100)) {
        numero = numero * (numero * (15/100));
        document.writeln("el numero con descuento" + "del 15% es" + numero);
    }
}
 