//>>built
define(["dojo/_base/lang","dojo/_base/config","dojo/_base/array","dojo/has"],function(f,j,r,h){function p(a,b,c,d,g,e,m,i,n){if(!l.equals(i,m)&&!("*"==d&&0>r.indexOf(c.get("properties")||[e],e)||"*"==d&&e in(n||{}))){d="*"==d?e:d;h("mvc-bindings-log-api")&&s(c,d,g,e);try{i=a?a(i,b):i}catch(j){h("mvc-bindings-log-api");return}h("mvc-bindings-log-api");f.isFunction(c.set)?c.set(d,i):c[d]=i}}var m=f.getObject("dojox.mvc",!0);h.add("mvc-bindings-log-api",(j.mvc||{}).debugBindings);var l;if(h("mvc-bindings-log-api"))var s=
function(a,b,c,d){return[[c._setIdAttr||!c.declaredClass?c:c.declaredClass,d].join(":"),[a._setIdAttr||!a.declaredClass?a:a.declaredClass,b].join(":")]};j={from:1,to:2,both:3};l=function(a,b,c,d,g){var e=(g||{}).converter,j,i,n;e&&(j={source:a,target:c},i=e.format&&f.hitch(j,e.format),n=e.parse&&f.hitch(j,e.parse));var l=[],o=[],q=f.mixin({},a.constraints,c.constraints),e=(g||{}).bindDirection||m.both;h("mvc-bindings-log-api")&&s(a,b,c,d);if("*"==d){if("*"!=b)throw Error("Unmatched wildcard is specified between source and target.");
g=c.get("properties");if(!g){var g=[],k;for(k in c)c.hasOwnProperty(k)&&"_watchCallbacks"!=k&&g.push(k)}o=c.get("excludes")}else g=[b];e&m.from&&(f.isFunction(a.set)&&f.isFunction(a.watch)?l.push(a.watch.apply(a,("*"!=b?[b]:[]).concat([function(b,f,e){p(i,q,c,d,a,b,f,e,o)}]))):h("mvc-bindings-log-api"),r.forEach(g,function(b){if("*"!=d||!(b in(o||{}))){var e=f.isFunction(a.get)?a.get(b):a[b];p(i,q,c,"*"==d?b:d,a,b,void 0,e)}}));e&m.to&&(e&m.from||r.forEach(g,function(b){if("*"!=d||!(b in(o||{}))){var e=
f.isFunction(c.get)?c.get(d):c[d];p(n,q,a,b,c,"*"==d?b:d,void 0,e)}}),f.isFunction(c.set)&&f.isFunction(c.watch)?l.push(c.watch.apply(c,("*"!=d?[d]:[]).concat([function(d,e,f){p(n,q,a,b,c,d,e,f,o)}]))):h("mvc-bindings-log-api"));h("mvc-bindings-log-api");k={};k.unwatch=k.remove=function(){for(var a=null;a=l.pop();)a.unwatch(),h("mvc-bindings-log-api")};return k};f.mixin(m,j);return f.setObject("dojox.mvc.sync",f.mixin(l,{equals:function(a,b){return a===b||"number"==typeof a&&isNaN(a)&&"number"==typeof b&&
isNaN(b)||f.isFunction((a||{}).getTime)&&f.isFunction((b||{}).getTime)&&a.getTime()==b.getTime()||(f.isFunction((a||{}).equals)?a.equals(b):f.isFunction((b||{}).equals)?b.equals(a):!1)}},j))});