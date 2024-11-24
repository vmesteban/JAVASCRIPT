function ejecutar()
{
    numero1=prompt("introduce un numero");
    numero2=prompt("introduce otro numero");

    numero_1=parseInt(numero1);
    numero_2=parseInt(numero2);

    suma=numero1 + numero2;
    resta=numero_1 - numero_2;
    multiplicacion=numero_1 * numero_2;
    division=numero_1 / numero_2;
    resto=numero_1 % numero_2;

    document.writeln("La suma es ", suma, "<br>");
    document.writeln("La resta es ", resta, "<br>");
    document.writeln("La multiplicación es ", multiplicacion, "<br>");
    document.writeln("El cociente es ", division, "<br>");
    document.writeln("El resto es ", resto, "<br>"); 
} 

