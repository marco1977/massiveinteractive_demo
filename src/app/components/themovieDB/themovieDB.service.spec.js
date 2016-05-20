(function() {
    'use strict';
    
    describe('service themovieDBSrv', function() {
        var themovieDBSrv;
        beforeEach(module('massiveinteracteDemo'));
        
        beforeEach(inject(function(_themovieDBSrv_) {
            themovieDBSrv = _themovieDBSrv_;
        }));

        it('should be registered', function() {
            expect(themovieDBSrv).not.toEqual(null);
        });

        describe('asyncSearch function', function() {
            it('should exist', function() {
                expect(themovieDBSrv.asyncSearch).not.toEqual(null);
            });

            it('should return array of object', function() {
                var promise = themovieDBSrv.asyncSearch();
                expect(promise).toEqual(jasmine.any(Object));

                promise.then(function  (data) {
                    expect(data[0]).toEqual(jasmine.any(Object));
                    expect(data.length >= 1).toBeTruthy();
                });
             });
        });
    });
})();
