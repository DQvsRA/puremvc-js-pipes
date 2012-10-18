//>>built
require({cache:{"url:dojox/editor/plugins/resources/insertTable.html":'<div class="dijitDialog" tabindex="-1" role="dialog" aria-labelledby="${id}_title">\n\t<div dojoAttachPoint="titleBar" class="dijitDialogTitleBar">\n\t<span dojoAttachPoint="titleNode" class="dijitDialogTitle" id="${id}_title">${insertTableTitle}</span>\n\t<span dojoAttachPoint="closeButtonNode" class="dijitDialogCloseIcon" dojoAttachEvent="onclick: onCancel" title="${buttonCancel}">\n\t\t<span dojoAttachPoint="closeText" class="closeText" title="${buttonCancel}">x</span>\n\t</span>\n\t</div>\n    <div dojoAttachPoint="containerNode" class="dijitDialogPaneContent">\n        <table class="etdTable"><tr>\n            <td>\n                <label>${rows}</label>\n\t\t\t</td><td>\n                <span dojoAttachPoint="selectRow" dojoType="dijit.form.TextBox" value="2"></span>\n            </td><td><table><tr><td class="inner">\n                <label>${columns}</label>\n\t\t\t</td><td class="inner">\n                <span dojoAttachPoint="selectCol" dojoType="dijit.form.TextBox" value="2"></span>\n            </td></tr></table></td></tr>\t\t\n\t\t\t<tr><td>\n                <label>${tableWidth}</label>\n            </td><td>\n                <span dojoAttachPoint="selectWidth" dojoType="dijit.form.TextBox" value="100"></span>\n\t\t\t</td><td>\n                <select dojoAttachPoint="selectWidthType" hasDownArrow="true" dojoType="dijit.form.FilteringSelect">\n                  <option value="percent">${percent}</option>\n                  <option value="pixels">${pixels}</option>\n                </select></td></tr>\t\n            <tr><td>\n                <label>${borderThickness}</label>\n            </td><td>\n                <span dojoAttachPoint="selectBorder" dojoType="dijit.form.TextBox" value="1"></span>\n            </td><td>\n                ${pixels}\n            </td></tr><tr><td>\n                <label>${cellPadding}</label>\n            </td><td>\n                <span dojoAttachPoint="selectPad" dojoType="dijit.form.TextBox" value="0"></span>\n            </td><td class="cellpad"></td></tr><tr><td>\n                <label>${cellSpacing}</label>\n            </td><td>\n                <span dojoAttachPoint="selectSpace" dojoType="dijit.form.TextBox" value="0"></span>\n            </td><td class="cellspace"></td></tr></table>\n        <div class="dialogButtonContainer">\n            <div dojoType="dijit.form.Button" dojoAttachEvent="onClick: onInsert">${buttonInsert}</div>\n            <div dojoType="dijit.form.Button" dojoAttachEvent="onClick: onCancel">${buttonCancel}</div>\n        </div>\n\t</div>\n</div>\n',
"url:dojox/editor/plugins/resources/modifyTable.html":'<div class="dijitDialog" tabindex="-1" role="dialog" aria-labelledby="${id}_title">\n\t<div dojoAttachPoint="titleBar" class="dijitDialogTitleBar">\n\t<span dojoAttachPoint="titleNode" class="dijitDialogTitle" id="${id}_title">${modifyTableTitle}</span>\n\t<span dojoAttachPoint="closeButtonNode" class="dijitDialogCloseIcon" dojoAttachEvent="onclick: onCancel" title="${buttonCancel}">\n\t\t<span dojoAttachPoint="closeText" class="closeText" title="${buttonCancel}">x</span>\n\t</span>\n\t</div>\n    <div dojoAttachPoint="containerNode" class="dijitDialogPaneContent">\n        <table class="etdTable">\n          <tr><td>\n                <label>${backgroundColor}</label>\n            </td><td colspan="2">\n                <span class="colorSwatchBtn" dojoAttachPoint="backgroundCol"></span>\n            </td></tr><tr><td>\n                <label>${borderColor}</label>\n            </td><td colspan="2">\n                <span class="colorSwatchBtn" dojoAttachPoint="borderCol"></span>\n            </td></tr><tr><td>\n                <label>${align}</label>\n            </td><td colspan="2">\t\n                <select dojoAttachPoint="selectAlign" dojoType="dijit.form.FilteringSelect">\n                  <option value="default">${default}</option>\n                  <option value="left">${left}</option>\n                  <option value="center">${center}</option>\n                  <option value="right">${right}</option>\n                </select>\n            </td></tr>\n            <tr><td>\n                <label>${tableWidth}</label>\n            </td><td>\n                <span dojoAttachPoint="selectWidth" dojoType="dijit.form.TextBox" value="100"></span>\n            </td><td>\n                <select dojoAttachPoint="selectWidthType" hasDownArrow="true" dojoType="dijit.form.FilteringSelect">\n                  <option value="percent">${percent}</option>\n                  <option value="pixels">${pixels}</option>\n                </select></td></tr>\t\n            <tr><td>\n                <label>${borderThickness}</label>\n            </td><td>\n                <span dojoAttachPoint="selectBorder" dojoType="dijit.form.TextBox" value="1"></span>\n            </td><td>\n                ${pixels}\n            </td></tr><tr><td>\n                <label>${cellPadding}</label>\n            </td><td>\n                <span dojoAttachPoint="selectPad" dojoType="dijit.form.TextBox" value="0"></span>\n            </td><td class="cellpad"></td></tr><tr><td>\n                <label>${cellSpacing}</label>\n            </td><td>\n                <span dojoAttachPoint="selectSpace" dojoType="dijit.form.TextBox" value="0"></span>\n            </td><td class="cellspace"></td></tr>\n        </table>\n        <div class="dialogButtonContainer">\n            <div dojoType="dijit.form.Button" dojoAttachEvent="onClick: onSet">${buttonSet}</div>\n            <div dojoType="dijit.form.Button" dojoAttachEvent="onClick: onCancel">${buttonCancel}</div>\n        </div>\n\t</div>\n</div>\n'}});
define("dojo/_base/declare,dijit/_editor/_Plugin,dijit/_WidgetBase,dijit/_TemplatedMixin,dijit/_WidgetsInTemplateMixin,dijit/Dialog,dijit/Menu,dijit/MenuItem,dijit/MenuSeparator,dojo/text!./resources/insertTable.html,dojo/text!./resources/modifyTable.html,dojo/i18n!./nls/TableDialog,dijit/_base/popup,dijit/popup,dijit/_editor/range,dijit/_editor/selection,dijit/ColorPalette,dojox/widget/ColorPicker,dojo/_base/connect,dijit/TooltipDialog,dijit/form/Button,dijit/form/DropDownButton,dijit/form/TextBox,dijit/form/FilteringSelect".split(","),
function(g,m,p,j,k,n,q,h,o,r,s,e){dojo.experimental("dojox.editor.plugins.TablePlugins");var t=g(m,{tablesConnected:!1,currentlyAvailable:!1,alwaysAvailable:!1,availableCurrentlySet:!1,initialized:!1,tableData:null,shiftKeyDown:!1,editorDomNode:null,undoEnabled:!0,refCount:0,doMixins:function(){dojo.mixin(this.editor,{getAncestorElement:function(a){return this._sCall("getAncestorElement",[a])},hasAncestorElement:function(a){return this._sCall("hasAncestorElement",[a])},selectElement:function(a){this._sCall("selectElement",
[a])},byId:function(a){return dojo.byId(a,this.document)},query:function(a,b,c){a=dojo.query(a,b||this.document);return c?a[0]:a}})},initialize:function(a){this.refCount++;a.customUndo=!0;if(!this.initialized)this.initialized=!0,this.editor=a,this.editor._tablePluginHandler=this,a.onLoadDeferred.addCallback(dojo.hitch(this,function(){this.editorDomNode=this.editor.editNode||this.editor.iframe.document.body.firstChild;this._myListeners=[];this._myListeners.push(dojo.connect(this.editorDomNode,"mouseup",
this.editor,"onClick"));this._myListeners.push(dojo.connect(this.editor,"onDisplayChanged",this,"checkAvailable"));this._myListeners.push(dojo.connect(this.editor,"onBlur",this,"checkAvailable"));this.doMixins();this.connectDraggable()}))},getTableInfo:function(a){a&&this._tempStoreTableData(!1);if(this.tableData)return this.tableData;var b,c,d,f,l,e,g;if(c=this.editor.getAncestorElement("td"))b=c.parentNode;f=this.editor.getAncestorElement("table");d=dojo.query("td",f);d.forEach(function(a,b){c==
a&&(e=b)});a=dojo.query("tr",f);a.forEach(function(a,c){b==a&&(g=c)});l=d.length/a.length;this.tableData={tbl:f,td:c,tr:b,trs:a,tds:d,rows:a.length,cols:l,tdIndex:e,trIndex:g,colIndex:e%l};this._tempStoreTableData(500);return this.tableData},connectDraggable:function(){if(dojo.isIE)this.editorDomNode.ondragstart=dojo.hitch(this,"onDragStart"),this.editorDomNode.ondragend=dojo.hitch(this,"onDragEnd")},onDragStart:function(){var a=window.event;if(!a.srcElement.id)a.srcElement.id="tbl_"+(new Date).getTime()},
onDragEnd:function(){var a=window.event.srcElement,b=a.id,c=this.editor.document;"table"==a.tagName.toLowerCase()&&setTimeout(function(){var a=dojo.byId(b,c);dojo.removeAttr(a,"align")},100)},checkAvailable:function(){if(this.availableCurrentlySet)return this.currentlyAvailable;if(!this.editor)return!1;if(this.alwaysAvailable)return!0;(this.currentlyAvailable=this.editor.focused?this.editor.hasAncestorElement("table"):!1)?this.connectTableKeys():this.disconnectTableKeys();this._tempAvailability(500);
dojo.publish(this.editor.id+"_tablePlugins",[this.currentlyAvailable]);return this.currentlyAvailable},_prepareTable:function(a){a=this.editor.query("td",a);a[0].id||a.forEach(function(a,c){if(!a.id)a.id="tdid"+c+this.getTimeStamp()},this);return a},getTimeStamp:function(){return(new Date).getTime()},_tempStoreTableData:function(a){if(!0!==a)!1===a?this.tableData=null:void 0!==a&&setTimeout(dojo.hitch(this,function(){this.tableData=null}),a)},_tempAvailability:function(a){if(!0===a)this.availableCurrentlySet=
!0;else if(!1===a)this.availableCurrentlySet=!1;else if(void 0!==a)this.availableCurrentlySet=!0,setTimeout(dojo.hitch(this,function(){this.availableCurrentlySet=!1}),a)},connectTableKeys:function(){if(!this.tablesConnected){this.tablesConnected=!0;var a=this.editor.iframe?this.editor.document:this.editor.editNode;this.cnKeyDn=dojo.connect(a,"onkeydown",this,"onKeyDown");this.cnKeyUp=dojo.connect(a,"onkeyup",this,"onKeyUp");this._myListeners.push(dojo.connect(a,"onkeypress",this,"onKeyUp"))}},disconnectTableKeys:function(){dojo.disconnect(this.cnKeyDn);
dojo.disconnect(this.cnKeyUp);this.tablesConnected=!1},onKeyDown:function(a){var b=a.keyCode;if(16==b)this.shiftKeyDown=!0;if(9==b)b=this.getTableInfo(),b.tdIndex=this.shiftKeyDown?b.tdIndex-1:tabTo=b.tdIndex+1,0<=b.tdIndex&&b.tdIndex<b.tds.length?(this.editor.selectElement(b.tds[b.tdIndex]),this.currentlyAvailable=!0,this._tempAvailability(!0),this._tempStoreTableData(!0),this.stopEvent=!0):(this.stopEvent=!1,this.onDisplayChanged()),this.stopEvent&&dojo.stopEvent(a)},onKeyUp:function(a){var b=a.keyCode;
if(16==b)this.shiftKeyDown=!1;if(37==b||38==b||39==b||40==b)this.onDisplayChanged();9==b&&this.stopEvent&&dojo.stopEvent(a)},onDisplayChanged:function(){this.currentlyAvailable=!1;this._tempStoreTableData(!1);this._tempAvailability(!1);this.checkAvailable()},uninitialize:function(a){if(this.editor==a){this.refCount--;if(!this.refCount&&this.initialized)this.tablesConnected&&this.disconnectTableKeys(),this.initialized=!1,dojo.forEach(this._myListeners,function(a){dojo.disconnect(a)}),delete this._myListeners,
delete this.editor._tablePluginHandler,delete this.editor;this.inherited(arguments)}}}),i=g("dojox.editor.plugins.TablePlugins",m,{iconClassPrefix:"editorIcon",useDefaultCommand:!1,buttonClass:dijit.form.Button,commandName:"",label:"",alwaysAvailable:!1,undoEnabled:!0,onDisplayChanged:function(a){if(!this.alwaysAvailable)this.available=a,this.button.set("disabled",!this.available)},setEditor:function(a){this.editor=a;this.editor.customUndo=!0;this.inherited(arguments);this._availableTopic=dojo.subscribe(this.editor.id+
"_tablePlugins",this,"onDisplayChanged");this.onEditorLoaded()},onEditorLoaded:function(){this.editor._tablePluginHandler?this.editor._tablePluginHandler.initialize(this.editor):(new t).initialize(this.editor)},selectTable:function(){var a=this.getTableInfo();a&&a.tbl&&this.editor._sCall("selectElement",[a.tbl])},_initButton:function(){this.command=this.commandName;this.label=this.editor.commands[this.command]=this._makeTitle(this.command);this.inherited(arguments);delete this.command;this.connect(this.button,
"onClick","modTable");this.onDisplayChanged(!1)},modTable:function(a){this.begEdit();var b=this.getTableInfo(),c=dojo.isString(a)?a:this.commandName,d,f,a=!1;dojo.isIE&&this.editor.focus();switch(c){case "insertTableRowBefore":c=b.tbl.insertRow(b.trIndex);for(f=0;f<b.cols;f++)d=c.insertCell(-1),d.innerHTML="&nbsp;";break;case "insertTableRowAfter":c=b.tbl.insertRow(b.trIndex+1);for(f=0;f<b.cols;f++)d=c.insertCell(-1),d.innerHTML="&nbsp;";break;case "insertTableColumnBefore":b.trs.forEach(function(a){d=
a.insertCell(b.colIndex);d.innerHTML="&nbsp;"});a=!0;break;case "insertTableColumnAfter":b.trs.forEach(function(a){d=a.insertCell(b.colIndex+1);d.innerHTML="&nbsp;"});a=!0;break;case "deleteTableRow":b.tbl.deleteRow(b.trIndex);break;case "deleteTableColumn":b.trs.forEach(function(a){a.deleteCell(b.colIndex)}),a=!0}a&&this.makeColumnsEven();this.endEdit()},begEdit:function(){if(this.editor._tablePluginHandler.undoEnabled)this.editor.customUndo?this.editor.beginEditing():this.valBeforeUndo=this.editor.getValue()},
endEdit:function(){if(this.editor._tablePluginHandler.undoEnabled){if(this.editor.customUndo)this.editor.endEditing();else{var a=this.editor.getValue();this.editor.setValue(this.valBeforeUndo);this.editor.replaceValue(a)}this.editor.onDisplayChanged()}},makeColumnsEven:function(){setTimeout(dojo.hitch(this,function(){var a=this.getTableInfo(!0),b=Math.floor(100/a.cols);a.tds.forEach(function(a){dojo.attr(a,"width",b+"%")})}),10)},getTableInfo:function(a){return this.editor._tablePluginHandler.getTableInfo(a)},
_makeTitle:function(a){var b=[];dojo.forEach(a,function(a,d){91>a.charCodeAt(0)&&0<d&&32!=b[d-1].charCodeAt(0)&&b.push(" ");0===d&&(a=a.toUpperCase());b.push(a)});return b.join("")},getSelectedCells:function(){var a=[];this.editor._tablePluginHandler._prepareTable(this.getTableInfo().tbl);var b=this.editor,c=b._sCall("getSelectedHtml",[null]).match(/id="*\w*"*/g);dojo.forEach(c,function(c){c=c.substring(3,c.length);'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));(c=b.byId(c))&&
"td"==c.tagName.toLowerCase()&&a.push(c)},this);if(!a.length&&(c=dijit.range.getSelection(b.window),c.rangeCount))for(c=c.getRangeAt(0).startContainer;c&&c!=b.editNode&&c!=b.document;){if(1===c.nodeType&&"td"===(c.tagName?c.tagName.toLowerCase():""))return[c];c=c.parentNode}return a},updateState:function(){this.button&&((this.available||this.alwaysAvailable)&&!this.get("disabled")?this.button.set("disabled",!1):this.button.set("disabled",!0))},destroy:function(){this.inherited(arguments);dojo.unsubscribe(this._availableTopic);
this.editor._tablePluginHandler.uninitialize(this.editor)}}),u=g(i,{constructor:function(){this.connect(this,"setEditor",function(a){a.onLoadDeferred.addCallback(dojo.hitch(this,function(){this._createContextMenu()}));this.button.domNode.style.display="none"})},destroy:function(){this.menu&&(this.menu.destroyRecursive(),delete this.menu);this.inherited(arguments)},_initButton:function(){this.inherited(arguments);if("tableContextMenu"==this.commandName)this.button.domNode.display="none"},_createContextMenu:function(){var a=
new q({targetNodeIds:[this.editor.iframe]});a.addChild(new h({label:e.selectTableLabel,onClick:dojo.hitch(this,"selectTable")}));a.addChild(new o);a.addChild(new h({label:e.insertTableRowBeforeLabel,onClick:dojo.hitch(this,"modTable","insertTableRowBefore")}));a.addChild(new h({label:e.insertTableRowAfterLabel,onClick:dojo.hitch(this,"modTable","insertTableRowAfter")}));a.addChild(new h({label:e.insertTableColumnBeforeLabel,onClick:dojo.hitch(this,"modTable","insertTableColumnBefore")}));a.addChild(new h({label:e.insertTableColumnAfterLabel,
onClick:dojo.hitch(this,"modTable","insertTableColumnAfter")}));a.addChild(new o);a.addChild(new h({label:e.deleteTableRowLabel,onClick:dojo.hitch(this,"modTable","deleteTableRow")}));a.addChild(new h({label:e.deleteTableColumnLabel,onClick:dojo.hitch(this,"modTable","deleteTableColumn")}));this.menu=a}}),v=g("dojox.editor.plugins.InsertTable",i,{alwaysAvailable:!0,modTable:function(){var a=new dojox.editor.plugins.EditorTableDialog({});a.show();var b=dojo.connect(a,"onBuildTable",this,function(a){dojo.disconnect(b);
this.editor.execCommand("inserthtml",a.htmlText)})}}),x=g("dojox.editor.plugins.ModifyTable",i,{modTable:function(){if(this.editor._tablePluginHandler.checkAvailable()){var a=this.getTableInfo(),a=new w({table:a.tbl});a.show();this.connect(a,"onSetTable",function(a){var c=this.getTableInfo();dojo.attr(c.td,"bgcolor",a)})}}}),y=g([p,j,k],{templateString:"<div style='display: none; position: absolute; top: -10000; z-index: -10000'><div dojoType='dijit.TooltipDialog' dojoAttachPoint='dialog' class='dojoxEditorColorPicker'><div dojoType='dojox.widget.ColorPicker' dojoAttachPoint='_colorPicker'></div><div style='margin: 0.5em 0em 0em 0em'><button dojoType='dijit.form.Button' type='button' dojoAttachPoint='_setButton'>${buttonSet}</button>&nbsp;<button dojoType='dijit.form.Button' type='button' dojoAttachPoint='_cancelButton'>${buttonCancel}</button></div></div></div>",
widgetsInTemplate:!0,constructor:function(){dojo.mixin(this,e)},startup:function(){this._started||(this.inherited(arguments),this.connect(this._setButton,"onClick",function(){this.onChange(this.get("value"))}),this.connect(this._cancelButton,"onClick",function(){dijit.popup.close(this.dialog);this.onCancel()}),dojo.style(this.domNode,"display","block"))},_setValueAttr:function(a,b){this._colorPicker.set("value",a,b)},_getValueAttr:function(){return this._colorPicker.get("value")},setColor:function(a){this._colorPicker.setColor(a,
!1)},onChange:function(){},onCancel:function(){}}),z=g("dojox.editor.plugins.ColorTableCell",i,{constructor:function(){this.closable=!0;this.buttonClass=dijit.form.DropDownButton;var a=new y;dojo.body().appendChild(a.domNode);a.startup();this.dropDown=a.dialog;this.connect(a,"onChange",function(a){this.modTable(null,a);this.editor.focus()});this.connect(a,"onCancel",function(){this.editor.focus()});this.connect(a.dialog,"onOpen",function(){var b=this.getSelectedCells(this.getTableInfo().tbl);if(b&&
0<b.length){for(var b=b[0]==this.lastObject?b[0]:b[b.length-1],c;b&&("transparent"==(c=dojo.style(b,"backgroundColor"))||0==c.indexOf("rgba"));)b=b.parentNode;c=dojo.style(b,"backgroundColor");"transparent"!=c&&0!=c.indexOf("rgba")&&a.setColor(c)}});this.connect(this,"setEditor",function(a){a.onLoadDeferred.addCallback(dojo.hitch(this,function(){this.connect(this.editor.editNode,"onmouseup",function(a){this.lastObject=a.target})}))})},_initButton:function(){this.command=this.commandName;this.label=
this.editor.commands[this.command]=this._makeTitle(this.command);this.inherited(arguments);delete this.command;this.onDisplayChanged(!1)},modTable:function(a,b){this.begEdit();var c=this.getSelectedCells(this.getTableInfo().tbl);dojo.forEach(c,function(a){dojo.style(a,"backgroundColor",b)});this.endEdit()}});g("dojox.editor.plugins.EditorTableDialog",[n,j,k],{baseClass:"EditorTableDialog",templateString:r,postMixInProperties:function(){dojo.mixin(this,e);this.inherited(arguments)},postCreate:function(){dojo.addClass(this.domNode,
this.baseClass);this.inherited(arguments)},onInsert:function(){for(var a=this.selectRow.get("value")||1,b=this.selectCol.get("value")||1,c=this.selectWidth.get("value"),d=this.selectWidthType.get("value"),f=this.selectBorder.get("value"),e=this.selectPad.get("value"),g=this.selectSpace.get("value"),h="tbl_"+(new Date).getTime(),c='<table id="'+h+'"width="'+c+("percent"==d?"%":"")+'" border="'+f+'" cellspacing="'+g+'" cellpadding="'+e+'">\n',d=0;d<a;d++){c+="\t<tr>\n";for(f=0;f<b;f++)c+='\t\t<td width="'+
Math.floor(100/b)+'%">&nbsp;</td>\n';c+="\t</tr>\n"}this.onBuildTable({htmlText:c+"</table><br />",id:h});var i=dojo.connect(this,"onHide",function(){dojo.disconnect(i);var a=this;setTimeout(function(){a.destroyRecursive()},10)});this.hide()},onCancel:function(){var a=dojo.connect(this,"onHide",function(){dojo.disconnect(a);var b=this;setTimeout(function(){b.destroyRecursive()},10)})},onBuildTable:function(){}});var w=g([n,j,k],{baseClass:"EditorTableDialog",table:null,tableAtts:{},templateString:s,
postMixInProperties:function(){dojo.mixin(this,e);this.inherited(arguments)},postCreate:function(){dojo.addClass(this.domNode,this.baseClass);this.inherited(arguments);this._cleanupWidgets=[];var a=new dijit.ColorPalette({});this.connect(a,"onChange",function(b){dijit.popup.close(a);this.setBrdColor(b)});this.connect(a,"onBlur",function(){dijit.popup.close(a)});this.connect(this.borderCol,"click",function(){dijit.popup.open({popup:a,around:this.borderCol});a.focus()});var b=new dijit.ColorPalette({});
this.connect(b,"onChange",function(a){dijit.popup.close(b);this.setBkColor(a)});this.connect(b,"onBlur",function(){dijit.popup.close(b)});this.connect(this.backgroundCol,"click",function(){dijit.popup.open({popup:b,around:this.backgroundCol});b.focus()});this._cleanupWidgets.push(a);this._cleanupWidgets.push(b);this.setBrdColor(dojo.attr(this.table,"bordercolor"));this.setBkColor(dojo.attr(this.table,"bgcolor"));var c=dojo.attr(this.table,"width");if(!c)c=this.table.style.width;var d="pixels";dojo.isString(c)&&
-1<c.indexOf("%")&&(d="percent",c=c.replace(/%/,""));c?(this.selectWidth.set("value",c),this.selectWidthType.set("value",d)):(this.selectWidth.set("value",""),this.selectWidthType.set("value","percent"));this.selectBorder.set("value",dojo.attr(this.table,"border"));this.selectPad.set("value",dojo.attr(this.table,"cellPadding"));this.selectSpace.set("value",dojo.attr(this.table,"cellSpacing"));this.selectAlign.set("value",dojo.attr(this.table,"align"))},setBrdColor:function(a){this.brdColor=a;dojo.style(this.borderCol,
"backgroundColor",a)},setBkColor:function(a){this.bkColor=a;dojo.style(this.backgroundCol,"backgroundColor",a)},onSet:function(){dojo.attr(this.table,"borderColor",this.brdColor);dojo.attr(this.table,"bgColor",this.bkColor);this.selectWidth.get("value")&&(dojo.style(this.table,"width",""),dojo.attr(this.table,"width",this.selectWidth.get("value")+("pixels"==this.selectWidthType.get("value")?"":"%")));dojo.attr(this.table,"border",this.selectBorder.get("value"));dojo.attr(this.table,"cellPadding",
this.selectPad.get("value"));dojo.attr(this.table,"cellSpacing",this.selectSpace.get("value"));dojo.attr(this.table,"align",this.selectAlign.get("value"));var a=dojo.connect(this,"onHide",function(){dojo.disconnect(a);var b=this;setTimeout(function(){b.destroyRecursive()},10)});this.hide()},onCancel:function(){var a=dojo.connect(this,"onHide",function(){dojo.disconnect(a);var b=this;setTimeout(function(){b.destroyRecursive()},10)})},onSetTable:function(){},destroy:function(){this.inherited(arguments);
dojo.forEach(this._cleanupWidgets,function(a){a&&a.destroy&&a.destroy()});delete this._cleanupWidgets}});dojo.subscribe(dijit._scopeName+".Editor.getPlugin",null,function(a){if(!a.plugin&&a.args&&a.args.command){var b=a.args.command.charAt(0).toLowerCase()+a.args.command.substring(1,a.args.command.length);switch(b){case "insertTableRowBefore":case "insertTableRowAfter":case "insertTableColumnBefore":case "insertTableColumnAfter":case "deleteTableRow":case "deleteTableColumn":a.plugin=new i({commandName:b});
break;case "colorTableCell":a.plugin=new z({commandName:b});break;case "modifyTable":a.plugin=new x({commandName:b});break;case "insertTable":a.plugin=new v({commandName:b});break;case "tableContextMenu":a.plugin=new u({commandName:b})}}});return i});