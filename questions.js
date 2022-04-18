const collectAnswers = require('./collectAnswers');

const questions = [
  'What is your name?',
  'What is your favourite coding language?',
  'What will node js help you do?'
];

collectAnswers(questions, (answers) => {
  console.log('Thank you for your answers!');
  console.log(answers);
  process.exit();
});