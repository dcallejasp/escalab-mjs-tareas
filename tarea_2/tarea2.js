var myObjeto = {
    mascotas :['perros','gatos','canarios','pez','serpiente'],
    esSegura : false,
    llamarAlerta : function(mensaje){
        alert(mensaje)
    },
    esHttps : function(){
        this.esSegura = document.baseURI.includes('https')
    },
    eliminarMascota: function(tipoMascota){
       var indexArreglo = this.mascotas.indexOf(tipoMascota)
       this.mascotas.splice(indexArreglo,1)
       return this.mascotas
    },
    eliminarUltimaMascota: function(){
       this.mascotas.pop()
       return this.mascotas
    },
    agregarMascotas: function(nuevaMascota){
        this.mascotas.push(nuevaMascota)
        return this.mascotas
    },
    contadorMascotas: function(){
        var contador = 0
        for (var i = 0; i < this.mascotas.length; i++ ){
            this.mascotas[i].includes('os') && contador++
        }
        return "En el Arreglo hay " + contador + " mascotas que terminan con 'os'"
    }
}