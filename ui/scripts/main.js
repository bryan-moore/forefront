function loadRequiredComponents() {
    console.log("required components loaded");
    requirejs([
        "plugins/jquery.hoverIntent.minified",
        "modules/navigation-module"
    ]);
}
function loadOptionalComponents() {
    console.log("looking for optionals");
    if ($(".uses-alpha").length > 0) {
        requirejs(["modules/alpha-module"]);
    }
    if ($(".uses-beta").length > 0) {
        requirejs(["modules/beta-module"]);
    }
    if ($(".owl-carousel").length > 0) {
        requirejs(["plugins/owl.carousel.min"]);
    }
}
$(document).ready(function () {
    loadRequiredComponents();
    loadOptionalComponents();
});
