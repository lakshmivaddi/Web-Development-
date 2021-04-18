//Click on the Reset/Start Button

//If we r playing 
// Button is Reset and page is Reloaded
//If we r not playing then some actions executed
//Set the score to 0
//Show count down box
//reduce time by 1 sec in loops
//time left 
//yes-then continue the game
//no-game over
//Change the button text to reset
//Generate a new ques and choices


//If clicked on ANSWER box
//If we are playing
//correct?
//YES-> increase the score by 1 and show correct box
//Also generate new ques and answers
//Answer is wrong-> show Try again box

var playing= false;
var res, timeremaining, action,z;
document.getElementById("startreset").onclick= function(){
    //check if we are playing
    if(playing==true){
    //syntax to reload the page
        location.reload();
    }
    else{
    //If we are not playing  
        playing=true;
        res=0;
        
        timeremaining=60;
        document.getElementById("timevalue").innerHTML=timeremaining;
        document.getElementById("startreset").innerHTML= "Reset Game"
        document.getElementById("scorevalue").innerHTML= res;
//        document.getElementById("time").style.display="block";
        show("time");
    hide("gameover");
        
      counter();
    generateqa();    
        
// Now Generating Ques and Choices        
        
  //Clicking on answer boxes   
    }
}
        
       for(i=1;1<5;i++){
  document.getElementById("box"+i).onclick=
            function(){
            //check if we are playing
            if(playing==true){
                if(this.innerHTML == z) {//this is we got the correct answer
                   // here we can use this keyword which in this case refers to the elements that we click on
                    
                    res++; //score increase by 1
                document.getElementById("scorevalue").innerHTML=res;
                
                //hide wrong box
                hide("wrong");
                show("correct");
                
                //to hide correct box after 1 sec
                setTimeout(function(){
                    hide("correct");
                },1000);
                
                //Generate new Ques
                generateqa();
                
            }
      else{
                //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000);
//           generateqa(); 
            }
            
            
        }
           
        
           
       } 
        
    }
    
    


function counter(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timevalue").innerHTML=timeremaining;
        if (timeremaining==0){
            //to stop the counter
        setcounterdown();
//            document.getElementById("gameover").style.display="block";
            show("gameover");
            
            document.getElementById("gameover").innerHTML="<p>Game over!!!</p><p>Your score is "+ res +"</p>";
//            document.getElementById("time").style.display="none";
            hide("time");
            hide("correct");
            hide("wrong");
            playing = false;
            
document.getElementById("startreset").innerHTML="Start Game";            
            
            
    }
    },1000);
    
}



//All Functions 




function setcounterdown(){
    clearInterval(action);
}


function hide(Id){
    document.getElementById(Id).style.display="none";
}

function show(Id){
    document.getElementById(Id).style.display="block";
}


function generateqa(){
    //to get numbers between 1 and 10
    var x= 1+Math.round(9*Math.random());
    var y= 1+Math.round(9*Math.random());
    z= x*y;
    document.getElementById("question").innerHTML=x+"x"+y;
    var correctposition = 1+Math.round(3*Math.random());
    document.getElementById("box"+correctposition).innerHTML= z;//Fill one box with the correct answer
    
    //fill other boxes with the wrong answers
    
    //Here below no two wrong answers should be same
    
    var answers = [z];
        //array answers
    
    
    for(i=1;i<5;i++){
        if(i!=correctposition){
             var wronganswer
             //This is to verify that our wrong answers are different from the correct amswers
             do{
                 wronganswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
             }
//            while(wronganswer==z);
            while(answers.indexOf(wronganswer)>-1)
           document.getElementById("box"+i).innerHTML=wronganswer;
            
            
            //adding the wrong answer into the answers array
            answers.push(wronganswer);
                             
            
        }
    }
}



// === -> equal values and equal types
// == -> only equal values
// != -> only not equal values
// !== -> not equal values and not equal types