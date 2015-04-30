angular.module('aomApp').factory('aomObservationsService', ['$http', function($http) {

    var service = {};

    service.getObservations = function() {
        return [
            {
                name: 'M31'
            },
            {
                name: 'M27'
            }
        ];
    };

    return service;
}]);