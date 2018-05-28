// Setting all the Initial Components
//----------------------------------------------------------------
var week
var StatsMat
var AllTeamsMat
var AvgMat

setTimeout( function() { 
	week = GetWeekNumber();
	console.log('TeamStats week:',week)
	StatsMat    = GetAllWeeks();
	AllTeamsMat = AllTeamStats(StatsMat,week);
	AvgMat      = GenerateAverages(StatsMat,week); } ,150)


// Defining Functions
//-----------------------------------------------------------------

function GetAvg(){
	return AvgMat
}

function GetAllTeams(){
	return AllTeamsMat
}

function AllTeamStats(Stats,WeekNumber){
	var AllTeams = []
	for (var k = 0; k < 12; k++){
		AllTeams.push( TeamStats(Stats,k,WeekNumber) )
	}
	return AllTeams
}

function TeamStats(Stats,TeamNumber,WeekNumber){
	var TeamStats = []
	for (var i =0; i < 12; i++){
		var StatLine = []
		for(var j=0; j<WeekNumber; j++){
			StatLine.push(Stats[j][TeamNumber][i])
		}
		TeamStats.push(StatLine)
	}
	return TeamStats
}	

function GenerateAverages(stats,week){
	var averages = []
	for(var i=0; i<12; i++){
		var Avg = []
		for(var j=0; j<week; j++){
			var avg = 0
			for(var k=0; k<12; k++){
				avg = avg + stats[j][k][i]
			}
			avg = avg / 12.0
			avg = avg.toFixed(3)
			Avg.push(avg)
		}
		averages.push(Avg)
	}
	return averages
}


function CombineWeekStats(WeekNumber){
	var AllWeeks = []
	for( var i = 0; i < WeekNumber ;i++ ){
		if(i==0){
			AllWeeks.push(Week1Stats)
		}
		if(i==1){
			AllWeeks.push(Week2Stats)
		}
		if(i==2){
			AllWeeks.push(Week3Stats)
		}
		if(i==3){
			AllWeeks.push(Week4Stats)
		}
		if(i==4){
			AllWeeks.push(Week5Stats)
		}
		if(i==5){
			AllWeeks.push(Week6Stats)
		}
		if(i==6){
			AllWeeks.push(Week7Stats)
		}
		if(i==7){
			AllWeeks.push(Week8Stats)
		}
		if(i==8){
			AllWeeks.push(Week9Stats)
		}
		if(i==9){
			AllWeeks.push(Week10Stats)
		}
		if(i==10){
			AllWeeks.push(Week11Stats)
		}
		if(i==11){
			AllWeeks.push(Week12Stats)
		}
		if(i==12){
			AllWeeks.push(Week13Stats)
		}
		if(i==13){
			AllWeeks.push(Week14Stats)
		}
		if(i==14){
			AllWeeks.push(Week15Stats)
		}
		if(i==15){
			AllWeeks.push(Week16Stats)
		}
		if(i==16){
			AllWeeks.push(Week17Stats)
		}
		if(i==17){
			AllWeeks.push(Week18Stats)
		}
		if(i==18){
			AllWeeks.push(Week19Stats)
		}
		if(i==19){
			AllWeeks.push(Week20Stats)
		}
	}
	return AllWeeks
}


