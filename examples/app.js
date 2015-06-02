import React from 'react';
import Result from '../src/components/DisplayResult/DisplayResult.component.js';

let data = {}
data.result = [
  	{
		"identifiers": ["870970-basis:22629344", "870970-basis:22252852", "870970-basis:29317038", "870970-basis:25194853", "870970-basis:24168638", "870970-basis:23195151", "870970-basis:27638708", "870970-basis:22513354"],
		"title": "Harry Potter og De Vises Sten",
		"worktype": "book",
		"cover": 0
	},
	{
		"identifiers": ["870970-basis:24945669"],
		"title": "Ved du alt om Harry Potter?",
		"worktype": "book",
		"cover": 0
	},
	{
		"identifiers": ["870970-basis:27036031", "870970-basis:27036082", "870970-basis:27036228", "870970-basis:27036155"],
		"title": "Harry Potter og Fønixordenen",
		"worktype": "game",
		"cover": -1
	},
	{
		"identifiers": ["870970-basis:28344953", "870970-basis:28344902", "870970-basis:28344910", "870970-basis:28344937"],
		"title": "Lego Harry Potter - years 1-4",
		"worktype": "game",
		"cover": 0
	},
	{
		"identifiers": ["870970-basis:27815928", "870970-basis:27815901", "870970-basis:27815960", "870970-basis:27815952"],
		"title": "Harry Potter og halvblodsprinsen",
		"worktype": "game",
		"cover": -1
	},
	{
		"identifiers": ["870970-basis:25807995", "870970-basis:26285240", "870970-basis:29317100", "870970-basis:25771893", "870970-basis:27639674"],
		"title": "Harry Potter og halvblodsprinsen",
		"worktype": "book",
		"cover": 0
	},
	{
		"identifiers": ["870970-basis:25245784", "870970-basis:24880605", "870970-basis:29368872", "870970-basis:26167663", "870970-basis:27639534"],
		"title": "Harry Potter og Fønixordenen",
		"worktype": "book",
		"cover": 0
	},
	{
		"identifiers": ["870970-basis:22995154", "870970-basis:22639862", "870970-basis:29317003", "870970-basis:25197879", "870970-basis:26239699", "870970-basis:23227932", "870970-basis:22937758", "870970-basis:22937766", "870970-basis:22937774", "870970-basis:27639151"],
		"title": "Harry Potter og fangen fra Azkaban",
		"worktype": "book",
		"cover": 0
	},
	{
		"identifiers": ["870970-basis:22677780", "870970-basis:22375733", "870970-basis:29316945", "870970-basis:25197887", "870970-basis:25254031", "870970-basis:23227886", "870970-basis:22864416", "870970-basis:22864459", "870970-basis:22864467", "870970-basis:27639097"],
		"title": "Harry Potter og Hemmelighedernes Kammer",
		"worktype": "book",
		"cover": 1
	},
	{
		"identifiers": ["870970-basis:23540703", "870970-basis:23154382", "870970-basis:29317070", "870970-basis:25197909", "870970-basis:26239710", "870970-basis:27639240"],
		"title": "Harry Potter og Flammernes Pokal",
		"worktype": "book",
		"cover": 0
	}
]

const element = React.createElement(Result, data);
React.render(element, document.getElementById('result'));
