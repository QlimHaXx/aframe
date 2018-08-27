$(document).ready(function(){
  $('.carousel').carousel({
  	fullWidth: true,
    indicators: true
  });
});
$(document).keydown(function(e) {
  switch(e.which) {
    case 37: // left
      $('.carousel').carousel('prev');
      break;
    case 38: // up
      break;
    case 39: // right
      $('.carousel').carousel('next');
      break;
    case 40: // down
      break;
    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});