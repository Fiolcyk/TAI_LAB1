let preQuestions =
    [
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The song &quot;Twin Size Mattress&quot; was written by which band?",
            "correct_answer": "The Front Bottoms",
            "answers": ["The Front Bottoms", "Twenty One Pilots", "The Wonder Years", "The Smith Street Band"]
        },
        {
            "category": "Vehicles",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which Japanese company is the world&#039;s largest manufacturer of motorcycles?",
            "correct_answer": "Honda",
            "answers": ["Yamaha", "Suzuki", "Kawasaki", "Honda"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
            "correct_answer": "Niagara Mohawk Building",
            "answers": ["Niagara Mohawk Building", "Taipei 101", "One Detroit Center", "Westendstrasse 1"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In most FPS video games such as Counter-Strike, shooting which part of the body does the highest damage?",
            "correct_answer": "Head",
            "answers": ["Arm", "Leg", "Chest", "Head"]
        },
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The term &quot;Spam&quot; came before the food product &quot;Spam&quot;.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In the show Stranger Things, what is Eleven&#039;s favorite breakfast food?",
            "correct_answer": "Eggo Waffles",
            "answers": ["Toast", "Captain Crunch", "Bacon and Eggs", "Eggo Waffles"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In the game Paper Mario for the Nintendo 64 the first partner you meet is a Goomba, what is its name?",
            "correct_answer": "Goombario",
            "answers": ["Goombella", "Goombarry", "Goomby", "Goombario"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "When was Google founded?",
            "correct_answer": "September 4, 1998",
            "answers": ["October 9, 1997", "December 12, 1989", "Feburary 7th, 2000", "September 4, 1998"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which is not a playable character in the 2005 video game Killer7?",
            "correct_answer": "Frank Smith",
            "answers": ["Frank Smith", "Mask de Smith", "Dan Smith", "Coyote Smith"]
        },
        {
            "category": "Geography",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The capital of the US State Ohio is the city of Chillicothe.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which company did Bethesda purchase the Fallout Series from?",
            "correct_answer": "Interplay Entertainment",
            "answers": ["Capcom", "Interplay Entertainment", "Blizzard Entertainment", "Nintendo"]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which iconic album cover features the pulsar waves of CP 1919 placed in the center of the cover?",
            "correct_answer": "Unknown Pleasures",
            "answers": ["The Dark Side of the Moon", "Unknown Pleasures", "London Calling", "The Velvet Underground &amp; Nico"]
        },
        {
            "category": "Politics",
            "type": "boolean",
            "difficulty": "medium",
            "question": "During the 2016 United States presidential election, the State of California possessed the most electoral votes, having 55.",
            "correct_answer": "True",
            "answers": ["False", "True"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who was the first prime minister of Canada?",
            "correct_answer": "John Macdonald",
            "answers": ["John Macdonald", "John Abbott", "Alexander Mackenzie", "Robert Borden"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The land mass of modern day Turkey is called what?",
            "correct_answer": "Anatolia",
            "answers": ["Anatolia", "Ismuth of Ottoma", "Ottoma", "Ismuth of Anatolia"]
        },
        {
            "category": "Sports",
            "type": "boolean",
            "difficulty": "easy",
            "question": "In association football, or soccer, a corner kick is when the game restarts after someone scores a goal.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who played the Cenobite called &quot;Pinhead&quot; in the original Hellraiser films?",
            "correct_answer": "Doug Bradley",
            "answers": ["Doug Bradley", "Doug Jones", "Doug Savant", "Doug Benson"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these countries is the smallest by population?",
            "correct_answer": "Norway",
            "answers": ["Slovakia", "Norway", "Finland", "Hong Kong"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which internet company began life as an online bookstore called &#039;Cadabra&#039;?",
            "correct_answer": "Amazon",
            "answers": [
                "eBay",
                "Overstock",
                "Shopify",
                "Amazon"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Generally, which component of a computer draws the most power?",
            "correct_answer": "Video Card",
            "answers": [
                "Hard Drive",
                "Processor",
                "Power Supply",
                "Video Card"
            ]
        }];

let next = document.querySelector('.next');
let previous = document.querySelector('.previous');
let tableAnswer = document.querySelectorAll('.th_questions')
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
let index = 0;
let questionNumber = 1;
let points = 0;
let flag = [];
let userScoreReset = document.querySelector(".userScoreReset");

// interval timer
interval = setInterval(updateInterval,1000);

// Action onClick buttons
restart.addEventListener('click',retakeQuiz);
next.addEventListener('click',nextClick);
previous.addEventListener('click',previousClick);
reset.addEventListener('click',resetStatistic);
question.innerHTML = preQuestions[index].question;
for(let i = 0; i < answers.length; i++){
    answers[i].innerHTML = preQuestions[index].answers[i];
    answers[i].addEventListener('click', doAction);
}

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
    
    flag[index] = "true";
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
};

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
function incIndex(){
    index++;
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
        if(flag[i]=="true"){
            counter ++;
        }
        if(counter == 4){
            results.style.display = "block";
            next.style.display = "none";
            previous.style.display = "none";
            saveAveragePoints();
            actualGamePoints.innerText = points;
        }
    }  
   
    
}

 function nextClick(){
    if(index < preQuestions.length -1 ){
        incIndex();
        restartColor();
        nextQuestion();
        enableAnswers();
        questionNumber++;
        NumberQuestion();
        checkFlag();     
    }
    endGame();
}

function previousClick(){
    if(index >0){
        index --;
        restartColor();
        nextQuestion();
        questionNumber--;
        NumberQuestion();
        checkFlag();
    }
    endGame();
}
function updateInterval(){
    
}

function saveAveragePoints(){

    if( localStorage.getItem("sumScore") === null && localStorage.getItem("timesPlayed") === null){
        localStorage.setItem("sumScore",points);
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

function resetStatistic(){
    localStorage.removeItem("sumScore");
    localStorage.removeItem("timesPlayed");
    localStorage.setItem("sumScore",0);
    localStorage.setItem("timesPlayed",0);
    userScoreReset.innerHTML = '<span class="userScoreResetText">Twoje statystyki zostały zresetowane</span>';
    
}