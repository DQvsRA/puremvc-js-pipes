//>>built
define("dojo,dijit,dojox,dijit/_editor/_Plugin,dijit/form/Button,dojo/_base/connect,dojo/_base/declare,dojo/i18n,dojo/i18n!dojox/editor/plugins/nls/Preview".split(","),function(b,d,f,g){b.declare("dojox.editor.plugins.Preview",g,{useDefaultCommand:!1,styles:"",stylesheets:null,iconClassPrefix:"dijitAdditionalEditorIcon",_initButton:function(){this._nlsResources=b.i18n.getLocalization("dojox.editor.plugins","Preview");this.button=new d.form.Button({label:this._nlsResources.preview,showLabel:!1,iconClass:this.iconClassPrefix+
" "+this.iconClassPrefix+"Preview",tabIndex:"-1",onClick:b.hitch(this,"_preview")})},setEditor:function(a){this.editor=a;this._initButton()},updateState:function(){this.button.set("disabled",this.get("disabled"))},_preview:function(){try{var a=this.editor.get("value"),c="\t\t<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>\n",b;if(this.stylesheets)for(b=0;b<this.stylesheets.length;b++)c+="\t\t<link rel='stylesheet' type='text/css' href='"+this.stylesheets[b]+"'>\n";this.styles&&
(c+="\t\t<style>"+this.styles+"</style>\n");var a="<html>\n\t<head>\n"+c+"\t</head>\n\t<body>\n"+a+"\n\t</body>\n</html>",e=window.open("javascript: ''",this._nlsResources.preview,"status=1,menubar=0,location=0,toolbar=0");e.document.open();e.document.write(a);e.document.close()}catch(d){}}});b.subscribe(d._scopeName+".Editor.getPlugin",null,function(a){if(!a.plugin&&"preview"===a.args.name.toLowerCase())a.plugin=new f.editor.plugins.Preview({styles:"styles"in a.args?a.args.styles:"",stylesheets:"stylesheets"in
a.args?a.args.stylesheets:null})});return f.editor.plugins.Preview});