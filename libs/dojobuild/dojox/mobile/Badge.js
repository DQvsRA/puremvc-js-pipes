//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","./iconUtils"],function(d,e,b,f,g){return d("dojox.mobile.Badge",null,{value:"0",className:"mblDomButtonRedBadge",fontSize:16,constructor:function(a,c){a&&e.mixin(this,a);this.domNode=c?c:f.create("div");b.add(this.domNode,"mblBadge");-1===this.domNode.className.indexOf("mblDomButton")&&b.add(this.domNode,this.className);if(16!==this.fontSize)this.domNode.style.fontSize=this.fontSize+"px";g.createDomButton(this.domNode);
this.setValue(this.value)},getValue:function(){return this.domNode.firstChild.innerHTML||""},setValue:function(a){this.domNode.firstChild.innerHTML=a}})});