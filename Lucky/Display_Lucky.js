// Setting all the Initial Components
//----------------------------------------------------------------
var Opp_Id = [['opp_1_W','opp_1_L','opp_1_T','opp_1w','opp_1l','opp_1t'],['opp_2_W','opp_2_L','opp_2_T','opp_2w','opp_2l','opp_2t'],['opp_3_W','opp_3_L','opp_3_T','opp_3w','opp_3l','opp_3t'],
              ['opp_4_W','opp_4_L','opp_4_T','opp_4w','opp_4l','opp_4t'],['opp_5_W','opp_5_L','opp_5_T','opp_5w','opp_5l','opp_5t'],['opp_6_W','opp_6_L','opp_6_T','opp_6w','opp_6l','opp_6t'],
              ['opp_7_W','opp_7_L','opp_7_T','opp_7w','opp_7l','opp_7t'],['opp_8_W','opp_8_L','opp_8_T','opp_8w','opp_8l','opp_8t'],['opp_9_W','opp_9_L','opp_9_T','opp_9w','opp_9l','opp_9t'],
              ['opp_10_W','opp_10_L','opp_10_T','opp_10w','opp_10l','opp_10t'],['opp_11_W','opp_11_L','opp_11_T','opp_11w','opp_11l','opp_11t'],['opp_12_W','opp_12_L','opp_12_T','opp_12w','opp_12l','opp_12t']]

var WP_H_id = Create_WP_Array('H')
var WP_P_id = Create_WP_Array('P')

var WP_avg_id = [["WP_avg_H11","WP_avg_H12"],["WP_avg_H21","WP_avg_H22"],["WP_avg_H31","WP_avg_H32"],["WP_avg_H41","WP_avg_H42"],["WP_avg_H51","WP_avg_H52"],["WP_avg_H61","WP_avg_H62"],
			     ["WP_avg_H71","WP_avg_H72"],["WP_avg_H81","WP_avg_H82"],["WP_avg_H91","WP_avg_H92"],["WP_avg_H101","WP_avg_H102"],["WP_avg_H111","WP_avg_H112"],["WP_avg_H121","WP_avg_H122"],
			     ["WP_avg_P11","WP_avg_P12"],["WP_avg_P21","WP_avg_P22"],["WP_avg_P31","WP_avg_P32"],["WP_avg_P41","WP_avg_P42"],["WP_avg_P51","WP_avg_P52"],["WP_avg_P61","WP_avg_P62"],
			     ["WP_avg_P71","WP_avg_P72"],["WP_avg_P81","WP_avg_P82"],["WP_avg_P91","WP_avg_P92"],["WP_avg_P101","WP_avg_P102"],["WP_avg_P111","WP_avg_P112"],["WP_avg_P121","WP_avg_P122"]]

var DisplayTeamBools = [false,false,false,false,false,false,false,false,false,false,false,true]
var DisplayOppBools  = [true,false,false,false,false,false,false,false,false,false,false,false]

var TeamPics = ['Will Pic.png','Clint Pic.png','Brian Pic.png','Daniel Pic.png','Mike Pic.png','Cullen Pic.png',
				'Charlie Pic.png','Allen Pic.png','Josh Pic.png','Matt Pic.png','McD Pic.png','Nate Pic.png']


var All_Records
var WP_Mat
var Opp_record
var WP_AVG

setTimeout(function(){ 
	WP_Mat     = Get_WP();
	Opp_Record = Get_Opp();
	WP_AVG = Create_AVG_WP(WP_Mat);
	All_Records = Get_AR();
	console.log(All_Records) } ,220)

setTimeout(function(){ 
    Display_Opp_Record(Opp_Record);
    Display_WP(WP_H_id,WP_P_id,WP_Mat);
    Display_WP_AVG(WP_AVG);
    DisplayAllRecords(DisplayTeamBools,DisplayOppBools); } ,400)

// Defining Functions
//-----------------------------------------------------------------


function Display_Opp_Record(Opp){
	for(var i = 0; i < 12; i++){
		for(var j = 0; j < 6; j++){
			stat_tag = Opp_Id[i][j]
			document.getElementById(stat_tag).innerHTML = Opp[i][j]
		}
	}
}



function Display_WP(h_array,p_array,wp){
	var rbga_string = 'rgba(200, 200, 200, 0)'
	for(var i = 0; i < 12; i++){
		for(var j = 0; j < 24; j++){
			if( (j%2)===0 ){
				if( wp[i][j] > wp[i][j+1] ){
					rbga_string = 'rgba(0, 200, 0, .15)'
				}
				if( wp[i][j] < wp[i][j+1] ){
					rbga_string = 'rgba(200, 0, 0, .15)'
				}
				if( wp[i][j] === wp[i][j+1] ){
					rbga_string = 'rgba(200, 200, 200, 0)'
				}
			}
			if( j < 12 ){
				stat_tag = h_array[i][j]
				document.getElementById(stat_tag).innerHTML = (Math.round(wp[i][j])).toString()
				document.getElementById(stat_tag).style.background = rbga_string
			}else{
				stat_tag = p_array[i][j-12]
				document.getElementById(stat_tag).innerHTML = (Math.round(wp[i][j])).toString()
				document.getElementById(stat_tag).style.background = rbga_string
			}
		}
	}
}

function Create_WP_Array(letter){
	id_array = []
	for(var i = 0; i < 12; i++){
		row = []
		team_string = (i+1).toString()
		for(var j = 0; j < 6; j++){
			stat_string = (j+1).toString()
			for(var k = 0; k<2; k++){
				percent_string = (k+1).toString()
				id = 'WP_'+team_string+'_'+letter+stat_string+percent_string
				row.push(id)
			}
		}
		id_array.push(row)
	}
	return id_array
}

function Create_AVG_WP(wp){
	var avg = []
	for(var i = 0; i < 12; i++){
		H_opp = 0
		H_cat = 0
		for(var j = 0; j < 6; j++ ){
				H_opp = H_opp + wp[i][2*j]
				H_cat = H_cat + wp[i][2*j+1]
		}
		H_opp_avg = Math.round(H_opp/6.0)
		H_cat_avg = Math.round(H_cat/6.0)
		avg.push( [ H_opp_avg,H_cat_avg ] )
	}
	for(var ii = 0; ii < 12; ii++){
		P_opp = 0
		P_cat = 0
		for(var jj = 6; jj < 12; jj++ ){
				P_opp = P_opp + wp[ii][2*jj]
				P_cat = P_cat + wp[ii][2*jj+1]
		}
		P_opp_avg = Math.round(P_opp/6.0)
		P_cat_avg = Math.round(P_cat/6.0)
		avg.push( [ P_opp_avg,P_cat_avg ] )
	}
	return avg
}


function Display_WP_AVG(avg){
	var rbga_string = 'rgba(200, 200, 200, 0)'
	for(var i = 0; i < 24; i++){
		for(var j = 0; j < 2; j++){
			if( j===0 ){
				if( avg[i][j] > avg[i][j+1] ){
					rbga_string = 'rgba(0, 200, 0, .15)'
				}
				if( avg[i][j] < avg[i][j+1] ){
					rbga_string = 'rgba(200, 0, 0, .15)'
				}
				if( avg[i][j] === avg[i][j+1] ){
					rbga_string = 'rgba(200, 200, 200, 0)'
				}
			}
			avg_tag = WP_avg_id[i][j]
			document.getElementById(avg_tag).innerHTML = avg[i][j]
			document.getElementById(avg_tag).style.background = rbga_string
		}
	}
}

function DisplayTeam_L(index){
	for(var i = 0; i < 12; i++){
		if( i === index){
			DisplayTeamBools[i] = true
		}else{
			DisplayTeamBools[i] = false
		}
	}
	DisplayAllRecords(DisplayTeamBools,DisplayOppBools)
}

function DisplayOpp_L(index){
	for(var i = 0; i < 12; i++){
		if( i === index){
			DisplayOppBools[i] = true
		}else{
			DisplayOppBools[i] = false
		}
	}
	DisplayAllRecords(DisplayTeamBools,DisplayOppBools)
}

function DisplayAllRecords(teams,opps){
	var team = 99
	var opp = 99
	for (var i = 0; i < 12; i++){
		if(teams[i] === true){
			team = i
		}
		if(opps[i] === true){
			opp = i
		}
	}
	console.log(All_Records)
	console.log(team)
	console.log(opp)
	document.getElementById('prompt_team_img').src='../Team Images/'+TeamPics[team]
	document.getElementById('prompt_opp_img').src='../Team Images/'+TeamPics[opp]
	document.getElementById('L_prompt_stats').innerHTML = All_Records[team][opp]
}
