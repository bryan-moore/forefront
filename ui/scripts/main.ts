/// <reference path="../../bower_components/DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />

interface IRequireConfig
{
   useMinified: boolean;
}

/*require.config({
  "shim":
  {
    "plugins/jquery.hoverIntent.minified": ["libraries/jquery-2.2.2.min"],
    "plugins/owl.carousel.min": ["libraries/jquery-2.2.2.min"]
  }
});*/

function loadRequiredComponents()
{
  console.log("required components loaded");
  requirejs(
  [
    "modules/navigation-module"
  ]);
}

function loadOptionalComponents()
{
  console.log("looking for optionals");
  if($(".uses-alpha").length > 0){
    requirejs(["modules/alpha-module"]);
  }
  if($(".uses-beta").length > 0){
    requirejs(["modules/beta-module"]);
  }
  if($(".owl-carousel").length > 0){
    requirejs(["plugins/owl.carousel.min"]);
  }
}

$(document).ready(function()
{
  loadRequiredComponents();
  loadOptionalComponents();
});
