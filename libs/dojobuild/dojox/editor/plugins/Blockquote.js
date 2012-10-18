//>>built
define("dojo,dijit,dojox,dijit/_editor/range,dijit/_editor/selection,dijit/_editor/_Plugin,dijit/form/ToggleButton,dojo/_base/connect,dojo/_base/declare,dojo/i18n,dojo/i18n!dojox/editor/plugins/nls/Blockquote".split(","),function(h,o,n,r,s,q){h.declare("dojox.editor.plugins.Blockquote",q,{iconClassPrefix:"dijitAdditionalEditorIcon",_initButton:function(){this._nlsResources=h.i18n.getLocalization("dojox.editor.plugins","Blockquote");this.button=new o.form.ToggleButton({label:this._nlsResources.blockquote,
showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"Blockquote",tabIndex:"-1",onClick:h.hitch(this,"_toggleQuote")})},setEditor:function(a){this.editor=a;this._initButton();this.connect(this.editor,"onNormalizedDisplayChanged","updateState");a.customUndo=!0},_toggleQuote:function(){try{var a=this.editor;a.focus();var e=this.button.get("checked"),g=o.range.getSelection(a.window),d,j,b,i;g&&0<g.rangeCount&&(d=g.getRangeAt(0));if(d){a.beginEditing();if(e){var c,l;if(d.startContainer===
d.endContainer){if(this._isRootInline(d.startContainer)){for(b=d.startContainer;b&&b.parentNode!==a.editNode;)b=b.parentNode;for(;b&&b.previousSibling&&(this._isTextElement(b)||1===b.nodeType&&this._isInlineFormat(this._getTagName(b)));)b=b.previousSibling;if(b&&1===b.nodeType&&!this._isInlineFormat(this._getTagName(b)))b=b.nextSibling;if(b){c=a.document.createElement("blockquote");h.place(c,b,"after");c.appendChild(b);for(i=c.nextSibling;i&&(this._isTextElement(i)||1===i.nodeType&&this._isInlineFormat(this._getTagName(i)));)c.appendChild(i),
i=c.nextSibling}}else{for(var k=d.startContainer;(this._isTextElement(k)||this._isInlineFormat(this._getTagName(k))||"li"===this._getTagName(k))&&k!==a.editNode&&k!==a.document.body;)k=k.parentNode;k!==a.editNode&&k!==k.ownerDocument.documentElement&&(c=a.document.createElement("blockquote"),h.place(c,k,"after"),c.appendChild(k))}c&&(a._sCall("selectElementChildren",[c]),a._sCall("collapse",[!0]))}else{var f;b=d.startContainer;for(i=d.endContainer;b&&this._isTextElement(b)&&b.parentNode!==a.editNode;)b=
b.parentNode;for(f=b;f.nextSibling&&a._sCall("inSelection",[f]);)f=f.nextSibling;i=f;if(i===a.editNode||i===a.document.body){c=a.document.createElement("blockquote");h.place(c,b,"after");l=this._getTagName(b);if(this._isTextElement(b)||this._isInlineFormat(l))for(a=b;a&&(this._isTextElement(a)||1===a.nodeType&&this._isInlineFormat(this._getTagName(a)));)c.appendChild(a),a=c.nextSibling;else c.appendChild(b);return}i=i.nextSibling;for(f=b;f&&f!==i;){if(1===f.nodeType){if(l=this._getTagName(f),"br"!==
l){if(!window.getSelection&&"p"===l&&this._isEmpty(f)){f=f.nextSibling;continue}this._isInlineFormat(l)?c||(c=a.document.createElement("blockquote"),h.place(c,f,"after")):(c&&this._isEmpty(c)&&c.parentNode.removeChild(c),c=a.document.createElement("blockquote"),h.place(c,f,"after"));c.appendChild(f);f=c}}else this._isTextElement(f)&&(c||(c=a.document.createElement("blockquote"),h.place(c,f,"after")),c.appendChild(f),f=c);f=f.nextSibling}c&&(this._isEmpty(c)?c.parentNode.removeChild(c):(a._sCall("selectElementChildren",
[c]),a._sCall("collapse",[!0])))}}else if(c=!1,d.startContainer===d.endContainer){for(j=d.endContainer;j&&j!==a.editNode&&j!==a.document.body;){if("blockquote"===(j.tagName?j.tagName.toLowerCase():"")){c=!0;break}j=j.parentNode}if(c){for(var p;j.firstChild;)p=j.firstChild,h.place(p,j,"before");j.parentNode.removeChild(j);p&&(a._sCall("selectElementChildren",[p]),a._sCall("collapse",[!0]))}}else{for(b=d.startContainer;b&&this._isTextElement(b)&&b.parentNode!==a.editNode;)b=b.parentNode;for(d=[];b&&
b.nextSibling&&a._sCall("inSelection",[b]);){if(b.parentNode&&"blockquote"===this._getTagName(b.parentNode))b=b.parentNode;d.push(b);b=b.nextSibling}for(var n=this._findBlockQuotes(d);n.length;){var m=n.pop();if(m.parentNode){for(;m.firstChild;)h.place(m.firstChild,m,"before");m.parentNode.removeChild(m)}}}a.endEditing()}a.onNormalizedDisplayChanged()}catch(q){}},updateState:function(){var a=this.editor,e=this.get("disabled");if(a&&a.isLoaded&&this.button&&(this.button.set("disabled",e),!e)){var g,
e=!1,d=o.range.getSelection(a.window);if(d&&0<d.rangeCount&&(d=d.getRangeAt(0)))g=d.endContainer;for(;g&&g!==a.editNode&&g!==a.document;){if("blockquote"===(g.tagName?g.tagName.toLowerCase():"")){e=!0;break}g=g.parentNode}this.button.set("checked",e)}},_findBlockQuotes:function(a){var e=[];if(a){var g;for(g=0;g<a.length;g++){var d=a[g];1===d.nodeType&&("blockquote"===this._getTagName(d)&&e.push(d),d.childNodes&&0<d.childNodes.length&&(e=e.concat(this._findBlockQuotes(d.childNodes))))}}return e},_getTagName:function(a){var e=
"";a&&1===a.nodeType&&(e=a.tagName?a.tagName.toLowerCase():"");return e},_isRootInline:function(a){var e=this.editor;if(this._isTextElement(a)&&a.parentNode===e.editNode||1===a.nodeType&&this._isInlineFormat(a)&&a.parentNode===e.editNode)return!0;if(this._isTextElement(a)&&this._isInlineFormat(this._getTagName(a.parentNode))){for(a=a.parentNode;a&&a!==e.editNode&&this._isInlineFormat(this._getTagName(a));)a=a.parentNode;if(a===e.editNode)return!0}return!1},_isTextElement:function(a){return a&&3===
a.nodeType||4===a.nodeType?!0:!1},_isEmpty:function(a){if(a.childNodes){var e=!0,g;for(g=0;g<a.childNodes.length;g++){var d=a.childNodes[g];if(1===d.nodeType){if("p"!==this._getTagName(d)||h.trim(d.innerHTML)){e=!1;break}}else if(this._isTextElement(d)){if((d=h.trim(d.nodeValue))&&"&nbsp;"!==d&&"\u00a0"!==d){e=!1;break}}else{e=!1;break}}return e}return!0},_isInlineFormat:function(a){switch(a){case "a":case "b":case "strong":case "s":case "strike":case "i":case "u":case "em":case "sup":case "sub":case "span":case "font":case "big":case "cite":case "q":case "img":case "small":return!0;
default:return!1}}});h.subscribe(o._scopeName+".Editor.getPlugin",null,function(a){if(!a.plugin&&"blockquote"===a.args.name.toLowerCase())a.plugin=new n.editor.plugins.Blockquote({})});return n.editor.plugins.Blockquote});