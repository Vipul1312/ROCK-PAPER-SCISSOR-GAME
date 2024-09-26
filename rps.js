let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const computerscorepara=document.querySelector("#computer-score");

const gencomputerchoice = () => {
    const options = ["rock","paper","scissor"];
    const randidx=Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawGame = () => {
    //console.log("game was draw");
    msg.innerText="game is draw play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin,userchoice,computerchoice) => {
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
       // console.log("you win!");
        msg.innerText= `You win! your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor="green";
    } else{
        computerscore++;
        computerscorepara.innerText=computerscore;
        //console.log("you lose!");
        msg.innerText= `You lose! ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGames = (userchoice) => {
    console.log("userchoice =", userchoice);
    //generate computer choice
    const computerchoice =gencomputerchoice();
    console.log("computerchoice =", computerchoice);

    if(userchoice === computerchoice){
        //draw game
        drawGame();
    } else{
        let userWin =true;
        if(userchoice === "rock"){
            //scissor, paper
            userWin = computerchoice==="paper" ? false: true;
        } else if(userchoice === "paper"){
            //rock,scissor
            userWin = computerchoice==="scissor" ? false: true;
    } else{
        //rock,paper
        userWin=computerchoice==="rock" ? false : true;
    }
    showWinner(userWin,userchoice,computerchoice);
    }
};

choices.forEach((choice) => {
 choice.addEventListener("click", () => {
    const userchoice=choice.getAttribute("id");
    //console.log("choice was clicked",userchoice);
    playGames(userchoice);
 });
});
