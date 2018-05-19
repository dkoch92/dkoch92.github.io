// Creating Empty Matrices
//----------------------------------------------------------------

var Week1_M = [
[1,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

var Week2_M = [
[2,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

var Week3_M = [
[3,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

var Week4_M = [
[4,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

var Week5_M = [
[5,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

var Week6_M = [
[6,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0]]

// Setting all the Initial Components
//----------------------------------------------------------------
var week 
var AllWeeks_M
var Season_M

setTimeout(function(){ 
    week = GetWeekNumber_M();
    console.log("Display | week:",week)
    AllWeeks_M = GetAllWeeks_M();
    console.log("Display | AllTeams:",AllWeeks_M)
    SetAllWeeks_M( AllWeeks_M,week );
	console.log("Display | Week 6 Mat:",Week6_M);
	Season_M = GenerateSeason(AllWeeks_M,week) } ,200)

var IdNames = [
['M_1_W','M_1_L','M_1_T','wtl_1_W','wtl_1_L','wtl_1_T'],['M_2_W','M_2_L','M_2_T','wtl_2_W','wtl_2_L','wtl_3_T'],
['M_3_W','M_3_L','M_3_T','wtl_3_W','wtl_3_L','wtl_3_T'],['M_4_W','M_4_L','M_4_T','wtl_4_W','wtl_4_L','wtl_4_T'],
['M_5_W','M_5_L','M_5_T','wtl_5_W','wtl_5_L','wtl_5_T'],['M_6_W','M_6_L','M_6_T','wtl_6_W','wtl_6_L','wtl_6_T'],
['M_7_W','M_7_L','M_7_T','wtl_7_W','wtl_7_L','wtl_7_T'],['M_8_W','M_8_L','M_8_T','wtl_8_W','wtl_8_L','wtl_8_T'],
['M_9_W','M_9_L','M_9_T','wtl_9_W','wtl_9_L','wtl_9_T'],['M_10_W','M_10_L','M_10_T','wtl_10_W','wtl_10_L','wtl_10_T'],
['M_11_W','M_11_L','M_11_T','wtl_11_W','wtl_11_L','wtl_11_T'],['M_12_W','M_12_L','M_12_T','wtl_12_W','wtl_12_L','wtl_12_T']
]




// Defining Functions
//-----------------------------------------------------------------


function DisplayWeek(week){
	Mat = WeekMat(week-1)
	for(var i = 0 ; i < 12 ; i++){
		for(var j = 0 ; j < 6 ; j++){
			id_tag = IdNames[i][j]
			number = (Mat[i][j]).toString()
			document.getElementById(id_tag).innerHTML = number
		}
	}
}

function DisplaySeason(){
	for(var i = 0 ; i < 12 ; i++){
		for(var j = 0 ; j < 6 ; j++){
			id_tag = IdNames[i][j]
			number = (Season_M[i][j]).toString()
			document.getElementById(id_tag).innerHTML = number
		}
	}
}

function GenerateSeason(all,week){
	season = []
	for(var i = 0 ; i < 12 ; i++){	
		row = []
		for(var j = 0 ; j < 6 ; j++){
			total = 0
			for(var k = 0 ; k < week ; k++){
				total = total + all[k][i][j]
			}
			row.push( total )
		}
		season.push( row )
	}
	return season
}



function SetAllWeeks_M( all,week ){
	for(var i = 0 ; i < week ; i++){
		if( i === 0 ){
			Week1_M = all[0]
		}
		if( i === 1 ){
			Week2_M = all[1]
		}
		if( i === 2 ){
			Week3_M = all[2]
		}
		if( i === 3 ){
			Week4_M = all[3]
		}
		if( i === 4 ){
			Week5_M = all[4]
		}
		if( i === 5 ){
			Week6_M = all[5]
		}
		if( i === 6 ){
			Week7_M = all[6]
		}
		if( i === 7 ){
			Week8_M = all[7]
		}
		if( i === 8 ){
			Week9_M = all[8]
		}
		if( i === 9 ){
			Week10_M = all[9]
		}
		if( i === 10 ){
			Week11_M = all[10]
		}
		if( i === 11 ){
			Week12_M = all[11]
		}
		if( i === 12 ){
			Week13_M = all[12]
		}
		if( i === 13 ){
			Week14_M = all[13]
		}
		if( i === 14 ){
			Week15_M = all[14]
		}
		if( i === 15 ){
			Week16_M = all[15]
		}
		if( i === 16 ){
			Week17_M = all[16]
		}
		if( i === 17 ){
			Week18_M = all[17]
		}
		if( i === 18 ){
			Week19_M = all[18]
		}
		if( i === 19 ){
			Week20_M = all[19]
		}
	}
}

function WeekMat(index){
	if(index === 0){
		return Week1_M
	}
	if(index === 1){
		return Week2_M
	}
	if(index === 2){
		return Week3_M
	}
	if(index === 3){
		return Week4_M
	}
	if(index === 4){
		return Week5_M
	}
	if(index === 5){
		return Week6_M
	}
	if(index === 6){
		return Week7_M
	}
	if(index === 7){
		return Week8_M
	}
	if(index === 8){
		return Week9_M
	}
	if(index === 9){
		return Week10_M
	}
	if(index === 10){
		return Week11_M
	}
	if(index === 11){
		return Week12_M
	}
	if(index === 12){
		return Week13_M
	}
	if(index === 13){
		return Week14_M
	}
	if(index === 14){
		return Week15_M
	}
	if(index === 15){
		return Week16_M
	}
	if(index === 16){
		return Week17_M
	}
	if(index === 17){
		return Week18_M
	}
	if(index === 18){
		return Week19_M
	}
	if(index === 19){
		return Week20_M
	}
}
