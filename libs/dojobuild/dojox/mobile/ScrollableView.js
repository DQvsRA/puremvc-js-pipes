//>>built
define("dojo/_base/array,dojo/_base/declare,dojo/dom-class,dojo/dom-construct,dijit/registry,./View,./_ScrollableMixin".split(","),function(e,f,g,h,c,i,j){return f("dojox.mobile.ScrollableView",[i,j],{scrollableParams:null,keepScrollPos:!1,constructor:function(){this.scrollableParams={noResize:!0}},buildRendering:function(){this.inherited(arguments);g.add(this.domNode,"mblScrollableView");this.domNode.style.overflow="hidden";this.domNode.style.top="0px";this.containerNode=h.create("div",{className:"mblScrollableViewContainer"},
this.domNode);this.containerNode.style.position="absolute";this.containerNode.style.top="0px";if("v"===this.scrollDir)this.containerNode.style.width="100%"},startup:function(){this._started||(this.reparent(),this.inherited(arguments))},resize:function(){this.inherited(arguments);e.forEach(this.getChildren(),function(a){a.resize&&a.resize()})},isTopLevel:function(){var a=this.getParent&&this.getParent();return!a||!a.resize},addFixedBar:function(a){var a=a.domNode,b=this.checkFixedBar(a,!0);if(b){this.domNode.appendChild(a);
if("top"===b)this.fixedHeaderHeight=a.offsetHeight,this.isLocalHeader=!0;else if("bottom"===b)this.fixedFooterHeight=a.offsetHeight,this.isLocalFooter=!0,a.style.bottom="0px";this.resize()}},reparent:function(){var a,b,c,d;for(a=0,b=0,c=this.domNode.childNodes.length;a<c;a++)d=this.domNode.childNodes[b],d===this.containerNode||this.checkFixedBar(d,!0)?b++:this.containerNode.appendChild(this.domNode.removeChild(d))},onAfterTransitionIn:function(){this.flashScrollBar()},getChildren:function(){var a=
this.inherited(arguments);this.fixedHeader&&this.fixedHeader.parentNode===this.domNode&&a.push(c.byNode(this.fixedHeader));this.fixedFooter&&this.fixedFooter.parentNode===this.domNode&&a.push(c.byNode(this.fixedFooter));return a}})});