
function validar(numero){
    var numero = document.getElementById('quantity').value;
    if (numero % 2 ){
        document.getElementById("resultado").innerHTML = "El numero es Impar";
    } else {
        document.getElementById("resultado").innerHTML = "El numero es Par";
    }
}

