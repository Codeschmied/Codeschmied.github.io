angular.module('profile')
        .constant('skillsets',
[
	{
    name: "Frameworks",
    subskills:
		[
			{ name: "JQuery"	, rating: 3	, experience: 3 },
			{name: "AngularJS"	, rating: 2, experience: 	1},
			{name: "Microsoft MVC  bis Version 5"	, rating: 3, experience: 	3}
		]
	},

	{
    name: "Programmiersprachen",
    subskills:
		[
			{name: "C# .NET bis Version 4.5.1"	, rating: 3, experience: 	6}
		]
	},

	{
    name: "Scriptsprachen & Query-Sprachen",
    subskills:
		[
			{name: "Ecmascript 6 (Javascript)"	, rating: 3, experience: 	3},
			{name: "Powershell"	, rating: 2, experience: 	2},
			{name: "SQL"	, rating: 2, experience: 	3}
		]
	},

	{
    name: "Markup etc.",
    subskills:
		[
			{name: "XML"	, rating: 3, experience: 	4},
			{name: "JSON"	, rating: 3, experience: 	4},
			{name: "HTML"	, rating: 3, experience: 	5},
			{name: "CSS bis Version 3"	, rating: 2, experience: 	4}
		]
	},

	{
    name: "Technologien",
    subskills:
		[
			{name: "nSubstitute"	, rating: 2, experience: 	3},
			{name: "Structuremap"	, rating: 3, experience: 	3},
			{name: "Rest-services"	, rating: 2, experience: 	2},
			{name: "Node.js"	,rating: 1, experience: 	1},
			{name: "Automatisierte UI-tests"	, rating: 2, experience: 	2},
			{name: "Selenium"	,	rating: 1, experience: 	2},
			{name: "Unit-tests"	, rating: 3, experience: 	3},
			{name: "A/B-tests"	, rating: 2, experience: 	2}
		]
	},

	{
    name: "Entwicklungsmethoden",
    subskills:
		[
			{name: "TDD"	, rating: 2, experience: 	2},
			{name: "DDD"	, rating: 2, experience: 	2},
			{name: "Scrum"	, rating: 3, experience: 	4},
			{name: "Pair-development"	, rating: 3, experience: 	4},
			{name: "Continous deployment",	rating: 1, experience: 	1},
			{name: "Clean Coding"	, rating: 3, experience: 	3}
		]
	},
	{
    name: "Werkzeuge",
    subskills:
		[
			{name: "Visual Studio" 	, rating: 3, experience: 	6},
			{name: "TFS"	, rating: 3, experience: 	4},
			{name: "Git"	, rating: 2, experience: 	2},
			{name: "Resharper"	, rating: 3, experience: 	6},
			{name: "TFS online"	, rating: 2, experience: 	1}
		]
	},

	{
    name: "Datenbanken",
    subskills:
		[
			{name: "MS SQL Server"	, rating: 2, experience: 	3}
		]
	}
]
);
