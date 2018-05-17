week = 6

function ParseData( CallBack, week ){
	for(var i = 0; i < week; i++ ){
		file = "week_"+(i+1).toString()+"_stats.csv"
		Papa.parse(file, {
			download: true,
			header: false,
			dynamicTyping: true,
			complete: function(results) {
				CallBack( results.data,i )
			}
		})
	}
}

function TestButton() {
	console.log('Button Works')
	console.log( Week4 )
}

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


CreateMatrices(week,Blank)


function CollectData( data,week ) {
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 12; j++) {
			GetWeek(week)[i][j] =  data[i][j]
		}
	}
}


ParseData( CollectData,week )

//console.log('Data:')
//console.log( Data )
//console.log( TestWeek )

//DisplayData( Data )
//DisplayData( TestWeek )


function GetWeek(index){
	if( index === 0){
		return Week1
	}
	if( index === 1){
		return Week2
	}
	if( index === 2){
		return Week3
	}
	if( index === 3){
		return Week4
	}
	if( index === 4){
		return Week5
	}
	if( index === 5){
		return Week6
	}	

}

function CreateMatrices(week,blank){
	for(var i = 0; i < week; i++){
		if( i === 0){
			Week1 = blank
		}
		if( i === 1){
			Week2 = blank
		}
		if( i === 2){
			Week3 = blank
		}
		if( i === 3){
			Week4 = blank
		}
		if( i === 4){
			Week5 = blank
		}
		if( i === 5){
			Week6 = blank
		}
	}
}


