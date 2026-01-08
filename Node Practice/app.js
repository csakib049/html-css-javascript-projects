const path = require('path');
const file = 'html/sakib.txt';

console.log(path.extname(file));

console.log(path.dirname(file));

console.log(path.basename(file));

console.log(path.resolve("html","sakib.txt"));

console.log(path.isAbsolute(file));

console.log(__dirname);

console.log(__filename);


