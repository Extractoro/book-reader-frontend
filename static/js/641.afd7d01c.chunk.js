(self.webpackChunkbook_reader_frontend=self.webpackChunkbook_reader_frontend||[]).push([[641],{8641:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return v}});var t=a(885),n=a(2791),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,r){return e+=(r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_"}),"")},s=a(3073);var o=a.p+"static/media/library-sprite.0d49019b43287b7730ec068e45cadd2d.svg",c={"form-container":"LibraryForm_form-container__llgLX",form:"LibraryForm_form__KyVNS","input-1":"LibraryForm_input-1__vE-wx","input-2":"LibraryForm_input-2__JvBtE","input-3":"LibraryForm_input-3__WNKTO","input-4":"LibraryForm_input-4__pCdgJ",button:"LibraryForm_button__V94jO",paragraph:"LibraryForm_paragraph__d6TqO","arrow-back":"LibraryForm_arrow-back__Hks30","inputs-cont":"LibraryForm_inputs-cont__qz8Vk"},l=a(6386),d=a(184),p=function(){var e=(0,l.Jk)(),r=(0,t.Z)(e,1)[0],a=(0,n.useState)(""),p=(0,t.Z)(a,2),h=p[0],u=p[1],f=(0,n.useState)(""),b=(0,t.Z)(f,2),y=b[0],m=b[1],x=(0,n.useState)(""),_=(0,t.Z)(x,2),v=_[0],j=_[1],g=(0,n.useState)(""),w=(0,t.Z)(g,2),N=w[0],k=w[1],L=i(),M=i(),P=i(),S=i(),q=(new Date).getFullYear(),O=function(e){var r=e.target,a=r.name,t=r.value;switch(a){case"book":u(t);break;case"author":m(t);break;case"year":t<=q?j(t):console.log("Notify");break;case"pages":k(t);break;default:return}};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{query:"(max-width: 767px)",render:function(){return(0,d.jsx)("svg",{className:c["arrow-back"],width:"30",height:"25",children:(0,d.jsx)("use",{href:o+"#library-back"})})}}),(0,d.jsxs)("form",{className:c.form,onSubmit:function(e){e.preventDefault(),r({title:h,author:y,year:v,totalPages:N}),u(""),m(""),j(""),k("")},children:[(0,d.jsx)("div",{children:(0,d.jsxs)("label",{htmlFor:L,className:c["input-label"],children:[(0,d.jsx)("p",{className:c.paragraph,children:"\u041d\u0430\u0437\u0432\u0430 \u043a\u043d\u0438\u0433\u0438"}),(0,d.jsx)("input",{className:c["input-1"],onChange:O,type:"text",name:"book",placeholder:"...",value:h,required:!0})]})}),(0,d.jsxs)("div",{className:c["inputs-cont"],children:[(0,d.jsxs)("label",{htmlFor:M,className:c["input-label"],children:[(0,d.jsx)("p",{className:c.paragraph,children:"\u0410\u0432\u0442\u043e\u0440 \u043a\u043d\u0438\u0433\u0438"}),(0,d.jsx)("input",{className:c["input-2"],onChange:O,type:"text",name:"author",placeholder:"...",value:y,required:!0})]}),(0,d.jsxs)("label",{htmlFor:P,className:c["input-label"],children:[(0,d.jsx)("p",{className:c.paragraph,children:"\u0420\u0456\u043a \u0432\u0438\u043f\u0443\u0441\u043a\u0443"}),(0,d.jsx)("input",{className:c["input-3"],onChange:O,type:"number",name:"year",placeholder:"Write year lower than or equal now year",value:v,required:!0})]}),(0,d.jsxs)("label",{htmlFor:S,className:c["input-label"],children:[(0,d.jsx)("p",{className:c.paragraph,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0441\u0442\u043e\u0440\u0456\u043d\u043e\u043a"}),(0,d.jsx)("input",{className:c["input-4"],onChange:O,type:"number",name:"pages",placeholder:"...",value:N,required:!0})]})]}),(0,d.jsx)("button",{type:"submit",className:c.button,children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]})]})},h={backdrop:"ModalLibrary_backdrop__QDvyM",modal:"ModalLibrary_modal__Lf5Ck",wrapper:"ModalLibrary_wrapper__5TFMP","flex-wrapper":"ModalLibrary_flex-wrapper__ai-By","flex-cont":"ModalLibrary_flex-cont__nRgLN",firstStep:"ModalLibrary_firstStep__R5R5H",secondStep:"ModalLibrary_secondStep__rZjxt",stepsTitle:"ModalLibrary_stepsTitle__PmhBV",stepsSuptitle:"ModalLibrary_stepsSuptitle__NaPHD",stepsParagrath:"ModalLibrary_stepsParagrath__LQYzh","modal-button":"ModalLibrary_modal-button__v07pw","arrow-icon":"ModalLibrary_arrow-icon__8j2pb"},u=a(4164),f=document.querySelector("#modal-root");var b=function(){return(0,u.createPortal)((0,d.jsx)("div",{className:h.backdrop,children:(0,d.jsx)("div",{className:h.modal,children:(0,d.jsxs)("div",{className:h.wrapper,children:[(0,d.jsxs)("div",{className:h.firstStep,children:[(0,d.jsx)("h4",{className:h.stepsTitle,children:"\u041a\u0440\u043e\u043a 1."}),(0,d.jsxs)("div",{className:h["flex-wrapper"],children:[(0,d.jsxs)("div",{className:h["flex-cont"],children:[(0,d.jsx)("svg",{className:h["main-icon"],width:"30",height:"25",children:(0,d.jsx)("use",{href:o+"#library-icon"})}),(0,d.jsx)("h5",{className:h.stepsSuptitle,children:"\u0421\u0442\u0432\u043e\u0440\u0456\u0442\u044c \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u0443 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0443"})]}),(0,d.jsx)("div",{className:h["flex-wrapper"],children:(0,d.jsxs)("div",{className:h["flex-cont"],children:[(0,d.jsx)("svg",{className:h["arrow-icon"],width:"30",height:"25",children:(0,d.jsx)("use",{href:o+"#library-arrow"})}),(0,d.jsx)("p",{className:h.stepsParagrath,children:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0434\u043e \u043d\u0435\u0457 \u043a\u043d\u0438\u0436\u043a\u0438, \u044f\u043a\u0456 \u043c\u0430\u0454\u0442\u0435 \u043d\u0430\u043c\u0456\u0440 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u0438."})]})})]})]}),(0,d.jsxs)("div",{className:h.secondStep,children:[(0,d.jsx)("h4",{className:h.stepsTitle,children:"\u041a\u0440\u043e\u043a 2."}),(0,d.jsxs)("div",{className:h["flex-wrapper"],children:[(0,d.jsxs)("div",{className:h["flex-cont"],children:[(0,d.jsx)("svg",{className:h["main-icon"],width:"30",height:"25",children:(0,d.jsx)("use",{href:o+"#library-flag"})}),(0,d.jsx)("h5",{className:h.stepsSuptitle,children:"\u0421\u0444\u043e\u0440\u043c\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u0454 \u043f\u0435\u0440\u0448\u0435 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"})]}),(0,d.jsx)("div",{className:h["flex-wrapper"],children:(0,d.jsxs)("div",{className:h["flex-cont"],children:[(0,d.jsx)("svg",{className:h["arrow-icon"],width:"30",height:"25",children:(0,d.jsx)("use",{href:o+"#library-arrow"})}),(0,d.jsx)("p",{className:h.stepsParagrath,children:"\u0412\u0438\u0437\u043d\u0430\u0447\u0442\u0435 \u0446\u0456\u043b\u044c, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0435\u0440\u0456\u043e\u0434, \u0440\u043e\u0437\u043f\u043e\u0447\u0438\u043d\u0430\u0439\u0442\u0435 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f."})]})})]})]}),(0,d.jsx)("button",{className:h["modal-button"],type:"button",children:"Ok"})]})})}),f)},y=a(2982),m=((0,a(5273).createSlice)({name:"books",initialState:{books:[],isPending:!1,isError:!1},reducers:{},extraReducers:function(e){e.addMatcher(l.Hp.endpoints.fetchAllBooks.matchPending,(function(e,r){e.isPending=!0})).addMatcher(l.Hp.endpoints.fetchAllBooks.matchFulfilled,(function(e,r){var a=r.payload;e.isPending=!1,e.books=a.books})).addMatcher(l.Hp.endpoints.fetchAllBooks.matchRejected,(function(e,r){e.isError=!0})).addMatcher(l.Hp.endpoints.fetchOneBooks.matchPending,(function(e,r){e.isPending=!0})).addMatcher(l.Hp.endpoints.fetchOneBooks.matchFulfilled,(function(e,r){var a=r.payload;e.isPending=!1,e.books=a.books})).addMatcher(l.Hp.endpoints.fetchOneBooks.matchRejected,(function(e,r){e.isError=!0})).addMatcher(l.Hp.endpoints.addBook.matchPending,(function(e,r){e.isPending=!0})).addMatcher(l.Hp.endpoints.addBook.matchFulfilled,(function(e,r){var a=r.payload;e.isPending=!1,e.books=[].concat((0,y.Z)(e.books),[a.books])})).addMatcher(l.Hp.endpoints.addBook.matchRejected,(function(e,r){e.isError=!0})).addMatcher(l.Hp.endpoints.updateBook.matchPending,(function(e,r){e.isPending=!0})).addMatcher(l.Hp.endpoints.updateBook.matchFulfilled,(function(e,r){var a=r.payload;e.isPending=!1,e.books=a.books})).addMatcher(l.Hp.endpoints.updateBook.matchRejected,(function(e,r){e.isError=!0})).addMatcher(l.Hp.endpoints.deleteBook.matchPending,(function(e,r){e.isPending=!0})).addMatcher(l.Hp.endpoints.deleteBook.matchFulfilled,(function(e,r){var a=r.payload;e.isPending=!1,e.books=a.books})).addMatcher(l.Hp.endpoints.deleteBook.matchRejected,(function(e,r){e.isError=!0}))}}).reducer,function(e){return e.books}),x=a(5048),_={"library-wrapper":"Library_library-wrapper__5Nwid","library-flex-wrapper":"Library_library-flex-wrapper__10sdz","library-flex-container":"Library_library-flex-container__4yGrm","library-flex-cont":"Library_library-flex-cont__z6GXC","library-firstStep":"Library_library-firstStep__nYw4J","library-secondStep":"Library_library-secondStep__x6Yfe","library-stepsTitle":"Library_library-stepsTitle__v9enL","library-stepsSuptitle":"Library_library-stepsSuptitle__i6wzB","library-stepsParagrath":"Library_library-stepsParagrath__URrhl","library-modal-button":"Library_library-modal-button__hBrkQ","library-arrow-icon":"Library_library-arrow-icon__Gl42M"},v=function(){var e=(0,x.v9)(m);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{children:[(0,d.jsx)(p,{}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{query:"(min-width: 768px)",render:function(){return(0,d.jsx)("div",{className:_["library-flex-container"],children:(0,d.jsxs)("div",{className:_["library-wrapper"],children:[(0,d.jsxs)("div",{className:_["library-firstStep"],children:[(0,d.jsx)("h4",{className:_["library-stepsTitle"],children:"\u041a\u0440\u043e\u043a 1."}),(0,d.jsxs)("div",{className:_["library-flex-wrapper"],children:[(0,d.jsxs)("div",{className:_["library-flex-cont"],children:[(0,d.jsx)("svg",{className:_["library-main-icon"],width:"22",height:"18",children:(0,d.jsx)("use",{href:o+"#library-icon"})}),(0,d.jsx)("h5",{className:_["library-stepsSuptitle"],children:"\u0421\u0442\u0432\u043e\u0440\u0456\u0442\u044c \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u0443 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0443"})]}),(0,d.jsx)("div",{className:_["library-flex-wrapper"],children:(0,d.jsxs)("div",{className:_["library-flex-cont"],children:[(0,d.jsx)("svg",{className:_["library-arrow-icon"],width:"10",height:"12",children:(0,d.jsx)("use",{href:o+"#library-arrow"})}),(0,d.jsx)("p",{className:_["library-stepsParagrath"],children:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0434\u043e \u043d\u0435\u0457 \u043a\u043d\u0438\u0436\u043a\u0438, \u044f\u043a\u0456 \u043c\u0430\u0454\u0442\u0435 \u043d\u0430\u043c\u0456\u0440 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u0438."})]})})]})]}),(0,d.jsxs)("div",{className:_["library-secondStep"],children:[(0,d.jsx)("h4",{className:_["library-stepsTitle"],children:"\u041a\u0440\u043e\u043a 2."}),(0,d.jsxs)("div",{className:_["library-flex-wrapper"],children:[(0,d.jsxs)("div",{className:_["library-flex-cont"],children:[(0,d.jsx)("svg",{className:_["library-main-icon"],width:"22",height:"18",children:(0,d.jsx)("use",{href:o+"#library-flag"})}),(0,d.jsx)("h5",{className:_["library-stepsSuptitle"],children:"\u0421\u0444\u043e\u0440\u043c\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u0454 \u043f\u0435\u0440\u0448\u0435 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"})]}),(0,d.jsx)("div",{className:_["library-flex-wrapper"],children:(0,d.jsxs)("div",{className:_["library-flex-cont"],children:[(0,d.jsx)("svg",{className:_["library-arrow-icon"],width:"10",height:"12",children:(0,d.jsx)("use",{href:o+"#library-arrow"})}),(0,d.jsx)("p",{className:_["library-stepsParagrath"],children:"\u0412\u0438\u0437\u043d\u0430\u0447\u0442\u0435 \u0446\u0456\u043b\u044c, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0435\u0440\u0456\u043e\u0434, \u0440\u043e\u0437\u043f\u043e\u0447\u0438\u043d\u0430\u0439\u0442\u0435 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f."})]})})]})]})]})})}}),(0,d.jsx)(s.Z,{query:"(max-width: 767px)",render:function(){return(0,d.jsx)(b,{})}})]}),e]})})}},2176:function(e){"use strict";e.exports=function(e,r,a,t,n,i,s,o){if(!e){var c;if(void 0===r)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[a,t,n,i,s,o],d=0;(c=new Error(r.replace(/%s/g,(function(){return l[d++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},5477:function(e,r,a){var t=a(2806),n=function(e){var r="",a=Object.keys(e);return a.forEach((function(n,i){var s=e[n];(function(e){return/[height|width]$/.test(e)})(n=t(n))&&"number"===typeof s&&(s+="px"),r+=!0===s?n:!1===s?"not "+n:"("+n+": "+s+")",i<a.length-1&&(r+=" and ")})),r};e.exports=function(e){var r="";return"string"===typeof e?e:e instanceof Array?(e.forEach((function(a,t){r+=n(a),t<e.length-1&&(r+=", ")})),r):n(e)}},888:function(e,r,a){"use strict";var t=a(9047);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,r,a,n,i,s){if(s!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function r(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:i,resetWarningCache:n};return a.PropTypes=a,a}},2007:function(e,r,a){e.exports=a(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3073:function(e,r,a){"use strict";function t(){return t=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},t.apply(this,arguments)}a.d(r,{Z:function(){return m}});var n=a(9611);var i=a(7326),s=a(4942),o=a(2791),c=a(2007),l=a.n(c),d=a(2176),p=a.n(d),h=a(5477),u=a.n(h),f=function(){function e(e,r,a){var t=this;this.nativeMediaQueryList=e.matchMedia(r),this.active=!0,this.cancellableListener=function(){t.matches=t.nativeMediaQueryList.matches,t.active&&a.apply(void 0,arguments)},this.nativeMediaQueryList.addListener(this.cancellableListener),this.matches=this.nativeMediaQueryList.matches}return e.prototype.cancel=function(){this.active=!1,this.nativeMediaQueryList.removeListener(this.cancellableListener)},e}(),b=l().oneOfType([l().string,l().object,l().arrayOf(l().object.isRequired)]),y=function(e){var r,a;function c(r){var a,n;return a=e.call(this,r)||this,(0,s.Z)((0,i.Z)((0,i.Z)(a)),"queries",[]),(0,s.Z)((0,i.Z)((0,i.Z)(a)),"getMatches",(function(){return function(e){var r=Object.keys(e);if(1===r.length&&"__DEFAULT__"===r[0])return e.__DEFAULT__;return e}(a.queries.reduce((function(e,r){var a,n=r.name,i=r.mqListener;return t({},e,((a={})[n]=i.matches,a))}),{}))})),(0,s.Z)((0,i.Z)((0,i.Z)(a)),"updateMatches",(function(){var e=a.getMatches();a.setState((function(){return{matches:e}}),a.onChange)})),r.query||r.queries||r.query&&r.queries||p()(!1),void 0!==r.defaultMatches&&r.query&&"boolean"!==typeof r.defaultMatches&&p()(!1),void 0!==r.defaultMatches&&r.queries&&"object"!==typeof r.defaultMatches&&p()(!1),"object"!==typeof window?(n=void 0!==r.defaultMatches?r.defaultMatches:!!r.query||Object.keys(a.props.queries).reduce((function(e,r){var a;return t({},e,((a={})[r]=!0,a))}),{}),a.state={matches:n},(0,i.Z)(a)):(a.initialize(),a.state={matches:void 0!==a.props.defaultMatches?a.props.defaultMatches:a.getMatches()},a.onChange(),a)}a=e,(r=c).prototype=Object.create(a.prototype),r.prototype.constructor=r,(0,n.Z)(r,a);var l=c.prototype;return l.initialize=function(){var e=this,r=this.props.targetWindow||window;"function"!==typeof r.matchMedia&&p()(!1);var a=this.props.queries||{__DEFAULT__:this.props.query};this.queries=Object.keys(a).map((function(t){var n=a[t],i="string"!==typeof n?u()(n):n;return{name:t,mqListener:new f(r,i,e.updateMatches)}}))},l.componentDidMount=function(){this.initialize(),void 0!==this.props.defaultMatches&&this.updateMatches()},l.onChange=function(){var e=this.props.onChange;e&&e(this.state.matches)},l.componentWillUnmount=function(){this.queries.forEach((function(e){return e.mqListener.cancel()}))},l.render=function(){var e=this.props,r=e.children,a=e.render,t=this.state.matches,n="object"===typeof t?Object.keys(t).some((function(e){return t[e]})):t;return a?n?a(t):null:r?"function"===typeof r?r(t):(!Array.isArray(r)||r.length)&&n?o.Children.only(r)&&"string"===typeof o.Children.only(r).type?o.Children.only(r):o.cloneElement(o.Children.only(r),{matches:t}):null:null},c}(o.Component);(0,s.Z)(y,"propTypes",{defaultMatches:l().oneOfType([l().bool,l().objectOf(l().bool)]),query:b,queries:l().objectOf(b),render:l().func,children:l().oneOfType([l().node,l().func]),targetWindow:l().object,onChange:l().func});var m=y},2806:function(e){e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}}}]);
//# sourceMappingURL=641.afd7d01c.chunk.js.map