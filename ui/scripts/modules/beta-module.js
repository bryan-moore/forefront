"use strict";
var BetaModule = (function () {
    function BetaModule() {
    }
    BetaModule.prototype.privFunction = function () {
    };
    BetaModule.prototype.pubFunction = function () {
    };
    BetaModule.prototype.init = function () {
        console.log('beta module');
    };
    return BetaModule;
}());
var _BetaModule = new BetaModule();
module.exports = _BetaModule;
