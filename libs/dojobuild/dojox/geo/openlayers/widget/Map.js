//>>built
define("dojo/_base/lang,dojo/_base/declare,dojo/_base/array,dojo/dom-geometry,dojo/query,dijit/_Widget,../_base,../Map,../Layer,../GfxLayer".split(","),function(e,g,h,f,i,j,k,l){return g("dojox.geo.openlayers.widget.Map",j,{baseLayerType:k.BaseLayerType.OSM,initialLocation:null,touchHandler:!1,map:null,startup:function(){this.inherited(arguments);this.map.initialFit({initialLocation:this.initialLocation})},buildRendering:function(){this.inherited(arguments);this.map=new l(this.domNode,{baseLayerType:this.baseLayerType,
touchHandler:this.touchHandler});this._makeLayers()},_makeLayers:function(){var d=i("> .layer",this.domNode);h.forEach(d,function(b){var a=b.getAttribute("type"),b=b.getAttribute("name");if(a=e.getObject("dojox.geo.openlayers."+a))(a=new a(b,{}))&&this.map.addLayer(a)},this)},resize:function(d,b){var a=this.map.getOLMap(),c;switch(arguments.length){case 1:c=e.mixin({},d);f.setMarginBox(a.div,c);break;case 2:c={w:arguments[0],h:arguments[1]},f.setMarginBox(a.div,c)}a.updateSize()}})});