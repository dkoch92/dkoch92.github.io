// Creating Empty Matrices
//----------------------------------------------------------------

var Week1_M = [
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

var Week2_M = [
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

var Week3_M = [
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

var Week4_M = [
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

var Week5_M = [
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

var Week6_M = [
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

// Setting all the Initial Components
//----------------------------------------------------------------
var week = 6

var CSV_Names_M = ["week_1_matchups.csv","week_2_matchups.csv","week_3_matchups.csv",
				   "week_4_matchups.csv","week_5_matchups.csv","week_6_matchups.csv"]

var AllWeeks_M

console.log(Week4_M)
setTimeout(function(){ 
	ParseAll_M(week,CSV_Names_M);
	AllWeeks_M = CombineAllWeeks_M( week );
	console.log('Finished Parsing Matchups');
	console.log(Week4_M);
	console.log(Week1_M); },50)

// Defining Functions
//-----------------------------------------------------------------

function GetAllWeeks_M(){
	return AllWeeks_M
}

function ParseAll_M( week,names ){
	for( var i = 0; i < week; i++ ){
		NowParse_M(i,names)
	}
}

function ParseData_M( CallBack, file, Week_Mat){
	Papa.parse(file, {
		download: true,
		header: false,
		dynamicTyping: true,
		complete: function(results) {
			CallBack(results.data,Week_Mat)
		}
	})
}

function CollectData_M( data, mat ) {
	for (var i = 0; i < 12; i++) {
		ii = i+12
		for (var j = 0; j < 3; j++) {
			mat[i][j]   = data[i][j]
			mat[i][j+3] = data[ii][j]
		}
	}
}

function GetWeekNumber_M(){
	return week
}

function NowParse_M(index,files) {
	name = files[index]
	filename = 'CSV_Files/'+name
	if(index === 0){
		ParseData_M( CollectData_M,filename,Week1_M)
	}
	if(index === 1){
		ParseData_M( CollectData_M,filename,Week2_M)
	}
	if(index === 2){
		ParseData_M( CollectData_M,filename,Week3_M)
	}
	if(index === 3){
		ParseData_M( CollectData_M,filename,Week4_M)
	}
	if(index === 4){
		ParseData_M( CollectData_M,filename,Week5_M)
	}	
	if(index === 5){
		ParseData_M( CollectData_M,filename,Week6_M)
	}	
}

function CombineAllWeeks_M(week){
	var AllWeeks = []
	for( var i = 0; i < week ;i++ ){
		if(i==0){
			AllWeeks.push(Week1_M)
		}
		if(i==1){
			AllWeeks.push(Week2_M)
		}
		if(i==2){
			AllWeeks.push(Week3_M)
		}
		if(i==3){
			AllWeeks.push(Week4_M)
		}
		if(i==4){
			AllWeeks.push(Week5_M)
		}
		if(i==5){
			AllWeeks.push(Week6_M)
		}
		if(i==6){
			AllWeeks.push(Week7_M)
		}
		if(i==7){
			AllWeeks.push(Week8_M)
		}
		if(i==8){
			AllWeeks.push(Week9_M)
		}
		if(i==9){
			AllWeeks.push(Week10_M)
		}
		if(i==10){
			AllWeeks.push(Week11_M)
		}
		if(i==11){
			AllWeeks.push(Week12_M)
		}
		if(i==12){
			AllWeeks.push(Week13_M)
		}
		if(i==13){
			AllWeeks.push(Week14_M)
		}
		if(i==14){
			AllWeeks.push(Week15_M)
		}
		if(i==15){
			AllWeeks.push(Week16_M)
		}
		if(i==16){
			AllWeeks.push(Week17_M)
		}
		if(i==17){
			AllWeeks.push(Week18_M)
		}
		if(i==18){
			AllWeeks.push(Week19_M)
		}
		if(i==19){
			AllWeeks.push(Week20_M)
		}
	}
	return AllWeeks
}