  $(document).ready(function () {
    
    $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/eur/today/?format=json", function (data) {           
                $('#currency_euro').html(data.currency);            
                $('#output1a').html(data.rates[0].bid) ;               
            })

$.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/usd/today/?format=json", function (data) {           
                $('#currency_dolar').html(data.currency);            
                $('#output1b').html(data.rates[0].bid) ;               
            })

$.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/gbp/today/?format=json", function (data) {           
              $('#currency_funt').html(data.currency);            
              $('#output1c').html(data.rates[0].bid) ;               
          })
    
    $("#btn").click(function () {
      let wpis = document.querySelector('input').value;
      //pobierz euro
        $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/eur/today/?format=json", function (data) {           
            $('#output1').html( wpis / data.rates[0].bid) ;              
        })
      //pobierz dolar
      $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/usd/today/?format=json", function (data) {      
            $('#output2').html(wpis / data.rates[0].bid);                
        })
            //pobierz funty
      $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/gbp/today/?format=json", function (data) {      
            $('#output3').html(wpis / data.rates[0].bid);
        })
    })

})
