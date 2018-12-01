const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


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



function buildQuiz(){}

function showResults(){


  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;


}//showResults

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

function buildQuiz(){
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
           output.push(
             `<div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join('')} </div>`
           );
         }
       );

       // finally combine our output list into one string of HTML and put it on the page
       quizContainer.innerHTML = output.join('');
     }
