const colors = require('colors');

colors.setTheme({
  error:'red',
  debug:'blue',
  warn:'yellow',
  help: 'cyan'
});

console.log('this is an error '.error);
console.log('this is a debug '.debug);
console.log('this is a help'.help);
console.log('this my last warning '.warn);



