// var gameObj = {
	
// 	characterSelected: false,

// 	defenderSelected: false,

// 	character: {},

// 	defender: {},

// 	// CHARACTERS
// 	characters: [
// 		charlie: {
// 			name: "Charlie",
// 			health: 120,
// 			baseAttack: 10,
// 			attack: 10
// 		},

// 		dee: {
// 			name: "Dee",
// 			health: 125,
// 			baseAttack: 12,
// 			attack: 12
// 		},

// 		dennis: {
// 			name: "Dennis",
// 			health: 150,
// 			baseAttack: 15,
// 			attack: 15
// 		},

// 		frank: {
// 			name: "Frank",
// 			health: 110,
// 			baseAttack: 10,
// 			attack: 10
// 		},

// 		mac: {
// 			name: "Mac",
// 			health: 130,
// 			baseAttack: 10,
// 			attack: 10
// 		}
// 	]

// }

	$("#restart").hide();

// When you click on a character, your character moves to "Your Character"

	$("#charlie").on("click", function() {

		$("#charlie").removeClass("available-character").addClass("chosen-character");
		$("#your-character").append(this);

		enemies();
	})


	$("#dee").on("click", function() {

		$("#dee").removeClass("available-character").addClass("chosen-character");
		$("#your-character").append(this);

		enemies();
	})


	$("#dennis").on("click", function() {

		$("#dennis").removeClass("available-character").addClass("chosen-character");
		$("#your-character").append(this);

		enemies();
	})


	$("#frank").on("click", function() {

		$("#frank").removeClass("available-character").addClass("chosen-character");
		$("#your-character").append(this);

		enemies();
	})


	$("#mac").on("click", function() {

		$("#mac").removeClass("available-character").addClass("chosen-character");
		$("#your-character").append(this);

		enemies();
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


// Everytime attack button is clicked, your character's attack doubles.


// If your health < 0, message reads: "You have been defeated...GAME OVER!!!"
// 	and Reset button appears. (Clicking attack button does nothing)



// If defender health < 0, defender disappears and message reads: "You have defeated *DEFENDER*, you can choose to fight another enemy"
// 	If attack button is clicked, message reads: "No enemy here.".

// 	Player chooses another enemy (until there are no enemies to attack)
// 	(Your character health and attack remain same from before)


// Once there are no Enemies Available To Attack, message reads "You Won!!! GAME OVER!!!"
// 	and Reset button appears.
	
