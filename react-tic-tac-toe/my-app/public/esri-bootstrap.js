// (function (exports = (typeof exports == 'undefined') ? window : exports){
//     exports.EsriBootstrapper = {
//         loadLibrary: function loadLibrary() { 
//             exports.require([
//                 'esri/map',
//             ], function(map){
//                 var esriLib = {
//                     esri: {
//                         Map: Map
//                     }
//                 }
//             });
//         }
//     }; 
// })();
// window.EsriBootstrapper.loadLibrary();

var map; 
require(["esri/map", "dojo/domReady!"], function(Map) {
  map = new Map("viewDiv", {
    basemap: "topo",
    center: [-122.45, 37.75],
    zoom: 13
  });
});