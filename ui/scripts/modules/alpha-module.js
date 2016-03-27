"use strict";
var AlphaModule = (function () {
    function AlphaModule() {
    }
    AlphaModule.prototype.privFunction = function () {
    };
    AlphaModule.prototype.pubFunction = function () {
    };
    AlphaModule.prototype.init = function () {
        console.log('alpha module');
    };
    return AlphaModule;
}());
var _AlphaModule = new AlphaModule();
module.exports = _AlphaModule;
