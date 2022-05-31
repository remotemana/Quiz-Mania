//start game fucntion
//start a timer
//present a question
//present 4 different answers

//listen answer
//when correct presesnt next question and answers
//if incorrect reduce time from clock

//game end 
//when all questions are answered
//or timer reaches 0

//when game is over save initials and score



const startButton = document.getElementById('start-game');
const questionContainerElement = document.getElementById('question');
const startText = document.getElementById('startText')
const questionElement = document.getElementById('insertQuestions');
const answerButtonsElement1 = document.getElementById('answer-btn1');
const answerButtonsElement2 = document.getElementById('answer-btn2');
const answerButtonsElement3 = document.getElementById('answer-btn3');
const answerButtonsElement4 = document.getElementById('answer-btn4');
const timerElement = document.getElementById('timerElement');
const nameBtn = document.getElementById('nameBtn')
var scores = []
var timeLeft = 100;
var storedScores = JSON.parse(localStorage.getItem("score"));
console.log(storedScores)

let shuffled

startButton.addEventListener('click', startGame);


let currentQuestionCount = 0;
let currentQuestions = 0;
let currentQuestion

hideThings()

function hideThings() {
    document.getElementById("nameBtn").style.display = "none";
    insertQuestions.style.display = "none";
    answerButtonsElement1.style.display = "none";
    answerButtonsElement2.style.display = "none";
    answerButtonsElement3.style.display = "none";
    answerButtonsElement4.style.display = "none";
    timerElement.style.display = "none";

}

function startGame() {
    startTimer();
    console.log('started')
    shuffled = questions.sort(() => Math.floor(Math.random() - .5));
    loadNextQuestion();
}

function loadNextQuestion() {
    endCount = currentQuestionCount++
    currentQuestion = shuffled[currentQuestions]
    showQuestion(currentQuestion)
    showAnswer(currentQuestion)
    console.log(endCount)
    if (endCount === questions.length - 1) {
        endGame()
    }

}

function showQuestion(questions) {
    startText.textContent = questions.question
    answerButtonsElement1.style.display = "block";
    answerButtonsElement2.style.display = "block";
    answerButtonsElement3.style.display = "block";
    answerButtonsElement4.style.display = "block";
    timerElement.style.display = "block";
}

function startTimer() {
    timerElement.textContent = "Time Remaining: " + timeLeft;
    timer = setInterval(function () {
        console.log(timeLeft);
        timeLeft--;
        timerElement.textContent = "Time Remaining: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            timerElement.textContent = "Time Remaining: ";
            endGame()
        }
    }, 1000);
}

function showAnswer(questions) {
    answerButtonsElement1.textContent = questions.answers[0].text
    answerButtonsElement2.textContent = questions.answers[1].text
    answerButtonsElement3.textContent = questions.answers[2].text
    answerButtonsElement4.textContent = questions.answers[3].text
}

answerButtonsElement1.addEventListener("click", checkAnswer)
answerButtonsElement2.addEventListener("click", checkAnswer)
answerButtonsElement3.addEventListener("click", checkAnswer)
answerButtonsElement4.addEventListener("click", checkAnswer)

function checkAnswer(event) {

    if (event.target.textContent != currentQuestion.correctAnswer) {
        console.log("incorrect")
        timeLeft = timeLeft - 10;

    } else if (event.target.textContent === currentQuestion.correctAnswer) {
        console.log("correct")
        currentQuestions++
        loadNextQuestion()
    }

}

function hideEnding() {
    answerButtonsElement1.style.display = "none";
    answerButtonsElement2.style.display = "none";
    answerButtonsElement3.style.display = "none";
    answerButtonsElement4.style.display = "none";
    questionElement.style.display = "none";
    timerElement.style.display = "none";

    
    document.getElementById("nameBtn").style.display = "block";
    // document.getElementById("hiScr").style.display = "block";
    var pN = document.querySelector("#playerName");
    pN.setAttribute("type", "text");
}

function endGame() {
    hideEnding()
    

    clearInterval(timer);
    timerElement.textContent = "Time Remaining: "

    console.log("end game")
    currentScore = timeLeft;
    startText.textContent = "Your score is " + currentScore;
    alert("Game Over!")

    nameBtn.addEventListener("click", function (e) {
        e.preventDefault();
        var playerName = document.querySelector("#playerName").value;
        var currentScoreArr = [playerName, currentScore];

        if (storedScores === null) {
            scores.push(...currentScoreArr);
            localStorage.setItem("score", JSON.stringify(scores));
        } else {
            storedScores.push(...currentScoreArr)
            localStorage.setItem("score", JSON.stringify(storedScores))
        }

        window.location.replace("highscores.html")
    })
    
}

const questions = [{
        question: "Pizza is?",
        answers: [{
            text: "A fruit",
            correct: true
        }, {
            text: "A vegetable",
            correct: true
        }, {
            text: "A type of sandwhich",
            correct: false
        }, {
            text: "What's for dinner",
            correct: false
        }],
        correctAnswer: "A vegetable"
    },
    {
        question: "A 'Silkie is?",
        answers: [{
            text: "A type of scarf",
            correct: false
        }, {
            text: "A a type of car",
            correct: false
        }, {
            text: "A type of chicken",
            correct: true
        }, {
            text: "A type of fabric",
            correct: false
        }],
        correctAnswer: "A type of chicken"
    },
    {
        question: "Who famously said 'If you obey ALL the rules, you miss ALL the fun.'",
        answers: [{
            text: "Justice Ruth Bader Ginsburg",
            correct: false
        }, {
            text: "Minnie Mouse",
            correct: false
        }, {
            text: "Kathrine Hepburn",
            correct: true
        }, {
            text: "Judge Judy",
            correct: false
        }],
        correctAnswer: "Kathrine Hepburn"
    },
    {
        question: "What does the fox say?",
        answers: [{
            text: "Gering-ding-ding-ding-dingeringeding!",
            correct: false
        }, {
            text: "Joff-tchoff-tchoffo-tchoffo-tchoff!",
            correct: false
        }, {
            text: "Jacha-chacha-chacha-chow!",
            correct: false
        }, {
            text: "All of these",
            correct: true
        }],
        correctAnswer: "All of these"
    },
    {
        question: "What Color is the sky",
        answers: [{
            text: "Blue",
            correct: true
        }, {
            text: "Red",
            correct: false
        }, {
            text: "Green",
            correct: false
        }, {
            text: "Yellow",
            correct: false
        }],
        correctAnswer: "Blue"
    },
    {
        question: "How many legs does a cat have?",
        answers: [{
            text: "1",
            correct: false
        }, {
            text: "2",
            correct: false
        }, {
            text: "3",
            correct: false
        }, {
            text: "4",
            correct: true
        }],
        correctAnswer: "4"
    },
    {
        question: "What is the front a of a ship called?",
        answers: [{
            text: "Port",
            correct: false
        }, {
            text: "Starboard",
            correct: false
        }, {
            text: "Stern",
            correct: false
        }, {
            text: "Bow",
            correct: true
        }],
        correctAnswer: "Bow"
    },
    {
        question: "Fusili is what?",
        answers: [{
            text: "A Mechanical Fuze",
            correct: false
        }, {
            text: "A wind instrument",
            correct: false
        }, {
            text: "A little fuze",
            correct: false
        }, {
            text: "A type of pasta",
            correct: true
        }],
        correctAnswer: "A type of pasta"
    },
    {
        question: "Garlic is what type of plant?",
        answers: [{
            text: "Perennial",
            correct: true
        }, {
            text: "Annual",
            correct: false
        }, {
            text: "Seasonal",
            correct: false
        }, {
            text: "Judgemental",
            correct: false
        }],
        correctAnswer: "Perennial"
    },


]