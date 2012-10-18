//>>built
require({cache:{"url:dojox/atom/widget/templates/FeedEntryViewer.html":'<div class="feedEntryViewer">\n    <table border="0" width="100%" class="feedEntryViewerMenuTable" dojoAttachPoint="feedEntryViewerMenu" style="display: none;">\n        <tr width="100%"  dojoAttachPoint="entryCheckBoxDisplayOptions">\n            <td align="right">\n                <span class="feedEntryViewerMenu" dojoAttachPoint="displayOptions" dojoAttachEvent="onclick:_toggleOptions"></span>\n            </td>\n        </tr>\n        <tr class="feedEntryViewerDisplayCheckbox" dojoAttachPoint="entryCheckBoxRow" width="100%" style="display: none;">\n            <td dojoAttachPoint="feedEntryCelltitle">\n                <input type="checkbox" name="title" value="Title" dojoAttachPoint="feedEntryCheckBoxTitle" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelTitle"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellauthors">\n                <input type="checkbox" name="authors" value="Authors" dojoAttachPoint="feedEntryCheckBoxAuthors" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelAuthors"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellcontributors">\n                <input type="checkbox" name="contributors" value="Contributors" dojoAttachPoint="feedEntryCheckBoxContributors" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelContributors"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellid">\n                <input type="checkbox" name="id" value="Id" dojoAttachPoint="feedEntryCheckBoxId" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelId"></label>\n            </td>\n            <td rowspan="2" align="right">\n                <span class="feedEntryViewerMenu" dojoAttachPoint="close" dojoAttachEvent="onclick:_toggleOptions"></span>\n            </td>\n\t\t</tr>\n\t\t<tr class="feedEntryViewerDisplayCheckbox" dojoAttachPoint="entryCheckBoxRow2" width="100%" style="display: none;">\n            <td dojoAttachPoint="feedEntryCellupdated">\n                <input type="checkbox" name="updated" value="Updated" dojoAttachPoint="feedEntryCheckBoxUpdated" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelUpdated"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellsummary">\n                <input type="checkbox" name="summary" value="Summary" dojoAttachPoint="feedEntryCheckBoxSummary" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelSummary"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellcontent">\n                <input type="checkbox" name="content" value="Content" dojoAttachPoint="feedEntryCheckBoxContent" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelContent"></label>\n            </td>\n        </tr>\n    </table>\n    \n    <table class="feedEntryViewerContainer" border="0" width="100%">\n        <tr class="feedEntryViewerTitle" dojoAttachPoint="entryTitleRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryTitleHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryTitleNode">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n\n        <tr class="feedEntryViewerAuthor" dojoAttachPoint="entryAuthorRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryAuthorHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryAuthorNode">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n\n        <tr class="feedEntryViewerContributor" dojoAttachPoint="entryContributorRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryContributorHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryContributorNode" class="feedEntryViewerContributorNames">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n        \n        <tr class="feedEntryViewerId" dojoAttachPoint="entryIdRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryIdHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryIdNode" class="feedEntryViewerIdText">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    \n        <tr class="feedEntryViewerUpdated" dojoAttachPoint="entryUpdatedRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryUpdatedHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryUpdatedNode" class="feedEntryViewerUpdatedText">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    \n        <tr class="feedEntryViewerSummary" dojoAttachPoint="entrySummaryRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entrySummaryHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entrySummaryNode">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    \n        <tr class="feedEntryViewerContent" dojoAttachPoint="entryContentRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryContentHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryContentNode">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    </table>\n</div>\n',
"url:dojox/atom/widget/templates/EntryHeader.html":'<span dojoAttachPoint="entryHeaderNode" class="entryHeaderNode"></span>\n'}});
define("dojo/_base/kernel,dojo/_base/connect,dojo/_base/declare,dojo/_base/fx,dojo/_base/array,dojo/dom-style,dojo/dom-construct,dijit/_Widget,dijit/_Templated,dijit/_Container,dijit/layout/ContentPane,../io/Connection,dojo/text!./templates/FeedEntryViewer.html,dojo/text!./templates/EntryHeader.html,dojo/i18n!./nls/FeedEntryViewer".split(","),function(i,l,m,f,h,d,q,n,o,p,j,k,r,s,e){i.experimental("dojox.atom.widget.FeedEntryViewer");var k=m("dojox.atom.widget.FeedEntryViewer",[n,o,p],{entrySelectionTopic:"",
_validEntryFields:{},displayEntrySections:"",_displayEntrySections:null,enableMenu:!1,enableMenuFade:!1,_optionButtonDisplayed:!0,templateString:r,_entry:null,_feed:null,_editMode:!1,postCreate:function(){if(""!==this.entrySelectionTopic)this._subscriptions=[i.subscribe(this.entrySelectionTopic,this,"_handleEvent")];this.displayOptions.innerHTML=e.displayOptions;this.feedEntryCheckBoxLabelTitle.innerHTML=e.title;this.feedEntryCheckBoxLabelAuthors.innerHTML=e.authors;this.feedEntryCheckBoxLabelContributors.innerHTML=
e.contributors;this.feedEntryCheckBoxLabelId.innerHTML=e.id;this.close.innerHTML=e.close;this.feedEntryCheckBoxLabelUpdated.innerHTML=e.updated;this.feedEntryCheckBoxLabelSummary.innerHTML=e.summary;this.feedEntryCheckBoxLabelContent.innerHTML=e.content},startup:function(){this._displayEntrySections=""===this.displayEntrySections?"title,authors,contributors,summary,content,id,updated".split(","):this.displayEntrySections.split(",");this._setDisplaySectionsCheckboxes();this.enableMenu&&(d.set(this.feedEntryViewerMenu,
"display",""),this.entryCheckBoxRow&&this.entryCheckBoxRow2&&this.enableMenuFade&&(f.fadeOut({node:this.entryCheckBoxRow,duration:250}).play(),f.fadeOut({node:this.entryCheckBoxRow2,duration:250}).play()))},clear:function(){this.destroyDescendants();this._feed=this._entry=null;this.clearNodes()},clearNodes:function(){h.forEach("entryTitleRow,entryAuthorRow,entryContributorRow,entrySummaryRow,entryContentRow,entryIdRow,entryUpdatedRow".split(","),function(a){d.set(this[a],"display","none")},this);
h.forEach("entryTitleNode,entryTitleHeader,entryAuthorHeader,entryContributorHeader,entryContributorNode,entrySummaryHeader,entrySummaryNode,entryContentHeader,entryContentNode,entryIdNode,entryIdHeader,entryUpdatedHeader,entryUpdatedNode".split(","),function(a){for(;this[a].firstChild;)q.destroy(this[a].firstChild)},this)},setEntry:function(a,b){this.clear();this._validEntryFields={};this._entry=a;this._feed=b;null!==a&&(this.entryTitleHeader&&this.setTitleHeader(this.entryTitleHeader,a),this.entryTitleNode&&
this.setTitle(this.entryTitleNode,this._editMode,a),this.entryAuthorHeader&&this.setAuthorsHeader(this.entryAuthorHeader,a),this.entryAuthorNode&&this.setAuthors(this.entryAuthorNode,this._editMode,a),this.entryContributorHeader&&this.setContributorsHeader(this.entryContributorHeader,a),this.entryContributorNode&&this.setContributors(this.entryContributorNode,this._editMode,a),this.entryIdHeader&&this.setIdHeader(this.entryIdHeader,a),this.entryIdNode&&this.setId(this.entryIdNode,this._editMode,a),
this.entryUpdatedHeader&&this.setUpdatedHeader(this.entryUpdatedHeader,a),this.entryUpdatedNode&&this.setUpdated(this.entryUpdatedNode,this._editMode,a),this.entrySummaryHeader&&this.setSummaryHeader(this.entrySummaryHeader,a),this.entrySummaryNode&&this.setSummary(this.entrySummaryNode,this._editMode,a),this.entryContentHeader&&this.setContentHeader(this.entryContentHeader,a),this.entryContentNode&&this.setContent(this.entryContentNode,this._editMode,a));this._displaySections()},setTitleHeader:function(a,
b){if(b.title&&b.title.value&&null!==b.title.value){var c=new g({title:e.title});a.appendChild(c.domNode)}},setTitle:function(a,b,c){c.title&&c.title.value&&null!==c.title.value&&("text"==c.title.type?(c=document.createTextNode(c.title.value),a.appendChild(c)):(b=document.createElement("span"),b=new j({refreshOnShow:!0,executeScripts:!1},b),b.attr("content",c.title.value),a.appendChild(b.domNode)),this.setFieldValidity("title",!0))},setAuthorsHeader:function(a,b){if(b.authors&&0<b.authors.length){var c=
new g({title:e.authors});a.appendChild(c.domNode)}},setAuthors:function(a,b,c){a.innerHTML="";if(c.authors&&0<c.authors.length)for(var d in c.authors)if(c.authors[d].name){b=a;if(c.authors[d].uri){var e=document.createElement("a");b.appendChild(e);e.href=c.authors[d].uri;b=e}e=c.authors[d].name;c.authors[d].email&&(e=e+" ("+c.authors[d].email+")");e=document.createTextNode(e);b.appendChild(e);b=document.createElement("br");a.appendChild(b);this.setFieldValidity("authors",!0)}},setContributorsHeader:function(a,
b){if(b.contributors&&0<b.contributors.length){var c=new g({title:e.contributors});a.appendChild(c.domNode)}},setContributors:function(a,b,c){if(c.contributors&&0<c.contributors.length)for(var d in c.contributors)b=document.createTextNode(c.contributors[d].name),a.appendChild(b),b=document.createElement("br"),a.appendChild(b),this.setFieldValidity("contributors",!0)},setIdHeader:function(a,b){if(b.id&&null!==b.id){var c=new g({title:e.id});a.appendChild(c.domNode)}},setId:function(a,b,c){c.id&&null!==
c.id&&(b=document.createTextNode(c.id),a.appendChild(b),this.setFieldValidity("id",!0))},setUpdatedHeader:function(a,b){if(b.updated&&null!==b.updated){var c=new g({title:e.updated});a.appendChild(c.domNode)}},setUpdated:function(a,b,c){c.updated&&null!==c.updated&&(b=document.createTextNode(c.updated),a.appendChild(b),this.setFieldValidity("updated",!0))},setSummaryHeader:function(a,b){if(b.summary&&b.summary.value&&null!==b.summary.value){var c=new g({title:e.summary});a.appendChild(c.domNode)}},
setSummary:function(a,b,c){c.summary&&c.summary.value&&null!==c.summary.value&&(b=document.createElement("span"),b=new j({refreshOnShow:!0,executeScripts:!1},b),b.attr("content",c.summary.value),a.appendChild(b.domNode),this.setFieldValidity("summary",!0))},setContentHeader:function(a,b){if(b.content&&b.content.value&&null!==b.content.value){var c=new g({title:e.content});a.appendChild(c.domNode)}},setContent:function(a,b,c){c.content&&c.content.value&&null!==c.content.value&&(b=document.createElement("span"),
b=new j({refreshOnShow:!0,executeScripts:!1},b),b.attr("content",c.content.value),a.appendChild(b.domNode),this.setFieldValidity("content",!0))},_displaySections:function(){d.set(this.entryTitleRow,"display","none");d.set(this.entryAuthorRow,"display","none");d.set(this.entryContributorRow,"display","none");d.set(this.entrySummaryRow,"display","none");d.set(this.entryContentRow,"display","none");d.set(this.entryIdRow,"display","none");d.set(this.entryUpdatedRow,"display","none");for(var a in this._displayEntrySections){var b=
this._displayEntrySections[a].toLowerCase();"title"===b&&this.isFieldValid("title")&&d.set(this.entryTitleRow,"display","");"authors"===b&&this.isFieldValid("authors")&&d.set(this.entryAuthorRow,"display","");"contributors"===b&&this.isFieldValid("contributors")&&d.set(this.entryContributorRow,"display","");"summary"===b&&this.isFieldValid("summary")&&d.set(this.entrySummaryRow,"display","");"content"===b&&this.isFieldValid("content")&&d.set(this.entryContentRow,"display","");"id"===b&&this.isFieldValid("id")&&
d.set(this.entryIdRow,"display","");"updated"===b&&this.isFieldValid("updated")&&d.set(this.entryUpdatedRow,"display","")}},setDisplaySections:function(a){null!==a?(this._displayEntrySections=a,this._displaySections()):this._displayEntrySections="title,authors,contributors,summary,content,id,updated".split(",")},_setDisplaySectionsCheckboxes:function(){var a="title,authors,contributors,summary,content,id,updated".split(","),b;for(b in a)-1==h.indexOf(this._displayEntrySections,a[b])?d.set(this["feedEntryCell"+
a[b]],"display","none"):this["feedEntryCheckBox"+a[b].substring(0,1).toUpperCase()+a[b].substring(1)].checked=!0},_readDisplaySections:function(){var a=[];this.feedEntryCheckBoxTitle.checked&&a.push("title");this.feedEntryCheckBoxAuthors.checked&&a.push("authors");this.feedEntryCheckBoxContributors.checked&&a.push("contributors");this.feedEntryCheckBoxSummary.checked&&a.push("summary");this.feedEntryCheckBoxContent.checked&&a.push("content");this.feedEntryCheckBoxId.checked&&a.push("id");this.feedEntryCheckBoxUpdated.checked&&
a.push("updated");this._displayEntrySections=a},_toggleCheckbox:function(a){a.checked=a.checked?!1:!0;this._readDisplaySections();this._displaySections()},_toggleOptions:function(){if(this.enableMenu){var a,b;this._optionButtonDisplayed?(this.enableMenuFade?(a=f.fadeOut({node:this.entryCheckBoxDisplayOptions,duration:250}),l.connect(a,"onEnd",this,function(){d.set(this.entryCheckBoxDisplayOptions,"display","none");d.set(this.entryCheckBoxRow,"display","");d.set(this.entryCheckBoxRow2,"display","");
f.fadeIn({node:this.entryCheckBoxRow,duration:250}).play();f.fadeIn({node:this.entryCheckBoxRow2,duration:250}).play()}),a.play()):(d.set(this.entryCheckBoxDisplayOptions,"display","none"),d.set(this.entryCheckBoxRow,"display",""),d.set(this.entryCheckBoxRow2,"display","")),this._optionButtonDisplayed=!1):(this.enableMenuFade?(a=f.fadeOut({node:this.entryCheckBoxRow,duration:250}),b=f.fadeOut({node:this.entryCheckBoxRow2,duration:250}),l.connect(a,"onEnd",this,function(){d.set(this.entryCheckBoxRow,
"display","none");d.set(this.entryCheckBoxRow2,"display","none");d.set(this.entryCheckBoxDisplayOptions,"display","");f.fadeIn({node:this.entryCheckBoxDisplayOptions,duration:250}).play()}),a.play(),b.play()):(d.set(this.entryCheckBoxRow,"display","none"),d.set(this.entryCheckBoxRow2,"display","none"),d.set(this.entryCheckBoxDisplayOptions,"display","")),this._optionButtonDisplayed=!0)}},_handleEvent:function(a){a.source!=this&&("set"==a.action&&a.entry?this.setEntry(a.entry,a.feed):"delete"==a.action&&
a.entry&&a.entry==this._entry&&this.clear())},setFieldValidity:function(a,b){a&&(a.toLowerCase(),this._validEntryFields[a]=b)},isFieldValid:function(a){return this._validEntryFields[a.toLowerCase()]},getEntry:function(){return this._entry},getFeed:function(){return this._feed},destroy:function(){this.clear();h.forEach(this._subscriptions,i.unsubscribe)}}),g=k.EntryHeader=m("dojox.atom.widget.EntryHeader",[n,o,p],{title:"",templateString:s,postCreate:function(){this.setListHeader()},setListHeader:function(a){this.clear();
if(a)this.title=a;this.entryHeaderNode.appendChild(document.createTextNode(this.title))},clear:function(){this.destroyDescendants();if(this.entryHeaderNode)for(var a=0;a<this.entryHeaderNode.childNodes.length;a++)this.entryHeaderNode.removeChild(this.entryHeaderNode.childNodes[a])},destroy:function(){this.clear()}});return k});