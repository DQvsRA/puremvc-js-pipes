//>>built
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/window","./sniff"],function(c,d,b,a){b=b.doc.documentElement;b.className=d.trim(b.className+" "+[a("bb")?"dj_bb":"",a("android")?"dj_android":"",a("iphone")?"dj_iphone":"",a("ipod")?"dj_ipod":"",a("ipad")?"dj_ipad":""].join(" ").replace(/ +/g," "));return c});