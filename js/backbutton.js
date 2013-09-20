/*
 * Public API:
 *
 *      backbutton.back() - invoke the android back functionality
 */

import device;


var BackButton = Class(function () {
    this._initNATIVE = function _a_init() {};

    /*
     * Do what Back button does
     */
    this._backNATIVE = function _a_backNATIVE(callback) {
        NATIVE.sendActivityToBack();
    };

    this._initSimulated = function () {};

    this._backSimulated = function () {};

    if (NATIVE && NATIVE.events && NATIVE.plugins) {
        this.init = this._initNATIVE;
        this.back = this._backNATIVE;
    } else {
        this.init = this._initSimulated;
        this.back = this._backSimulated;
    }


});


if (device.isAndroid) {
    exports = new BackButton();
} else {
    exports = undefined;
}
