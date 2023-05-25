var currentIndex = 0;
var lastIndex = 4;
var timer = null;
var timeLeft = null;
var score = 0;
var questionDiv = document.querySelector("#questionDiv");
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
      alert("correct")
      score++;
    } else {
      alert("wrong!!!!")
      timeLeft -= 5;
    }
    nextQuestion();
  }
  if (quiz[currentIndex] === quiz[lastIndex]) {
    endQuiz();
  }
});

function nextQuestion() {
  currentIndex++;
  displayQuestion(quiz[currentIndex]);
}

function endQuiz() {
  clearInterval((timeLeft = 0));

  const endNote = document.createElement("div");
  endNote.innerHTML = `
       <div>
            <h3>Ya Done</h3>
            <form>
              <input  type="text"  id="inputForm"/>
              <p>enter your name</p>
              <button id="submit-button">Submit Name</button>           
            </form>       
       </div>
    `;
  const endScreen = document.querySelector("#end-screen");
  endScreen.append(endNote);
}

//making a timer button to start off
document.addEventListener("DOMContentLoaded", () => {
  var timeLeftDisplay = document.querySelector("#time-left");
  var startBtn = document.querySelector("#start-button");
  timeLeft = 75;

  function countDown() {
    setInterval(function () {
      if (timeLeft <= 0) {
        endQuiz;
      }
      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft -= 1;
    }, 1000);
  }
  startBtn.addEventListener("click", countDown);
});

function saveShit() {
  const localShit = localStorage.getItem(JSON.parse("localShit")) || [];
  var scores = {
    Doodsname: Doodsname,
    score: score,
  };
  localShit.push(scores);
  localStorage.setItem("localShit", JSON.stringify(localShit));
}
const submitName = document.querySelector("#submit-button");
submitName.addEventListener("click", function (event) {
    event.preventDefault()
    console.log("click!")
  saveShit();
});
