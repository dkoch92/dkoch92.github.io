var Week1_L = []
var Week2_L = []
var Week3_L = []
var Week4_L = []
var Week5_L = []
var Week6_L = []
var Week7_L = []
var Week8_L = []
var Week9_L = []
var Week10_L = []
var Week11_L = []
var Week12_L = []
var Week13_L = []
var Week14_L = []
var Week15_L = []
var Week16_L = []
var Week17_L = []
var Week18_L = []
var Week19_L = []
var Week20_L = []
var Season_L = []

var Week1_Places = []
var Week2_Places = []
var Week3_Places = []
var Week4_Places = []
var Week5_Places = []
var Week6_Places = []
var Week7_Places = []
var Week8_Places = []
var Week9_Places = []
var Week10_Places = []
var Week11_Places = []
var Week12_Places = []
var Week13_Places = []
var Week14_Places = []
var Week15_Places = []
var Week16_Places = []
var Week17_Places = []
var Week18_Places = []
var Week19_Places = []
var Week20_Places = []
var Season_Places = []


//  Setting all the Initial Components
//----------------------------------------------------------------
var week = 7

var CSV_Names_L = ["week_1_leaders.csv","week_2_leaders.csv","week_3_leaders.csv","week_4_leaders.csv","week_5_leaders.csv",
				   "week_6_leaders.csv","week_7_leaders.csv","week_8_leaders.csv","week_9_leaders.csv","week_10_leaders.csv",
				   "week_11_leaders.csv","week_12_leaders.csv","week_13_leaders.csv","week_14_leaders.csv","week_15_leaders.csv",
				   "week_16_leaders.csv","week_17_leaders.csv","week_18_leaders.csv","week_19_leaders.csv","week_20_leaders.csv","season_leaders.csv"]

var AllWeeks_L
var AllPlaces_L

setTimeout(function(){ 
	ParseAll_L(week,CSV_Names_L);},100)

setTimeout(function(){ 	
	AllWeeks_L = CombineAllWeeks_L( week );
	AllPlaces_L = CombineAllPlaces_L(week); },200)

// Defining Functions
//-----------------------------------------------------------------

function GetAllWeeks_L(){
	return AllWeeks_L
}

function GetAllPlaces_L(){
	return AllPlaces_L
}

function ParseAll_L( week,names ){
	for( var i = 0; i < week; i++ ){
		NowParse_L(i,names)
	}
	NowParse_L(20,names)
}

function ParseData_L( CallBack, file, Week_Mat, Place_Mat){
	Papa.parse(file, {
		download: true,
		header: false,
		dynamicTyping: true,
		complete: function(results) {
			CallBack(results.data,Week_Mat,Place_Mat)
		}
	})
}

function CollectData_L( data, mat1, mat2 ) {
	for (var i = 0; i < 36; i++) {
		if( i < 24 ){
			mat1.push( data[i] )
		}
		else{
			mat2.push( data[i] )
		}
	}
}

function GetWeekNumber_L(){
	return week
}

function NowParse_L(index,file) {
	name = file[index]
	filename = '../CSV Files/'+name
	if(index === 0){
		ParseData_L( CollectData_L,filename,Week1_L,Week1_Places)
	}
	if(index === 1){
		ParseData_L( CollectData_L,filename,Week2_L,Week2_Places)
	}
	if(index === 2){
		ParseData_L( CollectData_L,filename,Week3_L,Week3_Places)
	}
	if(index === 3){
		ParseData_L( CollectData_L,filename,Week4_L,Week4_Places)
	}
	if(index === 4){
		ParseData_L( CollectData_L,filename,Week5_L,Week5_Places)
	}	
	if(index === 5){
		ParseData_L( CollectData_L,filename,Week6_L,Week6_Places)
	}
	if(index === 6){
		ParseData_L( CollectData_L,filename,Week7_L,Week7_Places)
	}
	if(index === 7){
		ParseData_L( CollectData_L,filename,Week8_L,Week8_Places)
	}
	if(index === 8){
		ParseData_L( CollectData_L,filename,Week9_L,Week9_Places)
	}
	if(index === 9){
		ParseData_L( CollectData_L,filename,Week10_L,Week10_Places)
	}
	if(index === 10){
		ParseData_L( CollectData_L,filename,Week11_L,Week11_Places)
	}
	if(index === 11){
		ParseData_L( CollectData_L,filename,Week12_L,Week12_Places)
	}
	if(index === 12){
		ParseData_L( CollectData_L,filename,Week13_L,Week13_Places)
	}
	if(index === 13){
		ParseData_L( CollectData_L,filename,Week14_L,Week14_Places)
	}
	if(index === 14){
		ParseData_L( CollectData_L,filename,Week15_L,Week15_Places)
	}	
	if(index === 15){
		ParseData_L( CollectData_L,filename,Week16_L,Week16_Places)
	}
	if(index === 16){
		ParseData_L( CollectData_L,filename,Week17_L,Week17_Places)
	}
	if(index === 17){
		ParseData_L( CollectData_L,filename,Week18_L,Week18_Places)
	}
	if(index === 18){
		ParseData_L( CollectData_L,filename,Week19_L,Week19_Places)
	}
	if(index === 19){
		ParseData_L( CollectData_L,filename,Week20_L,Week20_Places)
	}
	if(index === 20){
		ParseData_L( CollectData_L,filename,Season_L,Season_Places)
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
	AllWeeks.push(Season_L)
	return AllWeeks
}

function CombineAllPlaces_L(week){
	var AllPlaces = []
	for( var i = 0; i < week ;i++ ){
		if(i==0){
			AllPlaces.push(Week1_Places)
		}
		if(i==1){
			AllPlaces.push(Week2_Places)
		}
		if(i==2){
			AllPlaces.push(Week3_Places)
		}
		if(i==3){
			AllPlaces.push(Week4_Places)
		}
		if(i==4){
			AllPlaces.push(Week5_Places)
		}
		if(i==5){
			AllPlaces.push(Week6_Places)
		}
		if(i==6){
			AllPlaces.push(Week7_Places)
		}
		if(i==7){
			AllPlaces.push(Week8_Places)
		}
		if(i==8){
			AllPlaces.push(Week9_Places)
		}
		if(i==9){
			AllPlaces.push(Week10_Places)
		}
		if(i==10){
			AllPlaces.push(Week11_Places)
		}
		if(i==11){
			AllPlaces.push(Week12_Places)
		}
		if(i==12){
			AllPlaces.push(Week13_Places)
		}
		if(i==13){
			AllPlaces.push(Week14_Places)
		}
		if(i==14){
			AllPlaces.push(Week15_Places)
		}
		if(i==15){
			AllPlaces.push(Week16_Places)
		}
		if(i==16){
			AllPlaces.push(Week17_Places)
		}
		if(i==17){
			AllPlaces.push(Week18_Places)
		}
		if(i==18){
			AllPlaces.push(Week19_Places)
		}
		if(i==19){
			AllPlaces.push(Week20_Places)
		}
	}
	AllPlaces.push(Season_Places)
	return AllPlaces
}