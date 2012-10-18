//>>built
define("dojo/_base/declare,dojo/_base/xhr,dojo/_base/lang,dojo/_base/array,./LineString,./Collection,./GeometryFeature".split(","),function(q,r,c,s,t,u,o){return q("dojox.geo.openlayers.JsonImport",null,{constructor:function(b){this._params=b},loadData:function(){r.get({url:this._params.url,handleAs:"json",sync:!0,load:c.hitch(this,this._gotData),error:c.hitch(this,this._loadError)})},_gotData:function(b){var d=this._params.nextFeature;if(c.isFunction(d)){var a=b.layerExtent,l=a[0],f=a[1],g=l+a[2],
h=f+a[3],a=b.layerExtentLL,i=a[0],j=a[1],p=j+a[3],k=i+a[2],b=b.features,e;for(e in b){var a=b[e].shape,m=null;if(c.isArray(a[0])){var n=[];s.forEach(a,function(a){a=this._makeGeometry(a,l,f,g,h,i,p,k,j);n.push(a)},this);a=new u(n);m=new o(a)}else m=this._makeFeature(a,l,f,g,h,i,p,k,j);d.call(this,m)}d=this._params.complete;c.isFunction(d)&&d.call(this,d)}},_makeGeometry:function(b,d,a,l,f,g,h,i,j){for(var c=[],k=0,e=0;e<b.length-1;e+=2){var m=b[e+1],k=(b[e]-d)/(l-d),n=k*(i-g)+g,k=(m-a)/(f-a);c.push({x:n,
y:k*(j-h)+h})}return new t(c)},_makeFeature:function(b,d,a,c,f,g,h,i,j){b=this._makeGeometry(b,d,a,c,f,g,h,i,j);return new o(b)},_loadError:function(){var b=this._params.error;c.isFunction(b)&&b.apply(this,parameters)}})});