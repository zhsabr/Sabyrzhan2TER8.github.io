function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if ( isNaN(dateEnd) ) {
    return;
  }

  timer = setInterval(calculate, 1000);

  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
                             dateStart.getUTCMonth(),
                             dateStart.getUTCDate(),
                             dateStart.getUTCHours(),
                             dateStart.getUTCMinutes(),
                             dateStart.getUTCSeconds());
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

    if ( timeRemaining >= 0 ) {
      days    = parseInt(timeRemaining / 86400);
      timeRemaining   = (timeRemaining % 86400);
      hours   = parseInt(timeRemaining / 3600);
      timeRemaining   = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining   = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);

      document.getElementById("days").innerHTML    = parseInt(days, 10);
      document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }

  function display(days, hours, minutes, seconds) {}
}
countdown('01/01/2019 00:00:00 AM');

$(document).ready(function(){
  var $srcValue = $('#imgHolder img').attr('src');
  var $elkaImg = $('#imgHolder img');

      $('#colorsSelector .colorItem').on('click',function(){
        
        var imgPath;
       
        imgPath = $(this).attr('data-img-path');
            
            $elkaImg.attr('src', imgPath);

      });
      /*КАЛЬКУЛЯТОР*/

          var modelSpecs,
              modelPrice,
              modelSpecsHolder,
              modelPriceHolder;

          modelSpecsHolder = $('#modelSpecs');
          modelPriceHolder = $('#modelPrice');

          modelPrice = 0;
          modelSpecs = '';

          function calculatePrice(){

            var modelPriceElka = $('input[name=engine]:checked','#elkaForm').val();
            var modelPriceTra = $('input[name=transmission]:checked','#elkaForm').val();
            var modelPricePackage = $('input[name=package]:checked','#elkaForm').val();
              
              modelPriceElka = parseInt(modelPriceElka);
              modelPriceTra = parseInt(modelPriceTra);
              modelPricePackage = parseInt(modelPricePackage);

            modelPrice = modelPriceElka + modelPriceTra + modelPricePackage;

             modelPriceHolder.text(addSpace(modelPrice) + ' тенге');
          }; 



          function compileSpecs(){
              modelSpecs = $('input[name=engine]:checked + label','#elkaForm').text();
              modelSpecs = modelSpecs +', '+ $('input[name=transmission]:checked + label','#elkaForm').text();
              modelSpecs = modelSpecs +', '+ $('input[name=package]:checked + label','#elkaForm').text();
               modelSpecsHolder.text(modelSpecs);
          }


          $('#elkaForm input').on('change',function(){
            calculatePrice();
            compileSpecs();
          })

          calculatePrice();
          compileSpecs();




















          function addSpace(nStr){
            
            nStr += '';
            
            x = nStr.split('.');
            
            x1 = x[0];
            
            x2 = x.length >1 ? '.' + x[1] : '';
            
            var rgx = /(\d+)(\d{3})/;

            while(rgx.test(x1)){

              x1 = x1.replace(rgx, '$1' + ' ' + '$2');
            }

            return x1 + x2;
          }

});
