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

const timeLeft = 200;

let shuffled, currentQuestions

startButton.addEventListener('click', startGame);




function startGame(){
    console.log('started')
    shuffled = questions.sort(() => Math.floor(Math.random() -.5));
    currentQuestions = 0;
    startText.textContent = "Next Question";
    loadNextQuestion();
}

function loadNextQuestion() {
    showQuestion(shuffled[currentQuestions])
    showAnswer(shuffled[currentQuestions])
}
 
function showQuestion(questions) {
questionElement.textContent = questions.question
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

function checkAnswer() { 

}

function endGame() {
    
}

const questions = [
    {
        question:"Pizza is?",
        answers:[{text:"A fruit", correct: true}, {text:"A vegetable", correct: true}, {text:"A type of sandwhich", correct: false}, {text: "What's for dinner", correct: false}],
        correctAnswer: "A vegetable"
    },
    {
        question:"A 'Silkie is?",
        answers:[{text:"A type of scarf", correct: false}, {text:"A a type of car", correct: false}, {text:"A type of chicken", correct: true},{text:"A type of fabric", correct: false}],
        correctAnswer: "A type of chicken"
    },
    {
        question:"Who famously said 'If you obey ALL the rules, you miss ALL the fun.'",
        answers:[{text:"Justice Ruth Bader Ginsburg", correct: false}, {text:"Minnie Mouse", correct: false}, {text:"Kathrine Hepburn", correct: true}, {text:"Judge Judy", correct: false}],
        correctAnswer: "Kathrine Hepburn"
    },
    {
        question:"What does the fox say?",
        answers:[{text:"Gering-ding-ding-ding-dingeringeding!", correct: false}, {text:"Joff-tchoff-tchoffo-tchoffo-tchoff!", correct: false}, {text:"Jacha-chacha-chacha-chow!", correct: false}, {text: "All of these", correct: true}],
        correctAnswer: "All of the these"
    },
    {
        question:"What Color is the sky",
        answers:[{text:"Blue", correct: true}, {text:"Red", correct: false}, {text: "Green", correct: false}, {text:"Yellow", correct: false}],
        correctAnswer: "Blue"
    },
    {
        question:"how many legs does a cat have?",
        answers:[{text:"1", correct: false}, {text:"2", correct: false}, {text: "3", correct: false}, {text: "4", correct: true}],
        correctAnswer: "4"
    },
    {
        question:"what is the front a of a ship called?",
        answers:[{text:"Port", correct: false}, {text:"Starboard", correct: false}, {text:"Stern", correct: false}, {text:"Bow", correct: true}],
        correctAnswer: "Bow"
    },
    {
        question:"Fusili is what?",
        answers:[{text:"A Mechanical Fuze",correct: false}, {text:"A wind instrument", correct:false}, {text: "A little fuze", correct: false}, {text:"A type of pasta", correct: true}],
        correctAnswer: "A type of pasta"
    },
    {
        question:"Garlic is what type of plant?",
        answers:[{text:"Perennial", correct: true}, {text:"Annual", correct:false}, {text:"Seasonal", correct:false},{text: "Judgemental",correct:false}],
        correctAnswer: "Perennial"
    },
    
    
    ]
