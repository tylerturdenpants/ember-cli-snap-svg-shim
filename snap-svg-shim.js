(function () {
  /* globals define, mina, Snap */

  function generateModule(name, values) {
    define(name, [], function () {
      'use strict';

      return values;
    });
  }

  generateModule('mina', { 'default': mina });
  generateModule('snap-svg', { 'default': Snap });
})();
