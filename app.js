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
		  {"name": "table1"},
		],
		"scales": [
		{
			"name": "x",
			"range": "width",
			"nice": true,
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
				"key": "x",
				"properties": {
					"enter": {
						"x": {"scale": "x", "field": "x"},
						"y": {"scale": "y", "field": "y"},
						"stroke": {"value": "#662d91"},
						"fill": {"value": "#662d91"},
						"size": {"value": 30}
					},
					"hover": {
					}
				}
			},
			{
				"type": "line",
				"from": {"data": "table"},
				"key": "x",
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
			{
				"type": "symbol",
				"from": {"data": "table1"},
				"key": "x",
				"properties": {
					"enter": {
						"x": {"scale": "x", "field": "x"},
						"y": {"scale": "y", "field": "y"},
						"stroke": {"value": "#58595b"},
						"fill": {"value": "#58595b"},
						"size": {"value": 30}
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
			/**{
				"type": "text",
				"from": {"data": "table"},
				"key": "x",
				"properties": {
					"enter": {
						"x": {"scale": "x", "field": "date"},
						"y": {"scale": "y", "field": "y"},
						"fill": {"scale": "x", "field": "date"},
						"text": {"field": "date"},
						"baseline": {"value": "middle"}
					}
				}
			}**/
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
		{"x": 23, "y": 27}, {"x": 24, "y": 27}
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
		{"x": 23, "y": 37}, {"x": 24, "y": 37}
		]
	};


	var data1 = {
		table: [
			{"date": "2016-01-01",  "y": 280}, {"date": "2016-01-02",  "y": 55},
			{"date": "2016-01-03",  "y": 43}, {"date": "2016-01-04",  "y": 91},
			{"date": "2016-01-05",  "y": 81}, {"date": "2016-01-06",  "y": 53},
			{"date": "2016-01-07",  "y": 19}, {"date": "2016-01-08",  "y": 87},
			{"date": "2016-01-09",  "y": 52}, {"date": "2016-01-10", "y": 48},
			{"date": "2016-01-11", "y": 24}, {"date": "2016-01-12", "y": 49},
			{"date": "2016-01-13", "y": 87}, {"date": "2016-01-14", "y": 66},
			{"date": "2016-01-15", "y": 17}, {"date": "2016-01-16", "y": 27},
			{"date": "2016-01-17", "y": 68}, {"date": "2016-01-18", "y": 16},
			{"date": "2016-01-19", "y": 49}, {"date": "2016-01-20", "y": 15}
		]
	};

	$scope.testData = data2;
});