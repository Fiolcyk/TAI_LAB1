let preQuestions;
let tableAnswer;
function start(){
    fetch('https://quiztai.herokuapp.com/api/quiz')
        .then(resp => resp.json())
        .then(resp => {
            preQuestions = resp;   
            for(let i =0 ;i < preQuestions.length; i++ ){
                tableDiv.innerHTML += '<div class="th-questions"><span>'+(i+1)+'</span></div>'
            }
            question.innerHTML = preQuestions[index].question;
            for(let i = 0; i < (preQuestions[index].answers).length; i++){
                answers[i].innerHTML = preQuestions[index].answers[i];
                answers[i].addEventListener('click', doAction);
            }
        tableAnswer = document.querySelectorAll('.th-questions');
    });
}

let tableDiv = document.querySelector('.answers-table');
let next = document.querySelector('.next');
let previous = document.querySelector('.previous');
let question = document.querySelector('.question');
let answers = document.querySelectorAll('.list-group-item');
let pointsElem = document.querySelector('.score');
let questionElem = document.querySelector('.questionNumber');
let results = document.querySelector('.results');
let restart =  document.querySelector('.restart');
let endPoints = document.querySelector('.userScorePoint');
let reset = document.querySelector('.reset');
let actualGamePoints = document.querySelector('.actualGamePoints');
let userTimesPlayed = document.querySelector('.userTimesPlayed');
let progress = document.querySelector('.progress');
let userScoreReset = document.querySelector(".userScoreReset");
let timerToEnd = document.querySelector('.timerToEnd');

let index = 0;
let questionNumber = 1;
let points = 0;
let flag = [];
let flagChosenAnswer = [];
let flagCorrectAnswer = [];
let flagTimer = [];

let actualTimer = 0;

let current_progress = [];
for(let i = 0; i < 20;i++){
    current_progress[i] = 0;
}
let startTimer = [];
for(let i = 0; i < 20;i++){
    startTimer[i] = 100;
}
start();
// interval timer
startInterval();

// Action onClick buttons
restart.addEventListener('click',retakeQuiz);
next.addEventListener('click',nextClick);
previous.addEventListener('click',previousClick);
reset.addEventListener('click',resetStatistic);

function doAction(event){
    if(event.target.innerHTML === preQuestions[index].correct_answer){
        points++;
        pointsElem.innerText = points;
        markCorrect(event.target);
        tableAnswer[index].style.backgroundColor = "green";
    }else{       
        markInCorrect(event.target); 
        tableAnswer[index].style.backgroundColor = "red";
        for(let i=0;i<answers.length;i++){
            if(answers[i].innerHTML == preQuestions[index].correct_answer){
                answers[i].style.backgroundColor = "green";
            }
        }
    }

    disableAnswers();
    window.clearInterval(interval);
    flag[index] = "true";
    flagChosenAnswer[index] = event.path[0].value;
    flagCorrectAnswer[index] = event.target.innerHTML;
}

function nextQuestion(){
    question.innerHTML = preQuestions[index].question;
    for(let i = 0; i < answers.length; i++){
        if (preQuestions[index].answers[i] == undefined){
            answers[i].style.display = "none";
        }else{
            answers[i].style.display = "block";
            answers[i].innerHTML = preQuestions[index].answers[i];
            answers[i].addEventListener('click', doAction);
        }    
    }
}

function markChosenAnswers(){
    if(flagChosenAnswer[index] != null)
        if(flagCorrectAnswer[index] === preQuestions[index].correct_answer){
            answers[flagChosenAnswer[index]].style.backgroundColor = "green";
        }else{
            answers[flagChosenAnswer[index]].style.backgroundColor = "red";
            for(let i=0;i<answers.length;i++){
                if(answers[i].textContent === preQuestions[index].correct_answer){
                    answers[i].style.backgroundColor = "green";
                }
            } 
        }
}

function markCorrect(event){
    event.style.backgroundColor = "green";
}

function markInCorrect(event){
    event.style.backgroundColor = "red";
}

function disableAnswers(){
    for(let i = 0; i < answers.length; i++){    
        answers[i].style.pointerEvents = "none";
    }
}

function enableAnswers(){
    for(let i = 0; i < answers.length; i++){    
        answers[i].style.pointerEvents = "auto";
    }
}

function restartColor(){
    for(let i = 0; i < answers.length; i++){
        answers[i].style.backgroundColor = "white";   
    }
}

function NumberQuestion(){
    questionElem.innerText = questionNumber;
}

function checkFlag(){
    for(let i = 0; i < (preQuestions[index].answers).length;i++){
        if(flag[index] === "true"){
            answers[i].style.pointerEvents = "none";
        }else{
            answers[i].style.pointerEvents = "auto";
        }
    }
}

function retakeQuiz(){
    index = 0;
    flag = [];
    questionNumber = 1;
    NumberQuestion();
    points = 0;
    nextQuestion();
    restartColor();
    enableAnswers();
    for(let i=0;i<preQuestions.length;i++){
        tableAnswer[i].style.backgroundColor = "white";
    }
    next.style.display = "inline";
    previous.style.display = "inline";
    results.style.display = "none";
}

function endGame(){
    let counter = 0;
    for(let i=0;i<flag.length;i++){
        if(flag[i]==="true"){
            counter ++;
        }
        if(counter == preQuestions.length){
            results.style.display = "block";
            
            saveAveragePoints();
            actualGamePoints.innerText = points;
        }
    }  
}
// every next button action
function nextClick(){
    if(index < preQuestions.length -1 ){
        index++;
        questionNumber++;
        restartColor();
        nextQuestion();
        enableAnswers();
        NumberQuestion();
        checkFlag();  
        restartInterval();
        startInterval();
        markChosenAnswers();
    }
    endGame();
}

// every previous button action
function previousClick(){
    if(index >0){
        index --;
        restartColor();
        nextQuestion();
        questionNumber--;
        NumberQuestion();
        checkFlag();
        restartInterval();
        startInterval();
        markChosenAnswers();
    }
    endGame();
}
// First operation in timer
function startInterval(){
    if(flag[index] !== "true"){
    progress.style.width = current_progress[index]+"%";
    interval = setInterval(updateInterval, 20);
    }else{
        updateInterval();
    }
}

// Interval timer
function updateInterval(){
    progress.style.width = current_progress[index] +"%";
    current_progress[index] += 0.1;
    if(current_progress[index] >= 100){
        window.clearInterval(interval);
        disableAnswers();
    }
    // change color
    if (current_progress[index] > 75){
        progress.classList.add("bg-danger");
        progress.classList.remove("bg-warning");
        progress.classList.remove("bg-success");
    }else if(current_progress[index] > 50){
        progress.classList.add("bg-warning");
        progress.classList.remove("bg-danger");
        progress.classList.remove("bg-success");
    }else if(current_progress[index] > 0){
        progress.classList.add("bg-success");
        progress.classList.remove("bg-warning");
        progress.classList.remove("bg-danger");
    }

    // second TIMER
    startTimer[index]-= 0.1;
    actualTimer = startTimer[index]/5;
    if(actualTimer>0){
    timerToEnd.innerText = Math.round(actualTimer * 1) / 1;
    }else{
        timerToEnd.innerText = " Minął czas! Pytanie niezaliczone!";
        tableAnswer[index].style.backgroundColor = "yellow";
        flag[index] = "true";
    }
}

// Restart timer
function restartInterval(){
    actualTimer = 0;
    window.clearInterval(interval);
    progress.style.width = current_progress[index]+"%";

}

// Save player points in LocalStorage
function saveAveragePoints(){
    if( localStorage.getItem("sumScore") === null && localStorage.getItem("timesPlayed") === null){
        localStorage.setItem("sumScore", points);
        localStorage.setItem("timesPlayed",1);
    }else{
        let sum = localStorage.getItem("sumScore");
        sum = +sum;
        sum += points;
        console.log("suma"+sum);
        let timesPlayed = localStorage.getItem("timesPlayed");
        timesPlayed = +timesPlayed;
        timesPlayed++;
        console.log("timesPlayed"+timesPlayed);
        let average = sum / timesPlayed;
        endPoints.innerText = average;
        userTimesPlayed.innerText = timesPlayed;
        localStorage.setItem("sumScore", sum);
        localStorage.setItem("timesPlayed", timesPlayed);
    }
}

// Reset all statistic in LocalStorage
function resetStatistic(){
    localStorage.removeItem("sumScore");
    localStorage.removeItem("timesPlayed");
    localStorage.setItem("sumScore",0);
    localStorage.setItem("timesPlayed",0);
    userScoreReset.innerHTML = '<span class="userScoreResetText">Twoje statystyki zostały zresetowane</span>';
}