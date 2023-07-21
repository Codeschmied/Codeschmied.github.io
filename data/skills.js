angular.module('profile')
        .constant('skillsets',
[
	{
		name: "Frameworks und Libraries",
		subskills:
			[
				//{name: 	"JQuery"	, rating: 3	, experience: 4 },
				//{name: 	"AngularJS"	, rating: 2, experience: 2},

				{ name: "Maven", rating: 1, experience: 1 },
				{ name: "Swagger", rating: 1, experience: 1 },
				{name: 	"Angular", rating:2, experience: 2},
				{name: 	"Fractal", rating:1, experience: 1},
				{name: 	"Microsoft MVC  bis Version 5"	, rating: 3, experience: 	3},
				{name:	"QUnit", rating: 2, experience: 1},
				{name:	"Sinon", rating:2, experience: 1}
			]
	},
	{
		name: "Programmiersprachen & umfangreiche Scriptsprachen",
		subskills:
			[
				{name: "Java / SpringBoot", rating: 1, experience: 1 },
				{name: "C# .NET"	, rating: 3, experience: 	6},
				{name: "PHP", rating: 1, experience: 1}
			]
	},
	
	{
		name: "Scriptsprachen & Query-Sprachen",
		subskills:
			[
				{name: "Ecmascript 6 (Javascript)"	, rating: 3, experience: 	6},
				{name: "Powershell"	, rating: 2, experience: 	2},
				{name: "SQL"	, rating: 2, experience: 	3},
			]
	},

	{
		name: "Markup etc.",
		subskills:
			[
				{name: "XML"	, rating: 3, experience: 	4},
				{name: "JSON"	, rating: 3, experience: 	5},
				{name: "HTML"	, rating: 3, experience: 	6},
				{name: "CSS bis Version 3"	, rating: 3, experience: 	4},
				{name: "SCSS", rating:2, experience: 2}
			]
	},

	{
		name: "Technologien",
		subskills:
			[
				{name: "nSubstitute"	, rating: 2, experience: 	3},
				{name: "Structuremap / Lamar"	, rating: 3, experience: 	3},
				{name: "Rest-services"	, rating: 2, experience: 	2},
				{name: "Node.js"	, rating: 2, experience: 	2},
				{name: "Automatisierte UI-tests" , rating: 2, experience: 	2},
				{name: "Selenium"	,	rating: 1, experience: 	2},
				{name: "Unit-tests"	, rating: 3, experience: 	4},
				{name: "A/B-tests"	, rating: 2, experience: 	2}
			]
	},
	{
		name: "VM & Container",
		subskills: [
			{name:"Vagrant", rating:1, experience:1},
			{name:"Docker", rating:1, experience:1},
			{name:"CentOS", rating:1, experience:1},
		]
	},
	{
		name: "Entwicklungsmethoden",
		subskills:
			[
				{name: "TDD"	, rating: 2, experience: 	3},
				{name: "DDD"	, rating: 2, experience: 	2},
				{name: "Scrum"	, rating: 3, experience: 	5},
				{name: "Pair-development"	, rating: 3, experience: 	4},
				{name: "Continous deployment",	rating: 1, experience: 	1},
				{name: "Clean Coding"	, rating: 3, experience: 	4}
			]
	},
	{
		name: "Werkzeuge",
		subskills:
			[
				{name: "Visual Studio" 	, rating: 3, experience: 	6},
				{name: "Resharper"	, rating: 3, experience: 	6},

				{name: "IntellijIDEA", rating:2, experience: 2},
				{name: "TFS"	, rating: 3, experience: 	4},
				{name: "Git"	, rating: 3, experience: 	4},
				{name: "TFS online"	, rating: 2, experience: 	1},
				{name: "Jira", rating: 2, experience: 2},
				{name:	"Gulp", rating:1, experience: 1}
			]
	},
	{
		name:"PHP-bezogenes",
		subskills:[{name:"Smarty", rating:1, experience:1},
					{name:"Assetic", rating:1, experience:1},
					{name:"Composer", rating:1, experience:1}]
	},
	{
    name: "Datenbanken",
    subskills:
		[
			{name: "MS SQL Server"	, rating: 2, experience: 	3},
			{name: "MySQL"	, rating: 1, experience: 	1}
		]
	}
]
);
