var Week1_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week2_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week3_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week4_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week5_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week6_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week7_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week8_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week9_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week10_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week11_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week12_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week13_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week14_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week15_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week16_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week17_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week18_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week19_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Week20_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var Season_L = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]

//  Setting all the Initial Components
//----------------------------------------------------------------
var week = 7

var CSV_Names_L = ["week_1_leaders.csv","week_2_leaders.csv","week_3_leaders.csv","week_4_leaders.csv","week_5_leaders.csv",
				   "week_6_leaders.csv","week_7_leaders.csv","week_8_leaders.csv","week_9_leaders.csv","week_10_leaders.csv",
				   "week_11_leaders.csv","week_12_leaders.csv","week_13_leaders.csv","week_14_leaders.csv","week_15_leaders.csv",
				   "week_16_leaders.csv","week_17_leaders.csv","week_18_leaders.csv","week_19_leaders.csv","week_20_leaders.csv"]

var AllWeeks_L

setTimeout(function(){ 
	ParseAll_L(week,CSV_Names_L);},100)

setTimeout(function(){ 	
	console.log(Week2_L);
	AllWeeks_L = CombineAllWeeks_L( week );
	console.log(AllWeeks_L);
	console.log('Finished Parsing Leaders');},400)

// Defining Functions
//-----------------------------------------------------------------

function GetAllWeeks_L(){
	return AllWeeks_L
}

function ParseAll_L( week,names ){
	for( var i = 0; i < week; i++ ){
		NowParse_L(i,names)
	}
}

function ParseData_L( CallBack, file, Week_Mat){
	Papa.parse(file, {
		download: true,
		header: false,
		dynamicTyping: true,
		complete: function(results) {
			CallBack(results.data,Week_Mat)
		}
	})
}

function CollectData_L( data, mat ) {
	for (var i = 0; i < 24; i++) {
		mat.push( data[i] )
	}
}

function GetWeekNumber_L(){
	return week
}

function NowParse_L(index,file) {
	name = file
	filename = '../CSV Files/'+name
	if(index === 0){
		ParseData_L( CollectData_L,filename,Week1_L)
	}
	if(index === 1){
		ParseData_L( CollectData_L,filename,Week2_L)
	}
	if(index === 2){
		ParseData_L( CollectData_L,filename,Week3_L)
	}
	if(index === 3){
		ParseData_L( CollectData_L,filename,Week4_L)
	}
	if(index === 4){
		ParseData_L( CollectData_L,filename,Week5_L)
	}	
	if(index === 5){
		ParseData_L( CollectData_L,filename,Week6_L)
	}
	if(index === 6){
		ParseData_L( CollectData_L,filename,Week7_L)
	}
	if(index === 7){
		ParseData_L( CollectData_L,filename,Week8_L)
	}
	if(index === 8){
		ParseData_L( CollectData_L,filename,Week9_L)
	}
	if(index === 9){
		ParseData_L( CollectData_L,filename,Week10_L)
	}
	if(index === 10){
		ParseData_L( CollectData_L,filename,Week11_L)
	}
	if(index === 11){
		ParseData_L( CollectData_L,filename,Week12_L)
	}
	if(index === 12){
		ParseData_L( CollectData_L,filename,Week13_L)
	}
	if(index === 13){
		ParseData_L( CollectData_L,filename,Week14_L)
	}
	if(index === 14){
		ParseData_L( CollectData_L,filename,Week15_L)
	}	
	if(index === 15){
		ParseData_L( CollectData_L,filename,Week16_L)
	}
	if(index === 16){
		ParseData_L( CollectData_L,filename,Week17_L)
	}
	if(index === 17){
		ParseData_L( CollectData_L,filename,Week18_L)
	}
	if(index === 18){
		ParseData_L( CollectData_L,filename,Week19_L)
	}
	if(index === 19){
		ParseData_L( CollectData_L,filename,Week20_L)
	}
	
}

function CombineAllWeeks_L(week){
	var AllWeeks = []
	for( var i = 0; i < week ;i++ ){
		if(i==0){
			AllWeeks.push(Week1_L)
		}
		if(i==1){
			AllWeeks.push(Week2_L)
		}
		if(i==2){
			AllWeeks.push(Week3_L)
		}
		if(i==3){
			AllWeeks.push(Week4_L)
		}
		if(i==4){
			AllWeeks.push(Week5_L)
		}
		if(i==5){
			AllWeeks.push(Week6_L)
		}
		if(i==6){
			AllWeeks.push(Week7_L)
		}
		if(i==7){
			AllWeeks.push(Week8_L)
		}
		if(i==8){
			AllWeeks.push(Week9_L)
		}
		if(i==9){
			AllWeeks.push(Week10_L)
		}
		if(i==10){
			AllWeeks.push(Week11_L)
		}
		if(i==11){
			AllWeeks.push(Week12_L)
		}
		if(i==12){
			AllWeeks.push(Week13_L)
		}
		if(i==13){
			AllWeeks.push(Week14_L)
		}
		if(i==14){
			AllWeeks.push(Week15_L)
		}
		if(i==15){
			AllWeeks.push(Week16_L)
		}
		if(i==16){
			AllWeeks.push(Week17_L)
		}
		if(i==17){
			AllWeeks.push(Week18_L)
		}
		if(i==18){
			AllWeeks.push(Week19_L)
		}
		if(i==19){
			AllWeeks.push(Week20_L)
		}
	}
	return AllWeeks
}