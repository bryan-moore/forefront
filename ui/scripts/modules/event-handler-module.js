/// <reference path="../../../bower_components/DefinitelyTyped/zepto/zepto.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var EventHandlerModule = (function () {
        //private vars
        function EventHandlerModule() {
            this.init();
        }
        EventHandlerModule.prototype.init = function () {
            console.log('event handler module loaded');
        };
        return EventHandlerModule;
    }());
    var _EventHandlerModule = new EventHandlerModule();
    return _EventHandlerModule;
});
