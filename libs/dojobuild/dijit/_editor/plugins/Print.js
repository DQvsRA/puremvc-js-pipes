//>>built
define("dojo/_base/declare,dojo/i18n,dojo/_base/lang,dojo/sniff,../../focus,../_Plugin,../../form/Button,dojo/i18n!../nls/commands".split(","),function(h,i,e,f,j,d,k){var g=h("dijit._editor.plugins.Print",d,{_initButton:function(){var a=i.getLocalization("dijit._editor","commands"),b=this.editor;this.button=new k({label:a.print,ownerDocument:b.ownerDocument,dir:b.dir,lang:b.lang,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"Print",tabIndex:"-1",onClick:e.hitch(this,"_print")})},
setEditor:function(a){this.editor=a;this._initButton();this.editor.onLoadDeferred.then(e.hitch(this,function(){this.editor.iframe.contentWindow.print||this.button.set("disabled",!0)}))},updateState:function(){var a=this.get("disabled");this.editor.iframe.contentWindow.print||(a=!0);this.button.set("disabled",a)},_print:function(){var a=this.editor.iframe;if(a.contentWindow.print)if(!f("opera")&&!f("chrome"))j.focus(a),a.contentWindow.print();else{var b=this.editor.document,c=this.editor.get("value"),
c="<html><head><meta http-equiv='Content-Type' content='text/html; charset='UTF-8'></head><body>"+c+"</body></html>",a=window.open("javascript: ''","","status=0,menubar=0,location=0,toolbar=0,width=1,height=1,resizable=0,scrollbars=0");a.document.open();a.document.write(c);a.document.close();if(b=b.getElementsByTagName("style"))for(c=0;c<b.length;c++){var e=b[c].innerHTML,d=a.document.createElement("style");d.appendChild(a.document.createTextNode(e));a.document.getElementsByTagName("head")[0].appendChild(d)}a.print();
a.close()}}});d.registry.print=function(){return new g({command:"print"})};return g});