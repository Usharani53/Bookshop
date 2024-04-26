sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sap.com.project1',
            componentId: 'bookObjectPage',
            contextPath: '/book'
        },
        CustomPageDefinitions
    );
});