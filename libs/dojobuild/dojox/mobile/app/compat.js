//>>built
define(["dijit","dojo","dojox","dojo/require!dojox/mobile/compat"],function(f,a,b){a.provide("dojox.mobile.app.compat");a.require("dojox.mobile.compat");a.extend(b.mobile.app.AlertDialog,{_doTransition:function(d){var e=a.marginBox(this.domNode.firstChild).h,c=this.controller.getWindowSize().h,e=c-e,c=a.fx.slideTo({node:this.domNode,duration:400,top:{start:0>d?e:c,end:0>d?c:e}}),e=a[0>d?"fadeOut":"fadeIn"]({node:this.mask,duration:400}),c=a.fx.combine([c,e]),b=this;a.connect(c,"onEnd",this,function(){if(0>
d)b.domNode.style.display="none",a.destroy(b.domNode),a.destroy(b.mask)});c.play()}});a.extend(b.mobile.app.List,{deleteRow:function(){var d=this._selectedRow;a.style(d,{visibility:"hidden",minHeight:"0px"});a.removeClass(d,"hold");var b=a.contentBox(d).h;a.animateProperty({node:d,duration:800,properties:{height:{start:b,end:1},paddingTop:{end:0},paddingBottom:{end:0}},onEnd:this._postDeleteAnim}).play()}});b.mobile.app.ImageView&&!a.create("canvas").getContext&&a.extend(b.mobile.app.ImageView,{buildRendering:function(){this.domNode.innerHTML=
"ImageView widget is not supported on this browser.Please try again with a modern browser, e.g. Safari, Chrome or Firefox";this.canvas={}},postCreate:function(){}});b.mobile.app.ImageThumbView&&a.extend(b.mobile.app.ImageThumbView,{place:function(b,e,c){a.style(b,{top:c+"px",left:e+"px",visibility:"visible"})}})});