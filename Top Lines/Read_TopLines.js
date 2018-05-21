// Setting all the Initial Components
//----------------------------------------------------------------
var week = 6

var height = 12*week-1

var Top15 = []
for( var i = 0 ; i < 15 ; i++ ){
	row = ["name","name","name","name","name","name"]
	Top15.push( row )
}

var All_Top = []
for( var i = 0 ; i < (height) ; i++ ){
	row = [0,0,0,0,0,0,0]
	All_Top.push( row )
}

var CSV_Names_TL = ["Top_Lines.csv","Top_Lines_Mat.csv"]

setTimeout(function(){ 
	ParseAll_TL(CSV_Names_TL);
	console.log('Finished Parsing Top Lines');},120)

// Defining Functions
//-----------------------------------------------------------------

function GetAll_Top(){
	return All_Top
}

function GetTop15(){
	return Top15
}

function GetWeekNumber_TL(){
	return week
}

function ParseAll_TL( names ){
		NowParse_TL(names)
}

function ParseData_TL( CallBack, file, Week_Mat){
	Papa.parse(file, {
		download: true,
		header: false,
		dynamicTyping: true,
		complete: function(results) {
			CallBack(results.data,Week_Mat)
		}
	})
}

function CollectData_TL_15( data, mat ) {
	for (var i = 0; i < 15; i++) {
		for (var j = 0; j < 6; j++) {
			mat[i][j]   = data[i][j]
		}
	}
}

function CollectData_TL_All( data, mat ) {
	for (var i = 0; i < height; i++) {
		for (var j = 0; j < 8; j++) {
			mat[i][j]   = data[i][j]
		}
	}
}

function NowParse_TL(files) {
	name1 = files[0]
	filename1 = '../CSV Files/'+name1
	ParseData_TL( CollectData_TL_15,filename1,Top15)

	name2 = files[1]
	filename2 = '../CSV Files/'+name2
	ParseData_TL( CollectData_TL_All,filename2,All_Top)	
}