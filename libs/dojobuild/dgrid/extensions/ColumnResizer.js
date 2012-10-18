//>>built
define("dojo/_base/declare,dojo/on,dojo/query,dojo/_base/lang,dojo/dom,dojo/dom-geometry,dojo/has,../util/misc,put-selector/put,dojo/_base/html,xstyle/css!../css/extensions/ColumnResizer.css".split(","),function(u,l,i,v,s,w,g,x,j){function t(b){for(var a=b.length,c=a,f=b[0].length,d=Array(a);a--;)d[a]=Array(f);for(var h={},a=0;a<c;a++)for(var m=d[a],n=b[a],k=0,i=0;k<f;k++){var e=n[i],o;if("undefined"==typeof m[k]){m[k]=e.id;if(e.rowSpan&&1<e.rowSpan){o=d;for(var g=e.rowSpan,j=a,l=k,q=e.id,p=1;p<g;p++)o[j+
p][l]=q}if(0<a&&e.colSpan&&1<e.colSpan)for(o=1;o<e.colSpan;o++)if(m[++k]=e.id,e.rowSpan&&1<e.rowSpan)for(var g=d,j=e.rowSpan,l=a,q=k,p=e.id,r=1;r<j;r++)g[l+r][q]=p;h[e.id]=b[0][k].id;i++}}return h}var y=g("touch")&&webkitConvertPointFromNodeToPage;return u(null,{resizeNode:null,minWidth:40,gridWidth:null,_resizedColumns:!1,resizeColumnWidth:function(b,a){if(!(0>=a)){var c=this._columnStyles[b],f=this.styleColumn(b,"width: "+a+"px;");c&&c.remove();this._columnStyles[b]=f}},configStructure:function(){this._resizedColumns=
!1;for(var b in this._columnStyles)this._columnStyles[b].remove();this._columnStyles={};this.inherited(arguments)},renderHeader:function(){this.inherited(arguments);var b=this;b.gridWidth=b.headerNode.clientWidth-1;var a;if(this.columnSets&&this.columnSets.length)for(var c=this.columnSets.length;c--;)a=v.mixin(a||{},t(this.columnSets[c]));else this.subRows&&1<this.subRows.length&&(a=t(this.subRows));for(var c=i(".dgrid-cell",b.headerNode),f=c.length;f--;){var d=c[f],h=d.columnId,m=d.childNodes;if(b.columns[h]){var n=
j("div.dgrid-resize-header-container");for(d.contents=n;0<m.length;)j(n,m[0]);j(d,n,"div.dgrid-resize-handle.resizeNode-"+h).columnId=a?a[h]:h}}if(!b.mouseMoveListen)l(b.headerNode,".dgrid-resize-handle:mousedown"+(g("touch")?",.dgrid-resize-handle:touchstart":""),function(a){b._resizeMouseDown(a,this);b.mouseMoveListen.resume();b.mouseUpListen.resume()}),b.mouseMoveListen=l.pausable(document.body,"mousemove"+(g("touch")?",touchmove":""),x.throttleDelayed(function(a){b._updateResizerPosition(a)})),
b.mouseUpListen=l.pausable(document.body,"mouseup"+(g("touch")?",touchend":""),function(a){b._resizeMouseUp(a);b.mouseMoveListen.pause();b.mouseUpListen.pause()}),b.mouseMoveListen.pause(),b.mouseUpListen.pause()},_resizeMouseDown:function(b,a){b.preventDefault();s.setSelectable(this.domNode,!1);this._startX=this._getResizeMouseLocation(b);this._gridX=y?webkitConvertPointFromNodeToPage(this.bodyNode,new WebKitPoint(0,0)).x:w.position(this.bodyNode).x;this._targetCell=i(".dgrid-column-"+a.columnId,
this.headerNode)[0];if(!this._resizer)this._resizer=j(this.domNode,"div.dgrid-column-resizer");this._resizer.style.display="block";this._updateResizerPosition(b)},_resizeMouseUp:function(b){this._readyToResize=!1;if(!this._resizedColumns){var a=i(".dgrid-cell",this.headerNode);this.columnSets&&this.columnSets.length?a=a.filter(function(a){return"0"==a.columnId.split("-")[0]}):this.subRows&&1<this.subRows.length&&(a=a.filter(function(a){return"0"==a.columnId.charAt(0)}));var c=a.map(function(a){return a.offsetWidth});
a.forEach(function(a,b){this.resizeColumnWidth(a.columnId,c[b])},this);this._resizedColumns=!0}s.setSelectable(this.domNode,!0);var a=this._targetCell,b=this._getResizeMouseLocation(b)-this._startX,f=a.offsetWidth+b,d=this._getResizedColumnWidths(),h=d.totalWidth,d=d.lastColId,g=i(".dgrid-column-"+d,this.headerNode)[0].offsetWidth;a.columnId!=d&&(h+b<this.gridWidth?this.styleColumn(d,"width: auto;"):g-b<=this.minWidth&&this.resizeColumnWidth(d,this.minWidth));if(f<this.minWidth)f=this.minWidth;this.resizeColumnWidth(a.columnId,
f);this.resize();this._hideResizer()},_updateResizerPosition:function(b){var b=this._getResizeMouseLocation(b),a=this._targetCell,c=b-this._gridX;a.offsetWidth+(b-this._startX)<this.minWidth&&(c=this._startX-this._gridX-(a.offsetWidth-this.minWidth));this._resizer.style.left=c+"px"},_hideResizer:function(){this._resizer.style.display="none"},_getResizeMouseLocation:function(b){var a=0;b.pageX?a=b.pageX:b.clientX&&(a=b.clientX+document.body.scrollLeft+document.documentElement.scrollLeft);return a},
_getResizedColumnWidths:function(){var b=0,a=i(".dgrid-cell",this.headerNode);this.columnSets&&this.columnSets.length?a=a.filter(function(a){return"0"==a.columnId.split("-")[1]}):this.subRows&&1<this.subRows.length&&(a=a.filter(function(a){return"0"==a.columnId.charAt(0)}));var c=a.length;if(!c)return{};for(var f=a[c-1].columnId;c--;)b+=a[c].offsetWidth;return{totalWidth:b,lastColId:f}}})});