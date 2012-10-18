//>>built
define(["dijit","dojo","dojox","dojo/require!dojo/NodeList-traverse,dojo/NodeList-manipulate,dojo/io/script"],function(T,d){d.provide("dojox.jq");d.require("dojo.NodeList-traverse");d.require("dojo.NodeList-manipulate");d.require("dojo.io.script");(function(){function L(a,b){a=(a+"").replace(/<\s*(\w+)([^\/\>]*)\/\s*>/g,function(a,b,d){return-1==M.indexOf("|"+b+"|")?"<"+b+d+"></"+b+">":a});return d._toDom(a,b)}function z(a){var b=a.indexOf("-");-1!=b&&(0==b&&(a=a.substring(1)),a=a.replace(/-(\w)/g,
function(a,b){return b.toUpperCase()}));return a}function A(a,b){if(a==b)return a;var c={},e;for(e in b)if((void 0===c[e]||c[e]!=b[e])&&void 0!==b[e]&&a!=b[e])a[e]=d.isObject(a[e])&&d.isObject(b[e])?d.isArray(b[e])?b[e]:A(a[e],b[e]):b[e];if(d.isIE&&b&&(e=b.toString,"function"==typeof e&&e!=a.toString&&e!=c.toString&&"\nfunction toString() {\n    [native code]\n}\n"!=e))a.toString=b.toString;return a}function B(a,b,c,e){if(e){var i={};i[c]=e;a.forEach(function(a){d[b](a,i)});return a}return Math.abs(Math.round(d[b](a[0])[c]))}
function p(a,b,c,e,i){var f=!1;if(f="none"==a.style.display)a.style.display="block";var h=d.getComputedStyle(a),j=Math.abs(Math.round(d._getContentBox(a,h)[b])),c=c?Math.abs(Math.round(d._getPadExtents(a,h)[b])):0,e=e?Math.abs(Math.round(d._getBorderExtents(a,h)[b])):0,b=i?Math.abs(Math.round(d._getMarginExtents(a,h)[b])):0;if(f)a.style.display="none";return c+j+e+b}function q(a){var a=a.split("$$")[0],b=a.indexOf(".");-1!=b&&(a=a.substring(0,b));return a}function C(a,b){return 0==b.indexOf("ajax")?
d.subscribe(t[b],function(c,e){var d=new f.Event(b);-1!="ajaxComplete|ajaxSend|ajaxSuccess".indexOf(b)?o(a,[d,c.ioArgs.xhr,c.ioArgs.args]):"ajaxError"==b?o(a,[d,c.ioArgs.xhr,c.ioArgs.args,e]):o(a,[d])}):d.connect(a,"on"+b,function(b){o(a,arguments)})}function D(a,b){var a=a||[],a=[].concat(a),c=a[0];if(!c||!c.preventDefault)c=b&&b.preventDefault?b:new f.Event(b),a.unshift(c);return a}function o(a,b,c){u=!0;b=b||v;if(9==a.nodeType)a=a.documentElement;var e=a.getAttribute(k);if(e){var i=b[0],f=i.type,
h=q(f),e=m[e][h],j;c&&(j=c.apply(a,b));if(!1!==j)for(var g in e)if("_connectId"!=g&&(!i._isStrict&&0==g.indexOf(f)||i._isStrict&&g==f))i[d._scopeName+"callbackId"]=g,a=e[g],i.data="undefined"!=typeof a.data?a.data:null,!1===(j=a.fn.apply(i.target,b))&&!i._isFake&&d.stopEvent(i),i.result=j;return j}}function E(a,b,c,e,i){var f=a[b];if(f){var h=-1!=c.indexOf("."),g=!1;if(e)delete f[e];else if(!h&&!i)g=!0;else if(h)if("."==c.charAt(0))for(var l in f)l.indexOf(c)==l.length-c.length&&delete f[l];else delete f[c];
else for(l in f)if(-1!=l.indexOf("$$")&&f[l].fn==i){delete f[l];break}c=!0;for(l in f)if("_connectId"!=l){c=!1;break}if(g||c)-1!=b.indexOf("ajax")?d.unsubscribe(f._connectId):d.disconnect(f._connectId),delete a[b]}}function F(a){d.isString(a)&&(a="slow"==a?700:"fast"==a?300:500);return a}function G(a){for(var b in a)if(b.indexOf("callback")==b.length-8)return b;return null}d.config.ioPublish=!0;var M="|img|meta|hr|br|input|",N=d.global.$,O=d.global.jQuery,f=d.global.$=d.global.jQuery=function(a,b){var c=
a;if(c)if(d.isString(c))if("<"==c.charAt(0))if(c=L(c),11==c.nodeType)c=c.childNodes;else return f._wrap([c],null,f);else{var e=d._NodeListCtor;d._NodeListCtor=f;var i=b;i&&i._is$?i=i[0]:d.isString(i)&&(i=d.query(i)[0]);c=d.query.call(this,c,i);d._NodeListCtor=e;return c}else{if(d.isFunction(c))return f.ready(c),f;if(c==document||c==window)return f._wrap([c],null,f);if(d.isArray(c)){e=[];for(i=0;i<c.length;i++)-1==d.indexOf(e,c[i])&&e.push(c[i]);return f._wrap(c,null,f)}if("nodeType"in c)return f._wrap([c],
null,f)}else return f._wrap([],null,f);return f._wrap(d._toArray(c),null,f)},w=d.NodeList.prototype,g=f.fn=f.prototype=d.delegate(w);f._wrap=d.NodeList._wrap;var P=/^H\d/i,n=d.query.pseudos;d.mixin(n,{has:function(a,b){return function(a){return f(b,a).length}},visible:function(){return function(a){return"hidden"!=d.style(a,"visible")&&"none"!=d.style(a,"display")}},hidden:function(){return function(a){return"hidden"==a.type||"hidden"==d.style(a,"visible")||"none"==d.style(a,"display")}},selected:function(){return function(a){return a.selected}},
checked:function(){return function(a){return"INPUT"==a.nodeName.toUpperCase()&&a.checked}},disabled:function(){return function(a){return a.getAttribute("disabled")}},enabled:function(){return function(a){return!a.getAttribute("disabled")}},input:function(){return function(a){a=a.nodeName.toUpperCase();return"INPUT"==a||"SELECT"==a||"TEXTAREA"==a||"BUTTON"==a}},button:function(){return function(a){return"INPUT"==a.nodeName.toUpperCase()&&"button"==a.type||"BUTTON"==a.nodeName.toUpperCase()}},header:function(){return function(a){return a.nodeName.match(P)}}});
var H={};d.forEach("text,password,radio,checkbox,submit,image,reset,file".split(","),function(a){H[a]=function(){return function(b){return"INPUT"==b.nodeName.toUpperCase()&&b.type==a}}});d.mixin(n,H);f.browser={mozilla:d.isMoz,msie:d.isIE,opera:d.isOpera,safari:d.isSafari};f.browser.version=d.isIE||d.isMoz||d.isOpera||d.isSafari||d.isWebKit;f.ready=f.fn.ready=function(a){d.addOnLoad(d.hitch(null,a,f));return this};g._is$=!0;g.size=function(){return this.length};f.prop=function(a,b){return d.isFunction(b)?
b.call(a):b};f.className={add:d.addClass,remove:d.removeClass,has:d.hasClass};f.makeArray=function(a){return"undefined"==typeof a?[]:a.length&&!d.isString(a)&&!("location"in a)?d._toArray(a):[a]};f.merge=function(a,b){var c=[a.length,0],c=c.concat(b);a.splice.apply(a,c);return a};f.each=function(a,b){if(d.isArrayLike(a))for(var c=0;c<a.length&&!(!1===b.call(a[c],c,a[c]));c++);else if(d.isObject(a))for(c in a)if(!1===b.call(a[c],c,a[c]))break;return this};g.each=function(a){return f.each.call(this,
this,a)};g.eq=function(){var a=f();d.forEach(arguments,function(b){this[b]&&a.push(this[b])},this);return a};g.get=function(a){return a||0==a?this[a]:this};g.index=function(a){a._is$&&(a=a[0]);return this.indexOf(a)};var I=[],Q=0,x=d._scopeName+"DataId",J=function(a){var b={};1==a.nodeType&&(b=a.getAttribute(x),b||(b=Q++,a.setAttribute(x,b)),(b=I[void 0])||(b=I[void 0]={}));return b};f.data=function(a,b,c){var e=null;if("events"==b){e=m[a.getAttribute(k)];b=!0;if(e)for(var d in e){b=!1;break}return b?
null:e}d=J(a);"undefined"!=typeof c?d[b]=c:e=d[b];return c?this:e};f.removeData=function(a,b){var c=J(a);delete c[b];if(1==a.nodeType){var e=!0,d;for(d in c){e=!1;break}e&&a.removeAttribute(x)}return this};g.data=function(a,b){var c=null;this.forEach(function(e){c=f.data(e,a,b)});return b?this:c};g.removeData=function(a){this.forEach(function(b){f.removeData(b,a)});return this};g.extend=function(){var a=[this],a=a.concat(arguments);return f.extend.apply(f,a)};f.extend=function(){for(var a=arguments,
b,c=0;c<a.length;c++){var e=a[c];e&&d.isObject(e)&&(b?A(b,e):b=e)}return b};f.noConflict=function(a){var b=f;d.global.$=N;if(a)d.global.jQuery=O;return b};g.attr=function(a,b){if(1==arguments.length&&d.isString(arguments[0])){var c=this[0];if(!c)return null;var e=arguments[0],f=d.attr(c,e),g=c[e];return e in c&&!d.isObject(g)&&"href"!=a?g:f||g}if(d.isObject(a))for(c in a)this.attr(c,a[c]);else{var h=d.isFunction(b);this.forEach(function(c,e){var f=c[a];a in c&&!d.isObject(f)&&"href"!=a?c[a]=h?b.call(c,
e):b:1==c.nodeType&&d.attr(c,a,h?b.call(c,e):b)})}return this};g.removeAttr=function(a){this.forEach(function(b){var c=b[a];a in b&&!d.isObject(c)&&"href"!=a?delete b[a]:1==b.nodeType&&("class"==a?b.removeAttribute(a):d.removeAttr(b,a))});return this};g.toggleClass=function(a,b){var c=1<arguments.length;this.forEach(function(e){d.toggleClass(e,a,c?b:!d.hasClass(e,a))});return this};g.toggle=function(){var a=arguments;if(1<arguments.length&&d.isFunction(arguments[0])){var b=0;return this.bind("click",
function(){a[b].apply(this,arguments);b+=1;b>a.length-1&&(b=0)})}var c=1==arguments.length?arguments[0]:void 0;this.forEach(function(b){var i=("undefined"==typeof c?"none"==d.style(b,"display"):c)?"show":"hide",b=f(b);b[i].apply(b,a)});return this};g.hasClass=function(a){return this.some(function(b){return d.hasClass(b,a)})};g.html=g.innerHTML;d.forEach(["filter","slice"],function(a){g[a]=function(){var b;if(d.isFunction(arguments[0])){var c=arguments[0];arguments[0]=function(a,b){return c.call(a,
a,b)}}if("filter"==a&&d.isString(arguments[0]))b=this._filterQueryResult(this,arguments[0]);else{var e=d._NodeListCtor;d._NodeListCtor=g;b=f(w[a].apply(this,arguments));d._NodeListCtor=e}return b._stash(this)}});g.map=function(a){return this._buildArrayFromCallback(a)};f.map=function(a,b){return g._buildArrayFromCallback.call(a,b)};f.inArray=function(a,b){return d.indexOf(b,a)};g.is=function(a){return a?!!this.filter(a).length:!1};g.not=function(){var a=f.apply(f,arguments);return f(w.filter.call(this,
function(b){return-1==a.indexOf(b)}))._stash(this)};g.add=function(){return this.concat.apply(this,arguments)};g.contents=function(){var a=[];this.forEach(function(b){if("IFRAME"==b.nodeName.toUpperCase())(b=b.contentDocument||b.name&&b.document&&document.getElementsByTagName("iframe")[b.name].contentWindow&&document.getElementsByTagName("iframe")[b.name].contentWindow.document||b.name&&document.frames[b.name]&&document.frames[b.name].document||null)&&a.push(b);else for(var b=b.childNodes,c=0;c<b.length;c++)a.push(b[c])});
return this._wrap(a)._stash(this)};g.find=function(a){var b=[];this.forEach(function(c){1==c.nodeType&&(b=b.concat(d._toArray(f(a,c))))});return this._getUniqueAsNodeList(b)._stash(this)};g.andSelf=function(){return this.add(this._parent)};g.remove=function(a){a=a?this._filterQueryResult(this,a):this;a.removeData();a.forEach(function(a){a.parentNode.removeChild(a)});return this};f.css=function(a,b,c){b=z(b);return c?d.style(a,b,c):d.style(a,b)};g.css=function(a,b){if(d.isString(a)){a=z(a);if(2==arguments.length)return!d.isString(b)&&
"zIndex"!=a&&(b+="px"),this.forEach(function(c){1==c.nodeType&&d.style(c,a,b)}),this;b=d.style(this[0],a);!d.isString(b)&&"zIndex"!=a&&(b+="px");return b}for(var c in a)this.css(c,a[c]);return this};g.height=function(a){return B(this,"contentBox","h",a)};g.width=function(a){return B(this,"contentBox","w",a)};g.innerHeight=function(){return p(this[0],"h",!0)};g.innerWidth=function(){return p(this[0],"w",!0)};g.outerHeight=function(a){return p(this[0],"h",!0,!0,a)};g.outerWidth=function(a){return p(this[0],
"w",!0,!0,a)};var m=[],K=1,k=d._scopeName+"eventid",v;f.Event=function(a){if(this==f)return new f.Event(a);"string"==typeof a?this.type=a.replace(/!/,""):d.mixin(this,a);this.timeStamp=(new Date).getTime();this._isFake=!0;this._isStrict=-1!=this.type.indexOf("!")};n=f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=this._true},stopPropagation:function(){this.isPropagationStopped=this._true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=this.isPropagationStopped=
this._true},_true:function(){return!0},_false:function(){return!1}};d.mixin(n,{isPropagationStopped:n._false,isImmediatePropagationStopped:n._false,isDefaultPrevented:n._false});var u=!1;g.triggerHandler=function(a,b,c){var d=this[0];if(d&&3!=d.nodeType&&8!=d.nodeType)return b=D(b,a),o(d,b,c)};g.trigger=function(a,b,c){var b=D(b,a),d=b[0],a=q(d.type);v=b;currentExtraFunc=c;var i=null,g=!d.target;this.forEach(function(h){if(3!=h.nodeType&&8!=h.nodeType){if(9==h.nodeType)h=h.documentElement;if(d._isFake&&
(d.currentTarget=h,g))d.target=h;if(c){var j=b.slice(1);i=c.apply(h,i=j.concat(i))}if(!1!==i){u=!1;if(h[a])try{i=h[a]()}catch(l){}else if(h["on"+a])try{i=h["on"+a]()}catch(r){}u||(i=o(h,b));h=h.parentNode;!1!==i&&!d.isImmediatePropagationStopped()&&!d.isPropagationStopped()&&h&&1==h.nodeType&&f(h).trigger(a,b,c)}}});currentExtraFunc=v=null;return this};var R=0;g.bind=function(a,b,c){a=a.split(" ");c||(c=b,b=null);this.forEach(function(d){if(3!=d.nodeType&&8!=d.nodeType){if(9==d.nodeType)d=d.documentElement;
var f=d.getAttribute(k);f||(f=K++,d.setAttribute(k,f),m[f]={});for(var g=0;g<a.length;g++){var h=a[g],j=q(h);j==h&&(h=j+"$$"+R++);var l=m[f];l[j]||(l[j]={_connectId:C(d,j)});l[j][h]={fn:c,data:b}}}});return this};g.unbind=function(a,b){var c=a?a[d._scopeName+"callbackId"]:null,a=(a=a&&a.type?a.type:a)?a.split(" "):a;this.forEach(function(d){if(3!=d.nodeType&&8!=d.nodeType){if(9==d.nodeType)d=d.documentElement;if(d=d.getAttribute(k))if(d=m[d]){var f=a;if(!f){var f=[],g;for(g in d)f.push(g)}for(var h=
0;h<f.length;h++){var j=f[h],l=q(j);if("."==j.charAt(0))for(g in d)E(d,g,j,c,b);else E(d,l,j,c,b)}}}});return this};g.one=function(a,b){return this.bind(a,function(){f(this).unbind(a,arguments.callee);return b.apply(this,arguments)})};g._cloneNode=function(a){var b=a.cloneNode(!0);if(1==a.nodeType)for(var c=d.query("["+k+"]",b),e=0,f;f=c[e];e++)if(d.query("["+k+'="'+f.getAttribute(k)+'"]',a)[0]){var g=f.getAttribute(k);if(g=m[g]){var h=h=K++;f.setAttribute(k,h);var h=m[h]={},j=void 0;for(j in g){var l=
h[j]={_connectId:C(f,j)},r=g[j],s;for(s in r)l[s]={fn:r[s].fn,data:r[s].data}}}}return b};d.getObject("$.event.global",!0);d.forEach("blur,focus,dblclick,click,error,keydown,keypress,keyup,load,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,submit,ajaxStart,ajaxSend,ajaxSuccess,ajaxError,ajaxComplete,ajaxStop".split(","),function(a){g[a]=function(b){b?this.bind(a,b):this.trigger(a);return this}});g.hide=function(a,b){a=F(a);this.forEach(function(c){var e=c.style;if("none"!=d.getComputedStyle(c).display)e.overflow=
"hidden",e.display="block",a?d.anim(c,{width:0,height:0,opacity:0},a,null,function(){e.width="";e.height="";e.display="none";return b&&b.call(c)}):(d.style(c,"display","none"),b&&b.call(c))});return this};g.show=function(a,b){a=F(a);this.forEach(function(c){var e=c.style;if("none"==d.getComputedStyle(c).display)if(a){var f=parseFloat(e.width),g=parseFloat(e.height);if(!f||!g)e.display="block",g=d.marginBox(c),f=g.w,g=g.h;e.width=0;e.height=0;e.overflow="hidden";d.attr(c,"opacity",0);e.display="block";
d.anim(c,{width:f,height:g,opacity:1},a,null,b?d.hitch(c,b):void 0)}else d.style(c,"display","block"),b&&b.call(c)});return this};f.ajaxSettings={};f.ajaxSetup=function(a){d.mixin(f.ajaxSettings,a)};var t={ajaxStart:"/dojo/io/start",ajaxSend:"/dojo/io/send",ajaxSuccess:"/dojo/io/load",ajaxError:"/dojo/io/error",ajaxComplete:"/dojo/io/done",ajaxStop:"/dojo/io/stop"},y;for(y in t)0==y.indexOf("ajax")&&function(a){g[a]=function(b){this.forEach(function(c){d.subscribe(t[a],function(d,g){var k=new f.Event(a),
h=d&&d.ioArgs,j=h&&h.xhr,h=h&&h.args;return-1!="ajaxComplete|ajaxSend|ajaxSuccess".indexOf(a)?b.call(c,k,j,h):"ajaxError"==a?b.call(c,k,j,h,g):b.call(c,k)})});return this}}(y);var S=d._xhrObj;d._xhrObj=function(a){var b=S.apply(d,arguments);return a&&a.beforeSend&&!1===a.beforeSend(b)?!1:b};f.ajax=function(a){var b=d.delegate(f.ajaxSettings),c;for(c in a)if("data"==c&&d.isObject(a[c])&&d.isObject(b.data))for(var e in a[c])b.data[e]=a[c][e];else b[c]=a[c];a=b;b=a.url;if("async"in a)a.sync=!a.async;
if(!1===a.global)a.ioPublish=!1;if(a.data)if(e=a.data,d.isString(e))a.content=d.queryToObject(e);else{for(c in e)d.isFunction(e[c])&&(e[c]=e[c]());a.content=e}c=a.dataType;"dataType"in a?("script"==c?c="javascript":"html"==c&&(c="text"),a.handleAs=c):(c=a.handleAs="text",a.guessedType=!0);if("cache"in a)a.preventCache=!a.cache;else if("script"==a.dataType||"jsonp"==a.dataType)a.preventCache=!0;if(a.error)a._jqueryError=a.error,delete a.error;a.handle=function(b,c){var d="success";if(b instanceof Error)d=
"timeout"==b.dojoType?"timeout":"error",a._jqueryError&&a._jqueryError(c.xhr,d,b);else{var f=c.args.guessedType&&c.xhr&&c.xhr.responseXML;f&&(b=f);a.success&&a.success(b,d,c.xhr)}a.complete&&a.complete(b,d,c.xhr);return b};e="jsonp"==c;if("javascript"==c){var g=b.indexOf(":"),k=b.indexOf("/");if(0<g&&g<k){var h=b.indexOf("/",k+2);if(-1==h)h=b.length;if(location.protocol!=b.substring(0,g+1)||location.hostname!=b.substring(k+2,h))e=!0}}if(e){if("jsonp"==c){b=a.jsonp;if(!b){if((c=a.url.split("?")[1])&&
(c=d.queryToObject(c)))if(b=G(c))a.url=a.url.replace(RegExp("([&\\?])?"+b+"=?")+"=?");b||(b=G(a.content))&&delete a.content[b]}a.jsonp=b||"callback"}return b=d.io.script.get(a)}b=d.xhr(a.type||"GET",a);return!1===b.ioArgs.xhr?!1:b.ioArgs.xhr};f.getpost=function(a,b,c,e,g){a={url:b,type:a};if(c)d.isFunction(c)&&!e?a.complete=c:a.data=c;if(e)d.isString(e)&&!g?g=e:a.complete=e;if(g)a.dataType=g;return f.ajax(a)};f.get=d.hitch(f,"getpost","GET");f.post=d.hitch(f,"getpost","POST");f.getJSON=function(a,
b,c){return f.getpost("GET",a,b,c,"json")};f.getScript=function(a,b){return f.ajax({url:a,success:b,dataType:"script"})};g.load=function(a,b,c){var e=this[0];if(!e||!e.nodeType||9==e.nodeType)return d.addOnLoad(a),this;var e=a.split(/\s+/),a=e[0],g=e[1],k=c||b,e=d.hitch(this,function(a,b,c){var e=a.match(/\<\s*body[^>]+>.*<\/body\s*>/i);e&&(a=e);e=d._toDom(a);if(g){var m=f(d.create("div"));m.append(e);e=m.find(g)}else e=f(11==e.nodeType?e.childNodes:e);this.html(e);k&&setTimeout(d.hitch(this,function(){this.forEach(function(d){k.call(d,
a,b,c)})}),10)});c?c=e:b=e;e="GET";b&&d.isObject(b)&&(e="POST");f.getpost(e,a,b,c,"html");return this};g.serialize=function(){return""+this.map(function(a){if("FORM"==a.nodeName.toUpperCase())return d.formToQuery(a);if(-1=="file|submit|image|reset|button|".indexOf((a.type||"").toLowerCase())){var b=d.fieldToObject(a);if(a.name&&null!=b){var c={};c[a.name]=b;return d.objectToQuery(c)}}}).join("&")};f.param=function(a){return a._is$&&a.serialize?a.serialize():d.isArray(a)?d.map(a,function(a){return f.param(a)}).join("&"):
d.objectToQuery(a)};f.isFunction=function(){var a=d.isFunction.apply(d,arguments);a&&(a="object"!=typeof arguments[0]);return a}})()});