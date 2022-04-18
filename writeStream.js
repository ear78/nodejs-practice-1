const fs = require('fs');

const writeStream = fs.createWriteStream('./storage-files/myFile.txt', 'utf-8');

process.stdin.on('data', data => {
  writeStream.write(data);
});
