  // Declare variables for game
  var wins = 0;
  var losses = 0;
  var userScore = 0;

  //get random target number
  var targetNumber = Math.floor(Math.random() * 99) + 1;
  // Math.floor(Math.random() * 99) + 1;

  var numberOptions = [10, 5, 3, 7];
  for (var i = 0; i < numberOptions.length; i++) {
    numberOptions[i] = Math.floor(Math.random() * 99) + 1;
    console.log("gem " + i + ":" + numberOptions[i]);
  }

  // Display Target Number
  $("#number-to-guess").text(targetNumber);

  // Display the wins and losses
  $("#wins").text(wins);
  $("#losses").text(losses);

  // Display the 4 gem images
  $("#crystals-blue").html('<img src="/assets/images/blue_gem.png" alt=blue height="150" width="150"> ');
  $("#crystals-green").html('<img src="/assets/images/green_gem.png" alt=green height="150" width="150"> ');
  $("#crystals-purple").html('<img src="/assets/images/purple_gem.png" alt=purple height="150" width="150"> ');
  $("#crystals-red").html('<img src="/assets/images/red_gem.png" alt=red height="150" width="150"> ');

  // Displays the score
  $("#user-score").text(userScore);

  $("#crystals-blue").on("click", function() {
    alert("Blue");
  });

  $("#crystals-green").on("click", function() {
    alert("Green");
  });

  $("#crystals-purple").on("click", function() {
    alert("Purple");
  });

  $("#crystals-red").on("click", function() {
    alert("Red");
  });

  // This time, our click event applies to every single crystal on the page. Not just one.
  var crystals = $("#crystals");
  crystals.on("click", ".crystal-image", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });
