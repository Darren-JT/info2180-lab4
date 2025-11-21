console.log('APP.JS VERSION 2 - FILE LOADED');

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('search_box');
  var result = document.getElementById('result');
  var input = document.getElementById('Search_bar');

  



  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var raw = input ? input.value : '';


    var val = String(raw).trim();

    val = val.replace(/[^\w\s]/gi, '');
    
    console.log('Submitting search for:', val);

    fetch('superheroes.php?name=' + encodeURIComponent(val))


      .then(function (response) {

        return response.text();
      })

      
      .then(function (data) {



        result.innerHTML = data;
      });

  });

});
