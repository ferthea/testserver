function Manejador(){
  var articulos = new Array();
  this.load = function(){
    articulos.push(new Articulo("Cayo avión de Chapecoense", "Confirmaron sólo seis sobrevivientes de las 81 personas a bordo. El presidente Santos dijo que hay dos que están graves. El vuelo iba a Medellín, pero se perdió contacto a 50 kilómetros. Los brasileños debían jugar la final de la Copa Sudamericana. ", 1));
    articulos.push(new Articulo("Pidieron el embargo de los Kirchner", "Es en el marco de la causa Hotesur. Se trata de los cedidos por la ex Presidenta a sus hijos.", 2));
    articulos.push(new Articulo("Anibal Fernandez faltó a una audiencia con Carrio", "El ex jefe de Gabinete había iniciado una causa contra la diputada de Cambiemos, pero no se presentó a una instancia de apertura a prueba y absolución", 3));
    articulos.push(new Articulo("Las prepagas aumentan un 6% desde enero", "Las cuotas de las empresas de medicina privada tuvieron un aumento acumulado del 42,6%.", 4));
    articulos.push(new Articulo("Se confirmó la suspensión de Venezuela del Mercosur", "Es por no cumplir con las normas del bloque; hoy se formalizaría la medida", 5));
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
