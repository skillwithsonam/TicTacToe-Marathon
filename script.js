let btnRef= document.querySelectorAll(".btn");
let message= document.getElementById("message");
let main= document.getElementById("main");
let popup= document.querySelector(".info");
//Winning Pattern
let winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
//player X turn first
let xPlayer=true;
let count=0;
//Display X/0 as per player click
btnRef.forEach(function(element){
    element.addEventListener("click",function(){
        if(xPlayer){
            xPlayer=false;
            //Display X
            element.innerText="X";
            element.disabled= true;
        }
        else{
            xPlayer=true;
            //Display 0
            element.innerText="0";
            element.disabled=true;
        }
        //increase the count on each click
        count+=1;
        if(count==9){
            drawFunction();
        }
        //check for win for every click
        winLogic();
    })
})
//Enabling all Button(For New Game and restart)
function enableButtons(){
    btnRef.forEach(function(element){
        element.innerText="";
        element.disabled=false;
    })
     //Hide the Result Popuo
     popup.classList.add("hide");
     main.classList.remove("hide");
}
//Disabling all Button
function disableButtons(){
    btnRef.forEach(function(element){
        element.disabled=true;
    })
    //enable Result Popup
    popup.classList.remove("hide");
    main.classList.add("hide");
}
//Win Login
function winLogic(){
    //loop through win patterns
    for(let i of winningPatterns){
        let[element1,element2,element3]=[
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        //check if elements are filled up
        if((element1!="") && (element2!="") && (element3!="")){
           if( (element1==element2) && (element2 == element3)){
            winner(element1);
           }
        }
    }
}

function winner(element){
    disableButtons();
    if(element == 'X'){
        message.innerHTML= " 'X' Won the game"
    }
    else{
        message.innerHTML= " 'O' Won the game"
    }
}
function drawFunction(){
    disableButtons();
    message.innerHTML="It's a Draw"
}
function newGame(){
    count=0;
    enableButtons();
}