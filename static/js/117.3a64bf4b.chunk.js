(self.webpackChunkbook_reader_frontend=self.webpackChunkbook_reader_frontend||[]).push([[117],{5117:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return x}});var t=a(885),i=a(2791),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,r){return e+=(r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_"}),"")},n=a(3073);var l=a.p+"static/media/library-sprite.0d49019b43287b7730ec068e45cadd2d.svg",c={"form-container":"LibraryForm_form-container__llgLX",form:"LibraryForm_form__KyVNS","input-1":"LibraryForm_input-1__vE-wx","input-2":"LibraryForm_input-2__JvBtE","input-3":"LibraryForm_input-3__WNKTO","input-4":"LibraryForm_input-4__pCdgJ",button:"LibraryForm_button__V94jO",paragraph:"LibraryForm_paragraph__d6TqO","arrow-back":"LibraryForm_arrow-back__Hks30","inputs-cont":"LibraryForm_inputs-cont__qz8Vk"},o=a(6386),p=a(184),h=function(){var e=(0,o.Jk)(),r=(0,t.Z)(e,1)[0],a=(0,i.useState)(""),h=(0,t.Z)(a,2),u=h[0],d=h[1],y=(0,i.useState)(""),f=(0,t.Z)(y,2),b=f[0],m=f[1],x=(0,i.useState)(""),_=(0,t.Z)(x,2),v=_[0],j=_[1],g=(0,i.useState)(""),w=(0,t.Z)(g,2),N=w[0],L=w[1],M=s(),k=s(),S=s(),q=s(),O=(new Date).getFullYear(),T=function(e){var r=e.target,a=r.name,t=r.value;switch(a){case"book":d(t);break;case"author":m(t);break;case"year":t<=O?j(t):console.log("Notify");break;case"pages":L(t);break;default:return}};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n.Z,{query:"(max-width: 767px)",render:function(){return(0,p.jsx)("svg",{className:c["arrow-back"],width:"30",height:"25",children:(0,p.jsx)("use",{href:l+"#library-back"})})}}),(0,p.jsxs)("form",{className:c.form,onSubmit:function(e){e.preventDefault(),r({title:u,author:b,year:v,totalPages:N}),d(""),m(""),j(""),L("")},children:[(0,p.jsx)("div",{children:(0,p.jsxs)("label",{htmlFor:M,className:c["input-label"],children:[(0,p.jsx)("p",{className:c.paragraph,children:"\u041d\u0430\u0437\u0432\u0430 \u043a\u043d\u0438\u0433\u0438"}),(0,p.jsx)("input",{className:c["input-1"],onChange:T,type:"text",name:"book",placeholder:"...",value:u,required:!0})]})}),(0,p.jsxs)("div",{className:c["inputs-cont"],children:[(0,p.jsxs)("label",{htmlFor:k,className:c["input-label"],children:[(0,p.jsx)("p",{className:c.paragraph,children:"\u0410\u0432\u0442\u043e\u0440 \u043a\u043d\u0438\u0433\u0438"}),(0,p.jsx)("input",{className:c["input-2"],onChange:T,type:"text",name:"author",placeholder:"...",value:b,required:!0})]}),(0,p.jsxs)("label",{htmlFor:S,className:c["input-label"],children:[(0,p.jsx)("p",{className:c.paragraph,children:"\u0420\u0456\u043a \u0432\u0438\u043f\u0443\u0441\u043a\u0443"}),(0,p.jsx)("input",{className:c["input-3"],onChange:T,type:"number",name:"year",placeholder:"Write year lower than or equal now year",value:v,required:!0})]}),(0,p.jsxs)("label",{htmlFor:q,className:c["input-label"],children:[(0,p.jsx)("p",{className:c.paragraph,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0441\u0442\u043e\u0440\u0456\u043d\u043e\u043a"}),(0,p.jsx)("input",{className:c["input-4"],onChange:T,type:"number",name:"pages",placeholder:"...",value:N,required:!0})]})]}),(0,p.jsx)("button",{type:"submit",className:c.button,children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]})]})},u={backdrop:"ModalLibrary_backdrop__QDvyM",modal:"ModalLibrary_modal__Lf5Ck",wrapper:"ModalLibrary_wrapper__5TFMP","flex-wrapper":"ModalLibrary_flex-wrapper__ai-By","flex-cont":"ModalLibrary_flex-cont__nRgLN",firstStep:"ModalLibrary_firstStep__R5R5H",secondStep:"ModalLibrary_secondStep__rZjxt",stepsTitle:"ModalLibrary_stepsTitle__PmhBV",stepsSuptitle:"ModalLibrary_stepsSuptitle__NaPHD",stepsParagrath:"ModalLibrary_stepsParagrath__LQYzh","modal-button":"ModalLibrary_modal-button__v07pw","arrow-icon":"ModalLibrary_arrow-icon__8j2pb"},d=a(4164),y=document.querySelector("#modal-root");var f=function(){return(0,d.createPortal)((0,p.jsx)("div",{className:u.backdrop,children:(0,p.jsx)("div",{className:u.modal,children:(0,p.jsxs)("div",{className:u.wrapper,children:[(0,p.jsxs)("div",{className:u.firstStep,children:[(0,p.jsx)("h4",{className:u.stepsTitle,children:"\u041a\u0440\u043e\u043a 1."}),(0,p.jsxs)("div",{className:u["flex-wrapper"],children:[(0,p.jsxs)("div",{className:u["flex-cont"],children:[(0,p.jsx)("svg",{className:u["main-icon"],width:"30",height:"25",children:(0,p.jsx)("use",{href:l+"#library-icon"})}),(0,p.jsx)("h5",{className:u.stepsSuptitle,children:"\u0421\u0442\u0432\u043e\u0440\u0456\u0442\u044c \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u0443 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0443"})]}),(0,p.jsx)("div",{className:u["flex-wrapper"],children:(0,p.jsxs)("div",{className:u["flex-cont"],children:[(0,p.jsx)("svg",{className:u["arrow-icon"],width:"30",height:"25",children:(0,p.jsx)("use",{href:l+"#library-arrow"})}),(0,p.jsx)("p",{className:u.stepsParagrath,children:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0434\u043e \u043d\u0435\u0457 \u043a\u043d\u0438\u0436\u043a\u0438, \u044f\u043a\u0456 \u043c\u0430\u0454\u0442\u0435 \u043d\u0430\u043c\u0456\u0440 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u0438."})]})})]})]}),(0,p.jsxs)("div",{className:u.secondStep,children:[(0,p.jsx)("h4",{className:u.stepsTitle,children:"\u041a\u0440\u043e\u043a 2."}),(0,p.jsxs)("div",{className:u["flex-wrapper"],children:[(0,p.jsxs)("div",{className:u["flex-cont"],children:[(0,p.jsx)("svg",{className:u["main-icon"],width:"30",height:"25",children:(0,p.jsx)("use",{href:l+"#library-flag"})}),(0,p.jsx)("h5",{className:u.stepsSuptitle,children:"\u0421\u0444\u043e\u0440\u043c\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u0454 \u043f\u0435\u0440\u0448\u0435 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"})]}),(0,p.jsx)("div",{className:u["flex-wrapper"],children:(0,p.jsxs)("div",{className:u["flex-cont"],children:[(0,p.jsx)("svg",{className:u["arrow-icon"],width:"30",height:"25",children:(0,p.jsx)("use",{href:l+"#library-arrow"})}),(0,p.jsx)("p",{className:u.stepsParagrath,children:"\u0412\u0438\u0437\u043d\u0430\u0447\u0442\u0435 \u0446\u0456\u043b\u044c, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0435\u0440\u0456\u043e\u0434, \u0440\u043e\u0437\u043f\u043e\u0447\u0438\u043d\u0430\u0439\u0442\u0435 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f."})]})})]})]}),(0,p.jsx)("button",{className:u["modal-button"],type:"button",children:"Ok"})]})})}),y)},b={"library-wrapper":"Library_library-wrapper__5Nwid","library-flex-wrapper":"Library_library-flex-wrapper__10sdz","library-flex-container":"Library_library-flex-container__4yGrm","library-flex-cont":"Library_library-flex-cont__z6GXC","library-firstStep":"Library_library-firstStep__nYw4J","library-secondStep":"Library_library-secondStep__x6Yfe","library-stepsTitle":"Library_library-stepsTitle__v9enL","library-stepsSuptitle":"Library_library-stepsSuptitle__i6wzB","library-stepsParagrath":"Library_library-stepsParagrath__URrhl","library-modal-button":"Library_library-modal-button__hBrkQ","library-arrow-icon":"Library_library-arrow-icon__Gl42M"},m=a(5562),x=function(){var e=(0,o.Lg)(),r=e.data,a=e.isFetching;return(0,p.jsxs)("div",{children:[(0,p.jsxs)(p.Fragment,{children:[!a&&m.Loading.remove(),(0,p.jsx)(h,{}),r&&(0,p.jsx)("ul",{children:r.map((function(e){var r=e.title,a=e._id;return(0,p.jsx)("li",{id:a,children:r},a)}))}),(0,p.jsx)(n.Z,{query:"(min-width: 768px)",render:function(){return(0,p.jsx)("div",{className:b["library-flex-container"],children:(0,p.jsxs)("div",{className:b["library-wrapper"],children:[(0,p.jsxs)("div",{className:b["library-firstStep"],children:[(0,p.jsx)("h4",{className:b["library-stepsTitle"],children:"\u041a\u0440\u043e\u043a 1."}),(0,p.jsxs)("div",{className:b["library-flex-wrapper"],children:[(0,p.jsxs)("div",{className:b["library-flex-cont"],children:[(0,p.jsx)("svg",{className:b["library-main-icon"],width:"22",height:"18",children:(0,p.jsx)("use",{href:l+"#library-icon"})}),(0,p.jsx)("h5",{className:b["library-stepsSuptitle"],children:"\u0421\u0442\u0432\u043e\u0440\u0456\u0442\u044c \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u0443 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0443"})]}),(0,p.jsx)("div",{className:b["library-flex-wrapper"],children:(0,p.jsxs)("div",{className:b["library-flex-cont"],children:[(0,p.jsx)("svg",{className:b["library-arrow-icon"],width:"10",height:"12",children:(0,p.jsx)("use",{href:l+"#library-arrow"})}),(0,p.jsx)("p",{className:b["library-stepsParagrath"],children:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0434\u043e \u043d\u0435\u0457 \u043a\u043d\u0438\u0436\u043a\u0438, \u044f\u043a\u0456 \u043c\u0430\u0454\u0442\u0435 \u043d\u0430\u043c\u0456\u0440 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u0438."})]})})]})]}),(0,p.jsxs)("div",{className:b["library-secondStep"],children:[(0,p.jsx)("h4",{className:b["library-stepsTitle"],children:"\u041a\u0440\u043e\u043a 2."}),(0,p.jsxs)("div",{className:b["library-flex-wrapper"],children:[(0,p.jsxs)("div",{className:b["library-flex-cont"],children:[(0,p.jsx)("svg",{className:b["library-main-icon"],width:"22",height:"18",children:(0,p.jsx)("use",{href:l+"#library-flag"})}),(0,p.jsx)("h5",{className:b["library-stepsSuptitle"],children:"\u0421\u0444\u043e\u0440\u043c\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u0454 \u043f\u0435\u0440\u0448\u0435 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"})]}),(0,p.jsx)("div",{className:b["library-flex-wrapper"],children:(0,p.jsxs)("div",{className:b["library-flex-cont"],children:[(0,p.jsx)("svg",{className:b["library-arrow-icon"],width:"10",height:"12",children:(0,p.jsx)("use",{href:l+"#library-arrow"})}),(0,p.jsx)("p",{className:b["library-stepsParagrath"],children:"\u0412\u0438\u0437\u043d\u0430\u0447\u0442\u0435 \u0446\u0456\u043b\u044c, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0435\u0440\u0456\u043e\u0434, \u0440\u043e\u0437\u043f\u043e\u0447\u0438\u043d\u0430\u0439\u0442\u0435 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f."})]})})]})]})]})})}}),(0,p.jsx)(n.Z,{query:"(max-width: 767px)",render:function(){return(0,p.jsx)(f,{})}})]}),a&&m.Loading.circle()]})}},2176:function(e){"use strict";e.exports=function(e,r,a,t,i,s,n,l){if(!e){var c;if(void 0===r)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var o=[a,t,i,s,n,l],p=0;(c=new Error(r.replace(/%s/g,(function(){return o[p++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},5477:function(e,r,a){var t=a(2806),i=function(e){var r="",a=Object.keys(e);return a.forEach((function(i,s){var n=e[i];(function(e){return/[height|width]$/.test(e)})(i=t(i))&&"number"===typeof n&&(n+="px"),r+=!0===n?i:!1===n?"not "+i:"("+i+": "+n+")",s<a.length-1&&(r+=" and ")})),r};e.exports=function(e){var r="";return"string"===typeof e?e:e instanceof Array?(e.forEach((function(a,t){r+=i(a),t<e.length-1&&(r+=", ")})),r):i(e)}},888:function(e,r,a){"use strict";var t=a(9047);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,r,a,i,s,n){if(n!==t){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function r(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:s,resetWarningCache:i};return a.PropTypes=a,a}},2007:function(e,r,a){e.exports=a(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3073:function(e,r,a){"use strict";function t(){return t=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},t.apply(this,arguments)}a.d(r,{Z:function(){return m}});var i=a(9611);var s=a(7326),n=a(4942),l=a(2791),c=a(2007),o=a.n(c),p=a(2176),h=a.n(p),u=a(5477),d=a.n(u),y=function(){function e(e,r,a){var t=this;this.nativeMediaQueryList=e.matchMedia(r),this.active=!0,this.cancellableListener=function(){t.matches=t.nativeMediaQueryList.matches,t.active&&a.apply(void 0,arguments)},this.nativeMediaQueryList.addListener(this.cancellableListener),this.matches=this.nativeMediaQueryList.matches}return e.prototype.cancel=function(){this.active=!1,this.nativeMediaQueryList.removeListener(this.cancellableListener)},e}(),f=o().oneOfType([o().string,o().object,o().arrayOf(o().object.isRequired)]),b=function(e){var r,a;function c(r){var a,i;return a=e.call(this,r)||this,(0,n.Z)((0,s.Z)((0,s.Z)(a)),"queries",[]),(0,n.Z)((0,s.Z)((0,s.Z)(a)),"getMatches",(function(){return function(e){var r=Object.keys(e);if(1===r.length&&"__DEFAULT__"===r[0])return e.__DEFAULT__;return e}(a.queries.reduce((function(e,r){var a,i=r.name,s=r.mqListener;return t({},e,((a={})[i]=s.matches,a))}),{}))})),(0,n.Z)((0,s.Z)((0,s.Z)(a)),"updateMatches",(function(){var e=a.getMatches();a.setState((function(){return{matches:e}}),a.onChange)})),r.query||r.queries||r.query&&r.queries||h()(!1),void 0!==r.defaultMatches&&r.query&&"boolean"!==typeof r.defaultMatches&&h()(!1),void 0!==r.defaultMatches&&r.queries&&"object"!==typeof r.defaultMatches&&h()(!1),"object"!==typeof window?(i=void 0!==r.defaultMatches?r.defaultMatches:!!r.query||Object.keys(a.props.queries).reduce((function(e,r){var a;return t({},e,((a={})[r]=!0,a))}),{}),a.state={matches:i},(0,s.Z)(a)):(a.initialize(),a.state={matches:void 0!==a.props.defaultMatches?a.props.defaultMatches:a.getMatches()},a.onChange(),a)}a=e,(r=c).prototype=Object.create(a.prototype),r.prototype.constructor=r,(0,i.Z)(r,a);var o=c.prototype;return o.initialize=function(){var e=this,r=this.props.targetWindow||window;"function"!==typeof r.matchMedia&&h()(!1);var a=this.props.queries||{__DEFAULT__:this.props.query};this.queries=Object.keys(a).map((function(t){var i=a[t],s="string"!==typeof i?d()(i):i;return{name:t,mqListener:new y(r,s,e.updateMatches)}}))},o.componentDidMount=function(){this.initialize(),void 0!==this.props.defaultMatches&&this.updateMatches()},o.onChange=function(){var e=this.props.onChange;e&&e(this.state.matches)},o.componentWillUnmount=function(){this.queries.forEach((function(e){return e.mqListener.cancel()}))},o.render=function(){var e=this.props,r=e.children,a=e.render,t=this.state.matches,i="object"===typeof t?Object.keys(t).some((function(e){return t[e]})):t;return a?i?a(t):null:r?"function"===typeof r?r(t):(!Array.isArray(r)||r.length)&&i?l.Children.only(r)&&"string"===typeof l.Children.only(r).type?l.Children.only(r):l.cloneElement(l.Children.only(r),{matches:t}):null:null},c}(l.Component);(0,n.Z)(b,"propTypes",{defaultMatches:o().oneOfType([o().bool,o().objectOf(o().bool)]),query:f,queries:o().objectOf(f),render:o().func,children:o().oneOfType([o().node,o().func]),targetWindow:o().object,onChange:o().func});var m=b},2806:function(e){e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}}}]);
//# sourceMappingURL=117.3a64bf4b.chunk.js.map