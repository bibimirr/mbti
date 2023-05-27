var results = {
  ISTJ: {
    title: "ISTJ - 청렴결백한 논리주의자",
    description: "현실적이고 조직적인 사고를 가진 사람입니다. 규칙과 원칙을 중요시하며 신뢰성을 갖추려 노력합니다."
  },
  ISFJ: {
    title: "ISFJ - 용감한 수호자",
    description: "사려 깊고 책임감 있는 사람입니다. 다른 사람을 돕고자 하는 마음이 강하며 온화하고 인정이 많습니다."
  },
  INFJ: {
    title: "INFJ - 선의의 옹호자",
    description: "이해심이 많고 이상적인 세상을 추구하는 사람입니다. 타인의 성장을 도모하고 긍정적인 변화를 이끌어냅니다."
  },
  INTJ: {
    title: "INTJ - 전략적인 사고자",
    description: "독립적이고 창의적인 사고를 가진 사람입니다. 목표 지향적이며 계획적으로 일을 추진합니다."
  },
  ISTP: {
    title: "ISTP - 만능 재주꾼",
    description: "논리적이고 탐구심이 강한 사람입니다. 문제 해결에 뛰어나며 새로운 경험을 추구합니다."
  },
  ISFP: {
    title: "ISFP - 호기심 많은 예술가",
    description: "예술적인 감각과 섬세한 감수성을 가진 사람입니다. 현재에 몰두하며 창의적인 재능을 발휘합니다."
  },
  INFP: {
    title: "INFP - 열정적인 중재자",
    description: "이상적인 가치와 원리를 중시하는 사람입니다. 온정적이며 타인을 이해하고 돕는 데에 열정적입니다."
  },
  INTP: {
    title: "INTP - 논리적인 사색가",
    description: "논리적이고 분석적인 사고를 가진 사람입니다. 독립적이며 지적 호기심이 많습니다."
  },
  ESTP: {
    title: "ESTP - 모험을 즐기는 사업가",
    description: "모험심이 강하고 현실적인 사람입니다. 적응력이 뛰어나며 행동을 통해 결과를 얻는 것을 좋아합니다."
  },
  ESFP: {
    title: "ESFP - 자유로운 영혼의 연예인",
    description: "외향적이고 활동적인 사람입니다. 타인의 관심을 끄는 데 능하며 즉흥적이고 융통성이 있습니다."
  },
  ENFP: {
    title: "ENFP - 재기발랄한 활동가",
    description: "열정적이고 창의적인 사고를 가진 사람입니다. 다양한 가능성을 탐색하며 새로운 아이디어를 도출합니다."
  },
  ENTP: {
    title: "ENTP - 논쟁을 즐기는 변론가",
    description: "풍부한 상상력과 독창성을 가진 사람입니다. 논리적인 논쟁을 즐기며 새로운 시도를 추구합니다."
  },
  ESTJ: {
    title: "ESTJ - 엄격한 관리자",
    description: "현실적이고 실용적인 사람입니다. 책임감이 강하며 체계적으로 일을 추진합니다."
  },
  ESFJ: {
    title: "ESFJ - 사교적인 외교관",
    description: "사교적이고 동정심이 많은 사람입니다. 타인을 돕고자 하는 의지가 강하며 사회적인 관계를 중시합니다."
  },
  ENFJ: {
    title: "ENFJ - 정의로운 사회운동가",
    description: "타인을 이해하고 돕는 데에 열정을 가진 사람입니다. 사회적인 변화를 이끌고 긍정적인 영향력을 행사합니다."
  },
  ENTJ: {
    title: "ENTJ - 대담한 통솔자",
    description: "목표지향적이고 결단력 있는 사람입니다. 리더십을 통해 목표 달성을 추구하며 동기를 부여합니다."
  }
};

var currentIndex = 0;
var result = {
  E: 0,
  I: 0,
  S: 0,
  N: 0,
  T: 0,
  F: 0,
  J: 0,
  P: 0
};

var questions = [
  // E와 I를 판가름하는 문제
  {
    text: "나는 사람이 많이 있을 때 에너지를 얻는 편이다."
  },
  {
    text: "나는 처음 보는 사람과 쉽게 친해진다."
  },
  {
    text: "상대방이 먼저 말을 걸어주길 기다리는 편이다."
  },
  // N와 S를 판가름하는 문제
  {
    text: "나는 현실적이라는 소리를 많이 듣는다."
  },
  {
    text: "숲보다는 나무를 보는 편이다."
  },
  {
    text: "이미 일어난 것을 토대로 미래를 예측하는 것을 좋아한다."
  },
  // F와 T를 판가름하는 문제
  {
    text: "친구가 고민 상담을 하면 위로보다는 현실적인 조언을 통해 친구가 빨리 일을 해결할 수 있게 한다."
  },
  {
    text: "친구가 사고가 났다고 카톡이 왔다. '야 괜찮아?'가 아니라 '어디서 어쩌다?'라고 묻는다."
  },
  {
    text: "직설적으로 얘기하는 편이다."
  },
  // J와 P를 판가름하는 문제
  {
    text: "내일은 없다. 오늘이 중요하다."
  },
  {
    text: "계획하는 것을 싫어한다."
  },
  {
    text: "계획을 짤 때 b플랜 c플랜까지 짠다."
  }
];


function displayQuestion() {
  var question = document.getElementById("question");
  question.textContent = questions[currentIndex].text;
}

function processAnswer(answer) {
  if (currentIndex < questions.length) {
    if (currentIndex < 3) {
      answer ? result.E++ : result.I++;
    } else if (currentIndex < 6) {
      answer ? result.S++ : result.N++;
    } else if (currentIndex < 9) {
      answer ? result.T++ : result.F++;
    } else {
      answer ? result.P++ : result.J++;
    }

    currentIndex++;

    if (currentIndex < questions.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  var mbti = "";

  result.I < result.E ? (mbti += "E") : (mbti += "I");
  result.N < result.S ? (mbti += "S") : (mbti += "N");
  result.F < result.T ? (mbti += "T") : (mbti += "F");
  result.P < result.J ? (mbti += "J") : (mbti += "P");

  var resultTitle = document.getElementById("result-title");
  var resultDescription = document.getElementById("result-description");

  resultTitle.textContent = results[mbti].title;
  resultDescription.textContent = results[mbti].description;

  var questionContainer = document.getElementById("question-container");
  questionContainer.style.display = "none";

  var resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
}

displayQuestion();