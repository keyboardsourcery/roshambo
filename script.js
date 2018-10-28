$(document).ready(function(){

  var result = '';
  var options = ['rock', 'paper', 'scissors'];
  var userChoice = "";
  var roboChoice = "";
  var score = $('.header');

  function getNumber() {
    var maxNumber = 3;
    var randomNumber = Math.floor(Math.random()* maxNumber);
    result=randomNumber;
    return false;
  }

// generate random computer hand

  function roboThrow() {
    getNumber();
    if (result == 0) {
      $('#robo-hand').attr("src", "img/newRock_flipped.png");
      roboChoice = options[result];

    } else if (result == 1) {
      $('#robo-hand').attr("src", "img/paper1_flipped.png");
      roboChoice = options[result];
    } else {
      $('#robo-hand').attr("src", "img/scissors_flipped1.png");
      roboChoice = options[result];
    }
  }

// rules

  function judge() {
  if (userChoice + roboChoice == "rockscissors") {
    score.html('WIN');
  } else if (userChoice + roboChoice == "paperrock") {
    score.html('WIN');
  } else if (userChoice + roboChoice == "scissorspaper") {
    score.html('WIN');
  };

  if (userChoice + roboChoice == "rockpaper") {
    score.html('LOSS');
  } else if (userChoice + roboChoice == "paperscissors") {
    score.html('LOSS');
  } else if (userChoice + roboChoice == "scissorsrock") {
    score.html('LOSS');
  };

  if (userChoice + roboChoice == "rockrock") {
    score.html('DRAW');
  } else if (userChoice + roboChoice == "paperpaper") {
    score.html('DRAW');
  } else if (userChoice + roboChoice == "scissorsscissors") {
    score.html('DRAW');
  };

  }

// game is played

  $('#rock-thumb').click(function(){
    $('#user-hand').attr("src", "../img/newRock.png");
    userChoice = options[0];
    roboThrow();
    judge();
  });

  $('#paper-thumb').click(function(){
    $('#user-hand').attr("src", "../img/paper1.png");
    userChoice = options[1];
    roboThrow();
    judge();
  });

  $('#scissors-thumb').click(function(){
    $('#user-hand').attr("src", "../img/scissors1.png");
    userChoice = options[2];
    roboThrow();
    judge();
  });




});
