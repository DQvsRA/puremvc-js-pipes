//>>built
define(["dijit","dojo","dojox","dojo/require!dojo/io/script,dojo/io/iframe,dojox/xml/parser"],function(i,c,d){c.provide("dojox.xmpp.bosh");c.require("dojo.io.script");c.require("dojo.io.iframe");c.require("dojox.xml.parser");d.xmpp.bosh={transportIframes:[],initialize:function(a){this.transportIframes=[];for(var b=d._scopeName+".xmpp.bosh",e=c.connect(c.getObject(b),"_iframeOnload",this,function(b){0==b&&(a.load(),c.disconnect(e))}),f=0;f<a.iframes;f++){var g="xmpp-transport-"+f,h=c.byId("xmpp-transport-"+
f);h&&(window[g]&&(window[g]=null),window.frames[g]&&(window.frames[g]=null),c.destroy(h));h=c.io.iframe.create("xmpp-transport-"+f,b+"._iframeOnload("+f+");");this.transportIframes.push(h)}},_iframeOnload:function(a){c.io.iframe.doc(c.byId("xmpp-transport-"+a)).write("<script>var isLoaded=true; var rid=0; var transmiting=false; function _BOSH_(msg) { transmiting=false; parent.dojox.xmpp.bosh.handle(msg, rid); } <\/script>")},findOpenIframe:function(){for(var a=0;a<this.transportIframes.length;a++){var b=
this.transportIframes[a],e=b.contentWindow;if(e.isLoaded&&!e.transmiting)return b}return!1},handle:function(a,b){var e=this["rid"+b],c=d.xml.parser.parse(a,"text/xml");c?e.ioArgs.xmppMessage=c:e.errback(Error("Recieved bad document from server: "+a))},get:function(a){var b=this.findOpenIframe(),e=c.io.iframe.doc(b);a.frameDoc=e;var a=this._makeScriptDeferred(a),d=a.ioArgs;b.contentWindow.rid=d.rid;b.contentWindow.transmiting=!0;c._ioAddQueryToUrl(d);c._ioNotifyStart(a);c.io.script.attach(d.id,d.url,
e);c._ioWatch(a,this._validCheck,this._ioCheck,this._resHandle);return a},remove:function(a,b){c.destroy(c.byId(a,b));this[a]&&delete this[a]},_makeScriptDeferred:function(a){var b=c._ioSetArgs(a,this._deferredCancel,this._deferredOk,this._deferredError),e=b.ioArgs;e.id="rid"+a.rid;e.rid=a.rid;e.canDelete=!0;e.frameDoc=a.frameDoc;return this[e.id]=b},_deferredCancel:function(a){a.canceled=!0;a.ioArgs.canDelete&&d.xmpp.bosh._addDeadScript(a.ioArgs)},_deferredOk:function(a){a=a.ioArgs;a.canDelete&&
d.xmpp.bosh._addDeadScript(a);return a.xmppMessage||a},_deferredError:function(a,b){b.ioArgs.canDelete&&("timeout"==a.dojoType?d.xmpp.bosh.remove(b.ioArgs.id,b.ioArgs.frameDoc):d.xmpp.bosh._addDeadScript(b.ioArgs));return a},_deadScripts:[],_addDeadScript:function(a){d.xmpp.bosh._deadScripts.push({id:a.id,frameDoc:a.frameDoc});a.frameDoc=null},_validCheck:function(){var a=d.xmpp.bosh,b=a._deadScripts;if(b&&0<b.length){for(var c=0;c<b.length;c++)a.remove(b[c].id,b[c].frameDoc),b[c].frameDoc=null;d.xmpp.bosh._deadScripts=
[]}return!0},_ioCheck:function(a){return a.ioArgs.xmppMessage?!0:!1},_resHandle:function(a){d.xmpp.bosh._ioCheck(a)?a.callback(a):a.errback(Error("inconceivable dojox.xmpp.bosh._resHandle error"))}}});