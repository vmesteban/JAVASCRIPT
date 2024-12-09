function ejecutar(){
    
}

function bienvenida() {
    alert("Hola!!!");
}

function despedida() {
    alert("Adios");
}

function Introduce() {
    num1=prompt("Introduce un numero ");
    num1=parseInt(num1);
    num2=prompt("Introduce otro numero ");
    num2=parseInt(num2);
}

function mostrar() {
    alert("El resultado de la suma es: " + resultado);
}

function sumar() {
    Introduce();
    resultado = num1 + num2;
    mostrar();
}

function restar() {
    Introduce();
    resultado = num1 - num2;
    mostrar();
}

function multiplicacion() {
    Introduce();
    resultado = num1 * num2;
    mostrar();
}

function division() {
    Introduce();
    resultado = num1 / num2;
    mostrar();
}
