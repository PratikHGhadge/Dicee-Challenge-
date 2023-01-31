var randomNo1 = Math.floor(Math.random()*6)+1;
var imgPath1 = "images/dice"+randomNo1+".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imgPath1);


var randomNo2 = Math.floor(Math.random()*6)+1;
var imgPath2 = "images/dice"+randomNo2+".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", imgPath2);


if(randomNo1>randomNo2){
     document.querySelector("h1").innerHTML = "playr 1 wins!";
}else if(randomNo1<randomNo2){
     document.querySelector("h1").innerHTML = "playr 2 wins!";
}else{
     document.querySelector("h1").innerHTML = "Draw";
}