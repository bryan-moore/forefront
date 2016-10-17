/// <reference path="../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
window['isModernBrowser'] = ('visibilityState' in document);
//vanilla js ready listener
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    }
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
require.config({
    baseUrl: 'ui/scripts',
    paths: {
        bower: '../../bower_components',
    },
    shim: {}
});
function loadMandatoryComponents() {
    requirejs([
        "modules/event-handler-module"
    ]);
}
function loadOptionalComponents() {
    if (document.getElementsByTagName("nav").length > 0) {
        requirejs(["modules/navigation-module"]);
    }
    if (document.getElementsByClassName("uses-alpha").length > 0) {
        requirejs(["modules/alpha-module"]);
    }
    if (document.getElementsByClassName("uses-beta").length > 0) {
        requirejs(["modules/beta-module"]);
    }
    /*if (document.getElementsByClassName("uses-owl-carousel").length > 0) {
      requirejs(["bower/owl.carousel/dist/owl.carousel.min"]);
    }*/
}
function start() {
    loadMandatoryComponents();
    loadOptionalComponents();
}
ready(start);
