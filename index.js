var randomNumber1=Math.floor(Math.random()*6+1);
var folderPath="images/";
var dice1Image=folderPath+"dice"+randomNumber1+".png";
var image1Path=dice1Image;
document.querySelectorAll("img")[0].setAttribute("src",image1Path);

var randomNumber2=Math.floor(Math.random()*6+1);
var folderPath="images/";
var dice2Image=folderPath+"dice"+randomNumber2+".png";
var image2Path=dice2Image;
document.querySelectorAll("img")[1].setAttribute("src",image2Path);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}