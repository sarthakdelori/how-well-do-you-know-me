const readLineSync = require('readline-sync');

const questions = [
  {
    question: "Where do I study? ",
    answer: "CGC"
  },
  {
    question: "My Favourite Color? ",
    answer: "Blue"
  },
  {
    question: "Which sport do I like the most? ",
    answer: "Cricket"
  },
  {
    question: "What is my Zodiac sign? ",
    answer: "Libra"
  },
  {
    question: "How many ring(s) do I wear? ",
    answer: "1"
  }
];

let userName = readLineSync.question("What is your name? ");

function welcome() {

  console.log("Welcome " + userName + " to 'How well do you know SARTHAK DELORI?'");
}

let score = 0;

function play() {
  for (let i = 0; i < questions.length; i++) {
    let current = questions[i];
    let ques = current.question;
    let ans = current.answer;

    let userAnswer = readLineSync.question(ques);

    if (userAnswer.toUpperCase() === ans.toUpperCase()) {
      console.log("Right!!");
      score++;
    }
    else {
      console.log("Wrong!");
    }

    console.log("Current Score: ", score);
    console.log("__________________________");
    console.log("                          ");
  }
}

function finalScore() {
  console.log(userName + " scored: ", score);
}

welcome();
play();
finalScore();