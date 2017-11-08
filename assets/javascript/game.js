//-----------GLOBALVARIABLES---------------------------
//Human Anatomy themed words
var hangmanWords=["brain","brain","groovie","phalanges"];
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

//BLANK ARRAY AND GUESSESWRONG SHOULD BE REPORTED HERE FOR THE FIRST TIME
//THE PROGRAM RUNS THEN IT SHOULD BE REPLACED WITH THE ONE IN ON KEY FUNCTION
//.join(" ") prints arrays without commas 
console.log(blankArray.join(" "));
console.log(guessesWrong.join(" "));




//START THE GAME ONCE A LETTER IS PRESSED
document.onkeyup = function(event)
{

	//USER GUESS IS TRUNED TO LOWERCASE
	userGuess= String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	//BEFORE FUNCTION SO PREVIOUS GUESS DOEN'T AFFECT NEW(IMPORTANT)
	userWrongguessRepeated=false;	
	match=false;


	//GET ARRAYS THAT HOLD THE "_"
	checkingUserguess();
	

	if(wordAlreadyguessed===false)
	{
	
		//WIN IF YOU WIN IS EQUAL TO THE LENGTH OF THE ARRAY WITH THE WORD THAT IS BEING GUESSED
		var youWin=word2Array.length


		
		for(var i=0;i<word2Array.length;i++)
		{
	
		
			//CHEKING IF USER GUESS IS A LETTER IN THE WORD
			if(word2Array[i]===userGuess)
			{
				blankArray[i]=userGuess;
				lettersGuessed++;
				match=true;

			}
			
		}
		//REPORT VALUE OF BLANK ARRAY TO REVEAL ALL THE LETTERS GUESSED
		console.log(blankArray.join(" "));

	
		//IF WRONG GUESS SUBTRACT FROM THE GUESSES REMAINDING
		//THIS ONE BELOW SHOULD RUN THE FIRST TIME THE GAME IS PLAYED AND WHEN NO REPEATED WORDS
		if(match===false && userWrongguessRepeated===false)
		{
			//REPLACING ARRAY BLANK WITH USER GUESS

			guessesWrong[x]=userGuess;
			x++;
			guessesRemaining--;
			
			
		}
		//REPORT GUESSES REMAINING HER TO SHOW ALL OF THE LETTERS GUESSED
		console.log(guessesWrong.join(" "));
		console.log("guesses remaining "+ guessesRemaining);

		//IF USER WINS
		if (lettersGuessed===youWin)
		{

			continueGame=confirm("Congrats, you have won! Would you like to guess another word?");
			wins++;

			if(continueGam=true)
			{
				nextWord++;
				newWord2guess(nextWord);
				lettersGuessed=0;
				guessesRemaining=7;
			}
	
		
		}

		//IF PLAYER RUNS OUT OF guesses
		if (guessesRemaining===0)
		{

			continueGame=confirm("You have run out of guesses,better luck next time! Would you like to guess another word?");

			if(continueGame===true)
			{
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
			}

				
		}
		
	}
					
	if(wordAlreadyguessed===true)
	{
		
			alert("you have already correctly guessed letter, " + userGuess + "." + "press a different letter to continue.");
			//REINITIALIZING TO BE ABLE TO CHECK IF THE NEW LETTER HAS REPEATED
			wordAlreadyguessed=false;

	}
	
	
}//onkey function

//----------------------


