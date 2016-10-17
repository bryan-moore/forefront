/// <reference path="../../../bower_components/DefinitelyTyped/zepto/zepto.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var AlphaModule = (function () {
        //private vars
        function AlphaModule() {
            this.init();
        }
        AlphaModule.prototype.privFunction = function () {
            //private to this class
        };
        AlphaModule.prototype.pubFunction = function () {
            //accessable to other modules
        };
        AlphaModule.prototype.init = function () {
            console.log("alpha module loaded");
        };
        return AlphaModule;
    }());
    var _AlphaModule = new AlphaModule();
    return _AlphaModule;
});
