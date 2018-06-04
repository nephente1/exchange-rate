  $(document).ready(function () {
    
    $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/eur/today/?format=json", function (data) {           
                $('#currency_euro').html(data.code);            
                $('#output1a').html(data.rates[0].bid);
                $('.data').html('Aktualizacja danych: '+ data.rates[0].effectiveDate);         
            })

$.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/usd/today/?format=json", function (data) {           
                $('#currency_dolar').html(data.code);            
                $('#output1b').html(data.rates[0].bid) ;                         
            })

$.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/gbp/today/?format=json", function (data) {           
              $('#currency_funt').html(data.code);            
              $('#output1c').html(data.rates[0].bid) ;               
          })
$.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/chf/today/?format=json", function (data) {           
              $('#currency_frank').html(data.code);            
              $('#output1d').html(data.rates[0].bid);     
          })
    
    $("#btn").click(function () {
      let wpis = document.querySelector('input').value;
      //pobierz euro
        $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/eur/today/?format=json", function (data) {           
            let euro = wpis / data.rates[0].bid;
            $('#output1').html(euro.toFixed(3) + ' EUR') ;              
        })
      //pobierz dolar
      $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/usd/today/?format=json", function (data) {      
            let dolar = wpis / data.rates[0].bid
            $('#output2').html(dolar.toFixed(3) + ' USD');                
        })
            //pobierz funty
      $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/gbp/today/?format=json", function (data) {      
            let funt = wpis / data.rates[0].bid
            $('#output3').html(funt.toFixed(3) + ' GPB'); 
        })
        //pobierz franki
      $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/chf/today/?format=json", function (data) {      
            let frank = wpis / data.rates[0].bid
            $('#output4').html(frank.toFixed(3) + ' CHF'); 
    })
    })

})
