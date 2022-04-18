const fs = require('fs');

const files = fs.readdirSync('../nodejs');

console.log('files: ', files);