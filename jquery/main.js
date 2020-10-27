$( document ).ready(function() {
  var boxai = document.querySelector('.boxai');
    $( '#prideti' ).on( 'click' , function() {
            var elementas = $('<div class="button"></div>');
            var plotis = document.getElementById('plotis');
            var aukstis = document.getElementById('aukstis');
            var spalva = document.getElementById('spalva');
            var stilius = {
                opacity: "1",
                width: plotis.value + 'px',
                height: aukstis.value + 'px',
                background: spalva.value
            };
           elementas.css(stilius);
            $('.boxai').append(elementas);
    });
   $('.boxai').on('click' , '.button' , function(){
       $(this).css({
           opacity: "0"
       });
   })
    
   

   












});