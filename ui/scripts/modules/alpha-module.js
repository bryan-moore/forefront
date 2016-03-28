define(["require", "exports"], function (require, exports) {
    "use strict";
    var AlphaModule = (function () {
        function AlphaModule() {
            this.init();
        }
        AlphaModule.prototype.privFunction = function () {
        };
        AlphaModule.prototype.pubFunction = function () {
        };
        AlphaModule.prototype.init = function () {
            console.log("alpha module loaded");
        };
        return AlphaModule;
    }());
    var _AlphaModule = new AlphaModule();
    return _AlphaModule;
});
