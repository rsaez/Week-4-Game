  // Declare variables for game
  var wins = 0;
  var losses = 0;
  var userScore = 0;
  var min = 19;
  var max = 120;
  var banner = "";
  var numberOptions = [10, 5, 3, 7];

  //get random target number
  var targetNumber = Math.floor(Math.random() * (max + min + 1)) + min;
  // Math.floor(Math.random() * (max - min + 1) ) + min;

  function randomizer() {
    for (var i = 0; i < numberOptions.length; i++) {
      numberOptions[i] = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log("gem " + i + ":" + numberOptions[i]);
    }
  }

  randomizer();

  // Display Target Number
  $("#number-to-guess").text(targetNumber);

  // Display the 4 gem images
  $("#crystals-blue").html('<img src="/assets/images/blue_gem.png" alt=blue height="150" width="150"> ');
  $("#crystals-green").html('<img src="/assets/images/green_gem.png" alt=green height="150" width="150"> ');
  $("#crystals-purple").html('<img src="/assets/images/purple_gem.png" alt=purple height="150" width="150"> ');
  $("#crystals-red").html('<img src="/assets/images/red_gem.png" alt=red height="150" width="150"> ');

  function outputRefresh() {
    // Display the wins and losses
    $("#wins").text(wins);
    $("#losses").text(losses);
    // Displays the score
    $("#user-score").text(userScore);
    //Displays Banner
    $("#banner").text(banner);
    // display all hidden data
    console.log("wins: " + wins);
    console.log("losses: " + losses);
    console.log("banner: " + banner);
    console.log("userScore: " + userScore + " targetNumber: " + targetNumber);
  }

  function logic() {
    if(userScore == targetNumber) {
      wins++;
      banner = "YOU WIN!";
      outputRefresh();
      reset();
    }
    if(userScore > targetNumber){
      losses++;
      banner = "YOU LOOSE!"
      outputRefresh();
      reset();
    }
  }

  function reset() {
    targetNumber = Math.floor(Math.random() * (max + min + 1)) + min;
    // Display Target Number
    $("#number-to-guess").text(targetNumber);
    userScore = 0;
    banner = "";
    randomizer();
  }

  $("#crystals-blue").on("click", function() {
    userScore = userScore + numberOptions[0];
    // console.log("clicked blue");
    outputRefresh();
    logic();
  });

  $("#crystals-green").on("click", function() {
    userScore = userScore + numberOptions[1];
    outputRefresh();
    logic();
  });

  $("#crystals-purple").on("click", function() {
    userScore = userScore + numberOptions[2];
    outputRefresh();
    logic();
  });

  $("#crystals-red").on("click", function() {
    userScore = userScore + numberOptions[3];
    outputRefresh();
    logic();
  });
