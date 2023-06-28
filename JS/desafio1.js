function crearTabla() {

    //obtener valores ingresados por el usuario en los inputs
    var filas = parseInt(document.getElementById("filas").value);
    var columnas = parseInt(document.getElementById("columnas").value);

    //Validar que las dimensiones de la tabla son válidas, si cumple con los requisitos comienza la construcción de la tabla
    if(filas>0 && columnas>0){
        var tablaHTML = "<table>";

        //construcción de tabla i renglones, j columnas
        
        for (var i = 0; i < filas; i++) {
            //nuevo renglón
            tablaHTML += "<tr>";
            for (var j = 0; j < columnas; j++) {
                //utiliza la función generarColorAleatorio para generar un color HEX, además agrega la posición de la celda a través de coordenadas. 
                tablaHTML += "<td style='background-color: " + generarColorAleatorio() + "'>(" + (i + 1) + "," + (j + 1) + ")</td>";    
            }
            tablaHTML += "</tr>";
        }
    //finaliza la construcción de la tabla
    tablaHTML += "</table>";
    document.getElementById("tabla").innerHTML = tablaHTML;

    }
    //si las dimensiones de la tabla no son correctas, envía ALERT! para indicar al usuario que ingrese los valores nuevamente
    else{
        alert("Las dimensiones de la tabla son incorrectas, intente nuevamente")
    }
    
}
    //Función para generar colores aleatorios
    function generarColorAleatorio() {
    //Valores permitidos en colores HEX
    var letras = "0123456789ABCDEF";
    //Variable para inicializar el color
    var color = "#";
    //realiza la construcción aleatoria de colores, concatenando el valor obtenido de las 16 posibilidades al # inicializado anteriormente, 
    //una vez realizado el cicloo 6 veces (HEX completo) se devuelve el valor del color y es usado como color de fondo de cada una de las celdas
    //de la tabla.
    for (var i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }
