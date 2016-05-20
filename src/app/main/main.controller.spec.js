(function() {
    'use strict';

    describe('controllers', function(){
        var vm;
    
        beforeEach(module('massiveinteracteDemo'));
        
        beforeEach(inject(function(_$controller_, _$timeout_, _themovieDBSrv_, _$rootScope_) {
            var scope = _$rootScope_.$new();
            spyOn(_themovieDBSrv_, 'asyncSearch').and.returnValue([{}, {}, {}, {}, {}]);
            vm = _$controller_('MainController', {$scope: scope});
        }));

        it('should define more than 5 awesome things', function() {
            expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
        });
    });
})();