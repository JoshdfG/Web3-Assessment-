const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does SQL stand for",
    a: "Structured Query Language",
    b: "Simple Query Language",
    c: "Sequential Query Language",
    d: "Standardized Question Language",
    correct: a,
  },
  {
    question: "Which of the following is NOT a valid data type in Python?",
    a: "int",
    b: "float",
    c: "string",
    d: "array",
    correct: "d",
  },
  {
    question: "What does the acronym API stand for?",
    a: "Application Programming Interface",
    b: "Advanced Programming Interface",
    c: "Application Process Integration",
    d: "Advanced Process Integratione",
    correct: "a",
  },
  {
    question: "What is the role of the 'head' element in an HTML document?",
    a: " It defines the main content of the document",
    b: "It contains metadata about the document",
    c: " It specifies the layout of the document",
    d: "It defines a hyperlink",
    correct: "b",
  },
  {
    question:
      " Which version control system is commonly used for source code management?",
    a: "SVN (Subversion)",
    b: "Git",
    c: "Mercurial",
    d: "CVS (Concurrent Versions System)",
    correct: "b",
  },
  {
    question: "What is the purpose of CSS (Cascading Style Sheets)?",
    a: " To create dynamic web pages",
    b: "To define the structure of a web page",
    c: "To enhance the functionality of a website",
    d: "To style the visual presentation of a web page",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}
