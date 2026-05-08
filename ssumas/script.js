function sumar(){

    // Obtener valores
    let n1 = parseFloat(document.getElementById("num1").value) || 0;
    let n2 = parseFloat(document.getElementById("num2").value) || 0;
    let n3 = parseFloat(document.getElementById("num3").value) || 0;
    let n4 = parseFloat(document.getElementById("num4").value) || 0;

    // Suma
    let suma = n1 + n2 + n3 + n4;

    // Mostrar resultado
    document.getElementById("resultado").innerHTML =
        "Resultado: " + suma;
}