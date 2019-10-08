const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

function getMedian(maximum, minimum) {
  return Math.round((maximum + minimum) / 2)
}

async function start() {

  let max = 100
  let min = 1

  let guess = getMedian(max, min)



  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?");
  console.log('You entered: ' + secretNumber);

  let yesNo = await ask("Is your number" + guess)

  while (yesNo !== 'y') {

    if (guess < secretNumber) {
      min = guess + 1
      guess = getMedian(min, max)
      yesNo = await ask ("Is your secret number the" + guess)

    }

    if (guess > secretNumber) {
      max = guess
      guess = getMedian(min, max)
      yesNo = await ask ("Is your secret number the" + guess)

    }

  }

  process.exit()
}
start()