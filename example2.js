var fs=require('fs');
var readFile=fs.readFileSync(process.argv[2]).toString();
//var readFile=fs.readFileSync('fileName.txt').toString();

var total=readFile.split('\n');

console.log(total.length-1);
