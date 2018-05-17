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

var TestWeek = [
[29,	13,	38,	3,	0.3256,	0.4474,	71,	5,	1,	3.309,	1.162,	9.397],
[34,	12,	40,	6,	0.3603,	0.4731,	63,	6,	5,	3.068,	1.023,	7.732],
[50,	18,	36,	3,	0.3397,	0.5144,	50,	2,	0,	4.333,	1.204,	8.333],
[45,	9,	39,	5,	0.3242,	0.4515,	83,	8,	2,	3.054,	1.208,	10.14],
[35,	6,	23,	11,	0.3412,	0.4318,	66,	5,	6,	4.655,	1.256,	8.778],
[39,	15,	50,	2,	0.3500,	0.5131,	53,	6,	0,	2.714,	1.206,	7.571],
[48,	9,	30,	3,	0.3271,	0.4007,	76,	5,	4,	4.817,	1.183,	9.634],
[39,	18,	46,	10,	0.3908,	0.6008,	69,	5,	4,	3.240,	1.320,	9.315],
[49,	19,	50,	4,	0.4050,	0.6612,	49,	1,	3,	3.942,	1.161,	9.657],
[42,	13,	47,	5,	0.3711,	0.4900,	55,	3,	5,	2.732,	1.196,	8.839],
[43,	14,	43,	7,	0.3583,	0.5148,	59,	2,	2,	5.072,	1.740,	8.801],
[49,	15,	56,	8,	0.3705,	0.5438,	55,	3,	7,	5.050,	1.317,	10.683]
]

function DisplayData( data ){
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 12; j++) {
			console.log( data[i][j] )
		}
	}
}

var Data = ParseData()

console.log('Data:')
console.log( Data )

console.log('Displaying The Data')
DisplayData( Data )

console.log('Displaying The Test')
DisplayData( TestWeek )



