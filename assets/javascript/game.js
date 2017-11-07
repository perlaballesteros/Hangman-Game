
//-----------GLOBALVARIABLES---------------------------
//Human Anatomy themed words
var hangmanWords=["disco","brain","groovie","phalanges"];
//HOLD THE STRING OF THE WORD IN THE HANGMANWORDS
var word2Guess;
//WILL WORD2GUESS AS AN ARRAY TYPE
var word2Array;
//AN ARRAY WITH "_"
var blankArray;
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
//EXITING THE WHILE LOOP
var End=false;






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


//CALLING FUNCTION FOR FIRST TIME THE GAME RUNS
newWord2guess(0);


//CHECKING
console.log("word2arrayb4 onkey: "+ word2Array);
console.log("blankArray b4 "+ blankArray);
console.log("guessesWrong b4: " +guessesWrong);
//------------------------------------------ONKEYUP FUNCTION-----------------------------------------------


//START THE GAME ONCE A LETTER IS PRESSED
document.onkeyup = function(event)
{

	//USER GUESS
	userGuess= event.key;
	console.log(userGuess);	
	//CHECKS IF GUESS MATCHES THE STIRNG IN INDEX.
	var match= false;	
	//you win 
	var youWin=word2Array.length
//CHECK
console.log("youWin" + youWin);






	//TO DO:add a check for space and non letter before start
	for(var i=0;i<word2Array.length;i++)
	{
		
		//CHEKING IF USER GUESS IS A LETTER IN THE WORD
		if(word2Array[i]===userGuess)
		{
			blankArray[i]=userGuess;
			lettersGuessed++;
//CHECKING
console.log("letter" + lettersGuessed);
			match=true;

		}

	}


//CHEKING
console.log("blankArray after for loop check: " + blankArray);


	//IF WRONG GUESS SUBTRACT FROM THE GUESSES REMAINDING
	if(match===false)
	{
		//REPLACING ARRAY BLANK WITH USER GUESS
		guessesWrong[x]=userGuess;
		guessesRemaining--;
		x++;	
//CHECKING
console.log("guessesWrong after wrong letter: " + guessesWrong);
console.log("gyessesReainingafter first mistake "+ guessesRemaining);
	}


	//user wins or looses
	if (lettersGuessed===youWin)
	{

		continueGame=prompt("Congrats, you have won ")
		
	}
	

	
}





//-----------------------------------------------------------



