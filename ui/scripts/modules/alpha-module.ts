/// <reference path="../../../bower_components/DefinitelyTyped/zepto/zepto.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />

class AlphaModule {

  //private vars

  constructor() {
    this.init();
  }

  private privFunction() {
    //private to this class
  }

  public pubFunction() {
    //accessable to other modules
  }

  public init() {
    console.log("alpha module loaded");
  }
}

var _AlphaModule = new AlphaModule();
export = _AlphaModule;
