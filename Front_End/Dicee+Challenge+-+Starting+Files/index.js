
// In this project I decided to use the if else statements for chanhing the images which made 
// my code a bit longer compared to the instructor's code.

var name1 = prompt("Please enter your name: ");
var name2 = prompt("Please enter your name: ");
var firstPlayer = prompt("Enter name of the first player:");

var player1 = document.querySelector("p.player1").innerHTML = name1;

var player2 = document.querySelector("p.player2").innerHTML = name2;



if (firstPlayer === name1){

    document.querySelector("button").addEventListener("click", function(){
        var randomNumber = Math.floor((Math.random() * 6) +1);
//Selecting the image accrding to the generated random number
        if (randomNumber === 1){
            document.querySelector(".dice .img1").setAttribute("src", "./images/dice1.png");
        } else if (randomNumber === 2){
            document.querySelector(".dice .img1").setAttribute("src", "./images/dice2.png");
        } else if (randomNumber === 3){
            document.querySelector(".dice .img1").setAttribute("src", "./images/dice3.png");
        } else if (randomNumber === 4){
            document.querySelector(".dice .img1").setAttribute("src", "./images/dice4.png");
        } else if (randomNumber === 5){
            document.querySelector(".dice .img1").setAttribute("src", "./images/dice5.png");
        }else {
            document.querySelector(".dice .img1").setAttribute("src", "./images/dice6.png");
        }
    });

    if (randomNumber > randomNumber1){
        document.querySelector("h3").innerHTML = Player1 + " Wins!";
    } else if (randomNumber < randomNumber1){
        document.querySelector("h3").innerHTML = Player2 + " Wins!";
    }else {
        document.querySelector("h3").innerHTML = "Draw!🎌"
    }
    
    
} else if (firstPlayer === name2){

    document.querySelector("button").addEventListener("click", function(){
        var randomNumber1 = Math.floor((Math.random() * 6) +1);

        if (randomNumber1 === 1){
            document.querySelector(".dice .img2").setAttribute("src", "./images/dice1.png");
        } else if (randomNumber1 === 2){
            document.querySelector(".dice .img2").setAttribute("src", "./images/dice2.png");
        } else if (randomNumber1 === 3){
            document.querySelector(".dice .img2").setAttribute("src", "./images/dice3.png");
        } else if (randomNumber1 === 4){
            document.querySelector(".dice .img2").setAttribute("src", "./images/dice4.png");
        } else if (randomNumber1 === 5){
            document.querySelector(".dice .img2").setAttribute("src", "./images/dice5.png");
        }else {
            document.querySelector(".dice .img2").setAttribute("src", "./images/dice6.png");
        } 
    });

    if (randomNumber > randomNumber1){
        document.querySelector("h3").innerHTML = Player1 + " Wins!";
    } else if (randomNumber < randomNumber1){
        document.querySelector("h3").innerHTML = Player2 + " Wins!";
    }else {
        document.querySelector("h3").innerHTML = "Draw!🎌"
    }
    
} else {
    alert("Enter correct player name!!");
}


//changing the second image according to the generated random number



