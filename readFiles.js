const fs = require('fs');

fs.readFile('./Readme.md', 'UTF-8', (err, text) => {
  if (err) {
    console.log(`An error has occured: ${err}`);
    process.exit();
  }
  console.log(fileRead);
});

