//>>built
define("dojo/_base/lang,dojo/_base/array,dojo/_base/declare,./Base,./_PlotEvents,./common,../axis2d/common,dojox/gfx,dojox/gfx/matrix,dojox/lang/functional,dojox/lang/utils".split(","),function(B,o,E,J,K,C,F,p,I,i,y){return E("dojox.charting.plot2d.Pie",[J,K],{defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelOffset:20,labelStyle:"default",htmlLabels:!0,radGrad:"native",fanSize:5,startAngle:0},optionalParams:{radius:0,omitLabels:!1,stroke:{},outline:{},shadow:{},fill:{},styleFunc:null,font:"",
fontColor:"",labelWiring:{}},constructor:function(g,c){this.opt=B.clone(this.defaultParams);y.updateWithObject(this.opt,c);y.updateWithPattern(this.opt,c,this.optionalParams);this.axes=[];this.run=null;this.dyn=[]},clear:function(){this.inherited(arguments);this.dyn=[];this.run=null;return this},setAxis:function(){return this},addSeries:function(g){this.run=g;return this},getSeriesStats:function(){return B.delegate(C.defaultStats)},getRequiredColors:function(){return this.run?this.run.data.length:
0},render:function(g,c){if(!this.dirty)return this;this.resetEvents();this.dirty=!1;this._eventSeries={};this.cleanGroup();var m=this.group,b=this.chart.theme;if(!this.run||!this.run.data.length)return this;var d=(g.width-c.l-c.r)/2,e=(g.height-c.t-c.b)/2,h=Math.min(d,e),u="font"in this.opt?this.opt.font:b.series.font,n,z=I._degToRad(this.opt.startAngle),k=z,j,s,q,A,v=this.run.data,C=this.events();this.dyn=[];if("radius"in this.opt)h=this.opt.radius,A=h-this.opt.labelOffset;var a={cx:c.l+d,cy:c.t+
e,r:h};if(this.opt.shadow||b.shadow){j=this.opt.shadow||b.shadow;var w=B.clone(a);w.cx+=j.dx;w.cy+=j.dy;m.createCircle(w).setFill(j.color).setStroke(j)}if("number"==typeof v[0]){j=i.map(v,"x ? Math.max(x, 0) : 0");if(i.every(j,"<= 0"))return m.createCircle(a).setStroke(b.series.stroke),this.dyn=o.map(j,function(){return{}}),this;s=i.map(j,"/this",i.foldl(j,"+",0));this.opt.labels&&(q=o.map(s,function(a){return 0<a?this._getLabel(100*a)+"%":""},this))}else{j=i.map(v,"x ? Math.max(x.y, 0) : 0");if(i.every(j,
"<= 0"))return m.createCircle(a).setStroke(b.series.stroke),this.dyn=o.map(j,function(){return{}}),this;s=i.map(j,"/this",i.foldl(j,"+",0));this.opt.labels&&(q=o.map(s,function(a,c){if(0>a)return"";var l=v[c];return"text"in l?l.text:this._getLabel(100*a)+"%"},this))}var D=i.map(v,function(a){var c=[this.opt,this.run];null!==a&&"number"!=typeof a&&c.push(a);this.opt.styleFunc&&c.push(this.opt.styleFunc(a));return b.next("slice",c,!0)},this);this.opt.labels&&(n=u?p.normalizedLength(p.splitFontString(u).size):
0,j=i.foldl1(i.map(q,function(a,c){return p._base._getTextBox(a,{font:D[c].series.font}).w},this),"Math.max(a, b)")/2,0>this.opt.labelOffset&&(h=Math.min(d-2*j,e-n)+this.opt.labelOffset),A=h-this.opt.labelOffset);var G=Array(s.length);o.some(s,function(b,d){if(0>b)return!1;if(0==b)return this.dyn.push({fill:null,stroke:null}),!1;var l=v[d],t=D[d],f;if(1<=b){f=this._plotFill(t.series.fill,g,c);f=this._shapeFill(f,{x:a.cx-a.r,y:a.cy-a.r,width:2*a.r,height:2*a.r});f=this._pseudoRadialFill(f,{x:a.cx,
y:a.cy},a.r);var e=m.createCircle(a).setFill(f).setStroke(t.series.stroke);this.dyn.push({fill:f,stroke:t.series.stroke});C&&(l={element:"slice",index:d,run:this.run,shape:e,x:d,y:"number"==typeof l?l:l.y,cx:a.cx,cy:a.cy,cr:h},this._connectEvents(l),G[d]=l);return!0}var j=k+2*b*Math.PI;d+1==s.length&&(j=z+2*Math.PI);var e=j-k,i=a.cx+h*Math.cos(k),u=a.cy+h*Math.sin(k),n=a.cx+h*Math.cos(j),o=a.cy+h*Math.sin(j);f=I._degToRad(this.opt.fanSize);if(t.series.fill&&"radial"===t.series.fill.type&&"fan"===
this.opt.radGrad&&e>f){var p=m.createGroup(),q=Math.ceil(e/f),x=e/q;f=this._shapeFill(t.series.fill,{x:a.cx-a.r,y:a.cy-a.r,width:2*a.r,height:2*a.r});for(var r=0;r<q;++r){var w=0==r?i:a.cx+h*Math.cos(k+(r-0.2)*x),y=0==r?u:a.cy+h*Math.sin(k+(r-0.2)*x),A=r==q-1?n:a.cx+h*Math.cos(k+(r+1+0.2)*x),B=r==q-1?o:a.cy+h*Math.sin(k+(r+1+0.2)*x);p.createPath().moveTo(a.cx,a.cy).lineTo(w,y).arcTo(h,h,0,x>Math.PI,!0,A,B).lineTo(a.cx,a.cy).closePath().setFill(this._pseudoRadialFill(f,{x:a.cx,y:a.cy},h,k+(r+0.5)*
x,k+(r+0.5)*x))}p.createPath().moveTo(a.cx,a.cy).lineTo(i,u).arcTo(h,h,0,e>Math.PI,!0,n,o).lineTo(a.cx,a.cy).closePath().setStroke(t.series.stroke);e=p}else e=m.createPath().moveTo(a.cx,a.cy).lineTo(i,u).arcTo(h,h,0,e>Math.PI,!0,n,o).lineTo(a.cx,a.cy).closePath().setStroke(t.series.stroke),(f=t.series.fill)&&"radial"===f.type?(f=this._shapeFill(f,{x:a.cx-a.r,y:a.cy-a.r,width:2*a.r,height:2*a.r}),"linear"===this.opt.radGrad&&(f=this._pseudoRadialFill(f,{x:a.cx,y:a.cy},h,k,j))):f&&"linear"===f.type&&
(f=this._plotFill(f,g,c),f=this._shapeFill(f,e.getBoundingBox())),e.setFill(f);this.dyn.push({fill:f,stroke:t.series.stroke});C&&(l={element:"slice",index:d,run:this.run,shape:e,x:d,y:"number"==typeof l?l:l.y,cx:a.cx,cy:a.cy,cr:h},this._connectEvents(l),G[d]=l);k=j;return!1},this);if(this.opt.labels)if("default"==this.opt.labelStyle)k=z,o.some(s,function(c,d){if(0>=c)return!1;var b=D[d];if(1<=c)return b=F.createText[this.opt.htmlLabels&&"vml"!=p.renderer?"html":"gfx"](this.chart,m,a.cx,a.cy+n/2,"middle",
q[d],b.series.font,b.series.fontColor),this.opt.htmlLabels&&this.htmlElements.push(b),!0;var e=k+2*c*Math.PI;d+1==s.length&&(e=z+2*Math.PI);if(this.opt.omitLabels&&0.001>e-k)return!1;var f=(k+e)/2,g=a.cx+A*Math.cos(f),f=a.cy+A*Math.sin(f)+n/2,b=F.createText[this.opt.htmlLabels&&"vml"!=p.renderer?"html":"gfx"](this.chart,m,g,f,"middle",q[d],b.series.font,b.series.fontColor);this.opt.htmlLabels&&this.htmlElements.push(b);k=e;return!1},this);else if("columns"==this.opt.labelStyle){var k=z,y=this.opt.omitLabels,
H=[];o.forEach(s,function(a,c){var b=k+2*a*Math.PI;c+1==s.length&&(b=z+2*Math.PI);var d=(k+b)/2;H.push({angle:d,left:0>Math.cos(d),theme:D[c],index:c,omit:y?0.001>b-k:!1});k=b});d=p._base._getTextBox("a",{font:u}).h;this._getProperLabelRadius(H,d,1.1*a.r);o.forEach(H,function(b,c){if(!b.omit){var d=a.cx-2*a.r,e=a.cx+2*a.r,f=p._base._getTextBox(q[c],{font:b.theme.series.font}).w,g=a.cx+b.labelR*Math.cos(b.angle),h=a.cy+b.labelR*Math.sin(b.angle),e=b.left?d+f:e-f,d=b.left?d:e,j=m.createPath().moveTo(a.cx+
a.r*Math.cos(b.angle),a.cy+a.r*Math.sin(b.angle));Math.abs(b.labelR*Math.cos(b.angle))<2*a.r-f&&j.lineTo(g,h);j.lineTo(e,h).setStroke(b.theme.series.labelWiring);f=F.createText[this.opt.htmlLabels&&"vml"!=p.renderer?"html":"gfx"](this.chart,m,d,h,"left",q[c],b.theme.series.font,b.theme.series.fontColor);this.opt.htmlLabels&&this.htmlElements.push(f)}},this)}var E=0;this._eventSeries[this.run.name]=i.map(v,function(a){return 0>=a?null:G[E++]});return this},_getProperLabelRadius:function(g,c,m){var b,
d,e=1,h=1;if(1==g.length)g[0].labelR=m;else{for(var i=0;i<g.length;i++){var n=Math.abs(Math.sin(g[i].angle));g[i].left?e>=n&&(e=n,b=g[i]):h>=n&&(h=n,d=g[i])}b.labelR=d.labelR=m;this._calculateLabelR(b,g,c);this._calculateLabelR(d,g,c)}},_calculateLabelR:function(g,c,i){for(var b=g.index,d=c.length,e=g.labelR;!(c[b%d].left^c[(b+1)%d].left);){if(!c[(b+1)%d].omit)e=(Math.sin(c[b%d].angle)*e+(c[b%d].left?-i:i))/Math.sin(c[(b+1)%d].angle),e=e<g.labelR?g.labelR:e,c[(b+1)%d].labelR=e;b++}b=g.index;for(d=
0==b?d-1:b-1;!(c[b].left^c[d].left);){if(!c[d].omit)e=(Math.sin(c[b].angle)*e+(c[b].left?i:-i))/Math.sin(c[d].angle),e=e<g.labelR?g.labelR:e,c[d].labelR=e;b--;d--;b=0>b?b+c.length:b;d=0>d?d+c.length:d}},_getLabel:function(g){return C.getLabel(g,this.opt.fixed,this.opt.precision)}})});