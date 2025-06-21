const questions = [
  {
    question: "1. नेपालको राजधानी के हो?",
    options: ['काठमाडौं', 'पोखरा', 'ललितपुर', 'धरान'],
    answer: "काठमाडौं"
  },
  {
    question: "2. नेपालको राष्ट्रिय जनावर कुन हो?",
    options: ['गाई', 'कुकुर', 'भालु', 'बाघ'],
    answer: "गाई"
  },
  {
    question: "3. नेपालको राष्ट्रिय फूल कुन हो?",
    options: ['गुलाब', 'कमल', 'लालिगुराँस', 'चमेली'],
    answer: "लालिगुराँस"
  },
  {
    question: "4. नेपालमा कति प्रदेश छन्?",
    options: ['५', '६', '७', '८'],
    answer: "७"
  },
  {
    question: "5. नेपालको सबैभन्दा अग्लो हिमाल कुन हो?",
    options: ['अन्नपूर्ण', 'गौरीशंकर', 'सगरमाथा', 'धौलागिरी'],
    answer: "सगरमाथा"
  },
  {
    question: "6. नेपालको राष्ट्रिय पक्षी कुन हो?",
    options: ['कोइलो', 'डाँफे', 'काग', 'परेवा'],
    answer: "डाँफे"
  },
  {
    question: "7. नेपालको राष्ट्रिय भाषा के हो?",
    options: ['थारु', 'मैथिली', 'नेपाली', 'नेवार'],
    answer: "नेपाली"
  },
  {
    question: "8. त्रिभुवन विश्वविद्यालय कहिले स्थापना भयो?",
    options: ['१९५९', '१९६०', '१९५५', '१९६५'],
    answer: "१९५९"
  },
  {
    question: "9. नेपालको सबैभन्दा ठूलो जिल्ला कुन हो?",
    options: ['रुकुम', 'डोल्पा', 'मुस्ताङ', 'इलाम'],
    answer: "डोल्पा"
  },
  {
    question: "10. नेपालको सबैभन्दा सानो जिल्ला कुन हो?",
    options: ['भक्तपुर', 'ललितपुर', 'पाल्पा', 'कपिलवस्तु'],
    answer: "भक्तपुर"
  },
  {
    question: "11. नेपालको राजधानी के हो?",
    options: ['काठमाडौं', 'पोखरा', 'ललितपुर', 'धरान'],
    answer: "काठमाडौं"
  },
  {
    question: "12. नेपालको राष्ट्रिय जनावर कुन हो?",
    options: ['गाई', 'कुकुर', 'भालु', 'बाघ'],
    answer: "गाई"
  },
  {
    question: "13. नेपालको राष्ट्रिय फूल कुन हो?",
    options: ['गुलाब', 'कमल', 'लालिगुराँस', 'चमेली'],
    answer: "लालिगुराँस"
  },
  {
    question: "14. नेपालमा कति प्रदेश छन्?",
    options: ['५', '६', '७', '८'],
    answer: "७"
  },
  {
    question: "15. नेपालको सबैभन्दा अग्लो हिमाल कुन हो?",
    options: ['अन्नपूर्ण', 'गौरीशंकर', 'सगरमाथा', 'धौलागिरी'],
    answer: "सगरमाथा"
  },
  {
    question: "16. नेपालको राष्ट्रिय पक्षी कुन हो?",
    options: ['कोइलो', 'डाँफे', 'काग', 'परेवा'],
    answer: "डाँफे"
  },
  {
    question: "17. नेपालको राष्ट्रिय भाषा के हो?",
    options: ['थारु', 'मैथिली', 'नेपाली', 'नेवार'],
    answer: "नेपाली"
  },
  {
    question: "18. त्रिभुवन विश्वविद्यालय कहिले स्थापना भयो?",
    options: ['१९५९', '१९६०', '१९५५', '१९६५'],
    answer: "१९५९"
  },
  {
    question: "19. नेपालको सबैभन्दा ठूलो जिल्ला कुन हो?",
    options: ['रुकुम', 'डोल्पा', 'मुस्ताङ', 'इलाम'],
    answer: "डोल्पा"
  },
  {
    question: "20. नेपालको सबैभन्दा सानो जिल्ला कुन हो?",
    options: ['भक्तपुर', 'ललितपुर', 'पाल्पा', 'कपिलवस्तु'],
    answer: "भक्तपुर"
  },
  {
    question: "21. नेपालको राजधानी के हो?",
    options: ['काठमाडौं', 'पोखरा', 'ललितपुर', 'धरान'],
    answer: "काठमाडौं"
  },
  {
    question: "22. नेपालको राष्ट्रिय जनावर कुन हो?",
    options: ['गाई', 'कुकुर', 'भालु', 'बाघ'],
    answer: "गाई"
  },
  {
    question: "23. नेपालको राष्ट्रिय फूल कुन हो?",
    options: ['गुलाब', 'कमल', 'लालिगुराँस', 'चमेली'],
    answer: "लालिगुराँस"
  },
  {
    question: "24. नेपालमा कति प्रदेश छन्?",
    options: ['५', '६', '७', '८'],
    answer: "७"
  },
  {
    question: "25. नेपालको सबैभन्दा अग्लो हिमाल कुन हो?",
    options: ['अन्नपूर्ण', 'गौरीशंकर', 'सगरमाथा', 'धौलागिरी'],
    answer: "सगरमाथा"
  },
  {
    question: "26. नेपालको राष्ट्रिय पक्षी कुन हो?",
    options: ['कोइलो', 'डाँफे', 'काग', 'परेवा'],
    answer: "डाँफे"
  },
  {
    question: "27. नेपालको राष्ट्रिय भाषा के हो?",
    options: ['थारु', 'मैथिली', 'नेपाली', 'नेवार'],
    answer: "नेपाली"
  },
  {
    question: "28. त्रिभुवन विश्वविद्यालय कहिले स्थापना भयो?",
    options: ['१९५९', '१९६०', '१९५५', '१९६५'],
    answer: "१९५९"
  },
  {
    question: "29. नेपालको सबैभन्दा ठूलो जिल्ला कुन हो?",
    options: ['रुकुम', 'डोल्पा', 'मुस्ताङ', 'इलाम'],
    answer: "डोल्पा"
  },
  {
    question: "30. नेपालको सबैभन्दा सानो जिल्ला कुन हो?",
    options: ['भक्तपुर', 'ललितपुर', 'पाल्पा', 'कपिलवस्तु'],
    answer: "भक्तपुर"
  },
  
];

let currentIndex = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result");

function showQuestion() {
  const currentQuestion = questions[currentIndex];
  questionBox.innerText = `${currentIndex + 1}. ${currentQuestion.question}`;
  optionsBox.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentIndex].answer;
  if (selected === correct) {
    score++;
  }
  nextBtn.style.display = "inline-block";
  const allOptions = optionsBox.querySelectorAll("button");
  allOptions.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.style.backgroundColor = "#90ee90"; // green
    } else {
      btn.style.backgroundColor = "#ffcccb"; // red
    }
  });
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("quiz-box").style.display = "none";
  resultBox.style.display = "block";
  resultBox.innerText = `तपाईंको स्कोर: ${score}/${questions.length}`;
}

showQuestion();



