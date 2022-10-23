document.getElementById("btn4").disabled = true;
var myNum=-1;
var oppNum=-1;

document.getElementById('btn4').addEventListener("click", function(){
document.getElementById("btn4").style.display="none";
var ranChoice1=Math.floor(Math.random()*3)+1;
var ranImg1="choice"+ranChoice1+".png";
var cSource1="images/"+ranImg1;
var img1=document.getElementById("img1");
img1.setAttribute("src",cSource1);
oppNum=ranChoice1;

if(myNum==oppNum){
  document.querySelector("h2").innerHTML="It's a draw!Boooringg!";
  var audio = new Audio('Boo.wav');
  audio.play();
}

else if (myNum==1 && oppNum==3) {
  document.querySelector("h2").innerHTML="Computer Wins! Boo you!";
  var audio = new Audio('Loser.wav');
  audio.play();
}

else if (myNum==3 && oppNum==1) {
  document.querySelector("h2").innerHTML="You win! Woohoo!";
  var audio = new Audio('Winner.wav');
  audio.play();
}

else if (myNum>oppNum) {
document.querySelector("h2").innerHTML=" Computer Wins! Boo you!";
var audio = new Audio('Loser.wav');
audio.play();
}

else if(myNum<oppNum){
document.querySelector("h2").innerHTML="You win! Woohoo!";
var audio = new Audio('Winner.wav');
audio.play();
}
 })

document.getElementById('btn1').addEventListener("click", function(){
  document.getElementById("you2").style.display="none";
  document.getElementById("you3").style.display="none";
  document.getElementById("btn1").style.display="none";
  let txt = document.getElementById("you1");
    txt.style.textAlign = "left";
  myNum=1;
  document.getElementById("btn4").disabled = false;
})

document.getElementById('btn2').addEventListener("click", function(){
  document.getElementById("you1").style.display="none";
  document.getElementById("you3").style.display="none";
  document.getElementById("btn2").style.display="none";

  let txt = document.getElementById("you2");
    txt.style.textAlign = "left";
  myNum=2;
  document.getElementById("btn4").disabled = false;
})

document.getElementById('btn3').addEventListener("click", function(){
  document.getElementById("you1").style.display="none";
  document.getElementById("you2").style.display="none";
  document.getElementById("btn3").style.display="none";
  let txt = document.getElementById("you3");
    txt.style.textAlign = "left";
  myNum=3;
  document.getElementById("btn4").disabled = false;
})
