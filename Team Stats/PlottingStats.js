var ctx = document.getElementById("myChart").getContext('2d');

var stats_options = {
  scales: {
    xAxes: [{
      ticks: {
        fontSize: 32,
        beginAtZero: true,
        fontColor: 'white',
      }
    }],
    yAxes: [{
      ticks: {
        fontSize: 28,
        beginAtZero: true,
        fontColor: 'white',
      }
    }]
  },
  responsive: false,
  title: {
    fontSize: 54,
    fontColor: 'white',
    display: true,
    text: 'Team Stats',
    position: 'top'
  }
}

// Setting all the Initial Components
//----------------------------------------------------------------
var TeamsboolArray = [false,false,false,false,false,false,false,false,false,false,false,false,false,false]
var StatsboolArray = [false,false,false,false,false,false,false,false,false,false,false,false,false,false]
var AVGbool = false

var AllTeamsMat
var AvgMat
var week
var Week_Labels
var NewDataSet

setTimeout(function(){ 
    console.log('Plotting Stats Timeout');
    week = GetWeekNumber();
    console.log('Plotting | week:',week);
    AllTeamsMat = GetAllTeams();
    console.log('Plotting | AllTeams:',AllTeamsMat);
    AvgMat = GetAvg();
    console.log('Plotting | AvgMat:',AllTeamsMat);
    Week_Labels = WeekLabels(week);
    NewDataSet = CreateData(TeamsboolArray,StatsboolArray,AllTeamsMat,week,Week_Labels,AVGbool,AvgMat);
    CreatePlot(NewDataSet); } ,2000)


// Defining Functions
//-----------------------------------------------------------------
function CorrectTeamIndex(num){
    var correct = [2,0,1,11,6,3,9,8,7,5,4,10]
    var correct_num = correct[num]
    return correct_num

}

function CreateDataset(team_num,data_array){
    var fill_color = 'rbga(0,0,0,1)'
    var team_name = 'stupid team'

    fill_color = TeamColor(team_num)
    team_name = TeamName(team_num)

    var dataset ={
    label: team_name,
    data: data_array,
    backgroundColor: fill_color,
    borderColor: 'black', // The main line color
    borderWidth: 1,
    fill: true,
    pointBorderColor: "black",
    pointBorderWidth: 2,
    pointHoverRadius: 10,
    pointHoverBackgroundColor: fill_color,
    pointHoverBorderColor: "black",
    pointHoverBorderWidth: 3,
    pointRadius: 6,
    pointHitRadius: 20,
    }
    return dataset
}

function CreateAvgDataset(data_array){
    var fill_color = 'rbga(255,0,0,.1)'

    var dataset ={
    label: 'League Average',
    data: data_array,
    backgroundColor: fill_color,
    borderColor: 'red', // The main line color
    borderWidth: 1.5,
    fill: false,
    pointBorderColor: "red",
    pointBorderWidth: 2.5,
    pointHoverRadius: 12.5,
    pointHoverBackgroundColor: "white",
    pointHoverBorderColor: "red",
    pointHoverBorderWidth: 4,
    pointRadius: 8,
    pointHitRadius: 25,
    }
    return dataset
}


function CreatePlot(d){
    myChart = new Chart(ctx, {
    type: 'line',
    data: d,
    options: stats_options
    });
}

function CreateTeamDataArray(team_index,StatsBool,All,week){
    var stats_array = []
    for ( var i = 0; i < StatsBool.length; i++ ) {
        if( StatsBool[i] === true ){
            for(var j=0; j<week; j++)
                stats_array.push(All[team_index][i][j])
        }
    }
    return stats_array
}

function CreateAvgArray(StatsBool,AVG,week){
    var avg_array = []
    for ( var i = 0; i < StatsBool.length; i++ ) {
        if( StatsBool[i] === true ){
            for(var j=0; j<week; j++)
                avg_array.push(AVG[i][j])
        }
    }
    return avg_array
}

function ToggleReset(){
    myChart.destroy();
    TeamsboolArray = [false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    StatsboolArray = [false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    AVGbool = false
    NewDataSet = CreateData(TeamsboolArray,StatsboolArray,AllTeamsMat,week,Week_Labels,AVGbool,AvgMat);
    CreatePlot(NewDataSet);
}

function ToggleAVG(){
    myChart.destroy();
    if(AVGbool === true){
        AVGbool = false
    }else{
        AVGbool = true
    }
    NewDataSet = CreateData(TeamsboolArray,StatsboolArray,AllTeamsMat,week,Week_Labels,AVGbool,AvgMat);
    CreatePlot(NewDataSet);
}

function CreateData(TeamsBool,StatsBool,All,week,Wlabels,AvgBool,AVG) {
    var NewDataset = []
    for ( var i = 0; i < TeamsBool.length; i++ ) {
        if( TeamsBool[i] === true ){
            team_id = CorrectTeamIndex(i)
            var d_array = CreateTeamDataArray(team_id,StatsBool,All,week)
            var team_dataset = CreateDataset(i,d_array)
            NewDataset.push(team_dataset)
        }
    }
    if(AvgBool === true){
        var a_array = CreateAvgArray(StatsBool,AVG,week)
        var a_dataset = CreateAvgDataset(a_array)
        NewDataset.push(a_dataset)
    }
    var NewData = {
    labels: Wlabels,
    datasets: NewDataset
    }
    return NewData
}

function ToggleTeamBool(num,Dbool){
    if( Dbool[num] === true ){
        Dbool[num] = false
    } else{
        Dbool[num] = true
    }
}

function ToggleStatBool(num){
    NewSbool = []
    for(var i=0; i<12; i++ )
        if( i !== num){
            NewSbool.push(false)
        }else{
            NewSbool.push(true)
        }
    return NewSbool
}

function ToggleTeamPlot(num) {
    myChart.destroy();
    ToggleTeamBool(num,TeamsboolArray);
    NewDataSet = CreateData(TeamsboolArray,StatsboolArray,AllTeamsMat,week,Week_Labels,AVGbool,AvgMat);
    CreatePlot(NewDataSet);
}

function ToggleStatPlot(num){
    myChart.destroy();
    StatsboolArray = ToggleStatBool(num);
    NewDataSet = CreateData(TeamsboolArray,StatsboolArray,AllTeamsMat,week,Week_Labels,AVGbool,AvgMat);
    CreatePlot(NewDataSet);
}




function WeekLabels(week){
    var week_labels = []
    for(var i=0; i<week; i++)
        week_labels.push('Week '+String(i+1))
    return week_labels
}

function TeamName(team_index){
    var team_name = 'team name'
    if(team_index == 0 ){
        team_name = 'Playa Haters'
    }
    if(team_index == 1 ){
        team_name = 'Thunder Catz'
    }
    if(team_index == 2 ){
        team_name = 'Dicks Out'
    }
    if(team_index == 3 ){
        team_name = 'EZ Game EZ Life'
    }
    if(team_index == 4 ){
        team_name = 'Tall Sexy Tyrion'
    }
    if(team_index == 5 ){
        team_name = 'Dumpster Fires'
    }
    if(team_index == 6 ){
        team_name = 'Confortably Numb'
    }
    if(team_index == 7 ){
        team_name = 'MN Islanders'
    }
    if(team_index == 8 ){
        team_name = 'Ozuna Matata'
    }
    if(team_index == 9 ){
        team_name = 'Ctrl Altuve Dlt'
    }
    if(team_index == 10 ){
        team_name = 'Johto Hoe-Ohs'
    }
    if(team_index == 11 ){
        team_name = 'Ventura Gulls'
    }
    return team_name
}


function TeamColor(team_index){
    var team_fill_color = 'rbga(0,0,0,1)'
    if(team_index == 0 ){
        team_fill_color = 'rgba(0,0,255,.08)'
    }
    if(team_index == 1 ){
        team_fill_color = 'rgba(0,64,191,.08)'
    }
    if(team_index == 2 ){
        team_fill_color = 'rgba(0,129,126,.08)'
    }
    if(team_index == 3 ){
        team_fill_color = 'rgba(0,191,64,.08)'
    }
    if(team_index == 4 ){
        team_fill_color = 'rgba(0,255,0,.08)'
    }
    if(team_index == 5 ){
        team_fill_color = 'rgba(64,191,0,.08)'
    }
    if(team_index == 6 ){
        team_fill_color = 'rgba(126,129,0,.08)' 
    }
    if(team_index == 7 ){
        team_fill_color = 'rgba(191,64,0,.08)'
    }
    if(team_index == 8 ){
        team_fill_color = 'rgba(255,0,0,.08)'
    }
    if(team_index == 9 ){
        team_fill_color = 'rgba(191,0,64,.08)'
    }
    if(team_index == 10 ){
        team_fill_color = 'rgba(126,0,129,.08)'
    }
    if(team_index == 11 ){
        team_fill_color = 'rgba(64,0,191,.08)'
    }
    return team_fill_color
}