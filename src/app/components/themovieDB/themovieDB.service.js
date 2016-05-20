(function() {
    'use strict';
    
    angular
        .module('massiveinteracteDemo')
        .service('themovieDBSrv', themovie_DB);

    /** @ngInject */
    function themovie_DB($q, $timeout) {
        this.asyncSearch = asyncSearch;

        function asyncSearch(name) {
            var deferred = $q.defer();
            
            $timeout(function() {
                deferred.notify('starting query ' + name + '.');
        
                function successCB(data) {
                    var dataObj = angular.fromJson(data);
                    deferred.resolve(dataObj);
                }
                
                function errorCB() {
                    deferred.reject();
                }
                
                return theMovieDb.search.getMovie({"query": encodeURI(name)}, successCB, errorCB);
            }, 1000);

            return deferred.promise;
        }
    }
})();
