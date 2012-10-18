//>>built
define("dojo/_base/kernel,dojo/_base/lang,dojo/_base/array,dojo/dom-attr,dojo/_base/declare,dojo/query,dijit/_WidgetBase,../Chart,dojox/lang/utils,dojox/lang/functional,dojox/lang/functional/lambda".split(","),function(g,h,m,s,t,i,u,v,n,w,x){var j,o,p,q,r,k=function(b){return b},l=h.getObject("dojox.charting");j=function(b,d,c){var a=eval("("+d+".prototype.defaultParams)"),e,f;for(e in a)e in c||(f=b.getAttribute(e),c[e]=n.coerceType(a[e],null==f||"undefined"==typeof f?a[e]:f));d=eval("("+d+".prototype.optionalParams)");
for(e in d)e in c||(f=b.getAttribute(e),null!=f&&(c[e]=n.coerceType(d[e],f)))};o=function(b){var d=b.getAttribute("name"),c=b.getAttribute("type");if(!d)return null;var d={name:d,kwArgs:{}},a=d.kwArgs;if(c){l.axis2d[c]&&(c=g._scopeName+"x.charting.axis2d."+c);var e=eval("("+c+")");if(e)a.type=e}else c=g._scopeName+"x.charting.axis2d.Default";j(b,c,a);if(a.font||a.fontColor){if(!a.tick)a.tick={};if(a.font)a.tick.font=a.font;if(a.fontColor)a.tick.fontColor=a.fontColor}return d};p=function(b){var d=
b.getAttribute("name"),c=b.getAttribute("type");if(!d)return null;var d={name:d,kwArgs:{}},a=d.kwArgs;if(c){l.plot2d&&l.plot2d[c]&&(c=g._scopeName+"x.charting.plot2d."+c);var e=eval("("+c+")");if(e)a.type=e}else c=g._scopeName+"x.charting.plot2d.Default";j(b,c,a);a.hAxis=b.getAttribute("hAxis");a.vAxis=b.getAttribute("vAxis");return d};q=function(b){var d=b.getAttribute("plot"),c=b.getAttribute("type");d||(d="default");var d={plot:d,kwArgs:{}},a=d.kwArgs;if(c){l.action2d[c]&&(c=g._scopeName+"x.charting.action2d."+
c);var e=eval("("+c+")");if(!e)return null;d.action=e}else return null;j(b,c,a);return d};r=function(b){var b=h.partial(s.get,b),d=b("name");if(!d)return null;var d={name:d,kwArgs:{}},c=d.kwArgs,a;a=b("plot");if(null!=a)c.plot=a;a=b("marker");if(null!=a)c.marker=a;a=b("stroke");if(null!=a)c.stroke=eval("("+a+")");a=b("outline");if(null!=a)c.outline=eval("("+a+")");a=b("shadow");if(null!=a)c.shadow=eval("("+a+")");a=b("fill");if(null!=a)c.fill=eval("("+a+")");a=b("font");if(null!=a)c.font=a;a=b("fontColor");
if(null!=a)c.fontColor=eval("("+a+")");a=b("legend");if(null!=a)c.legend=a;a=b("data");if(null!=a)return d.type="data",d.data=a?m.map((""+a).split(","),Number):[],d;a=b("array");if(null!=a)return d.type="data",d.data=eval("("+a+")"),d;a=b("store");if(null!=a){d.type="store";d.data=eval("("+a+")");a=b("field");d.field=null!=a?a:"value";if(a=b("query"))c.query=a;if(a=b("queryOptions"))c.queryOptions=eval("("+a+")");if(a=b("start"))c.start=Number(a);if(a=b("count"))c.count=Number(a);if(a=b("sort"))c.sort=
eval("("+a+")");if(a=b("valueFn"))c.valueFn=x.lambda(a);return d}return null};return t("dojox.charting.widget.Chart",u,{theme:null,margins:null,stroke:void 0,fill:void 0,buildRendering:function(){this.inherited(arguments);var b=this.domNode,d=i("> .axis",b).map(o).filter(k),c=i("> .plot",b).map(p).filter(k),a=i("> .action",b).map(q).filter(k),e=i("> .series",b).map(r).filter(k);b.innerHTML="";var f=this.chart=new v(b,{margins:this.margins,stroke:this.stroke,fill:this.fill,textDir:this.textDir});this.theme&&
f.setTheme(this.theme);d.forEach(function(a){f.addAxis(a.name,a.kwArgs)});c.forEach(function(a){f.addPlot(a.name,a.kwArgs)});this.actions=a.map(function(a){return new a.action(f,a.plot,a.kwArgs)});w.foldl(e,function(a,b){if("data"==b.type)f.addSeries(b.name,b.data,b.kwArgs),a=!0;else{f.addSeries(b.name,[0],b.kwArgs);var c={};n.updateWithPattern(c,b.kwArgs,{query:"",queryOptions:null,start:0,count:1},!0);if(b.kwArgs.sort)c.sort=h.clone(b.kwArgs.sort);h.mixin(c,{onComplete:function(a){if("valueFn"in
b.kwArgs)var c=b.kwArgs.valueFn,a=m.map(a,function(a){return c(b.data.getValue(a,b.field,0))});else a=m.map(a,function(a){return b.data.getValue(a,b.field,0)});f.addSeries(b.name,a,b.kwArgs).render()}});b.data.fetch(c)}return a},!1)&&f.render()},destroy:function(){this.chart.destroy();this.inherited(arguments)},resize:function(b){this.chart.resize(b)}})});