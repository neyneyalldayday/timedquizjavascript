var currentIndex = 0;
var lastIndex = 4;
var timer = null;
var timeLeft = null;
var score = 0;
var questionDiv = document.querySelector("#questionDiv");
var questionContainer = document.querySelector(".questions");
var dummy = document.querySelector(".dummy");
var inputForm = document.querySelector("#inputForm");
var timeLeftDisplay = document.querySelector("#time-left");
var startBtn = document.querySelector("#start-button");
var endForm = document.querySelector(".end-form")
timeLeft = 75;
let flash;
let flashend;
var quiz = [
  {
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
  },
  
];


function countDown() {
    startBtn.classList.add("hide");
    timer = setInterval(function () {
      if (timeLeft <= 0) {
        endQuiz();
      }
      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft -= 1;
    }, 1000);
  }

function displayQuestion(question) {
  var HTML = `            
                <P>${question.questionText}</P>
                <button class ="answerButton">${question.answers[0]}</button>
                <button class ="answerButton">${question.answers[1]}</button>
                <button class ="answerButton">${question.answers[2]}</button>
                <button class ="answerButton">${question.answers[3]}</button>
            `;

  questionDiv.innerHTML = HTML;
}

displayQuestion(quiz[currentIndex]);

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("answerButton")) {
    quiz[currentIndex].userAnswer = event.target.textContent;
    if (quiz[currentIndex].userAnswer == quiz[currentIndex].correctAnswer) {
        clearTimeout(flash);       
        dummy.textContent = "Correct Foo!!"; 
        dummy.classList.remove("hide")       
        flash = setTimeout(function () {
        dummy.classList.add("hide");
      }, 1000);     
      score++;
    } else {
        clearTimeout(flashDummy);        
      dummy.textContent = "Wrong Foo!!!!";
        dummy.classList.remove("hide")
      flash = setTimeout(function () {
        dummy.classList.add("hide");
      }, 1000);
      timeLeft -= 5;
    }
    nextQuestion();
  }

});

function nextQuestion() {
  currentIndex++;
  if (currentIndex  === quiz.length) {
    clearInterval(timer)
    endQuiz();
  } else {
    displayQuestion(quiz[currentIndex])
  }
}

function endQuiz() {
  const endScreen = document.querySelector(".end-screen");
  endScreen.classList.remove("hide");
  
}

function saveShit() {
  const localShit = JSON.parse(localStorage.getItem("localShit")) || [];
  var doodsName = inputForm.value.trim();
  var scores = {
    doodsName: doodsName,
    score: score,
  };
  localShit.push(scores);
  localStorage.setItem("localShit", JSON.stringify(localShit));
 inputForm.value = ""
 var message = document.createElement("p")
 message.textContent = "name has been saved"
 endForm.appendChild(message)
 let flashend = setTimeout(function(){
    message.classList.add("hide")
 }, 1000)
 clearTimeout(flashend)
}


  startBtn.addEventListener("click", countDown);

const submitName = document.querySelector("#submit-button");
submitName.addEventListener("click", function (event) {
  event.preventDefault();
  saveShit();
});
