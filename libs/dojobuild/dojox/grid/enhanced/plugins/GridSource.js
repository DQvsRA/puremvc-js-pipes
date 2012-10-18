//>>built
define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dnd/Source","./DnD"],function(j,h,g,m){var k=function(b){for(var a=b[0],c=1;c<b.length;++c)a=a.concat(b[c]);return a},l=g.getObject("dojox.grid.enhanced.plugins.GridDnDSource");return j("dojox.grid.enhanced.plugins.GridSource",m,{accept:["grid/cells","grid/rows","grid/cols","text"],insertNodesForGrid:!1,markupFactory:function(b,a){cls=g.getObject("dojox.grid.enhanced.plugins.GridSource");return new cls(a,b)},checkAcceptance:function(b,
a){if(b instanceof l){if(a[0]){var c=b.getItem(a[0].id);if(c&&(0<=h.indexOf(c.type,"grid/rows")||0<=h.indexOf(c.type,"grid/cells"))&&!b.dndPlugin._allDnDItemsLoaded())return!1}this.sourcePlugin=b.dndPlugin}return this.inherited(arguments)},onDraggingOver:function(){if(this.sourcePlugin)this.sourcePlugin._isSource=!0},onDraggingOut:function(){if(this.sourcePlugin)this.sourcePlugin._isSource=!1},onDropExternal:function(b,a,c){if(b instanceof l){var d=h.map(a,function(a){return b.getItem(a.id).data}),
i=b.getItem(a[0].id),e=i.dndPlugin.grid,g=i.type[0],f;try{switch(g){case "grid/cells":a[0].innerHTML=this.getCellContent(e,d[0].min,d[0].max)||"";this.onDropGridCells(e,d[0].min,d[0].max);break;case "grid/rows":f=k(d);a[0].innerHTML=this.getRowContent(e,f)||"";this.onDropGridRows(e,f);break;case "grid/cols":f=k(d),a[0].innerHTML=this.getColumnContent(e,f)||"",this.onDropGridColumns(e,f)}this.insertNodesForGrid&&(this.selectNone(),this.insertNodes(!0,[a[0]],this.before,this.current));i.dndPlugin.onDragOut(!c)}catch(j){}}else this.inherited(arguments)},
getCellContent:function(){},getRowContent:function(){},getColumnContent:function(){},onDropGridCells:function(){},onDropGridRows:function(){},onDropGridColumns:function(){}})});