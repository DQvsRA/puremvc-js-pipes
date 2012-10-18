//>>built
define(["dojo/_base/lang","dojo/_base/array","dojo/dom","dojo/dom-class"],function(j,f,p,q){function h(a){return a.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function r(a){return f.every(a.childNodes,function(a){return 3==a.nodeType||"br"==(""+a.nodeName).toLowerCase()})}function k(a){var b=[];f.forEach(a.childNodes,function(a){if(3==a.nodeType)b.push(a.nodeValue);else if("br"==(""+a.nodeName).toLowerCase())b.push("\n");else throw"Complex markup";});return b.join("")}function l(a){if(!a.keywordGroups)for(var b in a.keywords){a.keywordGroups=
a.keywords[b]instanceof Object?a.keywords:{keyword:a.keywords};break}}function m(a,b,c){if("code"==(""+a.tagName).toLowerCase()&&"pre"==(""+a.parentNode.tagName).toLowerCase()){var d=document.createElement("div"),e=a.parentNode.parentNode;d.innerHTML='<pre><code class="'+b+'">'+c+"</code></pre>";e.replaceChild(d.firstChild,a.parentNode)}else a.className=b,a.innerHTML=c}function n(a,b){var c=new i(a,b);return{result:c.result,langName:a,partialResult:c.partialResult}}function o(a){var b="",c="",d;for(d in g.languages)if(g.languages[d].defaultMode){var e=
new i(d,a),f=e.keywordCount+e.relevance;if(!b||0<f)b=e.result,c=e.langName}return{result:b,langName:c}}function s(a){var b=o(k(a));b.result&&m(a,b.langName,b.result)}var g=j.getObject("dojox.highlight",!0);g.languages=g.languages||{};g.constants={IDENT_RE:"[a-zA-Z][a-zA-Z0-9_]*",UNDERSCORE_IDENT_RE:"[a-zA-Z_][a-zA-Z0-9_]*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:"\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)",APOS_STRING_MODE:{className:"string",begin:"'",end:"'",illegal:"\\n",contains:["escape"],relevance:0},
QUOTE_STRING_MODE:{className:"string",begin:'"',end:'"',illegal:"\\n",contains:["escape"],relevance:0},BACKSLASH_ESCAPE:{className:"escape",begin:"\\\\.",end:"^",relevance:0},C_LINE_COMMENT_MODE:{className:"comment",begin:"//",end:"$",relevance:0},C_BLOCK_COMMENT_MODE:{className:"comment",begin:"/\\*",end:"\\*/"},HASH_COMMENT_MODE:{className:"comment",begin:"#",end:"$"},C_NUMBER_MODE:{className:"number",begin:"\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)",end:"^",relevance:0}};var i=function(a,b){this.langName=
a;this.lang=g.languages[a];this.modes=[this.lang.defaultMode];this.keywordCount=this.relevance=0;this.result=[];if(!this.lang.defaultMode.illegalRe){this.buildRes();var c=this.lang;c.defaultMode&&c.modes&&(l(c.defaultMode),f.forEach(c.modes,l))}try{this.highlight(b),this.result=this.result.join("")}catch(d){if("Illegal"==d)this.keywordCount=this.relevance=0,this.partialResult=this.result.join(""),this.result=h(b);else throw d;}};j.extend(i,{buildRes:function(){f.forEach(this.lang.modes,function(a){if(a.begin)a.beginRe=
this.langRe("^"+a.begin);if(a.end)a.endRe=this.langRe("^"+a.end);if(a.illegal)a.illegalRe=this.langRe("^(?:"+a.illegal+")")},this);this.lang.defaultMode.illegalRe=this.langRe("^(?:"+this.lang.defaultMode.illegal+")")},subMode:function(a){var b=this.modes[this.modes.length-1].contains;if(b)for(var c=this.lang.modes,d=0;d<b.length;++d)for(var e=b[d],f=0;f<c.length;++f){var g=c[f];if(g.className==e&&g.beginRe.test(a))return g}return null},endOfMode:function(a){for(var b=this.modes.length-1;0<=b;--b){var c=
this.modes[b];if(c.end&&c.endRe.test(a))return this.modes.length-b;if(!c.endsWithParent)break}return 0},isIllegal:function(a){var b=this.modes[this.modes.length-1].illegalRe;return b&&b.test(a)},langRe:function(a,b){return RegExp(a,"m"+(this.lang.case_insensitive?"i":"")+(b?"g":""))},buildTerminators:function(){var a=this.modes[this.modes.length-1],b={};a.contains&&f.forEach(this.lang.modes,function(c){0<=f.indexOf(a.contains,c.className)&&(b[c.begin]=1)});for(var c=this.modes.length-1;0<=c;--c){var d=
this.modes[c];d.end&&(b[d.end]=1);if(!d.endsWithParent)break}a.illegal&&(b[a.illegal]=1);d=[];for(c in b)d.push(c);a.terminatorsRe=this.langRe("("+d.join("|")+")")},eatModeChunk:function(a,b){var c=this.modes[this.modes.length-1];c.terminatorsRe||this.buildTerminators();a=a.substr(b);c=c.terminatorsRe.exec(a);return!c?{buffer:a,lexeme:"",end:!0}:{buffer:c.index?a.substr(0,c.index):"",lexeme:c[0],end:!1}},keywordMatch:function(a,b){var c=b[0];this.lang.case_insensitive&&(c=c.toLowerCase());for(var d in a.keywordGroups)if(c in
a.keywordGroups[d])return d;return""},buildLexemes:function(a){var b={};f.forEach(a.lexems,function(a){b[a]=1});var c=[],d;for(d in b)c.push(d);a.lexemsRe=this.langRe("("+c.join("|")+")",!0)},processKeywords:function(a){var b=this.modes[this.modes.length-1];if(!b.keywords||!b.lexems)return h(a);b.lexemsRe||this.buildLexemes(b);b.lexemsRe.lastIndex=0;for(var c=[],d=0,e=b.lexemsRe.exec(a);e;)c.push(h(a.substr(d,e.index-d))),(d=this.keywordMatch(b,e))?(++this.keywordCount,c.push('<span class="'+d+'">'+
h(e[0])+"</span>")):c.push(h(e[0])),d=b.lexemsRe.lastIndex,e=b.lexemsRe.exec(a);c.push(h(a.substr(d,a.length-d)));return c.join("")},processModeInfo:function(a,b,c){var d=this.modes[this.modes.length-1];if(c)this.result.push(this.processKeywords(d.buffer+a));else{if(this.isIllegal(b))throw"Illegal";if(c=this.subMode(b))d.buffer+=a,this.result.push(this.processKeywords(d.buffer)),c.excludeBegin?(this.result.push(b+'<span class="'+c.className+'">'),c.buffer=""):(this.result.push('<span class="'+c.className+
'">'),c.buffer=b),this.modes.push(c),this.relevance+="number"==typeof c.relevance?c.relevance:1;else if(c=this.endOfMode(b)){d.buffer+=a;for(d.excludeEnd?this.result.push(this.processKeywords(d.buffer)+"</span>"+b):this.result.push(this.processKeywords(d.buffer+b)+"</span>");1<c;)this.result.push("</span>"),--c,this.modes.pop();this.modes.pop();this.modes[this.modes.length-1].buffer=""}}},highlight:function(a){var b=0;this.lang.defaultMode.buffer="";do{var c=this.eatModeChunk(a,b);this.processModeInfo(c.buffer,
c.lexeme,c.end);b+=c.buffer.length+c.lexeme.length}while(!c.end);if(1<this.modes.length)throw"Illegal";}});dojox.highlight.processString=function(a,b){return b?n(b,a):o(a)};dojox.highlight.init=function(a){a=p.byId(a);if(!q.contains(a,"no-highlight")&&r(a)){var b=a.className.split(/\s+/);f.some(b,function(c){if("_"!=c.charAt(0)&&g.languages[c]){var b=a,c=n(c,k(b));m(b,b.className,c.result);return!0}return!1})||s(a)}};g.Code=function(a,b){g.init(b)};return g});