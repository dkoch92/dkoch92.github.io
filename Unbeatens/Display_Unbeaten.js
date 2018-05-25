// Setting all the Initial Components
//----------------------------------------------------------------
var U_id = U_CreateId('U')
var B_id = U_CreateId('B')

var week
var All_U
var All_B

setTimeout(function(){ 
	week = GetWeekNumber_U();
	All_U = GetAllWeeks_U();
	All_B = GetAllWeeks_B();
	console.log('All U',All_U);
	console.log('All U',All_U);}, 400)

setTimeout(function(){ 
	U_DisplayColors(All_U[4],U_id);
	B_DisplayColors(All_B[4],B_id);}, 500)



// Defining Functions
//-----------------------------------------------------------------

function U_CreateId(letter){
	id_array = []
	for(var i = 0; i < 12; i++){
		row = []
		for(var j = 0; j < 12 ; j++){
			row.push( letter+'_'+(i+1)+'_'+(j+1) )
		}
		id_array.push(row)
	}
	return id_array
}

function U_DisplayColors(Mat,id){
	for(var i = 0; i < 12; i++){
		for(var j = 0; j < 12 ; j++){
			stat_tag = id[i][j]
			if( Mat[i][j] === 0 ){
				rbga_color = 'rgba('+(127).toString()+','+(223).toString()+','+(111).toString()+',.25)'
			}else{
				rbga_color = 'rgba('+(243).toString()+','+(132).toString()+','+(41).toString()+','+(0.18 - Mat[i][j]*.02 ).toString()+')'
			}
			document.getElementById(stat_tag).style.background = rbga_color
		}
	}
}

function B_DisplayColors(Mat,id){
	for(var i = 0; i < 12; i++){
		for(var j = 0; j < 12 ; j++){
			stat_tag = id[i][j]
			if( Mat[i][j] === 0 ){
				rbga_color = 'rgba('+(243).toString()+','+(132).toString()+','+(41).toString()+',.25)'
			}else{
				rbga_color = 'rgba('+(127).toString()+','+(223).toString()+','+(111).toString()+','+(0.02 + Mat[i][j]*.02 ).toString()+')'
			}
			document.getElementById(stat_tag).style.background = rbga_color
		}
	}
}