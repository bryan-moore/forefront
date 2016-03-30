/// <reference path="../../bower_components/DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />

//vanilla js ready listener
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

//plugin dependencies
require.config({
  "shim":
  {
    "plugins/jquery.hoverIntent.min": ["vendor/jquery-2.2.2.min"],
    "plugins/owl.carousel.min": ["vendor/jquery-2.2.2.min"]
  }
});

function loadRequiredComponents() {
  console.log("required components loaded");
  requirejs(
    [
      "modules/navigation-module"
    ]);
}

function loadOptionalComponents() {
  if (document.getElementsByClassName("uses-alpha").length > 0) {
    requirejs(["modules/alpha-module"]);
  }
  if (document.getElementsByClassName("uses-beta").length > 0) {
    requirejs(["modules/beta-module"]);
  }
  if (document.getElementsByClassName("uses-owl-carousel").length > 0) {
    requirejs(["plugins/owl.carousel.min"]);
  }
  if (document.getElementsByClassName("uses-hover-intent").length > 0) {
    requirejs(["plugins/jquery.hoverIntent.min"]);
  }
}

function start() {
  loadRequiredComponents();
  loadOptionalComponents();
}
ready(start)
