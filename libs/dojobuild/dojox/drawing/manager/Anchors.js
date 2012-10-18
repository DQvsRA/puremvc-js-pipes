//>>built
define(["dojo","../util/oo","../defaults"],function(d,h,i){var j=h.declare(function(a){this.defaults=i.copy();this.mouse=a.mouse;this.point=a.point;this.pointIdx=a.pointIdx;this.util=a.util;this.id=a.id||this.util.uid("anchor");this.org=d.mixin({},this.point);this.stencil=a.stencil;if(this.stencil.anchorPositionCheck)this.anchorPositionCheck=d.hitch(this.stencil,this.stencil.anchorPositionCheck);if(this.stencil.anchorConstrain)this.anchorConstrain=d.hitch(this.stencil,this.stencil.anchorConstrain);
this._zCon=d.connect(this.mouse,"setZoom",this,"render");this.render();this.connectMouse()},{y_anchor:null,x_anchor:null,render:function(){this.shape&&this.shape.removeShape();var a=this.defaults.anchors,b=this.mouse.zoom,c=a.size*b,e=c/2,b={width:a.width*b,style:a.style,color:a.color,cap:a.cap};this.shape=this.stencil.container.createRect({x:this.point.x-e,y:this.point.y-e,width:c,height:c}).setStroke(b).setFill(a.fill);this.shape.setTransform({dx:0,dy:0});this.util.attr(this,"drawingType","anchor");
this.util.attr(this,"id",this.id)},onRenderStencil:function(){},onTransformPoint:function(){},onAnchorDown:function(a){this.selected=a.id==this.id},onAnchorUp:function(){this.selected=!1;this.stencil.onTransformEnd(this)},onAnchorDrag:function(a){if(this.selected){this.shape.getTransform();var b=this.shape.getParent().getParent().getTransform(),c=this.defaults.anchors.marginZero,e=b.dx+this.org.x,f=b.dy+this.org.y,b=a.x-e,a=a.y-f,d=this.defaults.anchors.minSize,g;g=this.anchorPositionCheck(b,a,this);
if(0>g.x)for(;0>this.anchorPositionCheck(b,a,this).x;)this.shape.getParent().getParent().applyTransform({dx:2,dy:0});if(0>g.y)for(;0>this.anchorPositionCheck(b,a,this).y;)this.shape.getParent().getParent().applyTransform({dx:0,dy:2});this.y_anchor?this.org.y>this.y_anchor.org.y?(f=this.y_anchor.point.y+d-this.org.y,a<f&&(a=f)):(f=-f+c,g=this.y_anchor.point.y-d-this.org.y,a<f?a=f:a>g&&(a=g)):(f=-f+c,a<f&&(a=f));this.x_anchor?this.org.x>this.x_anchor.org.x?(c=this.x_anchor.point.x+d-this.org.x,b<c&&
(b=c)):(c=-e+c,e=this.x_anchor.point.x-d-this.org.x,b<c?b=c:b>e&&(b=e)):(c=-e+c,b<c&&(b=c));c=this.anchorConstrain(b,a);if(null!=c)b=c.x,a=c.y;this.shape.setTransform({dx:b,dy:a});this.linkedAnchor&&this.linkedAnchor.shape.setTransform({dx:b,dy:a});this.onTransformPoint(this)}},anchorConstrain:function(){return null},anchorPositionCheck:function(){return{x:1,y:1}},setPoint:function(a){this.shape.applyTransform(a)},connectMouse:function(){this._mouseHandle=this.mouse.register(this)},disconnectMouse:function(){this.mouse.unregister(this._mouseHandle)},
reset:function(){},destroy:function(){d.disconnect(this._zCon);this.disconnectMouse();this.shape.removeShape()}});return h.declare(function(a){this.mouse=a.mouse;this.undo=a.undo;this.util=a.util;this.drawing=a.drawing;this.items={}},{onAddAnchor:function(){},onReset:function(a){var b=this.util.byId("drawing").stencils;b.onDeselect(a);b.onSelect(a)},onRenderStencil:function(){for(var a in this.items)d.forEach(this.items[a].anchors,function(a){a.shape.moveToFront()})},onTransformPoint:function(a){var b=
this.items[a.stencil.id].item,c=[];d.forEach(this.items[a.stencil.id].anchors,function(b){a.id==b.id||"group"!=a.stencil.anchorType||(a.org.y==b.org.y?b.setPoint({dx:0,dy:a.shape.getTransform().dy-b.shape.getTransform().dy}):a.org.x==b.org.x&&b.setPoint({dx:a.shape.getTransform().dx-b.shape.getTransform().dx,dy:0}),b.shape.moveToFront());var d=b.shape.getTransform();c.push({x:d.dx+b.org.x,y:d.dy+b.org.y});if(b.point.t)c[c.length-1].t=b.point.t},this);b.setPoints(c);b.onTransform(a);this.onRenderStencil()},
onAnchorUp:function(){},onAnchorDown:function(){},onAnchorDrag:function(){},onChangeStyle:function(){for(var a in this.items)d.forEach(this.items[a].anchors,function(a){a.shape.moveToFront()})},add:function(a){this.items[a.id]={item:a,anchors:[]};if("none"!=a.anchorType){var b=a.points;d.forEach(b,function(b,c){if(!b.noAnchor){var e=new j({stencil:a,point:b,pointIdx:c,mouse:this.mouse,util:this.util});this.items[a.id]._cons=[d.connect(e,"onRenderStencil",this,"onRenderStencil"),d.connect(e,"reset",
this,"onReset"),d.connect(e,"onAnchorUp",this,"onAnchorUp"),d.connect(e,"onAnchorDown",this,"onAnchorDown"),d.connect(e,"onAnchorDrag",this,"onAnchorDrag"),d.connect(e,"onTransformPoint",this,"onTransformPoint"),d.connect(a,"onChangeStyle",this,"onChangeStyle")];this.items[a.id].anchors.push(e);this.onAddAnchor(e)}},this);if("path"==a.shortType){var c=b[0],b=b[b.length-1],e=this.items[a.id].anchors;if(c.x==b.x&&c.y==b.y)e[0].linkedAnchor=e[e.length-1],e[e.length-1].linkedAnchor=e[0]}"group"==a.anchorType&&
d.forEach(this.items[a.id].anchors,function(b){d.forEach(this.items[a.id].anchors,function(a){if(b.id!=a.id)if(b.org.y==a.org.y)b.x_anchor=a;else if(b.org.x==a.org.x)b.y_anchor=a},this)},this)}},remove:function(a){if(this.items[a.id])d.forEach(this.items[a.id].anchors,function(a){a.destroy()}),d.forEach(this.items[a.id]._cons,d.disconnect,d),this.items[a.id].anchors=null,delete this.items[a.id]}})});