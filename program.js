//console.log("HELLO WORLD");

var arrLength=(process.argv).length;
//console.log(arrLength)
var sum = 0;
for(var i=0;i<arrLength-2;i++){
	
	sum= sum + Number(process.argv[2+i]);
	
	
}console.log(sum);

/*
  var result = 0

  for (var i = 2; i < process.argv.length; i++)
    result += Number(process.argv[i])

  console.log(result)

*/