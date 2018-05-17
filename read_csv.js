function ParseData(){
	Papa.parse("test_stats2.csv", {
		download: true,
		header: false,
		dynamicTyping: true,
		complete: function(results) {
			console.log("Parsed The Data!"),
			console.log(results)
		}
	})
	return results.data
}


var Data = ParseData()
console.log(Data)