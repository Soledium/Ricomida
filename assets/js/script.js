
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// alerta del mail
$( "#pop-up" ).click(function() {
    alert( "El correo fue enviado correctamente..." );
 });
//  "INGREDIENTES" y "PREPARACIÓN" a color rojo
 var listadodbl = $("#listado").first();
 listadodbl.dblclick(function(){
    listadodbl.toggleClass("dbl")
 })
 var elaboraciondbl = $("#elaboracion").first();
 elaboraciondbl.dblclick(function(){
     elaboraciondbl.toggleClass("dbl")
 })
//  desaparecer y aparecer el contenido en todas las tarjetas "card" de la sección de Recetas Relacionadas
$( ".card-title" ).click(function(){
    $(".card-text").toggle(function() {
    });
})


