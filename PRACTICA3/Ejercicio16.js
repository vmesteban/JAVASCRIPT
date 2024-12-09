function ejecutar(){
    lista = 1

    for(i=1;i<=20;i++){
        if (i % 3 == 0) {
            lista = lista * i;
            document.writeln(i, " ", lista, '<br>');
        }
    }   
    document.writeln("Resultado: " + lista);     
}  

