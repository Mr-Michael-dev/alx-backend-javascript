// uses stdin to get user input and disolaus it.

console.log("Welcome to Holberton School, what is your name?");

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const userInput = data.trim();  // Remove any extra newlines or spaces
  console.log(`Your name is: ${userInput}`);
  console.log("This important software is now closing");
  process.exit();
});
