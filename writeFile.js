const fs = require('fs');

const md = `# This is a new file

We can write text to a file with the fs.writeFile

* fs.readdir
* fs.readfile
* fs.writefile

`;

fs.writeFile('./notes.md', md.trim(), (err) => {
  if(err) {
    throw err;
  }
  console.log('file saved...');
})