// クイズデータを格納する配列
const quizData = [
  // 問題1
  {
    question: "suicide", // 問題文
    choices: ["墓", "自殺", "悲惨な出来事", "葬式"], // 選択肢
    correctAnswer: 1 // 正解のインデックス（0から始まるため、1は2番目の「自殺」を指す）
  },
  // 問題2
  {
    question: "due", // 問題文
    choices: ["浅い", "ありそうな", "予定で", "十分な"], // 選択肢
    correctAnswer: 2 // 正解のインデックス（0から始まるため、2は3番目の「予定で」を指す）
  },
  // 問題3
  {
    question: "panel", // 問題文
    choices: ["委員会", "会社", "議会", "部門"], // 選択肢
    correctAnswer: 0 // 正解のインデックス（0から始まるため、oは1番目の「o」を指す）
  },

  // 問題4
  {
    question: "scatter", // 問題文
    choices: [" を撒き散らす", "に立ちはだかる", "に違反する", "を割り当てる"], // 選択肢
    correctAnswer: 0 // 
  },
  // 問題5
  {
    question: "confine", // 問題文
    choices: ["を撒き散らす", "を限定する", "から奪う", "を除外する"], // 選択肢
    correctAnswer: 1 // 正解のインデックス（0から始まるため、1は2番目の「を限定する」を指す）
  },
  // 問題６
  {
    question: "surrender", // 問題文
    choices: ["に追いつく", "を引き渡す", "を無視する", "を侵略する"], // 選択肢
    correctAnswer: 1 // 正解のインデックス（0から始まるため、1は2番目の「を限定する」を指す）
  },
    // 問題7
    {
      question: "jury", // 問題文
      choices: ["委員会", "陪審（員団）", "額縁", "議会"], // 選択肢
      correctAnswer: 1 // 正解のインデックス（0から始まるため、1は2番目の「を限定する」を指す）
    },
      // 問題8
      {
        question: "nutrition", // 問題文
        choices: ["野望", "職業", "栄養摂取", "評判"], // 選択肢
        correctAnswer: 2 // 正解のインデックス（0から始まるため、1は2番目の「を限定する」を指す）
      },

];