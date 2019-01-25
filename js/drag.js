

 $(document).ready(function() {
    $( ".circle" ).draggable({
  containment: "parent"
});
  } );

// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random({
  containment: "parent"
}) * (max - min + 1) + min);
}
//Randomize the position of all your elements, identified by a specific class
//In case you have several items. Either, don't use the each()
$('.circle').each(function(){
    $(this).css({'marginRight' : getRandomInt(20,30), 'marginTop' : getRandomInt(20,80), 'marginLeft' : getRandomInt(20,50)});
});