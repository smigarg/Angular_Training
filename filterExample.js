var fs=require('fs');
var path=require('path');
fs.readdir(process.argv[2],filterFn);

function filterFn(err,list){
	for(var i=0;i<list.length;i++){
		console.log(list[i].split(process.argv[3]));
	}
}