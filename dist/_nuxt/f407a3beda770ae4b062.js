(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{185:function(t,n,e){"use strict";e.r(n);var r={name:"QAForm",methods:{updatePanelist:function(t){this.currentPanelist=t.target.value}},data:function(){return{panelists:["Evan You","Chris Fritz"],currentPanelist:"Evan You"}}},o=e(25),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{attrs:{name:"ask-question",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field"}},[e("input",{attrs:{type:"hidden",name:"form-name",value:"ask-question"}}),t._v(" "),t._l(t.panelists,(function(n,r){return e("label",{key:r},[e("input",{attrs:{type:"radio",name:"panelist"},domProps:{value:n,checked:n===t.currentPanelist},on:{input:function(n){return t.updatePanelist}}}),t._v(" "),e("span",[t._v(t._s(n))])])})),t._v("\n  ...\n  "),e("button",[t._v("Submit")])],2)}),[],!1,null,null,null);n.default=component.exports}}]);