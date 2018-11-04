$(document).ready(function(){

  var accent = "#c69c6d";
  var userChoice = '';
  var roboChoice = '';
  var options = ['rock', 'paper', 'scissors'];
  var win = ['"Well played"', '"Best 2 out of 3?"', '"Ive gotta hand it to you"'];
  var loss = ['"I almost feel bad for you"', '"Maybe you should have stayed at home"', '"Have fun drinking that!"'];
  var voice = $('.header');
  var wins = 0;
  var losses = 0;
  var winsCounter = $('.wins');
  var lossesCounter = $('.losses');

  function getNumber() {
    var maxNumber = 3;
    var randomNumber = Math.floor(Math.random()* maxNumber);
    return randomNumber;
  }

  function response(outcome) {

    var randomResult = getNumber();
    voice.html(outcome[randomResult]);

    if (outcome == win ) {
        wins += 1;
        winsCounter.html(wins);
        voice.css("color", "green");

      } else {
        losses +=1;
        lossesCounter.html(losses);
        voice.css("color", "red");
      }

    return;
  }

//generate random computer hand

  function roboThrow() {
    var randomResult = getNumber();
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
    response(win);

  } else if (userChoice + roboChoice == "paperrock") {
    response(win);

  } else if (userChoice + roboChoice == "scissorspaper") {
    response(win);
  };

  if (userChoice + roboChoice == "rockpaper") {
    response(loss);

  } else if (userChoice + roboChoice == "paperscissors") {
    response(loss)

  } else if (userChoice + roboChoice == "scissorsrock") {
    response(loss);
  };

  if (userChoice + roboChoice == "rockrock") {
    voice.css("color", accent);
    voice.html('DRAW - SHOOT AGAIN!');


  } else if (userChoice + roboChoice == "paperpaper") {
    voice.css("color", accent);
    voice.html('DRAW - SHOOT AGAIN!');

  } else if (userChoice + roboChoice == "scissorsscissors") {
    voice.css("color", accent);
    voice.html('DRAW - SHOOT AGAIN!');
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
