//>>built
define("dojo/_base/declare,dojo/_base/connect,dojo/_base/lang,dojo/_base/event,dojo/aspect,dojo/dom-attr,dojo/dom-class,dojo/dom-construct,dojo/query".split(","),function(k,p,g,l,m,f,n,h,o){return k("dojox.widget.rotator.ThumbnailController",null,{rotator:null,constructor:function(a,b){g.mixin(this,a);this._domNode=b;var c=this.rotator;if(c){for(;b.firstChild;)b.removeChild(b.firstChild);for(var d=0;d<c.panes.length;d++){var e=c.panes[d].node,i=f.get(e,"thumbsrc")||f.get(e,"src"),j=f.get(e,"alt")||
"";/img/i.test(e.tagName)&&function(a){h.create("a",{classname:"dojoxRotatorThumb dojoxRotatorThumb"+a+" "+(a==c.idx?"dojoxRotatorThumbSelected":""),href:i,onclick:function(b){l.stop(b);c&&c.control.apply(c,["go",a])},title:j,innerHTML:'<img src="'+i+'" alt="'+j+'"/>'},b)}(d)}m.after(c,"onUpdate",g.hitch(this,"_onUpdate"),!0)}},destroy:function(){h.destroy(this._domNode)},_onUpdate:function(a){var b=this.rotator;"onAfterTransition"==a&&(a=o(".dojoxRotatorThumb",this._domNode).removeClass("dojoxRotatorThumbSelected"),
b.idx<a.length&&n.add(a[b.idx],"dojoxRotatorThumbSelected"))}})});