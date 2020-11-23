function lanzar(){
    var x = 1
    var y = 6
    var dado = Math.round((Math.random() * (x - y) + y))
    console.log(dado)
    return function(){
        var nombre = document.getElementById('name').value;
        console.log(nombre)
        return document.getElementById("resultado4").innerHTML = nombre + " el resultado es " + dado;
    }
}

var resultado = lanzar()