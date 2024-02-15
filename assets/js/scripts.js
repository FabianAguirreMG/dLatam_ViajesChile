$(function(){
// Funcion que controla el smooth scroll
    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var anchor = this.hash;
  
        $("html, body").animate({
          scrollTop: $(anchor).offset().top
        }, 200, function(){
          window.location.hash = anchor;
        });
      }
    });
  
  
  });

// funcion que habilita el uso de tooltips.
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Funcion que lanza alert al enviar formulario
$(document).ready(function () { 
  $("#enviar").click(function () { 
      alert("Formulario Enviado"); 
  }); 
}); 