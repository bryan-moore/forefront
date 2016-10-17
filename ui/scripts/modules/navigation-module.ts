/// <reference path="../../../bower_components/DefinitelyTyped/zepto/zepto.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />

class NavigationModule {

  //private vars

  constructor() {
    this.init();
  }

  public init() {
    console.log('nav module loaded');
  }
}

var _NavigationModule = new NavigationModule();
export = _NavigationModule;
