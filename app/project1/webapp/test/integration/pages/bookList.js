sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sap.com.project1',
            componentId: 'bookList',
            contextPath: '/book'
        },
        CustomPageDefinitions
    );
});