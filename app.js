 let userScore = 0;
 let compScore = 0;
 let drawScore = 0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");
 const drawScorePara = document.querySelector("#draw-score");

 const drawGame = () =>{
  drawScore++;
  drawScorePara.innerText = drawScore;
  msg.innerText = "Game Was Draw Play Again";
  msg.style.backgroundColor = "#081b31";
 };

 const ShowWin = (userWin, userChoice, compChoice) =>{
  if (userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `user Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
 }

 const genComputerChoice = () => {
const option = ["rock", "paper", "scissors"];
const randidx = Math.floor(Math.random() *3);
return option[randidx];
 }

 const playGame = (userChoice) =>{
 const compChoice = genComputerChoice();

 if(userChoice === compChoice){
drawGame();
 } else {
  let userWin = true;
  if (userChoice === "rock"){
    userWin = compChoice === "paper" ? true : false;
  }else if (userChoice === "paper"){
    userWin = compChoice === "scissors" ? false : true;
  } else {
    userWin = compChoice === "rock" ? false : true;
  }
  ShowWin (userWin, userChoice, compChoice);
 }
 };

 choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
 })