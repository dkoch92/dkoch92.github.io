week = 6

var Blank = [
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0]]

var Week1 = Blank
var Week2 = Blank
var Week3 = Blank
var Week4 = Blank
var Week5 = Blank
var Week6 = Blank

var CSV_Names = ["week_1_stats.csv","week_2_stats.csv","week_3_stats.csv",
				"week_4_stats.csv","week_5_stats.csv","week_6_stats.csv"]

console.log("Week4: ",Week4)
console.log(CSV_Name[3] )

function ParseData( CallBack, file, Week_Mat){
	Papa.parse(file, {
		download: true,
		header: false,
		dynamicTyping: true,
		complete: function(results) {
			CallBack(results.data,i,Week_Mat)
		}
	})
}



function CollectData( data, mat ) {
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 12; j++) {
			mat[i][j] =  data[i][j]
		}
	}
	console.log("Collecting Mat",mat)
}


function TestButton() {
	console.log('Button Works')
	console.log( Week4 )
}

function NowParse(index) {
	filename = CSV_Names[index]
	console.log('filename: ',filename)
	if(index === 0){
		ParseData( CollectData,filename,Week1)
	}
	if(index === 1){
		ParseData( CollectData,filename,Week2)
	}
	if(index === 2){
		ParseData( CollectData,filename,Week3)
	}
	if(index === 3){
		ParseData( CollectData,filename,Week4)
	}
	if(index === 4){
		ParseData( CollectData,filename,Week5)
	}	
	if(index === 5){
		ParseData( CollectData,filename,Week6)
	}	
}


