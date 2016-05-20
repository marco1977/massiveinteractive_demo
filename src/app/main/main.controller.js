(function() {
    'use strict';
    angular.module('massiveinteracteDemo').controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, $scope, $http, webDevTec, toastr, themovieDBSrv) {
        var vm = this;
        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1463664778965;
        //vm.showToastr = showToastr;
        vm.movieResults = [];

        $scope.options = {
            shadowInput: true,
            highlightFirst: true,       
            searchMethod: "getMovies",
            templateUrl: "app/main/template_option.html"
        };
   
        $scope.getMovies = function (movie, deferred) { 
            return themovieDBSrv.asyncSearch(movie).then(
                (function (deferred, data) {   
                    vm.movieResults = data.results;
                    deferred.resolve({results: data.results});
                }).bind(vm, deferred)
            );
        }
    }
})();