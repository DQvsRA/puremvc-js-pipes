//>>built
define("dojo/_base/declare,dojo/_base/Deferred,dojo/_base/lang,dojo/_base/window,dojo/dom-class,dojo/dom-construct,dojo/dom-style,dojo/dom-geometry,./Tooltip,./Overlay,./lazyLoadUtils".split(","),function(b,f,g,c,h,i,d,j,k,l,m){var e=h.contains(c.doc.documentElement,"dj_phone"),b=b("dojox.mobile.Opener",e?l:k,{lazy:!1,requires:"",buildRendering:function(){this.inherited(arguments);this.cover=i.create("div",{onclick:g.hitch(this,"_onBlur"),"class":"mblOpenerUnderlay",style:{position:e?"absolute":"fixed",
backgroundColor:"transparent",overflow:"hidden",zIndex:"-1"}},this.domNode,"first")},onShow:function(){},onHide:function(){},show:function(a,c){if(this.lazy){this.lazy=!1;var b=this;return f.when(m.instantiateLazyWidgets(this.domNode,this.requires),function(){return b.show(a,c)})}this.node=a;this.onShow(a);d.set(this.cover,{top:"0px",left:"0px",width:"0px",height:"0px"});this._resizeCover(j.position(this.domNode,!1));return this.inherited(arguments)},hide:function(a){this.inherited(arguments);this.onHide(this.node,
a)},_reposition:function(){var a=this.inherited(arguments);this._resizeCover(a);return a},_resizeCover:function(a){if(e){if(parseInt(d.get(this.cover,"top"))!=-a.y||parseInt(d.get(this.cover,"height"))!=a.y){var b=Math.max(a.x,0);d.set(this.cover,{top:-a.y+"px",left:-b+"px",width:a.w+b+"px",height:a.y+"px"})}}else d.set(this.cover,{width:Math.max(c.doc.documentElement.scrollWidth||c.body().scrollWidth||c.doc.documentElement.clientWidth)+"px",height:Math.max(c.doc.documentElement.scrollHeight||c.body().scrollHeight||
c.doc.documentElement.clientHeight)+"px"})},_onBlur:function(a){var b=this.onBlur(a);!1!==b&&this.hide(a);return b}});b.prototype.baseClass+=" mblOpener";return b});