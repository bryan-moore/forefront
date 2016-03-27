/// <reference path="../../bower_components/DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />

interface IRequireConfig
{
   useMinified: boolean;
}

require.config({
  "shim":
  {
    "plugins/jquery.hoverIntent.minified": ["libraries/jquery-2.2.2.min"],
    "plugins/owl.carousel.min": ["libraries/jquery-2.2.2.min"]
  }
});

function loadRequiredComponents()
{
  console.log('req components');
  requirejs(
  [
    'plugins/jquery.hoverIntent.minified',
    'modules/navigation-module'
  ]);
}

function loadOptionalComponents()
{
  if($('.owl-carousel').length > 0){
    console.log('has carousel');
  }
}

$(document).ready(function()
{
  loadRequiredComponents();
  //loadOptionalComponents();
});
