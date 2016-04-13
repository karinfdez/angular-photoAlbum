(function() {
  'use strict';

  angular
    .module('photoAlbum')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
