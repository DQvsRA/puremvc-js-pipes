//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/Stateful"],function(e,d,f){return e("dojox.widget._Invalidating",f,{invalidatingProperties:null,invalidRendering:!1,postscript:function(a){this.inherited(arguments);if(this.invalidatingProperties)for(var c=this.invalidatingProperties,b=0;b<c.length;b++)this.watch(c[b],d.hitch(this,this.invalidateRendering)),a&&c[b]in a&&this.invalidateRendering()},addInvalidatingProperties:function(a){this.invalidatingProperties=this.invalidatingProperties?this.invalidatingProperties.concat(a):
a},invalidateRendering:function(){if(!this.invalidRendering)this.invalidRendering=!0,setTimeout(d.hitch(this,this.validateRendering),0)},validateRendering:function(){if(this.invalidRendering)this.refreshRendering(),this.invalidRendering=!1},refreshRendering:function(){}})});