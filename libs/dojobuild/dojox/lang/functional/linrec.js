//>>built
define(["dijit","dojo","dojox","dojo/require!dojox/lang/functional/lambda,dojox/lang/functional/util"],function(p,h,o){h.provide("dojox.lang.functional.linrec");h.require("dojox.lang.functional.lambda");h.require("dojox.lang.functional.util");(function(){var b=o.lang.functional,i=b.inlineLambda,h=["_r","_y.a"];b.linrec=function(a,e,f,g){var k,j,l,m,n={},c={},d=function(a){n[a]=1};"string"==typeof a?a=i(a,"_x",d):(k=b.lambda(a),a="_c.apply(this, _x)",c["_c=_t.c"]=1);"string"==typeof e?e=i(e,"_x",d):
(j=b.lambda(e),e="_t.t.apply(this, _x)");"string"==typeof f?f=i(f,"_x",d):(l=b.lambda(f),f="_b.apply(this, _x)",c["_b=_t.b"]=1);"string"==typeof g?g=i(g,h,d):(m=b.lambda(g),g="_a.call(this, _r, _y.a)",c["_a=_t.a"]=1);d=b.keys(n);c=b.keys(c);a=new Function([],"var _x=arguments,_y,_r".concat(d.length?","+d.join(","):"",c.length?",_t=_x.callee,"+c.join(","):j?",_t=_x.callee":"",";for(;!",a,";_x=",f,"){_y={p:_y,a:_x}}_r=",e,";for(;_y;_y=_y.p){_r=",g,"}return _r"));if(k)a.c=k;if(j)a.t=j;if(l)a.b=l;if(m)a.a=
m;return a}})()});