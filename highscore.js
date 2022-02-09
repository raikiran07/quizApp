'use-strict';
const highscoreList = document.getElementById("highscorelist");
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const startBtn = document.querySelector(".home-btn");
const clearBtn = document.querySelector(".clear-btn");

highscoreList.innerHTML = highScores.map(score=>{
    return `<li class="high-score">${score.userName} - ${score.score}</li>`;
    
})
.join("");



function resetHighScore(){
    localStorage.clear();
    highscoreList.innerHTML = "";
}


clearBtn.addEventListener("click",resetHighScore);
startBtn.addEventListener("click",function(){
    // localStorage.setItem("highScores",JSON.stringfy(highScores));
    window.location.assign('/');
})

console.log(highscoreList);
