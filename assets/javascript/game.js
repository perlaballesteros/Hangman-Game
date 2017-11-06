//Human Anatomy themed words
var hangmanWords=["disco","brain","groovie","phalanges"];

//CREATES THE VARIABLE THAT WILL HOLD THE WORD
var word2Guess=hangmanWords[0];

//ARRAY WILL HOLD THE WORD TO BE GUESSED
var word2Array=word2Guess.split('');

//BLANK ARRAY WILL BE THE SAME SIZE AS ARRAY HOLDING THE WORD
var blankArray=new Array(word2Array.length);

//NUMBER OF GUESSES ALLOWED
var guessesAllowed=7;
var guessesRemaining=7;


//ARRAY WILL HOLD THE USER'S WRONG GUESSES
var guessesWrong=new Array(guessesAllowed);

//CREATING COUNTER for the guessesWrong array allows to move w/in
var x=0;

//var to check if there are any _ left in the blank array

var blanks;


var continueGame;

//WINS
var wins=0;


//ADDING BLANKS TO THE BLANK ARRAY 
for(var i=0; i< word2Array.length; i++)
{
	blankArray [i]= "_";
}

//ADDING UDERSCORES TO GUESSARRAY
for(var i=0; i< guessesAllowed; i++)
{
	guessesWrong [i]= "_";
}




///START THE GAME ONCE A LETTER IS PRESSED
document.onkeyup = function(event)
{

	//CHECKS IF GUESS MATCHES THE STIRNG IN INDEX.
	var match= false;


	//USER GUESS
	userGuess= event.key;
	console.log(userGuess);	


	//TO DO:add a check for space and non letter before start
	for(var i=0;i<word2Array.length;i++)
	{
		
		//CHEKING IF USER GUESS IS A LETTER IN THE WORD
		if(word2Array[i]===userGuess)
		{
			blankArray[i]=userGuess;
			match=true;
		}

	}


	//IF WRONG GUESS SUBTRACT FROM THE GUESSES REMAINDING
	if(match===false)
	{
		//REPLACING ARRAY BLANK WITH USER GUESS
		guessesWrong[x]=userGuess;
		guessesRemaining--;
		x++;	
	}

	//CHEKING IF USER HAS GUESSED ALL THE LETERS IN ARRAY BLANKS=-1
	blanks=blankArray.indexOf("_");

	if(blanks<0)
	{
		continueGame=alert("Congratulations you have won this match! Would you like another word?")
		wins++;	
	}

	if (guessesRemaining<=0)
	{
		continueGame=prompt("Better luck next time! Would you like to guess another word?")
	}

//CHECKING 
console.log("remaindG: "+ guessesRemaining);
console.log("wrongG: "+ guessesWrong);
console.log("blankarray: "+ blankArray);

console.log("blanks: " +blanks);




	
}





//-----------------------------------------------------------

//while((guessesRemainding!=0) || (blanks!=0)  {}
	