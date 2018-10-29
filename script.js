$(document).ready(function(){

  var randomResult = '';
  var userChoice = '';
  var roboChoice = '';
  var options = ['rock', 'paper', 'scissors'];
  var positive = ['Well played', 'Best 2 out of 3?', 'Ive gotta hand it to you'];
  var negative = ['I almost feel bad for you', 'Maybe you should have stayed at home', 'Have fun drinking that!'];
  var voice = $('.header');

  function getNumber() {
    var maxNumber = 3;
    var randomNumber = Math.floor(Math.random()* maxNumber);
    randomResult = randomNumber;
    return false;
  }

  function response(outcome) {
    getNumber();
    voice.html(outcome[randomResult]);
    return;
  }

// generate random computer hand

  function roboThrow() {
    getNumber();
    if (randomResult == 0) {
      $('#robo-hand').attr("src", "img/newRock_flipped.png");
      roboChoice = options[randomResult];

    } else if (randomResult == 1) {
      $('#robo-hand').attr("src", "img/paper1_flipped.png");
      roboChoice = options[randomResult];

    } else {
      $('#robo-hand').attr("src", "img/scissors_flipped1.png");
      roboChoice = options[randomResult];
    }
  }

// rules

  function judge() {
  if (userChoice + roboChoice == "rockscissors") {
    response(positive);
  } else if (userChoice + roboChoice == "paperrock") {
    response(positive);
  } else if (userChoice + roboChoice == "scissorspaper") {
    response(positive);
  };

  if (userChoice + roboChoice == "rockpaper") {
    response(negative);
  } else if (userChoice + roboChoice == "paperscissors") {
    response(negative);
  } else if (userChoice + roboChoice == "scissorsrock") {
    response(negative);
  };

  if (userChoice + roboChoice == "rockrock") {
    voice.html('DRAW');
  } else if (userChoice + roboChoice == "paperpaper") {
    voice.html('DRAW');
  } else if (userChoice + roboChoice == "scissorsscissors") {
    voice.html('DRAW');
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
