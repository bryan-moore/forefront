"use strict";
var NavigationModule = (function () {
    function NavigationModule() {
        var base = this;
        this.init();
    }
    NavigationModule.prototype.init = function () {
        console.log('nav module');
    };
    return NavigationModule;
}());
var _NavigationModule = new NavigationModule();
module.exports = _NavigationModule;
