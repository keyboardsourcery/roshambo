$(document).ready(function(){

// user hand

  $('#rock-thumb').click(function(){
    $('#user-hand').attr("src", "../img/newRock.png")
  });

  $('#paper-thumb').click(function(){
    $('#user-hand').attr("src", "../img/paper1.png")
  });

  $('#scissors-thumb').click(function(){
    $('#user-hand').attr("src", "../img/scissors1.png")
  });


// opponent hand
  var result = '';
  
  function getNumber() {
    var minNumber = 1;
    var maxNumber = 99;
    var randomNumber = Math.floor(Math.random()* (maxNumber + 1) + minNumber);
    result=randomNumber;
    return false;
  }

$('#random').click(function(){
  getNumber();
  if (result >= 1 && result < 33) {
    $('#robo-hand').attr("src", "img/newRock_flipped.png");
  } else if (result >= 33 && result < 66) {
    $('#robo-hand').attr("src", "img/paper1_flipped.png");
  } else {
    $('#robo-hand').attr("src", "img/scissors_flipped1.png");
  }

})



});
