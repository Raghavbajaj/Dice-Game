
let a= Math.floor(Math.random()*6 +1);

let b= Math.floor(Math.random()*6 +1);
let image = document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+a+".png");
let secimgae = document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+b+".png");
if (a>b)
{
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (a===b) {
   document.querySelector("h1").innerHTML="Draw";
}
else {
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
