  $(document).ready(function () {
    
    $.get("https://api.nbp.pl/api/exchangerates/rates/c/eur/?format=json", function (data) {           
                $('#currency_euro').html(data.code);            
                $('#output1a').html(data.rates[0].bid.toFixed(2));
                $('.data').html('Aktualizacja danych: '+ data.rates[0].effectiveDate);         
            })

$.get("http://api.nbp.pl/api/exchangerates/rates/c/usd/?format=json", function (data) {           
                $('#currency_dolar').html(data.code);            
                $('#output1b').html(data.rates[0].bid.toFixed(2)) ;                         
            })

$.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/gbp/?format=json", function (data) {           
              $('#currency_funt').html(data.code);            
              $('#output1c').html(data.rates[0].bid.toFixed(2)) ;               
          })
$.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/chf/?format=json", function (data) {           
              $('#currency_frank').html(data.code);            
              $('#output1d').html(data.rates[0].bid.toFixed(2));     
          })
    
    $("#btn").click(function () {
      let wpis = document.querySelector('input').value;
      //pobierz euro
        $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/eur/?format=json", function (data) {           
            let euro = wpis / data.rates[0].bid;
            $('#output1').html(euro.toFixed(3) + ' EUR') ;              
        })
      //pobierz dolar
      $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/usd/?format=json", function (data) {      
            let dolar = wpis / data.rates[0].bid
            $('#output2').html(dolar.toFixed(3) + ' USD');                
        })
            //pobierz funty
      $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/gbp/?format=json", function (data) {      
            let funt = wpis / data.rates[0].bid
            $('#output3').html(funt.toFixed(3) + ' GPB'); 
        })
        //pobierz franki
      $.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/chf/?format=json", function (data) {      
            let frank = wpis / data.rates[0].bid
            $('#output4').html(frank.toFixed(3) + ' CHF'); 
    })
    })

    let pln = document.getElementById('pln').selected;
    console.log(pln)
    let eur = document.getElementById('eur').selected;
    const select = $('select');
    select.on('change', function() {
        const selectVal = $(this).find('option:selected').val();//pobieramy wartość wybranego selekta
    
        if (selectVal != "PLN") {
        console.log('działa');
    }
})

    

});