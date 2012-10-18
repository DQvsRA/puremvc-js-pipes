//>>built
define("dojo/_base/kernel,dojo/_base/declare,dojo/_base/html,dojo/_base/lang,dojo/_base/query,dijit/_Widget,dijit/_Templated,dijit/_Contained,dijit/layout/StackContainer,dojo/fx/easing,dojo/_base/fx,dojo/dom-construct,dojo/dom-class".split(","),function(e,f,d,c,k,h,i,l,m,o,g,j,n){e.experimental("dojox.layout.RadioGroup");e=f("dojox.layout.RadioGroup",[m,i],{duration:750,hasButtons:!1,buttonClass:"dojox.layout._RadioButton",templateString:'<div class="dojoxRadioGroup"> \t<div dojoAttachPoint="buttonHolder" style="display:none;">\t\t<table class="dojoxRadioButtons"><tbody><tr class="dojoxRadioButtonRow" dojoAttachPoint="buttonNode"></tr></tbody></table>\t</div>\t<div class="dojoxRadioView" dojoAttachPoint="containerNode"></div></div>',
startup:function(){this.inherited(arguments);this._children=this.getChildren();this._buttons=this._children.length;this._size=d.coords(this.containerNode);this.hasButtons&&d.style(this.buttonHolder,"display","block")},_setupChild:function(a){d.style(a.domNode,"position","absolute");if(this.hasButtons){var b=this.buttonNode.appendChild(j.create("td")),b=j.create("div",null,b),b=new (c.getObject(this.buttonClass))({label:a.title,page:a},b);c.mixin(a,{_radioButton:b});b.startup()}a.domNode.style.display=
"none"},removeChild:function(a){this.hasButtons&&a._radioButton&&(a._radioButton.destroy(),delete a._radioButton);this.inherited(arguments)},_transition:function(a,b){this._showChild(a);b&&this._hideChild(b);this.doLayout&&a.resize&&a.resize(this._containerContentBox||this._contentBox)},_showChild:function(a){var b=this.getChildren();a.isFirstChild=a==b[0];a.isLastChild=a==b[b.length-1];a.selected=!0;a.domNode.style.display="";if(a._onShow)a._onShow();else if(a.onShow)a.onShow()},_hideChild:function(a){a.selected=
!1;a.domNode.style.display="none";if(a.onHide)a.onHide()}});f("dojox.layout.RadioGroupFade",e,{_hideChild:function(a){g.fadeOut({node:a.domNode,duration:this.duration,onEnd:c.hitch(this,"inherited",arguments,arguments)}).play()},_showChild:function(a){this.inherited(arguments);d.style(a.domNode,"opacity",0);g.fadeIn({node:a.domNode,duration:this.duration}).play()}});f("dojox.layout.RadioGroupSlide",e,{easing:"dojo.fx.easing.backOut",zTop:99,constructor:function(){if(c.isString(this.easing))this.easing=
c.getObject(this.easing)},_positionChild:function(a){if(this._size){var b=!0,c=!0;switch(a.slideFrom){case "bottom":c=!c;break;case "right":b=!b;c=!c;break;case "top":break;case "left":b=!b;break;default:b=Math.round(Math.random()),c=Math.round(Math.random())}d.style(a.domNode,b?"top":"left",(c?"-":"")+(this._size[b?"h":"w"]+20)+"px")}},_showChild:function(a){var b=this.getChildren();a.isFirstChild=a==b[0];a.isLastChild=a==b[b.length-1];a.selected=!0;d.style(a.domNode,{zIndex:this.zTop,display:""});
this._anim&&"playing"==this._anim.status()&&this._anim.gotoPercent(100,!0);this._anim=g.animateProperty({node:a.domNode,properties:{left:0,top:0},duration:this.duration,easing:this.easing,onEnd:c.hitch(a,function(){if(this.onShow)this.onShow();this._onShow&&this._onShow()}),beforeBegin:c.hitch(this,"_positionChild",a)});this._anim.play()},_hideChild:function(a){a.selected=!1;a.domNode.style.zIndex=this.zTop-1;if(a.onHide)a.onHide()}});f("dojox.layout._RadioButton",[h,i,l],{label:"",page:null,templateString:'<div dojoAttachPoint="focusNode" class="dojoxRadioButton"><span dojoAttachPoint="titleNode" class="dojoxRadioButtonLabel">${label}</span></div>',
startup:function(){this.connect(this.domNode,"onmouseenter","_onMouse")},_onMouse:function(){this.getParent().selectChild(this.page);this._clearSelected();n.add(this.domNode,"dojoxRadioButtonSelected")},_clearSelected:function(){k(".dojoxRadioButtonSelected",this.domNode.parentNode.parentNode).removeClass("dojoxRadioButtonSelected")}});c.extend(h,{slideFrom:"random"})});