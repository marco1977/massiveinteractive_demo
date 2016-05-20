(function() {
    'use strict';
    
    angular
        .module('massiveinteracteDemo')
        .service('themovieDBSrv', themovieDB);

    /** @ngInject */
    function themovieDB($q) {
        var data = [ ];
        this.asyncSearch = asyncSearch;

        function asyncSearch(name) {
            var deferred = $q.defer();
            
            setTimeout(function() {
                deferred.notify('starting query ' + name + '.');
        
                function successCB(data) {
                    var dataObj = JSON.parse(data);
                    
                    console.log("success");
                    console.log(data);
                    deferred.resolve(dataObj);
                };
                
                function errorCB() {
                    deferred.reject();
                };
                
                return theMovieDb.search.getMovie({"query": encodeURI(name)}, successCB, errorCB);
            }, 1000);

            return deferred.promise;
        };
    }
})();
