//>>built
define(["../main","dojo/_base/lang","dojo/dom"],function(f,h,i){var a=h.getObject("grid.util",!0,f);a.na="...";a.rowIndexTag="gridRowIndex";a.gridViewTag="gridView";a.fire=function(b,e,c){var a=b&&e&&b[e];return a&&(c?a.apply(b,c):b[e]())};a.setStyleHeightPx=function(b,e){if(0<=e){var a=b.style,d=e+"px";b&&a.height!=d&&(a.height=d)}};a.mouseEvents="mouseover,mouseout,mousedown,mouseup,click,dblclick,contextmenu".split(",");a.keyEvents=["keyup","keydown","keypress"];a.funnelEvents=function(b,e,c,d){for(var d=
d?d:a.mouseEvents.concat(a.keyEvents),g=0,f=d.length;g<f;g++)e.connect(b,"on"+d[g],c)};a.removeNode=function(b){(b=i.byId(b))&&b.parentNode&&b.parentNode.removeChild(b);return b};a.arrayCompare=function(b,a){for(var c=0,d=b.length;c<d;c++)if(b[c]!=a[c])return!1;return b.length==a.length};a.arrayInsert=function(b,a,c){b.length<=a?b[a]=c:b.splice(a,0,c)};a.arrayRemove=function(b,a){b.splice(a,1)};a.arraySwap=function(a,e,c){var d=a[e];a[e]=a[c];a[c]=d};return a});