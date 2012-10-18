//>>built
define("dojo/_base/lang,dojo/_base/config,dojo/ready,dojo/_base/unload,dojo/_base/sniff,dojo/_base/xhr,dojo/json,dojo/io-query,dojo/io/script".split(","),function(c,b,f,g,h,i,d,j,k){var e=function(){this._data=[];this._id=1;this.sendInterval=b.sendInterval||5E3;this.inTransitRetry=b.inTransitRetry||200;this.dataUrl=b.analyticsUrl||require.toUrl("dojox/analytics/logger/dojoxAnalytics.php");this.sendMethod=b.sendMethod||"xhrPost";this.maxRequestSize=h("ie")?2E3:b.maxRequestSize||4E3;f(this,"schedulePusher");
g.addOnUnload(this,"pushData",!0)};c.extend(e,{schedulePusher:function(a){setTimeout(c.hitch(this,"checkData"),a||this.sendInterval)},addData:function(a,b){2<arguments.length&&(b=Array.prototype.slice.call(arguments,1));this._data.push({plugin:a,data:b})},checkData:function(){this._inTransit?this.schedulePusher(this.inTransitRetry):this.pushData()||this.schedulePusher()},pushData:function(){if(this._data.length){this._inTransit=this._data;this._data=[];var a;switch(this.sendMethod){case "script":a=
k.get({url:this.getQueryPacket(),preventCache:1,callbackParamName:"callback"});break;default:a=i.post({url:this.dataUrl,content:{id:this._id++,data:d.stringify(this._inTransit)}})}a.addCallback(this,"onPushComplete");return a}return!1},getQueryPacket:function(){for(;;){var a={id:this._id++,data:d.stringify(this._inTransit)},a=this.dataUrl+"?"+j.objectToQuery(a);if(a.length>this.maxRequestSize)this._data.unshift(this._inTransit.pop()),this._split=1;else return a}},onPushComplete:function(){this._inTransit&&
delete this._inTransit;0<this._data.length?this.schedulePusher(this.inTransitRetry):this.schedulePusher()}});return c.setObject("dojox.analytics",new e)});