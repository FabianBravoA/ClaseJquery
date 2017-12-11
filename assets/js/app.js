//window.onload(...)
$(document).ready(() => {

});

function savePin() {
    var titulo = $("#tituloInput").val();
    var descripcion = $("#descripcionInput").val();
    var url = $("#urlInput").val();

    $("#pines").append("<div class='panel panel-success'>" +
        "<div class='panel-heading'>" +
        "<h3 class='panel-title'>" + titulo + "</h3>" +
        "</div>" +
        "<div class = 'panel-body' >" +
        "</div>" +
        "<div class = 'panel-footer' >" + descripcion + "</div> </div>");
};