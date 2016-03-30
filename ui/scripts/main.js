function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    }
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
require.config({
    "shim": {
        "plugins/jquery.hoverIntent.min": ["vendor/jquery-2.2.2.min"],
        "modules/navigation-module": ["plugins/jquery.hoverIntent.min"],
        "plugins/owl.carousel.min": ["vendor/jquery-2.2.2.min"]
    }
});
function loadRequiredComponents() {
    console.log("get required components");
    requirejs([
        "modules/event-handler-module"
    ]);
}
function loadOptionalComponents() {
    console.log("find optional components");
    if (document.getElementsByTagName("nav").length > 0) {
        requirejs(["modules/navigation-module"]);
    }
    if (document.getElementsByClassName("uses-alpha").length > 0) {
        requirejs(["modules/alpha-module"]);
    }
    if (document.getElementsByClassName("uses-beta").length > 0) {
        requirejs(["modules/beta-module"]);
    }
    if (document.getElementsByClassName("uses-owl-carousel").length > 0) {
        requirejs(["plugins/owl.carousel.min"]);
    }
}
function start() {
    loadRequiredComponents();
    loadOptionalComponents();
}
ready(start);
