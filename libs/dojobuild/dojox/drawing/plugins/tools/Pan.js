//>>built
define(["dojo/_base/lang","../../util/oo","../_Plugin","../../manager/_registry"],function(f,d,q,r){d=d.declare(q,function(a){this.domNode=a.node;var c;this.toolbar=a.scope;this.connect(this.toolbar,"onToolClick",this,function(){this.onSetPan(!1)});this.connect(this.keys,"onKeyUp",this,"onKeyUp");this.connect(this.keys,"onKeyDown",this,"onKeyDown");this.connect(this.keys,"onArrow",this,"onArrow");this.connect(this.anchors,"onAnchorUp",this,"checkBounds");this.connect(this.stencils,"register",this,
"checkBounds");this.connect(this.canvas,"resize",this,"checkBounds");this.connect(this.canvas,"setZoom",this,"checkBounds");this.connect(this.canvas,"onScroll",this,function(){this._blockScroll?this._blockScroll=!1:(c&&clearTimeout(c),c=setTimeout(f.hitch(this,"checkBounds"),200))});this._mouseHandle=this.mouse.register(this)},{selected:!1,keyScroll:!1,type:"dojox.drawing.plugins.tools.Pan",onPanUp:function(a){if(a.id==this.button.id)this.onSetPan(!1)},onKeyUp:function(a){switch(a.keyCode){case 32:this.onSetPan(!1);
break;case 39:case 37:case 38:case 40:clearInterval(this._timer)}},onKeyDown:function(a){if(32==a.keyCode)this.onSetPan(!0)},interval:20,onArrow:function(a){this._timer&&clearInterval(this._timer);this._timer=setInterval(f.hitch(this,function(a){this.canvas.domNode.parentNode.scrollLeft+=10*a.x;this.canvas.domNode.parentNode.scrollTop+=10*a.y},a),this.interval)},onSetPan:function(a){if(!0===a||!1===a)this.selected=!a;this.selected?(this.selected=!1,this.button.deselect()):(this.selected=!0,this.button.select());
this.mouse.setEventMode(this.selected?"pan":"")},onPanDrag:function(a){this.canvas.domNode.parentNode.scrollTop-=a.move.y;this.canvas.domNode.parentNode.scrollLeft-=a.move.x;this.canvas.onScroll()},onUp:function(a){this.keyScroll=a.withinCanvas?!0:!1},onStencilUp:function(){this.checkBounds()},onStencilDrag:function(){},checkBounds:function(){var a=Infinity,c=-Infinity,e=-1E4,d=1E4,f=0,m=0,j=this.stencils.group?this.stencils.group.getTransform():{dx:0,dy:0},g=this.mouse.scrollOffset(),h=this.canvas.height,
i=this.canvas.width,p=this.canvas.zoom,k=this.canvas.parentHeight,l=this.canvas.parentWidth;this.stencils.withSelected(function(b){b=b.getBounds();a=Math.min(b.y1+j.dy,a);c=Math.max(b.x2+j.dx,c);e=Math.max(b.y2+j.dy,e);d=Math.min(b.x1+j.dx,d)});this.stencils.withUnselected(function(b){b=b.getBounds();a=Math.min(b.y1,a);c=Math.max(b.x2,c);e=Math.max(b.y2,e);d=Math.min(b.x1,d)});var e=e*p,n=0,o=0;e>k||g.top?(h=Math.max(e,k+g.top),m=g.top,n+=this.canvas.getScrollWidth()):!m&&h>k&&(h=k);c*=p;c>l||g.left?
(i=Math.max(c,l+g.left),f=g.left,o+=this.canvas.getScrollWidth()):!f&&i>l&&(i=l);i+=2*n;h+=2*o;this._blockScroll=!0;this.stencils.group&&this.stencils.group.applyTransform({dx:0,dy:0});this.stencils.withUnselected(function(a){a.transformPoints({dx:0,dy:0})});this.canvas.setDimensions(i,h,f,m)}});d.setup={name:"dojox.drawing.plugins.tools.Pan",tooltip:"Pan Tool",iconClass:"iconPan",button:!1};f.setObject("dojox.drawing.plugins.tools.Pan",d);r.register(d.setup,"plugin");return d});