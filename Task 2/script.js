var player1 = Math.floor(Math.random() * 6)+1;
var player2 = Math.floor(Math.random() * 6)+1;

document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+player1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+player2+".png");

if(player1 > player2)
    document.querySelector('h1').textContent = "Player1 Wins 🚩"
else if(player2 > player1)
    document.querySelector('h1').textContent = "Player2 Wins 🚩"
else
    document.querySelector('h1').textContent = "Match Drawn 🎌"