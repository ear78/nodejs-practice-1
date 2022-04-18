const path = require('path');

const stripedFileName = `This is the striped file ${path.basename(__filename)}`;

const grab = (flag) => {
  let indexFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

const questions = [
  'What is your name?',
  'What would you rather be doing?',
  'What is your preferred language?'
];

const ask = (i = 0) => {
  process.stdout.write(`${questions[i]}`);
  process.stdout.write(` > `);
}
ask();

const answers = [];
process.stdin.on('data', data => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  const [name, activity, lang] = answers;
  console.log(`
  Thank you for your answers.
  Go ${activity} ${name} you can write ${lang} later.
  `);
  console.log(`${stripedFileName}.`);
});

