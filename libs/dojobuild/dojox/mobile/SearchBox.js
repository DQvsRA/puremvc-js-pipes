//>>built
define("dojo/_base/declare,dojo/_base/lang,dijit/form/_SearchMixin,dojox/mobile/TextBox,dojo/dom-class,dojo/keys,./sniff".split(","),function(c,d,e,f,g,b,h){return c("dojox.mobile.SearchBox",[f,e],{baseClass:"mblTextBox mblSearchBox",type:"search",placeHolder:"",incremental:!0,_setIncrementalAttr:function(a){this.incremental=a},_onInput:function(a){if(a.charOrCode==b.ENTER)a.charOrCode=229;else if(!this.incremental)a.charOrCode=0;this.inherited(arguments)},postCreate:function(){this.inherited(arguments);
this.textbox.removeAttribute("incremental");this.textbox.hasAttribute("results")||this.textbox.setAttribute("results","0");5>h("iphone")&&(g.add(this.domNode,"iphone4"),this.connect(this.textbox,"onfocus",function(){""!==this.textbox.value&&setTimeout(d.hitch(this,function(){""===this.textbox.value&&this._onInput({charOrCode:b.ENTER})}),0)}));this.connect(this.textbox,"onsearch",function(){this._onInput({charOrCode:b.ENTER})})}})});