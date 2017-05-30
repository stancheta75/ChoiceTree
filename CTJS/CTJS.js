var current,root,l1,l2,l3,l4,l5,l6,l7,r1,r2,r3,r4,r5,r6,r7;

var Q1,Q2,Q3,Q4;
var oY,oN,oA;
var back,round;
function setup() {
createCanvas(1000,800);
back=loadImage("data/Back1.JPG");
round=0;
oY=false;
oN=false;
oA=false;
setLeaves();
setBranches();
current=root;

/* GOALS:
-Create JS Arrays
-Put Arrays into text arguments
-ball out*/

}

function draw() {
  setTree();
  mj(current);    
}

function mouseClicked(){
  onOpt();    
  onAg();
}