console.log('hello');

// Insert number of questions
var numQues = 4;

// Insert number of choices in each question
var numChoi = 3;

// Insert number of questions displayed in answer area
var answers = new Array(4);

// Insert answers to questions
answers[0] = "Cascading Style Sheets";
answers[1] = "Dynamic HTML";
answers[2] = "Netscape";
answers[3] = "Common Gateway Interface";

// Do not change anything below here ...
// what is the context of this on index.html we can check on console.log
// what we are doing below is hosting a function and this is accessible on the global function

function getScore(context) {
  console.log(context);
  // the below shows you how to understand how to get the context of methods on window object
  // to understand what this.form is
  var form = context.form;
  window.context = context;

  let score = 0;
  for (i=0; i<numQues; i++) {
    const currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      const currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score);
  form.percentage.value = score;
  let correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}
