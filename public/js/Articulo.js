function Articulo(titulo, contenido, id){
  this.titulo = titulo;
  this.contenido = contenido;
  this.id = id;
  this.render = function(){
    return `<article><h3><a href="noticia`+id+`.html">`+titulo+`</h3><p>`+contenido+`</p></article>`;
  }
}
