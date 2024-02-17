const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex ++
    setNextQuestion()
})

function startGame(){
  startButton.classList.add('hide')
  shuffleQuestions = questions.sort(()=> Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion();
}

function setNextQuestion(){
    resetState()
 showQuestion(shuffleQuestions[currentQuestionIndex])
}
function showQuestion(question){
 questionElement.innerText = question.question;
 question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text
    button.classList.add('btn');
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonElement.appendChild(button);
 });
}


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}


function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setSatusClass(document.body, correct)
  Array.from(answerButtonElement.children).forEach(button =>{
     setSatusClass(button, button.dataset.correct)
  })
  
  if(shuffleQuestions.length > currentQuestionIndex +1){
      nextButton.classList.remove('hide')
  }else{
     startButton.innerText = 'restart'
     startButton.classList.remove('hide')
  }
}

function setSatusClass(element, correct){
clearStatusClass(element)
if(correct){
    element.classList.add('correct')
}else{
    element.classList.add('wrong')
}
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'what is the capital city of somalia?',
        answers: [
            { text: 'nairobi', correct: false},
            { text: 'mogadishu', correct: true},
            { text: 'kigali', correct: false},
            { text: 'dar asalam', correct: false},
        ]
    },
        {
        question: 'how many countries are in africa?',
        answers: [
            { text: '50', correct: false},
            { text: '58', correct: false},
            { text: '54', correct: true},
            { text: '60', correct: false},
        ]
    },
        {
        question: 'which country have the longest cost line in africa?',
        answers: [
            { text: 'somalia', correct: true},
            { text: 'south africa', correct: false},
            { text: 'madagascar', correct: false},
            { text: 'tanzania', correct: false},
        ]
    },
        {
        question: '_______ is the longest river in africa',
        answers: [
            { text: 'juba river', correct: false},
            { text: 'white nile river', correct: false},
            { text: 'blue nile river', correct: true},
            { text: 'tana river', correct: false},
        ]
    },
        {
        question: 'what is the largest country in africa?',
        answers: [
            { text: 'somalia', correct: false},
            { text: 'sudan', correct: false},
            { text: 'algeria', correct: true},
            { text: 'DRC congo', correct: false},
        ]
    },
        {
        question: 'what is the capital city of kenya?',
        answers: [
            { text: 'nairobi', correct: true},
            { text: 'mogadishu', correct: false},
            { text: 'kigali', correct: false},
            { text: 'dar asalam', correct: false},
        ]
    }

]
