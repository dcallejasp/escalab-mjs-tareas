function alphabetCounter(){
    var myString = "abcdefghijklmnñopqrstuvwxyz";
    return function(){
        var myCaracter = document.getElementById('caracter').value
        var result = myString.indexOf(myCaracter)
        document.getElementById("resultado2").innerHTML = "el index del caracter es " + result
    }
}

var test = alphabetCounter()



// function sumar(primerValor){
//     return function(segundoValor){
//         return primerValor + segundoValor;
//     }
// }

//document.getElementById("resultado2").innerHTML = position
//var myCaracter = document.getElementById('caracter').value