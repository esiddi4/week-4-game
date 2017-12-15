var charlie = {
	name: "Charlie",
	health: 120,
	attack: 10
};

var dee = {
	name: "Dee",
	health: 125,
	attack: 12
};

var dennis = {
	name: "Dennis",
	health: 150,
	attack: 15
};

var frank = {
	name: "Frank",
	health: 110,
	attack: 10
};

var mac = {
	name: "Mac",
	health: 130,
	attack: 10
};
	
var character = {};
var defender = {};
var enemiesDefeated = 0;

var characterChosen = false;
var defenderChosen = false;
var gameOver = false;


	$("#restart").hide();

// When you click on a character, your character moves to "Your Character"

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



// 	and the remaining characters move to "Enemies Available to Attack".
// 	(Background changes to red, border to black)

var enemies = function () {
	$(".available-character").removeClass("available-character").addClass("enemy-character");
	$("#enemies-available").append($(".enemy-character"));
};


// When you click on an enemy, that enemy character moves to "Defender"
// 	(Background changes to black, border to green)
var setDefender = function (currentDefender) {
	defender.name = currentDefender.name;
	defender.health = currentDefender.health;
	defender.attack = currentDefender.attack;
	defenderChosen = true;
};

var setCharacter = function (currentCharacter) {
	character.name = currentCharacter.name;
	character.health = currentCharacter.health;
	character.attack = currentCharacter.attack;
	characterChosen = true;
};

// When you click on attack button, a message appears:
// 	"You attacked *DEFENDER* for *#* damage. \n  *DEFENDER* attacked you back for *##* damage."
// and your character and defender's health decrease the respective value.
// var attack = function () {
	$("#attack").on("click", function(){
		if (characterChosen && defenderChosen && !gameOver) {

			defender.health -= character.attack;
			$(".defender-character").children(".health").html(defender.health);

			character.health -= defender.attack;
			$(".chosen-character").children(".health").html(character.health);

			$("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + ".</p>" + "<p>" + defender.name + " attacked you back for " + defender.attack + " damage.</p>");

			character.attack *= 2;

			if (character.health <= 0 && defender.health > 0) {
				$("#game-message").html("<p>You have been defeated by " + defender.name + "...GAME OVER!</p>");
				$("#restart").show();
				gameOver = true;
			}

			if (defender.health <= 0 && character.health > 0) {
				$("#game-message").html("<p>You have defeated " + defender.name + ", you can choose to fight another enemy.</p>");
				
				enemiesDefeated++;
				$(".defender-character").hide();
				defenderChosen = false;

				if (enemiesDefeated === 4) {
					gameOver = true;
					$("#game-message").html("<p>You have won the game!!!</p><p>Play again?</p>");
					$("#restart").show();
		        }
			}

			if (defenderChosen === false) {
					$("#game-message").html("<p>No enemy here.</p>");
				}

		}

	})
// };

// Everytime attack button is clicked, your character's attack doubles.


// If your health < 0, message reads: "You have been defeated...GAME OVER!!!"
// 	and Reset button appears. (Clicking attack button does nothing)



// If defender health < 0, defender disappears and message reads: "You have defeated *DEFENDER*, you can choose to fight another enemy"
// 	If attack button is clicked, message reads: "No enemy here.".

// 	Player chooses another enemy (until there are no enemies to attack)
// 	(Your character health and attack remain same from before)


// Once there are no Enemies Available To Attack, message reads "You Won!!! GAME OVER!!!"
// 	and Reset button appears.
	

var reset = function () {

		var character = {};
		var defender = {};
		var enemiesDefeated = 0;

		var characterChosen = false;
		var defenderChosen = false;
		var gameOver = false;

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

$("#restart").on("click", function() {
	reset();
});

