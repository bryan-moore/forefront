define(["require", "exports"], function (require, exports) {
    "use strict";
    var EventHandlerModule = (function () {
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
