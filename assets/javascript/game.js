var charlie = {
	name: "Charlie",
	health: 120,
	baseAttack: 10,
	attack: 10
}

var dee = {
	name: "Dee",
	health: 125,
	baseAttack: 12,
	attack: 12
}

var dennis = {
	name: "Dennis",
	health: 150,
	baseAttack: 15,
	attack: 15
}

var frank = {
	name: "Frank",
	health: 110,
	baseAttack: 10,
	attack: 10
}

var mac = {
	name: "Mac",
	health: 130,
	baseAttack: 10,
	attack: 10
}
	
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
			character = charlie;
			characterChosen = true;
			enemies();
		} else if (characterChosen && !defenderChosen) {
			console.log("Charlie is the chosen defender");
			$("#charlie").removeClass("enemy-character").addClass("defender-character");
			$("#defender-section").append(this);
			defender = charlie;
			defenderChosen = true;
		}

	})


	$("#dee").on("click", function() {
		// choose as your character
			if (!characterChosen) {
			console.log("Dee is the chosen character");
			$("#dee").removeClass("available-character").addClass("chosen-character");
			$("#your-character").append(this);
			character = dee;
			characterChosen = true;
			enemies();
		} else if (characterChosen && !defenderChosen) {
			console.log("Dee is the chosen defender");
			$("#dee").removeClass("enemy-character").addClass("defender-character");
			$("#defender-section").append(this);
			defender = dee;
			defenderChosen = true;
		}
	})


	$("#dennis").on("click", function() {
		if (!characterChosen) {
				console.log("Dennis is the chosen character");
				$("#dennis").removeClass("available-character").addClass("chosen-character");
				$("#your-character").append(this);
				character = dennis;
				characterChosen = true;
				enemies();
			} else if (characterChosen && !defenderChosen) {
				console.log("Dennis is the chosen defender");
				$("#dennis").removeClass("enemy-character").addClass("defender-character");
				$("#defender-section").append(this);
				defender = dennis;
				defenderChosen = true;
			}
	})


	$("#frank").on("click", function() {

			if (!characterChosen) {
				console.log("Frank is the chosen character");
				$("#frank").removeClass("available-character").addClass("chosen-character");
				$("#your-character").append(this);
				character = frank;
				characterChosen = true;
				enemies();
			} else if (characterChosen && !defenderChosen) {
				console.log("Frank is the chosen defender");
				$("#frank").removeClass("enemy-character").addClass("defender-character");
				$("#defender-section").append(this);
				defender = frank;
				defenderChosen = true;
			}
	})


	$("#mac").on("click", function() {

		if (!characterChosen) {
			console.log("Mac is the chosen character");
			$("#mac").removeClass("available-character").addClass("chosen-character");
			$("#your-character").append(this);
			character = mac;
			characterChosen = true;
			enemies();
		} else if (characterChosen && !defenderChosen) {
			console.log("Mac is the chosen defender");
			$("#mac").removeClass("enemy-character").addClass("defender-character");
			$("#defender-section").append(this);
			defender = mac;
			defenderChosen = true;
		}
	})



// 	and the remaining characters move to "Enemies Available to Attack".
// 	(Background changes to red, border to black)

var enemies = function () {
	$(".available-character").removeClass("available-character").addClass("enemy-character");
	$("#enemies-available").append($(".enemy-character"));
}


// When you click on an enemy, that enemy character moves to "Defender"
// 	(Background changes to black, border to green)



// When you click on attack button, a message appears:
// 	"You attacked *DEFENDER* for *#* damage. \n  *DEFENDER* attacked you back for *##* damage."
// and your character and defender's health decrease the respective value.
var attack = function () {
	$("#attack").on("click", function(){
		$("#game-message").html("You attacked " + defender.name + " for " + character.attack + ".");

	})
}

// Everytime attack button is clicked, your character's attack doubles.


// If your health < 0, message reads: "You have been defeated...GAME OVER!!!"
// 	and Reset button appears. (Clicking attack button does nothing)



// If defender health < 0, defender disappears and message reads: "You have defeated *DEFENDER*, you can choose to fight another enemy"
// 	If attack button is clicked, message reads: "No enemy here.".

// 	Player chooses another enemy (until there are no enemies to attack)
// 	(Your character health and attack remain same from before)


// Once there are no Enemies Available To Attack, message reads "You Won!!! GAME OVER!!!"
// 	and Reset button appears.
	
