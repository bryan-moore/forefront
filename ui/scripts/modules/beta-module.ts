/// <reference path="../../../bower_components/DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />

class BetaModule {

    //private vars

    constructor() {
        //init();
    }

    private privFunction() {
        //private to this class
    }

    public pubFunction() {
        //accessable to other modules
    }

    public init() {
        console.log('beta module');
    }
}

var _BetaModule = new BetaModule();
export = _BetaModule;
