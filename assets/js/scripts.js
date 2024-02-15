$(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var anchor = this.hash;
  
        $("html, body").animate({
          scrollTop: $(anchor).offset().top
        }, 800, function(){
          window.location.hash = anchor;
        });
      }
    });
  
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  
  });