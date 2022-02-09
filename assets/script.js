const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];






let timer = 50;

const displayTime = document.getElementById("time");
const startBtn = document.querySelector(".start-btn");
const startContainer = document.querySelector(".main-container");
const questionContainer = document.querySelector(".questions");
const question = document.getElementById("question");
const option1 = document.querySelector(".one");
const option2 = document.querySelector(".two");
const option3 = document.querySelector(".three");
const option4 = document.querySelector(".four ");
const nextBtn = document.getElementById("next");
let start;
const showStatus = document.getElementById("status");
const results = document.querySelector(".results");
const submitBtn = document.getElementById("submit");
let userName = document.getElementById("username");
const displayMarks = document.getElementById("marks");
// const users = window.localStorage;
window.localStorage.setItem("highScores",JSON.stringify([]));
const highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

//HIGHSCORE DISPLAY
const highScoreContainer = document.querySelector(".highscore");
const displayHighScore = document.getElementById("leaderboard");
const highscoreList = document.getElementById("highscorelist");
// const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const startAgainBtn = document.querySelector(".home-btn");
const clearBtn = document.querySelector(".clear-btn");


//THIS CODE IS NOT WORKING




function resetHighScore(){
    localStorage.clear();
    highscoreList.innerHTML = "";
}


clearBtn.addEventListener("click",resetHighScore);
startAgainBtn.addEventListener("click",function(){
    // localStorage.setItem("highScores",JSON.stringfy(highScores));
    startContainer.style.display="block";
    
    highScoreContainer.style.display="none";
})

displayHighScore.addEventListener("click",function(){
  highScoreContainer.style.display="block";
  startContainer.style.display="none";
})
console.log(highscoreList);

// const usersScores = [];


option1.addEventListener("click", onAnsweredOption(option1))
option2.addEventListener("click", onAnsweredOption(option2))
option3.addEventListener("click", onAnsweredOption(option3))
option4.addEventListener("click", onAnsweredOption(option4))


// let marks = 0;
let index = 0;

function startTimer(){
  
  if(timer<10){
    displayTime.innerHTML = '0'+timer;
  }
  else{
    displayTime.innerHTML = timer;
  }
  
  timer--;
  if(timer<0){
    clearInterval(start);
    questionContainer.style.display="none";
    results.style.display="block";
    displayMarks.innerHTML = timer+1;

  }
 
 
}

function interval(){
  startTimer();
  start = setInterval(startTimer,1000);
 
  startContainer.style.display="none";
  questionContainer.style.display="block";
  // console.log("marks: ",marks);
  
  
 
  
  
}

// const interval = setInterval(startTimer,1000);
//start of the program
startBtn.addEventListener("click",function(){
  interval();
  optionClick();
});
console.log(startContainer);

function optionClick(){
 
  question.innerHTML = questions[index]['questionText'];
  option1.innerHTML = questions[index]['options'][0];
  option2.innerHTML = questions[index]['options'][1];
  option3.innerHTML = questions[index]['options'][2];
  option4.innerHTML = questions[index]['options'][3];
  option1.style.background="rgb(86, 179, 241)";
  option2.style.background="rgb(86, 179, 241)";
  option3.style.background="rgb(86, 179, 241)";
  option4.style.background="rgb(86, 179, 241)";
  //default color of the text
  option1.style.color="#000";
  option2.style.color="#000";
  option3.style.color="#000";
  option4.style.color="#000";
  
  showStatus.innerHTML = "none";

}

nextBtn.addEventListener("click",function(){
  // console.log("index",index);
  // console.log("marks: ",marks);
  if(index<questions.length-1){

    index++;
    optionClick();
    console.log(questions[index]['answer']);
    // console.log(index);
  }
  else{
    questionContainer.style.display="none";
    results.style.display="block";
    displayMarks.innerHTML = timer+1;
    clearInterval(start);
  }
 
  
});


submitBtn.addEventListener("click",function(){
 
  const score = {
    score : timer,
    userName : userName.value
  }
  highScores.push(score);
  highScores.sort((a,b)=>{
    return b.score - a.score;
  })
  // highScores.splice(5);
  window.localStorage.setItem("highScores",JSON.stringify(highScores));
  console.log(highScores);
  startContainer.style.display="block";
  results.style.display="none";
  timer = 50;
  displayTime.innerHTML = timer;
  index = 0;

  //THIS CODE IS NOT WORKING
  highscoreList.innerHTML = highScores.map(score=>{
    return `<li class="high-score">${score.userName} - ${score.score}</li>`;
    
})
.join("");



  
})

function onAnsweredOption(option){
  var handler = function(event) {
    
    if(option.innerHTML===questions[index]['answer']){
      // marks += 1;
      option.style.background="green";
      option.style.color="#fff";
      showStatus.innerHTML = "Correct!";
    }
    else{
      timer -= 10;
      option.style.background="red";
      showStatus.innerHTML = "Incorrect!"
    }
  };
  // console.log("handler",handler);
  return handler;
}

// console.log(users);

// console.log(questions.length)

//have to add event listener for each and every options




// console.log(highScores);

// console.log(users);
console.log(localStorage);
console.log(highscoreList.innerHTML);
// console.log(score.userName);