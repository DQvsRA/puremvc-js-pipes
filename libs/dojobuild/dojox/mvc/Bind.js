//>>built
define(["dojo/_base/lang","dojo/_base/array"],function(d,e){var j=d.getObject("dojox.mvc",!0);return d.mixin(j,{bind:function(a,c,b,g,h,e){var f;return a.watch(c,function(a,c,i){f=d.isFunction(h)?h(i):i;(!e||f!=b.get(g))&&b.set(g,f)})},bindInputs:function(a,c){var b=[];e.forEach(a,function(a){b.push(a.watch("value",c))});return b}})});