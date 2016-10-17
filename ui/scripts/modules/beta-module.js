/// <reference path="../../../bower_components/DefinitelyTyped/zepto/zepto.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var BetaModule = (function () {
        //private vars
        function BetaModule() {
            this.init();
        }
        BetaModule.prototype.privFunction = function () {
            //private to this class
        };
        BetaModule.prototype.pubFunction = function () {
            //accessable to other modules
        };
        BetaModule.prototype.init = function () {
            console.log("beta module loaded");
        };
        return BetaModule;
    }());
    var _BetaModule = new BetaModule();
    return _BetaModule;
});
