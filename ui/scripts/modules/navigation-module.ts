/// <reference path="../../../bower_components/DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />

class NavigationModule {

    //private vars

    constructor() {
      var base = this;
      this.init();
    }

    public init() {
        console.log('nav module');
    }
}

var _NavigationModule = new NavigationModule();
export = _NavigationModule;
