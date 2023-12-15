// quiz.test.js

const {
  loadQuiz,
  deselectAnswers,
  getSelected,
  quizData,
} = require("./script.js");

// Mocking the HTML elements and functions for testing purposes
let questionEl, a_text, b_text, c_text, d_text, answerEls, quiz, submitBtn;

beforeEach(() => {
  // Create mock HTML elements
  questionEl = { innerText: "" };
  a_text = { innerText: "" };
  b_text = { innerText: "" };
  c_text = { innerText: "" };
  d_text = { innerText: "" };
  submitBtn = { addEventListener: jest.fn() };
  answerEls = [
    { checked: false, id: "a" },
    { checked: false, id: "b" },
    { checked: false, id: "c" },
    { checked: false, id: "d" },
  ];
  quiz = {
    innerHTML: "",
    addEventListener: jest.fn(),
  };
});

describe("Quiz Functions", () => {
  test("loadQuiz should update DOM elements with current quiz data", () => {
    // Mocking currentQuizData
    const currentQuizData = quizData[0];

    // Assign currentQuizData to the first question
    quizData[currentQuiz] = currentQuizData;

    loadQuiz();

    expect(questionEl.innerText).toBe(currentQuizData.question);
    expect(a_text.innerText).toBe(currentQuizData.a);
    expect(b_text.innerText).toBe(currentQuizData.b);
    expect(c_text.innerText).toBe(currentQuizData.c);
    expect(d_text.innerText).toBe(currentQuizData.d);
  });

  test("deselectAnswers should uncheck all answer elements", () => {
    answerEls.forEach((answerEl) => {
      answerEl.checked = true;
    });

    deselectAnswers();

    answerEls.forEach((answerEl) => {
      expect(answerEl.checked).toBe(false);
    });
  });
});
// the submit button handles the selected answer and the logic decides that itll proceed to the next question
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>

              <button onclick="location.reload()">Reload</button>
          `;
    }
  }
});

loadQuiz();
