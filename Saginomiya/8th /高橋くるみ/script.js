const quizSentence = document.getElementById("quiz_sentence");
const quizAnswerSelect = document.getElementById("quiz_answer_select");
const quizSendButton = document.getElementById("quiz_send_button");
const quizResult = document.getElementById("quiz_Result");
console.log(quizSentence);
const quizData = [
  {
    title: "ENHYPENのデビュー日は？",
    choices: [
      { id: 1, value: "2020年10月30日" },
      { id: 2, value: "2020年11月30日" },
      { id: 3, value: "2021年11月30日" },
      { id: 4, value: "2021年10月30日" },
    ],
    correctId: 2,
  },
];

const useQuizData = quizData[0];
quizSentence.innerHTML = `<p>${useQuizData.title}</p>`;
useQuizData.choices.forEach((choice) => {
  const inputElement = `<input id="${choice.id}" class="radio-inline__input" type="radio" name="answer" value="${choice.id}">`;
  const labelElement = `<label class="radio-inline__label" for="${choice.id}">${choice.value}</label>`;
  quizAnswerSelect.innerHTML += inputElement + labelElement;
})
quizSendButton.onclick = function () {
  console.log(quizResult);
  const elementAnswers = quizAnswerSelect.querySelectorAll("input");
  elementAnswers.forEach((element) => {
    if (element.checked) {
      const result = element.id == useQuizData.correctId;
      const str = result ? "正解です！" : "不正解です";
      quizResult.innerHTML = `<p>${str}</p>`;
      console.log(quizResult.innerHTML);
    }
  });
};