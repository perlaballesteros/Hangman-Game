
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
//CHECKS IF GUESS MATCHES THE STIRNG IN INDEX.
var match= false;
//CREATING COUNTER for the guessesWrong array allows to move w/in
var x=0;
//CHECKING TO SEE IF THERE ARE ANY  "_" REMAINING IN THE BLANK ARRAY
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
alert("word2arrayb4 onkey: "+ word2Array);
alert("blankArray b4 "+ blankArray);
alert("guessesWrong b4: " +guessesWrong);
//------------------------------------------ONKEYUP FUNCTION-----------------------------------------------


//START THE GAME ONCE A LETTER IS PRESSED
document.onkeyup = function(event)
{

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

//CHEKING
alert("blankArray after for loop check: " + blankArray);

	//IF WRONG GUESS SUBTRACT FROM THE GUESSES REMAINDING
	if(match===false)
	{
		//REPLACING ARRAY BLANK WITH USER GUESS
		guessesWrong[x]=userGuess;
		guessesRemaining--;
		x++;	
	}
//CHECKING
alert("guessesWrong after wrong letter: " + guessesWrong);
alert("gyessesReainingafter first mistake "+ guessesRemaining);

	
	//if()
	//{
		//continueGame=confirm("Congratulations you have won this match! Would you like another word?");
		//wins++;	

		//if(continueGame)
		//{
			
			//y++;
			

		//}
		//else
		//{
			//End=true
		//}

	//}

	//if (guessesRemaining<=0)
	//{
		//continueGame=confirm("Better luck next time! Would you like to guess another word?")
		//if(continueGame)
		//{
			//y++;
		//}
		//else
		//{
			//End=true
		//}
	//}

	
}





//-----------------------------------------------------------

//copying THE RETURN ARRAY
//var word2Guess=newword2Guess(u).slice();
	//CHEKING IF USER HAS GUESSED ALL THE LETERS IN ARRAY BLANKS=-1
	//blanks=blankArray.indexOf("_");
//while((guessesRemainding!=0) || (blanks!=0)  {}
	//while (End=true)
//{
	//}

