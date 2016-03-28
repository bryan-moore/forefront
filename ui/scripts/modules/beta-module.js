define(["require", "exports"], function (require, exports) {
    "use strict";
    var BetaModule = (function () {
        function BetaModule() {
            this.init();
        }
        BetaModule.prototype.privFunction = function () {
        };
        BetaModule.prototype.pubFunction = function () {
        };
        BetaModule.prototype.init = function () {
            console.log("beta module loaded");
        };
        return BetaModule;
    }());
    var _BetaModule = new BetaModule();
    return _BetaModule;
});
