// User Interface


// Start of (REVIEWS)

function ClearText() {
  document.getElementById('textArea').value="";
}

// End of (REVIEWS)


$(document).ready(function() {

  // Start of (MAIN)

  $("#space1").click(function(){
    $(".showing").show();
  });
  $('a#photos').click(function() {
    $('div.photos').toggle();
  });
  $('a#home').click(function() {
    $('div.photos').hide();
  });
  $('#review').click(function() {
    $('.review').show();
  });

  //END of (MAIN)

  
  // Start of (REVIEWS)

  $('#review form').submit(function(event) {
    var textArea = $('#textArea').val();
    $('#prevComments').append(textArea + '<ul>');

    event.preventDefault();
    ClearText();
  });
  $('#star-5').click(function() {
    alert('Thank You For Giving Us A Very Good Rating. Ciao!');
  });
  $('#star-4').click(function() {
    alert('Thank You For Giving Us A Good Rating. Ciao!');
  });
  $('#star-3').click(function() {
    alert('Thank You For Giving Us A Rating.');
  });
  $('#star-2').click(function() {
    alert('Thank You For Giving Us A Rating. Bye!');
  });
  $('#star-1').click(function() {
    alert('THANK YOU, NO THANK YOU!..Hater');
  });

  // End of (REVIEWS)





});
