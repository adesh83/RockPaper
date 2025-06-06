//Variable Declarations
let userSocre =0;
let compScore =0;

//DOM Element Selections
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userSocrePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

//function gencompchoice
const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

//function drawGame
const drawGame = ()=>{
    
    msg.innerText="Game was Draw.play again";
    msg.style.backgroundColor ="#081b31";
}

//function showWinner
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
     userSocre++;
      userSocrePara.innerText=userSocre;
       msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor ="green";
    }else{
        compScore++;
      compScorepara.innerText=compScore;
        
        msg.innerText=`You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};

//function PlayGame
const playGame = (userChoice)=>{
 
    const compChoice = genCompChoice();
 

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
           userWin= compChoice==="paper"?false :true;
        }else if (userChoice==="paper"){
          userWin= compChoice==="scissors"?false:true;
        }else{
            userWin= compChoice==="rock"?false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

//Event listner
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
     playGame(userChoice);
    });
});