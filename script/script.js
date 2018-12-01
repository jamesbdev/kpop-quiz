const quizContainer    = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton     = document.getElementById('submit');

//how to cycle through an array
//how to cycle through an object
//how to parse HTML


//store 50 questions in an array of questions

const myQuestions = [
  {
    question: "Is EXID a male or female group?",
    answers: {
      a: "Male",
      b: "female"
    },
    correctAnswer: "b"
  }//question 1
  ,
  {
    question: "How many members does Girls' Generation have?",
    answers: {
    a: 2,
    b: 5,
    c: 7,
    d: 9
},
correctAnswer: "d"
},{
question: "Which band is G-dragon a member of?",
answers: {
  a: 'BTS',
  b: 'INFINITE',
  c: 'BIG BANG',
  d: 'SHINee'
},
correctAnswer: "c",
},
{
  question: 'Which of these songs is from Twice?',
  answers: {
    a: 'Gee',
    b: 'Dance the Night Away',
    c: 'Electric Shock',
    d: 'Whistle'
  },
  correctAnswer: "b",
},
{
  question: 'In which year did Black Pink debut?',
  answers: {
    a: '2012',
    b: '2014',
    c: '2015',
    d: '2016',
  },
  correctAnswer: "d",
}//question 5

];// questions


function buildQuiz(){

  //HTML output
  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      const answers = [];
    }
  )

  for(letter in currrentQuestion.answers){
    answers.push(
      `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
        </label>`

    );
  }

}//buildQuiz

function showResults(){}

buildQuiz();



//when the game starts, pick one question randomly

//when user clicks next pick another question

//after 10 questions, give results according to score
submitButton.addEventListener('click', showResults);
