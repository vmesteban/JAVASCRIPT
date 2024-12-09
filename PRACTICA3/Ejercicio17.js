function ejecutar(){
    lista = 0
    numero = ''
    
    numero= prompt("introduce un numero "); 
    numero= parseInt(numero);

    for(i=1;i<=numero;i++){
        if (i % 5 == 0) {
            lista ++;
        }
    }   
    document.writeln("Resultado: " + lista);     
}  

