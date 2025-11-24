// Elementos
const welcomeScreen = document.getElementById("welcome-screen");
const levelScreen = document.getElementById("level-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startGameBtn = document.getElementById("startGameBtn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const explanationEl = document.getElementById("explanation");
const nextBtn = document.getElementById("nextBtn");
const questionImg = document.getElementById("question-img");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restartBtn");

let currentQuestion = 0;
let score = 0;
let selectedLevel = "easy";

// --- Pantalla de bienvenida ---
startGameBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  levelScreen.style.display = "block";
});

// --- Datos del quiz ---
const quizData = {
  easy: [
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Help users recover from errors", "Aesthetic and minimalist design", "User control and freedom", "Error prevention"],
      correct: 2,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/8A%20-%20Aesthetic%20and%20Minimalist%20Design1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/8A%20-%20Aesthetic%20and%20Minimalist%20Design2.jpg",
      explanation: "Interfaces should avoid unnecessary information or clutter, focusing on essential content. If the picture shows a clean layout with minimal buttons or content, this heuristic is being followed."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Error prevention", "Flexibility and efficiency of use", "Help and documentation", "Match between system and the real world"],
      correct: 4,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/2A%20-%20Match%20Between%20the%20System%20and%20the%20Real%20World1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/2A%20-%20Match%20Between%20the%20System%20and%20the%20Real%20World2.jpg",
      explanation: "The system should use the user’s language, including words, concepts, and icons that are familiar, following real-world conventions. If the image shows real-world icons like a trash bin, folder, calendar, or familiar symbols, this heuristic is the one being illustrated."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Error prevention", "Aesthetic and minimalist design", "Match between system and the real world", "Help and documentation"],
      correct: 1,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/5A%20-%20Error%20Prevention1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/5A%20-%20Error%20Prevention2.jpg",
      explanation: "It’s better to prevent errors than to display error messages; design should help users avoid mistakes. If the image shows confirmation pop-ups, auto-validation fields, or disabled options to prevent mistakes, this is the heuristic at work."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Aesthetic and minimalist design", "Match between system and the real world", "Help users recognize, diagnose, and recover from errors", "Flexibility and efficiency of use"],
      correct: 3,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/9A%20-%20Help%20Users%20Recognize%2C%20Diagnose%2C%20and%20Recover%20from%20Errors1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/9A%20-%20Help%20Users%20Recognize%2C%20Diagnose%2C%20and%20Recover%20from%20Errors2.jpg",
      explanation: "When errors occur, users should be able to understand, identify, and fix them easily. If the picture shows clear error messages, suggestions for fixing mistakes, or highlights the problem location, this heuristic is demonstrated."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["User control and freedom", "Aesthetic and minimalist design", "Match between system and the real world", "Visibility of system status"],
      correct: 1,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/3A%20-%20User%20Control%20and%20Freedom1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/3A%20-%20User%20Control%20and%20Freedom2.jpg",
      explanation: "Users need to have control over their actions and the ability to undo or redo decisions. This applies when the picture shows undo buttons, back navigation, cancel options, or ways to exit a process safely."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Match between system and the real world", "Aesthetic and minimalist design", "Help and documentation", "Visibility of system status"],
      correct: 4,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/1A%20-%20Visibility%20of%20status1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/1A%20-%20Visibility%20of%20status2.jpg",
      explanation: "The system should always keep users informed about what is happening through timely and appropriate feedback. If the picture shows a loading bar, a notification, or an icon changing when something happens, this heuristic applies because it communicates the system’s status."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Help and documentation", "Recognition rather than recall", "Error prevention", "Flexibility and efficiency of use"],
      correct: 2,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/6A%20-%20Recognition%20Rather%20than%20Recall1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/6A%20-%20Recognition%20Rather%20than%20Recall2.jpg",
      explanation: "Minimize the user’s memory load by making options visible rather than requiring them to remember information from elsewhere. If the image shows drop-down lists, recently used items, or auto-suggestions, this heuristic applies because it helps users recognize instead of recall."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Visibility of system status", "User control and freedom", "Consistency and standards", "Help and documentation"],
      correct: 3,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/4A%20-%20Consistency%20and%20Standards1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/4A%20-%20Consistency%20and%20Standards2.jpg",
      explanation: "Design should be consistent, following conventions and standards so users don’t have to learn new behaviors unnecessarily. If buttons, menus, or icons look and behave the same throughout the system, this heuristic is being demonstrated."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Aesthetic and minimalist design", "Help and documentation", "Flexibility and efficiency of use", "Match between system and the real world"],
      correct: 2,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/10A%20-%20Help%20and%20Documentation2.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/10A%20-%20Help%20and%20Documentation1.jpg",
      explanation: "Systems should provide help and guidance, even if the system is mostly usable without it. If the picture shows built-in tutorials, searchable help, or step-by-step guides, this heuristic applies."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Flexibility and efficiency of use", "Help and documentation", "Aesthetic and minimalist design", "Match between system and the real world"],
      correct: 1,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/7A%20-%20Flexibility%20and%20Efficiency%20of%20Use1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/7A%20-%20Flexibility%20and%20Efficiency%20of%20Use2.jpg",
      explanation: "The system should cater to both novice and expert users, allowing shortcuts or accelerators for frequent actions. If the picture shows keyboard shortcuts, customizable dashboards, or templates/macros, this heuristic is correct because it speeds up expert use while remaining accessible."
    }
  ],
  hard: [
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Error prevention", "Help users recognize, diagnose and recover from errors", "Visibility of system status", "User control and freedom"],
      correct: 3,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/1B%20-%20Visibility%20of%20status1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/1B%20-%20Visibility%20of%20status2.jpg",
      explanation: "The system should always keep users informed about what is happening through timely and appropriate feedback. If the picture shows a loading bar, a notification, or an icon changing when something happens, this heuristic applies because it communicates the system’s status."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Help and documentation", "Match between system and the real world", "Recognition rather than recall", "Consistency and standards"],
      correct: 1,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/10B%20-%20Help%20and%20Documentation1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/10B%20-%20Help%20and%20Documentation2.jpg",
      explanation: "Systems should provide help and guidance, even if the system is mostly usable without it. If the picture shows built-in tutorials, searchable help, or step-by-step guides, this heuristic applies."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Error prevention", "Flexibility and efficiency of use", "Help users recover from errors", "User control and freedom"],
      correct: 4,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/3B%20-%20User%20Control%20and%20Freedom1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/3B%20-%20User%20Control%20and%20Freedom2.jpg",
      explanation: "Users need to have control over their actions and the ability to undo or redo decisions. This applies when the picture shows undo buttons, back navigation, cancel options, or ways to exit a process safely."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Recognition rather than recall", "Flexibility and efficiency of use", "Consistency and standards", "Error prevention"],
      correct: 2,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/7B%20-%20Flexibility%20and%20Efficiency%20of%20Use1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/7B%20-%20Flexibility%20and%20Efficiency%20of%20Use2.jpg",
      explanation: "The system should cater to both novice and expert users, allowing shortcuts or accelerators for frequent actions. If the picture shows keyboard shortcuts, customizable dashboards, or templates/macros, this heuristic is correct because it speeds up expert use while remaining accessible."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["User control and freedom", "Error prevention", "Aesthetic and minimalist design", "Help users recover from errors"],
      correct: 3,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/8B%20-%20Aesthetic%20and%20Minimalist%20Design1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/8B%20-%20Aesthetic%20and%20Minimalist%20Design2.jpg",
      explanation: "Interfaces should avoid unnecessary information or clutter, focusing on essential content. If the picture shows a clean layout with minimal buttons or content, this heuristic is being followed."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Consistency and standards", "Recognition rather than recall", "Aesthetic and minimalist design", "Match between system and the real world"],
      correct: 1,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/4B%20-%20Consistency%20and%20Standards1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/4B%20-%20Consistency%20and%20Standards2.jpg",
      explanation: "Design should be consistent, following conventions and standards so users don’t have to learn new behaviors unnecessarily. If buttons, menus, or icons look and behave the same throughout the system, this heuristic is being demonstrated."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["User control and freedom", "Recognition rather than recall", "Visibility of system status", "Error prevention"],
      correct: 4,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/5B%20-%20Error%20Prevention1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/5B%20-%20Error%20Prevention2.jpg",
      explanation: "It’s better to prevent errors than to display error messages; design should help users avoid mistakes. If the image shows confirmation pop-ups, auto-validation fields, or disabled options to prevent mistakes, this is the heuristic at work."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Aesthetic and minimalist design", "Recognition rather than recall", "Match between system and the real world", "Help users recover from errors"],
      correct: 2,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/6B%20-%20Recognition%20Rather%20than%20Recall1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/6B%20-%20Recognition%20Rather%20than%20Recall2.jpg",
      explanation: "Minimize the user’s memory load by making options visible rather than requiring them to remember information from elsewhere. If the image shows drop-down lists, recently used items, or auto-suggestions, this heuristic applies because it helps users recognize instead of recall."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Consistency and standards", "Visibility of system status", "Match between system and the real world", "Aesthetic and minimalist design"],
      correct: 3,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/2B%20-%20Match%20Between%20the%20System%20and%20the%20Real%20World1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/2B%20-%20Match%20Between%20the%20System%20and%20the%20Real%20World2.jpg",
      explanation: "The system should use the user’s language, including words, concepts, and icons that are familiar, following real-world conventions. If the image shows real-world icons like a trash bin, folder, calendar, or familiar symbols, this heuristic is the one being illustrated."
    },
    {
      question: "Which heuristic is shown in the picture?",
      options: ["Recognition rather than recall", "User control and freedom", "Visibility of system status", "Help users recognize, diagnose, and recover from errors"],
      correct: 4,
      image: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/9B%20-%20Help%20Users%20Recognize%2C%20Diagnose%2C%20and%20Recover%20from%20Errors1.jpg",
      feedbackImage: "https://raw.githubusercontent.com/mlebed/SeriousPlay/main/9B%20-%20Help%20Users%20Recognize%2C%20Diagnose%2C%20and%20Recover%20from%20Errors2.jpg",
      explanation: "When errors occur, users should be able to understand, identify, and fix them easily. If the picture shows clear error messages, suggestions for fixing mistakes, or highlights the problem location, this heuristic is demonstrated."
    }
  ]
};

// --- Selección de nivel ---
document.querySelectorAll(".level-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedLevel = btn.dataset.level;
    levelScreen.style.display = "none";
    quizScreen.style.display = "block";
    currentQuestion = 0;
    score = 0;
    loadQuestion();
  });
});

function loadQuestion() {
  const questions = quizData[selectedLevel];
  const q = questions[currentQuestion];

  questionEl.textContent = q.question;
  questionImg.src = q.image || "";
  feedbackEl.textContent = "";
  explanationEl.textContent = "";
  nextBtn.style.display = "none";

  optionsEl.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(index, btn));
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selectedIndex, button) {
  const q = quizData[selectedLevel][currentQuestion];
  const correctIndex = q.correct - 1;
  const optionButtons = document.querySelectorAll(".option");
  optionButtons.forEach(btn => (btn.disabled = true));

  // Mostrar imagen de feedback
  if (q.feedbackImage) questionImg.src = q.feedbackImage;

  if (selectedIndex === correctIndex) {
    button.classList.add("correct");
    feedbackEl.textContent = "✅ ¡Correct!";
    score++;
  } else {
    button.classList.add("wrong");
    if(optionButtons[correctIndex]) optionButtons[correctIndex].classList.add("correct");
      feedbackEl.textContent = "❌ Incorrect.";
      explanationEl.textContent = q.explanation || "";
    }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  const questions = quizData[selectedLevel];
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";
  finalScoreEl.textContent = `Your score: ${score} / ${quizData[selectedLevel].length}`;
}

restartBtn.addEventListener("click", () => {
  resultScreen.style.display = "none";
  welcomeScreen.style.display = "block";
});
