
 //*************************************************
// Start the jQuery that will fade in the 
//main quiz and out the splash page.
 //*************************************************
 
$("#button").click( function() {
								$("#mainSplash").fadeOut();
								$("#mainQuiz").fadeIn();
								setTimeout(oneSeconds, 300);
								setTimeout(sixtySeconds, 60000);
								setTimeout(timeUp, 120000); 								
							   });


function oneSeconds() {
	$("#time-left").html('<h2> 120 seconds left!</h2>')
	console.log("120 seconds left"); 
}

function sixtySeconds() {
	$("#time-left").html('<h2> 60 seconds left!</h2>')
	console.log("60 seconds left");
}

function timeUp() {
	console.log("times up");
	$("#time-left").html("<h2> Times Up!</h2>")
	checkResults();
}

function doneButtonClicked() {
	console.log("done button clicked");
	$("#time-left").html("<h2> Done!</h2>")
	checkResults();
}

 //*************************************************
// Quiz results
 //*************************************************
function checkResults() {
	//alert("Hila Hila!");

	
	document.querySelector("#mainQuiz").style.display="none";
	document.querySelector("#mainResults").style.display="";
	var question1a = document.getElementById('quizPage').elements['question1a'].value;	
	var question2a = document.getElementById('quizPage').elements['question2a'].value;
	var question3a = document.getElementById('quizPage').elements['question3a'].value;
	var question4a = document.getElementById('quizPage').elements['question4a'].value;
	var question5a = document.getElementById('quizPage').elements['question5a'].value;
	var question6a = document.getElementById('quizPage').elements['question6a'].value;
	var question7a = document.getElementById('quizPage').elements['question7a'].value;
	var question8a = document.getElementById('quizPage').elements['question8a'].value;
	var correct = 0;
	var incorrect = 0;

 	if (question1a == "Pearl") correct++; else incorrect++;
 	if (question2a == "Stevens") correct++; else incorrect++;
 	if (question3a == "Lion") correct++; else incorrect++;
 	if (question4a == "Garnet") correct++; else incorrect++;
 	if (question5a == "KeepBeachCityWeird") correct++; else incorrect++;
 	if (question6a == "YellowTail") correct++; else incorrect++;
 	if (question7a == "BoomerangBlade") correct++; else incorrect++;
 	if (question8a == "Backwash") correct++; else incorrect++;
	document.getElementById("results").innerHTML = "You got " + correct + " right and " + incorrect + " wrong.";

} // function checkResults



 //*************************************************
// reload the page script
 //*************************************************

      function resetSUChallenge() {
    		location.reload();
		}
