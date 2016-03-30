/// <reference path="../../../bower_components/DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />

class EventHandlerModule {

  //private vars

  constructor() {
    this.init();
  }

  public init() {
    console.log('event handler module loaded');
  }
}

var _EventHandlerModule = new EventHandlerModule();
export = _EventHandlerModule;
