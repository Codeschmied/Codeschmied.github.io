var hde = {
  name:"HOTEL DE",
  id:"hde",
   projects:[
  {
  PrimaryTitle: "Personalisierung der mobilen Plattform",
  SecondaryTitle: "Login & Registrierung mit dediziertem OAuth-Server",
  TimeSpan: "01/2016 – 06/2016",
  Role: "Software Entwickler",
  Activity: "Implementierung des Clients und des Frontends.",
  Technologies: "Microsoft OWIN, C# .NET, Microsoft MVC, AngularJS",
  },
  {
  PrimaryTitle:  	"Internationalisierung der mobilen Plattform",
  TimeSpan:      	"09/2015 – 01/2016",
  Role:    		"Software Entwickler" ,
  Activity:    	"Implementierung der Kernlogik.",
  Technologies:  	"C# .NET, Microsoft MVC, AngularJS",
  Details: 		"Komplexe Anforderungen aus SEO und Marketing, Umstieg von TFS auf Git"
  },
  {
  PrimaryTitle:	"Hotel-Detail-Seite",
  SecondaryTitle:	"Re-Design der Website",
  TimeSpan:		"01/2015 – 09/2015",
  Role:          	"Software Entwickler",
  Activity:		"Überarbeitung der Seite. Beseitigung technischer Schuld. Komplettes System für Upload, Freigabe, Meldung und Löschung von kundeneigenen Hotelschnappschüssen. ",
  Technologies:	"C# .NET, Microsoft MVC, JQuery, SQL",
  Details:		"Implementierung auf 10 Jahre alter Plattform. Umfassendes A/B-testing."
  },
  {
  PrimaryTitle:	"Tracking aller Plattformen vereinheitlichen",
  SecondaryTitle:	"Business-Logik extrahieren und zu Service umbauen",
  TimeSpan:		"08/2014 – 06/2015",
  Role:          	"Software Entwickler",
  Activity:		"Absprache, Konzipierung und Implementierung der Lösung mit der Fachabteilung. Code und Logik aus fast 10 Jahre altem Legacy-Code bergen.",
  Technologies:	"C# .NET, rest-service",
  Details:		"Die Logik war nicht dokumentiert, und der zuständigen Fachabteilung weitgehend entfallen (Fluktuation). Sie musste also reverse-engineered werden, und die Beibehaltung des bestehenden Verhaltens durch umfassendes automatisiertes Testen sichergestellt und werden. Es gab hohen Abspracheaufwand mit der Fachabteilung. Das Projekt wurde zwischendurch für mehrere Monate pausiert und musste in dieser Zeit gewartet und gepflegt werden. Das Projekt war trotz allen Widrigkeiten ein Erfolg. Umstieg auf Scrum in dieser Zeit."
  },
  {
  PrimaryTitle:	"Advertiser-Service",
  SecondaryTitle:	"Service um SEA automatisiert zu generieren, bearbeiten, löschen",
  TimeSpan:		"04/2013 – 8/2013, Erweiterungen bis 3/2014",
  Role:          	"Junior Software Entwickler",
  Activity:		"Entwurf der Datenbankstruktur, Entwurf und Implementierung logischer Abläufe, einbinden der GoogleAPI.",
  Technologies:	"C# .NET, Microsoft SQL-Management Studio, AdWords API",
  Details:		"Stark lückenhafte Dokumentation der API"
  },
  {
  PrimaryTitle:	"Social Media Login",
  SecondaryTitle:	"Login via Facebook, XING und LinkedIn implementieren",
  TimeSpan:		"03/2013 – 04/2013",
  Role:          	"Junior Software Entwickler",
  Activity:		"Entwicklung Frontend und Backend.",
  Technologies:	"C# .NET, OAuth, OAuth 2, SQL"
  },
  {
  PrimaryTitle:	"Großkunden-projekte",
  SecondaryTitle:	"Umsetzung neuer Features für Großkunden auf der bestehenden Plattform",
  TimeSpan:		"10/2012 – 03/2013",
  Role:          	"Junior Software Entwickler",
  Activity:		"Unterstützung des Teams bei Umsetzung der Kundenanforderungen.",
  Technologies:	"C# .NET, Microsoft MVC, Microsoft SQL-Management Studio"
  },
  {
  PrimaryTitle:	"Redesign",
  SecondaryTitle:	"Behebung Technischer Schuld und Fehler nach weitgreifender Umgestaltung der Website",
  TimeSpan:		"06/2012 – 10/2012",
  Role:          	"Junior Software Entwickler",
  Activity:		"Einarbeitung in die Plattform, Bugfixes, Refactorings.",
  Technologies:	"C# .NET, Microsoft MVC, Microsoft SQL-Management Studio",
  }
]};

var sf = {
  name:"StayFriends",
  id:"ELO",

  projects:[  {
    PrimaryTitle:"Integration und Ausbau der Webanwendung",
    SecondaryTitle: "Umbau zur Library, zur Einbindung auf der Partnerseite StayFriends",
    TimeSpan:		"03/2017 – 03/2018",
    Role:       "Hauptentwickler",
    Activity: "Ausbauen der Features und Betreuung der Integration. Kommunikation mit dem Partnerteam vorwiegend übers Web aufgrund geografischer Distanz.",
    Technologies:	"Javascript,HTML,Gulp,QUnit,Sinon"
  },
  {
    PrimaryTitle:	"Prototyp einer Webversion",
    SecondaryTitle:	"Erstellen eines Prototypen für die Webversion der Handy-app",
    TimeSpan:		"11/2016 – 03/2017",
    Role:       "Hauptentwickler",
    Activity:		"Einarbeiten in die bestehende Architektur der Anwendung, erstellen eines ersten spielbaren Prototypen.",
    Technologies:	"Javascript,HTML,Gulp,QUnit,Sinon"
  }
  ],
};

angular.module('profile').constant('employers',[sf,hde]
);
