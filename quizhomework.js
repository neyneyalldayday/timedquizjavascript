var currentIndex = 0;
var lastIndex = 4;
var timer = null
var timeLeft = null
var quiz = [{

        answers: ["spanish", "dynamic", "russian", "chinese"],
        questionText: "what type of language is java script?",
        correctAnswer: "dynamic",
        userAnswer: null,
    },
    {

        answers: ["ritual", "turn a nob", "()", "{}"],
        questionText: "how do you invoke a function?",
        correctAnswer: "()",
        userAnswer: null,
    },
    {

        answers: ["alien gun", "type of fish", "method", "list of items"],
        questionText: "what is an array?",
        correctAnswer: "list of items",
        userAnswer: null,
    },
    {

        answers: ["//", "comment", "()", "++"],
        questionText: "how do you make comments in javascript?",
        correctAnswer: "//",
        userAnswer: null,
    },
    {

        answers: ["equals", "=", "%%", "==="],
        questionText: "how do you state that something equals something in j.s.?",
        correctAnswer: "===",
        userAnswer: null,
    }

]
displayQuestion(quiz[currentIndex])

function displayQuestion(question) {
    console.log(question)
    console.log(question.questionText)
    var HTML = `            <P>
${question.questionText}

</P>
<button class ="answerButton">${question.answers[0]}</button>
<button class ="answerButton">${question.answers[1]}</button>
<button class ="answerButton">${question.answers[2]}</button>
<button class ="answerButton">${question.answers[3]}</button>`
    questionDiv.innerHTML = HTML
    console.log(HTML)
}
document.addEventListener("click", function (event) {
    console.log(event.target)
    if (event.target.classList.contains("answerButton")) {
        console.log(event.target.textContent)
        quiz[currentIndex].userAnswer = event.target.textContent
        if (quiz[currentIndex].userAnswer == quiz[currentIndex].correctAnswer) {
            console.log("correct")
        }else{
            console.log("wrong")
            timeLeft -=5 
        }

        nextQuestion()
    }

})

function nextQuestion() {
    currentIndex++
    displayQuestion(quiz[currentIndex])

}
function endQuiz() {
    lastIndex
    displayQuestion(quiz[lastIndex])

}






//sart button causes timer to begen, prompts questions

//create an elemnt for the question to appear in. we need to draw it to the page
//the element will hold the questions and answer buttons
//we will generate questions from the quiz array
// when user clicks either a new question is presented or if wrong lose 5 seconds
//when quiz is done we are going to show another screen
// when the time runs out the game is done
// store the name and score in local storage
// make a restart quiz button

function startTimer(){
    timeLeft = 75
    timer =  setInterval(function () {
        if (timeLeft <= 0) {
        stopTimer()   
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -= 1
    }, 1000)
}
function stopTimer(){
    endQuiz()
    clearInterval(timer);
}



//making a timer button to start off
document.addEventListener("DOMContentLoaded", () => {
    var timeLeftDisplay = document.querySelector("#time-left");
    var startBtn = document.querySelector("#start-button");
    timeLeft = 75



    function countDown() {
        setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(timeLeft = 0);
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -= 1
        }, 1000)

    }
    startBtn.addEventListener("click", countDown);
});

// i want this click to prompt the first question

//i need to figure out how to make time go away for a wrong answer

//when a question is answered correctly. a new question will appear.

//when the time runs out i want to save the initials and high score.


// var testObject = { 'one': 1, 'two': 2, 'three': 3 };
// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));


var scores =[{
    name:"rene",
    score: 10
}]
localStorage.setItem('scoreboard', JSON.stringify(scores));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('scoreboard');

console.log('retrievedObject: ', JSON.parse(retrievedObject));