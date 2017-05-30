
function mj(tree) {   
  if (tree.left==null||tree.right==null) {
    //final result screen
    image(back, 0, 0);    
    textSize(40);
    text("Recommendation", 350, 50);  
   line(70, 80, 930, 80);
    textSize(20);    
    text("You should " + tree.text, 380, 150);   
    rsB();
    if (oA) {
      current=root; 
      oA=false;
      if (round<4) {
        round++;
      } else
        round=0;
      //deals with cycle
    }
  } else {
    image(back, 0, 0);
    //background(200);
    textSize(40);    
    text("Free Time Assistant", 350, 50);  
    line(70, 80, 930, 80);
    textSize(20);
    text(tree.text, 380, 150); 
    textSize(16);
    buttons();  
    if (oY) {    
      current=tree.right;
      oY=false;
    }  
    if (oN) {    
      current=tree.left;
      oN=false;
    }
  }
}