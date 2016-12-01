function Manejador(){
  var articulos = new Array();
  this.load = function(){
    articulos.push(new Articulo("Cayo avión de Chapecoense", "Confirmaron sólo seis sobrevivientes de las 81 personas a bordo. El presidente Santos dijo que hay dos que están graves. El vuelo iba a Medellín, pero se perdió contacto a 50 kilómetros. Los brasileños debían jugar la final de la Copa Sudamericana. "));
    articulos.push(new Articulo("Pidieron el embargo de los Kirchner", "Es en el marco de la causa Hotesur. Se trata de los cedidos por la ex Presidenta a sus hijos."));
    articulos.push(new Articulo("Anibal Fernandez faltó a una audiencia con Carrio", "El ex jefe de Gabinete había iniciado una causa contra la diputada de Cambiemos, pero no se presentó a una instancia de apertura a prueba y absolución"));
    articulos.push(new Articulo("Noticia 4", "Descripcion noticia 4"));
    articulos.push(new Articulo("Noticia 5", "Descripcion noticia 5"));
    articulos.push(new Articulo("Noticia 6", "Descripcion noticia 6"));
    articulos.push(new Articulo("Noticia 7", "Descripcion noticia 7"));
    articulos.push(new Articulo("Noticia 8", "Descripcion noticia 8"));
    articulos.push(new Articulo("Noticia 9", "Descripcion noticia 9"));
    articulos.push(new Articulo("Noticia 10", "Descripcion noticia 10"));
  }

  this.render = function(div, cantidad){

    if(articulos.length > cantidad){
      displayPaginador(articulos, cantidad);
    }
    var paginaActual = getParameterByName("pagina") ? getParameterByName("pagina") : 1;
    dibujarArticulos(div, articulos, cantidad, paginaActual);
  }
}

function displayPaginador(array, size){
  var paginatorSize = Math.ceil(array.length / size);
  var lista = document.getElementById("listaPaginas");
  for(var i = 0; i < paginatorSize; i++){
    var pag = i+1;
    lista.innerHTML += '<li><a href="?pagina='+pag+'">'+pag+'</a></li>';
  }
}

function dibujarArticulos(div, arr, cantidad, pagina){
  elemento = document.getElementById(div);
  var tam = (pagina-1)*cantidad;
  for(var i = tam; i < tam + cantidad; i++){
    if(arr[i]){
      elemento.innerHTML += arr[i].render();
    }
  }
}


function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
