function Refresh(){
  document.querySelector('h1').innerHTML = "Start";
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}


randomnumber = (Math.random())*10;
if(randomnumber > 6){
  randomnumber = randomnumber%6;
}
randomnumber_floor = (Math.floor(randomnumber))+1;

switch(randomnumber_floor){
  case 1:
    document.querySelector('.img1').setAttribute("src","images/dice1.png");
    break;
  case 2:
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
    break;
  case 3:
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
    break;
  case 4:
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
    break;
  case 5:
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
    break;
  case 6:
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    break;

}

randomnumber2 = (Math.random())*10;
if(randomnumber2 > 6){
  randomnumber2 = randomnumber2%6;
}
randomnumber_floor2 = (Math.floor(randomnumber2))+1;
switch(randomnumber_floor2){
  case 1:
    document.querySelector('.img2').setAttribute("src","images/dice1.png");
    break;
  case 2:
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
    break;
  case 3:
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
    break;
  case 4:
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
    break;
  case 5:
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
    break;
  case 6:
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
    break;
}

if (randomnumber_floor > randomnumber_floor2){
  document.querySelector('h1').innerHTML = "Player 1 Wins";
}
else if(randomnumber_floor == randomnumber_floor2){
  document.querySelector('h1').innerHTML = "Draw";
}
else{
  document.querySelector('h1').innerHTML = "Player 2 Wins";
}
