sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'febookshopui/test/integration/FirstJourney',
		'febookshopui/test/integration/pages/AuthorsList',
		'febookshopui/test/integration/pages/AuthorsObjectPage',
		'febookshopui/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('febookshopui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);