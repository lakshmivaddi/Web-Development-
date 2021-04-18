//Click on startreset button
    //check are we playing
        //if playing -> reload the page
        //if not playing- > show trials left
            //change the button to reset game
            //1.create a random fruit and move //2.fruit down by one step done in loops every 30sec
            //then check if the fruit is too low
                //if not too low then move it down by another step (repeat step 2.)
                //if too low ask of there r any trials left?
                    //if yes: step 1. repeat
                    //if no: show game over, button txt to start game

//slice a fruit
    //play sound int he background and also explode the fruit

var action, play= false, score, heartsleft, step, fruits = ['apple','melon','banana', 'pear','grapes','berry','orange'];

$(function(){
   $("#startreset").click(function(){
       //Click on startreset button
    //check are we playing
       if(play == true){
           //if playing -> reload the page
          location.reload();
          }
       else{
           play=true;
           //if not playing- > show trials left
           //change the button to reset game
            //1.create a random fruit and move //2.fruit down by one step done in loops every 30sec
           score=0;
           $("#scorevalue").html(score);
           $("#startreset").html("Reset Game")
            $("#hearts").show();
           heartsleft=3;
            addhearts();
           
           startaction();
           //hiding game over
           $("#gameover").hide();
       }
   });
    

//slice the fruit
    
 $("#fruit").mouseover(function(){
     score++;
     $("#scorevalue").html(score);
//     document.getElementById("sound").play(); -> in js version
     $("#sound")[0].play(); //this returns an array. the first element in the array is the audio so u gonna select the index 0 element
     
     //stop the fruit from gng down
//     stopaction();
     clearInterval(action);
     
     //hidefruit
     $("#fruit").hide("explode",500);//first parameter is animation and second parameter is duration of animation for slicing the fruit. For the animation to work we need to embed jquery ui script
     
     //send new fruit
     //startaction(); //if we use this method then it starts the action at the same time when we start the animation for fruit slicing
     
     setTimeout(startaction, 800); //delay, first parameter is the function to be executed and second is the duration we gonna wait before executing the function
 });   






//functions 


function addhearts(){
    $("#hearts").empty(); //this empties any html element before moving to the for loop
    for(i=0;i<heartsleft;i++){//no need to initialize "i" here
                $("#hearts").append("<img src='images/heartlogo.png' id='life'>");
                  
            }
           
}

function startaction(){
//    $("#fruitbox").append("<img src='images/apple.png' class='fruit'>"); -> we are not using this code because if we add each fruit to our pages it occupies more memory by appending so opting the below best way
    $("#fruit").show();
    choosefruit();//choosing random fruit
//    $(".fruit").css({'left':'300px', 'top': '-70px' });
//    
     $("#fruit").css({'left':Math.round(400*Math.random()), 'top': -70 });
    

    //2.fruit down by one step done in loops every 10sec
    //generating randon step
    step = 1+Math.round(5*Math.random()); //getting a step between 1 and 6
    
     //setting the time interval  
    action = setInterval(function(){
        $("#fruit").css('top', $("#fruit").position().top+step); //top object returns the original value of the top property of the fruits 
         //if too low ask of there r any trials left?
        if($("#fruit").position().top > $("#fruitbox").height()){
            if(heartsleft>1){
                 $("#fruit").show();
                choosefruit();
                $("#fruit").css({'left':Math.round(400*Math.random()), 'top': -70 });
     step = 1+Math.round(5*Math.random()); 
                
                //reduce trials
                heartsleft--;
                
                //populate heartsleft box
                addhearts();
            
               }
            else{ //game over
                 play =false;
                
                $("#startreset").html("Start Game");
                $("#gameover").show();
                $("#gameover").html("<p>Game over!!!</p><p>Your Score is "+ score +"</p>");
               
                $("#hearts").hide();
                stopaction();
            
            }
           
           }
    }, 10);
}

    //generating random fruit
function choosefruit(){
    $("#fruit").attr('src','images/'+ fruits[Math.round(6*Math.random())] +'.png');
}

//stop fruit dropping
function stopaction(){
    clearInterval(action);
    $("#fruit").hide();
}
    
        
    

});