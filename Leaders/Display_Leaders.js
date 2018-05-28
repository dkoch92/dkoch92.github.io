// Setting all the Initial Components
//----------------------------------------------------------------

var Leader_Pics = ['L_1.png','L_2.png','L_3.png','L_4.png','L_5.png','L_6.png']
var Leader_Left = ['0px','168px','336px', '504px','672px','840px']

var TeamPics = ['Will Pic.png','Clint Pic.png','Brian Pic.png','Daniel Pic.png','Mike Pic.png','Cullen Pic.png',
				'Charlie Pic.png','Allen Pic.png','Josh Pic.png','Matt Pic.png','McD Pic.png','Nate Pic.png']

var Week_Titles = ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9','Week 10'
                  ,'Week 11','Week 12','Week 13','Week 14','Week 15','Week 16','Week 17','Week 18','Week 19','Week 20']

var H_id = [['H1_1','H1_2','H1_3'],['H2_1','H2_2','H2_3'],['H3_1','H3_2','H3_3'],['H4_1','H4_2','H4_3'],['H5_1','H5_2','H5_3'],['H6_1','H6_2','H6_3']]
var h_id = [['h1_1','h1_2','h1_3'],['h2_1','h2_2','h2_3'],['h3_1','h3_2','h3_3'],['h4_1','h4_2','h4_3'],['h5_1','h5_2','h5_3'],['h6_1','h6_2','h6_3']]

var P_id = [['P1_1','P1_2','P1_3'],['P2_1','P2_2','P2_3'],['P3_1','P3_2','P3_3'],['P4_1','P4_2','P4_3'],['P5_1','P5_2','P5_3'],['P6_1','P6_2','P6_3']]
var p_id = [['p1_1','p1_2','p1_3'],['p2_1','p2_2','p2_3'],['p3_1','p3_2','p3_3'],['p4_1','p4_2','p4_3'],['p5_1','p5_2','p5_3'],['p6_1','p6_2','p6_3']]

var place_color = ['rgba(212,175,55,.45)','rgba(192,192,192,.45)','rgba(205,127,50,.45)']

var medal_teams = ['1_img','2_img','3_img','4_img','5_img','6_img','7_img','8_img','9_img','10_img','11_img','12_img']

var medal_id = [['g1','s1','b1'],['g2','s2','b2'],['g3','s3','b3'],['g4','s4','b4'],['g5','s5','b5'],['g6','s6','b6'],
				['g7','s7','b7'],['g8','s8','b8'],['g9','s9','b9'],['g10','s10','b10'],['g11','s11','b11'],['g12','s12','b12']]

var medal_PH = [['1_h','1_p'],['2_h','2_p'],['3_h','3_p'],['4_h','4_p'],['5_h','5_p'],['6_h','6_p'],
				['7_h','7_p'],['8_h','8_p'],['9_h','9_p'],['10_h','10_p'],['11_h','11_p'],['12_h','12_p']]

var H_array = CreateTextId('H')
var P_array = CreateTextId('P')

var AllWeeks
var AllPlaces
var week
var Medals
var medals_ranked

setTimeout(function(){ 
	week = GetWeekNumber_L()
	AllWeeks = GetAllWeeks_L();
	AllPlaces = GetAllPlaces_L();
	Medals = GetMedalCount();
	DisplaySeasonLeader();
	medals_ranked = RankMedalCount(Medals);
	DisplayMedalCount(medals_ranked,Medals);}, 450)


// Defining Functions
//-----------------------------------------------------------------

function Text_Display(lead,h_tag,p_tag){
	for(var i = 0; i < 24; i++){
		for(var j = 0; j < 9 ;j++){
			if(i < 12){
				text_tag = h_tag[i][j]
			}else{
				text_tag = p_tag[i-12][j]
			}
			if( j < lead[i].length){
				document.getElementById(text_tag).innerHTML = lead[i][j]
			}
			else{
				document.getElementById(text_tag).innerHTML = '   '
			}
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
		total_length = 0
		total_top = 0
		for(var j = 0; j < 3; j++){
			length = Places[i][j]
			top_px = total_top.toString()+'px'
			total_length = total_length + length
			cell_height = (length*36).toString()+'px'
			total_top = total_top + length*36
			if(i < 6){
				cell_tag = H_id[i][j]
				img_tag = h_id[i][j]
				document.getElementById(cell_tag).style.left = Leader_Left[i]
			}else{
				cell_tag = P_id[i-6][j]
				img_tag = p_id[i-6][j]
				document.getElementById(cell_tag).style.left = Leader_Left[i-6]
			}
			cell_child_tag = cell_tag+'_color'
			document.getElementById(cell_tag).style.height = cell_height
			document.getElementById(cell_tag).style.top = top_px
			document.getElementById(cell_child_tag).style.position = 'absolute'
			document.getElementById(cell_child_tag).style.height = '100%'
			document.getElementById(cell_child_tag).style.width = '100%'
			if( length !== 0){
				document.getElementById(cell_child_tag).style.background = place_color[j]
				document.getElementById(img_tag).src = Leader_Pics[length-1]
				document.getElementById(cell_tag).style.border='2px solid black';
			}else{
				document.getElementById(cell_child_tag).style.background = 'rgba(212,175,55,0)'
				document.getElementById(img_tag).src = '../Team Images/Blank Pic.png'
				document.getElementById(cell_tag).style.border='0px solid black';
			}
		}
	}
}

function RankMedalCount(medals){
	var rank = []
	var total_medals = [0,0,0,0,0,0,0,0,0,0,0,0]
	for(var i = 0; i < 12; i++){
		total_medals[i] = medals[i][0]+ medals[i][1] + medals[i][2]
	}
	for(var j = 0; j <12; j++){
		var top = 99
		var top_medals = 0
		for(var k = 0; k < 12 ;k++){
			if( total_medals[k] > top_medals  ){
				top = k
				top_medals = total_medals[k]
			}
			if( total_medals[k] === top_medals ){
				if(total_medals[k] !== 0){
					if( medals[k][0] > medals[top][0] ){
						top = k
						top_medals = total_medals[k]
					}
					if( medals[k][0] === medals[top][0] ){
						if(medals[k][1] > medals[top][1]){
							top = k
							top_medals = total_medals[k]
						}
						if( medals[k][1] === medals[top][1] ){
							if(medals[k][2] > medals[top][2]){
								top = k
								top_medals = total_medals[k]
							}
						}
					}
				}
			}
		}
		rank.push(top)
		total_medals.splice(top,1,0)
	}
	return rank
}

function DisplayMedalCount(rank,medals){
	console.log(rank,medals)
	for(var i = 0; i < 12; i++){
		r = rank[i]
		document.getElementById(medal_teams[i]).src='../Team Images/'+TeamPics[r]
		document.getElementById(medal_id[i][0]).innerHTML = medals[r][0]
		document.getElementById(medal_id[i][1]).innerHTML = medals[r][1]
		document.getElementById(medal_id[i][2]).innerHTML = medals[r][2]
		document.getElementById(medal_PH[i][0]).innerHTML = medals[r][3]
		document.getElementById(medal_PH[i][1]).innerHTML = medals[r][4]
	}
}

function DisplayWeekLeader(index){
	if(index <= week){
		w = index - 1
	Text_Display(AllWeeks_L[w],H_array,P_array);
	CreateDisplay(AllPlaces[w])
	document.getElementById('Leader_title').innerHTML = Week_Titles[w]
	}else{
		DisplaySeasonLeader()
	}
}

function DisplaySeasonLeader(){
	w = week
	Text_Display(AllWeeks_L[w],H_array,P_array);
	CreateDisplay(AllPlaces[w])
	document.getElementById('Leader_title').innerHTML = "Season"
}

