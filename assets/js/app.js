var idPin = 0;

//window.onload(...)
$(document).ready(() => {

});

function savePin() {
    var titulo = $("#tituloInput").val();
    var descripcion = $("#descripcionInput").val();
    var url = $("#urlInput").val();

    $("#pines").append("<div id='pin_" + idPin + "' class='pin col-md-3'>" +
        //Este es el frente
        "<div class='panel panel-success front'>" +
        "<div class='panel-heading'>" +
        "<h3 class='panel-title'>" + titulo + "</h3>" +
        "</div>" +
        "<div class = 'panel-body' >" +
        "<a href='#' class='thumbnail'>" +
        "<img src='" + url + "' alt='...'>" +
        "</a>" +
        "</div>" +
        "<div class = 'panel-footer' >" + descripcion + "</div> </div>" +
        //Este es el panel detrás
        "<div class='rear'>" +
        "</div>" +
        "</div>");

    //Este es el ID de este pin en particular
    var pinId = "#pin_" + idPin;
    $("#pin_" + idPin).mouseover(() => {
        $(pinId + " > .front").fadeTo(1000, 0, () => {
            $(pinId + " > .front").hide();
            $(pinId + " > .rear").fadeTo(1000, 1);
        });
    });

    idPin++;
};