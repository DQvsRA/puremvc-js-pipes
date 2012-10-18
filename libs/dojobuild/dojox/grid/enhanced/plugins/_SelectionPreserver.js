//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","../../_SelectionPreserver"],function(l,h,e,m){return l("dojox.grid.enhanced.plugins._SelectionPreserver",m,{constructor:function(d){var a=this.grid;a.onSelectedById=this.onSelectedById;this._oldClearData=a._clearData;var b=this;a._clearData=function(){b._updateMapping(!a._noInternalMapping);b._trustSelection=[];b._oldClearData.apply(a,arguments)};this._connects.push(e.connect(d,"selectRange",h.hitch(this,"_updateMapping",!0,!0,!1)),
e.connect(d,"deselectRange",h.hitch(this,"_updateMapping",!0,!1,!1)),e.connect(d,"deselectAll",h.hitch(this,"_updateMapping",!0,!1,!0)))},destroy:function(){this.inherited(arguments);this.grid._clearData=this._oldClearData},reset:function(){this.inherited(arguments);this._idMap=[];this._trustSelection=[];this._defaultSelected=!1},_reSelectById:function(d,a){var b=this.selection,i=this.grid;if(d&&i._hasIdentity){var f=i.store.getIdentity(d);if(void 0===this._selectedById[f]){if(!this._trustSelection[a])b.selected[a]=
this._defaultSelected}else b.selected[a]=this._selectedById[f];this._idMap.push(f);i.onSelectedById(f,a,b.selected[a])}},_selectById:function(d,a){this.inherited(arguments)||(this._trustSelection[a]=!0)},onSelectedById:function(){},_updateMapping:function(d,a,b,i,f){var h=this.selection,g=this.grid,e=0,k=0,c,j;for(c=g.rowCount-1;0<=c;--c)if(g._by_idx[c]){if((j=g._by_idx[c].idty)&&(d||void 0===this._selectedById[j]))this._selectedById[j]=!!h.selected[c]}else++k,e+=h.selected[c]?1:-1;if(k)this._defaultSelected=
0<e;!b&&void 0!==i&&void 0!==f&&(b=!g.usingPagination&&Math.abs(f-i+1)===g.rowCount);if(b&&(!g.usingPagination||"single"===g.selectionMode))for(c=this._idMap.length-1;0<=c;--c)this._selectedById[this._idMap[c]]=a}})});