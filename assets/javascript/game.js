// CHARACTERS:
var charlie = {
	name: "Charlie",
	health: 150,
	baseAttack: 10,
	attack: 10
};

var dee = {
	name: "Dee",
	health: 250,
	baseAttack: 5,
	attack: 5
};

var dennis = {
	name: "Dennis",
	health: 300,
	baseAttack: 15,
	attack: 15
};

var frank = {
	name: "Frank",
	health: 125,
	baseAttack: 20,
	attack: 20
};

var mac = {
	name: "Mac",
	health: 225,
	baseAttack: 15,
	attack: 15
};

// STORE CHARACTERS
var character = {};
var defender = {};

// FLAGS
var characterChosen = false;
var defenderChosen = false;
var enemiesDefeated = 0;
var gameOver = false;



// HELPER FUNCTIONS:

// SET DEFENDER VARIABLES
var setDefender = function (currentDefender) {
	defender.name = currentDefender.name;
	defender.health = currentDefender.health;
	defender.baseAttack = currentDefender.baseAttack;
	defender.attack = currentDefender.attack;
	defenderChosen = true;
};

// SET CHARACTER VARIABLES
var setCharacter = function (currentCharacter) {
	character.name = currentCharacter.name;
	character.health = currentCharacter.health;
	character.baseAttack = currentCharacter.baseAttack;
	character.attack = currentCharacter.attack;
	characterChosen = true;
};

// MOVE REMAINING CHARACTERS TO ENEMIES AVAILABLE
var enemies = function () {
	$(".available-character").removeClass("available-character").addClass("enemy-character");
	$("#enemies-available").append($(".enemy-character"));
};

// RESET GLOBAL VARIABLES, CLASSES, AND GAME DISPLAY
var reset = function () {

		character = {};
		defender = {};
		enemiesDefeated = 0;

		characterChosen = false;
		defenderChosen = false;
		gameOver = false;

		$("#game-message").empty();
  		$("#restart").hide();

  		// reset character health values
		$("#charlie").children(".health").html(charlie.health);
		$("#dee").children(".health").html(dee.health);
		$("#dennis").children(".health").html(dennis.health);
		$("#frank").children(".health").html(frank.health);
		$("#mac").children(".health").html(mac.health);

		// remove classes added during game and reset to available. Show available characters.
		$(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
		$("#characters-available").html($(".available-character").show());

};


// BEGIN GAME:

$(document).ready(function() {

	$("#charlie").children(".health").html(charlie.health);
	$("#dee").children(".health").html(dee.health);
	$("#dennis").children(".health").html(dennis.health);
	$("#frank").children(".health").html(frank.health);
	$("#mac").children(".health").html(mac.health);

	// HIDE RESTART BUTTON UPON LOAD
	$("#restart").hide();

	if (!gameOver) {
	// DETERMINE WHICH CHARACTER USER HAS CHOSEN:
	// CHARLIE
		$("#charlie").on("click", function() {
			// choose as your character
			if (!characterChosen) {
				console.log("Charlie is the chosen character");
				$("#charlie").removeClass("available-character").addClass("chosen-character");
				$("#your-character").append(this);
				setCharacter(charlie);
				enemies();
			} else if (characterChosen && !defenderChosen) {
				console.log("Charlie is the chosen defender");
				$("#charlie").removeClass("enemy-character").addClass("defender-character");
				$("#defender-section").append(this);
				setDefender(charlie);
			}

		});

		// DEE
		$("#dee").on("click", function() {
			// choose as your character
				if (!characterChosen) {
				console.log("Dee is the chosen character");
				$("#dee").removeClass("available-character").addClass("chosen-character");
				$("#your-character").append(this);
				setCharacter(dee);
				enemies();
			} else if (characterChosen && !defenderChosen) {
				console.log("Dee is the chosen defender");
				$("#dee").removeClass("enemy-character").addClass("defender-character");
				$("#defender-section").append(this);
				setDefender(dee);
			}
		});

		// DENNIS
		$("#dennis").on("click", function() {
			if (!characterChosen) {
					console.log("Dennis is the chosen character");
					$("#dennis").removeClass("available-character").addClass("chosen-character");
					$("#your-character").append(this);
					setCharacter(dennis);

					enemies();
				} else if (characterChosen && !defenderChosen) {
					console.log("Dennis is the chosen defender");
					$("#dennis").removeClass("enemy-character").addClass("defender-character");
					$("#defender-section").append(this);
					setDefender(dennis);
				}
		});

		// FRANK
		$("#frank").on("click", function() {

				if (!characterChosen) {
					console.log("Frank is the chosen character");
					$("#frank").removeClass("available-character").addClass("chosen-character");
					$("#your-character").append(this);
					setCharacter(frank);

					enemies();
				} else if (characterChosen && !defenderChosen) {
					console.log("Frank is the chosen defender");
					$("#frank").removeClass("enemy-character").addClass("defender-character");
					$("#defender-section").append(this);
					setDefender(frank);
				}
		});

		// MAC
		$("#mac").on("click", function() {

			if (!characterChosen) {
				console.log("Mac is the chosen character");
				$("#mac").removeClass("available-character").addClass("chosen-character");
				$("#your-character").append(this);
				setCharacter(mac);
				enemies();
			} else if (characterChosen && !defenderChosen) {
				console.log("Mac is the chosen defender");
				$("#mac").removeClass("enemy-character").addClass("defender-character");
				$("#defender-section").append(this);
				setDefender(mac);
			}
		});
	}



	// WHEN USER CLICKS ATTACK BUTTON
	$("#attack").on("click", function(){

		if (characterChosen && !defenderChosen && !gameOver) {
				$("#game-message").html("<p>No enemy here.</p>");
		}


		if (characterChosen && defenderChosen && !gameOver) {

			if (character.health > 0) {

				character.health -= defender.attack;
				$(".chosen-character").children(".health").html(character.health);

				defender.health -= character.attack;
				$(".defender-character").children(".health").html(defender.health);

				$("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + ".</p>" + "<p>" + defender.name + " attacked you back for " + defender.attack + " damage.</p>");

				character.attack += character.baseAttack;

				if (defender.health <= 0) {
					$("#game-message").html("<p>You have defeated " + defender.name + ", you can choose to fight another enemy.</p>");
					enemiesDefeated++;
					defenderChosen = false;
					$(".defender-character").hide();

				//check if all defenders have been defeated
					if (enemiesDefeated === 4) {
						gameOver = true;
						$("#game-message").html("<p>You have won the game!!!</p><p>Play again?</p>");
						$("#restart").show();
					}
				}

			}

			if (character.health <= 0) {
				$("#game-message").html("<p>You have been defeated by " + defender.name + "...GAME OVER!</p>");
				$("#restart").show();
				gameOver = true;
			}

		}
	});

	// RESET UPON CLICKING RESTART BUTTON
	$("#restart").on("click", function() {
		reset();
	});

});