//>>built
define("dojo/_base/kernel,dojo/_base/connect,dojo/_base/event,dojo/_base/lang,dojo/_base/window,dojo/dom-class,dojo/dom-construct,dojo/dom-style,./sniff".split(","),function(n,m,p,q,h,k,o,j,f){var i=q.getObject("dojox.mobile",!0);f.add("translate3d",function(){if(f("webkit")){var a=h.doc.createElement("div");a.style.webkitTransform="translate3d(0px,1px,0px)";h.doc.documentElement.appendChild(a);var b=h.doc.defaultView.getComputedStyle(a,"")["-webkit-transform"],b=b&&0===b.indexOf("matrix");h.doc.documentElement.removeChild(a);
return b}});var r=function(){};q.extend(r,{fixedHeaderHeight:0,fixedFooterHeight:0,isLocalFooter:!1,scrollBar:!0,scrollDir:"v",weight:0.6,fadeScrollBar:!0,disableFlashScrollBar:!1,threshold:4,constraint:!0,touchNode:null,propagatable:!0,dirLock:!1,height:"",scrollType:0,init:function(a){if(a)for(var b in a)a.hasOwnProperty(b)&&(this[b]=("domNode"==b||"containerNode"==b)&&"string"==typeof a[b]?h.doc.getElementById(a[b]):a[b]);this.touchNode=this.touchNode||this.containerNode;this._v=-1!=this.scrollDir.indexOf("v");
this._h=-1!=this.scrollDir.indexOf("h");this._f="f"==this.scrollDir;this._ch=[];this._ch.push(m.connect(this.touchNode,f("touch")?"ontouchstart":"onmousedown",this,"onTouchStart"));if(f("webkit")){this._useTopLeft=this.scrollType?2===this.scrollType:3>f("android");if(!this._useTopLeft)this._useTransformTransition=this.scrollType?3===this.scrollType:6<=f("iphone");if(this._useTopLeft)this._ch.push(m.connect(this.domNode,"webkitTransitionEnd",this,"onFlickAnimationEnd")),this._ch.push(m.connect(this.domNode,
"webkitTransitionStart",this,"onFlickAnimationStart"));else{if(this._useTransformTransition)this._ch.push(m.connect(this.domNode,"webkitTransitionEnd",this,"onFlickAnimationEnd")),this._ch.push(m.connect(this.domNode,"webkitTransitionStart",this,"onFlickAnimationStart"));else{this._ch.push(m.connect(this.domNode,"webkitAnimationEnd",this,"onFlickAnimationEnd"));this._ch.push(m.connect(this.domNode,"webkitAnimationStart",this,"onFlickAnimationStart"));for(a=0;3>a;a++)this.setKeyframes(null,null,a)}f("translate3d")&&
j.set(this.containerNode,"webkitTransform","translate3d(0,0,0)")}}this._speed={x:0,y:0};this._appFooterHeight=0;this.isTopLevel()&&!this.noResize&&this.resize();var c=this;setTimeout(function(){c.flashScrollBar()},600)},isTopLevel:function(){return!0},cleanup:function(){if(this._ch){for(var a=0;a<this._ch.length;a++)m.disconnect(this._ch[a]);this._ch=null}},findDisp:function(a){if(!a.parentNode)return null;if(1===a.nodeType&&k.contains(a,"mblSwapView")&&"none"!==a.style.display)return a;for(var b=
a.parentNode.childNodes,c=0;c<b.length;c++){var e=b[c];if(1===e.nodeType&&k.contains(e,"mblView")&&"none"!==e.style.display)return e}return a},getScreenSize:function(){return{h:h.global.innerHeight||h.doc.documentElement.clientHeight||h.doc.documentElement.offsetHeight,w:h.global.innerWidth||h.doc.documentElement.clientWidth||h.doc.documentElement.offsetWidth}},resize:function(){this._appFooterHeight=this.fixedFooterHeight&&!this.isLocalFooter?this.fixedFooterHeight:0;if(this.isLocalHeader)this.containerNode.style.marginTop=
this.fixedHeaderHeight+"px";for(var a=0,b=this.domNode;b&&"BODY"!=b.tagName;b=b.offsetParent){b=this.findDisp(b);if(!b)break;a+=b.offsetTop}var c,b=this.getScreenSize().h,a=b-a-this._appFooterHeight;if("inherit"===this.height)this.domNode.offsetParent&&(c=this.domNode.offsetParent.offsetHeight+"px");else if("auto"===this.height){if(c=this.domNode.offsetParent){this.domNode.style.height="0px";c=c.getBoundingClientRect();var a=this.domNode.getBoundingClientRect(),e=c.bottom-this._appFooterHeight,a=
a.bottom>=e?b-(a.top-c.top)-this._appFooterHeight:e-a.bottom}b=Math.max(this.domNode.scrollHeight,this.containerNode.scrollHeight);c=(b?Math.min(b,a):a)+"px"}else if(this.height)c=this.height;c||(c=a+"px");if("-"!==c.charAt(0)&&"default"!==c)this.domNode.style.height=c;this.onTouchEnd()},onFlickAnimationStart:function(a){p.stop(a)},onFlickAnimationEnd:function(a){var b=a&&a.animationName;if(b&&-1===b.indexOf("scrollableViewScroll2"))if(-1!==b.indexOf("scrollableViewScroll0"))this._scrollBarNodeV&&
k.remove(this._scrollBarNodeV,"mblScrollableScrollTo0");else if(-1!==b.indexOf("scrollableViewScroll1"))this._scrollBarNodeH&&k.remove(this._scrollBarNodeH,"mblScrollableScrollTo1");else{if(this._scrollBarNodeV)this._scrollBarNodeV.className="";if(this._scrollBarNodeH)this._scrollBarNodeH.className=""}else{if(this._useTransformTransition||this._useTopLeft)if(b=a.target,b===this._scrollBarV||b===this._scrollBarH){a="mblScrollableScrollTo"+(b===this._scrollBarV?"0":"1");k.contains(b,a)?k.remove(b,a):
b.className="";return}a&&a.srcElement&&p.stop(a);this.stopAnimation();if(this._bounce){var c=this,e=c._bounce;setTimeout(function(){c.slideTo(e,0.3,"ease-out")},0);c._bounce=void 0}else this.hideScrollBar(),this.removeCover()}},isFormElement:function(a){if(a&&1!==a.nodeType)a=a.parentNode;if(!a||1!==a.nodeType)return!1;a=a.tagName;return"SELECT"===a||"INPUT"===a||"TEXTAREA"===a||"BUTTON"===a},onTouchStart:function(a){if(!(this.disableTouchScroll||this._conn&&500>(new Date).getTime()-this.startTime)){if(!this._conn)this._conn=
[],this._conn.push(m.connect(h.doc,f("touch")?"ontouchmove":"onmousemove",this,"onTouchMove")),this._conn.push(m.connect(h.doc,f("touch")?"ontouchend":"onmouseup",this,"onTouchEnd"));this._aborted=!1;if(k.contains(this.containerNode,"mblScrollableScrollTo2"))this.abort();else{if(this._scrollBarNodeV)this._scrollBarNodeV.className="";if(this._scrollBarNodeH)this._scrollBarNodeH.className=""}this.touchStartX=a.touches?a.touches[0].pageX:a.clientX;this.touchStartY=a.touches?a.touches[0].pageY:a.clientY;
this.startTime=(new Date).getTime();this.startPos=this.getPos();this._dim=this.getDim();this._time=[0];this._posX=[this.touchStartX];this._posY=[this.touchStartY];this._locked=!1;this.isFormElement(a.target)||(this.propagatable?a.preventDefault():p.stop(a))}},onTouchMove:function(a){if(!this._locked){var b=a.touches?a.touches[0].pageX:a.clientX,a=a.touches?a.touches[0].pageY:a.clientY,c=b-this.touchStartX,e=a-this.touchStartY,d={x:this.startPos.x+c,y:this.startPos.y+e},g=this._dim,c=Math.abs(c),e=
Math.abs(e);if(1==this._time.length){if(this.dirLock&&(this._v&&!this._h&&c>=this.threshold&&c>=e||(this._h||this._f)&&!this._v&&e>=this.threshold&&e>=c)){this._locked=!0;return}if(this._v&&this._h){if(e<this.threshold&&c<this.threshold)return}else if(this._v&&e<this.threshold||(this._h||this._f)&&c<this.threshold)return;this.addCover();this.showScrollBar()}c=this.weight;if(this._v&&this.constraint)if(0<d.y)d.y=Math.round(d.y*c);else if(d.y<-g.o.h)d.y=g.c.h<g.d.h?Math.round(d.y*c):-g.o.h-Math.round((-g.o.h-
d.y)*c);if((this._h||this._f)&&this.constraint)if(0<d.x)d.x=Math.round(d.x*c);else if(d.x<-g.o.w)d.x=g.c.w<g.d.w?Math.round(d.x*c):-g.o.w-Math.round((-g.o.w-d.x)*c);this.scrollTo(d);d=this._time.length;if(2<=d){var l,f;this._v&&!this._h?(l=this._posY[d-1]-this._posY[d-2],f=a-this._posY[d-1]):!this._v&&this._h&&(l=this._posX[d-1]-this._posX[d-2],f=b-this._posX[d-1]);if(0>l*f)this._time=[this._time[d-1]],this._posX=[this._posX[d-1]],this._posY=[this._posY[d-1]],d=1}10==d&&(this._time.shift(),this._posX.shift(),
this._posY.shift());this._time.push((new Date).getTime()-this.startTime);this._posX.push(b);this._posY.push(a)}},onTouchEnd:function(a){if(!this._locked){var b=this._speed={x:0,y:0},c=this._dim,e=this.getPos(),d={};if(a){if(!this._conn)return;for(b=0;b<this._conn.length;b++)m.disconnect(this._conn[b]);this._conn=null;var b=this._time.length,g=!1;this._aborted||(1>=b?g=!0:2==b&&4>Math.abs(this._posY[1]-this._posY[0])&&f("touch")&&(g=!0));if(g){this.hideScrollBar();this.removeCover();if(f("touch")&&
!this.isFormElement(a.target)&&!(4.1<=f("android"))){var l=a.target;if(1!=l.nodeType)l=l.parentNode;var i=h.doc.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,h.global,1,a.screenX,a.screenY,a.clientX,a.clientY);setTimeout(function(){l.dispatchEvent(i)},0)}return}b=this._speed=this.getSpeed()}else{if(0==e.x&&0==e.y)return;c=this.getDim()}if(this._v)d.y=e.y+b.y;if(this._h||this._f)d.x=e.x+b.x;if(!1!==this.adjustDestination(d,e,c))if("v"==this.scrollDir&&c.c.h<c.d.h)this.slideTo({y:0},0.3,
"ease-out");else if("h"==this.scrollDir&&c.c.w<c.d.w)this.slideTo({x:0},0.3,"ease-out");else if(this._v&&this._h&&c.c.h<c.d.h&&c.c.w<c.d.w)this.slideTo({x:0,y:0},0.3,"ease-out");else{var j,g="ease-out",k={};if(this._v&&this.constraint)if(0<d.y)0<e.y?(j=0.3,d.y=0):(d.y=Math.min(d.y,20),g="linear",k.y=0);else if(-b.y>c.o.h- -e.y)e.y<-c.o.h?(j=0.3,d.y=c.c.h<=c.d.h?0:-c.o.h):(d.y=Math.max(d.y,-c.o.h-20),g="linear",k.y=-c.o.h);if((this._h||this._f)&&this.constraint)if(0<d.x)0<e.x?(j=0.3,d.x=0):(d.x=Math.min(d.x,
20),g="linear",k.x=0);else if(-b.x>c.o.w- -e.x)e.x<-c.o.w?(j=0.3,d.x=c.c.w<=c.d.w?0:-c.o.w):(d.x=Math.max(d.x,-c.o.w-20),g="linear",k.x=-c.o.w);this._bounce=void 0!==k.x||void 0!==k.y?k:void 0;if(void 0===j){var n,o;if(this._v&&this._h)o=Math.sqrt(b.x*b.x+b.y*b.y),n=Math.sqrt(Math.pow(d.y-e.y,2)+Math.pow(d.x-e.x,2));else if(this._v)o=b.y,n=d.y-e.y;else if(this._h)o=b.x,n=d.x-e.x;if(0===n&&!a)return;j=0!==o?Math.abs(n/o):0.01}this.slideTo(d,j,g)}}},adjustDestination:function(){return!0},abort:function(){this.scrollTo(this.getPos());
this.stopAnimation();this._aborted=!0},stopAnimation:function(){k.remove(this.containerNode,"mblScrollableScrollTo2");if(this._scrollBarV)this._scrollBarV.className="";if(this._scrollBarH)this._scrollBarH.className="";if(this._useTransformTransition||this._useTopLeft){this.containerNode.style.webkitTransition="";if(this._scrollBarV)this._scrollBarV.style.webkitTransition="";if(this._scrollBarH)this._scrollBarH.style.webkitTransition=""}},scrollIntoView:function(a,b,c){if(this._v){for(var e=this.containerNode,
d=this.getDim().d.h,g=0,l=a;l!==e;l=l.offsetParent){if(!l||"BODY"===l.tagName)return;g+=l.offsetTop}a=b?Math.max(d-e.offsetHeight,-g):Math.min(0,d-g-a.offsetHeight);c&&"number"===typeof c?this.slideTo({y:a},c,"ease-out"):this.scrollTo({y:a})}},getSpeed:function(){var a=0,b=0,c=this._time.length;if(2<=c&&500>(new Date).getTime()-this.startTime-this._time[c-1])var a=this._posX[c-(3<c?2:1)]-this._posX[0<=c-6?c-6:0],e=this._time[c-(3<c?2:1)]-this._time[0<=c-6?c-6:0],b=this.calcSpeed(this._posY[c-(3<c?
2:1)]-this._posY[0<=c-6?c-6:0],e),a=this.calcSpeed(a,e);return{x:a,y:b}},calcSpeed:function(a,b){return 4*Math.round(100*(a/b))},scrollTo:function(a,b,c){c=(c||this.containerNode).style;if(f("webkit"))if(this._useTopLeft){c.webkitTransition="";if(this._v)c.top=a.y+"px";if(this._h||this._f)c.left=a.x+"px"}else{if(this._useTransformTransition)c.webkitTransition="";c.webkitTransform=this.makeTranslateStr(a)}else{if(this._v)c.top=a.y+"px";if(this._h||this._f)c.left=a.x+"px"}b||this.scrollScrollBarTo(this.calcScrollBarPos(a))},
slideTo:function(a,b,c){this._runSlideAnimation(this.getPos(),a,b,c,this.containerNode,2);this.slideScrollBarTo(a,b,c)},makeTranslateStr:function(a){var b=this._v&&"number"==typeof a.y?a.y+"px":"0px",a=(this._h||this._f)&&"number"==typeof a.x?a.x+"px":"0px";return f("translate3d")?"translate3d("+a+","+b+",0px)":"translate("+a+","+b+")"},getPos:function(){if(f("webkit")){var a=h.doc.defaultView.getComputedStyle(this.containerNode,"");if(this._useTopLeft)return{x:parseInt(a.left)||0,y:parseInt(a.top)||
0};return(a=a["-webkit-transform"])&&0===a.indexOf("matrix")?(a=a.split(/[,\s\)]+/),{y:a[5]-0,x:a[4]-0}):{x:0,y:0}}return{y:parseInt(this.containerNode.style.top)||0,x:this.containerNode.offsetLeft}},getDim:function(){var a={};a.c={h:this.containerNode.offsetHeight,w:this.containerNode.offsetWidth};a.v={h:this.domNode.offsetHeight+this._appFooterHeight,w:this.domNode.offsetWidth};a.d={h:a.v.h-this.fixedHeaderHeight-this.fixedFooterHeight,w:a.v.w};a.o={h:a.c.h-a.v.h+this.fixedHeaderHeight+this.fixedFooterHeight,
w:a.c.w-a.v.w};return a},showScrollBar:function(){if(this.scrollBar){var a=this._dim;if(!("v"==this.scrollDir&&a.c.h<=a.d.h||"h"==this.scrollDir&&a.c.w<=a.d.w))if(!this._v||!this._h||!(a.c.h<=a.d.h&&a.c.w<=a.d.w)){a=function(a,c){var e=a["_scrollBarNode"+c];if(!e){var e=o.create("div",null,a.domNode),d={position:"absolute",overflow:"hidden"};"V"==c?(d.right="2px",d.width="5px"):(d.bottom=(a.isLocalFooter?a.fixedFooterHeight:0)+2+"px",d.height="5px");j.set(e,d);e.className="mblScrollBarWrapper";a["_scrollBarWrapper"+
c]=e;e=o.create("div",null,e);j.set(e,{opacity:0.6,position:"absolute",backgroundColor:"#606060",fontSize:"1px",webkitBorderRadius:"2px",MozBorderRadius:"2px",webkitTransformOrigin:"0 0",zIndex:2147483647});j.set(e,"V"==c?{width:"5px"}:{height:"5px"});a["_scrollBarNode"+c]=e}return e};if(this._v&&!this._scrollBarV)this._scrollBarV=a(this,"V");if(this._h&&!this._scrollBarH)this._scrollBarH=a(this,"H");this.resetScrollBar()}}},hideScrollBar:function(){if(this.fadeScrollBar&&f("webkit")&&!i._fadeRule){var a=
o.create("style",null,h.doc.getElementsByTagName("head")[0]);a.textContent=".mblScrollableFadeScrollBar{  -webkit-animation-duration: 1s;  -webkit-animation-name: scrollableViewFadeScrollBar;}@-webkit-keyframes scrollableViewFadeScrollBar{  from { opacity: 0.6; }  to { opacity: 0; }}";i._fadeRule=a.sheet.cssRules[1]}if(this.scrollBar){a=function(a,c){j.set(a,{opacity:0,webkitAnimationDuration:""});if(!c._useTopLeft||!f("android"))a.className="mblScrollableFadeScrollBar"};if(this._scrollBarV)a(this._scrollBarV,
this),this._scrollBarV=null;if(this._scrollBarH)a(this._scrollBarH,this),this._scrollBarH=null}},calcScrollBarPos:function(a){var b={},c=this._dim,e=function(a,c,b,e,f){b=Math.round((e-c-8)/(e-f)*b);b<-c+5&&(b=-c+5);b>a-5&&(b=a-5);return b};if("number"==typeof a.y&&this._scrollBarV)b.y=e(this._scrollBarWrapperV.offsetHeight,this._scrollBarV.offsetHeight,a.y,c.d.h,c.c.h);if("number"==typeof a.x&&this._scrollBarH)b.x=e(this._scrollBarWrapperH.offsetWidth,this._scrollBarH.offsetWidth,a.x,c.d.w,c.c.w);
return b},scrollScrollBarTo:function(a){if(this.scrollBar){if(this._v&&this._scrollBarV&&"number"==typeof a.y)if(f("webkit"))if(this._useTopLeft)j.set(this._scrollBarV,{webkitTransition:"",top:a.y+"px"});else{if(this._useTransformTransition)this._scrollBarV.style.webkitTransition="";this._scrollBarV.style.webkitTransform=this.makeTranslateStr({y:a.y})}else this._scrollBarV.style.top=a.y+"px";if(this._h&&this._scrollBarH&&"number"==typeof a.x)if(f("webkit"))if(this._useTopLeft)j.set(this._scrollBarH,
{webkitTransition:"",left:a.x+"px"});else{if(this._useTransformTransition)this._scrollBarH.style.webkitTransition="";this._scrollBarH.style.webkitTransform=this.makeTranslateStr({x:a.x})}else this._scrollBarH.style.left=a.x+"px"}},slideScrollBarTo:function(a,b,c){if(this.scrollBar){var e=this.calcScrollBarPos(this.getPos()),a=this.calcScrollBarPos(a);this._v&&this._scrollBarV&&this._runSlideAnimation({y:e.y},{y:a.y},b,c,this._scrollBarV,0);this._h&&this._scrollBarH&&this._runSlideAnimation({x:e.x},
{x:a.x},b,c,this._scrollBarH,1)}},_runSlideAnimation:function(a,b,c,e,d,g){if(f("webkit"))if(this._useTopLeft)j.set(d,{webkitTransitionProperty:"top, left",webkitTransitionDuration:c+"s",webkitTransitionTimingFunction:e}),setTimeout(function(){j.set(d,{top:(b.y||0)+"px",left:(b.x||0)+"px"})},0),k.add(d,"mblScrollableScrollTo"+g);else if(this._useTransformTransition){if(void 0===b.x)b.x=a.x;if(void 0===b.y)b.y=a.y;if(b.x!==a.x||b.y!==a.y){j.set(d,{webkitTransitionProperty:"-webkit-transform",webkitTransitionDuration:c+
"s",webkitTransitionTimingFunction:e});var l=this.makeTranslateStr(b);setTimeout(function(){j.set(d,{webkitTransform:l})},0);k.add(d,"mblScrollableScrollTo"+g)}else this.hideScrollBar(),this.removeCover()}else this.setKeyframes(a,b,g),j.set(d,{webkitAnimationDuration:c+"s",webkitAnimationTimingFunction:e}),k.add(d,"mblScrollableScrollTo"+g),2==g?this.scrollTo(b,!0,d):this.scrollScrollBarTo(b);else n.fx&&n.fx.easing&&c?(a=n.fx.slideTo({node:d,duration:1E3*c,left:b.x,top:b.y,easing:"ease-out"==e?n.fx.easing.quadOut:
n.fx.easing.linear}).play(),2==g&&m.connect(a,"onEnd",this,"onFlickAnimationEnd")):2==g?(this.scrollTo(b,!1,d),this.onFlickAnimationEnd()):this.scrollScrollBarTo(b)},resetScrollBar:function(){var a=function(a,b,d,g,f,h){if(b){var i={};i[h?"top":"left"]=f+4+"px";f=0>=d-8?1:d-8;i[h?"height":"width"]=f+"px";j.set(a,i);a=Math.round(d*d/g);a=Math.min(Math.max(a-8,5),f);b.style[h?"height":"width"]=a+"px";j.set(b,{opacity:0.6})}},b=this.getDim();a(this._scrollBarWrapperV,this._scrollBarV,b.d.h,b.c.h,this.fixedHeaderHeight,
!0);a(this._scrollBarWrapperH,this._scrollBarH,b.d.w,b.c.w,0);this.createMask()},createMask:function(){if(f("webkit")){var a;if(this._scrollBarWrapperV){var b=this._scrollBarWrapperV.offsetHeight;a=h.doc.getCSSCanvasContext("2d","scrollBarMaskV",5,b);a.fillStyle="rgba(0,0,0,0.5)";a.fillRect(1,0,3,2);a.fillRect(0,1,5,1);a.fillRect(0,b-2,5,1);a.fillRect(1,b-1,3,2);a.fillStyle="rgb(0,0,0)";a.fillRect(0,2,5,b-4);this._scrollBarWrapperV.style.webkitMaskImage="-webkit-canvas(scrollBarMaskV)"}if(this._scrollBarWrapperH)b=
this._scrollBarWrapperH.offsetWidth,a=h.doc.getCSSCanvasContext("2d","scrollBarMaskH",b,5),a.fillStyle="rgba(0,0,0,0.5)",a.fillRect(0,1,2,3),a.fillRect(1,0,1,5),a.fillRect(b-2,0,1,5),a.fillRect(b-1,1,2,3),a.fillStyle="rgb(0,0,0)",a.fillRect(2,0,b-4,5),this._scrollBarWrapperH.style.webkitMaskImage="-webkit-canvas(scrollBarMaskH)"}},flashScrollBar:function(){if(!this.disableFlashScrollBar&&this.domNode&&(this._dim=this.getDim(),!(0>=this._dim.d.h))){this.showScrollBar();var a=this;setTimeout(function(){a.hideScrollBar()},
300)}},addCover:function(){if(!f("touch")&&!this.noCover)i._cover?i._cover.style.display="":(i._cover=o.create("div",null,h.doc.body),i._cover.className="mblScrollableCover",j.set(i._cover,{backgroundColor:"#ffff00",opacity:0,position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:2147483647}),this._ch.push(m.connect(i._cover,f("touch")?"ontouchstart":"onmousedown",this,"onTouchEnd"))),this.setSelectable(i._cover,!1),this.setSelectable(this.domNode,!1)},removeCover:function(){if(!f("touch")&&
i._cover)i._cover.style.display="none",this.setSelectable(i._cover,!0),this.setSelectable(this.domNode,!0)},setKeyframes:function(a,b,c){if(!i._rule)i._rule=[];if(!i._rule[c]){var e=o.create("style",null,h.doc.getElementsByTagName("head")[0]);e.textContent=".mblScrollableScrollTo"+c+"{-webkit-animation-name: scrollableViewScroll"+c+";}@-webkit-keyframes scrollableViewScroll"+c+"{}";i._rule[c]=e.sheet.cssRules[1]}if(c=i._rule[c])if(a&&(c.deleteRule("from"),c.insertRule("from { -webkit-transform: "+
this.makeTranslateStr(a)+"; }")),b){if(void 0===b.x)b.x=a.x;if(void 0===b.y)b.y=a.y;c.deleteRule("to");c.insertRule("to { -webkit-transform: "+this.makeTranslateStr(b)+"; }")}},setSelectable:function(a,b){a.style.KhtmlUserSelect=b?"auto":"none";a.style.MozUserSelect=b?"":"none";a.onselectstart=b?null:function(){return!1};if(f("ie")){a.unselectable=b?"":"on";for(var c=a.getElementsByTagName("*"),e=0;e<c.length;e++)c[e].unselectable=b?"":"on"}}});q.setObject("dojox.mobile.scrollable",r);return r});