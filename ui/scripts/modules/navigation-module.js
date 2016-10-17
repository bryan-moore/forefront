/// <reference path="../../../bower_components/DefinitelyTyped/zepto/zepto.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var NavigationModule = (function () {
        //private vars
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
