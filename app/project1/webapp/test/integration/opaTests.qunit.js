sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/com/project1/test/integration/FirstJourney',
		'sap/com/project1/test/integration/pages/bookList',
		'sap/com/project1/test/integration/pages/bookObjectPage'
    ],
    function(JourneyRunner, opaJourney, bookList, bookObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/com/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThebookList: bookList,
					onThebookObjectPage: bookObjectPage
                }
            },
            opaJourney.run
        );
    }
);