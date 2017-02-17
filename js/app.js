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
// the below allows you to access on the console the objects of window to see what it contains
  window.form = form

// this allows you to console log each element using a loop
  Array.from(form.elements).forEach(e => console.log(e.checked, e.value, e.name, answers[e.name]));

// array.from is tranforming an array-like-object that wasn't an array into an array
// reduce takesobjects from an array and reduces them to total of its elements
  let score = Array.from(form.elements).reduce(sumScore, 0);
  console.log(score);

  form.percentage.value = score;

// object keys is returning the objcts properties in th exact order & map creates a new array
  form.solutions.value = Object.keys(answers)
    .map(name => `${questionNumber(name)}.  ${answers[name]}\r\n`).join('');

}
