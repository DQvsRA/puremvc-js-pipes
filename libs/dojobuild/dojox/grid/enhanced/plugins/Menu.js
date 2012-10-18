//>>built
define("dojo/_base/declare,dojo/_base/array,dojo/_base/lang,dojo/_base/html,dojo/_base/event,dojo/keys,../_Plugin,../../EnhancedGrid".split(","),function(e,h,f,g,i,j,k,l){e=e("dojox.grid.enhanced.plugins.Menu",k,{name:"menus",types:["headerMenu","rowMenu","cellMenu","selectedRegionMenu"],constructor:function(){var a=this.grid;a.showMenu=f.hitch(a,this.showMenu);a._setRowMenuAttr=f.hitch(this,"_setRowMenuAttr");a._setCellMenuAttr=f.hitch(this,"_setCellMenuAttr");a._setSelectedRegionMenuAttr=f.hitch(this,
"_setSelectedRegionMenuAttr")},onStartUp:function(){var a,b=this.option;for(a in b)0<=h.indexOf(this.types,a)&&b[a]&&this._initMenu(a,b[a])},_initMenu:function(a,b){var c=this.grid;if(!c[a]){var d=this._getMenuWidget(b);if(d)c.set(a,d),"headerMenu"!=a?d._scheduleOpen=function(){}:c.setupHeaderMenu()}},_getMenuWidget:function(a){return a instanceof dijit.Menu?a:dijit.byId(a)},_setRowMenuAttr:function(a){this._setMenuAttr(a,"rowMenu")},_setCellMenuAttr:function(a){this._setMenuAttr(a,"cellMenu")},_setSelectedRegionMenuAttr:function(a){this._setMenuAttr(a,
"selectedRegionMenu")},_setMenuAttr:function(a,b){var c=this.grid,d=c.domNode;a&&a instanceof dijit.Menu&&(c[b]&&c[b].unBindDomNode(d),c[b]=a,c[b].bindDomNode(d))},showMenu:function(a){if((a.cellNode&&g.hasClass(a.cellNode,"dojoxGridRowSelected")||a.rowNode&&(g.hasClass(a.rowNode,"dojoxGridRowSelected")||g.hasClass(a.rowNode,"dojoxGridRowbarSelected")))&&this.selectedRegionMenu)this.onSelectedRegionContextMenu(a);else{var b={target:a.target,coords:a.keyCode!==j.F10&&"pageX"in a?{x:a.pageX,y:a.pageY}:
null};this.rowMenu&&(!this.cellMenu||this.selection.isSelected(a.rowIndex)||a.rowNode&&g.hasClass(a.rowNode,"dojoxGridRowbar"))?this.rowMenu._openMyself(b):this.cellMenu&&this.cellMenu._openMyself(b);i.stop(a)}},destroy:function(){var a=this.grid;a.headerMenu&&a.headerMenu.unBindDomNode(a.viewsHeaderNode);a.rowMenu&&a.rowMenu.unBindDomNode(a.domNode);a.cellMenu&&a.cellMenu.unBindDomNode(a.domNode);a.selectedRegionMenu&&a.selectedRegionMenu.destroy();this.inherited(arguments)}});l.registerPlugin(e);
return e});