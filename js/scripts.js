// User Interface
function ClearText() {
  document.getElementById('textArea').value="";
}
$(document).ready(function() {
  $('#review form').submit(function(event) {
    var textArea = $('#textArea').val();
    $('#prevComments').append('<div>' + textArea + '<ul>');

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

});
