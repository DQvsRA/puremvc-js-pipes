//>>built
define("dojo,dijit,dojox,dijit/_editor/_Plugin,dojo/_base/connect,dojo/_base/declare,dojox/html/format".split(","),function(d,e,c,f){d.declare("dojox.editor.plugins.PrettyPrint",f,{indentBy:-1,lineLength:-1,useDefaultCommand:!1,entityMap:null,_initButton:function(){delete this.command},setToolbar:function(){},setEditor:function(b){this.inherited(arguments);var a=this;this.editor.onLoadDeferred.addCallback(function(){a.editor._prettyprint_getValue=a.editor.getValue;a.editor.getValue=function(){var b=
a.editor._prettyprint_getValue(arguments);return c.html.format.prettyPrint(b,a.indentBy,a.lineLength,a.entityMap,a.xhtml)};a.editor._prettyprint_endEditing=a.editor._endEditing;a.editor._prettyprint_onBlur=a.editor._onBlur;a.editor._endEditing=function(){var b=a.editor._prettyprint_getValue(!0);a.editor._undoedSteps=[];a.editor._steps.push({text:b,bookmark:a.editor._getBookmark()})};a.editor._onBlur=function(b){this.inherited("_onBlur",arguments);var c=a.editor._prettyprint_getValue(!0);if(c!=a.editor.savedContent)a.editor.onChange(c),
a.editor.savedContent=c}})}});d.subscribe(e._scopeName+".Editor.getPlugin",null,function(b){if(!b.plugin&&"prettyprint"===b.args.name.toLowerCase())b.plugin=new c.editor.plugins.PrettyPrint({indentBy:"indentBy"in b.args?b.args.indentBy:-1,lineLength:"lineLength"in b.args?b.args.lineLength:-1,entityMap:"entityMap"in b.args?b.args.entityMap:c.html.entities.html.concat([["\u00a2","cent"],["\u00a3","pound"],["\u20ac","euro"],["\u00a5","yen"],["\u00a9","copy"],["\u00a7","sect"],["\u2026","hellip"],["\u00ae",
"reg"]]),xhtml:"xhtml"in b.args?b.args.xhtml:!1})});return c.editor.plugins.PrettyPrint});