/*jshint node:true*/
'use strict';

var path = require('path');

/*
 *! Miscellaneous methods
 */

module.exports = function(proto) {
  /**
   * Use preset
   *
   * @method FfmpegCommand#preset
   * @category Miscellaneous
   * @aliases usingPreset
   *
   * @param {String|Function} preset preset name or preset function
   */
  proto.usingPreset =
  proto.preset = function(preset) {
    if (typeof preset === 'function') {
      preset(this);
    } else {
      try {
        // We aren't using presets, and the below dynamic require has Webpack complaining that
        // "Critical dependency: the request of a dependency is an expression"

        // var modulePath = path.join(this.options.presets, preset);
        // var module = require(modulePath);
        throw new Error('Uncomment the above to enable presets.')

        if (typeof module.load === 'function') {
          module.load(this);
        } else {
          throw new Error('preset ' + modulePath + ' has no load() function');
        }
      } catch (err) {
        throw new Error('preset ' + modulePath + ' could not be loaded: ' + err.message);
      }
    }

    return this;
  };
};
