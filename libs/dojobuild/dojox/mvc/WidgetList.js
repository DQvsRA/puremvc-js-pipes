//>>built
define("require,dojo/_base/array,dojo/_base/lang,dojo/_base/declare,dijit/_Container,dijit/_WidgetBase,dojox/mvc/Templated".split(","),function(n,i,e,g,b,o,p){function k(a){return eval("({"+a+"})")}function m(a){for(var c=null;c=(a._handles||[]).pop();)c.unwatch()}var h="data-mvc-child-props",l="data-mvc-child-bindings",b=g("dojox.mvc.WidgetList",[o,b],{childClz:null,childType:"",childMixins:"",childParams:null,childBindings:null,children:null,templateString:"",partialRebuild:!1,_relTargetProp:"children",
postMixInProperties:function(){this.inherited(arguments);if(this["data-mvc-child-type"])this.childType=this["data-mvc-child-type"];if(this["data-mvc-child-mixins"])this.childMixins=this["data-mvc-child-mixins"]},startup:function(){this.inherited(arguments);this._setChildrenAttr(this.children)},_setChildrenAttr:function(a){var c=this.children;this._set("children",a);if(this._started&&(!this._builtOnce||c!=a))if(m(this),this._builtOnce=!0,this._buildChildren(a),e.isArray(a)){var b=this;!this.partialRebuild&&
e.isFunction(a.watchElements)&&(this._handles=this._handles||[]).push(a.watchElements(function(){b._buildChildren(a)}));a.watch!=={}.watch&&(this._handles=this._handles||[]).push(a.watch(function(a,c,e){isNaN(a)||(a=b.getChildren()[a-0])&&a.set(a._relTargetProp||"target",e)}))}},_buildChildren:function(a){for(var c=this.getChildren(),b=null;b=c.pop();)this.removeChild(b),b.destroy();if(e.isArray(a))c=e.hitch(this,function(b){function c(a,b){i.forEach(i.map(a,function(a,c){var f={ownerDocument:d.ownerDocument,
parent:d,indexAtStartup:b+c};f[(d.childParams||d[h]&&k.call(f,d[h])||{})._relTargetProp||j.prototype._relTargetProp||"target"]=a;var i=d.childParams||d[h]&&k.call(f,d[h]),g=d.childBindings||d[l]&&k.call(f,d[l]);if(d.templateString&&!f.templateString&&!j.prototype.templateString)f.templateString=d.templateString;if(g&&!f.bindings&&!j.prototype.bindings)f.bindings=g;return new j(e.mixin(f,i))}),function(a,c){d.addChild(a,b+c)})}if(!(this._buildChildrenSeq>b)){var j=g([].slice.call(arguments,1),{}),
d=this;c(a,0);if(this.partialRebuild)e.isFunction(a.watchElements)&&(this._handles=this._handles||[]).push(a.watchElements(function(a,b,e){for(var g=0,b=(b||[]).length;g<b;++g)d.removeChild(a);c(e,a)}))}},this._buildChildrenSeq=(this._buildChildrenSeq||0)+1),this.childClz?c(this.childClz):this.childType?n([this.childType].concat(this.childMixins&&this.childMixins.split(",")||[]),c):c(p)},destroy:function(){m(this);this.inherited(arguments)}});b.prototype["data-mvc-child-type"]=b.prototype["data-mvc-child-mixins"]=
b.prototype[h]=b.prototype[l]="";return b});