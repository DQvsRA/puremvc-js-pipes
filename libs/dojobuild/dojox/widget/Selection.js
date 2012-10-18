//>>built
define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/Stateful"],function(h,f,i,j){return h("dojox.widget.Selection",j,{constructor:function(){this.selectedItems=[]},selectionMode:"single",_setSelectionModeAttr:function(a){"none"!=a&&"single"!=a&&"multiple"!=a&&(a="single");if(a!=this.selectionMode)this.selectionMode=a,"none"==a?this.set("selectedItems",null):"single"==a&&this.set("selectedItem",this.selectedItem)},selectedItem:null,_setSelectedItemAttr:function(a){this.selectedItem!=
a&&(this._set("selectedItem",a),this.set("selectedItems",a?[a]:null))},selectedItems:null,_setSelectedItemsAttr:function(a){var b=this.selectedItems;this.selectedItems=a;this.selectedItem=null;null!=b&&0<b.length&&this.updateRenderers(b,!0);if(this.selectedItems&&0<this.selectedItems.length)this.selectedItem=this.selectedItems[0],this.updateRenderers(this.selectedItems,!0)},_getSelectedItemsAttr:function(){return null==this.selectedItems?[]:this.selectedItems.concat()},isItemSelected:function(a){return null==
this.selectedItems||0==this.selectedItems.length?!1:f.some(this.selectedItems,i.hitch(this,function(b){return this.getIdentity(b)==this.getIdentity(a)}))},getIdentity:function(){},setItemSelected:function(a,b){if(!("none"==this.selectionMode||null==a)){var c=this.get("selectedItems");this.get("selectedItems");if("single"==this.selectionMode)b?this.set("selectedItem",a):this.isItemSelected(a)&&this.set("selectedItems",null);else if(b)this.isItemSelected(a)||(null==c?c=[a]:c.unshift(a),this.set("selectedItems",
c));else{var d=f.filter(c,function(b){return b.id!=a.id});null==d||d.length==c.length||this.set("selectedItems",d)}}},selectFromEvent:function(a,b,c,d){if("none"==this.selectionMode)return!1;var e,f=this.get("selectedItem"),g=b?this.isItemSelected(b):!1;null==b?!a.ctrlKey&&null!=this.selectedItem&&(this.set("selectedItem",null),e=!0):"multiple"==this.selectionMode?(a.ctrlKey?this.setItemSelected(b,!g):this.set("selectedItem",b),e=!0):a.ctrlKey?(this.set("selectedItem",g?null:b),e=!0):g||(this.set("selectedItem",
b),e=!0);d&&e&&this.dispatchChange(f,this.get("selectedItem"),c,a);return e},dispatchChange:function(a,b,c,d){this.onChange({oldValue:a,newValue:b,renderer:c,triggerEvent:d})},onChange:function(){}})});