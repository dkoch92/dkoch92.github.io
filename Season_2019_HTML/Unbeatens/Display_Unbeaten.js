// Setting all the Initial Components
//----------------------------------------------------------------
var U_id = U_CreateId('U')
var B_id = U_CreateId('B')

var Week_Titles = ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9','Week 10'
                  ,'Week 11','Week 12','Week 13','Week 14','Week 15','Week 16','Week 17','Week 18','Week 19','Week 20']


var week
var All_U
var All_B

setTimeout(function(){ 
	week = GetWeekNumber_U();
	All_U = GetAllWeeks_U();
	All_B = GetAllWeeks_B();
	console.log('Display AllWeeks_U',AllWeeks_U);
	console.log('Display AllWeeks_B',AllWeeks_B) }, 400)

setTimeout(function(){ 
	U_DisplayColors(All_U[week-1],U_id);
	B_DisplayColors(All_B[week-1],B_id);
	DisplayWeekTitle(week,'U');
	DisplayWeekTitle(week,'B')}, 500)



// Defining Functions
//-----------------------------------------------------------------

function U_CreateId(letter){
	id_array = []
	for(var i = 0; i < 14; i++){
		row = []
		for(var j = 0; j < 12 ; j++){
			row.push( letter+'_'+(i+1)+'_'+(j+1) )
		}
		id_array.push(row)
	}
	return id_array
}

function DisplayWeekTitle(w,letter){
	title_tag = letter+'_title'
	title_string = Week_Titles[w-1]
	document.getElementById(title_tag).innerHTML = title_string
}

function U_DisplayColors(Mat,id){
	for(var i = 0; i < 14; i++){
		for(var j = 0; j < 12 ; j++){
			stat_tag = id[i][j]
			if( Mat[i][j] === 0 ){
				rbga_color = 'rgba('+(127).toString()+','+(223).toString()+','+(111).toString()+',.8)'
			}else{
				rbga_color = 'rgba('+(243).toString()+','+(132).toString()+','+(41).toString()+','+( .8 - 0.08*Mat[i][j]).toString()+')'
			}
			document.getElementById(stat_tag).style.background = rbga_color
		}
	}
}

function B_DisplayColors(Mat,id){
	for(var i = 0; i < 14; i++){
		for(var j = 0; j < 12 ; j++){
			stat_tag = id[i][j]
			if( Mat[i][j] > 0 ){
				rbga_color = 'rgba('+(127).toString()+','+(223).toString()+','+(111).toString()+','+(  0.08*Mat[i][j] ).toString()+')'
			}else{
				rbga_color = 'rgba('+(243).toString()+','+(132).toString()+','+(41).toString()+',.8)'
			}
			document.getElementById(stat_tag).style.background = rbga_color
		}
	}
}

function DisplayWeek_U(w){
	if(w <= week){
		U_DisplayColors(All_U[w-1],U_id)
		DisplayWeekTitle(w,'U')
	}
	else{
		U_DisplayColors(All_U[week-1],U_id)
		DisplayWeekTitle(week,'U')
	}
}

function DisplayWeek_B(w){
	if(w <= week){
		B_DisplayColors(All_B[w-1],B_id)
		DisplayWeekTitle(w,'B')
	}
	else{
		B_DisplayColors(All_B[week-1],B_id)
		DisplayWeekTitle(week,'B')
	}
}