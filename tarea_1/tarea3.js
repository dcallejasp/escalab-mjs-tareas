function GetPrecio(){
    var impuesto = 0.19
    return function (){
        var precio = document.getElementById('precio').value
        var respuesta = (1 + impuesto) * precio
        return  document.getElementById("resultado3").innerHTML = "el precio final es " + respuesta
        
    }
}

var resultado = GetPrecio()