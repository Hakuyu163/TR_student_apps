const quizData = [
  { image: "https://www.fuji-net.co.jp/wp/wp-content/uploads/2022/08/0.jpg", answer: "富士山" },
  { image: "https://www.city.himeji.lg.jp/cmsfiles/contents/0000007/7671/cms-contents-eyec-l.jpg", answer: "姫路城" },
  { image: "https://www.yomiuri-ryokou.co.jp/wp-content/uploads/2023/12/%E5%9A%B4%E5%B3%B6%E7%A5%9E%E7%A4%BE_2.jpeg", answer: "厳島神社" }
];

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  if (currentQuiz < quizData.length) {
      document.getElementById("quiz-image").src = quizData[currentQuiz].image;
      document.getElementById("answer").value = "";
      document.getElementById("result").textContent = "";
  } else {
      document.getElementById("quiz-image").style.display = "none";
      document.getElementById("answer").style.display = "none";
      document.getElementById("result").style.display = "none";
      document.getElementById("score").textContent = `ゲーム終了！最終スコア: ${score}`;
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();
  const correctAnswer = quizData[currentQuiz].answer;

  if (userAnswer === correctAnswer) {
      document.getElementById("result").textContent = "正解！"; 
      document.getElementById("result").style.color = "green";
      score++;
  } else {
      document.getElementById("result").textContent = "不正解"; 
      document.getElementById("result").style.color = "red";
  }

  document.getElementById("score").textContent = `スコア: ${score}`;

  setTimeout(() => {
      currentQuiz++;
      loadQuiz();
  }, 1500);
}

loadQuiz();