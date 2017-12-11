//window.onload(...)
$(document).ready(() => {

});

function savePin() {
    var titulo = $("#tituloInput").val();
    var descripcion = $("#descripcionInput").val();
    var url = $("#urlInput").val();

    $("#pines").html("<div class='panel panel-default'>" +
        "<div class = 'panel-body' >" +
        "Panel content </div>" +
        "<div class = 'panel-footer' > Panel footer </div> </div>");
};