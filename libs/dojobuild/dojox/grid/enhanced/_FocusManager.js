//>>built
define("dojo/_base/kernel,dojo/_base/lang,dojo/_base/declare,dojo/_base/array,dojo/_base/connect,dojo/_base/event,dojo/_base/sniff,dojo/_base/html,dojo/keys,dijit/a11y,dijit/focus,../_FocusManager".split(","),function(r,e,n,g,i,j,m,k,h,p,l,q){var o=n("dojox.grid.enhanced._FocusArea",null,{constructor:function(a,c){this._fm=c;this._evtStack=[a.name];var b=function(){return!0};a.onFocus=a.onFocus||b;a.onBlur=a.onBlur||b;a.onMove=a.onMove||b;a.onKeyUp=a.onKeyUp||b;a.onKeyDown=a.onKeyDown||b;e.mixin(this,
a)},move:function(a,c,b){if(this.name){var d;for(d=this._evtStack.length-1;0<=d;--d)if(!1===this._fm._areas[this._evtStack[d]].onMove(a,c,b))return!1}return!0},_onKeyEvent:function(a,c){if(this.name){var b,d=this._evtStack.length;for(b=d-1;0<=b;--b)if(!1===this._fm._areas[this._evtStack[b]][c](a,!1))return!1;for(b=0;b<d;++b)if(!1===this._fm._areas[this._evtStack[b]][c](a,!0))return!1}return!0},keydown:function(a){return this._onKeyEvent(a,"onKeyDown")},keyup:function(a){return this._onKeyEvent(a,
"onKeyUp")},contentMouseEventPlanner:function(){return 0},headerMouseEventPlanner:function(){return 0}});return n("dojox.grid.enhanced._FocusManager",q,{_stopEvent:function(a){try{a&&a.preventDefault&&j.stop(a)}catch(c){}},constructor:function(a){this.grid=a;this._areas={};this._areaQueue=[];this._contentMouseEventHandlers=[];this._headerMouseEventHandlers=[];this._currentAreaIdx=-1;this._gridBlured=!0;this._connects.push(i.connect(a,"onBlur",this,"_doBlur"));this._connects.push(i.connect(a.scroller,
"renderPage",this,"_delayedCellFocus"));this.addArea({name:"header",onFocus:e.hitch(this,this.focusHeader),onBlur:e.hitch(this,this._blurHeader),onMove:e.hitch(this,this._navHeader),getRegions:e.hitch(this,this._findHeaderCells),onRegionFocus:e.hitch(this,this.doColHeaderFocus),onRegionBlur:e.hitch(this,this.doColHeaderBlur),onKeyDown:e.hitch(this,this._onHeaderKeyDown)});this.addArea({name:"content",onFocus:e.hitch(this,this._focusContent),onBlur:e.hitch(this,this._blurContent),onMove:e.hitch(this,
this._navContent),onKeyDown:e.hitch(this,this._onContentKeyDown)});this.addArea({name:"editableCell",onFocus:e.hitch(this,this._focusEditableCell),onBlur:e.hitch(this,this._blurEditableCell),onKeyDown:e.hitch(this,this._onEditableCellKeyDown),onContentMouseEvent:e.hitch(this,this._onEditableCellMouseEvent),contentMouseEventPlanner:function(){return-1}});this.placeArea("header");this.placeArea("content");this.placeArea("editableCell");this.placeArea("editableCell","above","content")},destroy:function(){for(var a in this._areas){var c=
this._areas[a];g.forEach(c._connects,i.disconnect);c._connects=null;c.uninitialize&&c.uninitialize()}this.inherited(arguments)},addArea:function(a){a.name&&e.isString(a.name)&&(this._areas[a.name]&&g.forEach(a._connects,i.disconnect),this._areas[a.name]=new o(a,this),a.onHeaderMouseEvent&&this._headerMouseEventHandlers.push(a.name),a.onContentMouseEvent&&this._contentMouseEventHandlers.push(a.name))},getArea:function(a){return this._areas[a]},_bindAreaEvents:function(){var a,c,b=this._areas;g.forEach(this._areaQueue,
function(d){a=b[d];if(!a._initialized&&e.isFunction(a.initialize))a.initialize(),a._initialized=!0;if(a.getRegions)a._regions=a.getRegions()||[],g.forEach(a._connects||[],i.disconnect),a._connects=[],g.forEach(a._regions,function(b){a.onRegionFocus&&(c=i.connect(b,"onfocus",a.onRegionFocus),a._connects.push(c));a.onRegionBlur&&(c=i.connect(b,"onblur",a.onRegionBlur),a._connects.push(c))})})},removeArea:function(a){var c=this._areas[a];if(c){this.ignoreArea(a);var b=g.indexOf(this._contentMouseEventHandlers,
a);0<=b&&this._contentMouseEventHandlers.splice(b,1);b=g.indexOf(this._headerMouseEventHandlers,a);0<=b&&this._headerMouseEventHandlers.splice(b,1);g.forEach(c._connects,i.disconnect);c.uninitialize&&c.uninitialize();delete this._areas[a]}},currentArea:function(a,c){var b,d=this._currentAreaIdx;if(e.isString(a)&&0<=(b=g.indexOf(this._areaQueue,a))){if(d!=b){this.tabbingOut=!1;if(c&&0<=d&&d<this._areaQueue.length)this._areas[this._areaQueue[d]].onBlur();this._currentAreaIdx=b}}else return 0>d||d>=
this._areaQueue.length?new o({},this):this._areas[this._areaQueue[this._currentAreaIdx]];return null},placeArea:function(a,c,b){if(this._areas[a]){var d=g.indexOf(this._areaQueue,b);switch(c){case "after":0<=d&&++d;case "before":if(0<=d){this._areaQueue.splice(d,0,a);break}default:this._areaQueue.push(a);break;case "above":var f=!0;case "below":(c=this._areas[b])&&(f?c._evtStack.push(a):c._evtStack.splice(0,0,a))}}},ignoreArea:function(a){this._areaQueue=g.filter(this._areaQueue,function(c){return c!=
a})},focusArea:function(a,c){var b;b="number"==typeof a?0>a?this._areaQueue.length+a:a:g.indexOf(this._areaQueue,e.isString(a)?a:a&&a.name);0>b&&(b=0);b-=this._currentAreaIdx;this._gridBlured=!1;if(b)this.tab(b,c);else this.currentArea().onFocus(c,b)},tab:function(a,c){this.tabbingOut=this._gridBlured=!1;if(0!==a){var b=this._currentAreaIdx,d=0<a?1:-1;if(0>b||b>=this._areaQueue.length)b=this._currentAreaIdx+=a;else{var f=this._areas[this._areaQueue[b]].onBlur(c,a);if(!0===f)b=this._currentAreaIdx+=
a;else if(e.isString(f)&&this._areas[f])b=this._currentAreaIdx=g.indexOf(this._areaQueue,f)}for(;0<=b&&b<this._areaQueue.length;b+=d)if(this._currentAreaIdx=b,this._areaQueue[b]&&this._areas[this._areaQueue[b]].onFocus(c,a))return;this.tabbingOut=!0;0>a?(this._currentAreaIdx=-1,l.focus(this.grid.domNode)):(this._currentAreaIdx=this._areaQueue.length,l.focus(this.grid.lastFocusNode))}},_onMouseEvent:function(a,c){for(var b=a.toLowerCase(),d=this["_"+b+"MouseEventHandlers"],f=g.map(d,function(a){return{area:a,
idx:this._areas[a][b+"MouseEventPlanner"](c,d)}},this).sort(function(a,b){return b.idx-a.idx}),e=g.map(f,function(){return f.area}),h=f.length;0<=--h&&!(!1===this._areas[f[h].area]["on"+a+"MouseEvent"](c,e)););},contentMouseEvent:function(a){this._onMouseEvent("Content",a)},headerMouseEvent:function(a){this._onMouseEvent("Header",a)},initFocusView:function(){this.focusView=this.grid.views.getFirstScrollingView()||this.focusView||this.grid.views.views[0];this._bindAreaEvents()},isNavHeader:function(){return"header"==
this._areaQueue[this._currentAreaIdx]},previousKey:function(a){this.tab(-1,a)},nextKey:function(a){this.tab(1,a)},setFocusCell:function(a,c){if(a)this.currentArea(this.grid.edit.isEditing()?"editableCell":"content",!0),this._focusifyCellNode(!1),this.cell=a,this.rowIndex=c,this._focusifyCellNode(!0);this.grid.onCellFocus(this.cell,this.rowIndex)},doFocus:function(a){if(a&&a.target==a.currentTarget&&!this.tabbingOut){if(this._gridBlured)this._gridBlured=!1,0>this._currentAreaIdx||this._currentAreaIdx>=
this._areaQueue.length?this.focusArea(0,a):this.focusArea(this._currentAreaIdx,a)}else this.tabbingOut=!1;j.stop(a)},_doBlur:function(){this._gridBlured=!0},doLastNodeFocus:function(a){this.tabbingOut?this.tabbingOut=!1:this.focusArea(-1,a)},_delayedHeaderFocus:function(){this.isNavHeader()&&!m("ie")&&this.focusHeader()},_delayedCellFocus:function(){},_changeMenuBindNode:function(a,c){var b=this.grid.headerMenu;if(b&&this._contextMenuBindNode==a)b.unBindDomNode(a),b.bindDomNode(c),this._contextMenuBindNode=
c},focusHeader:function(a,c){var b=!1;this.inherited(arguments);this._colHeadNode&&"none"!=k.style(this._colHeadNode,"display")&&(l.focus(this._colHeadNode),this._stopEvent(a),b=!0);return b},_blurHeader:function(){this._colHeadNode&&k.removeClass(this._colHeadNode,this.focusClass);k.removeAttr(this.grid.domNode,"aria-activedescendant");this._changeMenuBindNode(this.grid.domNode,this.grid.viewsHeaderNode);this._colHeadNode=this._colHeadFocusIdx=null;return!0},_navHeader:function(a,c,b){var d=0>c?
-1:1,f=g.indexOf(this._findHeaderCells(),this._colHeadNode);0<=f&&b.shiftKey&&b.ctrlKey?this.colSizeAdjust(b,f,5*d):this.move(a,c)},_onHeaderKeyDown:function(a,c){if(c)switch(a.keyCode){case h.ENTER:case h.SPACE:var b=this.getHeaderIndex();0<=b&&!this.grid.pluginMgr.isFixedCell(a.cell)&&(this.grid.setSortIndex(b,null,a),j.stop(a))}return!0},_setActiveColHeader:function(){this.inherited(arguments);l.focus(this._colHeadNode)},findAndFocusGridCell:function(){this._focusContent()},_focusContent:function(a){var c=
!0,b=0===this.grid.rowCount;if(this.isNoFocusCell()&&!b){for(var b=0,d=this.grid.getCell(0);d&&d.hidden;d=this.grid.getCell(++b));this.setFocusIndex(0,d?b:0)}else this.cell&&!b?this.focusView&&!this.focusView.rowNodes[this.rowIndex]?(this.grid.scrollToRow(this.rowIndex),this.focusGrid()):this.setFocusIndex(this.rowIndex,this.cell.index):c=!1;c&&this._stopEvent(a);return c},_blurContent:function(){this._focusifyCellNode(!1);return!0},_navContent:function(a,c,b){if(!(0===this.rowIndex&&0>a||this.rowIndex===
this.grid.rowCount-1&&0<a))this._colHeadNode=null,this.move(a,c,b),b&&j.stop(b)},_onContentKeyDown:function(a,c){if(c){var b=this.grid.scroller;switch(a.keyCode){case h.ENTER:case h.SPACE:b=this.grid;if(b.indirectSelection)break;b.selection.clickSelect(this.rowIndex,i.isCopyKey(a),a.shiftKey);b.onRowClick(a);j.stop(a);break;case h.PAGE_UP:0!==this.rowIndex&&(this.rowIndex!=b.firstVisibleRow+1?this._navContent(b.firstVisibleRow-this.rowIndex,0):(this.grid.setScrollTop(b.findScrollTop(this.rowIndex-
1)),this._navContent(b.firstVisibleRow-b.lastVisibleRow+1,0)),j.stop(a));break;case h.PAGE_DOWN:this.rowIndex+1!=this.grid.rowCount&&(j.stop(a),this.rowIndex!=b.lastVisibleRow-1?this._navContent(b.lastVisibleRow-this.rowIndex-1,0):(this.grid.setScrollTop(b.findScrollTop(this.rowIndex+1)),this._navContent(b.lastVisibleRow-b.firstVisibleRow-1,0)),j.stop(a))}}return!0},_blurFromEditableCell:!1,_isNavigating:!1,_navElems:null,_focusEditableCell:function(a,c){var b=!1;if(this._isNavigating)b=!0;else if(this.grid.edit.isEditing()&&
this.cell){if(this._blurFromEditableCell||!this._blurEditableCell(a,c))this.setFocusIndex(this.rowIndex,this.cell.index),b=!0;this._stopEvent(a)}return b},_applyEditableCell:function(){try{this.grid.edit.apply()}catch(a){}},_blurEditableCell:function(a,c){this._blurFromEditableCell=!1;if(this._isNavigating){var b=!0;if(a)var d=this._navElems,b=d.lowest||d.first,d=d.last||d.highest||b,b=(m("ie")?a.srcElement:a.target)==(0<c?d:b);return b?(this._isNavigating=!1,k.setSelectable(this.cell.getNode(this.rowIndex),
!1),"content"):!1}if(this.grid.edit.isEditing()&&this.cell){if(!c||"number"!=typeof c)return!1;for(var b=0<c?1:-1,d=this.grid.layout.cellCount,f,e=this.cell.index+b;0<=e&&e<d;e+=b)if(f=this.grid.getCell(e),f.editable)return this.cell=f,this._blurFromEditableCell=!0,!1;if((0<this.rowIndex||1==b)&&(this.rowIndex<this.grid.rowCount||-1==b)){this.rowIndex+=b;for(e=0<b?0:d-1;0<=e&&e<d;e+=b)if(f=this.grid.getCell(e),f.editable){this.cell=f;break}this._applyEditableCell();return"content"}}return!0},_initNavigatableElems:function(){this._navElems=
p._getTabNavigable(this.cell.getNode(this.rowIndex))},_onEditableCellKeyDown:function(a,c){var b=this.grid,d=b.edit,e=!1,g=!0;switch(a.keyCode){case h.ENTER:c&&d.isEditing()&&(this._applyEditableCell(),e=!0,j.stop(a));case h.SPACE:if(!c&&this._isNavigating){g=!1;break}if(c){if(!this.cell.editable&&this.cell.navigatable){this._initNavigatableElems();var i=this._navElems.lowest||this._navElems.first;if(i){this._isNavigating=!0;k.setSelectable(this.cell.getNode(this.rowIndex),!0);l.focus(i);j.stop(a);
this.currentArea("editableCell",!0);break}}!e&&!d.isEditing()&&!b.pluginMgr.isFixedCell(this.cell)&&d.setEditCell(this.cell,this.rowIndex);e?this.currentArea("content",!0):this.cell.editable&&b.canEdit()&&this.currentArea("editableCell",!0)}break;case h.PAGE_UP:case h.PAGE_DOWN:!c&&d.isEditing()&&(g=!1);break;case h.ESCAPE:c||(d.cancel(),this.currentArea("content",!0))}return g},_onEditableCellMouseEvent:function(a){if("click"==a.type){var c=this.cell||a.cell;if(c&&!c.editable&&c.navigatable){if(this._initNavigatableElems(),
this._navElems.lowest||this._navElems.first){var b=m("ie")?a.srcElement:a.target;if(b!=c.getNode(a.rowIndex))return this._isNavigating=!0,this.focusArea("editableCell",a),k.setSelectable(c.getNode(a.rowIndex),!0),l.focus(b),!1}}else if(this.grid.singleClickEdit)return this.currentArea("editableCell"),!1}return!0}})});