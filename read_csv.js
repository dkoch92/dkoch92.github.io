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

var Week1
var Week2
var Week3
var Week4
var Week5
var Week6


function ParseData( CallBack, Create, week, blank ){
	for(var i = 0; i < week; i++ ){
		file = "week_"+(i+1).toString()+"_stats.csv"
		Papa.parse(file, {
			download: true,
			header: false,
			dynamicTyping: true,
			complete: function(results) {
				Create( i,blank )
				CallBack( results.data,i,blank )
			}
		})
	}
}


function CollectData( data,week,mat ) {
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 12; j++) {
			mat[i][j] =  data[i][j]
		}
	}
	console.log(mat)
	SetToWeek(mat,week)
}

function SetToWeek(M,W){
	if( W === 0 ){
		Week1 = M
	}
	if( W === 1 ){
		Week2 = M
	}
	if( W === 2 ){
		Week3 = M
	}
	if( W === 3 ){
		Week4 = M
	}
	if( W === 4 ){
		Week5 = M
	}
	if( W === 5 ){
		Week6 = M
	}
}

function TestButton() {
	console.log('Button Works')
	console.log( Week4 )
}

function NowParse() {
	ParseData( CollectData,CreateMatrix,week,Blank )
}

function CreateMatrix(week_index,blank){
	if( week_index === 0){
		Week1 = blank
	}
	if( week_index === 1){
		Week2 = blank
	}
	if( week_index === 2){
		Week3 = blank
	}
	if( week_index === 3){
		Week4 = blank
	}
	if( week_index === 4){
		Week5 = blank
	}
	if( week_index === 5){
		Week6 = blank
	}
}


