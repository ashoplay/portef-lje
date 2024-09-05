const quizData = {
  1: {
    "question": "In 'Jujutsu Kaisen,' what is the name of the cursed object that protagonist Yuji Itadori consumes?",
    "alternatives": ["Sakuna's Finger", "Cursed Scroll", "Demon Blade", "Haunted Mask"],
    "answer": "Sakuna's Finger"
},
2: {
    "question": "Who is the strongest sorcerer and teacher at Tokyo Metropolitan Jujutsu Technical High School in 'Jujutsu Kaisen'?",
    "alternatives": ["Satoru Gojo", "Megumi Fushiguro", "Nobara Kugisaki", "Maki Zen'in"],
    "answer": "Satoru Gojo"
},
3: {
    "question": "In 'Naruto,' what is the name of the powerful ninja technique passed down through the Uchiha clan?",
    "alternatives": ["Rasengan", "Chidori", "Amaterasu", "Susanoo"],
    "answer": "Amaterasu"
},
4: {
    "question": "Who is Naruto's first teacher and mentor in the art of ninjutsu in 'Naruto'?",
    "alternatives": ["Kakashi Hatake", "Jiraiya", "Iruka Umino", "Orochimaru"],
    "answer": "Iruka Umino"
},
5: {
    "question": "In 'Bleach,' what is the name of Ichigo Kurosaki's zanpakuto spirit?",
    "alternatives": ["Sode no Shirayuki", "Zabimaru", "Senbonzakura", "Zangetsu"],
    "answer": "Zangetsu"
},
6: {
    "question": "Which organization is responsible for maintaining the flow of spirits between the human world and the afterlife in 'Bleach'?",
    "alternatives": ["Gotei 13", "Espada", "Vandenreich", "Quincy"],
    "answer": "Gotei 13"
},
7: {
    "question": "In 'Solo Leveling,' what is the name of the protagonist, Sung Jin-Woo's, initial rank as a hunter?",
    "alternatives": ["D-rank", "C-rank", "E-rank", "S-rank"],
    "answer": "E-rank"
},
8: {
    "question": "What is the unique ability of Sung Jin-Woo in 'Solo Leveling' that allows him to reawaken after death?",
    "alternatives": ["Healing Factor", "Shadow Extraction", "Immortality", "Resurrection"],
    "answer": "Shadow Extraction"
},
9: {
  "question": "What is the name of the protagonist in 'One Piece' who is on a quest to find the legendary treasure known as the One Piece?",
  "alternatives": ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Portgas D. Ace"],
  "answer": "Monkey D. Luffy"
},
10: {
  "question": "Which of the following is not one of the three main types of Devil Fruits in 'One Piece'?",
  "alternatives": ["Paramecia", "Zoan", "Logia", "Haki"],
  "answer": "Haki"
},
};

let currentQuestion = 1;
let score = 0;
let highscore = localStorage.getItem('highscore')
// let highscore = 0;
// if(localStorage.getItem("highscore") !== null){
//   highscore = localStorage.getItem("highscore")
// }


const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const highscoredisplay = document.getElementById("highscoredisplay");


function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];

  questionElement.innerHTML = currentQuizData.question;

  optionsContainer.innerHTML = "";
  currentQuizData.alternatives.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.innerText = option;
    optionElement.setAttribute("onclick", `checkAnswer(${index})`);
    optionsContainer.appendChild(optionElement);
  });

  document.getElementById("question").style.opacity = 1;
}

function checkAnswer(selectedOption) {
  const currentQuizData = quizData[currentQuestion];
  const selectedAnswer = currentQuizData.alternatives[selectedOption];

  if (selectedAnswer === currentQuizData.answer) {
    score += 10;
  }

  optionsContainer.children[selectedOption].style.backgroundColor =
    selectedAnswer === currentQuizData.answer ? "#4caf50" : "#ff4d4d";
  optionsContainer.children[selectedOption].style.color = "#fff";

  disableOptions();
  nextBtn.style.display = "block";
}

function disableOptions() {
  for (const option of optionsContainer.children) {
    option.classList.add("disabled");
  }
}

function enableOptions() {
  for (const option of optionsContainer.children) {
    option.classList.remove("disabled");
    option.style.backgroundColor = "#fff";
    option.style.color = "#000";
  }
}

function nextQuestion() {
  if (currentQuestion < Object.keys(quizData).length) {
    currentQuestion++;
    enableOptions();
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
}

function showResult() {
  const percentage = (score / (Object.keys(quizData).length * 10)) * 100;
  const resultText = `You scored ${score} out of ${
    Object.keys(quizData).length * 10
  }. (${percentage}%)`;


  if (score > highscore){
    localStorage.setItem("highscore", score)
  }
  if(highscore !== null ) {
    let highscoretext = `your previus best score is ${highscore}`
    highscoredisplay.innerHTML = highscoretext;

  }
  resultContainer.innerHTML = resultText;
  highscoredisplay.style.display = "block";
  resultContainer.style.display = "block";
  nextBtn.innerHTML = "Finish";


  nextBtn.setAttribute("onclick", "finishQuiz()");
}

function finishQuiz() {
  alert("Quiz completed!");
}


loadQuestion();
