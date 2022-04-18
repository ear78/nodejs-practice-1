const fs = require('fs');

fs.renameSync('./assets/colors.json', './assets/colorData.json');

fs.rename('./Readme.md', './storage-files/Readme.md', err => {
  if (err) throw err;
  console.log('Move complete...');
});

