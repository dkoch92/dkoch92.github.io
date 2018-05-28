var Week1_U = []
var Week2_U = []
var Week3_U = []
var Week4_U = []
var Week5_U = []
var Week6_U = []
var Week7_U = []
var Week8_U = []
var Week9_U = []
var Week10_U = []
var Week11_U = []
var Week12_U = []
var Week13_U = []
var Week14_U = []
var Week15_U = []
var Week16_U = []
var Week17_U = []
var Week18_U = []
var Week19_U = []
var Week20_U = []

var Week1_B = []
var Week2_B = []
var Week3_B = []
var Week4_B = []
var Week5_B = []
var Week6_B = []
var Week7_B = []
var Week8_B = []
var Week9_B = []
var Week10_B = []
var Week11_B = []
var Week12_B = []
var Week13_B = []
var Week14_B = []
var Week15_B = []
var Week16_B = []
var Week17_B = []
var Week18_B = []
var Week19_B = []
var Week20_B = []


//  Setting all the Initial Components
//----------------------------------------------------------------
var week = 99
ParseWeek( CollectWeek,week )

var CSV_Names_U = ["week_1_unbeaten.csv","week_2_unbeaten.csv","week_3_unbeaten.csv","week_4_unbeaten.csv","week_5_unbeaten.csv",
				   "week_6_unbeaten.csv","week_7_unbeaten.csv","week_8_unbeaten.csv","week_9_unbeaten.csv","week_10_unbeaten.csv",
				   "week_11_unbeaten.csv","week_12_unbeaten.csv","week_13_unbeaten.csv","week_14_unbeaten.csv","week_15_unbeaten.csv",
				   "week_16_unbeaten.csv","week_17_unbeaten.csv","week_18_unbeaten.csv","week_19_unbeaten.csv","week_20_unbeaten.csv"]

var AllWeeks_U
var AllWeeks_B

setTimeout(function(){ 
	ParseAll_U(week,CSV_Names_U);},100)

setTimeout(function(){ 	
	AllWeeks_U = CombineAllWeeks_U(week);
	AllWeeks_B = CombineAllWeeks_B(week); },200)

// Defining Functions
//-----------------------------------------------------------------

function ParseWeek( CallBack,int ){
	Papa.parse('../CSV Files/Week.csv', {
		download: true,
		header: false,
		dynamicTyping: true,
		complete: function(results) {
			CallBack(results.data,int)
		}
	})
}

function CollectWeek(data,w){
	w = data[0][0]
	week = data[0][0]
}


function GetAllWeeks_U(){
	return AllWeeks_U
}

function GetAllWeeks_B(){
	return AllWeeks_B
}

function ParseAll_U( week,names ){
	for( var i = 0; i < week; i++ ){
		NowParse_U(i,names)
	}
	NowParse_U(20,names)
}

function ParseData_U( CallBack, file, WeekU_Mat, WeekB_Mat){
	Papa.parse(file, {
		download: true,
		header: false,
		dynamicTyping: true,
		complete: function(results) {
			CallBack(results.data,WeekU_Mat,WeekB_Mat)
		}
	})
}

function CollectData_U( data, mat1, mat2 ) {
	for (var i = 0; i < 24; i++) {
		if( i < 12 ){
			mat1.push( data[i] )
		}
		else{
			mat2.push( data[i] )
		}
	}
}

function GetWeekNumber_U(){
	return week
}

function NowParse_U(index,files) {
	name = files[index]
	filename = '../CSV Files/'+name
	if(index === 0){
		ParseData_U( CollectData_U,filename,Week1_U,Week1_B)
	}
	if(index === 1){
		ParseData_U( CollectData_U,filename,Week2_U,Week2_B)
	}
	if(index === 2){
		ParseData_U( CollectData_U,filename,Week3_U,Week3_B)
	}
	if(index === 3){
		ParseData_U( CollectData_U,filename,Week4_U,Week4_B)
	}
	if(index === 4){
		ParseData_U( CollectData_U,filename,Week5_U,Week5_B)
	}	
	if(index === 5){
		ParseData_U( CollectData_U,filename,Week6_U,Week6_B)
	}
	if(index === 6){
		ParseData_U( CollectData_U,filename,Week7_U,Week7_B)
	}
	if(index === 7){
		ParseData_U( CollectData_U,filename,Week8_U,Week8_B)
	}
	if(index === 8){
		ParseData_U( CollectData_U,filename,Week9_U,Week9_B)
	}
	if(index === 9){
		ParseData_U( CollectData_U,filename,Week10_U,Week10_B)
	}
	if(index === 10){
		ParseData_U( CollectData_U,filename,Week11_U,Week11_B)
	}
	if(index === 11){
		ParseData_U( CollectData_U,filename,Week12_U,Week12_B)
	}
	if(index === 12){
		ParseData_U( CollectData_U,filename,Week13_U,Week13_B)
	}
	if(index === 13){
		ParseData_U( CollectData_U,filename,Week14_U,Week14_B)
	}
	if(index === 14){
		ParseData_U( CollectData_U,filename,Week15_U,Week15_B)
	}	
	if(index === 15){
		ParseData_U( CollectData_U,filename,Week16_U,Week16_B)
	}
	if(index === 16){
		ParseData_U( CollectData_U,filename,Week17_U,Week17_B)
	}
	if(index === 17){
		ParseData_U( CollectData_U,filename,Week18_U,Week18_B)
	}
	if(index === 18){
		ParseData_U( CollectData_U,filename,Week19_U,Week19_B)
	}
	if(index === 19){
		ParseData_U( CollectData_U,filename,Week20_U,Week20_B)
	}
}

function CombineAllWeeks_U(week){
	var AllWeeks = []
	for( var i = 0; i < week ;i++ ){
		if(i==0){
			AllWeeks.push(Week1_U)
		}
		if(i==1){
			AllWeeks.push(Week2_U)
		}
		if(i==2){
			AllWeeks.push(Week3_U)
		}
		if(i==3){
			AllWeeks.push(Week4_U)
		}
		if(i==4){
			AllWeeks.push(Week5_U)
		}
		if(i==5){
			AllWeeks.push(Week6_U)
		}
		if(i==6){
			AllWeeks.push(Week7_U)
		}
		if(i==7){
			AllWeeks.push(Week8_U)
		}
		if(i==8){
			AllWeeks.push(Week9_U)
		}
		if(i==9){
			AllWeeks.push(Week10_U)
		}
		if(i==10){
			AllWeeks.push(Week11_U)
		}
		if(i==11){
			AllWeeks.push(Week12_U)
		}
		if(i==12){
			AllWeeks.push(Week13_U)
		}
		if(i==13){
			AllWeeks.push(Week14_U)
		}
		if(i==14){
			AllWeeks.push(Week15_U)
		}
		if(i==15){
			AllWeeks.push(Week16_U)
		}
		if(i==16){
			AllWeeks.push(Week17_U)
		}
		if(i==17){
			AllWeeks.push(Week18_U)
		}
		if(i==18){
			AllWeeks.push(Week19_U)
		}
		if(i==19){
			AllWeeks.push(Week20_U)
		}
	}
	return AllWeeks
}

function CombineAllWeeks_B(week){
	var AllWeeks = []
	for( var i = 0; i < week ;i++ ){
		if(i==0){
			AllWeeks.push(Week1_B)
		}
		if(i==1){
			AllWeeks.push(Week2_B)
		}
		if(i==2){
			AllWeeks.push(Week3_B)
		}
		if(i==3){
			AllWeeks.push(Week4_B)
		}
		if(i==4){
			AllWeeks.push(Week5_B)
		}
		if(i==5){
			AllWeeks.push(Week6_B)
		}
		if(i==6){
			AllWeeks.push(Week7_B)
		}
		if(i==7){
			AllWeeks.push(Week8_B)
		}
		if(i==8){
			AllWeeks.push(Week9_B)
		}
		if(i==9){
			AllWeeks.push(Week10_B)
		}
		if(i==10){
			AllWeeks.push(Week11_B)
		}
		if(i==11){
			AllWeeks.push(Week12_B)
		}
		if(i==12){
			AllWeeks.push(Week13_B)
		}
		if(i==13){
			AllWeeks.push(Week14_B)
		}
		if(i==14){
			AllWeeks.push(Week15_B)
		}
		if(i==15){
			AllWeeks.push(Week16_B)
		}
		if(i==16){
			AllWeeks.push(Week17_B)
		}
		if(i==17){
			AllWeeks.push(Week18_B)
		}
		if(i==18){
			AllWeeks.push(Week19_B)
		}
		if(i==19){
			AllWeeks.push(Week20_B)
		}
	}
	return AllWeeks
}
