//>>built
define("dojo/_base/lang,dojo/_base/connect,dojo/dom-style,dojo/_base/fx,dojo/fx,dojo/_base/html,dojox/html/ext-dojo/style,dojox/fx/ext-dojo/complex".split(","),function(h,p,i,f,j,q){i=h.getObject("dojox.css3.fx",!0);return h.mixin(i,{puff:function(a){return j.combine([f.fadeOut(a),this.expand({node:a.node,endScale:a.endScale||2})])},expand:function(a){return f.animateProperty({node:a.node,properties:{transform:{start:"scale(1)",end:"scale("+[a.endScale||3]+")"}}})},shrink:function(a){return this.expand({node:a.node,
endScale:0.01})},rotate:function(a){return f.animateProperty({node:a.node,duration:a.duration||1E3,properties:{transform:{start:"rotate("+(a.startAngle||"0deg")+")",end:"rotate("+(a.endAngle||"360deg")+")"}}})},flip:function(a){for(var d=[],c=a.whichAnims||[0,1,2,3],b=a.direction||1,b=[{start:"scale(1, 1) skew(0deg,0deg)",end:"scale(0, 1) skew(0,"+30*b+"deg)"},{start:"scale(0, 1) skew(0deg,"+30*b+"deg)",end:"scale(-1, 1) skew(0deg,0deg)"},{start:"scale(-1, 1) skew(0deg,0deg)",end:"scale(0, 1) skew(0deg,"+
30*-b+"deg)"},{start:"scale(0, 1) skew(0deg,"+30*-b+"deg)",end:"scale(1, 1) skew(0deg,0deg)"}],e=0;e<c.length;e++)d.push(f.animateProperty(h.mixin({node:a.node,duration:a.duration||600,properties:{transform:b[c[e]]}},a)));return j.chain(d)},bounce:function(a){var d=[],c=a.node,b=a.duration||1E3,e=a.scaleX||1.2,i=a.scaleY||0.6,g=q.style,n=g(c,"position"),o="absolute",r=g(c,"top"),k=[],l=0,s=Math.round,t=a.jumpHeight||70;"absolute"!==n&&(o="relative");var m=f.animateProperty({node:c,duration:b/6,properties:{transform:{start:"scale(1, 1)",
end:"scale("+e+", "+i+")"}}});p.connect(m,"onBegin",function(){g(c,{transformOrigin:"50% 100%",position:o})});d.push(m);e=f.animateProperty({node:c,duration:b/6,properties:{transform:{end:"scale(1, 1)",start:"scale("+e+", "+i+")"}}});k.push(e);k.push(new f.Animation(h.mixin({curve:[],duration:b/3,delay:b/12,onBegin:function(){l=(new Date).getTime()},onAnimate:function(){var a=(new Date).getTime();g(c,{top:parseInt(g(c,"top"))-s(t*((a-l)/this.duration))+"px"});l=a}},a)));d.push(j.combine(k));d.push(f.animateProperty(h.mixin({duration:b/
3,onEnd:function(){g(c,{position:n})},properties:{top:r}},a)));d.push(m);d.push(e);return j.chain(d)}})});