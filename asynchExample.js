var fs=require('fs');

fs.readFile(process.argv[2],countNewLines);

function countNewLines(err, fileContents){
	if(err){
		console.log(err);
	}else{
		var total=fileContents.toString().split('\n');
		console.log(total.length-1);
		
	}
}




