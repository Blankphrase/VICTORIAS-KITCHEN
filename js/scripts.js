$(document).ready(function() {
  $('a#photos').click(function() {
    $('div.photos').toggle();
  });
  $('a#home').click(function() {
    $('div.photos').hide();
  });
});
