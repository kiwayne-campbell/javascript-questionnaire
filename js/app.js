console.log('hello');

var answers = {
  q1: 'Cascading Style Sheets',
  q2: 'Dynamic HTML',
  q3: 'Netscape',
  q4: 'Common Gateway Interface'
};

// Do not change anything below here ...
// what is the context of this on index.html we can check on console.log
// what we are doing below is hosting a function and this is accessible on the global function

const isAnswerCorrect = e => e.checked && answers[e.name] === e.value

const sumScore = (score, e) =>  isAnswerCorrect(e) ? score+1 : score;

const questionNumber = name => name.slice(1);



function getScore(form) {
  console.log(this);
  window.form = form

  Array.from(form.elements).forEach(e => console.log(e.checked, e.value, e.name, answers[e.name]));

  let score = Array.from(form.elements).reduce(sumScore, 0);
  console.log(score);

  form.percentage.value = score;

  form.solutions.value = Object.keys(answers)
    .map(name => `${questionNumber(name)}.  ${answers[name]}\r\n`).join('');



//   let correctAnswers = "";
//   for (i=1; i<=numQues; i++) {
//     correctAnswers += i + ". " + answers[i-1] + "\r\n";
//   }
//   form.solutions.value = correctAnswers;
}
