function SetData( stats ){
	Stats = stats
}

function ParseData(){
	var parsed_data = []
	Papa.parse("test_stats2.csv", {
		download: true,
		header: false,
		dynamicTyping: true,
		complete: function(results) {
			console.log("Parsed The Data!"),
			console.log(results.data)
			SetData( results.data )
			for (var i = 0; i < 12; i++) {
				row = []
				for (var j = 0; j < 12; j++) {
					row.push( results.data[i][j] )
				}
				parsed_data.push( row )
			}
		}
	})
	return parsed_data
}

var Stats = []

var Data = ParseData()

console.log('Data:')
console.log(Data)

console.log('Stats:')
console.log(Stats)