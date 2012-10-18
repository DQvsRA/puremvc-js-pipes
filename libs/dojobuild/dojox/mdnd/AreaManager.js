//>>built
define("dojo/_base/kernel,dojo/_base/declare,dojo/_base/connect,dojo/_base/window,dojo/_base/array,dojo/_base/sniff,dojo/_base/lang,dojo/query,dojo/topic,dojo/dom-class,dojo/dom-geometry,dojo/dom-construct,dijit/registry,dijit/_Widget,./Moveable".split(","),function(g,l,e,t,i,m,o,p,u,k,r,n,j,q,s){l=l("dojox.mdnd.AreaManager",null,{autoRefresh:!0,areaClass:"dojoxDndArea",dragHandleClass:"dojoxDragHandle",constructor:function(){this._areaList=[];this.resizeHandler=e.connect(g.global,"onresize",this,
function(){this._dropMode.updateAreas(this._areaList)});this._oldIndexArea=this._currentIndexArea=this._oldDropIndex=this._currentDropIndex=this._sourceIndexArea=this._sourceDropIndex=-1},init:function(){this.registerByClass()},registerByNode:function(a,b){var c=this._getIndexArea(a);if(a&&-1==c){var c=(c=a.getAttribute("accept"))?c.split(/\s*,\s*/):["text"],d={node:a,items:[],coords:{},margin:null,accept:c,initItems:!1};i.forEach(this._getChildren(a),function(a){this._setMarginArea(d,a);d.items.push(this._addMoveableItem(a))},
this);this._areaList=this._dropMode.addArea(this._areaList,d);b||this._dropMode.updateAreas(this._areaList);e.publish("/dojox/mdnd/manager/register",[a])}},registerByClass:function(){p("."+this.areaClass).forEach(function(a){this.registerByNode(a,!0)},this);this._dropMode.updateAreas(this._areaList)},unregister:function(a){a=this._getIndexArea(a);return-1!=a?(i.forEach(this._areaList[a].items,function(a){this._deleteMoveableItem(a)},this),this._areaList.splice(a,1),this._dropMode.updateAreas(this._areaList),
!0):!1},_addMoveableItem:function(a){a.setAttribute("tabIndex","0");var b=this._searchDragHandle(a),c=new s({handle:b,skip:!0},a);k.add(b||a,"dragHandle");b=a.getAttribute("dndType");b={item:c,type:b?b.split(/\s*,\s*/):["text"],handlers:[e.connect(c,"onDragStart",this,"onDragStart")]};if(j&&j.byNode){var d=j.byNode(a);if(d)b.type=d.dndType?d.dndType.split(/\s*,\s*/):["text"],b.handlers.push(e.connect(d,"uninitialize",this,function(){this.removeDragItem(a.parentNode,c.node)}))}return b},_deleteMoveableItem:function(a){i.forEach(a.handlers,
function(a){e.disconnect(a)});var b=a.item.node,c=this._searchDragHandle(b);k.remove(c||b,"dragHandle");a.item.destroy()},_getIndexArea:function(a){if(a)for(var b=0;b<this._areaList.length;b++)if(this._areaList[b].node===a)return b;return-1},_searchDragHandle:function(a){if(a){var b=this.dragHandleClass.split(" "),c=b.length,d="";i.forEach(b,function(a,b){d+="."+a;b!=c-1&&(d+=", ")});return p(d,a)[0]}},addDragItem:function(a,b,c,d){var e=!0;d||(e=a&&b&&(null===b.parentNode||b.parentNode&&1!==b.parentNode.nodeType));
if(e&&(d=this._getIndexArea(a),-1!==d)){var e=this._addMoveableItem(b),f=this._areaList[d].items;if(0<=c&&c<f.length){var g=f.slice(0,c),i=f.slice(c,f.length);g[g.length]=e;this._areaList[d].items=g.concat(i);a.insertBefore(b,f[c].item.node)}else this._areaList[d].items.push(e),a.appendChild(b);this._setMarginArea(this._areaList[d],b);this._areaList[d].initItems=!1;return!0}return!1},removeDragItem:function(a,b){var c=this._getIndexArea(a);if(a&&-1!==c)for(var c=this._areaList[c].items,d=0;d<c.length;d++)if(c[d].item.node===
b)return this._deleteMoveableItem(c[d]),c.splice(d,1),a.removeChild(b);return null},_getChildren:function(a){var b=[];i.forEach(a.childNodes,function(a){if(1==a.nodeType)if(j&&j.byNode){var d=j.byNode(a);d?d.dragRestriction||b.push(a):b.push(a)}else b.push(a)});return b},_setMarginArea:function(a,b){if(a&&null===a.margin&&b)a.margin=r.getMarginExtents(b)},findCurrentIndexArea:function(a,b){this._oldIndexArea=this._currentIndexArea;this._currentIndexArea=this._dropMode.getTargetArea(this._areaList,
a,this._currentIndexArea);if(this._currentIndexArea!=this._oldIndexArea){if(-1!=this._oldIndexArea)this.onDragExit(a,b);if(-1!=this._currentIndexArea)this.onDragEnter(a,b)}return this._currentIndexArea},_isAccepted:function(a,b){this._accept=!1;for(var c=0;c<b.length;++c)for(var d=0;d<a.length;++d)if(a[d]==b[c]){this._accept=!0;break}},onDragStart:function(a,b,c){this.autoRefresh&&this._dropMode.updateAreas(this._areaList);var d=m("webkit")?g.body():g.body().parentNode;if(!this._cover)this._cover=
n.create("div",{"class":"dndCover"}),this._cover2=o.clone(this._cover),k.add(this._cover2,"dndCover2");this._cover.style.height=this._cover2.style.height=d.scrollHeight+"px";g.body().appendChild(this._cover);g.body().appendChild(this._cover2);this._dragStartHandler=e.connect(a.ownerDocument,"ondragstart",g,"stopEvent");this._sourceIndexArea=this._lastValidIndexArea=this._currentIndexArea=this._getIndexArea(a.parentNode);for(var d=this._areaList[this._sourceIndexArea],h=d.items,f=0;f<h.length;f++)if(h[f].item.node==
a){this._dragItem=h[f];this._dragItem.handlers.push(e.connect(this._dragItem.item,"onDrag",this,"onDrag"));this._dragItem.handlers.push(e.connect(this._dragItem.item,"onDragEnd",this,"onDrop"));h.splice(f,1);this._currentDropIndex=this._sourceDropIndex=f;break}h=null;if(this._sourceDropIndex!==d.items.length)h=d.items[this._sourceDropIndex].item.node;if(7<m("ie"))this._eventsIE7=[e.connect(this._cover,"onmouseover",g,"stopEvent"),e.connect(this._cover,"onmouseout",g,"stopEvent"),e.connect(this._cover,
"onmouseenter",g,"stopEvent"),e.connect(this._cover,"onmouseleave",g,"stopEvent")];f=a.style;f.left=b.x+"px";f.top=b.y+"px";if("relative"==f.position||""==f.position)f.position="absolute";this._cover.appendChild(a);this._dropIndicator.place(d.node,h,c);k.add(a,"dragNode");this._accept=!0;e.publish("/dojox/mdnd/drag/start",[a,d,this._sourceDropIndex])},onDragEnter:function(){this._currentIndexArea===this._sourceIndexArea?this._accept=!0:this._isAccepted(this._dragItem.type,this._areaList[this._currentIndexArea].accept)},
onDragExit:function(){this._accept=!1},onDrag:function(a,b,c,d){a=this._dropMode.getDragPoint(b,c,d);this.findCurrentIndexArea(a,c);-1!==this._currentIndexArea&&this._accept&&this.placeDropIndicator(a,c)},placeDropIndicator:function(a,b){this._oldDropIndex=this._currentDropIndex;var c=this._areaList[this._currentIndexArea];c.initItems||this._dropMode.initItems(c);this._currentDropIndex=this._dropMode.getDropIndex(c,a);this._currentIndexArea===this._oldIndexArea&&this._oldDropIndex===this._currentDropIndex||
this._placeDropIndicator(b);return this._currentDropIndex},_placeDropIndicator:function(a){var b=this._areaList[this._currentIndexArea];this._dropMode.refreshItems(this._areaList[this._lastValidIndexArea],this._oldDropIndex,a,!1);var c=null;if(-1!=this._currentDropIndex)c=b.items[this._currentDropIndex].item.node;this._dropIndicator.place(b.node,c);this._lastValidIndexArea=this._currentIndexArea;this._dropMode.refreshItems(b,this._currentDropIndex,a,!0)},onDropCancel:function(){if(!this._accept){var a=
this._getIndexArea(this._dropIndicator.node.parentNode);this._currentIndexArea=-1!=a?a:0}},onDrop:function(a){this.onDropCancel();var b=this._areaList[this._currentIndexArea];k.remove(a,"dragNode");var c=a.style;c.position="relative";c.left="0";c.top="0";c.width="auto";b.node==this._dropIndicator.node.parentNode?b.node.insertBefore(a,this._dropIndicator.node):(b.node.appendChild(a),this._currentDropIndex=b.items.length);c=this._currentDropIndex;if(-1==c)c=b.items.length;var d=b.items,h=d.slice(0,
c),d=d.slice(c,d.length);h[h.length]=this._dragItem;b.items=h.concat(d);this._setMarginArea(b,a);i.forEach(this._areaList,function(a){a.initItems=!1});e.disconnect(this._dragItem.handlers.pop());e.disconnect(this._dragItem.handlers.pop());this._resetAfterDrop();this._cover&&(g.body().removeChild(this._cover),g.body().removeChild(this._cover2));e.publish("/dojox/mdnd/drop",[a,b,c])},_resetAfterDrop:function(){this._accept=!1;this._dragItem=null;this._sourceDropIndex=this._sourceIndexArea=this._oldDropIndex=
this._currentIndexArea=this._currentDropIndex=-1;this._dropIndicator.remove();this._dragStartHandler&&e.disconnect(this._dragStartHandler);7<m("ie")&&i.forEach(this._eventsIE7,e.disconnect)},destroy:function(){for(;0<this._areaList.length;)if(!this.unregister(this._areaList[0].node))throw Error("Error while destroying AreaManager");e.disconnect(this.resizeHandler);this._dropIndicator.destroy();this._dropMode.destroy();dojox.mdnd.autoScroll&&dojox.mdnd.autoScroll.destroy();this.refreshListener&&e.unsubscribe(this.refreshListener);
this._cover&&(n.destroy(this._cover),n.destroy(this._cover2),delete this._cover,delete this._cover2)}});q&&o.extend(q,{dndType:"text"});dojox.mdnd._areaManager=null;dojox.mdnd.areaManager=function(){if(!dojox.mdnd._areaManager)dojox.mdnd._areaManager=new dojox.mdnd.AreaManager;return dojox.mdnd._areaManager};return l});