const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Give a number: ", (res) => {
      const intRes = parseInt(res);
      console.log(`${sum + intRes}`);
      addNumbers(sum + intRes, numsLeft - 1, completionCallback);
    });
  }
  else if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  }

}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
