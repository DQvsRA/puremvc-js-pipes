//>>built
define(["../../_base","./_html"],function(a){var a=a.languages,b=[],d=a.pygments._html.tags,c;for(c in d)b.push(c);b="\\b("+b.join("|")+")\\b";a.html={case_insensitive:!0,defaultMode:{contains:"name entity,comment,comment preproc,_script,_style,_tag".split(",")},modes:[{className:"comment",begin:"<\!--",end:"--\>"},{className:"comment preproc",begin:"\\<\\!\\[CDATA\\[",end:"\\]\\]\\>"},{className:"comment preproc",begin:"\\<\\!",end:"\\>"},{className:"string",begin:"'",end:"'",illegal:"\\n",relevance:0},
{className:"string",begin:'"',end:'"',illegal:"\\n",relevance:0},{className:"name entity",begin:"\\&[a-z]+;",end:"^"},{className:"name tag",begin:b,end:"^",relevance:5},{className:"name attribute",begin:"\\b[a-z0-9_\\:\\-]+\\s*=",end:"^",relevance:0},{className:"_script",begin:"\\<script\\b",end:"\\<\/script\\>",relevance:5},{className:"_style",begin:"\\<style\\b",end:"\\</style\\>",relevance:5},{className:"_tag",begin:"\\<(?!/)",end:"\\>",contains:["name tag","name attribute","string","_value"]},
{className:"_tag",begin:"\\</",end:"\\>",contains:["name tag"]},{className:"_value",begin:"[^\\s\\>]+",end:"^"}]};return a.html});