(function() {
  'use strict';

  angular
    .module('massiveinteracteDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
