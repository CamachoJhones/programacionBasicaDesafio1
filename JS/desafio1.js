function crearTabla() {
    var filas = parseInt(document.getElementById("filas").value);
    var columnas = parseInt(document.getElementById("columnas").value);


    if(filas>0 && columnas>0){
        var tablaHTML = "<table>";
        for (var i = 0; i < filas; i++) {
            tablaHTML += "<tr>";
            for (var j = 0; j < columnas; j++) {
                tablaHTML += "<td style='background-color: " + generarColorAleatorio() + "'>(" + (i + 1) + "," + (j + 1) + ")</td>";    
            }
            tablaHTML += "</tr>";
        }
    tablaHTML += "</table>";
    document.getElementById("tabla").innerHTML = tablaHTML;

    }

    else{
        alert("Las dimensiones de la tabla son incorrectas, intente nuevamente")
    }
    
}

  function generarColorAleatorio() {
    var letras = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }