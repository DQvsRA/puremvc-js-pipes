//>>built
define(["dojo/_base/lang","../_base","dojo/_base/config","dojo/aspect"],function(d,b,a,f){var g=d.getObject("dojox.analytics.plugins.consoleMessages",!0);this.addData=d.hitch(b,"addData","consoleMessages");b=a.consoleLogFuncs||["error","warn","info","rlog"];console||(console={});for(a=0;a<b.length;a++){var c=b[a],e=d.hitch(this,"addData",c);console[c]?f.after(console,c,e,!0):console[c]=e}return g});