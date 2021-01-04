const quiz = [
  {
    question: '東海オンエアのメンバーは何人？',
    answers: ['３人', '４人', '５人', '６人'],
    correct: '６人'
  }, {
    question: '東海オンエアのリーダーは誰？',
    answers: ['てつや', 'しばゆー', 'りょう', 'としみつ', ],
    correct: 'てつや'
  }, {
    question: '東海オンエアのチャンネル登録者数は何人？（2020.12.25現在）',
    answers: ['562万人', '563万人', '564万人', '565万人'],
    correct: '564万人'
  } 
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');

const buttonLength = $button.length;

// 問題文、選択肢を定義
const setupQuis = () => {
  document.getElementById('js-puestion').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuis();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct　===　e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;
  if(quizIndex < quizLength) {
    setupQuis();
  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
}

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
