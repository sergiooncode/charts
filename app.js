var example = angular.module('exampleApp', [
	'ngVega'
]);

example.controller('LineChartController', function($scope) {
	$scope.spec = {
		"width": 570,
		"height": 190,
		"padding": {"top": 10, "left": 30, "bottom": 30, "right": 10},
		"data": [
		  {"name": "table"},
		  {"name": "table1"}
		],
		"scales": [
		{
			"name": "x",
			"range": "width",
			"domain": {"data": "table", "field": "x"}
		},
		{
			"name": "y",
			"range": "height",
			"nice": true,
			"domain": {"data": "table", "field": "y"}
		}
		],
		"axes": [
		{"type": "x", "scale": "x", "grid": true}
		],
		"marks": [
			{
				"type": "symbol",
				"from": {"data": "table"},
				"properties": {
					"enter": {
						"x": {"scale": "x", "field": "x"},
						"y": {"scale": "y", "field": "y"},
						"stroke": {"value": "white"},
						"fill": {"value": "#662d91"},
						"size": {"value": 50}
					},
					"hover": {
					}
				}
			},
			{
				"type": "line",
				"from": {"data": "table"},
				"properties": {
					"enter": {
						"x": {"scale": "x", "field": "x"},
						"y": {"scale": "y", "field": "y"},
						"stroke": {"value": "#662d91"},
						"fill": {"value": "#662d91"},
						"opacity": {"value": 0.4},
						"interpolate": {"value": "cardinal"}
					},
					"hover": {
					}
				}
			},
			/**{
			          "type": "text",
			          "from": {
			            "transform": [{"type": "filter", "test": "datum.date == 1267430400000"}]
			          },
			          "properties": {
			            "enter": {
			              "x": {"scale": "x", "field": "date", "offset": 2},
			              "y": {"scale": "y", "field": "y"},
			              //"fill": {"scale": "color", "field": "symbol"},
			              //"text": {"field": "symbol"},
			              "baseline": {"value": "middle"}
			            }
			          }
			}**/
			/**{
				"type": "text",
				"from": {"data": "table"},
				"properties": {
					"enter": {
						"x": {"scale": "x", "field": "date"},
						"y": {"scale": "y", "field": "y"},
						"stroke": {"value": "black"},
						"fill": {"value": "#662d91"},
						"size": {"value": 50}
					},
					"hover": {
					}
				}
			}**/
			{
				"type": "symbol",
				"from": {"data": "table1"},
				"key": "x",
				"properties": {
					"enter": {
						"x": {"scale": "x", "field": "x"},
						"y": {"scale": "y", "field": "y"},
						"stroke": {"value": "white"},
						"fill": {"value": "#58595b"},
						"size": {"value": 50}
					},
					"hover": {
					}
				}
			},
			{
				"type": "line",
				"from": {"data": "table1"},
				"key": "x",
				"properties": {
					"enter": {
						"x": {"scale": "x", "field": "x"},
						"y": {"scale": "y", "field": "y"},
						"stroke": {"value": "#58595b"},
						"fill": {"value": "#6d6e71"},
						"opacity": {"value": 0.4},
						"interpolate": {"value": "cardinal"}
					},
					"hover": {
					}
				}
			}
		]
	};


	var data2 = {
		table: [
		{"x": 0,  "y": 0},
		{"x": 1,  "y": 25}, {"x": 2,  "y": 55},
		{"x": 3,  "y": 31}, {"x": 4,  "y": 91},
		{"x": 5,  "y": 81}, {"x": 6,  "y": 53},
		{"x": 7,  "y": 19}, {"x": 8,  "y": 87},
		{"x": 9,  "y": 52}, {"x": 10, "y": 48},
		{"x": 11, "y": 24}, {"x": 12, "y": 49},
		{"x": 13, "y": 87}, {"x": 14, "y": 66},
		{"x": 15, "y": 70}, {"x": 16, "y": 27},
		{"x": 17, "y": 27}, {"x": 18, "y": 27},
		{"x": 19, "y": 27}, {"x": 20, "y": 27},
		{"x": 21, "y": 27}, {"x": 22, "y": 27},
		{"x": 23, "y": 27}, {"x": 24, "y": 0}
		],
		table1: [
		{"x": 0,  "y": 0},
		{"x": 1,  "y": 25}, {"x": 2,  "y": 55},
		{"x": 3,  "y": 31}, {"x": 4,  "y": 39},
		{"x": 5,  "y": 61}, {"x": 6,  "y": 25},
		{"x": 7,  "y": 19}, {"x": 8,  "y": 87},
		{"x": 9,  "y": 52}, {"x": 10, "y": 48},
		{"x": 11, "y": 45}, {"x": 12, "y": 49},
		{"x": 13, "y": 73}, {"x": 14, "y": 66},
		{"x": 15, "y": 70}, {"x": 16, "y": 27},
		{"x": 17, "y": 37}, {"x": 18, "y": 37},
		{"x": 19, "y": 37}, {"x": 20, "y": 37},
		{"x": 21, "y": 37}, {"x": 22, "y": 37},
		{"x": 23, "y": 37}, {"x": 24, "y": 0}
		]
	};


	var data1 = {
		table: [
			{"date": "Jan 1 2016",  "y": 0}, {"date": "Jan 2 2016",  "y": 55},
			{"date": "Jan 3 2016",  "y": 43}, {"date": "Jan 4 2016",  "y": 91},
			{"date": "Jan 5 2016",  "y": 81}, {"date": "Jan 6 2016",  "y": 53},
			{"date": "Jan 7 2016",  "y": 19}, {"date": "Jan 8 2016",  "y": 87},
			{"date": "Jan 9 2016",  "y": 52}, {"date": "Jan 10 2016", "y": 48},
			{"date": "Jan 11 2016", "y": 24}, {"date": "Jan 12 2016", "y": 49},
			{"date": "Jan 13 2016", "y": 87}, {"date": "Jan 14 2016", "y": 66},
			{"date": "Jan 15 2016", "y": 17}, {"date": "Jan 16 2016", "y": 27},
			{"date": "Jan 17 2016", "y": 68}, {"date": "Jan 18 2016", "y": 16},
			{"date": "Jan 19 2016", "y": 49}, {"date": "Jan 20 2016", "y": 0}
		]
	};

	$scope.testData = data2;
});