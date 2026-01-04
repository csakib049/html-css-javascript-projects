const colors = require('colors');
colors.setTheme({
  error:'red',
  debug:'blue',
  warn:'yellow',
  help: 'cyan'
});
   
console.log(colors.bgMagenta("Hi this is sakib"));      
console.log(colors.bgGreen("Hi this is sakib"));      
console.log(colors.bgCyan("Hi this is sakib"));      
console.log('this is an error '.error);
console.log('this is a debug '.debug);
console.log('this is a help'.help);
console.log('this my last warning '.warn);