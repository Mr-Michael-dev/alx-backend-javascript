// uses stdin to get user input and disolaus it.

console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const userInput = data.trim();
  console.log(`Your name is: ${userInput}`);
  console.log('This important software is now closing');
  process.exit();
});
