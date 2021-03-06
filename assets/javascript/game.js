//-----------GLOBALVARIABLES---------------------------
//Human Anatomy themed words
var hangmanWords=["nose","aorta","liver","spleen"];
var hints=["I sometimes run, but I cannot walk. You always follow me around. What am I?", "The largest and the main artery of the circulatory system","Produces digestive juice called bile.","largest lymphatic organ."];
var hintcount=0;
//HOLD THE STRING OF THE WORD IN THE HANGMANWORDS
var word2Guess;
//WILL WORD2GUESS AS AN ARRAY TYPE
var word2Array;
//AN ARRAY WITH "_" THIS IS THE ARRAY THAT WILL BE REPORTED TO THE HTML
var blankArray;
//CHECKS IF GUESS MATCHES THE STIRNG IN INDEX.
var match= false;	
//NUMBER OF GUESSES ALLOWED
var guessesAllowed=7;
var guessesRemaining=7;
//ARRAY WILL HOLD THE USER'S WRONG GUESSES
var guessesWrong=new Array(guessesAllowed);
//CREATING COUNTER for the guessesWrong array allows to move w/in
var x=0;
//CHECKING TO SEE IF THERE ARE ANY  "_" REMAINING IN THE BLANK ARRAY
var lettersGuessed=0;
//KEEPS TRACK OF WINS
var wins=0;
//STORES THE USERS DECISION TO CONTINUE OR END THE GAME
var continueGame;
//COUNTER VARIABLE TO MOVE THEROUGH WORDS IN HANGMAN ARRAY
var nextWord=0;
//MAKING SURE THAT USER WORD HAS NOT BEEN GUESSED ALREADY
var wordAlreadyguessed=false;
//STORES BOOLEAN TO CHECK IF USER'S GUESS IS REPEATED
var userWrongguessRepeated;
//losses
var losses=0;
//sound for userGuess right
var guessRightSound=new Audio("assets/sounds/Input-04b.mp3");
var guessWrongSound=new Audio("assets/sounds/Input-05.mp3");
var winSound=new Audio("assets/sounds/Alert-05.mp3");
var lossSound=new Audio("assets/sounds/Alert-10.mp3");
var hintSound=new Audio("assets/sounds/Alert-01.mp3")
//------------------------------------FUNCTIONS---------------------------------------------------------

function newWord2guess(s)
{
	//CREATES THE VARIABLE THAT WILL HOLD THE WORD
	word2Guess=hangmanWords[s]; 

	//ARRAY WILL HOLD THE WORD TO BE GUESSED
	word2Array=word2Guess.split('');
	//BLANK ARRAY WILL BE THE SAME SIZE AS ARRAY HOLDING THE WORD
	blankArray=new Array(word2Array.length);
	
	insertBlankarray();
}



function insertBlankarray()
{
	//ADDING BLANKS TO THE BLANK ARRAY 
	for(var i=0; i< word2Array.length; i++)
	{
		 blankArray [i]= "_";
	}
	insertBlanksguesses();

}


function insertBlanksguesses()
{
	//ADDING UDERSCORES TO GUESSARRAY
	for(var i=0; i< guessesAllowed; i++)
	{
		guessesWrong [i]= "_";
	}

}


function checkingUserguess()
{
	//CHECKS REPEAT USER GUESS IN WORD TO GUESS
	for(var i=0;i<word2Array.length;i++)
	{
		
		if(blankArray[i]===userGuess)
		{
			wordAlreadyguessed=true;
		}
		
	}
	//CHECKS REPEATS IN WRONG GUESSES
	for(var j=0;j<guessesWrong.length;j++)
	{
		
		if(guessesWrong[j]===userGuess)
		{

			userWrongguessRepeated=true;
		
		}
	}
}


//-----------------------------------------------------------------------------------------

//CALLING FUNCTION FOR FIRST TIME THE GAME RUNS
newWord2guess(nextWord);

//REPORTING WINS TO HTML DIV #winsShow

$("#winsShow").text(wins);
//LOSSES
$("#lossesShow").text(losses);

//BLANK ARRAY AND GUESSESWRONG SHOULD BE REPORTED HERE FOR THE FIRST TIME
//THE PROGRAM RUNS THEN IT SHOULD BE REPLACED WITH THE ONE IN ON KEY FUNCTION
//.join(" ") prints arrays without commas 
$("#currentWordshow").text(blankArray.join(" "));
//GUESSES WRONG ARRAY
$("#lettersGuessedshow").text(guessesWrong.join(" "));
//Number of Guesses Remaining
$("#numberGuessesshow").text(guessesRemaining);



//START THE GAME ONCE A LETTER IS PRESSED
document.onkeyup = function(event)
{
	

	//USER GUESS IS TRUNED TO LOWERCASE
	userGuess= String.fromCharCode(event.keyCode).toLowerCase();


	//BEFORE FUNCTION SO PREVIOUS GUESS DOEN'T AFFECT NEW(IMPORTANT)
	userWrongguessRepeated=false;	
	match=false;


	//GET ARRAYS THAT HOLD THE "_"
	checkingUserguess();
	
	//IF USER GUESS IS NOT REPEATED AND IF USER  MATCH IS A LETTEER RUN THE CODE
	if(wordAlreadyguessed===false && userGuess.match(/[a-z]/i))
	{
	
		//WIN IF YOU WIN IS EQUAL TO THE LENGTH OF THE ARRAY WITH THE WORD THAT IS BEING GUESSED
		var youWin=word2Array.length


		
		for(var i=0;i<word2Array.length;i++)
		{
	
		
			//CHEKING IF USER GUESS IS A LETTER IN THE WORD
			if(word2Array[i]===userGuess)
			{

				guessRightSound.play();
				blankArray[i]=userGuess;
				lettersGuessed++;
				match=true;
			}
			
		}
		//REPORT VALUE OF BLANK ARRAY TO REVEAL ALL THE LETTERS GUESSED IN THE CURRENTWORDSHOWDIV	
		$("#currentWordshow").text(blankArray.join(" "));


	
		//IF WRONG GUESS SUBTRACT FROM THE GUESSES REMAINDING
		//THIS ONE BELOW SHOULD RUN THE FIRST TIME THE GAME IS PLAYED AND WHEN NO REPEATED WORDS
		if(match===false && userWrongguessRepeated===false)
		{
			//REPLACING ARRAY BLANK WITH USER GUESS
			guessesWrong[x]=userGuess;
			x++;
			guessesRemaining--;
			guessWrongSound.play();
			
			
		}
		//REPORT GUESSES REMAINING HER TO SHOW ALL OF THE LETTERS GUESSED
		$("#lettersGuessedshow").text(guessesWrong.join(" "));
		//Number of Guesses Remaining
		$("#numberGuessesshow").text(guessesRemaining);


		//DRAWING HANGMAN
		if(guessesRemaining===6)
		{
			var canvas = document.getElementById("canvas");

			var ctx = canvas.getContext("2d");
		

			ctx.fillStyle="#FFFFFF"
		
			//structure
			ctx.beginPath();
			ctx.fillRect(30,130,140,5);

			ctx.fillRect(40,20,5,110);

			ctx.fillRect(40,20,90,5);

			ctx.fillRect(20,20,90,5);

			ctx.fillRect(130,20,5,10);
			ctx.stroke();
  			ctx.closePath();
		}
		if(guessesRemaining===5)
		{
			//head
			var canvas = document.getElementById("canvas");
			var ctx = canvas.getContext("2d");
			ctx.fillStyle="#FFFFFF"
      	
			var circle = function (x, y, radius) {

  				ctx.beginPath();

  				ctx.arc(x, y, radius, 0, Math.PI * 2, false);

  				ctx.stroke();
  				ctx.closePath();
  			};

  			ctx.lineWidth = 4;

			ctx.strokeStyle = "#FFFFFF";

			circle(132.5, 40, 10);
		}

		if(guessesRemaining===4)
		{
			var canvas = document.getElementById("canvas");	
			var ctx = canvas.getContext("2d");
			ctx.fillStyle="#FFFFFF"
			ctx.beginPath();
			ctx.fillRect(130,50,5,40);
			ctx.stroke();
			ctx.closePath();
		}

		if(guessesRemaining===3)
		{
			var canvas = document.getElementById("canvas");
      	
			var ctx = canvas.getContext("2d");
			ctx.fillStyle="#FFFFFF"

			ctx.lineWidth = 4;

			ctx.beginPath();
		
			ctx.moveTo(132, 90);

			ctx.lineTo(115, 115);

			ctx.stroke()
			ctx.closePath();
		}

		if(guessesRemaining===2)
		{
			//leg2

			var canvas = document.getElementById("canvas");
      	
			var ctx = canvas.getContext("2d");
			ctx.fillStyle="#FFFFFF"

			ctx.lineWidth = 4;

			ctx.beginPath();
			ctx.moveTo(132, 90);

			ctx.lineTo(149, 115);

			ctx.stroke()
			ctx.closePath();
		}


		if(guessesRemaining===1)
		{
			//arm1

			var canvas = document.getElementById("canvas");
      	
			var ctx = canvas.getContext("2d");
			ctx.fillStyle="#FFFFFF"

			ctx.lineWidth = 4;

			ctx.beginPath();
			ctx.moveTo(132, 70);

			ctx.lineTo(149,60);

			ctx.stroke()
			ctx.closePath();


			var hintDiv=$("<div>");
			hintDiv.attr("id","hintDiv");
			hintSound.play();

			//GIVING THE USER A HINT
			$("#hintDiv").html("<h1>Hint</h1>");

			$("#hintDiv").on("click", function() {

        		$("#hintDiv").text(hints[hintcount]);
      		});
      		
		}

		if(guessesRemaining===0)
		{
			//arm2
		 	var canvas = document.getElementById("canvas");
      		
			var ctx = canvas.getContext("2d");
			ctx.fillStyle="#FFFFFF"

			ctx.lineWidth = 4;

			ctx.beginPath();
			ctx.moveTo(132, 70);

			ctx.lineTo(115,60);

			ctx.stroke()
			ctx.closePath();


		}

		
	}

		
		//IF USER WINS
		if (lettersGuessed===youWin)
		{

			//continueGame=confirm("Congrats, you have won! Would you like to guess another word?");
			wins++;
			x=0;
			hintcount++;
			nextWord++;
			lettersGuessed=0;
			guessesRemaining=7;
			
			winSound.play();
			newWord2guess(nextWord);
			
			
			
			
			$("#winsShow").text(wins);
			
			
			//STARTING NEW WORD NEED TO REPORT BLANK ARRAYS
			$("#currentWordshow").text(blankArray.join(" "));
			//GUESSES WRONG ARRAY
			$("#lettersGuessedshow").text(guessesWrong.join(" "));
			//Number of Guesses Remaining
			$("#numberGuessesshow").text(guessesRemaining);	
			
			//clearing the canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			//CLEARING THE HINT DIV
			$("#hintDiv").empty();
		
		}

		//IF PLAYER RUNS OUT OF guesses
		if (guessesRemaining===0)
		{
			lossSound.play();
			losses++;
			hintcount++;
			//ADDING ONE IN ORDER TO ACCESS THE NEXT WORD
			nextWord++;
			//CALING THE FUNCTIONS TO RECEIVE THE NEXT WORD
			newWord2guess(nextWord);
			//REINITIALIZING THE LETTERS GUESS TO ZERO FOR THE NEW WORD
			lettersGuessed=0;
			//REINITIALIZING THE # OF TRIES TO 7 FOR THE NEW WORD
			guessesRemaining=7;
			//REINITIALIZING IN ORDER TO GO BACK TO THE START OF THE GUESSEDWORDS ARRAY FOR THE NEW WORD
			x=0;
			//STARTING NEW WORD NEED TO REPORT BLANK ARRAYS
			$("#currentWordshow").text(blankArray.join(" "));
			//GUESSES WRONG ARRAY
			$("#lettersGuessedshow").text(guessesWrong.join(" "));
			//Number of Guesses Remaining
			$("#numberGuessesshow").text(guessesRemaining);
			//clearing the canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			$("#lossesShow").text(losses);
			//CLEARING THE HINT DIV
			$("#hintDiv").empty();
		
		}
		
	
					
	if(wordAlreadyguessed===true)
	{
		
			
			wordAlreadyguessed=false;

	}
	
	
}//onkey function



