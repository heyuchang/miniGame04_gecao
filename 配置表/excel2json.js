
let excelconvert = require('./excelconvert/excelconvert');
let fs = require('fs');

// 策划表格存放目录
let dir = "./../配置表";

// 设置各个数据类型默认值
excelconvert.setDefaultTypeValue("number",0);
excelconvert.setDefaultTypeValue("string","");
excelconvert.setDefaultTypeValue("object",null);

let data = {};

let files = fs.readdirSync(dir,{encoding:'utf-8', withFileTypes:true});

let fileNameArr = [];
for(let i in files){
	let file = files[i];
	let fileName = file.name;
	if(fileName.substring(fileName.length-5,fileName.length) != ".xlsx"){
		// 过滤掉不是xlsx格式的文件
		continue;
	}
	if(fileName.substring(0,1) == "~"){
		// 过滤掉打开表格，系统自动生成的临时文件
		continue;
	}
	fileNameArr.push(fileName);
}

let count = 0;
let total = fileNameArr.length;
for(let i in fileNameArr){
	let fileName = fileNameArr[i];
	addFileData(fileName,function(err){
		if(err){
			return;
		}
		count++;
		if(count >= total){
			createDesignData();
		}
	});
}

function addFileData(fileName,callback){
	let path = dir + "/" + fileName;
	fs.readFile(path,function(err,buffer){
		if(err){
			console.log(fileName + " addFileData error:"+err.message,err);
			callback(err);
			return;
		}
		let jsonData = excelconvert.convert(new Uint8Array(buffer));
		for(let tmp in jsonData){
			data[tmp] = jsonData[tmp];
		}
		callback();
	});
}

function createDesignData(){
	// 写入到文件
	// let str = JSON.stringify(data,null,'\t');
	let str = JSON.stringify(data);

	fs.writeFile("design.json",str,function(err){
		if(err){
			console.log("发生错误："+err.message,err);
			return;
		}
		console.log("================================");
		console.log("转化成功");
	});
}



