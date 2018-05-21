// Setting all the Initial Components
//----------------------------------------------------------------
var TeamNames = ['Cokeland Player Haters','New Hampshire Thunder Catz','Dicks Out for TROUT','Easy Game Easy Life','The Tall Sexy Tyrion','The Vallejo Dumpster Fires',
				 'Confortobly Numb','Minnesota Islanders','Ozuna Matata','Ctrl Altuve Delete','Johto Hoe-Ohs','Ventura County Gulls']

var TeamPics = ['Will Pic.png','Clint Pic.png','Brian Pic.png','Daniel Pic.png','Mike Pic.png','Cullen Pic.png',
				'Charlie Pic.png','Allen Pic.png','Josh Pic.png','Matt Pic.png','McD Pic.png','Nate Pic.png']

var ImgId = ['1_img','2_img','3_img','4_img','5_img','6_img','7_img','8_img','9_img','10_img','11_img','12_img','13_img','14_img','15_img']

var Top5Id = [['t5_1_w','t5_1_m','t5_1_c','t5_1_o','t5_1_l'],
			  ['t5_2_w','t5_2_m','t5_2_c','t5_2_o','t5_2_l'],
			  ['t5_3_w','t5_3_m','t5_3_c','t5_3_o','t5_3_l'],
			  ['t5_4_w','t5_4_m','t5_4_c','t5_4_o','t5_4_l'],
			  ['t5_5_w','t5_5_m','t5_5_c','t5_5_o','t5_5_l']]

var Top6_15Id = ['t15_6','t15_7','t15_8','t15_9','t15_10','t15_11','t15_12','t15_13','t15_14','t15_15']

var week 
var All_Tops
var Top_15

setTimeout(function(){ 
    week = GetWeekNumber_TL();
    console.log("Display | week",week);
    All_Tops = GetAll_Top();
    console.log("Display | AllTop",All_Tops);
    Top_15 = GetTop15();
    console.log("Display | Top15",Top_15);
	DisplayTop15(Top_15);
	console.log("Finished Getting For Display");}, 800)

// Defining Functions
//-----------------------------------------------------------------

function DisplayTop15(top15){
	for(var i = 0 ; i < 15 ; i++){
		IMGid = ImgId[i]
		team_img = TeamImage(TeamNames,top15[i][0])
		document.getElementById(IMGid).src='.../Team Images/'+team_img
		if( i <= 4 ){
			week_tag     = Top5Id[i][0]
			week_str     = top15[i][1].toString()
			matchup_tag  = Top5Id[i][1]
			matchup_str  = top15[i][2]
			category_tag = Top5Id[i][2]
			category_str = top15[i][3]
			opponent_tag = Top5Id[i][3]
			opponent_str = top15[i][4]
			line_tag     = Top5Id[i][4]
			line_str     = top15[i][5]
			document.getElementById(week_tag).innerHTML = week_str
			document.getElementById(matchup_tag).innerHTML = matchup_str
			document.getElementById(category_tag).innerHTML = category_str
			document.getElementById(opponent_tag).innerHTML = opponent_str
			document.getElementById(line_tag).innerHTML = line_str
		}
		if( i > 4){
			top15_tag    = Top6_15Id[i-5]
			week_str     = top15[i][1].toString()
			matchup_str  = top15[i][2]
			category_str = top15[i][3]
			final_string = week_str+' '+matchup_str+' '+category_str
			document.getElementById(top15_tag).innerHTML = final_string
		}
	}
}

function TeamImage(teamnames,string){
	for(var i = 0; i < 12; i++){
		if( string === teamnames[i] ){
			return TeamPics[i]
		}
	}
}
