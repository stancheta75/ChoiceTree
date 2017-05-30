
function buttons(){  
 fill(255); 
 rect(300,250,100,100,10); 
 rect(600,250,100,100,10);
 fill(0);
 text("No",340,300); 
 text("Yes",640,300); 
}

function onOpt(){
  //on yes
  if (mouseX>=600&&mouseX<700&&mouseY>=250&&mouseY<=350){
  oY=true;  }
  //on no
  if (mouseX>=300&&mouseX<400&&mouseY>=250&&mouseY<=350){
  oN=true;}    
}

function rsB(){
  fill(255);
  rect(450,250,100,100,10);
  fill(0);
  text("Play again",455,300);
}

function onAg(){
  if (mouseX>=450&&mouseX<=550&&mouseY>=250&&mouseY<=350){
  oA=true;
  }
}