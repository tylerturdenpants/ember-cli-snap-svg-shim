(function () {
  /* globals define, Snap */

  function generateModule(name, values) {
    define (name, [], function () {
      'use strict';

      return values;
    });
  }

  generateModule('snap-svg', { 'default': Snap });
})();
