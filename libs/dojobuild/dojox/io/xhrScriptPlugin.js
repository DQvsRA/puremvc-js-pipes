//>>built
define(["dojo/_base/kernel","dojo/_base/window","dojo/io/script","dojox/io/xhrPlugins","dojox/io/scriptFrame"],function(e,j,g,h){e.getObject("io.xhrScriptPlugin",!0,dojox);dojox.io.xhrScriptPlugin=function(b,i,c){h.register("script",function(d,a){return!0!==a.sync&&("GET"==d||c)&&a.url.substring(0,b.length)==b},function(d,a,b){var f=function(){a.callbackParamName=i;if(e.body())a.frameDoc="frame"+Math.random();return g.get(a)};return(c?c(f,!0):f)(d,a,b)})};return dojox.io.xhrScriptPlugin});