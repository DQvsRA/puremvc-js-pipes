//>>built
define(["..","dojo/_base/lang","dojo/date","./islamic/Date"],function(j,k,l,i){var g=k.getObject("date.islamic",!0,j);g.getDaysInMonth=function(a){return a.getDaysInIslamicMonth(a.getMonth(),a.getFullYear())};g.compare=function(a,e,b){a instanceof i&&(a=a.toGregorian());e instanceof i&&(e=e.toGregorian());return l.compare.apply(null,arguments)};g.add=function(a,e,b){var d=new i(a);switch(e){case "day":d.setDate(a.getDate()+b);break;case "weekday":var c=a.getDay();if(5>c+b&&0<c+b)d.setDate(a.getDate()+
b);else{var f=e=0;5==c?(c=4,f=0<b?-1:1):6==c&&(c=4,f=0<b?-2:2);var c=0<b?5-c-1:-c,h=b-c,g=parseInt(h/5);0!=h%5&&(e=0<b?2:-2);d.setDate(a.getDate()+(e+7*g+h%5+c)+f)}break;case "year":d.setFullYear(a.getFullYear()+b);break;case "week":d.setDate(a.getDate()+7*b);break;case "month":a=a.getMonth();d.setMonth(a+b);break;case "hour":d.setHours(a.getHours()+b);break;case "minute":d._addMinutes(b);break;case "second":d._addSeconds(b);break;case "millisecond":d._addMilliseconds(b)}return d};g.difference=function(a,
e,b){var e=e||new i,b=b||"day",d=e.getFullYear()-a.getFullYear(),c=1;switch(b){case "weekday":d=Math.round(g.difference(a,e,"day"));c=parseInt(g.difference(a,e,"week"));if(0==d%7)d=5*c;else{var b=0,f=a.getDay(),h=e.getDay(),c=parseInt(d/7),e=d%7,a=new i(a);a.setDate(a.getDate()+7*c);a=a.getDay();if(0<d)switch(!0){case 5==f:b=-1;break;case 6==f:b=0;break;case 5==h:b=-1;break;case 6==h:b=-2;break;case 5<a+e:b=-2}else if(0>d)switch(!0){case 5==f:b=0;break;case 6==f:b=1;break;case 5==h:b=2;break;case 6==
h:b=1;break;case 0>a+e:b=2}d=d+b-2*c}c=d;break;case "year":c=d;break;case "month":b=e.toGregorian()>a.toGregorian()?e:a;f=e.toGregorian()>a.toGregorian()?a:e;c=b.getMonth();h=f.getMonth();if(0==d)c=b.getMonth()-f.getMonth();else{c=12-h+c;d=f.getFullYear()+1;for(b=b.getFullYear();d<b;d++)c+=12}e.toGregorian()<a.toGregorian()&&(c=-c);break;case "week":c=parseInt(g.difference(a,e,"day")/7);break;case "day":c/=24;case "hour":c/=60;case "minute":c/=60;case "second":c/=1E3;case "millisecond":c*=e.toGregorian().getTime()-
a.toGregorian().getTime()}return Math.round(c)};return g});