//>>built
define(["dojo/_base/lang","./_base","./regexp","./us"],function(b,c,d,f){var e=b.getObject("ca",!0,c);b.mixin(e,{isPhoneNumber:function(a){return f.isPhoneNumber(a)},isProvince:function(a){return RegExp("^"+d.ca.province()+"$","i").test(a)},isSocialInsuranceNumber:function(a){return c.isNumberFormat(a,{format:["###-###-###","### ### ###","#########"]})},isPostalCode:function(a){return RegExp("^"+d.ca.postalCode()+"$","i").test(a)}});return e});