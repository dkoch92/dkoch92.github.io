// Creating Empty Matrices
//----------------------------------------------------------------
Test_Leaders = [
['Nate','Clint','Nate'],				
[55,53,52]	,		
['Allen','Will','Josh','Will','Nate','Brian']	,
[19,	18, '  ',	  	17	 ,'  ','  '	 ]		,	
['Daniel',	'Daniel',	'Clint',	'Will',	'Daniel'	,'Mike',	'Charlie',	'Allen'	,'Matt'],
[56,	54, '  ',	 	50,'  ','  ','  ','  ','  ']	, 	 	 	 	 
['Will',	'McD',	'McD',	'Josh',	'Cullen',	'Nate']	,		
[13,	11,	10,'  ','  ','  '],
['Brian',	'Allen',	'Will'],
[0.4188,0.405,	0.4],
['Allen',	'Josh',	'Will'],
[0.6612,	0.6008,	0.5797]
] 	

Test_Places = [
[1,1,1],
[1,2,3],
[1,2,6],
[1,1,4],
[1,1,1],
[1,1,1]] 	 			



// Setting all the Initial Components
//----------------------------------------------------------------

var Leader_Pics = ['L_1.png','L_2.png','L_3.png','L_4.png','L_5.png','L_6.png']
var Leader_Left = ['0px','168px','336px', '504px','672px','840px']

var H_id = [['H1_1','H1_2','H1_3'],['H2_1','H2_2','H2_3'],['H3_1','H3_2','H3_3'],['H4_1','H4_2','H4_3'],['H5_1','H5_2','H5_3'],['H6_1','H6_2','H6_3']]
var h_id = [['h1_1','h1_2','h1_3'],['h2_1','h2_2','h2_3'],['h3_1','h3_2','h3_3'],['h4_1','h4_2','h4_3'],['h5_1','h5_2','h5_3'],['h6_1','h6_2','h6_3']]

var P_id = [['P1_1','P1_2','P1_3'],['P2_1','P2_2','P2_3'],['P3_1','P3_2','P3_3'],['P4_1','P4_2','P4_3'],['P5_1','P5_2','P5_3'],['P6_1','P6_2','P6_3']]
var p_id = [['p1_1','p1_2','p1_3'],['p2_1','p2_2','p2_3'],['p3_1','p3_2','p3_3'],['p4_1','p4_2','p4_3'],['p5_1','p5_2','p5_3'],['p6_1','p6_2','p6_3']]

var place_color = ['rgba(212,175,55,.45)','rgba(192,192,192,.45)','rgba(205,127,50,.45)']

var H_array = CreateTextId('H')
var P_array = CreateTextId('P')

var AllWeeks
var AllPlaces

setTimeout(function(){ 
	AllWeeks = GetAllWeeks_L();
	console.log(AllWeeks);
	AllPlaces = GetAllPlaces_L();
	console.log(AllPlaces);
	Text_Display(AllWeeks_L[0],H_array,P_array);
	CreateDisplay(AllPlaces[0])
	console.log('finished display');}, 400)


// Defining Functions
//-----------------------------------------------------------------

function Text_Display(lead,h_id,p_id){
	for(var i = 0; i < 24; i++){
		for(var j = 0; j < lead[i].length ;j++){
			if(i < 12){
				text_tag = h_id[i][j]
			}else{
				text_tag = p_id[i][j]
			}
			document.getElementById(text_tag).innerHTML = lead[i][j]
		}
	}
}

function CreateTextId(letter){
	var id_array = []
	for(var i = 1; i < 7;i++){
		for(var j = 1; j < 3;j++){
			row = []
			for(var k = 1; k < 10; k++){
				row.push( 'text_'+letter+i.toString()+k.toString()+'_'+j.toString() )
			}
			id_array.push( row )
		}
	}
	return id_array
}

function CreateDisplay(Places){
	var total_length = 0
	var total_top = 0
	for(var i = 0; i < 12;i++){
		if((i===0)||(i===6)){
			total_length = 0
			total_top = 0
		}
		for(var j = 0; j < 3; j++){
			length = Places[i][j]
			top_px = total_top.toString()+'px'
			total_length = total_length + length
			cell_height = (length*36).toString()+'px'
			total_top = total_top + length*36
			if(i < 6){
				cell_tag = H_id[i][j]
				img_tag = h_id[i][j]
			}else{
				cell_tag = P_id[i][j]
				img_tag = p_id[i][j]
			}
			cell_child_tag = cell_tag+'_color'
			document.getElementById(cell_tag).style.height = cell_height
			document.getElementById(cell_tag).style.top = top_px
			document.getElementById(cell_tag).style.left = Leader_Left[i]
			document.getElementById(cell_tag).style.background = place_color[j]
			document.getElementById(cell_child_tag).style.position = 'absolute'
			document.getElementById(cell_child_tag).style.height = '100%'
			document.getElementById(cell_child_tag).style.width = '100%'
			document.getElementById(cell_child_tag).style.background = place_color[j]
			document.getElementById(img_tag).src = Leader_Pics[length-1]
		}
	}
}

function Test_H_Display(){
	for(var i = 0; i < 6;i++){
		var total_length = 0
		var total_top = 0
		for(var j = 0; j < 3; j++){
			length = Test_Places[i][j]
			top_px = total_top.toString()+'px'
			total_length = total_length + length
			cell_height = (length*36).toString()+'px'
			total_top = total_top + length*36
			cell_tag = H_id[i][j]
			cell_child_tag = cell_tag+'_color'
			img_tag = h_id[i][j]
			document.getElementById(cell_tag).style.height = cell_height
			document.getElementById(cell_tag).style.top = top_px
			document.getElementById(cell_tag).style.left = Leader_Left[i]
			document.getElementById(cell_tag).style.background = place_color[j]
			document.getElementById(cell_child_tag).style.position = 'absolute'
			document.getElementById(cell_child_tag).style.height = '100%'
			document.getElementById(cell_child_tag).style.width = '100%'
			document.getElementById(cell_child_tag).style.background = place_color[j]
			document.getElementById(img_tag).src = Leader_Pics[length-1]
		}
	}
}
