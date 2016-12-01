function Articulo(titulo, contenido){
  this.titulo = titulo;
  this.contenido = contenido;
  this.id;
  this.render = function(){
    return "<article><h3>"+titulo+"</h3><p>"+contenido+"</p></article>"
  }
}
