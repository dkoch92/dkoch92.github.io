// Setting all the Initial Components
//----------------------------------------------------------------
var Opp_Mat = [
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

var WP_Mat = [
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0]]

var CSV_Names_L = ["Opponent_Stats.csv","Win_Percents.csv"]

setTimeout(function(){ 
	ParseAll_L(CSV_Names_L);},50)

// Defining Functions
//-----------------------------------------------------------------

function Get_WP(){
	return WP_Mat
}

function Get_Opp(){
	return Opp_Mat
}

function ParseAll_L( names ){
		NowParse_L(names)
}

function ParseData_L( CallBack, file, Mat){
	Papa.parse(file, {
		download: true,
		header: false,
		dynamicTyping: true,
		complete: function(results) {
			CallBack(results.data,Mat)
		}
	})
}

function CollectData_L_Opp( data, mat ) {
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 6; j++) {
			mat[i][j]   = data[i][j]
		}
	}
}

function CollectData_L_WP( data, mat ) {
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 24; j++) {
			mat[i][j]   = data[i][j]
		}
	}
}

function NowParse_L(files) {
	name1 = files[0]
	filename1 = '../CSV Files/'+name1
	ParseData_L( CollectData_L_Opp,filename1,Opp_Mat)

	name2 = files[1]
	filename2 = '../CSV Files/'+name2
	ParseData_L( CollectData_L_WP,filename2,WP_Mat)	
}