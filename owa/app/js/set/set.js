import angular from 'angular';
import uiRouter from 'angular-ui-router';
import setComponent from './set.component.js';
import uicommons from 'openmrs-contrib-uicommons';

let setModule = angular.module('set', [ uiRouter, 'openmrs-contrib-uicommons'])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('set', {
            url: '/set/:UUID',
            template: "<set></set>",
            resolve: {
                singleTermmapping: singleTermmapping
            }
        })
    })
    .component('set', setComponent);



function singleTermmapping($state, openmrsRest) {
    "ngInject";
    return openmrsRest.getFull('metadatamapping/termmapping',
        {uuid: $state.params.UUID})
}

export default setModule;