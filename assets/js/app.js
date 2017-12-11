//window.onload(...)
$(document).ready(() => {

});

function savePin() {
    var titulo = $("#tituloInput").val();
    var descripcion = $("#descripcionInput").val();
    var url = $("#urlInput").val();
    console.log("Titulo > " + titulo);
    console.log("descripcion > " + descripcion);
    console.log("Url > " + url);
}