//>>built
define(["dojo/_base/lang","dojox/calc/_Executor"],function(p,i){function o(c){function a(a){var b=Math.floor(1/a),d=i.approx(1/b);if(d==a)return{n:1,d:b};var c=b+1,d=i.approx(1/c);if(d==a)return{n:1,d:c};if(50<=b)return null;var f=b+c,d=i.approx(2/f);if(d==a)return{n:2,d:f};if(34<=b)return null;var e=a<d,g=2*f+(e?1:-1),d=i.approx(4/g);if(d==a)return{n:4,d:g};var h=a<d;if(e&&!h||!e&&h)if(g=f+g>>1,d=i.approx(3/g),d==a)return{n:3,d:g};if(20<=b)return null;for(var f=f+2*b,g=f+2,l=5;100>=f;l++)for(var f=
f+b,g=g+c,d=e?g+f+1>>1:f,j=e?g:g+f-1>>1,d=h?d+j>>1:d,j=h?j:d+j>>1,k=d;k<=j;k++)if(!(l&0&&k&0)){d=i.approx(l/k);if(d==a)return{n:l,d:k};if(d<a)break}return null}var c=Math.abs(c),b;for(b in h){var m=h[b],e=c/m,n=Math.floor(e),e=i.approx(e-n);if(0==e)return{mt:b,m:m,n:n,d:1};if(e=a(e))return{mt:b,m:m,n:n*e.d+e.n,d:e.d}}return null}var h;(function(){var c=[5,6,7,10,11,13,14,15,17,19,21,22,23,26,29,30,31,33,34,35,37,38,39,41,42,43,46,47,51,53,55,57,58,59,61,62,65,66,67,69,70,71,73,74,77,78,79,82,83,85,
86,87,89,91,93,94,95,97];h={1:1,"\u221a(2)":Math.sqrt(2),"\u221a(3)":Math.sqrt(3),pi:Math.PI};for(var a in c){var b=c[a];h["\u221a("+b+")"]=Math.sqrt(b)}h["\u221a(pi)"]=Math.sqrt(Math.PI)})();return p.mixin(i,{toFrac:function(c){var a=o(c);return a?(0>c?"-":"")+(1==a.m?"":1==a.n?"":a.n+"*")+(1==a.m?a.n:a.mt)+(1==a.d?"":"/"+a.d):c},pow:function(c,a){if(0<c||Math.floor(a)==a)return Math.pow(c,a);var b=o(a);return 0<=c?b&&1==b.m?Math.pow(Math.pow(c,1/b.d),0>a?-b.n:b.n):Math.pow(c,a):b&&b.d&1?Math.pow(Math.pow(-Math.pow(-c,
1/b.d),0>a?-b.n:b.n),b.m):NaN}})});