const questions = [
{
    question: "Why we use <br> Element",
    answers: [
            { text: "To make text bold", correct: false },
             { text: "To make text Italic", correct: false },
              { text: "To add breakline", correct: true },
            { text: "To make horizontal line", correct: false },
        ]
    },
    {
        question: "What does console.log() do in JavaScript",
        answers: [
            { text: "To make text bold", correct: false },
             { text: "To make text Italic", correct: false },
              { text: "To add breakline", correct: false },
            { text: "It prints output to the console", correct: true },
        ]
    },
    {
        question: "What is the purpose of the typeof operator",
         answers: [
            { text: "It returns the data type of a variable", correct: true },
             { text: "To make text Italic", correct: false },
            { text: "To add breakline", correct: false },
         { text: "It prints output to the console", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");

  let currentQuestionIndex = 0;
 let score = 0;

function startQuiz() {
currentQuestionIndex = 0;
 score = 0;
 
    nextButton.style.display = "none";
showQuestion();
}


function showQuestion() {
const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    answerButton.innerHTML = "";

   
    currentQuestion.answers.forEach(answer => {
           const button = document.createElement("button");
         button.innerHTML = answer.text;
        button.classList.add("btn");
     button.addEventListener("click", () => selectAnswer(answer));
        answerButton.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
nextButton.style.display = "block";
}

function nextQuestion() {
currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        questionElement.innerHTML = `Quiz completed! Your score is ${score}/${questions.length}.`;
        answerButton.innerHTML = "";
        nextButton.style.display = "none";
    }
}

nextButton.addEventListener("click", nextQuestion);

startQuiz();
