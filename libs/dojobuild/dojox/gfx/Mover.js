//>>built
define("dojo/_base/lang,dojo/_base/array,dojo/_base/declare,dojo/on,dojo/has,dojo/_base/event".split(","),function(e,h,i,f,c,g){return i("dojox.gfx.Mover",null,{constructor:function(a,b,d){this.shape=a;this.lastX=c("touch")?(b.changedTouches?b.changedTouches[0]:b).clientX:b.clientX;this.lastY=c("touch")?(b.changedTouches?b.changedTouches[0]:b).clientY:b.clientY;a=this.host=d;b=document;d=f(b,c("touch")?"touchmove":"mousemove",e.hitch(this,"onFirstMove"));this.events=[f(b,c("touch")?"touchmove":"mousemove",
e.hitch(this,"onMouseMove")),f(b,c("touch")?"touchend":"mouseup",e.hitch(this,"destroy")),f(b,"dragstart",e.hitch(g,"stop")),f(b,"selectstart",e.hitch(g,"stop")),d];if(a&&a.onMoveStart)a.onMoveStart(this)},onMouseMove:function(a){var b=c("touch")?(a.changedTouches?a.changedTouches[0]:a).clientX:a.clientX,d=c("touch")?(a.changedTouches?a.changedTouches[0]:a).clientY:a.clientY;this.host.onMove(this,{dx:b-this.lastX,dy:d-this.lastY});this.lastX=b;this.lastY=d;g.stop(a)},onFirstMove:function(){this.host.onFirstMove(this);
this.events.pop().remove()},destroy:function(){h.forEach(this.events,function(a){a.remove()});var a=this.host;if(a&&a.onMoveStop)a.onMoveStop(this);this.events=this.shape=null}})});