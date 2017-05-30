
function setLeaves(){
  Q1="Do you have more than an hour?";
  Q2="Do you want to spend money?";
  Q3="Do you want to go outdoors?";
  Q4="Do you want to do physical activity?";
  //-------------------------------------------------------------------
  a1={text:"read a book",left:null, right:null};
  a2={text:"clean your house aggresively",left:null, right:null};
  a3={text:"draw something outdoors",left:null, right:null};
  a4={text:"go on a bike ride",left:null, right:null};
  a5={text:"try a new restaurant",left:null, right:null};
  a6={text:"go lasertagging",left:null, right:null};
  a7={text:"have a picnic in your backyard or park",left:null, right:null};
  a8={text:"hit golf balls at the driving range",left:null, right:null};
  a9={text:"have a movie marathon",left:null, right:null};
  a10={text:"clean out everything you don't need",left:null, right:null};
  a11={text:"find some nice trees and go hammocking",left:null, right:null};
  a12={text:"hike around a new park",left:null, right:null};
  a13={text:"try a new restaurant",left:null, right:null};
  a14={text:"visit a museum",left:null, right:null};
  a15={text:"go to a concert",left:null, right:null};
  a16={text:"go golfing",left:null, right:null};
}

function setBranches(){
  //Q4
 l4={text:Q4, left:a1 , right:a2}; 
 l5={text:Q4, left:a3 , right:a4};
 l6={text:Q4, left:a5 , right:a6};
 l7={text:Q4, left:a7 , right:a8};
 r4={text:Q4, left:a9 , right:a10};
 r5={text:Q4, left:a11 , right:a11};
 r6={text:Q4, left:a13 , right:a14};
 r7={text:Q4, left:a15 , right:a16};
 //Q3
 l2={text:Q3, left:l4  , right:l5};
 l3={text:Q3, left:l6  , right:l7};
 r2={text:Q3, left:r4  , right:r5};
 r3={text:Q3, left:r6  , right:r7};
 //Q2
 l1={text:Q2, left:l2  , right:l3};
 r1={text:Q2, left:r2  , right:r3};
 //Q1
 root={text:Q1, left:l1 , right:r1};
    
}

function setTree(){
 setLeaves();
 setBranches();  
}