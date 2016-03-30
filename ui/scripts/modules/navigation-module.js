define(["require", "exports"], function (require, exports) {
    "use strict";
    var NavigationModule = (function () {
        function NavigationModule() {
            this.init();
        }
        NavigationModule.prototype.init = function () {
            console.log('nav module loaded');
        };
        return NavigationModule;
    }());
    var _NavigationModule = new NavigationModule();
    return _NavigationModule;
});
