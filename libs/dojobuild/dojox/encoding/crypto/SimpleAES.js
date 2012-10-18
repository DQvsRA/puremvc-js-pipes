//>>built
define(["../base64","./_base"],function(v,n){function l(d,f){for(var b=f.length/4-1,c=[[],[],[],[]],a=0;16>a;a++)c[a%4][Math.floor(a/4)]=d[a];c=j(c,f,0,4);for(a=1;a<b;a++){for(var c=o(c,4),c=p(c,4),e=0;4>e;e++){for(var h=Array(4),g=Array(4),i=0;4>i;i++)h[i]=c[i][e],g[i]=c[i][e]&128?c[i][e]<<1^283:c[i][e]<<1;c[0][e]=g[0]^h[1]^g[1]^h[2]^h[3];c[1][e]=h[0]^g[1]^h[2]^g[2]^h[3];c[2][e]=h[0]^h[1]^g[2]^h[3]^g[3];c[3][e]=h[0]^g[0]^h[1]^h[2]^g[3]}c=j(c,f,a,4)}c=o(c,4);c=p(c,4);c=j(c,f,b,4);b=Array(16);for(a=
0;16>a;a++)b[a]=c[a%4][Math.floor(a/4)];return b}function o(d,f){for(var b=0;4>b;b++)for(var c=0;c<f;c++)d[b][c]=q[d[b][c]];return d}function p(d,f){for(var b=Array(4),c=1;4>c;c++){for(var a=0;4>a;a++)b[a]=d[c][(a+c)%f];for(a=0;4>a;a++)d[c][a]=b[a]}return d}function j(d,f,b,c){for(var a=0;4>a;a++)for(var e=0;e<c;e++)d[a][e]^=f[4*b+e][a];return d}function m(d){for(var f=d.length/4,b=f+6,c=Array(4*(b+1)),a=Array(4),e=0;e<f;e++)c[e]=[d[4*e],d[4*e+1],d[4*e+2],d[4*e+3]];for(e=f;e<4*(b+1);e++){c[e]=Array(4);
for(d=0;4>d;d++)a[d]=c[e-1][d];if(0==e%f){a[4]=a[0];for(d=0;4>d;d++)a[d]=a[d+1];a=r(a);for(d=0;4>d;d++)a[d]^=t[e/f][d]}else 6<f&&4==e%f&&(a=r(a));for(d=0;4>d;d++)c[e][d]=c[e-f][d]^a[d]}return c}function r(d){for(var f=0;4>f;f++)d[f]=q[d[f]];return d}function s(d){var f=[];d.replace(/(..)/g,function(b){f.push(parseInt(b,16))});return f}var q=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,
229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,
86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]];n.SimpleAES=new function(){this.encrypt=function(d,f){var b;var c=Array(32);for(b=0;32>b;b++)c[b]=f.charCodeAt(b)&255;var a=
l(c,m(c)),a=a.concat(a.slice(0,16)),c=Array(16),e=(new Date).getTime();for(b=0;4>b;b++)c[b]=e>>>8*b&255;for(b=0;4>b;b++)c[b+4]=e/4294967296>>>8*b&255;for(var e=m(a),h=Math.ceil(d.length/16),a=Array(h),g=0;g<h;g++){for(b=0;4>b;b++)c[15-b]=g>>>8*b&255;for(b=0;4>b;b++)c[15-b-4]=g/4294967296>>>8*b;var i=l(c,e),u=g<h-1?16:(d.length-1)%16+1,k="";for(b=0;b<u;b++)var j=d.charCodeAt(16*g+b)^i[b],k=k+((16>j?"0":"")+j.toString(16));a[g]=k}e="";for(b=0;8>b;b++)e+=(16>c[b]?"0":"")+c[b].toString(16);b=e+" "+a.join(" ");
return b};this.decrypt=function(d,f){var b;b=d;for(var c=Array(32),a=0;32>a;a++)c[a]=f.charCodeAt(a)&255;a=m(c);a=l(c,a);a=a.concat(a.slice(0,16));c=m(a);b=b.split(" ");for(var e=Array(16),e=s(b[0]),h=Array(b.length-1),g=1;g<b.length;g++){for(a=0;4>a;a++)e[15-a]=g-1>>>8*a&255;for(a=0;4>a;a++)e[15-a-4]=g/4294967296-1>>>8*a&255;for(var i=l(e,c),j="",k=s(b[g]),a=0;a<k.length;a++)b[g].charCodeAt(a),j+=String.fromCharCode(k[a]^i[a]);h[g-1]=j}b=h.join("");return b}};return n.SimpleAES});