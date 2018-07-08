  $(document).ready(function () {

    //pobranie daty danych z api
    $.get("https://api.nbp.pl/api/exchangerates/rates/c/eur/?format=json", function (data) {           
        $('.data').html('Aktualizacja danych: '+ data.rates[0].effectiveDate);         
    })

    //ustalenie selecta na wejściu
    $("select").val("PLN");

    document.querySelector('input').setAttribute('placeholder', 'kwota w PLN')
    // if (select.value === "PLN") {    
$.get("https://api.nbp.pl/api/exchangerates/rates/c/eur/?format=json", function (data) {           
        $('#currency_euro').html(data.code);            
        $('#output1a').html(data.rates[0].bid.toFixed(2));
        $('.data').html('Aktualizacja danych: '+ data.rates[0].effectiveDate);         
    })

$.getJSON("https://api.nbp.pl/api/exchangerates/rates/c/usd/?format=json", function (data) {           
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
      //wynik euro  
        let euroSum = parseFloat(document.getElementById('output1a').innerText);
        let euro = wpis / euroSum;
        $('#output1').html(euro.toFixed(2) + ' EUR'); 
      //wynik dolar
        let dolarSum = parseFloat(document.getElementById('output1b').innerText);   
        let dolar = wpis / dolarSum;
        $('#output2').html(dolar.toFixed(2) + ' USD');                
      //wynik funty
        let funtSum = parseFloat(document.getElementById('output1c').innerText);    
        let funt = wpis / funtSum;
        $('#output3').html(funt.toFixed(2) + ' GPB'); 
      //wynik franki
        let frankSum = parseFloat(document.getElementById('output1d').innerText);     
        let frank = wpis / frankSum;
        $('#output4').html(frank.toFixed(2) + ' CHF'); 
    })

    const select = $('select');
    select.on('change', function() {
        var selectVal = $(this).find('option:selected').val();//pobieramy wartość wybranego selekta
    
        if (selectVal != "PLN") {

            document.querySelector('#output1').innerText = ''
            document.querySelector('input').value = '';
            document.querySelector('input').setAttribute('placeholder', 'kwota EURO')
            console.log('dziala EU');
            $.get("https://api.nbp.pl/api/exchangerates/rates/c/eur/?format=json", function (data) {           
                $('#currency_euro').html('PLN');            
                $('#output1a').html(data.rates[0].ask.toFixed(2));         
            })
            
            $("#btn").click(function () {
                let wpis = document.querySelector('input').value;
                
              //wynik pln  
                let euroAsk = parseFloat(document.getElementById('output1a').innerText);
                let plnSum = wpis * euroAsk;
                $('#output1').html(plnSum.toFixed(2) + ' PLN'); 
            })      
        } //close of if selectVal
        else{
            location.reload();
        }
    })

})