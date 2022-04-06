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


console.log("does this work? mainscript")

const startButton = document.getElementById('start-game')
const questionContainerElement = document.getElementById('question')
const questionElement = document.getElementById('question h2')
const answerButtonsElement = document.getElementById('answer-btn')

let shuffled, currentQuestions
startButton.addEventListener('click', startGame);




function startGame(){
    console.log('started')
    shuffled = questions.sort(() => Math.random() - .5)
    currentQuestions = 0
    loadNextQuestion()
}

function loadNextQuestion() {
    showQuestion(shuffled[currentQuestions])
}

function showQuestion(questions) {
questionElement.textContent = questions.question
}

function correctAnswer() {
    
}

function wrongAnswer() { 

}

function endGame() {
    
}


console.log ()