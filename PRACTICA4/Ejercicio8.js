function operadores(operador) {
 

    if (operador == "primer") {

       /* if (arguments.length >0){ 
            document.writeln.arguments;
            prompt();
        }*/

        operprimer = prompt("Introduce el digito del primer operador: ");
        primerop = primerop + operprimer;
        document.write(primerop);
        

    }

    if (operador == "segun"){
        opersegun = prompt("Introduce el digito del segundo operador: ");
        segunop = segunop + opersegun;
        document.write(segunop);
        
    }
     
    return primerop, segunop;

}


function resultado(operacion,primerop,segunop) {

    if (operacion == "sumar"){
        primerop=parseInt(primerop);
        segunop=parseInt(segunop);
        resultado=primerop+segunop;

    }

    if (operacion == "restar"){
        primerop=parseInt(primerop);
        segunop=parseInt(segunop);
        resultado=primerop-segunop;
    }

    if (operacion == "multiplicar"){
        primerop=parseInt(primerop);
        segunop=parseInt(segunop);
        resultado=primerop*segunop;
    }

    if (operacion == "dividir"){
        primerop=parseInt(primerop);
        segunop=parseInt(segunop);
        resultado=primerop/segunop;
    }

    if (operacion == "igual"){
        document.writeln(resultado);
        primerop=parseInt(primerop);
        segunop=parseInt(segunop);
    

        primerop= '';
        segunop= '';    
    }

    document.writeln(primerop,segunop,resultado);
    return
}