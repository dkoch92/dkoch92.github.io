function ParseData(){
	var parsed_data = []
	Papa.parse("test_stats2.csv", {
		download: true,
		header: false,
		dynamicTyping: true,
		complete: function(results) {
			console.log("Parsed The Data!"),
			console.log(results.data)
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

function DisplayData( data ){
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 12; j++) {
			console.log( data[i][j] )
}

var Stats = []

var Data = ParseData()

console.log('Data:')
console.log(Data)

console.log('Displaying The Data')
DisplayData( Data )



