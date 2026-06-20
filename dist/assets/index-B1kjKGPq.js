(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function G_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var bc={exports:{}},zo={},Lc={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function W_(){if(Wp)return pt;Wp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function _(F,se,Ne){this.props=F,this.context=se,this.refs=A,this.updater=Ne||S}_.prototype.isReactComponent={},_.prototype.setState=function(F,se){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,se,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=_.prototype;function I(F,se,Ne){this.props=F,this.context=se,this.refs=A,this.updater=Ne||S}var N=I.prototype=new x;N.constructor=I,M(N,_.prototype),N.isPureReactComponent=!0;var P=Array.isArray,q=Object.prototype.hasOwnProperty,B={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function $(F,se,Ne){var ee,he={},Se=null,_e=null;if(se!=null)for(ee in se.ref!==void 0&&(_e=se.ref),se.key!==void 0&&(Se=""+se.key),se)q.call(se,ee)&&!k.hasOwnProperty(ee)&&(he[ee]=se[ee]);var we=arguments.length-2;if(we===1)he.children=Ne;else if(1<we){for(var De=Array(we),$e=0;$e<we;$e++)De[$e]=arguments[$e+2];he.children=De}if(F&&F.defaultProps)for(ee in we=F.defaultProps,we)he[ee]===void 0&&(he[ee]=we[ee]);return{$$typeof:s,type:F,key:Se,ref:_e,props:he,_owner:B.current}}function L(F,se){return{$$typeof:s,type:F.type,key:se,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function z(F){var se={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ne){return se[Ne]})}var le=/\/+/g;function te(F,se){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):se.toString(36)}function pe(F,se,Ne,ee,he){var Se=typeof F;(Se==="undefined"||Se==="boolean")&&(F=null);var _e=!1;if(F===null)_e=!0;else switch(Se){case"string":case"number":_e=!0;break;case"object":switch(F.$$typeof){case s:case e:_e=!0}}if(_e)return _e=F,he=he(_e),F=ee===""?"."+te(_e,0):ee,P(he)?(Ne="",F!=null&&(Ne=F.replace(le,"$&/")+"/"),pe(he,se,Ne,"",function($e){return $e})):he!=null&&(R(he)&&(he=L(he,Ne+(!he.key||_e&&_e.key===he.key?"":(""+he.key).replace(le,"$&/")+"/")+F)),se.push(he)),1;if(_e=0,ee=ee===""?".":ee+":",P(F))for(var we=0;we<F.length;we++){Se=F[we];var De=ee+te(Se,we);_e+=pe(Se,se,Ne,De,he)}else if(De=y(F),typeof De=="function")for(F=De.call(F),we=0;!(Se=F.next()).done;)Se=Se.value,De=ee+te(Se,we++),_e+=pe(Se,se,Ne,De,he);else if(Se==="object")throw se=String(F),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return _e}function ge(F,se,Ne){if(F==null)return F;var ee=[],he=0;return pe(F,ee,"","",function(Se){return se.call(Ne,Se,he++)}),ee}function ce(F){if(F._status===-1){var se=F._result;se=se(),se.then(function(Ne){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ne)},function(Ne){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ne)}),F._status===-1&&(F._status=0,F._result=se)}if(F._status===1)return F._result.default;throw F._result}var de={current:null},V={transition:null},fe={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:V,ReactCurrentOwner:B};function oe(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ge,forEach:function(F,se,Ne){ge(F,function(){se.apply(this,arguments)},Ne)},count:function(F){var se=0;return ge(F,function(){se++}),se},toArray:function(F){return ge(F,function(se){return se})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},pt.Component=_,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=I,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,pt.act=oe,pt.cloneElement=function(F,se,Ne){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ee=M({},F.props),he=F.key,Se=F.ref,_e=F._owner;if(se!=null){if(se.ref!==void 0&&(Se=se.ref,_e=B.current),se.key!==void 0&&(he=""+se.key),F.type&&F.type.defaultProps)var we=F.type.defaultProps;for(De in se)q.call(se,De)&&!k.hasOwnProperty(De)&&(ee[De]=se[De]===void 0&&we!==void 0?we[De]:se[De])}var De=arguments.length-2;if(De===1)ee.children=Ne;else if(1<De){we=Array(De);for(var $e=0;$e<De;$e++)we[$e]=arguments[$e+2];ee.children=we}return{$$typeof:s,type:F.type,key:he,ref:Se,props:ee,_owner:_e}},pt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},pt.createElement=$,pt.createFactory=function(F){var se=$.bind(null,F);return se.type=F,se},pt.createRef=function(){return{current:null}},pt.forwardRef=function(F){return{$$typeof:f,render:F}},pt.isValidElement=R,pt.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:ce}},pt.memo=function(F,se){return{$$typeof:p,type:F,compare:se===void 0?null:se}},pt.startTransition=function(F){var se=V.transition;V.transition={};try{F()}finally{V.transition=se}},pt.unstable_act=oe,pt.useCallback=function(F,se){return de.current.useCallback(F,se)},pt.useContext=function(F){return de.current.useContext(F)},pt.useDebugValue=function(){},pt.useDeferredValue=function(F){return de.current.useDeferredValue(F)},pt.useEffect=function(F,se){return de.current.useEffect(F,se)},pt.useId=function(){return de.current.useId()},pt.useImperativeHandle=function(F,se,Ne){return de.current.useImperativeHandle(F,se,Ne)},pt.useInsertionEffect=function(F,se){return de.current.useInsertionEffect(F,se)},pt.useLayoutEffect=function(F,se){return de.current.useLayoutEffect(F,se)},pt.useMemo=function(F,se){return de.current.useMemo(F,se)},pt.useReducer=function(F,se,Ne){return de.current.useReducer(F,se,Ne)},pt.useRef=function(F){return de.current.useRef(F)},pt.useState=function(F){return de.current.useState(F)},pt.useSyncExternalStore=function(F,se,Ne){return de.current.useSyncExternalStore(F,se,Ne)},pt.useTransition=function(){return de.current.useTransition()},pt.version="18.3.1",pt}var jp;function od(){return jp||(jp=1,Lc.exports=W_()),Lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function j_(){if(Xp)return zo;Xp=1;var s=od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,v={},y=null,S=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:f,key:y,ref:S,props:v,_owner:o.current}}return zo.Fragment=t,zo.jsx=c,zo.jsxs=c,zo}var qp;function X_(){return qp||(qp=1,bc.exports=j_()),bc.exports}var T=X_(),Ot=od();const q_=G_(Ot);var cl={},Nc={exports:{}},Dn={},Dc={exports:{}},Uc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function Y_(){return Yp||(Yp=1,(function(s){function e(V,fe){var oe=V.length;V.push(fe);e:for(;0<oe;){var F=oe-1>>>1,se=V[F];if(0<o(se,fe))V[F]=fe,V[oe]=se,oe=F;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var fe=V[0],oe=V.pop();if(oe!==fe){V[0]=oe;e:for(var F=0,se=V.length,Ne=se>>>1;F<Ne;){var ee=2*(F+1)-1,he=V[ee],Se=ee+1,_e=V[Se];if(0>o(he,oe))Se<se&&0>o(_e,he)?(V[F]=_e,V[Se]=oe,F=Se):(V[F]=he,V[ee]=oe,F=ee);else if(Se<se&&0>o(_e,oe))V[F]=_e,V[Se]=oe,F=Se;else break e}}return fe}function o(V,fe){var oe=V.sortIndex-fe.sortIndex;return oe!==0?oe:V.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,v=null,y=3,S=!1,M=!1,A=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(V){for(var fe=t(p);fe!==null;){if(fe.callback===null)r(p);else if(fe.startTime<=V)r(p),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=t(p)}}function P(V){if(A=!1,N(V),!M)if(t(h)!==null)M=!0,ce(q);else{var fe=t(p);fe!==null&&de(P,fe.startTime-V)}}function q(V,fe){M=!1,A&&(A=!1,x($),$=-1),S=!0;var oe=y;try{for(N(fe),v=t(h);v!==null&&(!(v.expirationTime>fe)||V&&!z());){var F=v.callback;if(typeof F=="function"){v.callback=null,y=v.priorityLevel;var se=F(v.expirationTime<=fe);fe=s.unstable_now(),typeof se=="function"?v.callback=se:v===t(h)&&r(h),N(fe)}else r(h);v=t(h)}if(v!==null)var Ne=!0;else{var ee=t(p);ee!==null&&de(P,ee.startTime-fe),Ne=!1}return Ne}finally{v=null,y=oe,S=!1}}var B=!1,k=null,$=-1,L=5,R=-1;function z(){return!(s.unstable_now()-R<L)}function le(){if(k!==null){var V=s.unstable_now();R=V;var fe=!0;try{fe=k(!0,V)}finally{fe?te():(B=!1,k=null)}}else B=!1}var te;if(typeof I=="function")te=function(){I(le)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ge=pe.port2;pe.port1.onmessage=le,te=function(){ge.postMessage(null)}}else te=function(){_(le,0)};function ce(V){k=V,B||(B=!0,te())}function de(V,fe){$=_(function(){V(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,ce(q))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(V){switch(y){case 1:case 2:case 3:var fe=3;break;default:fe=y}var oe=y;y=fe;try{return V()}finally{y=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,fe){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var oe=y;y=V;try{return fe()}finally{y=oe}},s.unstable_scheduleCallback=function(V,fe,oe){var F=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?F+oe:F):oe=F,V){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=oe+se,V={id:g++,callback:fe,priorityLevel:V,startTime:oe,expirationTime:se,sortIndex:-1},oe>F?(V.sortIndex=oe,e(p,V),t(h)===null&&V===t(p)&&(A?(x($),$=-1):A=!0,de(P,oe-F))):(V.sortIndex=se,e(h,V),M||S||(M=!0,ce(q))),V},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(V){var fe=y;return function(){var oe=y;y=fe;try{return V.apply(this,arguments)}finally{y=oe}}}})(Uc)),Uc}var $p;function $_(){return $p||($p=1,Dc.exports=Y_()),Dc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Z_(){if(Zp)return Dn;Zp=1;var s=od(),e=$_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function y(n){return h.call(v,n)?!0:h.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,I);_[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,I);_[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,I);_[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,a,u){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,u)&&(a=null),u||d===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),B=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),V=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,F;function se(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ne=!1;function ee(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var u=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){u=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){u=ne}n()}}catch(ne){if(ne&&u&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,U=m.length-1;1<=E&&0<=U&&d[E]!==m[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==m[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==m[U]){var O=`
`+d[E].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=E&&0<=U);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function he(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case B:return"Portal";case L:return"Profiler";case $:return"StrictMode";case te:return"Suspense";case pe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case le:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ge:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(n){var i=De(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Rt(n){n._valueTracker||(n._valueTracker=$e(n))}function ft(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=De(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function bt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function nn(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=we(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function at(n,i){ut(n,i);var a=we(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Mt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Mt(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Xe(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Mt(n,i,a){(i!=="number"||bt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ve=Array.isArray;function D(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function b(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ve(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:we(a)}}function j(n,i){var a=we(i.value),u=we(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function Z(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function dt(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Ke(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=Ke(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Be=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,ae=null,me=null;function Le(n){if(n=To(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=wa(i),Ce(n.stateNode,n.type,i))}}function be(n){ae?me?me.push(n):me=[n]:ae=n}function st(){if(ae){var n=ae,i=me;if(me=ae=null,Le(n),i)for(n=0;n<i.length;n++)Le(i[n])}}function Ut(n,i){return n(i)}function Kt(){}var yt=!1;function Cn(n,i,a){if(yt)return n(i,a);yt=!0;try{return Ut(n,i,a)}finally{yt=!1,(ae!==null||me!==null)&&(Kt(),st())}}function Sn(n,i){var a=n.stateNode;if(a===null)return null;var u=wa(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ns=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){ns=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{ns=!1}function wi(n,i,a,u,d,m,E,U,O){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(a,ne)}catch(xe){this.onError(xe)}}var Ai=!1,wr=null,Ar=!1,Xi=null,ra={onError:function(n){Ai=!0,wr=n}};function is(n,i,a,u,d,m,E,U,O){Ai=!1,wr=null,wi.apply(ra,arguments)}function sa(n,i,a,u,d,m,E,U,O){if(is.apply(this,arguments),Ai){if(Ai){var ne=wr;Ai=!1,wr=null}else throw Error(t(198));Ar||(Ar=!0,Xi=ne)}}function mi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function oa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function aa(n){if(mi(n)!==n)throw Error(t(188))}function Ql(n){var i=n.alternate;if(!i){if(i=mi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return aa(d),n;if(m===u)return aa(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=m;else{for(var E=!1,U=d.child;U;){if(U===a){E=!0,a=d,u=m;break}if(U===u){E=!0,u=d,a=m;break}U=U.sibling}if(!E){for(U=m.child;U;){if(U===a){E=!0,a=m,u=d;break}if(U===u){E=!0,u=m,a=d;break}U=U.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function la(n){return n=Ql(n),n!==null?ua(n):null}function ua(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ua(n);if(i!==null)return i;n=n.sibling}return null}var C=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,ie=e.unstable_shouldYield,re=e.unstable_requestPaint,G=e.unstable_now,Me=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,tt=e.unstable_LowPriority,nt=e.unstable_IdlePriority,qe=null,ot=null;function Et(n){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Ze,kt=Math.log,xt=Math.LN2;function Ze(n){return n>>>=0,n===0?32:31-(kt(n)/xt|0)|0}var Wt=64,_t=4194304;function ln(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ti(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var U=E&~d;U!==0?u=ln(U):(m&=E,m!==0&&(u=ln(m)))}else E=a&~d,E!==0?u=ln(E):m!==0&&(u=ln(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Tt(i),d=1<<a,u|=n[a],i&=~d;return u}function Mn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cr(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-Tt(m),U=1<<E,O=d[E];O===-1?((U&a)===0||(U&u)!==0)&&(d[E]=Mn(U,i)):O<=i&&(n.expiredLanes|=U),m&=~U}}function Lt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function En(){var n=Wt;return Wt<<=1,(Wt&4194240)===0&&(Wt=64),n}function hn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function qt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Tt(i),n[i]=a}function pn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Tt(a),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~m}}function Rr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Tt(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var gt=0;function Md(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ed,eu,Td,wd,Ad,tu=!1,ca=[],qi=null,Yi=null,$i=null,ao=new Map,lo=new Map,Zi=[],fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cd(n,i){switch(n){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":ao.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(i.pointerId)}}function uo(n,i,a,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=To(i),i!==null&&eu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function dv(n,i,a,u,d){switch(i){case"focusin":return qi=uo(qi,n,i,a,u,d),!0;case"dragenter":return Yi=uo(Yi,n,i,a,u,d),!0;case"mouseover":return $i=uo($i,n,i,a,u,d),!0;case"pointerover":var m=d.pointerId;return ao.set(m,uo(ao.get(m)||null,n,i,a,u,d)),!0;case"gotpointercapture":return m=d.pointerId,lo.set(m,uo(lo.get(m)||null,n,i,a,u,d)),!0}return!1}function Rd(n){var i=Pr(n.target);if(i!==null){var a=mi(i);if(a!==null){if(i=a.tag,i===13){if(i=oa(a),i!==null){n.blockedOn=i,Ad(n.priority,function(){Td(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=iu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Pt=u,a.target.dispatchEvent(u),Pt=null}else return i=To(a),i!==null&&eu(i),n.blockedOn=a,!1;i.shift()}return!0}function Pd(n,i,a){fa(n)&&a.delete(i)}function hv(){tu=!1,qi!==null&&fa(qi)&&(qi=null),Yi!==null&&fa(Yi)&&(Yi=null),$i!==null&&fa($i)&&($i=null),ao.forEach(Pd),lo.forEach(Pd)}function co(n,i){n.blockedOn===i&&(n.blockedOn=null,tu||(tu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hv)))}function fo(n){function i(d){return co(d,n)}if(0<ca.length){co(ca[0],n);for(var a=1;a<ca.length;a++){var u=ca[a];u.blockedOn===n&&(u.blockedOn=null)}}for(qi!==null&&co(qi,n),Yi!==null&&co(Yi,n),$i!==null&&co($i,n),ao.forEach(i),lo.forEach(i),a=0;a<Zi.length;a++)u=Zi[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Zi.length&&(a=Zi[0],a.blockedOn===null);)Rd(a),a.blockedOn===null&&Zi.shift()}var rs=P.ReactCurrentBatchConfig,da=!0;function pv(n,i,a,u){var d=gt,m=rs.transition;rs.transition=null;try{gt=1,nu(n,i,a,u)}finally{gt=d,rs.transition=m}}function mv(n,i,a,u){var d=gt,m=rs.transition;rs.transition=null;try{gt=4,nu(n,i,a,u)}finally{gt=d,rs.transition=m}}function nu(n,i,a,u){if(da){var d=iu(n,i,a,u);if(d===null)yu(n,i,u,ha,a),Cd(n,u);else if(dv(d,n,i,a,u))u.stopPropagation();else if(Cd(n,u),i&4&&-1<fv.indexOf(n)){for(;d!==null;){var m=To(d);if(m!==null&&Ed(m),m=iu(n,i,a,u),m===null&&yu(n,i,u,ha,a),m===d)break;d=m}d!==null&&u.stopPropagation()}else yu(n,i,u,null,a)}}var ha=null;function iu(n,i,a,u){if(ha=null,n=X(u),n=Pr(n),n!==null)if(i=mi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=oa(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ha=n,null}function bd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Me()){case Re:return 1;case Ie:return 4;case Oe:case tt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Ki=null,ru=null,pa=null;function Ld(){if(pa)return pa;var n,i=ru,a=i.length,u,d="value"in Ki?Ki.value:Ki.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var E=a-n;for(u=1;u<=E&&i[a-u]===d[m-u];u++);return pa=d.slice(n,1<u?1-u:void 0)}function ma(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ga(){return!0}function Nd(){return!1}function kn(n){function i(a,u,d,m,E){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ga:Nd,this.isPropagationStopped=Nd,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=kn(ss),ho=oe({},ss,{view:0,detail:0}),gv=kn(ho),ou,au,po,va=oe({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==po&&(po&&n.type==="mousemove"?(ou=n.screenX-po.screenX,au=n.screenY-po.screenY):au=ou=0,po=n),ou)},movementY:function(n){return"movementY"in n?n.movementY:au}}),Dd=kn(va),vv=oe({},va,{dataTransfer:0}),_v=kn(vv),xv=oe({},ho,{relatedTarget:0}),lu=kn(xv),yv=oe({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Sv=kn(yv),Mv=oe({},ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ev=kn(Mv),Tv=oe({},ss,{data:0}),Ud=kn(Tv),wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Cv[n])?!!i[n]:!1}function uu(){return Rv}var Pv=oe({},ho,{key:function(n){if(n.key){var i=wv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Av[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(n){return n.type==="keypress"?ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),bv=kn(Pv),Lv=oe({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=kn(Lv),Nv=oe({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),Dv=kn(Nv),Uv=oe({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iv=kn(Uv),Fv=oe({},va,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=kn(Fv),kv=[9,13,27,32],cu=f&&"CompositionEvent"in window,mo=null;f&&"documentMode"in document&&(mo=document.documentMode);var zv=f&&"TextEvent"in window&&!mo,Fd=f&&(!cu||mo&&8<mo&&11>=mo),Od=" ",kd=!1;function zd(n,i){switch(n){case"keyup":return kv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var os=!1;function Bv(n,i){switch(n){case"compositionend":return Bd(i);case"keypress":return i.which!==32?null:(kd=!0,Od);case"textInput":return n=i.data,n===Od&&kd?null:n;default:return null}}function Hv(n,i){if(os)return n==="compositionend"||!cu&&zd(n,i)?(n=Ld(),pa=ru=Ki=null,os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Fd&&i.locale!=="ko"?null:i.data;default:return null}}var Vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Vv[n.type]:i==="textarea"}function Vd(n,i,a,u){be(u),i=Ma(i,"onChange"),0<i.length&&(a=new su("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var go=null,vo=null;function Gv(n){oh(n,0)}function _a(n){var i=fs(n);if(ft(i))return n}function Wv(n,i){if(n==="change")return i}var Gd=!1;if(f){var fu;if(f){var du="oninput"in document;if(!du){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),du=typeof Wd.oninput=="function"}fu=du}else fu=!1;Gd=fu&&(!document.documentMode||9<document.documentMode)}function jd(){go&&(go.detachEvent("onpropertychange",Xd),vo=go=null)}function Xd(n){if(n.propertyName==="value"&&_a(vo)){var i=[];Vd(i,vo,n,X(n)),Cn(Gv,i)}}function jv(n,i,a){n==="focusin"?(jd(),go=i,vo=a,go.attachEvent("onpropertychange",Xd)):n==="focusout"&&jd()}function Xv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _a(vo)}function qv(n,i){if(n==="click")return _a(i)}function Yv(n,i){if(n==="input"||n==="change")return _a(i)}function $v(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:$v;function _o(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!ni(n[d],i[d]))return!1}return!0}function qd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yd(n,i){var a=qd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qd(a)}}function $d(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?$d(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Zd(){for(var n=window,i=bt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=bt(n.document)}return i}function hu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Zv(n){var i=Zd(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&$d(a.ownerDocument.documentElement,a)){if(u!==null&&hu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Yd(a,m);var E=Yd(a,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Kv=f&&"documentMode"in document&&11>=document.documentMode,as=null,pu=null,xo=null,mu=!1;function Kd(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mu||as==null||as!==bt(u)||(u=as,"selectionStart"in u&&hu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xo&&_o(xo,u)||(xo=u,u=Ma(pu,"onSelect"),0<u.length&&(i=new su("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=as)))}function xa(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ls={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},gu={},Jd={};f&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function ya(n){if(gu[n])return gu[n];if(!ls[n])return n;var i=ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Jd)return gu[n]=i[a];return n}var Qd=ya("animationend"),eh=ya("animationiteration"),th=ya("animationstart"),nh=ya("transitionend"),ih=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(n,i){ih.set(n,i),l(i,[n])}for(var vu=0;vu<rh.length;vu++){var _u=rh[vu],Jv=_u.toLowerCase(),Qv=_u[0].toUpperCase()+_u.slice(1);Ji(Jv,"on"+Qv)}Ji(Qd,"onAnimationEnd"),Ji(eh,"onAnimationIteration"),Ji(th,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(nh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e_=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function sh(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,sa(u,i,void 0,n),n.currentTarget=null}function oh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var U=u[E],O=U.instance,ne=U.currentTarget;if(U=U.listener,O!==m&&d.isPropagationStopped())break e;sh(d,U,ne),m=O}else for(E=0;E<u.length;E++){if(U=u[E],O=U.instance,ne=U.currentTarget,U=U.listener,O!==m&&d.isPropagationStopped())break e;sh(d,U,ne),m=O}}}if(Ar)throw n=Xi,Ar=!1,Xi=null,n}function It(n,i){var a=i[Au];a===void 0&&(a=i[Au]=new Set);var u=n+"__bubble";a.has(u)||(ah(i,n,2,!1),a.add(u))}function xu(n,i,a){var u=0;i&&(u|=4),ah(a,n,u,i)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function So(n){if(!n[Sa]){n[Sa]=!0,r.forEach(function(a){a!=="selectionchange"&&(e_.has(a)||xu(a,!1,n),xu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Sa]||(i[Sa]=!0,xu("selectionchange",!1,i))}}function ah(n,i,a,u){switch(bd(i)){case 1:var d=pv;break;case 4:d=mv;break;default:d=nu}a=d.bind(null,i,a,n),d=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function yu(n,i,a,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var U=u.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;E=E.return}for(;U!==null;){if(E=Pr(U),E===null)return;if(O=E.tag,O===5||O===6){u=m=E;continue e}U=U.parentNode}}u=u.return}Cn(function(){var ne=m,xe=X(a),ye=[];e:{var ve=ih.get(n);if(ve!==void 0){var Ue=su,He=n;switch(n){case"keypress":if(ma(a)===0)break e;case"keydown":case"keyup":Ue=bv;break;case"focusin":He="focus",Ue=lu;break;case"focusout":He="blur",Ue=lu;break;case"beforeblur":case"afterblur":Ue=lu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=_v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Dv;break;case Qd:case eh:case th:Ue=Sv;break;case nh:Ue=Iv;break;case"scroll":Ue=gv;break;case"wheel":Ue=Ov;break;case"copy":case"cut":case"paste":Ue=Ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Id}var We=(i&4)!==0,Yt=!We&&n==="scroll",J=We?ve!==null?ve+"Capture":null:ve;We=[];for(var W=ne,Q;W!==null;){Q=W;var Te=Q.stateNode;if(Q.tag===5&&Te!==null&&(Q=Te,J!==null&&(Te=Sn(W,J),Te!=null&&We.push(Mo(W,Te,Q)))),Yt)break;W=W.return}0<We.length&&(ve=new Ue(ve,He,null,a,xe),ye.push({event:ve,listeners:We}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ve&&a!==Pt&&(He=a.relatedTarget||a.fromElement)&&(Pr(He)||He[Ci]))break e;if((Ue||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(He=a.relatedTarget||a.toElement,Ue=ne,He=He?Pr(He):null,He!==null&&(Yt=mi(He),He!==Yt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=ne),Ue!==He)){if(We=Dd,Te="onMouseLeave",J="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(We=Id,Te="onPointerLeave",J="onPointerEnter",W="pointer"),Yt=Ue==null?ve:fs(Ue),Q=He==null?ve:fs(He),ve=new We(Te,W+"leave",Ue,a,xe),ve.target=Yt,ve.relatedTarget=Q,Te=null,Pr(xe)===ne&&(We=new We(J,W+"enter",He,a,xe),We.target=Q,We.relatedTarget=Yt,Te=We),Yt=Te,Ue&&He)t:{for(We=Ue,J=He,W=0,Q=We;Q;Q=us(Q))W++;for(Q=0,Te=J;Te;Te=us(Te))Q++;for(;0<W-Q;)We=us(We),W--;for(;0<Q-W;)J=us(J),Q--;for(;W--;){if(We===J||J!==null&&We===J.alternate)break t;We=us(We),J=us(J)}We=null}else We=null;Ue!==null&&lh(ye,ve,Ue,We,!1),He!==null&&Yt!==null&&lh(ye,Yt,He,We,!0)}}e:{if(ve=ne?fs(ne):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var je=Wv;else if(Hd(ve))if(Gd)je=Yv;else{je=Xv;var Je=jv}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(je=qv);if(je&&(je=je(n,ne))){Vd(ye,je,a,xe);break e}Je&&Je(n,ve,ne),n==="focusout"&&(Je=ve._wrapperState)&&Je.controlled&&ve.type==="number"&&Mt(ve,"number",ve.value)}switch(Je=ne?fs(ne):window,n){case"focusin":(Hd(Je)||Je.contentEditable==="true")&&(as=Je,pu=ne,xo=null);break;case"focusout":xo=pu=as=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Kd(ye,a,xe);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":Kd(ye,a,xe)}var Qe;if(cu)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else os?zd(n,a)&&(it="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(it="onCompositionStart");it&&(Fd&&a.locale!=="ko"&&(os||it!=="onCompositionStart"?it==="onCompositionEnd"&&os&&(Qe=Ld()):(Ki=xe,ru="value"in Ki?Ki.value:Ki.textContent,os=!0)),Je=Ma(ne,it),0<Je.length&&(it=new Ud(it,n,null,a,xe),ye.push({event:it,listeners:Je}),Qe?it.data=Qe:(Qe=Bd(a),Qe!==null&&(it.data=Qe)))),(Qe=zv?Bv(n,a):Hv(n,a))&&(ne=Ma(ne,"onBeforeInput"),0<ne.length&&(xe=new Ud("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:ne}),xe.data=Qe))}oh(ye,i)})}function Mo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ma(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Sn(n,a),m!=null&&u.unshift(Mo(n,m,d)),m=Sn(n,i),m!=null&&u.push(Mo(n,m,d))),n=n.return}return u}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lh(n,i,a,u,d){for(var m=i._reactName,E=[];a!==null&&a!==u;){var U=a,O=U.alternate,ne=U.stateNode;if(O!==null&&O===u)break;U.tag===5&&ne!==null&&(U=ne,d?(O=Sn(a,m),O!=null&&E.unshift(Mo(a,O,U))):d||(O=Sn(a,m),O!=null&&E.push(Mo(a,O,U)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var t_=/\r\n?/g,n_=/\u0000|\uFFFD/g;function uh(n){return(typeof n=="string"?n:""+n).replace(t_,`
`).replace(n_,"")}function Ea(n,i,a){if(i=uh(i),uh(n)!==i&&a)throw Error(t(425))}function Ta(){}var Su=null,Mu=null;function Eu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,i_=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,r_=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(n){return ch.resolve(null).then(n).catch(s_)}:Tu;function s_(n){setTimeout(function(){throw n})}function wu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),fo(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);fo(i)}function Qi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function fh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var cs=Math.random().toString(36).slice(2),gi="__reactFiber$"+cs,Eo="__reactProps$"+cs,Ci="__reactContainer$"+cs,Au="__reactEvents$"+cs,o_="__reactListeners$"+cs,a_="__reactHandles$"+cs;function Pr(n){var i=n[gi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ci]||a[gi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=fh(n);n!==null;){if(a=n[gi])return a;n=fh(n)}return i}n=a,a=n.parentNode}return null}function To(n){return n=n[gi]||n[Ci],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function wa(n){return n[Eo]||null}var Cu=[],ds=-1;function er(n){return{current:n}}function Ft(n){0>ds||(n.current=Cu[ds],Cu[ds]=null,ds--)}function Dt(n,i){ds++,Cu[ds]=n.current,n.current=i}var tr={},mn=er(tr),Rn=er(!1),br=tr;function hs(n,i){var a=n.type.contextTypes;if(!a)return tr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Pn(n){return n=n.childContextTypes,n!=null}function Aa(){Ft(Rn),Ft(mn)}function dh(n,i,a){if(mn.current!==tr)throw Error(t(168));Dt(mn,i),Dt(Rn,a)}function hh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,_e(n)||"Unknown",d));return oe({},a,u)}function Ca(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||tr,br=mn.current,Dt(mn,n),Dt(Rn,Rn.current),!0}function ph(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=hh(n,i,br),u.__reactInternalMemoizedMergedChildContext=n,Ft(Rn),Ft(mn),Dt(mn,n)):Ft(Rn),Dt(Rn,a)}var Ri=null,Ra=!1,Ru=!1;function mh(n){Ri===null?Ri=[n]:Ri.push(n)}function l_(n){Ra=!0,mh(n)}function nr(){if(!Ru&&Ri!==null){Ru=!0;var n=0,i=gt;try{var a=Ri;for(gt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ri=null,Ra=!1}catch(d){throw Ri!==null&&(Ri=Ri.slice(n+1)),C(Re,nr),d}finally{gt=i,Ru=!1}}return null}var ps=[],ms=0,Pa=null,ba=0,jn=[],Xn=0,Lr=null,Pi=1,bi="";function Nr(n,i){ps[ms++]=ba,ps[ms++]=Pa,Pa=n,ba=i}function gh(n,i,a){jn[Xn++]=Pi,jn[Xn++]=bi,jn[Xn++]=Lr,Lr=n;var u=Pi;n=bi;var d=32-Tt(u)-1;u&=~(1<<d),a+=1;var m=32-Tt(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Pi=1<<32-Tt(i)+d|a<<d|u,bi=m+n}else Pi=1<<m|a<<d|u,bi=n}function Pu(n){n.return!==null&&(Nr(n,1),gh(n,1,0))}function bu(n){for(;n===Pa;)Pa=ps[--ms],ps[ms]=null,ba=ps[--ms],ps[ms]=null;for(;n===Lr;)Lr=jn[--Xn],jn[Xn]=null,bi=jn[--Xn],jn[Xn]=null,Pi=jn[--Xn],jn[Xn]=null}var zn=null,Bn=null,zt=!1,ii=null;function vh(n,i){var a=Zn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function _h(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Bn=Qi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Lr!==null?{id:Pi,overflow:bi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Zn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zn=n,Bn=null,!0):!1;default:return!1}}function Lu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nu(n){if(zt){var i=Bn;if(i){var a=i;if(!_h(n,i)){if(Lu(n))throw Error(t(418));i=Qi(a.nextSibling);var u=zn;i&&_h(n,i)?vh(u,a):(n.flags=n.flags&-4097|2,zt=!1,zn=n)}}else{if(Lu(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,zn=n}}}function xh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function La(n){if(n!==zn)return!1;if(!zt)return xh(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Eu(n.type,n.memoizedProps)),i&&(i=Bn)){if(Lu(n))throw yh(),Error(t(418));for(;i;)vh(n,i),i=Qi(i.nextSibling)}if(xh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Bn=Qi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=zn?Qi(n.stateNode.nextSibling):null;return!0}function yh(){for(var n=Bn;n;)n=Qi(n.nextSibling)}function gs(){Bn=zn=null,zt=!1}function Du(n){ii===null?ii=[n]:ii.push(n)}var u_=P.ReactCurrentBatchConfig;function wo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var U=d.refs;E===null?delete U[m]:U[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Na(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Sh(n){var i=n._init;return i(n._payload)}function Mh(n){function i(J,W){if(n){var Q=J.deletions;Q===null?(J.deletions=[W],J.flags|=16):Q.push(W)}}function a(J,W){if(!n)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function u(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function d(J,W){return J=cr(J,W),J.index=0,J.sibling=null,J}function m(J,W,Q){return J.index=Q,n?(Q=J.alternate,Q!==null?(Q=Q.index,Q<W?(J.flags|=2,W):Q):(J.flags|=2,W)):(J.flags|=1048576,W)}function E(J){return n&&J.alternate===null&&(J.flags|=2),J}function U(J,W,Q,Te){return W===null||W.tag!==6?(W=Tc(Q,J.mode,Te),W.return=J,W):(W=d(W,Q),W.return=J,W)}function O(J,W,Q,Te){var je=Q.type;return je===k?xe(J,W,Q.props.children,Te,Q.key):W!==null&&(W.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ce&&Sh(je)===W.type)?(Te=d(W,Q.props),Te.ref=wo(J,W,Q),Te.return=J,Te):(Te=nl(Q.type,Q.key,Q.props,null,J.mode,Te),Te.ref=wo(J,W,Q),Te.return=J,Te)}function ne(J,W,Q,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==Q.containerInfo||W.stateNode.implementation!==Q.implementation?(W=wc(Q,J.mode,Te),W.return=J,W):(W=d(W,Q.children||[]),W.return=J,W)}function xe(J,W,Q,Te,je){return W===null||W.tag!==7?(W=Br(Q,J.mode,Te,je),W.return=J,W):(W=d(W,Q),W.return=J,W)}function ye(J,W,Q){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Tc(""+W,J.mode,Q),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case q:return Q=nl(W.type,W.key,W.props,null,J.mode,Q),Q.ref=wo(J,null,W),Q.return=J,Q;case B:return W=wc(W,J.mode,Q),W.return=J,W;case ce:var Te=W._init;return ye(J,Te(W._payload),Q)}if(Ve(W)||fe(W))return W=Br(W,J.mode,Q,null),W.return=J,W;Na(J,W)}return null}function ve(J,W,Q,Te){var je=W!==null?W.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return je!==null?null:U(J,W,""+Q,Te);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case q:return Q.key===je?O(J,W,Q,Te):null;case B:return Q.key===je?ne(J,W,Q,Te):null;case ce:return je=Q._init,ve(J,W,je(Q._payload),Te)}if(Ve(Q)||fe(Q))return je!==null?null:xe(J,W,Q,Te,null);Na(J,Q)}return null}function Ue(J,W,Q,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return J=J.get(Q)||null,U(W,J,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case q:return J=J.get(Te.key===null?Q:Te.key)||null,O(W,J,Te,je);case B:return J=J.get(Te.key===null?Q:Te.key)||null,ne(W,J,Te,je);case ce:var Je=Te._init;return Ue(J,W,Q,Je(Te._payload),je)}if(Ve(Te)||fe(Te))return J=J.get(Q)||null,xe(W,J,Te,je,null);Na(W,Te)}return null}function He(J,W,Q,Te){for(var je=null,Je=null,Qe=W,it=W=0,on=null;Qe!==null&&it<Q.length;it++){Qe.index>it?(on=Qe,Qe=null):on=Qe.sibling;var wt=ve(J,Qe,Q[it],Te);if(wt===null){Qe===null&&(Qe=on);break}n&&Qe&&wt.alternate===null&&i(J,Qe),W=m(wt,W,it),Je===null?je=wt:Je.sibling=wt,Je=wt,Qe=on}if(it===Q.length)return a(J,Qe),zt&&Nr(J,it),je;if(Qe===null){for(;it<Q.length;it++)Qe=ye(J,Q[it],Te),Qe!==null&&(W=m(Qe,W,it),Je===null?je=Qe:Je.sibling=Qe,Je=Qe);return zt&&Nr(J,it),je}for(Qe=u(J,Qe);it<Q.length;it++)on=Ue(Qe,J,it,Q[it],Te),on!==null&&(n&&on.alternate!==null&&Qe.delete(on.key===null?it:on.key),W=m(on,W,it),Je===null?je=on:Je.sibling=on,Je=on);return n&&Qe.forEach(function(fr){return i(J,fr)}),zt&&Nr(J,it),je}function We(J,W,Q,Te){var je=fe(Q);if(typeof je!="function")throw Error(t(150));if(Q=je.call(Q),Q==null)throw Error(t(151));for(var Je=je=null,Qe=W,it=W=0,on=null,wt=Q.next();Qe!==null&&!wt.done;it++,wt=Q.next()){Qe.index>it?(on=Qe,Qe=null):on=Qe.sibling;var fr=ve(J,Qe,wt.value,Te);if(fr===null){Qe===null&&(Qe=on);break}n&&Qe&&fr.alternate===null&&i(J,Qe),W=m(fr,W,it),Je===null?je=fr:Je.sibling=fr,Je=fr,Qe=on}if(wt.done)return a(J,Qe),zt&&Nr(J,it),je;if(Qe===null){for(;!wt.done;it++,wt=Q.next())wt=ye(J,wt.value,Te),wt!==null&&(W=m(wt,W,it),Je===null?je=wt:Je.sibling=wt,Je=wt);return zt&&Nr(J,it),je}for(Qe=u(J,Qe);!wt.done;it++,wt=Q.next())wt=Ue(Qe,J,it,wt.value,Te),wt!==null&&(n&&wt.alternate!==null&&Qe.delete(wt.key===null?it:wt.key),W=m(wt,W,it),Je===null?je=wt:Je.sibling=wt,Je=wt);return n&&Qe.forEach(function(V_){return i(J,V_)}),zt&&Nr(J,it),je}function Yt(J,W,Q,Te){if(typeof Q=="object"&&Q!==null&&Q.type===k&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case q:e:{for(var je=Q.key,Je=W;Je!==null;){if(Je.key===je){if(je=Q.type,je===k){if(Je.tag===7){a(J,Je.sibling),W=d(Je,Q.props.children),W.return=J,J=W;break e}}else if(Je.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ce&&Sh(je)===Je.type){a(J,Je.sibling),W=d(Je,Q.props),W.ref=wo(J,Je,Q),W.return=J,J=W;break e}a(J,Je);break}else i(J,Je);Je=Je.sibling}Q.type===k?(W=Br(Q.props.children,J.mode,Te,Q.key),W.return=J,J=W):(Te=nl(Q.type,Q.key,Q.props,null,J.mode,Te),Te.ref=wo(J,W,Q),Te.return=J,J=Te)}return E(J);case B:e:{for(Je=Q.key;W!==null;){if(W.key===Je)if(W.tag===4&&W.stateNode.containerInfo===Q.containerInfo&&W.stateNode.implementation===Q.implementation){a(J,W.sibling),W=d(W,Q.children||[]),W.return=J,J=W;break e}else{a(J,W);break}else i(J,W);W=W.sibling}W=wc(Q,J.mode,Te),W.return=J,J=W}return E(J);case ce:return Je=Q._init,Yt(J,W,Je(Q._payload),Te)}if(Ve(Q))return He(J,W,Q,Te);if(fe(Q))return We(J,W,Q,Te);Na(J,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,W!==null&&W.tag===6?(a(J,W.sibling),W=d(W,Q),W.return=J,J=W):(a(J,W),W=Tc(Q,J.mode,Te),W.return=J,J=W),E(J)):a(J,W)}return Yt}var vs=Mh(!0),Eh=Mh(!1),Da=er(null),Ua=null,_s=null,Uu=null;function Iu(){Uu=_s=Ua=null}function Fu(n){var i=Da.current;Ft(Da),n._currentValue=i}function Ou(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function xs(n,i){Ua=n,Uu=_s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(bn=!0),n.firstContext=null)}function qn(n){var i=n._currentValue;if(Uu!==n)if(n={context:n,memoizedValue:i,next:null},_s===null){if(Ua===null)throw Error(t(308));_s=n,Ua.dependencies={lanes:0,firstContext:n}}else _s=_s.next=n;return i}var Dr=null;function ku(n){Dr===null?Dr=[n]:Dr.push(n)}function Th(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,ku(i)):(a.next=d.next,d.next=a),i.interleaved=a,Li(n,u)}function Li(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ir=!1;function zu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ni(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(St&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Li(n,a)}return d=u.interleaved,d===null?(i.next=i,ku(u)):(i.next=d.next,d.next=i),u.interleaved=i,Li(n,a)}function Ia(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Rr(n,a)}}function Ah(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Fa(n,i,a,u){var d=n.updateQueue;ir=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var O=U,ne=O.next;O.next=null,E===null?m=ne:E.next=ne,E=O;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==E&&(U===null?xe.firstBaseUpdate=ne:U.next=ne,xe.lastBaseUpdate=O))}if(m!==null){var ye=d.baseState;E=0,xe=ne=O=null,U=m;do{var ve=U.lane,Ue=U.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Ue,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var He=n,We=U;switch(ve=i,Ue=a,We.tag){case 1:if(He=We.payload,typeof He=="function"){ye=He.call(Ue,ye,ve);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=We.payload,ve=typeof He=="function"?He.call(Ue,ye,ve):He,ve==null)break e;ye=oe({},ye,ve);break e;case 2:ir=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[U]:ve.push(U))}else Ue={eventTime:Ue,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(ne=xe=Ue,O=ye):xe=xe.next=Ue,E|=ve;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(xe===null&&(O=ye),d.baseState=O,d.firstBaseUpdate=ne,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Fr|=E,n.lanes=E,n.memoizedState=ye}}function Ch(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ao={},vi=er(Ao),Co=er(Ao),Ro=er(Ao);function Ur(n){if(n===Ao)throw Error(t(174));return n}function Bu(n,i){switch(Dt(Ro,i),Dt(Co,n),Dt(vi,Ao),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ge(i,n)}Ft(vi),Dt(vi,i)}function ys(){Ft(vi),Ft(Co),Ft(Ro)}function Rh(n){Ur(Ro.current);var i=Ur(vi.current),a=Ge(i,n.type);i!==a&&(Dt(Co,n),Dt(vi,a))}function Hu(n){Co.current===n&&(Ft(vi),Ft(Co))}var Ht=er(0);function Oa(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Vu=[];function Gu(){for(var n=0;n<Vu.length;n++)Vu[n]._workInProgressVersionPrimary=null;Vu.length=0}var ka=P.ReactCurrentDispatcher,Wu=P.ReactCurrentBatchConfig,Ir=0,Vt=null,Jt=null,rn=null,za=!1,Po=!1,bo=0,c_=0;function gn(){throw Error(t(321))}function ju(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ni(n[a],i[a]))return!1;return!0}function Xu(n,i,a,u,d,m){if(Ir=m,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ka.current=n===null||n.memoizedState===null?p_:m_,n=a(u,d),Po){m=0;do{if(Po=!1,bo=0,25<=m)throw Error(t(301));m+=1,rn=Jt=null,i.updateQueue=null,ka.current=g_,n=a(u,d)}while(Po)}if(ka.current=Va,i=Jt!==null&&Jt.next!==null,Ir=0,rn=Jt=Vt=null,za=!1,i)throw Error(t(300));return n}function qu(){var n=bo!==0;return bo=0,n}function _i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Vt.memoizedState=rn=n:rn=rn.next=n,rn}function Yn(){if(Jt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=rn===null?Vt.memoizedState:rn.next;if(i!==null)rn=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},rn===null?Vt.memoizedState=rn=n:rn=rn.next=n}return rn}function Lo(n,i){return typeof i=="function"?i(n):i}function Yu(n){var i=Yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Jt,d=u.baseQueue,m=a.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,u=u.baseState;var U=E=null,O=null,ne=m;do{var xe=ne.lane;if((Ir&xe)===xe)O!==null&&(O=O.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),u=ne.hasEagerState?ne.eagerState:n(u,ne.action);else{var ye={lane:xe,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};O===null?(U=O=ye,E=u):O=O.next=ye,Vt.lanes|=xe,Fr|=xe}ne=ne.next}while(ne!==null&&ne!==m);O===null?E=u:O.next=U,ni(u,i.memoizedState)||(bn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=O,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Vt.lanes|=m,Fr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function $u(n){var i=Yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);ni(m,i.memoizedState)||(bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function Ph(){}function bh(n,i){var a=Vt,u=Yn(),d=i(),m=!ni(u.memoizedState,d);if(m&&(u.memoizedState=d,bn=!0),u=u.queue,Zu(Dh.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,No(9,Nh.bind(null,a,u,d,i),void 0,null),sn===null)throw Error(t(349));(Ir&30)!==0||Lh(a,i,d)}return d}function Lh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Nh(n,i,a,u){i.value=a,i.getSnapshot=u,Uh(i)&&Ih(n)}function Dh(n,i,a){return a(function(){Uh(i)&&Ih(n)})}function Uh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ni(n,a)}catch{return!0}}function Ih(n){var i=Li(n,1);i!==null&&ai(i,n,1,-1)}function Fh(n){var i=_i();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},i.queue=n,n=n.dispatch=h_.bind(null,Vt,n),[i.memoizedState,n]}function No(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Oh(){return Yn().memoizedState}function Ba(n,i,a,u){var d=_i();Vt.flags|=n,d.memoizedState=No(1|i,a,void 0,u===void 0?null:u)}function Ha(n,i,a,u){var d=Yn();u=u===void 0?null:u;var m=void 0;if(Jt!==null){var E=Jt.memoizedState;if(m=E.destroy,u!==null&&ju(u,E.deps)){d.memoizedState=No(i,a,m,u);return}}Vt.flags|=n,d.memoizedState=No(1|i,a,m,u)}function kh(n,i){return Ba(8390656,8,n,i)}function Zu(n,i){return Ha(2048,8,n,i)}function zh(n,i){return Ha(4,2,n,i)}function Bh(n,i){return Ha(4,4,n,i)}function Hh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Vh(n,i,a){return a=a!=null?a.concat([n]):null,Ha(4,4,Hh.bind(null,i,n),a)}function Ku(){}function Gh(n,i){var a=Yn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ju(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Wh(n,i){var a=Yn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ju(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function jh(n,i,a){return(Ir&21)===0?(n.baseState&&(n.baseState=!1,bn=!0),n.memoizedState=a):(ni(a,i)||(a=En(),Vt.lanes|=a,Fr|=a,n.baseState=!0),i)}function f_(n,i){var a=gt;gt=a!==0&&4>a?a:4,n(!0);var u=Wu.transition;Wu.transition={};try{n(!1),i()}finally{gt=a,Wu.transition=u}}function Xh(){return Yn().memoizedState}function d_(n,i,a){var u=lr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},qh(n))Yh(i,a);else if(a=Th(n,i,a,u),a!==null){var d=wn();ai(a,n,u,d),$h(a,i,u)}}function h_(n,i,a){var u=lr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(qh(n))Yh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,U=m(E,a);if(d.hasEagerState=!0,d.eagerState=U,ni(U,E)){var O=i.interleaved;O===null?(d.next=d,ku(i)):(d.next=O.next,O.next=d),i.interleaved=d;return}}catch{}finally{}a=Th(n,i,d,u),a!==null&&(d=wn(),ai(a,n,u,d),$h(a,i,u))}}function qh(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function Yh(n,i){Po=za=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function $h(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Rr(n,a)}}var Va={readContext:qn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},p_={readContext:qn,useCallback:function(n,i){return _i().memoizedState=[n,i===void 0?null:i],n},useContext:qn,useEffect:kh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ba(4194308,4,Hh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ba(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ba(4,2,n,i)},useMemo:function(n,i){var a=_i();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=_i();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=d_.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=_i();return n={current:n},i.memoizedState=n},useState:Fh,useDebugValue:Ku,useDeferredValue:function(n){return _i().memoizedState=n},useTransition:function(){var n=Fh(!1),i=n[0];return n=f_.bind(null,n[1]),_i().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Vt,d=_i();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),sn===null)throw Error(t(349));(Ir&30)!==0||Lh(u,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,kh(Dh.bind(null,u,m,n),[n]),u.flags|=2048,No(9,Nh.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=_i(),i=sn.identifierPrefix;if(zt){var a=bi,u=Pi;a=(u&~(1<<32-Tt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=bo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=c_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},m_={readContext:qn,useCallback:Gh,useContext:qn,useEffect:Zu,useImperativeHandle:Vh,useInsertionEffect:zh,useLayoutEffect:Bh,useMemo:Wh,useReducer:Yu,useRef:Oh,useState:function(){return Yu(Lo)},useDebugValue:Ku,useDeferredValue:function(n){var i=Yn();return jh(i,Jt.memoizedState,n)},useTransition:function(){var n=Yu(Lo)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Ph,useSyncExternalStore:bh,useId:Xh,unstable_isNewReconciler:!1},g_={readContext:qn,useCallback:Gh,useContext:qn,useEffect:Zu,useImperativeHandle:Vh,useInsertionEffect:zh,useLayoutEffect:Bh,useMemo:Wh,useReducer:$u,useRef:Oh,useState:function(){return $u(Lo)},useDebugValue:Ku,useDeferredValue:function(n){var i=Yn();return Jt===null?i.memoizedState=n:jh(i,Jt.memoizedState,n)},useTransition:function(){var n=$u(Lo)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Ph,useSyncExternalStore:bh,useId:Xh,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Ju(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ga={isMounted:function(n){return(n=n._reactInternals)?mi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=wn(),d=lr(n),m=Ni(u,d);m.payload=i,a!=null&&(m.callback=a),i=rr(n,m,d),i!==null&&(ai(i,n,d,u),Ia(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=wn(),d=lr(n),m=Ni(u,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=rr(n,m,d),i!==null&&(ai(i,n,d,u),Ia(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=wn(),u=lr(n),d=Ni(a,u);d.tag=2,i!=null&&(d.callback=i),i=rr(n,d,u),i!==null&&(ai(i,n,u,a),Ia(i,n,u))}};function Zh(n,i,a,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!_o(a,u)||!_o(d,m):!0}function Kh(n,i,a){var u=!1,d=tr,m=i.contextType;return typeof m=="object"&&m!==null?m=qn(m):(d=Pn(i)?br:mn.current,u=i.contextTypes,m=(u=u!=null)?hs(n,d):tr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ga,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Jh(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Ga.enqueueReplaceState(i,i.state,null)}function Qu(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},zu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=qn(m):(m=Pn(i)?br:mn.current,d.context=hs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Ju(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ga.enqueueReplaceState(d,d.state,null),Fa(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,i){try{var a="",u=i;do a+=he(u),u=u.return;while(u);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function ec(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function tc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var v_=typeof WeakMap=="function"?WeakMap:Map;function Qh(n,i,a){a=Ni(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Za||(Za=!0,gc=u),tc(n,i)},a}function ep(n,i,a){a=Ni(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){tc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){tc(n,i),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function tp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new v_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=L_.bind(null,n,i,a),i.then(n,n))}function np(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function ip(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ni(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var __=P.ReactCurrentOwner,bn=!1;function Tn(n,i,a,u){i.child=n===null?Eh(i,null,a,u):vs(i,n.child,a,u)}function rp(n,i,a,u,d){a=a.render;var m=i.ref;return xs(i,d),u=Xu(n,i,a,u,m,d),a=qu(),n!==null&&!bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Di(n,i,d)):(zt&&a&&Pu(i),i.flags|=1,Tn(n,i,u,d),i.child)}function sp(n,i,a,u,d){if(n===null){var m=a.type;return typeof m=="function"&&!Ec(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,op(n,i,m,u,d)):(n=nl(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:_o,a(E,u)&&n.ref===i.ref)return Di(n,i,d)}return i.flags|=1,n=cr(m,u),n.ref=i.ref,n.return=i,i.child=n}function op(n,i,a,u,d){if(n!==null){var m=n.memoizedProps;if(_o(m,u)&&n.ref===i.ref)if(bn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(bn=!0);else return i.lanes=n.lanes,Di(n,i,d)}return nc(n,i,a,u,d)}function ap(n,i,a){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Es,Hn),Hn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Dt(Es,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,Dt(Es,Hn),Hn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,Dt(Es,Hn),Hn|=u;return Tn(n,i,d,a),i.child}function lp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function nc(n,i,a,u,d){var m=Pn(a)?br:mn.current;return m=hs(i,m),xs(i,d),a=Xu(n,i,a,u,m,d),u=qu(),n!==null&&!bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Di(n,i,d)):(zt&&u&&Pu(i),i.flags|=1,Tn(n,i,a,d),i.child)}function up(n,i,a,u,d){if(Pn(a)){var m=!0;Ca(i)}else m=!1;if(xs(i,d),i.stateNode===null)ja(n,i),Kh(i,a,u),Qu(i,a,u,d),u=!0;else if(n===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var O=E.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=qn(ne):(ne=Pn(a)?br:mn.current,ne=hs(i,ne));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==u||O!==ne)&&Jh(i,E,u,ne),ir=!1;var ve=i.memoizedState;E.state=ve,Fa(i,u,E,d),O=i.memoizedState,U!==u||ve!==O||Rn.current||ir?(typeof xe=="function"&&(Ju(i,a,xe,u),O=i.memoizedState),(U=ir||Zh(i,a,U,u,ve,O,ne))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=O),E.props=u,E.state=O,E.context=ne,u=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,wh(n,i),U=i.memoizedProps,ne=i.type===i.elementType?U:ri(i.type,U),E.props=ne,ye=i.pendingProps,ve=E.context,O=a.contextType,typeof O=="object"&&O!==null?O=qn(O):(O=Pn(a)?br:mn.current,O=hs(i,O));var Ue=a.getDerivedStateFromProps;(xe=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==ye||ve!==O)&&Jh(i,E,u,O),ir=!1,ve=i.memoizedState,E.state=ve,Fa(i,u,E,d);var He=i.memoizedState;U!==ye||ve!==He||Rn.current||ir?(typeof Ue=="function"&&(Ju(i,a,Ue,u),He=i.memoizedState),(ne=ir||Zh(i,a,ne,u,ve,He,O)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,He,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,He,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),E.props=u,E.state=He,E.context=O,u=ne):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return ic(n,i,a,u,m,d)}function ic(n,i,a,u,d,m){lp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&ph(i,a,!1),Di(n,i,m);u=i.stateNode,__.current=i;var U=E&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=vs(i,n.child,null,m),i.child=vs(i,null,U,m)):Tn(n,i,U,m),i.memoizedState=u.state,d&&ph(i,a,!0),i.child}function cp(n){var i=n.stateNode;i.pendingContext?dh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&dh(n,i.context,!1),Bu(n,i.containerInfo)}function fp(n,i,a,u,d){return gs(),Du(d),i.flags|=256,Tn(n,i,a,u),i.child}var rc={dehydrated:null,treeContext:null,retryLane:0};function sc(n){return{baseLanes:n,cachePool:null,transitions:null}}function dp(n,i,a){var u=i.pendingProps,d=Ht.current,m=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Dt(Ht,d&1),n===null)return Nu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=il(E,u,0,null),n=Br(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=sc(a),i.memoizedState=rc,n):oc(i,E));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return x_(n,i,E,u,U,d,a);if(m){m=u.fallback,E=i.mode,d=n.child,U=d.sibling;var O={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=O,i.deletions=null):(u=cr(d,O),u.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=cr(U,m):(m=Br(m,E,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?sc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=rc,u}return m=n.child,n=m.sibling,u=cr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function oc(n,i){return i=il({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Wa(n,i,a,u){return u!==null&&Du(u),vs(i,n.child,null,a),n=oc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function x_(n,i,a,u,d,m,E){if(a)return i.flags&256?(i.flags&=-257,u=ec(Error(t(422))),Wa(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=il({mode:"visible",children:u.children},d,0,null),m=Br(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&vs(i,n.child,null,E),i.child.memoizedState=sc(E),i.memoizedState=rc,m);if((i.mode&1)===0)return Wa(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var U=u.dgst;return u=U,m=Error(t(419)),u=ec(m,u,void 0),Wa(n,i,E,u)}if(U=(E&n.childLanes)!==0,bn||U){if(u=sn,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Li(n,d),ai(u,n,d,-1))}return Mc(),u=ec(Error(t(421))),Wa(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=N_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Bn=Qi(d.nextSibling),zn=i,zt=!0,ii=null,n!==null&&(jn[Xn++]=Pi,jn[Xn++]=bi,jn[Xn++]=Lr,Pi=n.id,bi=n.overflow,Lr=i),i=oc(i,u.children),i.flags|=4096,i)}function hp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Ou(n.return,i,a)}function ac(n,i,a,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=d)}function pp(n,i,a){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Tn(n,i,u.children,a),u=Ht.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hp(n,a,i);else if(n.tag===19)hp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Dt(Ht,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Oa(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),ac(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Oa(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}ac(i,!0,a,null,m);break;case"together":ac(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ja(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Di(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Fr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=cr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=cr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function y_(n,i,a){switch(i.tag){case 3:cp(i),gs();break;case 5:Rh(i);break;case 1:Pn(i.type)&&Ca(i);break;case 4:Bu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Dt(Da,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Dt(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?dp(n,i,a):(Dt(Ht,Ht.current&1),n=Di(n,i,a),n!==null?n.sibling:null);Dt(Ht,Ht.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return pp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Dt(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,ap(n,i,a)}return Di(n,i,a)}var mp,lc,gp,vp;mp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},lc=function(){},gp=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Ur(vi.current);var m=null;switch(a){case"input":d=H(n,d),u=H(n,u),m=[];break;case"select":d=oe({},d,{value:void 0}),u=oe({},u,{value:void 0}),m=[];break;case"textarea":d=w(n,d),u=w(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ta)}ht(a,u);var E;a=null;for(ne in d)if(!u.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var U=d[ne];for(E in U)U.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?m||(m=[]):(m=m||[]).push(ne,null));for(ne in u){var O=u[ne];if(U=d!=null?d[ne]:void 0,u.hasOwnProperty(ne)&&O!==U&&(O!=null||U!=null))if(ne==="style")if(U){for(E in U)!U.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in O)O.hasOwnProperty(E)&&U[E]!==O[E]&&(a||(a={}),a[E]=O[E])}else a||(m||(m=[]),m.push(ne,a)),a=O;else ne==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,U=U?U.__html:void 0,O!=null&&U!==O&&(m=m||[]).push(ne,O)):ne==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(ne,""+O):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(O!=null&&ne==="onScroll"&&It("scroll",n),m||U===O||(m=[])):(m=m||[]).push(ne,O))}a&&(m=m||[]).push("style",a);var ne=m;(i.updateQueue=ne)&&(i.flags|=4)}},vp=function(n,i,a,u){a!==u&&(i.flags|=4)};function Do(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function S_(n,i,a){var u=i.pendingProps;switch(bu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Pn(i.type)&&Aa(),vn(i),null;case 3:return u=i.stateNode,ys(),Ft(Rn),Ft(mn),Gu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(La(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(xc(ii),ii=null))),lc(n,i),vn(i),null;case 5:Hu(i);var d=Ur(Ro.current);if(a=i.type,n!==null&&i.stateNode!=null)gp(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=Ur(vi.current),La(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[gi]=i,u[Eo]=m,n=(i.mode&1)!==0,a){case"dialog":It("cancel",u),It("close",u);break;case"iframe":case"object":case"embed":It("load",u);break;case"video":case"audio":for(d=0;d<yo.length;d++)It(yo[d],u);break;case"source":It("error",u);break;case"img":case"image":case"link":It("error",u),It("load",u);break;case"details":It("toggle",u);break;case"input":nn(u,m),It("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},It("invalid",u);break;case"textarea":b(u,m),It("invalid",u)}ht(a,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var U=m[E];E==="children"?typeof U=="string"?u.textContent!==U&&(m.suppressHydrationWarning!==!0&&Ea(u.textContent,U,n),d=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Ea(u.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&It("scroll",u)}switch(a){case"input":Rt(u),Xe(u,m,!0);break;case"textarea":Rt(u),Z(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ta)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(a,{is:u.is}):(n=E.createElement(a),a==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,a),n[gi]=i,n[Eo]=u,mp(n,i,!1,!1),i.stateNode=n;e:{switch(E=rt(a,u),a){case"dialog":It("cancel",n),It("close",n),d=u;break;case"iframe":case"object":case"embed":It("load",n),d=u;break;case"video":case"audio":for(d=0;d<yo.length;d++)It(yo[d],n);d=u;break;case"source":It("error",n),d=u;break;case"img":case"image":case"link":It("error",n),It("load",n),d=u;break;case"details":It("toggle",n),d=u;break;case"input":nn(n,u),d=H(n,u),It("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=oe({},u,{value:void 0}),It("invalid",n);break;case"textarea":b(n,u),d=w(n,u),It("invalid",n);break;default:d=u}ht(a,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var O=U[m];m==="style"?et(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Fe(n,O)):m==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&dt(n,O):typeof O=="number"&&dt(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?O!=null&&m==="onScroll"&&It("scroll",n):O!=null&&N(n,m,O,E))}switch(a){case"input":Rt(n),Xe(n,u,!1);break;case"textarea":Rt(n),Z(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?D(n,!!u.multiple,m,!1):u.defaultValue!=null&&D(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ta)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)vp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ur(Ro.current),Ur(vi.current),La(i)){if(u=i.stateNode,a=i.memoizedProps,u[gi]=i,(m=u.nodeValue!==a)&&(n=zn,n!==null))switch(n.tag){case 3:Ea(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ea(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[gi]=i,i.stateNode=u}return vn(i),null;case 13:if(Ft(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)yh(),gs(),i.flags|=98560,m=!1;else if(m=La(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[gi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),m=!1}else ii!==null&&(xc(ii),ii=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?Qt===0&&(Qt=3):Mc())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return ys(),lc(n,i),n===null&&So(i.stateNode.containerInfo),vn(i),null;case 10:return Fu(i.type._context),vn(i),null;case 17:return Pn(i.type)&&Aa(),vn(i),null;case 19:if(Ft(Ht),m=i.memoizedState,m===null)return vn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Do(m,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Oa(n),E!==null){for(i.flags|=128,Do(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Dt(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&G()>Ts&&(i.flags|=128,u=!0,Do(m,!1),i.lanes=4194304)}else{if(!u)if(n=Oa(E),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Do(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!zt)return vn(i),null}else 2*G()-m.renderingStartTime>Ts&&a!==1073741824&&(i.flags|=128,u=!0,Do(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=G(),i.sibling=null,a=Ht.current,Dt(Ht,u?a&1|2:a&1),i):(vn(i),null);case 22:case 23:return Sc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function M_(n,i){switch(bu(i),i.tag){case 1:return Pn(i.type)&&Aa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ys(),Ft(Rn),Ft(mn),Gu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Hu(i),null;case 13:if(Ft(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(Ht),null;case 4:return ys(),null;case 10:return Fu(i.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var Xa=!1,_n=!1,E_=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Ms(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){jt(n,i,u)}else a.current=null}function uc(n,i,a){try{a()}catch(u){jt(n,i,u)}}var _p=!1;function T_(n,i){if(Su=da,n=Zd(),hu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,U=-1,O=-1,ne=0,xe=0,ye=n,ve=null;t:for(;;){for(var Ue;ye!==a||d!==0&&ye.nodeType!==3||(U=E+d),ye!==m||u!==0&&ye.nodeType!==3||(O=E+u),ye.nodeType===3&&(E+=ye.nodeValue.length),(Ue=ye.firstChild)!==null;)ve=ye,ye=Ue;for(;;){if(ye===n)break t;if(ve===a&&++ne===d&&(U=E),ve===m&&++xe===u&&(O=E),(Ue=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=Ue}a=U===-1||O===-1?null:{start:U,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mu={focusedElem:n,selectionRange:a},da=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var We=He.memoizedProps,Yt=He.memoizedState,J=i.stateNode,W=J.getSnapshotBeforeUpdate(i.elementType===i.type?We:ri(i.type,We),Yt);J.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){jt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return He=_p,_p=!1,He}function Uo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&uc(i,a,m)}d=d.next}while(d!==u)}}function qa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function cc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function xp(n){var i=n.alternate;i!==null&&(n.alternate=null,xp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[gi],delete i[Eo],delete i[Au],delete i[o_],delete i[a_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function yp(n){return n.tag===5||n.tag===3||n.tag===4}function Sp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||yp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function fc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ta));else if(u!==4&&(n=n.child,n!==null))for(fc(n,i,a),n=n.sibling;n!==null;)fc(n,i,a),n=n.sibling}function dc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(dc(n,i,a),n=n.sibling;n!==null;)dc(n,i,a),n=n.sibling}var un=null,si=!1;function sr(n,i,a){for(a=a.child;a!==null;)Mp(n,i,a),a=a.sibling}function Mp(n,i,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(qe,a)}catch{}switch(a.tag){case 5:_n||Ms(a,i);case 6:var u=un,d=si;un=null,sr(n,i,a),un=u,si=d,un!==null&&(si?(n=un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):un.removeChild(a.stateNode));break;case 18:un!==null&&(si?(n=un,a=a.stateNode,n.nodeType===8?wu(n.parentNode,a):n.nodeType===1&&wu(n,a),fo(n)):wu(un,a.stateNode));break;case 4:u=un,d=si,un=a.stateNode.containerInfo,si=!0,sr(n,i,a),un=u,si=d;break;case 0:case 11:case 14:case 15:if(!_n&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&uc(a,i,E),d=d.next}while(d!==u)}sr(n,i,a);break;case 1:if(!_n&&(Ms(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(U){jt(a,i,U)}sr(n,i,a);break;case 21:sr(n,i,a);break;case 22:a.mode&1?(_n=(u=_n)||a.memoizedState!==null,sr(n,i,a),_n=u):sr(n,i,a);break;default:sr(n,i,a)}}function Ep(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new E_),i.forEach(function(u){var d=D_.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function oi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var m=n,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:un=U.stateNode,si=!1;break e;case 3:un=U.stateNode.containerInfo,si=!0;break e;case 4:un=U.stateNode.containerInfo,si=!0;break e}U=U.return}if(un===null)throw Error(t(160));Mp(m,E,d),un=null,si=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(ne){jt(d,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Tp(i,n),i=i.sibling}function Tp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),xi(n),u&4){try{Uo(3,n,n.return),qa(3,n)}catch(We){jt(n,n.return,We)}try{Uo(5,n,n.return)}catch(We){jt(n,n.return,We)}}break;case 1:oi(i,n),xi(n),u&512&&a!==null&&Ms(a,a.return);break;case 5:if(oi(i,n),xi(n),u&512&&a!==null&&Ms(a,a.return),n.flags&32){var d=n.stateNode;try{dt(d,"")}catch(We){jt(n,n.return,We)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,U=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&ut(d,m),rt(U,E);var ne=rt(U,m);for(E=0;E<O.length;E+=2){var xe=O[E],ye=O[E+1];xe==="style"?et(d,ye):xe==="dangerouslySetInnerHTML"?Fe(d,ye):xe==="children"?dt(d,ye):N(d,xe,ye,ne)}switch(U){case"input":at(d,m);break;case"textarea":j(d,m);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ue=m.value;Ue!=null?D(d,!!m.multiple,Ue,!1):ve!==!!m.multiple&&(m.defaultValue!=null?D(d,!!m.multiple,m.defaultValue,!0):D(d,!!m.multiple,m.multiple?[]:"",!1))}d[Eo]=m}catch(We){jt(n,n.return,We)}}break;case 6:if(oi(i,n),xi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(We){jt(n,n.return,We)}}break;case 3:if(oi(i,n),xi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{fo(i.containerInfo)}catch(We){jt(n,n.return,We)}break;case 4:oi(i,n),xi(n);break;case 13:oi(i,n),xi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(mc=G())),u&4&&Ep(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(_n=(ne=_n)||xe,oi(i,n),_n=ne):oi(i,n),xi(n),u&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!xe&&(n.mode&1)!==0)for(ke=n,xe=n.child;xe!==null;){for(ye=ke=xe;ke!==null;){switch(ve=ke,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Uo(4,ve,ve.return);break;case 1:Ms(ve,ve.return);var He=ve.stateNode;if(typeof He.componentWillUnmount=="function"){u=ve,a=ve.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(We){jt(u,a,We)}}break;case 5:Ms(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Cp(ye);continue}}Ue!==null?(Ue.return=ve,ke=Ue):Cp(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{d=ye.stateNode,ne?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=ye.stateNode,O=ye.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,U.style.display=Ke("display",E))}catch(We){jt(n,n.return,We)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=ne?"":ye.memoizedProps}catch(We){jt(n,n.return,We)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:oi(i,n),xi(n),u&4&&Ep(n);break;case 21:break;default:oi(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(yp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(dt(d,""),u.flags&=-33);var m=Sp(n);dc(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,U=Sp(n);fc(n,U,E);break;default:throw Error(t(161))}}catch(O){jt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function w_(n,i,a){ke=n,wp(n)}function wp(n,i,a){for(var u=(n.mode&1)!==0;ke!==null;){var d=ke,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||Xa;if(!E){var U=d.alternate,O=U!==null&&U.memoizedState!==null||_n;U=Xa;var ne=_n;if(Xa=E,(_n=O)&&!ne)for(ke=d;ke!==null;)E=ke,O=E.child,E.tag===22&&E.memoizedState!==null?Rp(d):O!==null?(O.return=E,ke=O):Rp(d);for(;m!==null;)ke=m,wp(m),m=m.sibling;ke=d,Xa=U,_n=ne}Ap(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ke=m):Ap(n)}}function Ap(n){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||qa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ri(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Ch(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ch(i,E,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var xe=ne.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&fo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&cc(i)}catch(ve){jt(i,i.return,ve)}}if(i===n){ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,ke=a;break}ke=i.return}}function Cp(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ke=a;break}ke=i.return}}function Rp(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{qa(4,i)}catch(O){jt(i,a,O)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(O){jt(i,d,O)}}var m=i.return;try{cc(i)}catch(O){jt(i,m,O)}break;case 5:var E=i.return;try{cc(i)}catch(O){jt(i,E,O)}}}catch(O){jt(i,i.return,O)}if(i===n){ke=null;break}var U=i.sibling;if(U!==null){U.return=i.return,ke=U;break}ke=i.return}}var A_=Math.ceil,Ya=P.ReactCurrentDispatcher,hc=P.ReactCurrentOwner,$n=P.ReactCurrentBatchConfig,St=0,sn=null,$t=null,cn=0,Hn=0,Es=er(0),Qt=0,Io=null,Fr=0,$a=0,pc=0,Fo=null,Ln=null,mc=0,Ts=1/0,Ui=null,Za=!1,gc=null,or=null,Ka=!1,ar=null,Ja=0,Oo=0,vc=null,Qa=-1,el=0;function wn(){return(St&6)!==0?G():Qa!==-1?Qa:Qa=G()}function lr(n){return(n.mode&1)===0?1:(St&2)!==0&&cn!==0?cn&-cn:u_.transition!==null?(el===0&&(el=En()),el):(n=gt,n!==0||(n=window.event,n=n===void 0?16:bd(n.type)),n)}function ai(n,i,a,u){if(50<Oo)throw Oo=0,vc=null,Error(t(185));qt(n,a,u),((St&2)===0||n!==sn)&&(n===sn&&((St&2)===0&&($a|=a),Qt===4&&ur(n,cn)),Nn(n,u),a===1&&St===0&&(i.mode&1)===0&&(Ts=G()+500,Ra&&nr()))}function Nn(n,i){var a=n.callbackNode;Cr(n,i);var u=ti(n,n===sn?cn:0);if(u===0)a!==null&&Y(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Y(a),i===1)n.tag===0?l_(bp.bind(null,n)):mh(bp.bind(null,n)),r_(function(){(St&6)===0&&nr()}),a=null;else{switch(Md(u)){case 1:a=Re;break;case 4:a=Ie;break;case 16:a=Oe;break;case 536870912:a=nt;break;default:a=Oe}a=kp(a,Pp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Pp(n,i){if(Qa=-1,el=0,(St&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ws()&&n.callbackNode!==a)return null;var u=ti(n,n===sn?cn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=tl(n,u);else{i=u;var d=St;St|=2;var m=Np();(sn!==n||cn!==i)&&(Ui=null,Ts=G()+500,kr(n,i));do try{P_();break}catch(U){Lp(n,U)}while(!0);Iu(),Ya.current=m,St=d,$t!==null?i=0:(sn=null,cn=0,i=Qt)}if(i!==0){if(i===2&&(d=Lt(n),d!==0&&(u=d,i=_c(n,d))),i===1)throw a=Io,kr(n,0),ur(n,u),Nn(n,G()),a;if(i===6)ur(n,u);else{if(d=n.current.alternate,(u&30)===0&&!C_(d)&&(i=tl(n,u),i===2&&(m=Lt(n),m!==0&&(u=m,i=_c(n,m))),i===1))throw a=Io,kr(n,0),ur(n,u),Nn(n,G()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:zr(n,Ln,Ui);break;case 3:if(ur(n,u),(u&130023424)===u&&(i=mc+500-G(),10<i)){if(ti(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){wn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Tu(zr.bind(null,n,Ln,Ui),i);break}zr(n,Ln,Ui);break;case 4:if(ur(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-Tt(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=G()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*A_(u/1960))-u,10<u){n.timeoutHandle=Tu(zr.bind(null,n,Ln,Ui),u);break}zr(n,Ln,Ui);break;case 5:zr(n,Ln,Ui);break;default:throw Error(t(329))}}}return Nn(n,G()),n.callbackNode===a?Pp.bind(null,n):null}function _c(n,i){var a=Fo;return n.current.memoizedState.isDehydrated&&(kr(n,i).flags|=256),n=tl(n,i),n!==2&&(i=Ln,Ln=a,i!==null&&xc(i)),n}function xc(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function C_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],m=d.getSnapshot;d=d.value;try{if(!ni(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(n,i){for(i&=~pc,i&=~$a,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Tt(i),u=1<<a;n[a]=-1,i&=~u}}function bp(n){if((St&6)!==0)throw Error(t(327));ws();var i=ti(n,0);if((i&1)===0)return Nn(n,G()),null;var a=tl(n,i);if(n.tag!==0&&a===2){var u=Lt(n);u!==0&&(i=u,a=_c(n,u))}if(a===1)throw a=Io,kr(n,0),ur(n,i),Nn(n,G()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,zr(n,Ln,Ui),Nn(n,G()),null}function yc(n,i){var a=St;St|=1;try{return n(i)}finally{St=a,St===0&&(Ts=G()+500,Ra&&nr())}}function Or(n){ar!==null&&ar.tag===0&&(St&6)===0&&ws();var i=St;St|=1;var a=$n.transition,u=gt;try{if($n.transition=null,gt=1,n)return n()}finally{gt=u,$n.transition=a,St=i,(St&6)===0&&nr()}}function Sc(){Hn=Es.current,Ft(Es)}function kr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,i_(a)),$t!==null)for(a=$t.return;a!==null;){var u=a;switch(bu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Aa();break;case 3:ys(),Ft(Rn),Ft(mn),Gu();break;case 5:Hu(u);break;case 4:ys();break;case 13:Ft(Ht);break;case 19:Ft(Ht);break;case 10:Fu(u.type._context);break;case 22:case 23:Sc()}a=a.return}if(sn=n,$t=n=cr(n.current,null),cn=Hn=i,Qt=0,Io=null,pc=$a=Fr=0,Ln=Fo=null,Dr!==null){for(i=0;i<Dr.length;i++)if(a=Dr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,m=a.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}a.pending=u}Dr=null}return n}function Lp(n,i){do{var a=$t;try{if(Iu(),ka.current=Va,za){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}za=!1}if(Ir=0,rn=Jt=Vt=null,Po=!1,bo=0,hc.current=null,a===null||a.return===null){Qt=1,Io=i,$t=null;break}e:{var m=n,E=a.return,U=a,O=i;if(i=cn,U.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ne=O,xe=U,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ue=np(E);if(Ue!==null){Ue.flags&=-257,ip(Ue,E,U,m,i),Ue.mode&1&&tp(m,ne,i),i=Ue,O=ne;var He=i.updateQueue;if(He===null){var We=new Set;We.add(O),i.updateQueue=We}else He.add(O);break e}else{if((i&1)===0){tp(m,ne,i),Mc();break e}O=Error(t(426))}}else if(zt&&U.mode&1){var Yt=np(E);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),ip(Yt,E,U,m,i),Du(Ss(O,U));break e}}m=O=Ss(O,U),Qt!==4&&(Qt=2),Fo===null?Fo=[m]:Fo.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var J=Qh(m,O,i);Ah(m,J);break e;case 1:U=O;var W=m.type,Q=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(or===null||!or.has(Q)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=ep(m,U,i);Ah(m,Te);break e}}m=m.return}while(m!==null)}Up(a)}catch(je){i=je,$t===a&&a!==null&&($t=a=a.return);continue}break}while(!0)}function Np(){var n=Ya.current;return Ya.current=Va,n===null?Va:n}function Mc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),sn===null||(Fr&268435455)===0&&($a&268435455)===0||ur(sn,cn)}function tl(n,i){var a=St;St|=2;var u=Np();(sn!==n||cn!==i)&&(Ui=null,kr(n,i));do try{R_();break}catch(d){Lp(n,d)}while(!0);if(Iu(),St=a,Ya.current=u,$t!==null)throw Error(t(261));return sn=null,cn=0,Qt}function R_(){for(;$t!==null;)Dp($t)}function P_(){for(;$t!==null&&!ie();)Dp($t)}function Dp(n){var i=Op(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?Up(n):$t=i,hc.current=null}function Up(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=S_(a,i,Hn),a!==null){$t=a;return}}else{if(a=M_(a,i),a!==null){a.flags&=32767,$t=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Qt===0&&(Qt=5)}function zr(n,i,a){var u=gt,d=$n.transition;try{$n.transition=null,gt=1,b_(n,i,a,u)}finally{$n.transition=d,gt=u}return null}function b_(n,i,a,u){do ws();while(ar!==null);if((St&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(pn(n,m),n===sn&&($t=sn=null,cn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ka||(Ka=!0,kp(Oe,function(){return ws(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=$n.transition,$n.transition=null;var E=gt;gt=1;var U=St;St|=4,hc.current=null,T_(n,a),Tp(a,n),Zv(Mu),da=!!Su,Mu=Su=null,n.current=a,w_(a),re(),St=U,gt=E,$n.transition=m}else n.current=a;if(Ka&&(Ka=!1,ar=n,Ja=d),m=n.pendingLanes,m===0&&(or=null),Et(a.stateNode),Nn(n,G()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(Za)throw Za=!1,n=gc,gc=null,n;return(Ja&1)!==0&&n.tag!==0&&ws(),m=n.pendingLanes,(m&1)!==0?n===vc?Oo++:(Oo=0,vc=n):Oo=0,nr(),null}function ws(){if(ar!==null){var n=Md(Ja),i=$n.transition,a=gt;try{if($n.transition=null,gt=16>n?16:n,ar===null)var u=!1;else{if(n=ar,ar=null,Ja=0,(St&6)!==0)throw Error(t(331));var d=St;for(St|=4,ke=n.current;ke!==null;){var m=ke,E=m.child;if((ke.flags&16)!==0){var U=m.deletions;if(U!==null){for(var O=0;O<U.length;O++){var ne=U[O];for(ke=ne;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:Uo(8,xe,m)}var ye=xe.child;if(ye!==null)ye.return=xe,ke=ye;else for(;ke!==null;){xe=ke;var ve=xe.sibling,Ue=xe.return;if(xp(xe),xe===ne){ke=null;break}if(ve!==null){ve.return=Ue,ke=ve;break}ke=Ue}}}var He=m.alternate;if(He!==null){var We=He.child;if(We!==null){He.child=null;do{var Yt=We.sibling;We.sibling=null,We=Yt}while(We!==null)}}ke=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,ke=E;else e:for(;ke!==null;){if(m=ke,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Uo(9,m,m.return)}var J=m.sibling;if(J!==null){J.return=m.return,ke=J;break e}ke=m.return}}var W=n.current;for(ke=W;ke!==null;){E=ke;var Q=E.child;if((E.subtreeFlags&2064)!==0&&Q!==null)Q.return=E,ke=Q;else e:for(E=W;ke!==null;){if(U=ke,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:qa(9,U)}}catch(je){jt(U,U.return,je)}if(U===E){ke=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,ke=Te;break e}ke=U.return}}if(St=d,nr(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(qe,n)}catch{}u=!0}return u}finally{gt=a,$n.transition=i}}return!1}function Ip(n,i,a){i=Ss(a,i),i=Qh(n,i,1),n=rr(n,i,1),i=wn(),n!==null&&(qt(n,1,i),Nn(n,i))}function jt(n,i,a){if(n.tag===3)Ip(n,n,a);else for(;i!==null;){if(i.tag===3){Ip(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){n=Ss(a,n),n=ep(i,n,1),i=rr(i,n,1),n=wn(),i!==null&&(qt(i,1,n),Nn(i,n));break}}i=i.return}}function L_(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&a,sn===n&&(cn&a)===a&&(Qt===4||Qt===3&&(cn&130023424)===cn&&500>G()-mc?kr(n,0):pc|=a),Nn(n,i)}function Fp(n,i){i===0&&((n.mode&1)===0?i=1:(i=_t,_t<<=1,(_t&130023424)===0&&(_t=4194304)));var a=wn();n=Li(n,i),n!==null&&(qt(n,i,a),Nn(n,a))}function N_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Fp(n,a)}function D_(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Fp(n,a)}var Op;Op=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Rn.current)bn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return bn=!1,y_(n,i,a);bn=(n.flags&131072)!==0}else bn=!1,zt&&(i.flags&1048576)!==0&&gh(i,ba,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ja(n,i),n=i.pendingProps;var d=hs(i,mn.current);xs(i,a),d=Xu(null,i,u,n,d,a);var m=qu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(u)?(m=!0,Ca(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,zu(i),d.updater=Ga,i.stateNode=d,d._reactInternals=i,Qu(i,u,n,a),i=ic(null,i,u,!0,m,a)):(i.tag=0,zt&&m&&Pu(i),Tn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(ja(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=I_(u),n=ri(u,n),d){case 0:i=nc(null,i,u,n,a);break e;case 1:i=up(null,i,u,n,a);break e;case 11:i=rp(null,i,u,n,a);break e;case 14:i=sp(null,i,u,ri(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),nc(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),up(n,i,u,d,a);case 3:e:{if(cp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,wh(n,i),Fa(i,u,null,a);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ss(Error(t(423)),i),i=fp(n,i,u,a,d);break e}else if(u!==d){d=Ss(Error(t(424)),i),i=fp(n,i,u,a,d);break e}else for(Bn=Qi(i.stateNode.containerInfo.firstChild),zn=i,zt=!0,ii=null,a=Eh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),u===d){i=Di(n,i,a);break e}Tn(n,i,u,a)}i=i.child}return i;case 5:return Rh(i),n===null&&Nu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,Eu(u,d)?E=null:m!==null&&Eu(u,m)&&(i.flags|=32),lp(n,i),Tn(n,i,E,a),i.child;case 6:return n===null&&Nu(i),null;case 13:return dp(n,i,a);case 4:return Bu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=vs(i,null,u,a):Tn(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),rp(n,i,u,d,a);case 7:return Tn(n,i,i.pendingProps,a),i.child;case 8:return Tn(n,i,i.pendingProps.children,a),i.child;case 12:return Tn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,Dt(Da,u._currentValue),u._currentValue=E,m!==null)if(ni(m.value,E)){if(m.children===d.children&&!Rn.current){i=Di(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){E=m.child;for(var O=U.firstContext;O!==null;){if(O.context===u){if(m.tag===1){O=Ni(-1,a&-a),O.tag=2;var ne=m.updateQueue;if(ne!==null){ne=ne.shared;var xe=ne.pending;xe===null?O.next=O:(O.next=xe.next,xe.next=O),ne.pending=O}}m.lanes|=a,O=m.alternate,O!==null&&(O.lanes|=a),Ou(m.return,a,i),U.lanes|=a;break}O=O.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,U=E.alternate,U!==null&&(U.lanes|=a),Ou(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Tn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,xs(i,a),d=qn(d),u=u(d),i.flags|=1,Tn(n,i,u,a),i.child;case 14:return u=i.type,d=ri(u,i.pendingProps),d=ri(u.type,d),sp(n,i,u,d,a);case 15:return op(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),ja(n,i),i.tag=1,Pn(u)?(n=!0,Ca(i)):n=!1,xs(i,a),Kh(i,u,d),Qu(i,u,d,a),ic(null,i,u,!0,n,a);case 19:return pp(n,i,a);case 22:return ap(n,i,a)}throw Error(t(156,i.tag))};function kp(n,i){return C(n,i)}function U_(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,i,a,u){return new U_(n,i,a,u)}function Ec(n){return n=n.prototype,!(!n||!n.isReactComponent)}function I_(n){if(typeof n=="function")return Ec(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===ge)return 14}return 2}function cr(n,i){var a=n.alternate;return a===null?(a=Zn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function nl(n,i,a,u,d,m){var E=2;if(u=n,typeof n=="function")Ec(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case k:return Br(a.children,d,m,i);case $:E=8,d|=8;break;case L:return n=Zn(12,a,i,d|2),n.elementType=L,n.lanes=m,n;case te:return n=Zn(13,a,i,d),n.elementType=te,n.lanes=m,n;case pe:return n=Zn(19,a,i,d),n.elementType=pe,n.lanes=m,n;case de:return il(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case z:E=9;break e;case le:E=11;break e;case ge:E=14;break e;case ce:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Zn(E,a,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Br(n,i,a,u){return n=Zn(7,n,u,i),n.lanes=a,n}function il(n,i,a,u){return n=Zn(22,n,u,i),n.elementType=de,n.lanes=a,n.stateNode={isHidden:!1},n}function Tc(n,i,a){return n=Zn(6,n,null,i),n.lanes=a,n}function wc(n,i,a){return i=Zn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function F_(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ac(n,i,a,u,d,m,E,U,O){return n=new F_(n,i,a,U,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Zn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(m),n}function O_(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function zp(n){if(!n)return tr;n=n._reactInternals;e:{if(mi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Pn(a))return hh(n,a,i)}return i}function Bp(n,i,a,u,d,m,E,U,O){return n=Ac(a,u,!0,n,d,m,E,U,O),n.context=zp(null),a=n.current,u=wn(),d=lr(a),m=Ni(u,d),m.callback=i??null,rr(a,m,d),n.current.lanes=d,qt(n,d,u),Nn(n,u),n}function rl(n,i,a,u){var d=i.current,m=wn(),E=lr(d);return a=zp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ni(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=rr(d,i,E),n!==null&&(ai(n,d,E,m),Ia(n,d,E)),E}function sl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Cc(n,i){Hp(n,i),(n=n.alternate)&&Hp(n,i)}function k_(){return null}var Vp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Rc(n){this._internalRoot=n}ol.prototype.render=Rc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));rl(n,i,null,null)},ol.prototype.unmount=Rc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Or(function(){rl(null,n,null,null)}),i[Ci]=null}};function ol(n){this._internalRoot=n}ol.prototype.unstable_scheduleHydration=function(n){if(n){var i=wd();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Zi.length&&i!==0&&i<Zi[a].priority;a++);Zi.splice(a,0,n),a===0&&Rd(n)}};function Pc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function z_(n,i,a,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ne=sl(E);m.call(ne)}}var E=Bp(i,u,n,0,null,!1,!1,"",Gp);return n._reactRootContainer=E,n[Ci]=E.current,So(n.nodeType===8?n.parentNode:n),Or(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var U=u;u=function(){var ne=sl(O);U.call(ne)}}var O=Ac(n,0,!1,null,null,!1,!1,"",Gp);return n._reactRootContainer=O,n[Ci]=O.current,So(n.nodeType===8?n.parentNode:n),Or(function(){rl(i,O,a,u)}),O}function ll(n,i,a,u,d){var m=a._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var U=d;d=function(){var O=sl(E);U.call(O)}}rl(i,E,n,d)}else E=z_(a,i,n,d,u);return sl(E)}Ed=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=ln(i.pendingLanes);a!==0&&(Rr(i,a|1),Nn(i,G()),(St&6)===0&&(Ts=G()+500,nr()))}break;case 13:Or(function(){var u=Li(n,1);if(u!==null){var d=wn();ai(u,n,1,d)}}),Cc(n,1)}},eu=function(n){if(n.tag===13){var i=Li(n,134217728);if(i!==null){var a=wn();ai(i,n,134217728,a)}Cc(n,134217728)}},Td=function(n){if(n.tag===13){var i=lr(n),a=Li(n,i);if(a!==null){var u=wn();ai(a,n,i,u)}Cc(n,i)}},wd=function(){return gt},Ad=function(n,i){var a=gt;try{return gt=n,i()}finally{gt=a}},Ce=function(n,i,a){switch(i){case"input":if(at(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=wa(u);if(!d)throw Error(t(90));ft(u),at(u,d)}}}break;case"textarea":j(n,a);break;case"select":i=a.value,i!=null&&D(n,!!a.multiple,i,!1)}},Ut=yc,Kt=Or;var B_={usingClientEntryPoint:!1,Events:[To,fs,wa,be,st,yc]},ko={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},H_={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=la(n),n===null?null:n.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||k_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{qe=ul.inject(H_),ot=ul}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B_,Dn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pc(i))throw Error(t(200));return O_(n,i,null,a)},Dn.createRoot=function(n,i){if(!Pc(n))throw Error(t(299));var a=!1,u="",d=Vp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ac(n,1,!1,null,null,a,!1,u,d),n[Ci]=i.current,So(n.nodeType===8?n.parentNode:n),new Rc(i)},Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=la(i),n=n===null?null:n.stateNode,n},Dn.flushSync=function(n){return Or(n)},Dn.hydrate=function(n,i,a){if(!al(i))throw Error(t(200));return ll(null,n,i,!0,a)},Dn.hydrateRoot=function(n,i,a){if(!Pc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,m="",E=Vp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Bp(i,null,n,1,a??null,d,!1,m,E),n[Ci]=i.current,So(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ol(i)},Dn.render=function(n,i,a){if(!al(i))throw Error(t(200));return ll(null,n,i,!1,a)},Dn.unmountComponentAtNode=function(n){if(!al(n))throw Error(t(40));return n._reactRootContainer?(Or(function(){ll(null,null,n,!1,function(){n._reactRootContainer=null,n[Ci]=null})}),!0):!1},Dn.unstable_batchedUpdates=yc,Dn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!al(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ll(n,i,a,!1,u)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Kp;function K_(){if(Kp)return Nc.exports;Kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Nc.exports=Z_(),Nc.exports}var Jp;function J_(){if(Jp)return cl;Jp=1;var s=K_();return cl.createRoot=s.createRoot,cl.hydrateRoot=s.hydrateRoot,cl}var Q_=J_();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var t0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=Ot.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:c,...f},h)=>Ot.createElement("svg",{ref:h,...t0,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:fg("lucide",o),...f},[...c.map(([p,g])=>Ot.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=(s,e)=>{const t=Ot.forwardRef(({className:r,...o},l)=>Ot.createElement(n0,{ref:l,iconNode:e,className:fg(`lucide-${e0(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=Wn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=Wn("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=Wn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=Wn("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=Wn("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=Wn("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=Wn("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=Wn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=Wn("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=Wn("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=Wn("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=Wn("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=Wn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ld="171",c0=0,em=1,f0=2,gg=1,d0=2,Bi=3,Mr=0,Fn=1,fi=2,yr=0,Ws=1,tm=2,nm=3,im=4,h0=5,$r=100,p0=101,m0=102,g0=103,v0=104,_0=200,x0=201,y0=202,S0=203,gf=204,vf=205,M0=206,E0=207,T0=208,w0=209,A0=210,C0=211,R0=212,P0=213,b0=214,_f=0,xf=1,yf=2,Ys=3,Sf=4,Mf=5,Ef=6,Tf=7,vg=0,L0=1,N0=2,Sr=0,D0=1,U0=2,I0=3,F0=4,O0=5,k0=6,z0=7,_g=300,$s=301,Zs=302,wf=303,Af=304,Yl=306,Cf=1e3,Kr=1001,Rf=1002,pi=1003,B0=1004,fl=1005,Si=1006,Ic=1007,Jr=1008,Wi=1009,xg=1010,yg=1011,Ko=1012,ud=1013,Qr=1014,Hi=1015,ta=1016,cd=1017,fd=1018,Ks=1020,Sg=35902,Mg=1021,Eg=1022,hi=1023,Tg=1024,wg=1025,js=1026,Js=1027,Ag=1028,dd=1029,Cg=1030,hd=1031,pd=1033,Ol=33776,kl=33777,zl=33778,Bl=33779,Pf=35840,bf=35841,Lf=35842,Nf=35843,Df=36196,Uf=37492,If=37496,Ff=37808,Of=37809,kf=37810,zf=37811,Bf=37812,Hf=37813,Vf=37814,Gf=37815,Wf=37816,jf=37817,Xf=37818,qf=37819,Yf=37820,$f=37821,Hl=36492,Zf=36494,Kf=36495,Rg=36283,Jf=36284,Qf=36285,ed=36286,H0=3200,V0=3201,Pg=0,G0=1,_r="",Jn="srgb",Qs="srgb-linear",Gl="linear",Nt="srgb",As=7680,rm=519,W0=512,j0=513,X0=514,bg=515,q0=516,Y0=517,$0=518,Z0=519,sm=35044,om="300 es",Vi=2e3,Wl=2001;class no{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fc=Math.PI/180,td=180/Math.PI;function io(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function K0(s,e){return(s%e+e)%e}function Oc(s,e,t){return(1-t)*s+t*e}function Bo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,o,l,c,f,h,p){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p)}set(e,t,r,o,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],g=r[4],v=r[7],y=r[2],S=r[5],M=r[8],A=o[0],_=o[3],x=o[6],I=o[1],N=o[4],P=o[7],q=o[2],B=o[5],k=o[8];return l[0]=c*A+f*I+h*q,l[3]=c*_+f*N+h*B,l[6]=c*x+f*P+h*k,l[1]=p*A+g*I+v*q,l[4]=p*_+g*N+v*B,l[7]=p*x+g*P+v*k,l[2]=y*A+S*I+M*q,l[5]=y*_+S*N+M*B,l[8]=y*x+S*P+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-r*l*g+r*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=g*c-f*p,y=f*h-g*l,S=p*l-c*h,M=t*v+r*y+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*p-g*r)*A,e[2]=(f*r-o*c)*A,e[3]=y*A,e[4]=(g*t-o*h)*A,e[5]=(o*l-f*t)*A,e[6]=S*A,e[7]=(r*h-p*t)*A,e[8]=(c*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(kc.makeScale(e,t)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new lt;function Lg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function J0(){const s=jl("canvas");return s.style.display="block",s}const am={};function Hs(s){s in am||(am[s]=!0,console.warn(s))}function Q0(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function ex(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lm=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),um=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nx(){const s={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Nt&&(o.r=Gi(o.r),o.g=Gi(o.g),o.b=Gi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(o.r=Xs(o.r),o.g=Xs(o.g),o.b=Xs(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===_r?Gl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Qs]:{primaries:e,whitePoint:r,transfer:Gl,toXYZ:lm,fromXYZ:um,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:lm,fromXYZ:um,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),s}const At=nx();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class ix{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=jl("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Gi(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Gi(t[r]/255)*255):t[r]=Gi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rx=0;class Ng{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(zc(o[c].image)):l.push(zc(o[c]))}else l=zc(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function zc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ix.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sx=0;class On extends no{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=Kr,o=Kr,l=Si,c=Jr,f=hi,h=Wi,p=On.DEFAULT_ANISOTROPY,g=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=io(),this.name="",this.source=new Ng(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cf:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case Rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cf:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case Rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=_g;On.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,r=0,o=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],g=h[4],v=h[8],y=h[1],S=h[5],M=h[9],A=h[2],_=h[6],x=h[10];if(Math.abs(g-y)<.01&&Math.abs(v-A)<.01&&Math.abs(M-_)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+A)<.1&&Math.abs(M+_)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(p+1)/2,P=(S+1)/2,q=(x+1)/2,B=(g+y)/4,k=(v+A)/4,$=(M+_)/4;return N>P&&N>q?N<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(N),o=B/r,l=k/r):P>q?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=B/o,l=$/o):q<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(q),r=k/l,o=$/l),this.set(r,o,l,t),this}let I=Math.sqrt((_-M)*(_-M)+(v-A)*(v-A)+(y-g)*(y-g));return Math.abs(I)<.001&&(I=1),this.x=(_-M)/I,this.y=(v-A)/I,this.z=(y-g)/I,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ox extends no{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new On(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ng(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends ox{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Dg extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ax extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let h=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];const y=l[c+0],S=l[c+1],M=l[c+2],A=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f===1){e[t+0]=y,e[t+1]=S,e[t+2]=M,e[t+3]=A;return}if(v!==A||h!==y||p!==S||g!==M){let _=1-f;const x=h*y+p*S+g*M+v*A,I=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const q=Math.sqrt(N),B=Math.atan2(q,x*I);_=Math.sin(_*B)/q,f=Math.sin(f*B)/q}const P=f*I;if(h=h*_+y*P,p=p*_+S*P,g=g*_+M*P,v=v*_+A*P,_===1-f){const q=1/Math.sqrt(h*h+p*p+g*g+v*v);h*=q,p*=q,g*=q,v*=q}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],h=r[o+1],p=r[o+2],g=r[o+3],v=l[c],y=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+g*v+h*S-p*y,e[t+1]=h*M+g*y+p*v-f*S,e[t+2]=p*M+g*S+f*y-h*v,e[t+3]=g*M-f*v-h*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),g=f(o/2),v=f(l/2),y=h(r/2),S=h(o/2),M=h(l/2);switch(c){case"XYZ":this._x=y*g*v+p*S*M,this._y=p*S*v-y*g*M,this._z=p*g*M+y*S*v,this._w=p*g*v-y*S*M;break;case"YXZ":this._x=y*g*v+p*S*M,this._y=p*S*v-y*g*M,this._z=p*g*M-y*S*v,this._w=p*g*v+y*S*M;break;case"ZXY":this._x=y*g*v-p*S*M,this._y=p*S*v+y*g*M,this._z=p*g*M+y*S*v,this._w=p*g*v-y*S*M;break;case"ZYX":this._x=y*g*v-p*S*M,this._y=p*S*v+y*g*M,this._z=p*g*M-y*S*v,this._w=p*g*v+y*S*M;break;case"YZX":this._x=y*g*v+p*S*M,this._y=p*S*v+y*g*M,this._z=p*g*M-y*S*v,this._w=p*g*v-y*S*M;break;case"XZY":this._x=y*g*v-p*S*M,this._y=p*S*v-y*g*M,this._z=p*g*M+y*S*v,this._w=p*g*v+y*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],v=t[10],y=r+f+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(g-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=r*g+c*f+o*p-l*h,this._y=o*g+c*h+l*f-r*p,this._z=l*g+c*p+r*h-o*f,this._w=c*g-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),v=Math.sin((1-t)*g)/p,y=Math.sin(t*g)/p;return this._w=c*v+this._w*y,this._x=r*v+this._x*y,this._y=o*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*r),g=2*(f*t-l*o),v=2*(l*r-c*t);return this.x=t+h*p+c*v-f*g,this.y=r+h*g+f*p-l*v,this.z=o+h*v+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-r*h,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bc=new K,cm=new na;class ia{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,li):li.fromBufferAttribute(l,c),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dl.copy(r.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),hl.subVectors(this.max,Ho),Rs.subVectors(e.a,Ho),Ps.subVectors(e.b,Ho),bs.subVectors(e.c,Ho),dr.subVectors(Ps,Rs),hr.subVectors(bs,Ps),Hr.subVectors(Rs,bs);let t=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Hr.z,Hr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Hr.z,0,-Hr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Hr.y,Hr.x,0];return!Hc(t,Rs,Ps,bs,hl)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,Rs,Ps,bs,hl))?!1:(pl.crossVectors(dr,hr),t=[pl.x,pl.y,pl.z],Hc(t,Rs,Ps,bs,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new K,new K,new K,new K,new K,new K,new K,new K],li=new K,dl=new ia,Rs=new K,Ps=new K,bs=new K,dr=new K,hr=new K,Hr=new K,Ho=new K,hl=new K,pl=new K,Vr=new K;function Hc(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){Vr.fromArray(s,l);const f=o.x*Math.abs(Vr.x)+o.y*Math.abs(Vr.y)+o.z*Math.abs(Vr.z),h=e.dot(Vr),p=t.dot(Vr),g=r.dot(Vr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const lx=new ia,Vo=new K,Vc=new K;class $l{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):lx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const t=Vo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Vo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Vc)),this.expandByPoint(Vo.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new K,Gc=new K,ml=new K,pr=new K,Wc=new K,gl=new K,jc=new K;class Ug{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Gc.copy(e).add(t).multiplyScalar(.5),ml.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(Gc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(ml),f=pr.dot(this.direction),h=-pr.dot(ml),p=pr.lengthSq(),g=Math.abs(1-c*c);let v,y,S,M;if(g>0)if(v=c*h-f,y=c*f-h,M=l*g,v>=0)if(y>=-M)if(y<=M){const A=1/g;v*=A,y*=A,S=v*(v+c*y+2*f)+y*(c*v+y+2*h)+p}else y=l,v=Math.max(0,-(c*y+f)),S=-v*v+y*(y+2*h)+p;else y=-l,v=Math.max(0,-(c*y+f)),S=-v*v+y*(y+2*h)+p;else y<=-M?(v=Math.max(0,-(-c*l+f)),y=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+p):y<=M?(v=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+p):(v=Math.max(0,-(c*l+f)),y=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+p);else y=c>0?-l:l,v=Math.max(0,-(c*y+f)),S=-v*v+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Gc).addScaledVector(ml,y),S}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),o=Fi.dot(Fi)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),g>=0?(l=(e.min.y-y.y)*g,c=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,c=(e.min.y-y.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-y.z)*v,h=(e.max.z-y.z)*v):(f=(e.max.z-y.z)*v,h=(e.min.z-y.z)*v),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,r,o,l){Wc.subVectors(t,e),gl.subVectors(r,e),jc.crossVectors(Wc,gl);let c=this.direction.dot(jc),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(gl.crossVectors(pr,gl));if(h<0)return null;const p=f*this.direction.dot(Wc.cross(pr));if(p<0||h+p>c)return null;const g=-f*pr.dot(jc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,r,o,l,c,f,h,p,g,v,y,S,M,A,_){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p,g,v,y,S,M,A,_)}set(e,t,r,o,l,c,f,h,p,g,v,y,S,M,A,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=c,x[9]=f,x[13]=h,x[2]=p,x[6]=g,x[10]=v,x[14]=y,x[3]=S,x[7]=M,x[11]=A,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),c=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=c*g,S=c*v,M=f*g,A=f*v;t[0]=h*g,t[4]=-h*v,t[8]=p,t[1]=S+M*p,t[5]=y-A*p,t[9]=-f*h,t[2]=A-y*p,t[6]=M+S*p,t[10]=c*h}else if(e.order==="YXZ"){const y=h*g,S=h*v,M=p*g,A=p*v;t[0]=y+A*f,t[4]=M*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-f,t[2]=S*f-M,t[6]=A+y*f,t[10]=c*h}else if(e.order==="ZXY"){const y=h*g,S=h*v,M=p*g,A=p*v;t[0]=y-A*f,t[4]=-c*v,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*g,t[9]=A-y*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const y=c*g,S=c*v,M=f*g,A=f*v;t[0]=h*g,t[4]=M*p-S,t[8]=y*p+A,t[1]=h*v,t[5]=A*p+y,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const y=c*h,S=c*p,M=f*h,A=f*p;t[0]=h*g,t[4]=A-y*v,t[8]=M*v+S,t[1]=v,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*v+M,t[10]=y-A*v}else if(e.order==="XZY"){const y=c*h,S=c*p,M=f*h,A=f*p;t[0]=h*g,t[4]=-v,t[8]=p*g,t[1]=y*v+A,t[5]=c*g,t[9]=S*v-M,t[2]=M*v-S,t[6]=f*g,t[10]=A*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,cx)}lookAt(e,t,r){const o=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),mr.crossVectors(r,Vn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),mr.crossVectors(r,Vn)),mr.normalize(),vl.crossVectors(Vn,mr),o[0]=mr.x,o[4]=vl.x,o[8]=Vn.x,o[1]=mr.y,o[5]=vl.y,o[9]=Vn.y,o[2]=mr.z,o[6]=vl.z,o[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],g=r[1],v=r[5],y=r[9],S=r[13],M=r[2],A=r[6],_=r[10],x=r[14],I=r[3],N=r[7],P=r[11],q=r[15],B=o[0],k=o[4],$=o[8],L=o[12],R=o[1],z=o[5],le=o[9],te=o[13],pe=o[2],ge=o[6],ce=o[10],de=o[14],V=o[3],fe=o[7],oe=o[11],F=o[15];return l[0]=c*B+f*R+h*pe+p*V,l[4]=c*k+f*z+h*ge+p*fe,l[8]=c*$+f*le+h*ce+p*oe,l[12]=c*L+f*te+h*de+p*F,l[1]=g*B+v*R+y*pe+S*V,l[5]=g*k+v*z+y*ge+S*fe,l[9]=g*$+v*le+y*ce+S*oe,l[13]=g*L+v*te+y*de+S*F,l[2]=M*B+A*R+_*pe+x*V,l[6]=M*k+A*z+_*ge+x*fe,l[10]=M*$+A*le+_*ce+x*oe,l[14]=M*L+A*te+_*de+x*F,l[3]=I*B+N*R+P*pe+q*V,l[7]=I*k+N*z+P*ge+q*fe,l[11]=I*$+N*le+P*ce+q*oe,l[15]=I*L+N*te+P*de+q*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],v=e[6],y=e[10],S=e[14],M=e[3],A=e[7],_=e[11],x=e[15];return M*(+l*h*v-o*p*v-l*f*y+r*p*y+o*f*S-r*h*S)+A*(+t*h*S-t*p*y+l*c*y-o*c*S+o*p*g-l*h*g)+_*(+t*p*v-t*f*S-l*c*v+r*c*S+l*f*g-r*p*g)+x*(-o*f*g-t*h*v+t*f*y+o*c*v-r*c*y+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=e[9],y=e[10],S=e[11],M=e[12],A=e[13],_=e[14],x=e[15],I=v*_*p-A*y*p+A*h*S-f*_*S-v*h*x+f*y*x,N=M*y*p-g*_*p-M*h*S+c*_*S+g*h*x-c*y*x,P=g*A*p-M*v*p+M*f*S-c*A*S-g*f*x+c*v*x,q=M*v*h-g*A*h-M*f*y+c*A*y+g*f*_-c*v*_,B=t*I+r*N+o*P+l*q;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/B;return e[0]=I*k,e[1]=(A*y*l-v*_*l-A*o*S+r*_*S+v*o*x-r*y*x)*k,e[2]=(f*_*l-A*h*l+A*o*p-r*_*p-f*o*x+r*h*x)*k,e[3]=(v*h*l-f*y*l-v*o*p+r*y*p+f*o*S-r*h*S)*k,e[4]=N*k,e[5]=(g*_*l-M*y*l+M*o*S-t*_*S-g*o*x+t*y*x)*k,e[6]=(M*h*l-c*_*l-M*o*p+t*_*p+c*o*x-t*h*x)*k,e[7]=(c*y*l-g*h*l+g*o*p-t*y*p-c*o*S+t*h*S)*k,e[8]=P*k,e[9]=(M*v*l-g*A*l-M*r*S+t*A*S+g*r*x-t*v*x)*k,e[10]=(c*A*l-M*f*l+M*r*p-t*A*p-c*r*x+t*f*x)*k,e[11]=(g*f*l-c*v*l-g*r*p+t*v*p+c*r*S-t*f*S)*k,e[12]=q*k,e[13]=(g*A*o-M*v*o+M*r*y-t*A*y-g*r*_+t*v*_)*k,e[14]=(M*f*o-c*A*o-M*r*h+t*A*h+c*r*_-t*f*_)*k,e[15]=(c*v*o-g*f*o+g*r*h-t*v*h-c*r*y+t*f*y)*k,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+r,p*f-o*h,p*h+o*f,0,p*f+o*h,g*f+r,g*h-o*c,0,p*h-o*f,g*h+o*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,v=f+f,y=l*p,S=l*g,M=l*v,A=c*g,_=c*v,x=f*v,I=h*p,N=h*g,P=h*v,q=r.x,B=r.y,k=r.z;return o[0]=(1-(A+x))*q,o[1]=(S+P)*q,o[2]=(M-N)*q,o[3]=0,o[4]=(S-P)*B,o[5]=(1-(y+x))*B,o[6]=(_+I)*B,o[7]=0,o[8]=(M+N)*k,o[9]=(_-I)*k,o[10]=(1-(y+A))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Ls.set(o[0],o[1],o[2]).length();const c=Ls.set(o[4],o[5],o[6]).length(),f=Ls.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ui.copy(this);const p=1/l,g=1/c,v=1/f;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=g,ui.elements[5]*=g,ui.elements[6]*=g,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,t.setFromRotationMatrix(ui),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,o,l,c,f=Vi){const h=this.elements,p=2*l/(t-e),g=2*l/(r-o),v=(t+e)/(t-e),y=(r+o)/(r-o);let S,M;if(f===Vi)S=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Wl)S=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=Vi){const h=this.elements,p=1/(t-e),g=1/(r-o),v=1/(c-l),y=(t+e)*p,S=(r+o)*g;let M,A;if(f===Vi)M=(c+l)*v,A=-2*v;else if(f===Wl)M=l*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=A,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ls=new K,ui=new Bt,ux=new K(0,0,0),cx=new K(1,1,1),mr=new K,vl=new K,Vn=new K,fm=new Bt,dm=new na;class Ei{constructor(e=0,t=0,r=0,o=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],g=o[9],v=o[2],y=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dm.setFromEuler(this),this.setFromQuaternion(dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Ig{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fx=0;const hm=new K,Ns=new na,Oi=new Bt,_l=new K,Go=new K,dx=new K,hx=new na,pm=new K(1,0,0),mm=new K(0,1,0),gm=new K(0,0,1),vm={type:"added"},px={type:"removed"},Ds={type:"childadded",child:null},Xc={type:"childremoved",child:null};class fn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new K,t=new Ei,r=new na,o=new K(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new lt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ig,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(pm,e)}rotateY(e){return this.rotateOnAxis(mm,e)}rotateZ(e){return this.rotateOnAxis(gm,e)}translateOnAxis(e,t){return hm.copy(e).applyQuaternion(this.quaternion),this.position.add(hm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pm,e)}translateY(e){return this.translateOnAxis(mm,e)}translateZ(e){return this.translateOnAxis(gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?_l.copy(e):_l.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Go,_l,this.up):Oi.lookAt(_l,Go,this.up),this.quaternion.setFromRotationMatrix(Oi),o&&(Oi.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix(Oi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(px),Xc.child=e,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),y=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}fn.DEFAULT_UP=new K(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new K,ki=new K,qc=new K,zi=new K,Us=new K,Is=new K,_m=new K,Yc=new K,$c=new K,Zc=new K,Kc=new Xt,Jc=new Xt,Qc=new Xt;class di{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ci.subVectors(e,t),o.cross(ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ci.subVectors(o,t),ki.subVectors(r,t),qc.subVectors(e,t);const c=ci.dot(ci),f=ci.dot(ki),h=ci.dot(qc),p=ki.dot(ki),g=ki.dot(qc),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(p*h-f*g)*y,M=(c*g-f*h)*y;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,r,o,l,c,f,h){return this.getBarycoord(e,t,r,o,zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,zi.x),h.addScaledVector(c,zi.y),h.addScaledVector(f,zi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,c){return Kc.setScalar(0),Jc.setScalar(0),Qc.setScalar(0),Kc.fromBufferAttribute(e,t),Jc.fromBufferAttribute(e,r),Qc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Kc,l.x),c.addScaledVector(Jc,l.y),c.addScaledVector(Qc,l.z),c}static isFrontFacing(e,t,r,o){return ci.subVectors(r,t),ki.subVectors(e,t),ci.cross(ki).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ci.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return di.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Us.subVectors(o,r),Is.subVectors(l,r),Yc.subVectors(e,r);const h=Us.dot(Yc),p=Is.dot(Yc);if(h<=0&&p<=0)return t.copy(r);$c.subVectors(e,o);const g=Us.dot($c),v=Is.dot($c);if(g>=0&&v<=g)return t.copy(o);const y=h*v-g*p;if(y<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(Us,c);Zc.subVectors(e,l);const S=Us.dot(Zc),M=Is.dot(Zc);if(M>=0&&S<=M)return t.copy(l);const A=S*p-h*M;if(A<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(Is,f);const _=g*M-S*v;if(_<=0&&v-g>=0&&S-M>=0)return _m.subVectors(l,o),f=(v-g)/(v-g+(S-M)),t.copy(o).addScaledVector(_m,f);const x=1/(_+A+y);return c=A*x,f=y*x,t.copy(r).addScaledVector(Us,c).addScaledVector(Is,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function ef(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=At.workingColorSpace){if(e=K0(e,1),t=vt(t,0,1),r=vt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=ef(c,l,e+1/3),this.g=ef(c,l,e),this.b=ef(c,l,e-1/3)}return At.toWorkingColorSpace(this,o),this}setStyle(e,t=Jn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){const r=Fg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return At.fromWorkingColorSpace(yn.copy(this),e),Math.round(vt(yn.r*255,0,255))*65536+Math.round(vt(yn.g*255,0,255))*256+Math.round(vt(yn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(yn.copy(this),t);const r=yn.r,o=yn.g,l=yn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const v=c-f;switch(p=g<=.5?v/(c+f):v/(2-c-f),c){case r:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-r)/v+2;break;case l:h=(r-o)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Jn){At.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,r=yn.g,o=yn.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(xl);const r=Oc(gr.h,xl.h,t),o=Oc(gr.s,xl.s,t),l=Oc(gr.l,xl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Ct;Ct.NAMES=Fg;let mx=0;class ro extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Ws,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gf,this.blendDst=vf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gf&&(r.blendSrc=this.blendSrc),this.blendDst!==vf&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xl extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new K,yl=new Ye;class Mi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=sm,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)yl.fromBufferAttribute(this,t),yl.applyMatrix3(e),this.setXY(t,yl.x,yl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Bo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sm&&(e.usage=this.usage),e}}class Og extends Mi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class kg extends Mi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class dn extends Mi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let gx=0;const Kn=new Bt,tf=new fn,Fs=new K,Gn=new ia,Wo=new ia,an=new K;class ei extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lg(e)?kg:Og)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,r){return Kn.makeTranslation(e,t,r),this.applyMatrix4(Kn),this}scale(e,t,r){return Kn.makeScale(e,t,r),this.applyMatrix4(Kn),this}lookAt(e){return tf.lookAt(e),tf.updateMatrix(),this.applyMatrix4(tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new dn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Wo.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(Gn.min,Wo.min),Gn.expandByPoint(an),an.addVectors(Gn.max,Wo.max),Gn.expandByPoint(an)):(Gn.expandByPoint(Wo.min),Gn.expandByPoint(Wo.max))}Gn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)an.fromBufferAttribute(f,p),h&&(Fs.fromBufferAttribute(e,p),an.add(Fs)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let $=0;$<r.count;$++)f[$]=new K,h[$]=new K;const p=new K,g=new K,v=new K,y=new Ye,S=new Ye,M=new Ye,A=new K,_=new K;function x($,L,R){p.fromBufferAttribute(r,$),g.fromBufferAttribute(r,L),v.fromBufferAttribute(r,R),y.fromBufferAttribute(l,$),S.fromBufferAttribute(l,L),M.fromBufferAttribute(l,R),g.sub(p),v.sub(p),S.sub(y),M.sub(y);const z=1/(S.x*M.y-M.x*S.y);isFinite(z)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(z),_.copy(v).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(z),f[$].add(A),f[L].add(A),f[R].add(A),h[$].add(_),h[L].add(_),h[R].add(_))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let $=0,L=I.length;$<L;++$){const R=I[$],z=R.start,le=R.count;for(let te=z,pe=z+le;te<pe;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const N=new K,P=new K,q=new K,B=new K;function k($){q.fromBufferAttribute(o,$),B.copy(q);const L=f[$];N.copy(L),N.sub(q.multiplyScalar(q.dot(L))).normalize(),P.crossVectors(B,L);const z=P.dot(h[$])<0?-1:1;c.setXYZW($,N.x,N.y,N.z,z)}for(let $=0,L=I.length;$<L;++$){const R=I[$],z=R.start,le=R.count;for(let te=z,pe=z+le;te<pe;te+=3)k(e.getX(te+0)),k(e.getX(te+1)),k(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new K,l=new K,c=new K,f=new K,h=new K,p=new K,g=new K,v=new K;if(e)for(let y=0,S=e.count;y<S;y+=3){const M=e.getX(y+0),A=e.getX(y+1),_=e.getX(y+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),c.fromBufferAttribute(t,_),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,_),f.add(g),h.add(g),p.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(_,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,v=f.normalized,y=new p.constructor(h.length*g);let S=0,M=0;for(let A=0,_=h.length;A<_;A++){f.isInterleavedBufferAttribute?S=h[A]*f.data.stride+f.offset:S=h[A]*g;for(let x=0;x<g;x++)y[M++]=p[S++]}return new Mi(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,v=p.length;g<v;g++){const y=p[g],S=e(y,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let v=0,y=p.length;v<y;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],v=l[p];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xm=new Bt,Gr=new Ug,Sl=new $l,ym=new K,Ml=new K,El=new K,Tl=new K,nf=new K,wl=new K,Sm=new K,Al=new K;class In extends fn{constructor(e=new ei,t=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){wl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],v=l[h];g!==0&&(nf.fromBufferAttribute(v,e),c?wl.addScaledVector(nf,g):wl.addScaledVector(nf.sub(t),g))}t.add(wl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(l),Gr.copy(e.ray).recast(e.near),!(Sl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Sl,ym)===null||Gr.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(xm.copy(l).invert(),Gr.copy(e.ray).applyMatrix4(xm),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,A=y.length;M<A;M++){const _=y[M],x=c[_.materialIndex],I=Math.max(_.start,S.start),N=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let P=I,q=N;P<q;P+=3){const B=f.getX(P),k=f.getX(P+1),$=f.getX(P+2);o=Cl(this,x,e,r,p,g,v,B,k,$),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(f.count,S.start+S.count);for(let _=M,x=A;_<x;_+=3){const I=f.getX(_),N=f.getX(_+1),P=f.getX(_+2);o=Cl(this,c,e,r,p,g,v,I,N,P),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,A=y.length;M<A;M++){const _=y[M],x=c[_.materialIndex],I=Math.max(_.start,S.start),N=Math.min(h.count,Math.min(_.start+_.count,S.start+S.count));for(let P=I,q=N;P<q;P+=3){const B=P,k=P+1,$=P+2;o=Cl(this,x,e,r,p,g,v,B,k,$),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let _=M,x=A;_<x;_+=3){const I=_,N=_+1,P=_+2;o=Cl(this,c,e,r,p,g,v,I,N,P),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function vx(s,e,t,r,o,l,c,f){let h;if(e.side===Fn?h=r.intersectTriangle(c,l,o,!0,f):h=r.intersectTriangle(o,l,c,e.side===Mr,f),h===null)return null;Al.copy(f),Al.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Al);return p<t.near||p>t.far?null:{distance:p,point:Al.clone(),object:s}}function Cl(s,e,t,r,o,l,c,f,h,p){s.getVertexPosition(f,Ml),s.getVertexPosition(h,El),s.getVertexPosition(p,Tl);const g=vx(s,e,t,r,Ml,El,Tl,Sm);if(g){const v=new K;di.getBarycoord(Sm,Ml,El,Tl,v),o&&(g.uv=di.getInterpolatedAttribute(o,f,h,p,v,new Ye)),l&&(g.uv1=di.getInterpolatedAttribute(l,f,h,p,v,new Ye)),c&&(g.normal=di.getInterpolatedAttribute(c,f,h,p,v,new K),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:f,b:h,c:p,normal:new K,materialIndex:0};di.getNormal(Ml,El,Tl,y.normal),g.face=y,g.barycoord=v}return g}class so extends ei{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],v=[];let y=0,S=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(g,3)),this.setAttribute("uv",new dn(v,2));function M(A,_,x,I,N,P,q,B,k,$,L){const R=P/k,z=q/$,le=P/2,te=q/2,pe=B/2,ge=k+1,ce=$+1;let de=0,V=0;const fe=new K;for(let oe=0;oe<ce;oe++){const F=oe*z-te;for(let se=0;se<ge;se++){const Ne=se*R-le;fe[A]=Ne*I,fe[_]=F*N,fe[x]=pe,p.push(fe.x,fe.y,fe.z),fe[A]=0,fe[_]=0,fe[x]=B>0?1:-1,g.push(fe.x,fe.y,fe.z),v.push(se/k),v.push(1-oe/$),de+=1}}for(let oe=0;oe<$;oe++)for(let F=0;F<k;F++){const se=y+F+ge*oe,Ne=y+F+ge*(oe+1),ee=y+(F+1)+ge*(oe+1),he=y+(F+1)+ge*oe;h.push(se,Ne,he),h.push(Ne,ee,he),V+=6}f.addGroup(S,V,L),S+=V,y+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function An(s){const e={};for(let t=0;t<s.length;t++){const r=eo(s[t]);for(const o in r)e[o]=r[o]}return e}function _x(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const xx={clone:eo,merge:An};var yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yx,this.fragmentShader=Sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=_x(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Bg extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new K,Mm=new Ye,Em=new Ye;class Qn extends Bg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=td*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return td*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,Mm,Em),t.subVectors(Em,Mm)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*r/p,o*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,ks=1;class Mx extends fn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Qn(Os,ks,e,t);o.layers=this.layers,this.add(o);const l=new Qn(Os,ks,e,t);l.layers=this.layers,this.add(l);const c=new Qn(Os,ks,e,t);c.layers=this.layers,this.add(c);const f=new Qn(Os,ks,e,t);f.layers=this.layers,this.add(f);const h=new Qn(Os,ks,e,t);h.layers=this.layers,this.add(h);const p=new Qn(Os,ks,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Wl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(t,g),e.setRenderTarget(v,y,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Hg extends On{constructor(e,t,r,o,l,c,f,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,r,o,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ex extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Hg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new so(5,5,5),l=new Er({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:yr});l.uniforms.tEquirect.value=t;const c=new In(o,l),f=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Si),new Mx(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}class Tx extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rf=new K,wx=new K,Ax=new lt;class qr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=rf.subVectors(r,t).cross(wx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(rf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ax.getNormalMatrix(e),o=this.coplanarPoint(rf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new $l,Rl=new K;class md{constructor(e=new qr,t=new qr,r=new qr,o=new qr,l=new qr,c=new qr){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Vi){const r=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],h=o[3],p=o[4],g=o[5],v=o[6],y=o[7],S=o[8],M=o[9],A=o[10],_=o[11],x=o[12],I=o[13],N=o[14],P=o[15];if(r[0].setComponents(h-l,y-p,_-S,P-x).normalize(),r[1].setComponents(h+l,y+p,_+S,P+x).normalize(),r[2].setComponents(h+c,y+g,_+M,P+I).normalize(),r[3].setComponents(h-c,y-g,_-M,P-I).normalize(),r[4].setComponents(h-f,y-v,_-A,P-N).normalize(),t===Vi)r[5].setComponents(h+f,y+v,_+A,P+N).normalize();else if(t===Wl)r[5].setComponents(f,v,A,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Rl.x=o.normal.x>0?e.max.x:e.min.x,Rl.y=o.normal.y>0?e.max.y:e.min.y,Rl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vg extends ro{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tm=new Bt,nd=new Ug,Pl=new $l,bl=new K;class Cx extends fn{constructor(e=new ei,t=new Vg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(o),Pl.radius+=l,e.ray.intersectsSphere(Pl)===!1)return;Tm.copy(o).invert(),nd.copy(e.ray).applyMatrix4(Tm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,v=r.attributes.position;if(p!==null){const y=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let M=y,A=S;M<A;M++){const _=p.getX(M);bl.fromBufferAttribute(v,_),wm(bl,_,h,o,e,t,this)}}else{const y=Math.max(0,c.start),S=Math.min(v.count,c.start+c.count);for(let M=y,A=S;M<A;M++)bl.fromBufferAttribute(v,M),wm(bl,M,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function wm(s,e,t,r,o,l,c){const f=nd.distanceSqToPoint(s);if(f<t){const h=new K;nd.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class xr extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Gg extends On{constructor(e,t,r,o,l,c,f,h,p,g=js){if(g!==js&&g!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===js&&(r=Qr),r===void 0&&g===Js&&(r=Ks),super(null,o,l,c,f,h,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:pi,this.minFilter=h!==void 0?h:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ti{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-c,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===c)return o/(l-1);const g=r[o],y=r[o+1]-g,S=(c-g)/y;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),h=t||(c.isVector2?new Ye:new K);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new K,o=[],l=[],c=[],f=new K,h=new Bt;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new K)}l[0]=new K,c[0]=new K;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),y=Math.abs(o[0].z);g<=p&&(p=g,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),y<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(vt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,M))}c[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(vt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(o[M],S*M)),c[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gd extends Ti{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Ye){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),y=h-this.aX,S=p-this.aY;h=y*g-S*v+this.aX,p=y*v+S*g+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rx extends gd{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function vd(){let s=0,e=0,t=0,r=0;function o(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,p){o(c,f,p*(f-l),p*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,p,g,v){let y=(c-l)/p-(f-l)/(p+g)+(f-c)/g,S=(f-c)/g-(h-c)/(g+v)+(h-f)/v;y*=g,S*=g,o(c,f,y,S)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const Ll=new K,sf=new vd,of=new vd,af=new vd;class Px extends Ti{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new K){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,g;this.closed||f>0?p=o[(f-1)%l]:(Ll.subVectors(o[0],o[1]).add(o[0]),p=Ll);const v=o[f%l],y=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(Ll.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=Ll),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(v),S),A=Math.pow(v.distanceToSquared(y),S),_=Math.pow(y.distanceToSquared(g),S);A<1e-4&&(A=1),M<1e-4&&(M=A),_<1e-4&&(_=A),sf.initNonuniformCatmullRom(p.x,v.x,y.x,g.x,M,A,_),of.initNonuniformCatmullRom(p.y,v.y,y.y,g.y,M,A,_),af.initNonuniformCatmullRom(p.z,v.z,y.z,g.z,M,A,_)}else this.curveType==="catmullrom"&&(sf.initCatmullRom(p.x,v.x,y.x,g.x,this.tension),of.initCatmullRom(p.y,v.y,y.y,g.y,this.tension),af.initCatmullRom(p.z,v.z,y.z,g.z,this.tension));return r.set(sf.calc(h),of.calc(h),af.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new K().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Am(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*f+l*s+t}function bx(s,e){const t=1-s;return t*t*e}function Lx(s,e){return 2*(1-s)*s*e}function Nx(s,e){return s*s*e}function Yo(s,e,t,r){return bx(s,e)+Lx(s,t)+Nx(s,r)}function Dx(s,e){const t=1-s;return t*t*t*e}function Ux(s,e){const t=1-s;return 3*t*t*s*e}function Ix(s,e){return 3*(1-s)*s*s*e}function Fx(s,e){return s*s*s*e}function $o(s,e,t,r,o){return Dx(s,e)+Ux(s,t)+Ix(s,r)+Fx(s,o)}class Wg extends Ti{constructor(e=new Ye,t=new Ye,r=new Ye,o=new Ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ye){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set($o(e,o.x,l.x,c.x,f.x),$o(e,o.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ox extends Ti{constructor(e=new K,t=new K,r=new K,o=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new K){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set($o(e,o.x,l.x,c.x,f.x),$o(e,o.y,l.y,c.y,f.y),$o(e,o.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jg extends Ti{constructor(e=new Ye,t=new Ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ye){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kx extends Ti{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xg extends Ti{constructor(e=new Ye,t=new Ye,r=new Ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ye){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Yo(e,o.x,l.x,c.x),Yo(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zx extends Ti{constructor(e=new K,t=new K,r=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new K){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Yo(e,o.x,l.x,c.x),Yo(e,o.y,l.y,c.y),Yo(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qg extends Ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ye){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),f=l-c,h=o[c===0?c:c-1],p=o[c],g=o[c>o.length-2?o.length-1:c+1],v=o[c>o.length-3?o.length-1:c+2];return r.set(Am(f,h.x,p.x,g.x,v.x),Am(f,h.y,p.y,g.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ye().fromArray(o))}return this}}var Cm=Object.freeze({__proto__:null,ArcCurve:Rx,CatmullRomCurve3:Px,CubicBezierCurve:Wg,CubicBezierCurve3:Ox,EllipseCurve:gd,LineCurve:jg,LineCurve3:kx,QuadraticBezierCurve:Xg,QuadraticBezierCurve3:zx,SplineCurve:qg});class Bx extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cm[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const c=o[l]-r,f=this.curves[l],h=f.getLength(),p=h===0?0:1-c/h;return f.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(f);for(let p=0;p<h.length;p++){const g=h[p];r&&r.equals(g)||(t.push(g),r=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Cm[o.type]().fromJSON(o))}return this}}class Rm extends Bx{constructor(e){super(),this.type="Path",this.currentPoint=new Ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new jg(this.currentPoint.clone(),new Ye(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new Xg(this.currentPoint.clone(),new Ye(e,t),new Ye(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,c){const f=new Wg(this.currentPoint.clone(),new Ye(e,t),new Ye(r,o),new Ye(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new qg(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,c){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,r,o,l,c),this}absarc(e,t,r,o,l,c){return this.absellipse(e,t,r,r,o,l,c),this}ellipse(e,t,r,o,l,c,f,h){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+p,t+g,r,o,l,c,f,h),this}absellipse(e,t,r,o,l,c,f,h){const p=new gd(e,t,r,o,l,c,f,h);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _d extends Rm{constructor(e){super(e),this.uuid=io(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new Rm().fromJSON(o))}return this}}const Hx={triangulate:function(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=Yg(s,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,h,p,g,v,y,S;if(r&&(l=Xx(s,e,l,t)),s.length>80*t){f=p=s[0],h=g=s[1];for(let M=t;M<o;M+=t)v=s[M],y=s[M+1],v<f&&(f=v),y<h&&(h=y),v>p&&(p=v),y>g&&(g=y);S=Math.max(p-f,g-h),S=S!==0?32767/S:0}return Jo(l,c,t,f,h,S,0),c}};function Yg(s,e,t,r,o){let l,c;if(o===iy(s,e,t,r)>0)for(l=e;l<t;l+=r)c=Pm(l,s[l],s[l+1],c);else for(l=t-r;l>=e;l-=r)c=Pm(l,s[l],s[l+1],c);return c&&Zl(c,c.next)&&(ea(c),c=c.next),c}function ts(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(Zl(t,t.next)||Gt(t.prev,t,t.next)===0)){if(ea(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Jo(s,e,t,r,o,l,c){if(!s)return;!c&&l&&Kx(s,r,o,l);let f=s,h,p;for(;s.prev!==s.next;){if(h=s.prev,p=s.next,l?Gx(s,r,o,l):Vx(s)){e.push(h.i/t|0),e.push(s.i/t|0),e.push(p.i/t|0),ea(s),s=p.next,f=p.next;continue}if(s=p,s===f){c?c===1?(s=Wx(ts(s),e,t),Jo(s,e,t,r,o,l,2)):c===2&&jx(s,e,t,r,o,l):Jo(ts(s),e,t,r,o,l,1);break}}}function Vx(s){const e=s.prev,t=s,r=s.next;if(Gt(e,t,r)>=0)return!1;const o=e.x,l=t.x,c=r.x,f=e.y,h=t.y,p=r.y,g=o<l?o<c?o:c:l<c?l:c,v=f<h?f<p?f:p:h<p?h:p,y=o>l?o>c?o:c:l>c?l:c,S=f>h?f>p?f:p:h>p?h:p;let M=r.next;for(;M!==e;){if(M.x>=g&&M.x<=y&&M.y>=v&&M.y<=S&&Vs(o,f,l,h,c,p,M.x,M.y)&&Gt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function Gx(s,e,t,r){const o=s.prev,l=s,c=s.next;if(Gt(o,l,c)>=0)return!1;const f=o.x,h=l.x,p=c.x,g=o.y,v=l.y,y=c.y,S=f<h?f<p?f:p:h<p?h:p,M=g<v?g<y?g:y:v<y?v:y,A=f>h?f>p?f:p:h>p?h:p,_=g>v?g>y?g:y:v>y?v:y,x=id(S,M,e,t,r),I=id(A,_,e,t,r);let N=s.prevZ,P=s.nextZ;for(;N&&N.z>=x&&P&&P.z<=I;){if(N.x>=S&&N.x<=A&&N.y>=M&&N.y<=_&&N!==o&&N!==c&&Vs(f,g,h,v,p,y,N.x,N.y)&&Gt(N.prev,N,N.next)>=0||(N=N.prevZ,P.x>=S&&P.x<=A&&P.y>=M&&P.y<=_&&P!==o&&P!==c&&Vs(f,g,h,v,p,y,P.x,P.y)&&Gt(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;N&&N.z>=x;){if(N.x>=S&&N.x<=A&&N.y>=M&&N.y<=_&&N!==o&&N!==c&&Vs(f,g,h,v,p,y,N.x,N.y)&&Gt(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;P&&P.z<=I;){if(P.x>=S&&P.x<=A&&P.y>=M&&P.y<=_&&P!==o&&P!==c&&Vs(f,g,h,v,p,y,P.x,P.y)&&Gt(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function Wx(s,e,t){let r=s;do{const o=r.prev,l=r.next.next;!Zl(o,l)&&$g(o,r,r.next,l)&&Qo(o,l)&&Qo(l,o)&&(e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ea(r),ea(r.next),r=s=l),r=r.next}while(r!==s);return ts(r)}function jx(s,e,t,r,o,l){let c=s;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&ey(c,f)){let h=Zg(c,f);c=ts(c,c.next),h=ts(h,h.next),Jo(c,e,t,r,o,l,0),Jo(h,e,t,r,o,l,0);return}f=f.next}c=c.next}while(c!==s)}function Xx(s,e,t,r){const o=[];let l,c,f,h,p;for(l=0,c=e.length;l<c;l++)f=e[l]*r,h=l<c-1?e[l+1]*r:s.length,p=Yg(s,f,h,r,!1),p===p.next&&(p.steiner=!0),o.push(Qx(p));for(o.sort(qx),l=0;l<o.length;l++)t=Yx(o[l],t);return t}function qx(s,e){return s.x-e.x}function Yx(s,e){const t=$x(s,e);if(!t)return e;const r=Zg(t,s);return ts(r,r.next),ts(t,t.next)}function $x(s,e){let t=e,r=-1/0,o;const l=s.x,c=s.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const y=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(y<=l&&y>r&&(r=y,o=t.x<t.next.x?t:t.next,y===l))return o}t=t.next}while(t!==e);if(!o)return null;const f=o,h=o.x,p=o.y;let g=1/0,v;t=o;do l>=t.x&&t.x>=h&&l!==t.x&&Vs(c<p?l:r,c,h,p,c<p?r:l,c,t.x,t.y)&&(v=Math.abs(c-t.y)/(l-t.x),Qo(t,s)&&(v<g||v===g&&(t.x>o.x||t.x===o.x&&Zx(o,t)))&&(o=t,g=v)),t=t.next;while(t!==f);return o}function Zx(s,e){return Gt(s.prev,s,e.prev)<0&&Gt(e.next,s,s.next)<0}function Kx(s,e,t,r){let o=s;do o.z===0&&(o.z=id(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,Jx(o)}function Jx(s){let e,t,r,o,l,c,f,h,p=1;do{for(t=s,s=null,l=null,c=0;t;){for(c++,r=t,f=0,e=0;e<p&&(f++,r=r.nextZ,!!r);e++);for(h=p;f>0||h>0&&r;)f!==0&&(h===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,f--):(o=r,r=r.nextZ,h--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;t=r}l.nextZ=null,p*=2}while(c>1);return s}function id(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Qx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Vs(s,e,t,r,o,l,c,f){return(o-c)*(e-f)>=(s-c)*(l-f)&&(s-c)*(r-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(o-c)*(r-f)}function ey(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ty(s,e)&&(Qo(s,e)&&Qo(e,s)&&ny(s,e)&&(Gt(s.prev,s,e.prev)||Gt(s,e.prev,e))||Zl(s,e)&&Gt(s.prev,s,s.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Zl(s,e){return s.x===e.x&&s.y===e.y}function $g(s,e,t,r){const o=Dl(Gt(s,e,t)),l=Dl(Gt(s,e,r)),c=Dl(Gt(t,r,s)),f=Dl(Gt(t,r,e));return!!(o!==l&&c!==f||o===0&&Nl(s,t,e)||l===0&&Nl(s,r,e)||c===0&&Nl(t,s,r)||f===0&&Nl(t,e,r))}function Nl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Dl(s){return s>0?1:s<0?-1:0}function ty(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&$g(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Qo(s,e){return Gt(s.prev,s,s.next)<0?Gt(s,e,s.next)>=0&&Gt(s,s.prev,e)>=0:Gt(s,e,s.prev)<0||Gt(s,s.next,e)<0}function ny(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function Zg(s,e){const t=new rd(s.i,s.x,s.y),r=new rd(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Pm(s,e,t,r){const o=new rd(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function ea(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function rd(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function iy(s,e,t,r){let o=0;for(let l=e,c=t-r;l<t;l+=r)o+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return o}class Zo{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return Zo.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];bm(e),Lm(r,e);let c=e.length;t.forEach(bm);for(let h=0;h<t.length;h++)o.push(c),c+=t[h].length,Lm(r,t[h]);const f=Hx.triangulate(r,o);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function bm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Lm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Kl extends ei{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,g=h+1,v=e/f,y=t/h,S=[],M=[],A=[],_=[];for(let x=0;x<g;x++){const I=x*y-c;for(let N=0;N<p;N++){const P=N*v-l;M.push(P,-I,0),A.push(0,0,1),_.push(N/f),_.push(1-x/h)}}for(let x=0;x<h;x++)for(let I=0;I<f;I++){const N=I+p*x,P=I+p*(x+1),q=I+1+p*(x+1),B=I+1+p*x;S.push(N,P,B),S.push(P,q,B)}this.setIndex(S),this.setAttribute("position",new dn(M,3)),this.setAttribute("normal",new dn(A,3)),this.setAttribute("uv",new dn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ql extends ei{constructor(e=new _d([new Ye(0,.5),new Ye(-.5,-.5),new Ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],o=[],l=[],c=[];let f=0,h=0;if(Array.isArray(e)===!1)p(e);else for(let g=0;g<e.length;g++)p(e[g]),this.addGroup(f,h,g),f+=h,h=0;this.setIndex(r),this.setAttribute("position",new dn(o,3)),this.setAttribute("normal",new dn(l,3)),this.setAttribute("uv",new dn(c,2));function p(g){const v=o.length/3,y=g.extractPoints(t);let S=y.shape;const M=y.holes;Zo.isClockWise(S)===!1&&(S=S.reverse());for(let _=0,x=M.length;_<x;_++){const I=M[_];Zo.isClockWise(I)===!0&&(M[_]=I.reverse())}const A=Zo.triangulateShape(S,M);for(let _=0,x=M.length;_<x;_++){const I=M[_];S=S.concat(I)}for(let _=0,x=S.length;_<x;_++){const I=S[_];o.push(I.x,I.y,0),l.push(0,0,1),c.push(I.x,I.y)}for(let _=0,x=A.length;_<x;_++){const I=A[_],N=I[0]+v,P=I[1]+v,q=I[2]+v;r.push(N,P,q),h+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ry(t,e)}static fromJSON(e,t){const r=[];for(let o=0,l=e.shapes.length;o<l;o++){const c=t[e.shapes[o]];r.push(c)}return new ql(r,e.curveSegments)}}function ry(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const o=s[t];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}class xd extends ei{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+f,Math.PI);let p=0;const g=[],v=new K,y=new K,S=[],M=[],A=[],_=[];for(let x=0;x<=r;x++){const I=[],N=x/r;let P=0;x===0&&c===0?P=.5/t:x===r&&h===Math.PI&&(P=-.5/t);for(let q=0;q<=t;q++){const B=q/t;v.x=-e*Math.cos(o+B*l)*Math.sin(c+N*f),v.y=e*Math.cos(c+N*f),v.z=e*Math.sin(o+B*l)*Math.sin(c+N*f),M.push(v.x,v.y,v.z),y.copy(v).normalize(),A.push(y.x,y.y,y.z),_.push(B+P,1-N),I.push(p++)}g.push(I)}for(let x=0;x<r;x++)for(let I=0;I<t;I++){const N=g[x][I+1],P=g[x][I],q=g[x+1][I],B=g[x+1][I+1];(x!==0||c>0)&&S.push(N,P,B),(x!==r-1||h<Math.PI)&&S.push(P,q,B)}this.setIndex(S),this.setAttribute("position",new dn(M,3)),this.setAttribute("normal",new dn(A,3)),this.setAttribute("uv",new dn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yd extends ei{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const c=[],f=[],h=[],p=[],g=new K,v=new K,y=new K;for(let S=0;S<=r;S++)for(let M=0;M<=o;M++){const A=M/o*l,_=S/r*Math.PI*2;v.x=(e+t*Math.cos(_))*Math.cos(A),v.y=(e+t*Math.cos(_))*Math.sin(A),v.z=t*Math.sin(_),f.push(v.x,v.y,v.z),g.x=e*Math.cos(A),g.y=e*Math.sin(A),y.subVectors(v,g).normalize(),h.push(y.x,y.y,y.z),p.push(M/o),p.push(S/r)}for(let S=1;S<=r;S++)for(let M=1;M<=o;M++){const A=(o+1)*S+M-1,_=(o+1)*(S-1)+M-1,x=(o+1)*(S-1)+M,I=(o+1)*S+M;c.push(A,_,I),c.push(_,x,I)}this.setIndex(c),this.setAttribute("position",new dn(f,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jo extends ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pg,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sy extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oy extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kg extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const lf=new Bt,Nm=new K,Dm=new K;class ay{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Nm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nm),Dm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dm),t.updateMatrixWorld(),lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jg extends Bg{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ly extends ay{constructor(){super(new Jg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Um extends Kg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new ly}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uy extends Kg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cy extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Im(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Im();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Im(){return performance.now()}function Fm(s,e,t,r){const o=dy(r);switch(t){case Mg:return s*e;case Tg:return s*e;case wg:return s*e*2;case Ag:return s*e/o.components*o.byteLength;case dd:return s*e/o.components*o.byteLength;case Cg:return s*e*2/o.components*o.byteLength;case hd:return s*e*2/o.components*o.byteLength;case Eg:return s*e*3/o.components*o.byteLength;case hi:return s*e*4/o.components*o.byteLength;case pd:return s*e*4/o.components*o.byteLength;case Ol:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bf:case Nf:return Math.max(s,16)*Math.max(e,8)/4;case Pf:case Lf:return Math.max(s,8)*Math.max(e,8)/2;case Df:case Uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case If:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case kf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case $f:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Hl:case Zf:case Kf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rg:case Jf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qf:case ed:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dy(s){switch(s){case Wi:case xg:return{byteLength:1,components:1};case Ko:case yg:case ta:return{byteLength:2,components:1};case cd:case fd:return{byteLength:2,components:4};case Qr:case ud:case Hi:return{byteLength:4,components:1};case Sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qg(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function hy(s){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,v=p.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,p){const g=h.array,v=h.updateRanges;if(s.bindBuffer(p,f),v.length===0)s.bufferSubData(p,0,g);else{v.sort((S,M)=>S.start-M.start);let y=0;for(let S=1;S<v.length;S++){const M=v[y],A=v[S];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++y,v[y]=A)}v.length=y+1;for(let S=0,M=v.length;S<M;S++){const A=v[S];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,my=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ay=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ry=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ky=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",jy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ES=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,US=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ZS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,JS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,MM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:py,alphahash_pars_fragment:my,alphamap_fragment:gy,alphamap_pars_fragment:vy,alphatest_fragment:_y,alphatest_pars_fragment:xy,aomap_fragment:yy,aomap_pars_fragment:Sy,batching_pars_vertex:My,batching_vertex:Ey,begin_vertex:Ty,beginnormal_vertex:wy,bsdfs:Ay,iridescence_fragment:Cy,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Py,clipping_planes_pars_fragment:by,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Ny,color_fragment:Dy,color_pars_fragment:Uy,color_pars_vertex:Iy,color_vertex:Fy,common:Oy,cube_uv_reflection_fragment:ky,defaultnormal_vertex:zy,displacementmap_pars_vertex:By,displacementmap_vertex:Hy,emissivemap_fragment:Vy,emissivemap_pars_fragment:Gy,colorspace_fragment:Wy,colorspace_pars_fragment:jy,envmap_fragment:Xy,envmap_common_pars_fragment:qy,envmap_pars_fragment:Yy,envmap_pars_vertex:$y,envmap_physical_pars_fragment:oS,envmap_vertex:Zy,fog_vertex:Ky,fog_pars_vertex:Jy,fog_fragment:Qy,fog_pars_fragment:eS,gradientmap_pars_fragment:tS,lightmap_pars_fragment:nS,lights_lambert_fragment:iS,lights_lambert_pars_fragment:rS,lights_pars_begin:sS,lights_toon_fragment:aS,lights_toon_pars_fragment:lS,lights_phong_fragment:uS,lights_phong_pars_fragment:cS,lights_physical_fragment:fS,lights_physical_pars_fragment:dS,lights_fragment_begin:hS,lights_fragment_maps:pS,lights_fragment_end:mS,logdepthbuf_fragment:gS,logdepthbuf_pars_fragment:vS,logdepthbuf_pars_vertex:_S,logdepthbuf_vertex:xS,map_fragment:yS,map_pars_fragment:SS,map_particle_fragment:MS,map_particle_pars_fragment:ES,metalnessmap_fragment:TS,metalnessmap_pars_fragment:wS,morphinstance_vertex:AS,morphcolor_vertex:CS,morphnormal_vertex:RS,morphtarget_pars_vertex:PS,morphtarget_vertex:bS,normal_fragment_begin:LS,normal_fragment_maps:NS,normal_pars_fragment:DS,normal_pars_vertex:US,normal_vertex:IS,normalmap_pars_fragment:FS,clearcoat_normal_fragment_begin:OS,clearcoat_normal_fragment_maps:kS,clearcoat_pars_fragment:zS,iridescence_pars_fragment:BS,opaque_fragment:HS,packing:VS,premultiplied_alpha_fragment:GS,project_vertex:WS,dithering_fragment:jS,dithering_pars_fragment:XS,roughnessmap_fragment:qS,roughnessmap_pars_fragment:YS,shadowmap_pars_fragment:$S,shadowmap_pars_vertex:ZS,shadowmap_vertex:KS,shadowmask_pars_fragment:JS,skinbase_vertex:QS,skinning_pars_vertex:eM,skinning_vertex:tM,skinnormal_vertex:nM,specularmap_fragment:iM,specularmap_pars_fragment:rM,tonemapping_fragment:sM,tonemapping_pars_fragment:oM,transmission_fragment:aM,transmission_pars_fragment:lM,uv_pars_fragment:uM,uv_pars_vertex:cM,uv_vertex:fM,worldpos_vertex:dM,background_vert:hM,background_frag:pM,backgroundCube_vert:mM,backgroundCube_frag:gM,cube_vert:vM,cube_frag:_M,depth_vert:xM,depth_frag:yM,distanceRGBA_vert:SM,distanceRGBA_frag:MM,equirect_vert:EM,equirect_frag:TM,linedashed_vert:wM,linedashed_frag:AM,meshbasic_vert:CM,meshbasic_frag:RM,meshlambert_vert:PM,meshlambert_frag:bM,meshmatcap_vert:LM,meshmatcap_frag:NM,meshnormal_vert:DM,meshnormal_frag:UM,meshphong_vert:IM,meshphong_frag:FM,meshphysical_vert:OM,meshphysical_frag:kM,meshtoon_vert:zM,meshtoon_frag:BM,points_vert:HM,points_frag:VM,shadow_vert:GM,shadow_frag:WM,sprite_vert:jM,sprite_frag:XM},Pe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},yi={basic:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:An([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:An([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:An([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:An([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:An([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:An([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:An([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:An([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:An([Pe.common,Pe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:An([Pe.lights,Pe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};yi.physical={uniforms:An([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Ul={r:0,b:0,g:0},jr=new Ei,qM=new Bt;function YM(s,e,t,r,o,l,c){const f=new Ct(0);let h=l===!0?0:1,p,g,v=null,y=0,S=null;function M(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?t:e).get(P)),P}function A(N){let P=!1;const q=M(N);q===null?x(f,h):q&&q.isColor&&(x(q,1),P=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(N,P){const q=M(P);q&&(q.isCubeTexture||q.mapping===Yl)?(g===void 0&&(g=new In(new so(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:eo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,k,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),jr.copy(P.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),g.material.uniforms.envMap.value=q,g.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(qM.makeRotationFromEuler(jr)),g.material.toneMapped=At.getTransfer(q.colorSpace)!==Nt,(v!==q||y!==q.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=q,y=q.version,S=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):q&&q.isTexture&&(p===void 0&&(p=new In(new Kl(2,2),new Er({name:"BackgroundMaterial",uniforms:eo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=q,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=At.getTransfer(q.colorSpace)!==Nt,q.matrixAutoUpdate===!0&&q.updateMatrix(),p.material.uniforms.uvTransform.value.copy(q.matrix),(v!==q||y!==q.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=q,y=q.version,S=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,P){N.getRGB(Ul,zg(s)),r.buffers.color.setClear(Ul.r,Ul.g,Ul.b,P,c)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(N,P=1){f.set(N),h=P,x(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,x(f,h)},render:A,addToRenderList:_,dispose:I}}function $M(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,c=!1;function f(R,z,le,te,pe){let ge=!1;const ce=v(te,le,z);l!==ce&&(l=ce,p(l.object)),ge=S(R,te,le,pe),ge&&M(R,te,le,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(ge||c)&&(c=!1,P(R,z,le,te),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function h(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function v(R,z,le){const te=le.wireframe===!0;let pe=r[R.id];pe===void 0&&(pe={},r[R.id]=pe);let ge=pe[z.id];ge===void 0&&(ge={},pe[z.id]=ge);let ce=ge[te];return ce===void 0&&(ce=y(h()),ge[te]=ce),ce}function y(R){const z=[],le=[],te=[];for(let pe=0;pe<t;pe++)z[pe]=0,le[pe]=0,te[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:le,attributeDivisors:te,object:R,attributes:{},index:null}}function S(R,z,le,te){const pe=l.attributes,ge=z.attributes;let ce=0;const de=le.getAttributes();for(const V in de)if(de[V].location>=0){const oe=pe[V];let F=ge[V];if(F===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),oe===void 0||oe.attribute!==F||F&&oe.data!==F.data)return!0;ce++}return l.attributesNum!==ce||l.index!==te}function M(R,z,le,te){const pe={},ge=z.attributes;let ce=0;const de=le.getAttributes();for(const V in de)if(de[V].location>=0){let oe=ge[V];oe===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const F={};F.attribute=oe,oe&&oe.data&&(F.data=oe.data),pe[V]=F,ce++}l.attributes=pe,l.attributesNum=ce,l.index=te}function A(){const R=l.newAttributes;for(let z=0,le=R.length;z<le;z++)R[z]=0}function _(R){x(R,0)}function x(R,z){const le=l.newAttributes,te=l.enabledAttributes,pe=l.attributeDivisors;le[R]=1,te[R]===0&&(s.enableVertexAttribArray(R),te[R]=1),pe[R]!==z&&(s.vertexAttribDivisor(R,z),pe[R]=z)}function I(){const R=l.newAttributes,z=l.enabledAttributes;for(let le=0,te=z.length;le<te;le++)z[le]!==R[le]&&(s.disableVertexAttribArray(le),z[le]=0)}function N(R,z,le,te,pe,ge,ce){ce===!0?s.vertexAttribIPointer(R,z,le,pe,ge):s.vertexAttribPointer(R,z,le,te,pe,ge)}function P(R,z,le,te){A();const pe=te.attributes,ge=le.getAttributes(),ce=z.defaultAttributeValues;for(const de in ge){const V=ge[de];if(V.location>=0){let fe=pe[de];if(fe===void 0&&(de==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),de==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const oe=fe.normalized,F=fe.itemSize,se=e.get(fe);if(se===void 0)continue;const Ne=se.buffer,ee=se.type,he=se.bytesPerElement,Se=ee===s.INT||ee===s.UNSIGNED_INT||fe.gpuType===ud;if(fe.isInterleavedBufferAttribute){const _e=fe.data,we=_e.stride,De=fe.offset;if(_e.isInstancedInterleavedBuffer){for(let $e=0;$e<V.locationSize;$e++)x(V.location+$e,_e.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let $e=0;$e<V.locationSize;$e++)_(V.location+$e);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let $e=0;$e<V.locationSize;$e++)N(V.location+$e,F/V.locationSize,ee,oe,we*he,(De+F/V.locationSize*$e)*he,Se)}else{if(fe.isInstancedBufferAttribute){for(let _e=0;_e<V.locationSize;_e++)x(V.location+_e,fe.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let _e=0;_e<V.locationSize;_e++)_(V.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let _e=0;_e<V.locationSize;_e++)N(V.location+_e,F/V.locationSize,ee,oe,F*he,F/V.locationSize*_e*he,Se)}}else if(ce!==void 0){const oe=ce[de];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(V.location,oe);break;case 3:s.vertexAttrib3fv(V.location,oe);break;case 4:s.vertexAttrib4fv(V.location,oe);break;default:s.vertexAttrib1fv(V.location,oe)}}}}I()}function q(){$();for(const R in r){const z=r[R];for(const le in z){const te=z[le];for(const pe in te)g(te[pe].object),delete te[pe];delete z[le]}delete r[R]}}function B(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const le in z){const te=z[le];for(const pe in te)g(te[pe].object),delete te[pe];delete z[le]}delete r[R.id]}function k(R){for(const z in r){const le=r[z];if(le[R.id]===void 0)continue;const te=le[R.id];for(const pe in te)g(te[pe].object),delete te[pe];delete le[R.id]}}function $(){L(),c=!0,l!==o&&(l=o,p(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:$,resetDefaultState:L,dispose:q,releaseStatesOfGeometry:B,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:_,disableUnusedAttributes:I}}function ZM(s,e,t){let r;function o(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function c(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),t.update(g,r,v))}function f(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let S=0;for(let M=0;M<v;M++)S+=g[M];t.update(S,r,1)}function h(p,g,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)c(p[M],g[M],y[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,v);let M=0;for(let A=0;A<v;A++)M+=g[A]*y[A];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function KM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(k){return!(k!==hi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const $=k===ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Wi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Hi&&!$)}function h(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=M>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:I,maxVaryings:N,maxFragmentUniforms:P,vertexTextures:q,maxSamples:B}}function JM(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new qr,f=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||o;return o=y,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=g(v,y,0)},this.setState=function(v,y,S){const M=v.clippingPlanes,A=v.clipIntersection,_=v.clipShadows,x=s.get(v);if(!o||M===null||M.length===0||l&&!_)l?g(null):p();else{const I=l?0:r,N=I*4;let P=x.clippingState||null;h.value=P,P=g(M,y,N,S);for(let q=0;q!==N;++q)P[q]=t[q];x.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,y,S,M){const A=v!==null?v.length:0;let _=null;if(A!==0){if(_=h.value,M!==!0||_===null){const x=S+A*4,I=y.matrixWorldInverse;f.getNormalMatrix(I),(_===null||_.length<x)&&(_=new Float32Array(x));for(let N=0,P=S;N!==A;++N,P+=4)c.copy(v[N]).applyMatrix4(I,f),c.normal.toArray(_,P),_[P+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,_}}function QM(s){let e=new WeakMap;function t(c,f){return f===wf?c.mapping=$s:f===Af&&(c.mapping=Zs),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===wf||f===Af)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new Ex(h.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Gs=4,Om=[.125,.215,.35,.446,.526,.582],Zr=20,uf=new Jg,km=new Ct;let cf=null,ff=0,df=0,hf=!1;const Yr=(1+Math.sqrt(5))/2,zs=1/Yr,zm=[new K(-Yr,zs,0),new K(Yr,zs,0),new K(-zs,0,Yr),new K(zs,0,Yr),new K(0,Yr,-zs),new K(0,Yr,zs),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,ff,df),this._renderer.xr.enabled=hf,e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:ta,format:hi,colorSpace:Qs,depthBuffer:!1},o=Hm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eE(l)),this._blurMaterial=tE(l,e,t)}return o}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,uf)}_sceneToCubeUV(e,t,r,o){const f=new Qn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(km),g.toneMapping=Sr,g.autoClear=!1;const S=new Xl({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),M=new In(new so,S);let A=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,A=!0):(S.color.copy(km),A=!0);for(let x=0;x<6;x++){const I=x%3;I===0?(f.up.set(0,h[x],0),f.lookAt(p[x],0,0)):I===1?(f.up.set(0,0,h[x]),f.lookAt(0,p[x],0)):(f.up.set(0,h[x],0),f.lookAt(0,0,p[x]));const N=this._cubeSize;Il(o,I*N,x>2?N:0,N,N),g.setRenderTarget(o),A&&g.render(M,f),g.render(e,f)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===$s||e.mapping===Zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new In(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Il(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,uf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=zm[(o-l-1)%zm.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new In(this._lodPlanes[o],p),y=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Zr-1),A=l/M,_=isFinite(l)?1+Math.floor(g*A):Zr;_>Zr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Zr}`);const x=[];let I=0;for(let k=0;k<Zr;++k){const $=k/A,L=Math.exp(-$*$/2);x.push(L),k===0?I+=L:k<_&&(I+=2*L)}for(let k=0;k<x.length;k++)x[k]=x[k]/I;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=x,y.latitudinal.value=c==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:N}=this;y.dTheta.value=M,y.mipInt.value=N-r;const P=this._sizeLods[o],q=3*P*(o>N-Gs?o-N+Gs:0),B=4*(this._cubeSize-P);Il(t,q,B,3*P,2*P),h.setRenderTarget(t),h.render(v,uf)}}function eE(s){const e=[],t=[],r=[];let o=s;const l=s-Gs+1+Om.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let h=1/f;c>s-Gs?h=Om[c-s+Gs-1]:c===0&&(h=0),r.push(h);const p=1/(f-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,M=6,A=3,_=2,x=1,I=new Float32Array(A*M*S),N=new Float32Array(_*M*S),P=new Float32Array(x*M*S);for(let B=0;B<S;B++){const k=B%3*2/3-1,$=B>2?0:-1,L=[k,$,0,k+2/3,$,0,k+2/3,$+1,0,k,$,0,k+2/3,$+1,0,k,$+1,0];I.set(L,A*M*B),N.set(y,_*M*B);const R=[B,B,B,B,B,B];P.set(R,x*M*B)}const q=new ei;q.setAttribute("position",new Mi(I,A)),q.setAttribute("uv",new Mi(N,_)),q.setAttribute("faceIndex",new Mi(P,x)),e.push(q),o>Gs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Hm(s,e,t){const r=new es(s,e,t);return r.texture.mapping=Yl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Il(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function tE(s,e,t){const r=new Float32Array(Zr),o=new K(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Vm(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Gm(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Sd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nE(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===wf||h===Af,g=h===$s||h===Zs;if(p||g){let v=e.get(f);const y=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return t===null&&(t=new Bm(s)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&o(S)?(t===null&&(t=new Bm(s)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function iE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Hs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function rE(s,e,t,r){const o={},l=new WeakMap;function c(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const M in y.attributes)e.remove(y.attributes[M]);y.removeEventListener("dispose",c),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function f(v,y){return o[y.id]===!0||(y.addEventListener("dispose",c),o[y.id]=!0,t.memory.geometries++),y}function h(v){const y=v.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function p(v){const y=[],S=v.index,M=v.attributes.position;let A=0;if(S!==null){const I=S.array;A=S.version;for(let N=0,P=I.length;N<P;N+=3){const q=I[N+0],B=I[N+1],k=I[N+2];y.push(q,B,B,k,k,q)}}else if(M!==void 0){const I=M.array;A=M.version;for(let N=0,P=I.length/3-1;N<P;N+=3){const q=N+0,B=N+1,k=N+2;y.push(q,B,B,k,k,q)}}else return;const _=new(Lg(y)?kg:Og)(y,1);_.version=A;const x=l.get(v);x&&e.remove(x),l.set(v,_)}function g(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function sE(s,e,t){let r;function o(y){r=y}let l,c;function f(y){l=y.type,c=y.bytesPerElement}function h(y,S){s.drawElements(r,S,l,y*c),t.update(S,r,1)}function p(y,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,y*c,M),t.update(S,r,M))}function g(y,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,M);let _=0;for(let x=0;x<M;x++)_+=S[x];t.update(_,r,1)}function v(y,S,M,A){if(M===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<y.length;x++)p(y[x]/c,S[x],A[x]);else{_.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,A,0,M);let x=0;for(let I=0;I<M;I++)x+=S[I]*A[I];t.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function oE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function aE(s,e,t){const r=new WeakMap,o=new Xt;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let y=r.get(f);if(y===void 0||y.count!==v){let R=function(){$.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var S=R;y!==void 0&&y.texture.dispose();const M=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let P=0;M===!0&&(P=1),A===!0&&(P=2),_===!0&&(P=3);let q=f.attributes.position.count*P,B=1;q>e.maxTextureSize&&(B=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const k=new Float32Array(q*B*4*v),$=new Dg(k,q,B,v);$.type=Hi,$.needsUpdate=!0;const L=P*4;for(let z=0;z<v;z++){const le=x[z],te=I[z],pe=N[z],ge=q*B*4*z;for(let ce=0;ce<le.count;ce++){const de=ce*L;M===!0&&(o.fromBufferAttribute(le,ce),k[ge+de+0]=o.x,k[ge+de+1]=o.y,k[ge+de+2]=o.z,k[ge+de+3]=0),A===!0&&(o.fromBufferAttribute(te,ce),k[ge+de+4]=o.x,k[ge+de+5]=o.y,k[ge+de+6]=o.z,k[ge+de+7]=0),_===!0&&(o.fromBufferAttribute(pe,ce),k[ge+de+8]=o.x,k[ge+de+9]=o.y,k[ge+de+10]=o.z,k[ge+de+11]=pe.itemSize===4?o.w:1)}}y={count:v,texture:$,size:new Ye(q,B)},r.set(f,y),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let _=0;_<p.length;_++)M+=p[_];const A=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function lE(s,e,t,r){let o=new WeakMap;function l(h){const p=r.render.frame,g=h.geometry,v=e.get(h,g);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return v}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const ev=new On,Wm=new Gg(1,1),tv=new Dg,nv=new ax,iv=new Hg,jm=[],Xm=[],qm=new Float32Array(16),Ym=new Float32Array(9),$m=new Float32Array(4);function oo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=jm[o];if(l===void 0&&(l=new Float32Array(o),jm[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Jl(s,e){let t=Xm[e];t===void 0&&(t=new Int32Array(e),Xm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function uE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function cE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function fE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function dE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function hE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;$m.set(r),s.uniformMatrix2fv(this.addr,!1,$m),tn(t,r)}}function pE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Ym.set(r),s.uniformMatrix3fv(this.addr,!1,Ym),tn(t,r)}}function mE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;qm.set(r),s.uniformMatrix4fv(this.addr,!1,qm),tn(t,r)}}function gE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function _E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function xE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function yE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function SE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function ME(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function EE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function TE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Wm.compareFunction=bg,l=Wm):l=ev,t.setTexture2D(e||l,o)}function wE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||nv,o)}function AE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||iv,o)}function CE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||tv,o)}function RE(s){switch(s){case 5126:return uE;case 35664:return cE;case 35665:return fE;case 35666:return dE;case 35674:return hE;case 35675:return pE;case 35676:return mE;case 5124:case 35670:return gE;case 35667:case 35671:return vE;case 35668:case 35672:return _E;case 35669:case 35673:return xE;case 5125:return yE;case 36294:return SE;case 36295:return ME;case 36296:return EE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return AE;case 36289:case 36303:case 36311:case 36292:return CE}}function PE(s,e){s.uniform1fv(this.addr,e)}function bE(s,e){const t=oo(e,this.size,2);s.uniform2fv(this.addr,t)}function LE(s,e){const t=oo(e,this.size,3);s.uniform3fv(this.addr,t)}function NE(s,e){const t=oo(e,this.size,4);s.uniform4fv(this.addr,t)}function DE(s,e){const t=oo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function UE(s,e){const t=oo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function IE(s,e){const t=oo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function FE(s,e){s.uniform1iv(this.addr,e)}function OE(s,e){s.uniform2iv(this.addr,e)}function kE(s,e){s.uniform3iv(this.addr,e)}function zE(s,e){s.uniform4iv(this.addr,e)}function BE(s,e){s.uniform1uiv(this.addr,e)}function HE(s,e){s.uniform2uiv(this.addr,e)}function VE(s,e){s.uniform3uiv(this.addr,e)}function GE(s,e){s.uniform4uiv(this.addr,e)}function WE(s,e,t){const r=this.cache,o=e.length,l=Jl(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||ev,l[c])}function jE(s,e,t){const r=this.cache,o=e.length,l=Jl(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||nv,l[c])}function XE(s,e,t){const r=this.cache,o=e.length,l=Jl(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||iv,l[c])}function qE(s,e,t){const r=this.cache,o=e.length,l=Jl(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||tv,l[c])}function YE(s){switch(s){case 5126:return PE;case 35664:return bE;case 35665:return LE;case 35666:return NE;case 35674:return DE;case 35675:return UE;case 35676:return IE;case 5124:case 35670:return FE;case 35667:case 35671:return OE;case 35668:case 35672:return kE;case 35669:case 35673:return zE;case 5125:return BE;case 36294:return HE;case 36295:return VE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return XE;case 36289:case 36303:case 36311:case 36292:return qE}}class $E{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=RE(t.type)}}class ZE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YE(t.type)}}class KE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Zm(s,e){s.seq.push(e),s.map[e.id]=e}function JE(s,e,t){const r=s.name,o=r.length;for(pf.lastIndex=0;;){const l=pf.exec(r),c=pf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){Zm(t,p===void 0?new $E(f,s,e):new ZE(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new KE(f),Zm(t,v)),t=v}}}class Vl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);JE(l,c,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Km(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const QE=37297;let e1=0;function t1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Jm=new lt;function n1(s){At._getMatrix(Jm,At.workingColorSpace,s);const e=`mat3( ${Jm.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case Gl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Qm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+t1(s.getShaderSource(e),c)}else return o}function i1(s,e){const t=n1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r1(s,e){let t;switch(e){case D0:t="Linear";break;case U0:t="Reinhard";break;case I0:t="Cineon";break;case F0:t="ACESFilmic";break;case k0:t="AgX";break;case z0:t="Neutral";break;case O0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fl=new K;function s1(){At.getLuminanceCoefficients(Fl);const s=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function a1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function l1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Xo(s){return s!==""}function eg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(s){return s.replace(u1,f1)}const c1=new Map;function f1(s,e){let t=ct[e];if(t===void 0){const r=c1.get(e);if(r!==void 0)t=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return sd(t)}const d1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ng(s){return s.replace(d1,h1)}function h1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function ig(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===d0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function m1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $s:case Zs:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function v1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vg:e="ENVMAP_BLENDING_MULTIPLY";break;case L0:e="ENVMAP_BLENDING_MIX";break;case N0:e="ENVMAP_BLENDING_ADD";break}return e}function _1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function x1(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=p1(t),p=m1(t),g=g1(t),v=v1(t),y=_1(t),S=o1(t),M=a1(l),A=o.createProgram();let _,x,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xo).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xo).join(`
`),x.length>0&&(x+=`
`)):(_=[ig(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),x=[ig(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sr?"#define TONE_MAPPING":"",t.toneMapping!==Sr?ct.tonemapping_pars_fragment:"",t.toneMapping!==Sr?r1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,i1("linearToOutputTexel",t.outputColorSpace),s1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),c=sd(c),c=eg(c,t),c=tg(c,t),f=sd(f),f=eg(f,t),f=tg(f,t),c=ng(c),f=ng(f),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=I+_+c,P=I+x+f,q=Km(o,o.VERTEX_SHADER,N),B=Km(o,o.FRAGMENT_SHADER,P);o.attachShader(A,q),o.attachShader(A,B),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function k(z){if(s.debug.checkShaderErrors){const le=o.getProgramInfoLog(A).trim(),te=o.getShaderInfoLog(q).trim(),pe=o.getShaderInfoLog(B).trim();let ge=!0,ce=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(ge=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,q,B);else{const de=Qm(o,q,"vertex"),V=Qm(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+le+`
`+de+`
`+V)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(te===""||pe==="")&&(ce=!1);ce&&(z.diagnostics={runnable:ge,programLog:le,vertexShader:{log:te,prefix:_},fragmentShader:{log:pe,prefix:x}})}o.deleteShader(q),o.deleteShader(B),$=new Vl(o,A),L=l1(o,A)}let $;this.getUniforms=function(){return $===void 0&&k(this),$};let L;this.getAttributes=function(){return L===void 0&&k(this),L};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(A,QE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=q,this.fragmentShader=B,this}let y1=0;class S1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new M1(e),t.set(e,r)),r}}class M1{constructor(e){this.id=y1++,this.code=e,this.usedTimes=0}}function E1(s,e,t,r,o,l,c){const f=new Ig,h=new S1,p=new Set,g=[],v=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(L){return p.add(L),L===0?"uv":`uv${L}`}function _(L,R,z,le,te){const pe=le.fog,ge=te.geometry,ce=L.isMeshStandardMaterial?le.environment:null,de=(L.isMeshStandardMaterial?t:e).get(L.envMap||ce),V=de&&de.mapping===Yl?de.image.height:null,fe=M[L.type];L.precision!==null&&(S=o.getMaxPrecision(L.precision),S!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const oe=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,F=oe!==void 0?oe.length:0;let se=0;ge.morphAttributes.position!==void 0&&(se=1),ge.morphAttributes.normal!==void 0&&(se=2),ge.morphAttributes.color!==void 0&&(se=3);let Ne,ee,he,Se;if(fe){const yt=yi[fe];Ne=yt.vertexShader,ee=yt.fragmentShader}else Ne=L.vertexShader,ee=L.fragmentShader,h.update(L),he=h.getVertexShaderID(L),Se=h.getFragmentShaderID(L);const _e=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),De=te.isInstancedMesh===!0,$e=te.isBatchedMesh===!0,Rt=!!L.map,ft=!!L.matcap,bt=!!de,H=!!L.aoMap,nn=!!L.lightMap,ut=!!L.bumpMap,at=!!L.normalMap,Xe=!!L.displacementMap,Mt=!!L.emissiveMap,Ve=!!L.metalnessMap,D=!!L.roughnessMap,w=L.anisotropy>0,b=L.clearcoat>0,j=L.dispersion>0,Z=L.iridescence>0,ue=L.sheen>0,Ge=L.transmission>0,Ae=w&&!!L.anisotropyMap,Fe=b&&!!L.clearcoatMap,dt=b&&!!L.clearcoatNormalMap,Ee=b&&!!L.clearcoatRoughnessMap,ze=Z&&!!L.iridescenceMap,Ke=Z&&!!L.iridescenceThicknessMap,et=ue&&!!L.sheenColorMap,Be=ue&&!!L.sheenRoughnessMap,ht=!!L.specularMap,rt=!!L.specularColorMap,Pt=!!L.specularIntensityMap,X=Ge&&!!L.transmissionMap,Ce=Ge&&!!L.thicknessMap,ae=!!L.gradientMap,me=!!L.alphaMap,Le=L.alphaTest>0,be=!!L.alphaHash,st=!!L.extensions;let Ut=Sr;L.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Kt={shaderID:fe,shaderType:L.type,shaderName:L.name,vertexShader:Ne,fragmentShader:ee,defines:L.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:$e,batchingColor:$e&&te._colorsTexture!==null,instancing:De,instancingColor:De&&te.instanceColor!==null,instancingMorph:De&&te.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Qs,alphaToCoverage:!!L.alphaToCoverage,map:Rt,matcap:ft,envMap:bt,envMapMode:bt&&de.mapping,envMapCubeUVHeight:V,aoMap:H,lightMap:nn,bumpMap:ut,normalMap:at,displacementMap:y&&Xe,emissiveMap:Mt,normalMapObjectSpace:at&&L.normalMapType===G0,normalMapTangentSpace:at&&L.normalMapType===Pg,metalnessMap:Ve,roughnessMap:D,anisotropy:w,anisotropyMap:Ae,clearcoat:b,clearcoatMap:Fe,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ee,dispersion:j,iridescence:Z,iridescenceMap:ze,iridescenceThicknessMap:Ke,sheen:ue,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:ht,specularColorMap:rt,specularIntensityMap:Pt,transmission:Ge,transmissionMap:X,thicknessMap:Ce,gradientMap:ae,opaque:L.transparent===!1&&L.blending===Ws&&L.alphaToCoverage===!1,alphaMap:me,alphaTest:Le,alphaHash:be,combine:L.combine,mapUv:Rt&&A(L.map.channel),aoMapUv:H&&A(L.aoMap.channel),lightMapUv:nn&&A(L.lightMap.channel),bumpMapUv:ut&&A(L.bumpMap.channel),normalMapUv:at&&A(L.normalMap.channel),displacementMapUv:Xe&&A(L.displacementMap.channel),emissiveMapUv:Mt&&A(L.emissiveMap.channel),metalnessMapUv:Ve&&A(L.metalnessMap.channel),roughnessMapUv:D&&A(L.roughnessMap.channel),anisotropyMapUv:Ae&&A(L.anisotropyMap.channel),clearcoatMapUv:Fe&&A(L.clearcoatMap.channel),clearcoatNormalMapUv:dt&&A(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&A(L.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&A(L.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&A(L.iridescenceThicknessMap.channel),sheenColorMapUv:et&&A(L.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(L.sheenRoughnessMap.channel),specularMapUv:ht&&A(L.specularMap.channel),specularColorMapUv:rt&&A(L.specularColorMap.channel),specularIntensityMapUv:Pt&&A(L.specularIntensityMap.channel),transmissionMapUv:X&&A(L.transmissionMap.channel),thicknessMapUv:Ce&&A(L.thicknessMap.channel),alphaMapUv:me&&A(L.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(at||w),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ge.attributes.uv&&(Rt||me),fog:!!pe,useFog:L.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:te.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Rt&&L.map.isVideoTexture===!0&&At.getTransfer(L.map.colorSpace)===Nt,decodeVideoTextureEmissive:Mt&&L.emissiveMap.isVideoTexture===!0&&At.getTransfer(L.emissiveMap.colorSpace)===Nt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===fi,flipSided:L.side===Fn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:st&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&L.extensions.multiDraw===!0||$e)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Kt.vertexUv1s=p.has(1),Kt.vertexUv2s=p.has(2),Kt.vertexUv3s=p.has(3),p.clear(),Kt}function x(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const z in L.defines)R.push(z),R.push(L.defines[z]);return L.isRawShaderMaterial===!1&&(I(R,L),N(R,L),R.push(s.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function I(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function N(L,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),L.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),L.push(f.mask)}function P(L){const R=M[L.type];let z;if(R){const le=yi[R];z=xx.clone(le.uniforms)}else z=L.uniforms;return z}function q(L,R){let z;for(let le=0,te=g.length;le<te;le++){const pe=g[le];if(pe.cacheKey===R){z=pe,++z.usedTimes;break}}return z===void 0&&(z=new x1(s,R,L,l),g.push(z)),z}function B(L){if(--L.usedTimes===0){const R=g.indexOf(L);g[R]=g[g.length-1],g.pop(),L.destroy()}}function k(L){h.remove(L)}function $(){h.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:P,acquireProgram:q,releaseProgram:B,releaseShaderCache:k,programs:g,dispose:$}}function T1(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function w1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(v,y,S,M,A,_){let x=s[e];return x===void 0?(x={id:v.id,object:v,geometry:y,material:S,groupOrder:M,renderOrder:v.renderOrder,z:A,group:_},s[e]=x):(x.id=v.id,x.object=v,x.geometry=y,x.material=S,x.groupOrder=M,x.renderOrder=v.renderOrder,x.z=A,x.group=_),e++,x}function f(v,y,S,M,A,_){const x=c(v,y,S,M,A,_);S.transmission>0?r.push(x):S.transparent===!0?o.push(x):t.push(x)}function h(v,y,S,M,A,_){const x=c(v,y,S,M,A,_);S.transmission>0?r.unshift(x):S.transparent===!0?o.unshift(x):t.unshift(x)}function p(v,y){t.length>1&&t.sort(v||w1),r.length>1&&r.sort(y||rg),o.length>1&&o.sort(y||rg)}function g(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:h,finish:g,sort:p}}function A1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new sg,s.set(r,[c])):o>=l.length?(c=new sg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function C1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Ct};break;case"SpotLight":t={position:new K,direction:new K,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function R1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let P1=0;function b1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function L1(s){const e=new C1,t=R1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const o=new K,l=new Bt,c=new Bt;function f(p){let g=0,v=0,y=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,M=0,A=0,_=0,x=0,I=0,N=0,P=0,q=0,B=0,k=0;p.sort(b1);for(let L=0,R=p.length;L<R;L++){const z=p[L],le=z.color,te=z.intensity,pe=z.distance,ge=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=le.r*te,v+=le.g*te,y+=le.b*te;else if(z.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(z.sh.coefficients[ce],te);k++}else if(z.isDirectionalLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const de=z.shadow,V=t.get(z);V.shadowIntensity=de.intensity,V.shadowBias=de.bias,V.shadowNormalBias=de.normalBias,V.shadowRadius=de.radius,V.shadowMapSize=de.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=ge,r.directionalShadowMatrix[S]=z.shadow.matrix,I++}r.directional[S]=ce,S++}else if(z.isSpotLight){const ce=e.get(z);ce.position.setFromMatrixPosition(z.matrixWorld),ce.color.copy(le).multiplyScalar(te),ce.distance=pe,ce.coneCos=Math.cos(z.angle),ce.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ce.decay=z.decay,r.spot[A]=ce;const de=z.shadow;if(z.map&&(r.spotLightMap[q]=z.map,q++,de.updateMatrices(z),z.castShadow&&B++),r.spotLightMatrix[A]=de.matrix,z.castShadow){const V=t.get(z);V.shadowIntensity=de.intensity,V.shadowBias=de.bias,V.shadowNormalBias=de.normalBias,V.shadowRadius=de.radius,V.shadowMapSize=de.mapSize,r.spotShadow[A]=V,r.spotShadowMap[A]=ge,P++}A++}else if(z.isRectAreaLight){const ce=e.get(z);ce.color.copy(le).multiplyScalar(te),ce.halfWidth.set(z.width*.5,0,0),ce.halfHeight.set(0,z.height*.5,0),r.rectArea[_]=ce,_++}else if(z.isPointLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),ce.distance=z.distance,ce.decay=z.decay,z.castShadow){const de=z.shadow,V=t.get(z);V.shadowIntensity=de.intensity,V.shadowBias=de.bias,V.shadowNormalBias=de.normalBias,V.shadowRadius=de.radius,V.shadowMapSize=de.mapSize,V.shadowCameraNear=de.camera.near,V.shadowCameraFar=de.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=ge,r.pointShadowMatrix[M]=z.shadow.matrix,N++}r.point[M]=ce,M++}else if(z.isHemisphereLight){const ce=e.get(z);ce.skyColor.copy(z.color).multiplyScalar(te),ce.groundColor.copy(z.groundColor).multiplyScalar(te),r.hemi[x]=ce,x++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=y;const $=r.hash;($.directionalLength!==S||$.pointLength!==M||$.spotLength!==A||$.rectAreaLength!==_||$.hemiLength!==x||$.numDirectionalShadows!==I||$.numPointShadows!==N||$.numSpotShadows!==P||$.numSpotMaps!==q||$.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=_,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+q-B,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=k,$.directionalLength=S,$.pointLength=M,$.spotLength=A,$.rectAreaLength=_,$.hemiLength=x,$.numDirectionalShadows=I,$.numPointShadows=N,$.numSpotShadows=P,$.numSpotMaps=q,$.numLightProbes=k,r.version=P1++)}function h(p,g){let v=0,y=0,S=0,M=0,A=0;const _=g.matrixWorldInverse;for(let x=0,I=p.length;x<I;x++){const N=p[x];if(N.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),v++}else if(N.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),S++}else if(N.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(_),c.identity(),l.copy(N.matrixWorld),l.premultiply(_),c.extractRotation(l),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(N.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(_),y++}else if(N.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(_),A++}}}return{setup:f,setupView:h,state:r}}function og(s){const e=new L1(s),t=[],r=[];function o(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function c(g){r.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function N1(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new og(s),e.set(o,[f])):l>=c.length?(f=new og(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const D1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function I1(s,e,t){let r=new md;const o=new Ye,l=new Ye,c=new Xt,f=new sy({depthPacking:V0}),h=new oy,p={},g=t.maxTextureSize,v={[Mr]:Fn,[Fn]:Mr,[fi]:fi},y=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:D1,fragmentShader:U1}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const M=new ei;M.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new In(M,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gg;let x=this.type;this.render=function(B,k,$){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||B.length===0)return;const L=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),le=s.state;le.setBlending(yr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const te=x!==Bi&&this.type===Bi,pe=x===Bi&&this.type!==Bi;for(let ge=0,ce=B.length;ge<ce;ge++){const de=B[ge],V=de.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const fe=V.getFrameExtents();if(o.multiply(fe),l.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/fe.x),o.x=l.x*fe.x,V.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/fe.y),o.y=l.y*fe.y,V.mapSize.y=l.y)),V.map===null||te===!0||pe===!0){const F=this.type!==Bi?{minFilter:pi,magFilter:pi}:{};V.map!==null&&V.map.dispose(),V.map=new es(o.x,o.y,F),V.map.texture.name=de.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const oe=V.getViewportCount();for(let F=0;F<oe;F++){const se=V.getViewport(F);c.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),le.viewport(c),V.updateMatrices(de,F),r=V.getFrustum(),P(k,$,V.camera,de,this.type)}V.isPointLightShadow!==!0&&this.type===Bi&&I(V,$),V.needsUpdate=!1}x=this.type,_.needsUpdate=!1,s.setRenderTarget(L,R,z)};function I(B,k){const $=e.update(A);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new es(o.x,o.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(k,null,$,y,A,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(k,null,$,S,A,null)}function N(B,k,$,L){let R=null;const z=$.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(z!==void 0)R=z;else if(R=$.isPointLight===!0?h:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const le=R.uuid,te=k.uuid;let pe=p[le];pe===void 0&&(pe={},p[le]=pe);let ge=pe[te];ge===void 0&&(ge=R.clone(),pe[te]=ge,k.addEventListener("dispose",q)),R=ge}if(R.visible=k.visible,R.wireframe=k.wireframe,L===Bi?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:v[k.side],R.alphaMap=k.alphaMap,R.alphaTest=k.alphaTest,R.map=k.map,R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.displacementMap=k.displacementMap,R.displacementScale=k.displacementScale,R.displacementBias=k.displacementBias,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,$.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const le=s.properties.get(R);le.light=$}return R}function P(B,k,$,L,R){if(B.visible===!1)return;if(B.layers.test(k.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Bi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,B.matrixWorld);const te=e.update(B),pe=B.material;if(Array.isArray(pe)){const ge=te.groups;for(let ce=0,de=ge.length;ce<de;ce++){const V=ge[ce],fe=pe[V.materialIndex];if(fe&&fe.visible){const oe=N(B,fe,L,R);B.onBeforeShadow(s,B,k,$,te,oe,V),s.renderBufferDirect($,null,te,oe,B,V),B.onAfterShadow(s,B,k,$,te,oe,V)}}}else if(pe.visible){const ge=N(B,pe,L,R);B.onBeforeShadow(s,B,k,$,te,ge,null),s.renderBufferDirect($,null,te,ge,B,null),B.onAfterShadow(s,B,k,$,te,ge,null)}}const le=B.children;for(let te=0,pe=le.length;te<pe;te++)P(le[te],k,$,L,R)}function q(B){B.target.removeEventListener("dispose",q);for(const $ in p){const L=p[$],R=B.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}const F1={[_f]:xf,[yf]:Ef,[Sf]:Tf,[Ys]:Mf,[xf]:_f,[Ef]:yf,[Tf]:Sf,[Mf]:Ys};function O1(s,e){function t(){let X=!1;const Ce=new Xt;let ae=null;const me=new Xt(0,0,0,0);return{setMask:function(Le){ae!==Le&&!X&&(s.colorMask(Le,Le,Le,Le),ae=Le)},setLocked:function(Le){X=Le},setClear:function(Le,be,st,Ut,Kt){Kt===!0&&(Le*=Ut,be*=Ut,st*=Ut),Ce.set(Le,be,st,Ut),me.equals(Ce)===!1&&(s.clearColor(Le,be,st,Ut),me.copy(Ce))},reset:function(){X=!1,ae=null,me.set(-1,0,0,0)}}}function r(){let X=!1,Ce=!1,ae=null,me=null,Le=null;return{setReversed:function(be){if(Ce!==be){const st=e.get("EXT_clip_control");Ce?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Le;Le=null,this.setClear(Ut)}Ce=be},getReversed:function(){return Ce},setTest:function(be){be?_e(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(be){ae!==be&&!X&&(s.depthMask(be),ae=be)},setFunc:function(be){if(Ce&&(be=F1[be]),me!==be){switch(be){case _f:s.depthFunc(s.NEVER);break;case xf:s.depthFunc(s.ALWAYS);break;case yf:s.depthFunc(s.LESS);break;case Ys:s.depthFunc(s.LEQUAL);break;case Sf:s.depthFunc(s.EQUAL);break;case Mf:s.depthFunc(s.GEQUAL);break;case Ef:s.depthFunc(s.GREATER);break;case Tf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=be}},setLocked:function(be){X=be},setClear:function(be){Le!==be&&(Ce&&(be=1-be),s.clearDepth(be),Le=be)},reset:function(){X=!1,ae=null,me=null,Le=null,Ce=!1}}}function o(){let X=!1,Ce=null,ae=null,me=null,Le=null,be=null,st=null,Ut=null,Kt=null;return{setTest:function(yt){X||(yt?_e(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(yt){Ce!==yt&&!X&&(s.stencilMask(yt),Ce=yt)},setFunc:function(yt,Cn,Sn){(ae!==yt||me!==Cn||Le!==Sn)&&(s.stencilFunc(yt,Cn,Sn),ae=yt,me=Cn,Le=Sn)},setOp:function(yt,Cn,Sn){(be!==yt||st!==Cn||Ut!==Sn)&&(s.stencilOp(yt,Cn,Sn),be=yt,st=Cn,Ut=Sn)},setLocked:function(yt){X=yt},setClear:function(yt){Kt!==yt&&(s.clearStencil(yt),Kt=yt)},reset:function(){X=!1,Ce=null,ae=null,me=null,Le=null,be=null,st=null,Ut=null,Kt=null}}}const l=new t,c=new r,f=new o,h=new WeakMap,p=new WeakMap;let g={},v={},y=new WeakMap,S=[],M=null,A=!1,_=null,x=null,I=null,N=null,P=null,q=null,B=null,k=new Ct(0,0,0),$=0,L=!1,R=null,z=null,le=null,te=null,pe=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,de=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(V)[1]),ce=de>=1):V.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ce=de>=2);let fe=null,oe={};const F=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Ne=new Xt().fromArray(F),ee=new Xt().fromArray(se);function he(X,Ce,ae,me){const Le=new Uint8Array(4),be=s.createTexture();s.bindTexture(X,be),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<ae;st++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ce+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return be}const Se={};Se[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),c.setFunc(Ys),ut(!1),at(em),_e(s.CULL_FACE),H(yr);function _e(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function we(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function De(X,Ce){return v[X]!==Ce?(s.bindFramebuffer(X,Ce),v[X]=Ce,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ce),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function $e(X,Ce){let ae=S,me=!1;if(X){ae=y.get(Ce),ae===void 0&&(ae=[],y.set(Ce,ae));const Le=X.textures;if(ae.length!==Le.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let be=0,st=Le.length;be<st;be++)ae[be]=s.COLOR_ATTACHMENT0+be;ae.length=Le.length,me=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,me=!0);me&&s.drawBuffers(ae)}function Rt(X){return M!==X?(s.useProgram(X),M=X,!0):!1}const ft={[$r]:s.FUNC_ADD,[p0]:s.FUNC_SUBTRACT,[m0]:s.FUNC_REVERSE_SUBTRACT};ft[g0]=s.MIN,ft[v0]=s.MAX;const bt={[_0]:s.ZERO,[x0]:s.ONE,[y0]:s.SRC_COLOR,[gf]:s.SRC_ALPHA,[A0]:s.SRC_ALPHA_SATURATE,[T0]:s.DST_COLOR,[M0]:s.DST_ALPHA,[S0]:s.ONE_MINUS_SRC_COLOR,[vf]:s.ONE_MINUS_SRC_ALPHA,[w0]:s.ONE_MINUS_DST_COLOR,[E0]:s.ONE_MINUS_DST_ALPHA,[C0]:s.CONSTANT_COLOR,[R0]:s.ONE_MINUS_CONSTANT_COLOR,[P0]:s.CONSTANT_ALPHA,[b0]:s.ONE_MINUS_CONSTANT_ALPHA};function H(X,Ce,ae,me,Le,be,st,Ut,Kt,yt){if(X===yr){A===!0&&(we(s.BLEND),A=!1);return}if(A===!1&&(_e(s.BLEND),A=!0),X!==h0){if(X!==_||yt!==L){if((x!==$r||P!==$r)&&(s.blendEquation(s.FUNC_ADD),x=$r,P=$r),yt)switch(X){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tm:s.blendFunc(s.ONE,s.ONE);break;case nm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case im:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case im:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}I=null,N=null,q=null,B=null,k.set(0,0,0),$=0,_=X,L=yt}return}Le=Le||Ce,be=be||ae,st=st||me,(Ce!==x||Le!==P)&&(s.blendEquationSeparate(ft[Ce],ft[Le]),x=Ce,P=Le),(ae!==I||me!==N||be!==q||st!==B)&&(s.blendFuncSeparate(bt[ae],bt[me],bt[be],bt[st]),I=ae,N=me,q=be,B=st),(Ut.equals(k)===!1||Kt!==$)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Kt),k.copy(Ut),$=Kt),_=X,L=!1}function nn(X,Ce){X.side===fi?we(s.CULL_FACE):_e(s.CULL_FACE);let ae=X.side===Fn;Ce&&(ae=!ae),ut(ae),X.blending===Ws&&X.transparent===!1?H(yr):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const me=X.stencilWrite;f.setTest(me),me&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Mt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(X){R!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),R=X)}function at(X){X!==c0?(_e(s.CULL_FACE),X!==z&&(X===em?s.cullFace(s.BACK):X===f0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),z=X}function Xe(X){X!==le&&(ce&&s.lineWidth(X),le=X)}function Mt(X,Ce,ae){X?(_e(s.POLYGON_OFFSET_FILL),(te!==Ce||pe!==ae)&&(s.polygonOffset(Ce,ae),te=Ce,pe=ae)):we(s.POLYGON_OFFSET_FILL)}function Ve(X){X?_e(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function D(X){X===void 0&&(X=s.TEXTURE0+ge-1),fe!==X&&(s.activeTexture(X),fe=X)}function w(X,Ce,ae){ae===void 0&&(fe===null?ae=s.TEXTURE0+ge-1:ae=fe);let me=oe[ae];me===void 0&&(me={type:void 0,texture:void 0},oe[ae]=me),(me.type!==X||me.texture!==Ce)&&(fe!==ae&&(s.activeTexture(ae),fe=ae),s.bindTexture(X,Ce||Se[X]),me.type=X,me.texture=Ce)}function b(){const X=oe[fe];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ue(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(X){Ne.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Ne.copy(X))}function Be(X){ee.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),ee.copy(X))}function ht(X,Ce){let ae=p.get(Ce);ae===void 0&&(ae=new WeakMap,p.set(Ce,ae));let me=ae.get(X);me===void 0&&(me=s.getUniformBlockIndex(Ce,X.name),ae.set(X,me))}function rt(X,Ce){const me=p.get(Ce).get(X);h.get(Ce)!==me&&(s.uniformBlockBinding(Ce,me,X.__bindingPointIndex),h.set(Ce,me))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},fe=null,oe={},v={},y=new WeakMap,S=[],M=null,A=!1,_=null,x=null,I=null,N=null,P=null,q=null,B=null,k=new Ct(0,0,0),$=0,L=!1,R=null,z=null,le=null,te=null,pe=null,Ne.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:_e,disable:we,bindFramebuffer:De,drawBuffers:$e,useProgram:Rt,setBlending:H,setMaterial:nn,setFlipSided:ut,setCullFace:at,setLineWidth:Xe,setPolygonOffset:Mt,setScissorTest:Ve,activeTexture:D,bindTexture:w,unbindTexture:b,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:ze,texImage3D:Ke,updateUBOMapping:ht,uniformBlockBinding:rt,texStorage2D:dt,texStorage3D:Ee,texSubImage2D:ue,texSubImage3D:Ge,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:et,viewport:Be,reset:Pt}}function k1(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ye,g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,w){return S?new OffscreenCanvas(D,w):jl("canvas")}function A(D,w,b){let j=1;const Z=Ve(D);if((Z.width>b||Z.height>b)&&(j=b/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(j*Z.width),Ge=Math.floor(j*Z.height);v===void 0&&(v=M(ue,Ge));const Ae=w?M(ue,Ge):v;return Ae.width=ue,Ae.height=Ge,Ae.getContext("2d").drawImage(D,0,0,ue,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ue+"x"+Ge+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function _(D){return D.generateMipmaps}function x(D){s.generateMipmap(D)}function I(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(D,w,b,j,Z=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=w;if(w===s.RED&&(b===s.FLOAT&&(ue=s.R32F),b===s.HALF_FLOAT&&(ue=s.R16F),b===s.UNSIGNED_BYTE&&(ue=s.R8)),w===s.RED_INTEGER&&(b===s.UNSIGNED_BYTE&&(ue=s.R8UI),b===s.UNSIGNED_SHORT&&(ue=s.R16UI),b===s.UNSIGNED_INT&&(ue=s.R32UI),b===s.BYTE&&(ue=s.R8I),b===s.SHORT&&(ue=s.R16I),b===s.INT&&(ue=s.R32I)),w===s.RG&&(b===s.FLOAT&&(ue=s.RG32F),b===s.HALF_FLOAT&&(ue=s.RG16F),b===s.UNSIGNED_BYTE&&(ue=s.RG8)),w===s.RG_INTEGER&&(b===s.UNSIGNED_BYTE&&(ue=s.RG8UI),b===s.UNSIGNED_SHORT&&(ue=s.RG16UI),b===s.UNSIGNED_INT&&(ue=s.RG32UI),b===s.BYTE&&(ue=s.RG8I),b===s.SHORT&&(ue=s.RG16I),b===s.INT&&(ue=s.RG32I)),w===s.RGB_INTEGER&&(b===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),b===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),b===s.UNSIGNED_INT&&(ue=s.RGB32UI),b===s.BYTE&&(ue=s.RGB8I),b===s.SHORT&&(ue=s.RGB16I),b===s.INT&&(ue=s.RGB32I)),w===s.RGBA_INTEGER&&(b===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),b===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),b===s.UNSIGNED_INT&&(ue=s.RGBA32UI),b===s.BYTE&&(ue=s.RGBA8I),b===s.SHORT&&(ue=s.RGBA16I),b===s.INT&&(ue=s.RGBA32I)),w===s.RGB&&b===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),w===s.RGBA){const Ge=Z?Gl:At.getTransfer(j);b===s.FLOAT&&(ue=s.RGBA32F),b===s.HALF_FLOAT&&(ue=s.RGBA16F),b===s.UNSIGNED_BYTE&&(ue=Ge===Nt?s.SRGB8_ALPHA8:s.RGBA8),b===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),b===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(D,w){let b;return D?w===null||w===Qr||w===Ks?b=s.DEPTH24_STENCIL8:w===Hi?b=s.DEPTH32F_STENCIL8:w===Ko&&(b=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Qr||w===Ks?b=s.DEPTH_COMPONENT24:w===Hi?b=s.DEPTH_COMPONENT32F:w===Ko&&(b=s.DEPTH_COMPONENT16),b}function q(D,w){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==pi&&D.minFilter!==Si?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function B(D){const w=D.target;w.removeEventListener("dispose",B),$(w),w.isVideoTexture&&g.delete(w)}function k(D){const w=D.target;w.removeEventListener("dispose",k),R(w)}function $(D){const w=r.get(D);if(w.__webglInit===void 0)return;const b=D.source,j=y.get(b);if(j){const Z=j[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(D),Object.keys(j).length===0&&y.delete(b)}r.remove(D)}function L(D){const w=r.get(D);s.deleteTexture(w.__webglTexture);const b=D.source,j=y.get(b);delete j[w.__cacheKey],c.memory.textures--}function R(D){const w=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let Z=0;Z<w.__webglFramebuffer[j].length;Z++)s.deleteFramebuffer(w.__webglFramebuffer[j][Z]);else s.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)s.deleteFramebuffer(w.__webglFramebuffer[j]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const b=D.textures;for(let j=0,Z=b.length;j<Z;j++){const ue=r.get(b[j]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),c.memory.textures--),r.remove(b[j])}r.remove(D)}let z=0;function le(){z=0}function te(){const D=z;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),z+=1,D}function pe(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function ge(D,w){const b=r.get(D);if(D.isVideoTexture&&Xe(D),D.isRenderTargetTexture===!1&&D.version>0&&b.__version!==D.version){const j=D.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(b,D,w);return}}t.bindTexture(s.TEXTURE_2D,b.__webglTexture,s.TEXTURE0+w)}function ce(D,w){const b=r.get(D);if(D.version>0&&b.__version!==D.version){ee(b,D,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,b.__webglTexture,s.TEXTURE0+w)}function de(D,w){const b=r.get(D);if(D.version>0&&b.__version!==D.version){ee(b,D,w);return}t.bindTexture(s.TEXTURE_3D,b.__webglTexture,s.TEXTURE0+w)}function V(D,w){const b=r.get(D);if(D.version>0&&b.__version!==D.version){he(b,D,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+w)}const fe={[Cf]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[Rf]:s.MIRRORED_REPEAT},oe={[pi]:s.NEAREST,[B0]:s.NEAREST_MIPMAP_NEAREST,[fl]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[Ic]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},F={[W0]:s.NEVER,[Z0]:s.ALWAYS,[j0]:s.LESS,[bg]:s.LEQUAL,[X0]:s.EQUAL,[$0]:s.GEQUAL,[q0]:s.GREATER,[Y0]:s.NOTEQUAL};function se(D,w){if(w.type===Hi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Si||w.magFilter===Ic||w.magFilter===fl||w.magFilter===Jr||w.minFilter===Si||w.minFilter===Ic||w.minFilter===fl||w.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,fe[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,fe[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,fe[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,oe[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,oe[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===pi||w.minFilter!==fl&&w.minFilter!==Jr||w.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const b=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(D,w){let b=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",B));const j=w.source;let Z=y.get(j);Z===void 0&&(Z={},y.set(j,Z));const ue=pe(w);if(ue!==D.__cacheKey){Z[ue]===void 0&&(Z[ue]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,b=!0),Z[ue].usedTimes++;const Ge=Z[D.__cacheKey];Ge!==void 0&&(Z[D.__cacheKey].usedTimes--,Ge.usedTimes===0&&L(w)),D.__cacheKey=ue,D.__webglTexture=Z[ue].texture}return b}function ee(D,w,b){let j=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=s.TEXTURE_3D);const Z=Ne(D,w),ue=w.source;t.bindTexture(j,D.__webglTexture,s.TEXTURE0+b);const Ge=r.get(ue);if(ue.version!==Ge.__version||Z===!0){t.activeTexture(s.TEXTURE0+b);const Ae=At.getPrimaries(At.workingColorSpace),Fe=w.colorSpace===_r?null:At.getPrimaries(w.colorSpace),dt=w.colorSpace===_r||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ee=A(w.image,!1,o.maxTextureSize);Ee=Mt(w,Ee);const ze=l.convert(w.format,w.colorSpace),Ke=l.convert(w.type);let et=N(w.internalFormat,ze,Ke,w.colorSpace,w.isVideoTexture);se(j,w);let Be;const ht=w.mipmaps,rt=w.isVideoTexture!==!0,Pt=Ge.__version===void 0||Z===!0,X=ue.dataReady,Ce=q(w,Ee);if(w.isDepthTexture)et=P(w.format===Js,w.type),Pt&&(rt?t.texStorage2D(s.TEXTURE_2D,1,et,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,ze,Ke,null));else if(w.isDataTexture)if(ht.length>0){rt&&Pt&&t.texStorage2D(s.TEXTURE_2D,Ce,et,ht[0].width,ht[0].height);for(let ae=0,me=ht.length;ae<me;ae++)Be=ht[ae],rt?X&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ze,Ke,Be.data):t.texImage2D(s.TEXTURE_2D,ae,et,Be.width,Be.height,0,ze,Ke,Be.data);w.generateMipmaps=!1}else rt?(Pt&&t.texStorage2D(s.TEXTURE_2D,Ce,et,Ee.width,Ee.height),X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ze,Ke,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,ze,Ke,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,et,ht[0].width,ht[0].height,Ee.depth);for(let ae=0,me=ht.length;ae<me;ae++)if(Be=ht[ae],w.format!==hi)if(ze!==null)if(rt){if(X)if(w.layerUpdates.size>0){const Le=Fm(Be.width,Be.height,w.format,w.type);for(const be of w.layerUpdates){const st=Be.data.subarray(be*Le/Be.data.BYTES_PER_ELEMENT,(be+1)*Le/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,be,Be.width,Be.height,1,ze,st)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Ee.depth,ze,Be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,et,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Ee.depth,ze,Ke,Be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,et,Be.width,Be.height,Ee.depth,0,ze,Ke,Be.data)}else{rt&&Pt&&t.texStorage2D(s.TEXTURE_2D,Ce,et,ht[0].width,ht[0].height);for(let ae=0,me=ht.length;ae<me;ae++)Be=ht[ae],w.format!==hi?ze!==null?rt?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,et,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?X&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ze,Ke,Be.data):t.texImage2D(s.TEXTURE_2D,ae,et,Be.width,Be.height,0,ze,Ke,Be.data)}else if(w.isDataArrayTexture)if(rt){if(Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,et,Ee.width,Ee.height,Ee.depth),X)if(w.layerUpdates.size>0){const ae=Fm(Ee.width,Ee.height,w.format,w.type);for(const me of w.layerUpdates){const Le=Ee.data.subarray(me*ae/Ee.data.BYTES_PER_ELEMENT,(me+1)*ae/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Ee.width,Ee.height,1,ze,Ke,Le)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ze,Ke,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,ze,Ke,Ee.data);else if(w.isData3DTexture)rt?(Pt&&t.texStorage3D(s.TEXTURE_3D,Ce,et,Ee.width,Ee.height,Ee.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ze,Ke,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,ze,Ke,Ee.data);else if(w.isFramebufferTexture){if(Pt)if(rt)t.texStorage2D(s.TEXTURE_2D,Ce,et,Ee.width,Ee.height);else{let ae=Ee.width,me=Ee.height;for(let Le=0;Le<Ce;Le++)t.texImage2D(s.TEXTURE_2D,Le,et,ae,me,0,ze,Ke,null),ae>>=1,me>>=1}}else if(ht.length>0){if(rt&&Pt){const ae=Ve(ht[0]);t.texStorage2D(s.TEXTURE_2D,Ce,et,ae.width,ae.height)}for(let ae=0,me=ht.length;ae<me;ae++)Be=ht[ae],rt?X&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ze,Ke,Be):t.texImage2D(s.TEXTURE_2D,ae,et,ze,Ke,Be);w.generateMipmaps=!1}else if(rt){if(Pt){const ae=Ve(Ee);t.texStorage2D(s.TEXTURE_2D,Ce,et,ae.width,ae.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Ke,Ee)}else t.texImage2D(s.TEXTURE_2D,0,et,ze,Ke,Ee);_(w)&&x(j),Ge.__version=ue.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function he(D,w,b){if(w.image.length!==6)return;const j=Ne(D,w),Z=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+b);const ue=r.get(Z);if(Z.version!==ue.__version||j===!0){t.activeTexture(s.TEXTURE0+b);const Ge=At.getPrimaries(At.workingColorSpace),Ae=w.colorSpace===_r?null:At.getPrimaries(w.colorSpace),Fe=w.colorSpace===_r||Ge===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const dt=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,ze=[];for(let me=0;me<6;me++)!dt&&!Ee?ze[me]=A(w.image[me],!0,o.maxCubemapSize):ze[me]=Ee?w.image[me].image:w.image[me],ze[me]=Mt(w,ze[me]);const Ke=ze[0],et=l.convert(w.format,w.colorSpace),Be=l.convert(w.type),ht=N(w.internalFormat,et,Be,w.colorSpace),rt=w.isVideoTexture!==!0,Pt=ue.__version===void 0||j===!0,X=Z.dataReady;let Ce=q(w,Ke);se(s.TEXTURE_CUBE_MAP,w);let ae;if(dt){rt&&Pt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ht,Ke.width,Ke.height);for(let me=0;me<6;me++){ae=ze[me].mipmaps;for(let Le=0;Le<ae.length;Le++){const be=ae[Le];w.format!==hi?et!==null?rt?X&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,0,0,be.width,be.height,et,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,ht,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,0,0,be.width,be.height,et,Be,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,ht,be.width,be.height,0,et,Be,be.data)}}}else{if(ae=w.mipmaps,rt&&Pt){ae.length>0&&Ce++;const me=Ve(ze[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ht,me.width,me.height)}for(let me=0;me<6;me++)if(Ee){rt?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ze[me].width,ze[me].height,et,Be,ze[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ht,ze[me].width,ze[me].height,0,et,Be,ze[me].data);for(let Le=0;Le<ae.length;Le++){const st=ae[Le].image[me].image;rt?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,0,0,st.width,st.height,et,Be,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,ht,st.width,st.height,0,et,Be,st.data)}}else{rt?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,et,Be,ze[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ht,et,Be,ze[me]);for(let Le=0;Le<ae.length;Le++){const be=ae[Le];rt?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,0,0,et,Be,be.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,ht,et,Be,be.image[me])}}}_(w)&&x(s.TEXTURE_CUBE_MAP),ue.__version=Z.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Se(D,w,b,j,Z,ue){const Ge=l.convert(b.format,b.colorSpace),Ae=l.convert(b.type),Fe=N(b.internalFormat,Ge,Ae,b.colorSpace),dt=r.get(w),Ee=r.get(b);if(Ee.__renderTarget=w,!dt.__hasExternalTextures){const ze=Math.max(1,w.width>>ue),Ke=Math.max(1,w.height>>ue);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,ue,Fe,ze,Ke,w.depth,0,Ge,Ae,null):t.texImage2D(Z,ue,Fe,ze,Ke,0,Ge,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),at(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Z,Ee.__webglTexture,0,ut(w)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Z,Ee.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(D,w,b){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){const j=w.depthTexture,Z=j&&j.isDepthTexture?j.type:null,ue=P(w.stencilBuffer,Z),Ge=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ut(w);at(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,ue,w.width,w.height):b?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ue,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ue,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,D)}else{const j=w.textures;for(let Z=0;Z<j.length;Z++){const ue=j[Z],Ge=l.convert(ue.format,ue.colorSpace),Ae=l.convert(ue.type),Fe=N(ue.internalFormat,Ge,Ae,ue.colorSpace),dt=ut(w);b&&at(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Fe,w.width,w.height):at(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=r.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ge(w.depthTexture,0);const Z=j.__webglTexture,ue=ut(w);if(w.depthTexture.format===js)at(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(w.depthTexture.format===Js)at(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function De(D){const w=r.get(D),b=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const j=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const Z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),w.__depthDisposeCallback=Z}w.__boundDepthTexture=j}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,D)}else if(b){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=s.createRenderbuffer(),_e(w.__webglDepthbuffer[j],D,!1);else{const Z=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),_e(w.__webglDepthbuffer,D,!1);else{const j=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(D,w,b){const j=r.get(D);w!==void 0&&Se(j.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),b!==void 0&&De(D)}function Rt(D){const w=D.texture,b=r.get(D),j=r.get(w);D.addEventListener("dispose",k);const Z=D.textures,ue=D.isWebGLCubeRenderTarget===!0,Ge=Z.length>1;if(Ge||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=w.version,c.memory.textures++),ue){b.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){b.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)b.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else b.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){b.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)b.__webglFramebuffer[Ae]=s.createFramebuffer()}else b.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Ae=0,Fe=Z.length;Ae<Fe;Ae++){const dt=r.get(Z[Ae]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&at(D)===!1){b.__webglMultisampledFramebuffer=s.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let Ae=0;Ae<Z.length;Ae++){const Fe=Z[Ae];b.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,b.__webglColorRenderbuffer[Ae]);const dt=l.convert(Fe.format,Fe.colorSpace),Ee=l.convert(Fe.type),ze=N(Fe.internalFormat,dt,Ee,Fe.colorSpace,D.isXRRenderTarget===!0),Ke=ut(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,ze,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,b.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(b.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(b.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),se(s.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Se(b.__webglFramebuffer[Ae][Fe],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else Se(b.__webglFramebuffer[Ae],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);_(w)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ae=0,Fe=Z.length;Ae<Fe;Ae++){const dt=Z[Ae],Ee=r.get(dt);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),se(s.TEXTURE_2D,dt),Se(b.__webglFramebuffer,D,dt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),_(dt)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,j.__webglTexture),se(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Se(b.__webglFramebuffer[Fe],D,w,s.COLOR_ATTACHMENT0,Ae,Fe);else Se(b.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,Ae,0);_(w)&&x(Ae),t.unbindTexture()}D.depthBuffer&&De(D)}function ft(D){const w=D.textures;for(let b=0,j=w.length;b<j;b++){const Z=w[b];if(_(Z)){const ue=I(D),Ge=r.get(Z).__webglTexture;t.bindTexture(ue,Ge),x(ue),t.unbindTexture()}}}const bt=[],H=[];function nn(D){if(D.samples>0){if(at(D)===!1){const w=D.textures,b=D.width,j=D.height;let Z=s.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(D),Ae=w.length>1;if(Ae)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const dt=r.get(w[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,b,j,0,0,b,j,Z,s.NEAREST),h===!0&&(bt.length=0,H.length=0,bt.push(s.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(bt.push(ue),H.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const dt=r.get(w[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,dt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ut(D){return Math.min(o.maxSamples,D.samples)}function at(D){const w=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xe(D){const w=c.render.frame;g.get(D)!==w&&(g.set(D,w),D.update())}function Mt(D,w){const b=D.colorSpace,j=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||b!==Qs&&b!==_r&&(At.getTransfer(b)===Nt?(j!==hi||Z!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",b)),w}function Ve(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=le,this.setTexture2D=ge,this.setTexture2DArray=ce,this.setTexture3D=de,this.setTextureCube=V,this.rebindTextures=$e,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=at}function z1(s,e){function t(r,o=_r){let l;const c=At.getTransfer(o);if(r===Wi)return s.UNSIGNED_BYTE;if(r===cd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===fd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Sg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xg)return s.BYTE;if(r===yg)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===ud)return s.INT;if(r===Qr)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===ta)return s.HALF_FLOAT;if(r===Mg)return s.ALPHA;if(r===Eg)return s.RGB;if(r===hi)return s.RGBA;if(r===Tg)return s.LUMINANCE;if(r===wg)return s.LUMINANCE_ALPHA;if(r===js)return s.DEPTH_COMPONENT;if(r===Js)return s.DEPTH_STENCIL;if(r===Ag)return s.RED;if(r===dd)return s.RED_INTEGER;if(r===Cg)return s.RG;if(r===hd)return s.RG_INTEGER;if(r===pd)return s.RGBA_INTEGER;if(r===Ol||r===kl||r===zl||r===Bl)if(c===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ol)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ol)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pf||r===bf||r===Lf||r===Nf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Pf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Df||r===Uf||r===If)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Df||r===Uf)return c===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===If)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ff||r===Of||r===kf||r===zf||r===Bf||r===Hf||r===Vf||r===Gf||r===Wf||r===jf||r===Xf||r===qf||r===Yf||r===$f)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ff)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Of)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$f)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hl||r===Zf||r===Kf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Hl)return c===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rg||r===Jf||r===Qf||r===ed)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Hl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Jf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ed)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ks?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const B1={type:"move"};class mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const A of e.hand.values()){const _=t.getJointPose(A,r),x=this._getHandJoint(p,A);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,M=.005;p.inputState.pinching&&y>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(B1)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new xr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const H1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class G1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new On,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Er({vertexShader:H1,fragmentShader:V1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new Kl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W1 extends no{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,v=null,y=null,S=null,M=null;const A=new G1,_=t.getContextAttributes();let x=null,I=null;const N=[],P=[],q=new Ye;let B=null;const k=new Qn;k.viewport=new Xt;const $=new Qn;$.viewport=new Xt;const L=[k,$],R=new cy;let z=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=N[ee];return he===void 0&&(he=new mf,N[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=N[ee];return he===void 0&&(he=new mf,N[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=N[ee];return he===void 0&&(he=new mf,N[ee]=he),he.getHandSpace()};function te(ee){const he=P.indexOf(ee.inputSource);if(he===-1)return;const Se=N[he];Se!==void 0&&(Se.update(ee.inputSource,ee.frame,p||c),Se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function pe(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",pe),o.removeEventListener("inputsourceschange",ge);for(let ee=0;ee<N.length;ee++){const he=P[ee];he!==null&&(P[ee]=null,N[ee].disconnect(he))}z=null,le=null,A.reset(),e.setRenderTarget(x),S=null,y=null,v=null,o=null,I=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){f=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",pe),o.addEventListener("inputsourceschange",ge),_.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(q),o.renderState.layers===void 0){const he={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new es(S.framebufferWidth,S.framebufferHeight,{format:hi,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let he=null,Se=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=_.stencil?Js:js,Se=_.stencil?Ks:Qr);const we={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};v=new XRWebGLBinding(o,t),y=v.createProjectionLayer(we),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new es(y.textureWidth,y.textureHeight,{format:hi,type:Wi,depthTexture:new Gg(y.textureWidth,y.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ge(ee){for(let he=0;he<ee.removed.length;he++){const Se=ee.removed[he],_e=P.indexOf(Se);_e>=0&&(P[_e]=null,N[_e].disconnect(Se))}for(let he=0;he<ee.added.length;he++){const Se=ee.added[he];let _e=P.indexOf(Se);if(_e===-1){for(let De=0;De<N.length;De++)if(De>=P.length){P.push(Se),_e=De;break}else if(P[De]===null){P[De]=Se,_e=De;break}if(_e===-1)break}const we=N[_e];we&&we.connect(Se)}}const ce=new K,de=new K;function V(ee,he,Se){ce.setFromMatrixPosition(he.matrixWorld),de.setFromMatrixPosition(Se.matrixWorld);const _e=ce.distanceTo(de),we=he.projectionMatrix.elements,De=Se.projectionMatrix.elements,$e=we[14]/(we[10]-1),Rt=we[14]/(we[10]+1),ft=(we[9]+1)/we[5],bt=(we[9]-1)/we[5],H=(we[8]-1)/we[0],nn=(De[8]+1)/De[0],ut=$e*H,at=$e*nn,Xe=_e/(-H+nn),Mt=Xe*-H;if(he.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Mt),ee.translateZ(Xe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),we[10]===-1)ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ve=$e+Xe,D=Rt+Xe,w=ut-Mt,b=at+(_e-Mt),j=ft*Rt/D*Ve,Z=bt*Rt/D*Ve;ee.projectionMatrix.makePerspective(w,b,j,Z,Ve,D),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function fe(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let he=ee.near,Se=ee.far;A.texture!==null&&(A.depthNear>0&&(he=A.depthNear),A.depthFar>0&&(Se=A.depthFar)),R.near=$.near=k.near=he,R.far=$.far=k.far=Se,(z!==R.near||le!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,le=R.far),k.layers.mask=ee.layers.mask|2,$.layers.mask=ee.layers.mask|4,R.layers.mask=k.layers.mask|$.layers.mask;const _e=ee.parent,we=R.cameras;fe(R,_e);for(let De=0;De<we.length;De++)fe(we[De],_e);we.length===2?V(R,k,$):R.projectionMatrix.copy(k.projectionMatrix),oe(ee,R,_e)};function oe(ee,he,Se){Se===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(Se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=td*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(ee){h=ee,y!==null&&(y.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let F=null;function se(ee,he){if(g=he.getViewerPose(p||c),M=he,g!==null){const Se=g.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let _e=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,_e=!0);for(let De=0;De<Se.length;De++){const $e=Se[De];let Rt=null;if(S!==null)Rt=S.getViewport($e);else{const bt=v.getViewSubImage(y,$e);Rt=bt.viewport,De===0&&(e.setRenderTargetTextures(I,bt.colorTexture,y.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(I))}let ft=L[De];ft===void 0&&(ft=new Qn,ft.layers.enable(De),ft.viewport=new Xt,L[De]=ft),ft.matrix.fromArray($e.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray($e.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),De===0&&(R.matrix.copy(ft.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_e===!0&&R.cameras.push(ft)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")){const De=v.getDepthInformation(Se[0]);De&&De.isValid&&De.texture&&A.init(e,De,o.renderState)}}for(let Se=0;Se<N.length;Se++){const _e=P[Se],we=N[Se];_e!==null&&we!==void 0&&we.update(_e,he,p||c)}F&&F(ee,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),M=null}const Ne=new Qg;Ne.setAnimationLoop(se),this.setAnimationLoop=function(ee){F=ee},this.dispose=function(){}}}const Xr=new Ei,j1=new Bt;function X1(s,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function r(_,x){x.color.getRGB(_.fogColor.value,zg(s)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function o(_,x,I,N,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(_,x):x.isMeshToonMaterial?(l(_,x),v(_,x)):x.isMeshPhongMaterial?(l(_,x),g(_,x)):x.isMeshStandardMaterial?(l(_,x),y(_,x),x.isMeshPhysicalMaterial&&S(_,x,P)):x.isMeshMatcapMaterial?(l(_,x),M(_,x)):x.isMeshDepthMaterial?l(_,x):x.isMeshDistanceMaterial?(l(_,x),A(_,x)):x.isMeshNormalMaterial?l(_,x):x.isLineBasicMaterial?(c(_,x),x.isLineDashedMaterial&&f(_,x)):x.isPointsMaterial?h(_,x,I,N):x.isSpriteMaterial?p(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Fn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Fn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const I=e.get(x),N=I.envMap,P=I.envMapRotation;N&&(_.envMap.value=N,Xr.copy(P),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),_.envMapRotation.value.setFromMatrix4(j1.makeRotationFromEuler(Xr)),_.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function c(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function f(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function h(_,x,I,N){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*I,_.scale.value=N*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function p(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function g(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function v(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function y(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function S(_,x,I){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Fn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=I.texture,_.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,x){x.matcap&&(_.matcap.value=x.matcap)}function A(_,x){const I=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(I.matrixWorld),_.nearDistance.value=I.shadow.camera.near,_.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function q1(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,N){const P=N.program;r.uniformBlockBinding(I,P)}function p(I,N){let P=o[I.id];P===void 0&&(M(I),P=g(I),o[I.id]=P,I.addEventListener("dispose",_));const q=N.program;r.updateUBOMapping(I,q);const B=e.render.frame;l[I.id]!==B&&(y(I),l[I.id]=B)}function g(I){const N=v();I.__bindingPointIndex=N;const P=s.createBuffer(),q=I.__size,B=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,q,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function v(){for(let I=0;I<f;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const N=o[I.id],P=I.uniforms,q=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let B=0,k=P.length;B<k;B++){const $=Array.isArray(P[B])?P[B]:[P[B]];for(let L=0,R=$.length;L<R;L++){const z=$[L];if(S(z,B,L,q)===!0){const le=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let pe=0;for(let ge=0;ge<te.length;ge++){const ce=te[ge],de=A(ce);typeof ce=="number"||typeof ce=="boolean"?(z.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,le+pe,z.__data)):ce.isMatrix3?(z.__data[0]=ce.elements[0],z.__data[1]=ce.elements[1],z.__data[2]=ce.elements[2],z.__data[3]=0,z.__data[4]=ce.elements[3],z.__data[5]=ce.elements[4],z.__data[6]=ce.elements[5],z.__data[7]=0,z.__data[8]=ce.elements[6],z.__data[9]=ce.elements[7],z.__data[10]=ce.elements[8],z.__data[11]=0):(ce.toArray(z.__data,pe),pe+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,N,P,q){const B=I.value,k=N+"_"+P;if(q[k]===void 0)return typeof B=="number"||typeof B=="boolean"?q[k]=B:q[k]=B.clone(),!0;{const $=q[k];if(typeof B=="number"||typeof B=="boolean"){if($!==B)return q[k]=B,!0}else if($.equals(B)===!1)return $.copy(B),!0}return!1}function M(I){const N=I.uniforms;let P=0;const q=16;for(let k=0,$=N.length;k<$;k++){const L=Array.isArray(N[k])?N[k]:[N[k]];for(let R=0,z=L.length;R<z;R++){const le=L[R],te=Array.isArray(le.value)?le.value:[le.value];for(let pe=0,ge=te.length;pe<ge;pe++){const ce=te[pe],de=A(ce),V=P%q,fe=V%de.boundary,oe=V+fe;P+=fe,oe!==0&&q-oe<de.storage&&(P+=q-oe),le.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=P,P+=de.storage}}}const B=P%q;return B>0&&(P+=q-B),I.__size=P,I.__cache={},this}function A(I){const N={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(N.boundary=4,N.storage=4):I.isVector2?(N.boundary=8,N.storage=8):I.isVector3||I.isColor?(N.boundary=16,N.storage=12):I.isVector4?(N.boundary=16,N.storage=16):I.isMatrix3?(N.boundary=48,N.storage=48):I.isMatrix4?(N.boundary=64,N.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),N}function _(I){const N=I.target;N.removeEventListener("dispose",_);const P=c.indexOf(N.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function x(){for(const I in o)s.deleteBuffer(o[I]);c=[],o={},l={}}return{bind:h,update:p,dispose:x}}class Y1{constructor(e={}){const{canvas:t=J0(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const M=new Uint32Array(4),A=new Int32Array(4);let _=null,x=null;const I=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=Sr,this.toneMappingExposure=1;const P=this;let q=!1,B=0,k=0,$=null,L=-1,R=null;const z=new Xt,le=new Xt;let te=null;const pe=new Ct(0);let ge=0,ce=t.width,de=t.height,V=1,fe=null,oe=null;const F=new Xt(0,0,ce,de),se=new Xt(0,0,ce,de);let Ne=!1;const ee=new md;let he=!1,Se=!1;const _e=new Bt,we=new Bt,De=new K,$e=new Xt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function bt(){return $===null?V:1}let H=r;function nn(C,Y){return t.getContext(C,Y)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ld}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",be,!1),H===null){const Y="webgl2";if(H=nn(Y,C),H===null)throw nn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ut,at,Xe,Mt,Ve,D,w,b,j,Z,ue,Ge,Ae,Fe,dt,Ee,ze,Ke,et,Be,ht,rt,Pt,X;function Ce(){ut=new iE(H),ut.init(),rt=new z1(H,ut),at=new KM(H,ut,e,rt),Xe=new O1(H,ut),at.reverseDepthBuffer&&y&&Xe.buffers.depth.setReversed(!0),Mt=new oE(H),Ve=new T1,D=new k1(H,ut,Xe,Ve,at,rt,Mt),w=new QM(P),b=new nE(P),j=new hy(H),Pt=new $M(H,j),Z=new rE(H,j,Mt,Pt),ue=new lE(H,Z,j,Mt),et=new aE(H,at,D),Ee=new JM(Ve),Ge=new E1(P,w,b,ut,at,Pt,Ee),Ae=new X1(P,Ve),Fe=new A1,dt=new N1(ut),Ke=new YM(P,w,b,Xe,ue,S,h),ze=new I1(P,ue,at),X=new q1(H,Mt,at,Xe),Be=new ZM(H,ut,Mt),ht=new sE(H,ut,Mt),Mt.programs=Ge.programs,P.capabilities=at,P.extensions=ut,P.properties=Ve,P.renderLists=Fe,P.shadowMap=ze,P.state=Xe,P.info=Mt}Ce();const ae=new W1(P,H);this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(ce,de,!1))},this.getSize=function(C){return C.set(ce,de)},this.setSize=function(C,Y,ie=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,de=Y,t.width=Math.floor(C*V),t.height=Math.floor(Y*V),ie===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(ce*V,de*V).floor()},this.setDrawingBufferSize=function(C,Y,ie){ce=C,de=Y,V=ie,t.width=Math.floor(C*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,Y,ie,re){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,Y,ie,re),Xe.viewport(z.copy(F).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(se)},this.setScissor=function(C,Y,ie,re){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,Y,ie,re),Xe.scissor(le.copy(se).multiplyScalar(V).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(C){Xe.setScissorTest(Ne=C)},this.setOpaqueSort=function(C){fe=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(C=!0,Y=!0,ie=!0){let re=0;if(C){let G=!1;if($!==null){const Me=$.texture.format;G=Me===pd||Me===hd||Me===dd}if(G){const Me=$.texture.type,Re=Me===Wi||Me===Qr||Me===Ko||Me===Ks||Me===cd||Me===fd,Ie=Ke.getClearColor(),Oe=Ke.getClearAlpha(),tt=Ie.r,nt=Ie.g,qe=Ie.b;Re?(M[0]=tt,M[1]=nt,M[2]=qe,M[3]=Oe,H.clearBufferuiv(H.COLOR,0,M)):(A[0]=tt,A[1]=nt,A[2]=qe,A[3]=Oe,H.clearBufferiv(H.COLOR,0,A))}else re|=H.COLOR_BUFFER_BIT}Y&&(re|=H.DEPTH_BUFFER_BIT),ie&&(re|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ke.dispose(),Fe.dispose(),dt.dispose(),Ve.dispose(),w.dispose(),b.dispose(),ue.dispose(),Pt.dispose(),X.dispose(),Ge.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ns),ae.removeEventListener("sessionend",ji),wi.stop()};function me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const C=Mt.autoReset,Y=ze.enabled,ie=ze.autoUpdate,re=ze.needsUpdate,G=ze.type;Ce(),Mt.autoReset=C,ze.enabled=Y,ze.autoUpdate=ie,ze.needsUpdate=re,ze.type=G}function be(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function st(C){const Y=C.target;Y.removeEventListener("dispose",st),Ut(Y)}function Ut(C){Kt(C),Ve.remove(C)}function Kt(C){const Y=Ve.get(C).programs;Y!==void 0&&(Y.forEach(function(ie){Ge.releaseProgram(ie)}),C.isShaderMaterial&&Ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ie,re,G,Me){Y===null&&(Y=Rt);const Re=G.isMesh&&G.matrixWorld.determinant()<0,Ie=oa(C,Y,ie,re,G);Xe.setMaterial(re,Re);let Oe=ie.index,tt=1;if(re.wireframe===!0){if(Oe=Z.getWireframeAttribute(ie),Oe===void 0)return;tt=2}const nt=ie.drawRange,qe=ie.attributes.position;let ot=nt.start*tt,Et=(nt.start+nt.count)*tt;Me!==null&&(ot=Math.max(ot,Me.start*tt),Et=Math.min(Et,(Me.start+Me.count)*tt)),Oe!==null?(ot=Math.max(ot,0),Et=Math.min(Et,Oe.count)):qe!=null&&(ot=Math.max(ot,0),Et=Math.min(Et,qe.count));const Tt=Et-ot;if(Tt<0||Tt===1/0)return;Pt.setup(G,re,Ie,ie,Oe);let kt,xt=Be;if(Oe!==null&&(kt=j.get(Oe),xt=ht,xt.setIndex(kt)),G.isMesh)re.wireframe===!0?(Xe.setLineWidth(re.wireframeLinewidth*bt()),xt.setMode(H.LINES)):xt.setMode(H.TRIANGLES);else if(G.isLine){let Ze=re.linewidth;Ze===void 0&&(Ze=1),Xe.setLineWidth(Ze*bt()),G.isLineSegments?xt.setMode(H.LINES):G.isLineLoop?xt.setMode(H.LINE_LOOP):xt.setMode(H.LINE_STRIP)}else G.isPoints?xt.setMode(H.POINTS):G.isSprite&&xt.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)xt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))xt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ze=G._multiDrawStarts,Wt=G._multiDrawCounts,_t=G._multiDrawCount,ln=Oe?j.get(Oe).bytesPerElement:1,ti=Ve.get(re).currentProgram.getUniforms();for(let Mn=0;Mn<_t;Mn++)ti.setValue(H,"_gl_DrawID",Mn),xt.render(Ze[Mn]/ln,Wt[Mn])}else if(G.isInstancedMesh)xt.renderInstances(ot,Tt,G.count);else if(ie.isInstancedBufferGeometry){const Ze=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Wt=Math.min(ie.instanceCount,Ze);xt.renderInstances(ot,Tt,Wt)}else xt.render(ot,Tt)};function yt(C,Y,ie){C.transparent===!0&&C.side===fi&&C.forceSinglePass===!1?(C.side=Fn,C.needsUpdate=!0,is(C,Y,ie),C.side=Mr,C.needsUpdate=!0,is(C,Y,ie),C.side=fi):is(C,Y,ie)}this.compile=function(C,Y,ie=null){ie===null&&(ie=C),x=dt.get(ie),x.init(Y),N.push(x),ie.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),C!==ie&&C.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();const re=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const Ie=Me[Re];yt(Ie,ie,G),re.add(Ie)}else yt(Me,ie,G),re.add(Me)}),N.pop(),x=null,re},this.compileAsync=function(C,Y,ie=null){const re=this.compile(C,Y,ie);return new Promise(G=>{function Me(){if(re.forEach(function(Re){Ve.get(Re).currentProgram.isReady()&&re.delete(Re)}),re.size===0){G(C);return}setTimeout(Me,10)}ut.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Cn=null;function Sn(C){Cn&&Cn(C)}function ns(){wi.stop()}function ji(){wi.start()}const wi=new Qg;wi.setAnimationLoop(Sn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(C){Cn=C,ae.setAnimationLoop(C),C===null?wi.stop():wi.start()},ae.addEventListener("sessionstart",ns),ae.addEventListener("sessionend",ji),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Y),Y=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,Y,$),x=dt.get(C,N.length),x.init(Y),N.push(x),we.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ee.setFromProjectionMatrix(we),Se=this.localClippingEnabled,he=Ee.init(this.clippingPlanes,Se),_=Fe.get(C,I.length),_.init(),I.push(_),ae.enabled===!0&&ae.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&Ai(Me,Y,-1/0,P.sortObjects)}Ai(C,Y,0,P.sortObjects),_.finish(),P.sortObjects===!0&&_.sort(fe,oe),ft=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ft&&Ke.addToRenderList(_,C),this.info.render.frame++,he===!0&&Ee.beginShadows();const ie=x.state.shadowsArray;ze.render(ie,C,Y),he===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=_.opaque,G=_.transmissive;if(x.setupLights(),Y.isArrayCamera){const Me=Y.cameras;if(G.length>0)for(let Re=0,Ie=Me.length;Re<Ie;Re++){const Oe=Me[Re];Ar(re,G,C,Oe)}ft&&Ke.render(C);for(let Re=0,Ie=Me.length;Re<Ie;Re++){const Oe=Me[Re];wr(_,C,Oe,Oe.viewport)}}else G.length>0&&Ar(re,G,C,Y),ft&&Ke.render(C),wr(_,C,Y);$!==null&&(D.updateMultisampleRenderTarget($),D.updateRenderTargetMipmap($)),C.isScene===!0&&C.onAfterRender(P,C,Y),Pt.resetDefaultState(),L=-1,R=null,N.pop(),N.length>0?(x=N[N.length-1],he===!0&&Ee.setGlobalState(P.clippingPlanes,x.state.camera)):x=null,I.pop(),I.length>0?_=I[I.length-1]:_=null};function Ai(C,Y,ie,re){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){re&&$e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(we);const Re=ue.update(C),Ie=C.material;Ie.visible&&_.push(C,Re,Ie,ie,$e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ee.intersectsObject(C))){const Re=ue.update(C),Ie=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$e.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),$e.copy(Re.boundingSphere.center)),$e.applyMatrix4(C.matrixWorld).applyMatrix4(we)),Array.isArray(Ie)){const Oe=Re.groups;for(let tt=0,nt=Oe.length;tt<nt;tt++){const qe=Oe[tt],ot=Ie[qe.materialIndex];ot&&ot.visible&&_.push(C,Re,ot,ie,$e.z,qe)}}else Ie.visible&&_.push(C,Re,Ie,ie,$e.z,null)}}const Me=C.children;for(let Re=0,Ie=Me.length;Re<Ie;Re++)Ai(Me[Re],Y,ie,re)}function wr(C,Y,ie,re){const G=C.opaque,Me=C.transmissive,Re=C.transparent;x.setupLightsView(ie),he===!0&&Ee.setGlobalState(P.clippingPlanes,ie),re&&Xe.viewport(z.copy(re)),G.length>0&&Xi(G,Y,ie),Me.length>0&&Xi(Me,Y,ie),Re.length>0&&Xi(Re,Y,ie),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Ar(C,Y,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[re.id]===void 0&&(x.state.transmissionRenderTarget[re.id]=new es(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?ta:Wi,minFilter:Jr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Me=x.state.transmissionRenderTarget[re.id],Re=re.viewport||z;Me.setSize(Re.z,Re.w);const Ie=P.getRenderTarget();P.setRenderTarget(Me),P.getClearColor(pe),ge=P.getClearAlpha(),ge<1&&P.setClearColor(16777215,.5),P.clear(),ft&&Ke.render(ie);const Oe=P.toneMapping;P.toneMapping=Sr;const tt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),x.setupLightsView(re),he===!0&&Ee.setGlobalState(P.clippingPlanes,re),Xi(C,ie,re),D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me),ut.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let qe=0,ot=Y.length;qe<ot;qe++){const Et=Y[qe],Tt=Et.object,kt=Et.geometry,xt=Et.material,Ze=Et.group;if(xt.side===fi&&Tt.layers.test(re.layers)){const Wt=xt.side;xt.side=Fn,xt.needsUpdate=!0,ra(Tt,ie,re,kt,xt,Ze),xt.side=Wt,xt.needsUpdate=!0,nt=!0}}nt===!0&&(D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me))}P.setRenderTarget(Ie),P.setClearColor(pe,ge),tt!==void 0&&(re.viewport=tt),P.toneMapping=Oe}function Xi(C,Y,ie){const re=Y.isScene===!0?Y.overrideMaterial:null;for(let G=0,Me=C.length;G<Me;G++){const Re=C[G],Ie=Re.object,Oe=Re.geometry,tt=re===null?Re.material:re,nt=Re.group;Ie.layers.test(ie.layers)&&ra(Ie,Y,ie,Oe,tt,nt)}}function ra(C,Y,ie,re,G,Me){C.onBeforeRender(P,Y,ie,re,G,Me),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(P,Y,ie,re,C,Me),G.transparent===!0&&G.side===fi&&G.forceSinglePass===!1?(G.side=Fn,G.needsUpdate=!0,P.renderBufferDirect(ie,Y,re,G,C,Me),G.side=Mr,G.needsUpdate=!0,P.renderBufferDirect(ie,Y,re,G,C,Me),G.side=fi):P.renderBufferDirect(ie,Y,re,G,C,Me),C.onAfterRender(P,Y,ie,re,G,Me)}function is(C,Y,ie){Y.isScene!==!0&&(Y=Rt);const re=Ve.get(C),G=x.state.lights,Me=x.state.shadowsArray,Re=G.state.version,Ie=Ge.getParameters(C,G.state,Me,Y,ie),Oe=Ge.getProgramCacheKey(Ie);let tt=re.programs;re.environment=C.isMeshStandardMaterial?Y.environment:null,re.fog=Y.fog,re.envMap=(C.isMeshStandardMaterial?b:w).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",st),tt=new Map,re.programs=tt);let nt=tt.get(Oe);if(nt!==void 0){if(re.currentProgram===nt&&re.lightsStateVersion===Re)return mi(C,Ie),nt}else Ie.uniforms=Ge.getUniforms(C),C.onBeforeCompile(Ie,P),nt=Ge.acquireProgram(Ie,Oe),tt.set(Oe,nt),re.uniforms=Ie.uniforms;const qe=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=Ee.uniform),mi(C,Ie),re.needsLights=Ql(C),re.lightsStateVersion=Re,re.needsLights&&(qe.ambientLightColor.value=G.state.ambient,qe.lightProbe.value=G.state.probe,qe.directionalLights.value=G.state.directional,qe.directionalLightShadows.value=G.state.directionalShadow,qe.spotLights.value=G.state.spot,qe.spotLightShadows.value=G.state.spotShadow,qe.rectAreaLights.value=G.state.rectArea,qe.ltc_1.value=G.state.rectAreaLTC1,qe.ltc_2.value=G.state.rectAreaLTC2,qe.pointLights.value=G.state.point,qe.pointLightShadows.value=G.state.pointShadow,qe.hemisphereLights.value=G.state.hemi,qe.directionalShadowMap.value=G.state.directionalShadowMap,qe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,qe.spotShadowMap.value=G.state.spotShadowMap,qe.spotLightMatrix.value=G.state.spotLightMatrix,qe.spotLightMap.value=G.state.spotLightMap,qe.pointShadowMap.value=G.state.pointShadowMap,qe.pointShadowMatrix.value=G.state.pointShadowMatrix),re.currentProgram=nt,re.uniformsList=null,nt}function sa(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Vl.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function mi(C,Y){const ie=Ve.get(C);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function oa(C,Y,ie,re,G){Y.isScene!==!0&&(Y=Rt),D.resetTextureUnits();const Me=Y.fog,Re=re.isMeshStandardMaterial?Y.environment:null,Ie=$===null?P.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Qs,Oe=(re.isMeshStandardMaterial?b:w).get(re.envMap||Re),tt=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,nt=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!ie.morphAttributes.position,ot=!!ie.morphAttributes.normal,Et=!!ie.morphAttributes.color;let Tt=Sr;re.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const kt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,xt=kt!==void 0?kt.length:0,Ze=Ve.get(re),Wt=x.state.lights;if(he===!0&&(Se===!0||C!==R)){const qt=C===R&&re.id===L;Ee.setState(re,C,qt)}let _t=!1;re.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Wt.state.version||Ze.outputColorSpace!==Ie||G.isBatchedMesh&&Ze.batching===!1||!G.isBatchedMesh&&Ze.batching===!0||G.isBatchedMesh&&Ze.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ze.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ze.instancing===!1||!G.isInstancedMesh&&Ze.instancing===!0||G.isSkinnedMesh&&Ze.skinning===!1||!G.isSkinnedMesh&&Ze.skinning===!0||G.isInstancedMesh&&Ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ze.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ze.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ze.instancingMorph===!1&&G.morphTexture!==null||Ze.envMap!==Oe||re.fog===!0&&Ze.fog!==Me||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ee.numPlanes||Ze.numIntersection!==Ee.numIntersection)||Ze.vertexAlphas!==tt||Ze.vertexTangents!==nt||Ze.morphTargets!==qe||Ze.morphNormals!==ot||Ze.morphColors!==Et||Ze.toneMapping!==Tt||Ze.morphTargetsCount!==xt)&&(_t=!0):(_t=!0,Ze.__version=re.version);let ln=Ze.currentProgram;_t===!0&&(ln=is(re,Y,G));let ti=!1,Mn=!1,Cr=!1;const Lt=ln.getUniforms(),En=Ze.uniforms;if(Xe.useProgram(ln.program)&&(ti=!0,Mn=!0,Cr=!0),re.id!==L&&(L=re.id,Mn=!0),ti||R!==C){Xe.buffers.depth.getReversed()?(_e.copy(C.projectionMatrix),ex(_e),tx(_e),Lt.setValue(H,"projectionMatrix",_e)):Lt.setValue(H,"projectionMatrix",C.projectionMatrix),Lt.setValue(H,"viewMatrix",C.matrixWorldInverse);const pn=Lt.map.cameraPosition;pn!==void 0&&pn.setValue(H,De.setFromMatrixPosition(C.matrixWorld)),at.logarithmicDepthBuffer&&Lt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Mn=!0,Cr=!0)}if(G.isSkinnedMesh){Lt.setOptional(H,G,"bindMatrix"),Lt.setOptional(H,G,"bindMatrixInverse");const qt=G.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Lt.setValue(H,"boneTexture",qt.boneTexture,D))}G.isBatchedMesh&&(Lt.setOptional(H,G,"batchingTexture"),Lt.setValue(H,"batchingTexture",G._matricesTexture,D),Lt.setOptional(H,G,"batchingIdTexture"),Lt.setValue(H,"batchingIdTexture",G._indirectTexture,D),Lt.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&Lt.setValue(H,"batchingColorTexture",G._colorsTexture,D));const hn=ie.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&et.update(G,ie,ln),(Mn||Ze.receiveShadow!==G.receiveShadow)&&(Ze.receiveShadow=G.receiveShadow,Lt.setValue(H,"receiveShadow",G.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(En.envMap.value=Oe,En.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&Y.environment!==null&&(En.envMapIntensity.value=Y.environmentIntensity),Mn&&(Lt.setValue(H,"toneMappingExposure",P.toneMappingExposure),Ze.needsLights&&aa(En,Cr),Me&&re.fog===!0&&Ae.refreshFogUniforms(En,Me),Ae.refreshMaterialUniforms(En,re,V,de,x.state.transmissionRenderTarget[C.id]),Vl.upload(H,sa(Ze),En,D)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Vl.upload(H,sa(Ze),En,D),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(H,"center",G.center),Lt.setValue(H,"modelViewMatrix",G.modelViewMatrix),Lt.setValue(H,"normalMatrix",G.normalMatrix),Lt.setValue(H,"modelMatrix",G.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const qt=re.uniformsGroups;for(let pn=0,Rr=qt.length;pn<Rr;pn++){const gt=qt[pn];X.update(gt,ln),X.bind(gt,ln)}}return ln}function aa(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Ql(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,Y,ie){Ve.get(C.texture).__webglTexture=Y,Ve.get(C.depthTexture).__webglTexture=ie;const re=Ve.get(C);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Y){const ie=Ve.get(C);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,ie=0){$=C,B=Y,k=ie;let re=!0,G=null,Me=!1,Re=!1;if(C){const Oe=Ve.get(C);if(Oe.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(H.FRAMEBUFFER,null),re=!1;else if(Oe.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Oe.__hasExternalTextures)D.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const qe=C.depthTexture;if(Oe.__boundDepthTexture!==qe){if(qe!==null&&Ve.has(qe)&&(C.width!==qe.image.width||C.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Re=!0);const nt=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[Y])?G=nt[Y][ie]:G=nt[Y],Me=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?G=Ve.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?G=nt[ie]:G=nt,z.copy(C.viewport),le.copy(C.scissor),te=C.scissorTest}else z.copy(F).multiplyScalar(V).floor(),le.copy(se).multiplyScalar(V).floor(),te=Ne;if(Xe.bindFramebuffer(H.FRAMEBUFFER,G)&&re&&Xe.drawBuffers(C,G),Xe.viewport(z),Xe.scissor(le),Xe.setScissorTest(te),Me){const Oe=Ve.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,ie)}else if(Re){const Oe=Ve.get(C.texture),tt=Y||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.__webglTexture,ie||0,tt)}L=-1},this.readRenderTargetPixels=function(C,Y,ie,re,G,Me,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){Xe.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const Oe=C.texture,tt=Oe.format,nt=Oe.type;if(!at.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-re&&ie>=0&&ie<=C.height-G&&H.readPixels(Y,ie,re,G,rt.convert(tt),rt.convert(nt),Me)}finally{const Oe=$!==null?Ve.get($).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ie,re,G,Me,Re){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){const Oe=C.texture,tt=Oe.format,nt=Oe.type;if(!at.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=C.width-re&&ie>=0&&ie<=C.height-G){Xe.bindFramebuffer(H.FRAMEBUFFER,Ie);const qe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,qe),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels(Y,ie,re,G,rt.convert(tt),rt.convert(nt),0);const ot=$!==null?Ve.get($).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,ot);const Et=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Q0(H,Et,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,qe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.deleteBuffer(qe),H.deleteSync(Et),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,Y=null,ie=0){C.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1]);const re=Math.pow(2,-ie),G=Math.floor(C.image.width*re),Me=Math.floor(C.image.height*re),Re=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;D.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,ie,0,0,Re,Ie,G,Me),Xe.unbindTexture()};const la=H.createFramebuffer(),ua=H.createFramebuffer();this.copyTextureToTexture=function(C,Y,ie=null,re=null,G=0,Me=null){C.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,C=arguments[1],Y=arguments[2],Me=arguments[3]||0,ie=null),Me===null&&(G!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=G,G=0):Me=0);let Re,Ie,Oe,tt,nt,qe,ot,Et,Tt;const kt=C.isCompressedTexture?C.mipmaps[Me]:C.image;if(ie!==null)Re=ie.max.x-ie.min.x,Ie=ie.max.y-ie.min.y,Oe=ie.isBox3?ie.max.z-ie.min.z:1,tt=ie.min.x,nt=ie.min.y,qe=ie.isBox3?ie.min.z:0;else{const hn=Math.pow(2,-G);Re=Math.floor(kt.width*hn),Ie=Math.floor(kt.height*hn),C.isDataArrayTexture?Oe=kt.depth:C.isData3DTexture?Oe=Math.floor(kt.depth*hn):Oe=1,tt=0,nt=0,qe=0}re!==null?(ot=re.x,Et=re.y,Tt=re.z):(ot=0,Et=0,Tt=0);const xt=rt.convert(Y.format),Ze=rt.convert(Y.type);let Wt;Y.isData3DTexture?(D.setTexture3D(Y,0),Wt=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(D.setTexture2DArray(Y,0),Wt=H.TEXTURE_2D_ARRAY):(D.setTexture2D(Y,0),Wt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const _t=H.getParameter(H.UNPACK_ROW_LENGTH),ln=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ti=H.getParameter(H.UNPACK_SKIP_PIXELS),Mn=H.getParameter(H.UNPACK_SKIP_ROWS),Cr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,kt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,kt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,tt),H.pixelStorei(H.UNPACK_SKIP_ROWS,nt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qe);const Lt=C.isDataArrayTexture||C.isData3DTexture,En=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const hn=Ve.get(C),qt=Ve.get(Y),pn=Ve.get(hn.__renderTarget),Rr=Ve.get(qt.__renderTarget);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,pn.__webglFramebuffer),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let gt=0;gt<Oe;gt++)Lt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(C).__webglTexture,G,qe+gt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(Y).__webglTexture,Me,Tt+gt)),H.blitFramebuffer(tt,nt,Re,Ie,ot,Et,Re,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||Ve.has(C)){const hn=Ve.get(C),qt=Ve.get(Y);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,la),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,ua);for(let pn=0;pn<Oe;pn++)Lt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,hn.__webglTexture,G,qe+pn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,hn.__webglTexture,G),En?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qt.__webglTexture,Me,Tt+pn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qt.__webglTexture,Me),G!==0?H.blitFramebuffer(tt,nt,Re,Ie,ot,Et,Re,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):En?H.copyTexSubImage3D(Wt,Me,ot,Et,Tt+pn,tt,nt,Re,Ie):H.copyTexSubImage2D(Wt,Me,ot,Et,tt,nt,Re,Ie);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else En?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Wt,Me,ot,Et,Tt,Re,Ie,Oe,xt,Ze,kt.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,Me,ot,Et,Tt,Re,Ie,Oe,xt,kt.data):H.texSubImage3D(Wt,Me,ot,Et,Tt,Re,Ie,Oe,xt,Ze,kt):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,ot,Et,Re,Ie,xt,Ze,kt.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,ot,Et,kt.width,kt.height,xt,kt.data):H.texSubImage2D(H.TEXTURE_2D,Me,ot,Et,Re,Ie,xt,Ze,kt);H.pixelStorei(H.UNPACK_ROW_LENGTH,_t),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ln),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ti),H.pixelStorei(H.UNPACK_SKIP_ROWS,Mn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Cr),Me===0&&Y.generateMipmaps&&H.generateMipmap(Wt),Xe.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,ie=null,re=null,G=0){return C.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,C=arguments[2],Y=arguments[3],G=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Y,ie,re,G)},this.initRenderTarget=function(C){Ve.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),Xe.unbindTexture()},this.resetState=function(){B=0,k=0,$=null,Xe.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}function $1(s,e,t){const r=-s/2,o=-e/2,l=new _d;return l.moveTo(r+t,o),l.lineTo(r+s-t,o),l.quadraticCurveTo(r+s,o,r+s,o+t),l.lineTo(r+s,o+e-t),l.quadraticCurveTo(r+s,o+e,r+s-t,o+e),l.lineTo(r+t,o+e),l.quadraticCurveTo(r,o+e,r,o+e-t),l.lineTo(r,o+t),l.quadraticCurveTo(r,o,r+t,o),l}function Z1(){const s=Ot.useRef(null);return Ot.useEffect(()=>{const e=s.current,t=new Y1({canvas:e,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const r=new Tx,o=new Qn(42,1,.1,100);o.position.set(0,.4,9);const l=new xr;r.add(l);const c=new uy(16777215,1.3);r.add(c);const f=new Um(16763210,2.2);f.position.set(4,5,6),r.add(f);const h=new Um(5032432,1.2);h.position.set(-4,-2,5),r.add(h);const p=new xr;l.add(p);const g=new In(new xd(1.6,48,48),new jo({color:533837,metalness:.18,roughness:.48,transparent:!0,opacity:.78}));p.add(g);const v=new Xl({color:16102400,transparent:!0,opacity:.72,side:fi});[0,Math.PI/3,-Math.PI/3].forEach(L=>{const R=new In(new yd(1.92,.01,8,120),v);R.rotation.set(Math.PI/2,L,0),p.add(R)});const y=[];for(let L=0;L<140;L+=1){const R=Math.random()*Math.PI*2,z=Math.acos(2*Math.random()-1),le=1.72+Math.random()*.08;y.push(le*Math.sin(z)*Math.cos(R),le*Math.sin(z)*Math.sin(R),le*Math.cos(z))}const S=new ei;S.setAttribute("position",new dn(y,3)),p.add(new Cx(S,new Vg({color:16777215,size:.025,transparent:!0,opacity:.88})));const M=new xr;l.add(M);const A=$1(1.8,.78,.08),_=new ql(A),x=[new jo({color:16777215,metalness:.05,roughness:.42}),new jo({color:1059929,metalness:.12,roughness:.38}),new jo({color:16102400,metalness:.1,roughness:.36})];for(let L=0;L<5;L+=1){const R=new In(_,x[L%x.length]);R.position.set(2.25+L*.08,1.25-L*.62,-.25+L*.08),R.rotation.set(.02*L,-.22,-.06),M.add(R);const z=new In(new so(1.12,.035,.02),new Xl({color:L%2?16777215:664137}));z.position.set(R.position.x+.02,R.position.y+.1,R.position.z+.03),z.rotation.copy(R.rotation),M.add(z)}const I=new xr,N=new _d;N.moveTo(0,.34),N.lineTo(1.04,0),N.lineTo(0,-.34),N.lineTo(.18,0),N.lineTo(0,.34);const P=new In(new ql(N),new jo({color:16761640,metalness:.2,roughness:.28,side:fi}));I.add(P),I.position.set(-2.4,-1.45,.25),I.rotation.set(.24,-.38,.2),l.add(I);const q=()=>{const L=e.getBoundingClientRect(),R=Math.max(1,L.width),z=Math.max(1,L.height);t.setSize(R,z,!1),o.aspect=R/z,o.updateProjectionMatrix();const le=R<620;l.position.set(le?-.15:-.95,le?-.15:-.02,0),l.scale.setScalar(le?.72:.9)};let B=0;const k=new fy,$=()=>{const L=k.getElapsedTime();p.rotation.y=L*.23,p.rotation.x=Math.sin(L*.45)*.05,M.position.y=Math.sin(L*.9)*.08,I.position.x=-2.4+Math.sin(L*.8)*.18,I.position.y=-1.45+Math.cos(L*.7)*.1,I.rotation.z=.2+Math.sin(L*.6)*.08,t.render(r,o),B=requestAnimationFrame($)};return q(),$(),window.addEventListener("resize",q),()=>{cancelAnimationFrame(B),window.removeEventListener("resize",q),t.dispose(),_.dispose(),g.geometry.dispose(),S.dispose()}},[]),T.jsx("canvas",{ref:s,className:"hero-canvas","aria-label":"Sawaed 3D job matching scene"})}const ag={brand:{},hero:{},stats:[],professions:[],workflow:[],reports:[],offers:{plans:[]},campaign:{},testimonials:{show:!1,items:[]},faq:[]};function to(s){window.history.pushState({},"",s),window.dispatchEvent(new PopStateEvent("popstate"))}function K1(s,e){const t=String(s||"").replace(/[^\d+]/g,"");return`https://wa.me/${t.startsWith("+")?t.slice(1):t.replace(/^0/,"962")}?text=${encodeURIComponent(e)}`}function rv(s={}){const e=String(s.instagramUrl||"").trim();if(e)return e;const t=String(s.instagramAccount||"").trim().replace(/^@/,"");return t?`https://www.instagram.com/${t}/`:""}function J1(s={}){const e=String(s.instagramAccount||"").trim();if(e)return e.startsWith("@")?e:`@${e}`;try{const r=new URL(rv(s)).pathname.split("/").filter(Boolean)[0];return r?`@${r}`:"Instagram"}catch{return"Instagram"}}function qs(s,e){const t=s.brand||{},r=[];t.whatsapp&&t.whatsappEnabled!==!1&&r.push({key:"whatsapp",label:"واتساب",value:t.whatsapp,href:K1(t.whatsapp,e),Icon:a0});const o=rv(t);return o&&t.instagramEnabled!==!1&&r.push({key:"instagram",label:"إنستغرام",value:J1(t),href:o,Icon:s0}),r}function sv(s,e){var r,o;const t=qs(s,e);return t.length?t[0]:{key:"email",label:"البريد",value:((r=s.brand)==null?void 0:r.email)||"",href:`mailto:${((o=s.brand)==null?void 0:o.email)||""}`,Icon:ad}}function lg(s){return s.some(e=>e.key==="whatsapp")&&s.some(e=>e.key==="instagram")?"يمكنك مراسلتنا مباشرة عبر واتساب أو إنستغرام أيضًا.":s.some(e=>e.key==="instagram")?"يمكنك مراسلتنا مباشرة عبر إنستغرام أيضًا.":s.some(e=>e.key==="whatsapp")?"يمكنك مراسلتنا مباشرة عبر واتساب أيضًا.":"يمكنك مراسلتنا عبر البريد وسنرد عليك بأقرب وقت."}function Q1(s,e,t){const r=JSON.parse(JSON.stringify(s)),o=e.split(".");let l=r;return o.slice(0,-1).forEach(c=>{l[c]=l[c]||{},l=l[c]}),l[o[o.length-1]]=t,r}function ug(s){return Array.isArray(s)?s.join(`
`):""}function cg(s){return String(s||"").split(`
`).map(e=>e.trim()).filter(Boolean)}function eT(s){const e=String(s||"").trim();if(!e)return"";try{const t=new URL(e);if(t.hostname.includes("youtu.be")){const r=t.pathname.replace("/","").split("/")[0];return r?`https://www.youtube.com/embed/${r}`:""}if(t.hostname.includes("youtube.com")){const r=t.pathname.match(/\/embed\/([^/?]+)/),o=t.pathname.match(/\/shorts\/([^/?]+)/),l=t.searchParams.get("v")||(r==null?void 0:r[1])||(o==null?void 0:o[1]);return l?`https://www.youtube.com/embed/${l}`:""}}catch{return""}return""}function qo(s,e=0){return typeof s=="string"?{name:s,image:`/assets/professions/profession-${String(e+1).padStart(2,"0")}.jpg`}:{name:(s==null?void 0:s.name)||"",image:(s==null?void 0:s.image)||`/assets/professions/profession-${String(e+1).padStart(2,"0")}.jpg`}}function Bs(s,e,t,r){let o=document.head.querySelector(s);o||(o=document.createElement("meta"),Object.entries(e).forEach(([l,c])=>{o.setAttribute(l,c)}),document.head.appendChild(o)),o.setAttribute(t,r||"")}function ov(s){var o,l,c;const e=((o=s.seo)==null?void 0:o.title)||"سواعد | منصة تنظيم ومتابعة فرص العمل",t=((l=s.seo)==null?void 0:l.description)||"سواعد منصة تساعد الباحثين عن عمل على متابعة فرص مناسبة وتنظيم التقديم واستلام تقارير واضحة.",r=((c=s.seo)==null?void 0:c.keywords)||"سواعد, وظائف الأردن, فرص عمل, تقديم وظائف, متابعة وظائف";document.title=e,Bs('meta[name="description"]',{name:"description"},"content",t),Bs('meta[name="keywords"]',{name:"keywords"},"content",r),Bs('meta[property="og:title"]',{property:"og:title"},"content",e),Bs('meta[property="og:description"]',{property:"og:description"},"content",t),Bs('meta[name="twitter:title"]',{name:"twitter:title"},"content",e),Bs('meta[name="twitter:description"]',{name:"twitter:description"},"content",t)}function tT(){const[s,e]=Ot.useState(ag),[t,r]=Ot.useState(!0);return Ot.useEffect(()=>{fetch("/api/content").then(o=>o.json()).then(o=>{const l={...ag,...o};e(l),ov(l)}).finally(()=>r(!1))},[]),{content:s,setContent:e,loading:t}}function av({content:s}){const[e,t]=Ot.useState(!1),o=qs(s,"مرحبا، أريد الاشتراك أو معرفة تفاصيل خدمة سواعد."),l=[["الخدمة","/#service"],["المصداقية","/#reports"],["العروض","/offers"],["تواصل","/#contact"]];return T.jsxs("header",{className:"site-header",children:[T.jsxs("button",{className:"brand-button",onClick:()=>to("/"),"aria-label":"Sawaed home",children:[T.jsx("span",{className:"logo-frame",children:T.jsx("img",{src:s.brand.logo,alt:"Sawaed"})}),T.jsxs("span",{children:[T.jsx("strong",{children:s.brand.name||"سواعد"}),T.jsx("small",{children:s.brand.tagline})]})]}),T.jsx("nav",{className:e?"nav-links is-open":"nav-links","aria-label":"Main navigation",children:l.map(([c,f])=>f.startsWith("/#")?T.jsx("a",{href:f,onClick:()=>t(!1),children:c},f):T.jsx("button",{onClick:()=>to(f),children:c},f))}),T.jsxs("div",{className:"header-actions",children:[o.length?o.map(({key:c,label:f,href:h,Icon:p})=>T.jsx("a",{className:"icon-button",href:h,title:f,"aria-label":f,children:T.jsx(p,{size:20})},c)):T.jsx("a",{className:"icon-button",href:`mailto:${s.brand.email}`,title:"البريد","aria-label":"البريد",children:T.jsx(ad,{size:20})}),T.jsx("button",{className:"menu-button",onClick:()=>t(c=>!c),children:"القائمة"})]})]})}function nT({content:s}){var c;const t=sv(s,"مرحبا سواعد، أريد أن أبدأ خدمة متابعة فرص العمل."),r=t.key==="instagram"?"ابدأ عبر إنستغرام":t.key==="email"?"راسلنا عبر البريد":s.hero.primaryCta,o=t.Icon,l=(c=s.campaign)!=null&&c.heroBackground?{"--hero-bg":`url("${s.campaign.heroBackground}")`}:void 0;return T.jsxs("section",{className:"hero-section",style:l,children:[T.jsx(Z1,{}),T.jsxs("div",{className:"hero-overlay",children:[T.jsxs("p",{className:"eyebrow",children:[T.jsx(mg,{size:18}),s.hero.eyebrow]}),T.jsx("h1",{children:s.hero.title}),T.jsx("p",{className:"hero-copy",children:s.hero.subtitle}),T.jsxs("div",{className:"hero-actions",children:[T.jsxs("a",{className:"primary-action",href:t.href,children:[T.jsx(o,{size:20}),r]}),T.jsxs("button",{className:"secondary-action",onClick:()=>to("/offers"),children:[s.hero.secondaryCta,T.jsx(dg,{size:18})]})]}),T.jsx("p",{className:"trust-note",children:s.hero.trustNote})]}),T.jsx("div",{className:"hero-stats","aria-label":"Sawaed summary",children:(s.stats||[]).map(f=>T.jsxs("div",{children:[T.jsx("strong",{children:f.value}),T.jsx("span",{children:f.label})]},f.label))})]})}function Tr({eyebrow:s,title:e,text:t}){return T.jsxs("div",{className:"section-title",children:[T.jsx("p",{children:s}),T.jsx("h2",{children:e}),t?T.jsx("span",{children:t}):null]})}function iT({content:s}){const e=[pg,r0,i0];return T.jsxs("section",{id:"service",className:"section service-band",children:[T.jsx(Tr,{eyebrow:"كيف نخدم الباحث عن عمل",title:"خدمة واضحة تساعدك على الوصول لفرص أنسب",text:"نراجع سيرتك الذاتية ومعلوماتك، نتابع الوظائف المناسبة لمجالك، وننظم خطوات التقديم والمتابعة بأسلوب احترافي وواضح."}),T.jsx("div",{className:"process-grid",children:(s.workflow||[]).map((t,r)=>{const o=e[r%e.length];return T.jsxs("article",{className:"process-item",children:[T.jsx(o,{size:24}),T.jsxs("span",{children:["0",r+1]}),T.jsx("h3",{children:t.title}),T.jsx("p",{children:t.description})]},t.title)})})]})}function rT({content:s}){const e=(s.professions||[]).map(qo);return T.jsxs("section",{className:"section professions-section",children:[T.jsx(Tr,{eyebrow:"المجالات المخدومة",title:"مهن متعددة وفرص نتابعها لك باحترافية",text:"سواء كنت خريجًا جديدًا أو صاحب خبرة، نساعدك على متابعة الفرص القريبة من مجالك وخطوتك المهنية القادمة، والعديد من الفرص الأخرى."}),T.jsx("div",{className:"profession-grid",children:e.map((t,r)=>T.jsxs("article",{className:"profession-card",children:[T.jsx("img",{src:t.image,alt:"","aria-hidden":"true",loading:"lazy"}),T.jsxs("div",{children:[T.jsx("small",{children:String(r+1).padStart(2,"0")}),T.jsx("h3",{children:t.name})]})]},`${t.name}-${r}`))}),T.jsx("p",{className:"profession-note",children:"والعديد من المجالات والفرص الأخرى حسب خبرتك وهدفك المهني."})]})}function sT({content:s}){return T.jsx("section",{id:"reports",className:"section reports-section",children:T.jsxs("div",{className:"reports-layout",children:[T.jsxs("div",{children:[T.jsx(Tr,{eyebrow:"المصداقية",title:"تتيح لك سواعد متابعة عملية التقديم أولًا بأول",text:"يتم إرسال تقرير يومي يحتوي على ملخص واضح للتقديمات التي تمت، والفرص المناسبة، والوظائف التي تحتاج متابعة منك، وفرص إضافية قريبة من مجالك."}),T.jsx("div",{className:"report-list",children:(s.reports||[]).map(e=>T.jsxs("div",{className:"report-row",children:[T.jsx(hg,{size:20}),T.jsx("span",{children:e})]},e))})]}),T.jsxs("div",{className:"report-preview",children:[T.jsxs("div",{className:"sheet-top",children:[T.jsx("span",{}),T.jsx("span",{}),T.jsx("span",{})]}),T.jsxs("div",{className:"sheet-header",children:[T.jsx(pg,{size:28}),T.jsx("strong",{children:"تقرير سواعد اليومي"})]}),T.jsx("div",{className:"sheet-table",children:["فرص مناسبة","تم التقديم","وظائف تحتاج متابعة","فرص إضافية"].map((e,t)=>T.jsxs("div",{children:[T.jsx("span",{children:e}),T.jsx("strong",{children:["1000+","400+","7+","5000+"][t]})]},e))})]})]})})}function oT({content:s}){const e=s.testimonials||{show:!1,items:[]};return e.show?T.jsxs("section",{className:"section testimonials-section",children:[T.jsx(Tr,{eyebrow:"آراء العملاء",title:e.headline||"ماذا يقول عملاء سواعد؟",text:e.intro||"تجارب مختصرة من أشخاص استخدموا سواعد لتنظيم متابعة فرص العمل."}),T.jsx("div",{className:"testimonial-grid",children:(e.items||[]).map((t,r)=>T.jsxs("article",{className:"testimonial-card",children:[T.jsx("img",{src:t.image||"/assets/testimonials/testimonial-01.jpg",alt:t.name||"عميل سواعد",loading:"lazy"}),T.jsxs("div",{children:[T.jsx("p",{children:t.quote}),T.jsx("strong",{children:t.name}),T.jsx("span",{children:t.role})]})]},`${t.name}-${r}`))})]}):null}function lv({content:s,full:e=!1}){const t=s.offers||{plans:[]};return T.jsxs("section",{id:"offers",className:e?"section offers-page":"section offers-section",children:[T.jsx(Tr,{eyebrow:"العروض",title:t.headline,text:t.intro}),t.priceNote?T.jsx("p",{className:"offer-price-note",children:t.priceNote}):null,T.jsx("div",{className:"plans-grid",children:(t.plans||[]).map(r=>T.jsxs("article",{className:r.highlighted?"plan-card highlighted":"plan-card",children:[T.jsxs("div",{className:"plan-heading",children:[T.jsx("h3",{children:r.name}),T.jsx(u0,{size:22})]}),t.showPrices?T.jsxs("div",{className:"price-line",children:[T.jsx("strong",{children:r.price}),T.jsx("span",{children:r.duration})]}):null,T.jsx("p",{children:r.description}),T.jsx("ul",{children:(r.features||[]).map(o=>T.jsxs("li",{children:[T.jsx(hg,{size:17}),o]},o))})]},r.name))}),e?null:T.jsxs("button",{className:"inline-more",onClick:()=>to("/offers"),children:["عرض كل التفاصيل",T.jsx(dg,{size:18})]})]})}function aT({content:s}){var t,r;const e=eT(((t=s.campaign)==null?void 0:t.youtubeUrl)||((r=s.campaign)==null?void 0:r.video));return T.jsxs("section",{className:"section campaign-section",children:[T.jsx(Tr,{eyebrow:"شرح الخدمة",title:"من الفوضى إلى متابعة مرتبة",text:"سواعد لا يبيع وعودًا؛ سواعد يرتب البحث والتقديم والمتابعة حتى تكون خطواتك أوضح."}),T.jsxs("div",{className:"media-grid",children:[T.jsxs("figure",{children:[T.jsx("img",{src:s.campaign.image,alt:"Sawaed campaign visual"}),T.jsx("figcaption",{children:s.campaign.caption})]}),T.jsxs("figure",{children:[e?T.jsx("iframe",{className:"youtube-frame",src:e,title:"فيديو تعريفي عن سواعد",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):T.jsxs("div",{className:"video-placeholder",children:[T.jsx(mg,{size:28}),T.jsx("strong",{children:"فيديو تعريفي قريبًا"}),T.jsx("span",{children:"يمكنك التواصل معنا لمعرفة تفاصيل الخدمة والخطة الأنسب لك."})]}),T.jsx("figcaption",{children:"فيديو مختصر يوضح طريقة الاستفادة من خدمة سواعد."})]})]})]})}function uv({content:s}){const[e,t]=Ot.useState({name:"",phone:"",email:"",profession:"",message:""}),[r,o]=Ot.useState(""),l="مرحبا، أرسلت طلب تواصل من موقع سواعد وأريد متابعة التفاصيل.",c=qs(s,l),f=sv(s,l),h=f.Icon;async function p(g){g.preventDefault(),o("sending");try{if(!(await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok){o("error");return}t({name:"",phone:"",email:"",profession:"",message:""}),o("sent")}catch{o("error")}}return T.jsxs("section",{id:"contact",className:"section contact-section",children:[T.jsxs("div",{className:"contact-info",children:[T.jsx(Tr,{eyebrow:"تواصل",title:"ابدأ بخطوة واحدة مرتبة",text:"اكتب مجال شغلك أو نوع الوظيفة التي تبحث عنها، وسنوضح لك الخدمة الأنسب وطريقة البدء."}),T.jsxs("div",{className:"contact-cards",children:[qs(s,"مرحبا، أريد تفاصيل خدمة سواعد.").map(({key:g,href:v,Icon:y,label:S,value:M})=>T.jsxs("a",{href:v,children:[T.jsx(y,{size:22}),T.jsx("span",{children:S}),T.jsx("strong",{children:M})]},g)),qs(s,"مرحبا، أريد تفاصيل خدمة سواعد.").length?null:T.jsxs("a",{href:`mailto:${s.brand.email}`,children:[T.jsx(ad,{size:22}),T.jsx("span",{children:"البريد"}),T.jsx("strong",{children:s.brand.email})]})]})]}),T.jsxs("form",{className:"contact-form",onSubmit:p,children:[T.jsxs("label",{children:["الاسم",T.jsx("input",{value:e.name,onChange:g=>t({...e,name:g.target.value}),required:!0})]}),T.jsxs("label",{children:["رقم الهاتف أو واتساب",T.jsx("input",{value:e.phone,onChange:g=>t({...e,phone:g.target.value}),required:!0})]}),T.jsxs("label",{children:["البريد الإلكتروني",T.jsx("input",{type:"email",value:e.email,onChange:g=>t({...e,email:g.target.value})})]}),T.jsxs("label",{children:["المجال المهني",T.jsx("input",{value:e.profession,onChange:g=>t({...e,profession:g.target.value})})]}),T.jsxs("label",{className:"full-field",children:["ملاحظات",T.jsx("textarea",{value:e.message,onChange:g=>t({...e,message:g.target.value})})]}),T.jsxs("button",{className:"primary-action",type:"submit",disabled:r==="sending",children:[T.jsx(l0,{size:18}),r==="sending"?"جاري الإرسال...":"إرسال الطلب"]}),r==="sent"?T.jsxs("div",{className:"form-status-card full-field",children:[T.jsx("strong",{children:"تم استلام طلبك بنجاح."}),T.jsxs("span",{children:["لتسريع المتابعة، ",lg(c)]}),T.jsxs("a",{href:f.href,children:[T.jsx(h,{size:18}),"تواصل عبر ",f.label]})]}):null,r==="error"?T.jsxs("div",{className:"form-status-card error full-field",children:[T.jsx("strong",{children:"تعذر حفظ الطلب الآن."}),T.jsx("span",{children:lg(c)}),T.jsxs("a",{href:f.href,children:[T.jsx(h,{size:18}),"فتح ",f.label]})]}):null]})]})}function lT({content:s}){return T.jsxs("section",{className:"section faq-section",children:[T.jsx(Tr,{eyebrow:"أسئلة متكررة",title:"إجابات مختصرة قبل التواصل"}),T.jsx("div",{className:"faq-list",children:(s.faq||[]).map(e=>T.jsxs("details",{children:[T.jsx("summary",{children:e.question}),T.jsx("p",{children:e.answer})]},e.question))})]})}function cv({content:s}){const e=new Date().getFullYear(),r=qs(s,"مرحبا، أريد معرفة تفاصيل خدمة سواعد.");return T.jsxs("footer",{className:"site-footer",children:[T.jsxs("div",{className:"footer-main",children:[T.jsxs("div",{className:"footer-brand",children:[T.jsx("img",{src:s.brand.logo,alt:"Sawaed"}),T.jsxs("div",{children:[T.jsx("strong",{children:s.brand.name}),T.jsx("span",{children:"متابعة منظمة للفرص، تقارير واضحة، وخطوة أسهل نحو العمل المناسب."})]})]}),T.jsxs("nav",{className:"footer-links","aria-label":"Footer navigation",children:[T.jsx("a",{href:"/#service",children:"الخدمة"}),T.jsx("a",{href:"/#reports",children:"المصداقية"}),T.jsx("button",{type:"button",onClick:()=>to("/offers"),children:"العروض"}),T.jsx("a",{href:"/#contact",children:"تواصل"})]}),T.jsxs("div",{className:"footer-contact",children:[r.map(({key:l,href:c,value:f,label:h})=>T.jsx("a",{href:c,"aria-label":h,children:f},l)),T.jsx("a",{href:`mailto:${s.brand.email}`,children:s.brand.email})]})]}),T.jsxs("div",{className:"footer-bottom",children:[T.jsxs("span",{children:["جميع الحقوق محفوظة © ",e," ",s.brand.name]}),T.jsx("span",{children:"جاهزون نساعدك ترتب خطوتك القادمة."})]})]})}function uT({content:s}){return T.jsxs(T.Fragment,{children:[T.jsx(av,{content:s}),T.jsxs("main",{children:[T.jsx(nT,{content:s}),T.jsx(iT,{content:s}),T.jsx(rT,{content:s}),T.jsx(sT,{content:s}),T.jsx(oT,{content:s}),T.jsx(lv,{content:s}),T.jsx(aT,{content:s}),T.jsx(lT,{content:s}),T.jsx(uv,{content:s})]}),T.jsx(cv,{content:s})]})}function cT({content:s}){return T.jsxs(T.Fragment,{children:[T.jsx(av,{content:s}),T.jsxs("main",{className:"page-shell",children:[T.jsx(lv,{content:s,full:!0}),T.jsx(uv,{content:s})]}),T.jsx(cv,{content:s})]})}function mt({label:s,value:e,onChange:t,textarea:r=!1}){return T.jsxs("label",{className:r?"admin-field full-field":"admin-field",children:[s,r?T.jsx("textarea",{value:e||"",onChange:o=>t(o.target.value)}):T.jsx("input",{value:e||"",onChange:o=>t(o.target.value)})]})}function fT({initialContent:s,setPublicContent:e}){var ce,de,V,fe,oe,F,se,Ne,ee,he,Se,_e,we,De,$e,Rt,ft,bt,H,nn,ut,at,Xe,Mt,Ve,D,w;const[t,r]=Ot.useState(localStorage.getItem("sawaedAdminToken")||""),[o,l]=Ot.useState("Admin"),[c,f]=Ot.useState(""),[h,p]=Ot.useState(s),[g,v]=Ot.useState([]),[y,S]=Ot.useState("");Ot.useEffect(()=>{p(s)},[s]),Ot.useEffect(()=>{M()},[t]);async function M(){if(!t)return;const b=await fetch("/api/admin/leads",{headers:{Authorization:`Bearer ${t}`}});v(b.ok?await b.json():[])}async function A(b){b.preventDefault();const j=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o,password:c})});if(!j.ok){S("wrong-password");return}const Z=await j.json();localStorage.setItem("sawaedAdminToken",Z.token),r(Z.token),S("")}function _(b,j){p(Z=>Q1(Z,b,j))}async function x(b,j){if(!b)return;const Z=new FormData;Z.append("image",b);const ue=await fetch("/api/admin/upload",{method:"POST",headers:{Authorization:`Bearer ${t}`},body:Z});if(ue.ok){const Ge=await ue.json();_(j,Ge.url),S("image-uploaded")}else S("save-error")}async function I(){S("saving");const b=await fetch("/api/admin/content",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(h)});if(b.ok){const j=await b.json();e(j.content),p(j.content),ov(j.content),S("saved")}else S("save-error")}function N(b,j){var ue;const Z=[...((ue=h.offers)==null?void 0:ue.plans)||[]];Z[b]={...Z[b],...j},_("offers.plans",Z)}function P(b,j){const Z=[...h.stats||[]];Z[b]={...Z[b],...j},_("stats",Z)}function q(b,j){const Z=(h.professions||[]).map(qo);Z[b]={...Z[b],...j},_("professions",Z)}function B(){const b=(h.professions||[]).map(qo);b.push({name:"تخصص جديد",image:`/assets/professions/profession-${String(b.length%10+1).padStart(2,"0")}.jpg`}),_("professions",b)}function k(b){const j=(h.professions||[]).map(qo);j.splice(b,1),_("professions",j)}function $(){var j;const b=[...((j=h.offers)==null?void 0:j.plans)||[]];b.push({name:"عرض جديد",price:"حسب العرض الحالي",duration:"مدة قابلة للتحديد",description:"اكتب وصف العرض هنا.",features:["ميزة أولى","ميزة ثانية"],highlighted:!1}),_("offers.plans",b)}function L(b){var Z;const j=[...((Z=h.offers)==null?void 0:Z.plans)||[]];j.splice(b,1),_("offers.plans",j)}function R(b,j){const Z=[...h.faq||[]];Z[b]={...Z[b],...j},_("faq",Z)}function z(){const b=[...h.faq||[]];b.push({question:"سؤال جديد",answer:"اكتب الإجابة هنا."}),_("faq",b)}function le(b){const j=[...h.faq||[]];j.splice(b,1),_("faq",j)}function te(b,j){const Z={...h.testimonials||{items:[]}},ue=[...Z.items||[]];ue[b]={...ue[b],...j},_("testimonials",{...Z,items:ue})}function pe(){const b={...h.testimonials||{show:!0,items:[]}},j=[...b.items||[]];j.push({name:"اسم العميل",role:"باحث عن عمل",image:`/assets/testimonials/testimonial-${String(j.length%3+1).padStart(2,"0")}.jpg`,quote:"اكتب رأي العميل هنا."}),_("testimonials",{...b,items:j})}function ge(b){const j={...h.testimonials||{items:[]}},Z=[...j.items||[]];Z.splice(b,1),_("testimonials",{...j,items:Z})}return t?T.jsxs("main",{className:"admin-shell",children:[T.jsxs("aside",{className:"admin-side",children:[T.jsx("strong",{children:"سواعد"}),T.jsx("button",{onClick:()=>to("/"),children:"عرض الموقع"}),T.jsxs("button",{onClick:I,children:[T.jsx(Qp,{size:18}),"حفظ كل التعديلات"]}),y==="saved"?T.jsx("span",{children:"تم الحفظ"}):null,y==="image-uploaded"?T.jsx("span",{children:"تم رفع الصورة"}):null,y==="save-error"?T.jsx("span",{className:"error",children:"فشل الحفظ"}):null]}),T.jsxs("section",{className:"admin-content",children:[T.jsxs("div",{className:"admin-header",children:[T.jsxs("div",{children:[T.jsx("p",{children:"Dashboard"}),T.jsx("h1",{children:"إدارة الموقع والعروض"})]}),T.jsxs("button",{className:"primary-action",onClick:I,children:[T.jsx(Qp,{size:18}),"حفظ"]})]}),T.jsxs("div",{className:"admin-panel",children:[T.jsx("h2",{children:"الهوية والتواصل"}),T.jsxs("div",{className:"admin-grid",children:[T.jsx(mt,{label:"اسم العلامة",value:(ce=h.brand)==null?void 0:ce.name,onChange:b=>_("brand.name",b)}),T.jsx(mt,{label:"الشعار المختصر",value:(de=h.brand)==null?void 0:de.tagline,onChange:b=>_("brand.tagline",b)}),T.jsx(mt,{label:"واتساب",value:(V=h.brand)==null?void 0:V.whatsapp,onChange:b=>_("brand.whatsapp",b)}),T.jsx(mt,{label:"حساب إنستغرام",value:(fe=h.brand)==null?void 0:fe.instagramAccount,onChange:b=>_("brand.instagramAccount",b)}),T.jsx(mt,{label:"رابط إنستغرام",value:(oe=h.brand)==null?void 0:oe.instagramUrl,onChange:b=>_("brand.instagramUrl",b)}),T.jsx(mt,{label:"البريد",value:(F=h.brand)==null?void 0:F.email,onChange:b=>_("brand.email",b)})]}),T.jsxs("div",{className:"contact-toggle-grid",children:[T.jsxs("label",{className:"toggle-row",children:[T.jsx("input",{type:"checkbox",checked:((se=h.brand)==null?void 0:se.whatsappEnabled)!==!1,onChange:b=>_("brand.whatsappEnabled",b.target.checked)}),"إظهار واتساب في الموقع"]}),T.jsxs("label",{className:"toggle-row",children:[T.jsx("input",{type:"checkbox",checked:((Ne=h.brand)==null?void 0:Ne.instagramEnabled)!==!1,onChange:b=>_("brand.instagramEnabled",b.target.checked)}),"إظهار إنستغرام في الموقع"]})]})]}),T.jsxs("div",{className:"admin-panel",children:[T.jsx("h2",{children:"أرقام الواجهة الرئيسية"}),T.jsx("div",{className:"stats-editor-list",children:(h.stats||[]).map((b,j)=>T.jsxs("div",{className:"stat-editor",children:[T.jsx(mt,{label:"الرقم",value:b.value,onChange:Z=>P(j,{value:Z})}),T.jsx(mt,{label:"الوصف",value:b.label,onChange:Z=>P(j,{label:Z})})]},`${b.label}-${j}`))})]}),T.jsxs("div",{className:"admin-panel",children:[T.jsx("h2",{children:"الصفحة الرئيسية"}),T.jsxs("div",{className:"admin-grid",children:[T.jsx(mt,{label:"النص الصغير",value:(ee=h.hero)==null?void 0:ee.eyebrow,onChange:b=>_("hero.eyebrow",b)}),T.jsx(mt,{label:"العنوان الرئيسي",value:(he=h.hero)==null?void 0:he.title,onChange:b=>_("hero.title",b),textarea:!0}),T.jsx(mt,{label:"الوصف",value:(Se=h.hero)==null?void 0:Se.subtitle,onChange:b=>_("hero.subtitle",b),textarea:!0}),T.jsx(mt,{label:"ملاحظة الثقة",value:(_e=h.hero)==null?void 0:_e.trustNote,onChange:b=>_("hero.trustNote",b),textarea:!0})]})]}),T.jsxs("div",{className:"admin-panel",children:[T.jsx("h2",{children:"صور الشرح وفيديو يوتيوب"}),T.jsxs("div",{className:"admin-grid",children:[T.jsx(mt,{label:"خلفية الصفحة الرئيسية",value:(we=h.campaign)==null?void 0:we.heroBackground,onChange:b=>_("campaign.heroBackground",b)}),T.jsx(mt,{label:"صورة شرح الخدمة",value:(De=h.campaign)==null?void 0:De.image,onChange:b=>_("campaign.image",b)}),T.jsx(mt,{label:"رابط فيديو يوتيوب اختياري",value:($e=h.campaign)==null?void 0:$e.youtubeUrl,onChange:b=>_("campaign.youtubeUrl",b)}),T.jsx(mt,{label:"وصف صورة الشرح",value:(Rt=h.campaign)==null?void 0:Rt.caption,onChange:b=>_("campaign.caption",b),textarea:!0}),T.jsxs("label",{className:"admin-field",children:["رفع خلفية الصفحة الرئيسية",T.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/webp",onChange:b=>{var j;return x((j=b.target.files)==null?void 0:j[0],"campaign.heroBackground")}})]}),T.jsxs("label",{className:"admin-field",children:["رفع صورة شرح الخدمة",T.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/webp",onChange:b=>{var j;return x((j=b.target.files)==null?void 0:j[0],"campaign.image")}})]})]})]}),T.jsxs("div",{className:"admin-panel",children:[T.jsx("h2",{children:"SEO وظهور Google"}),T.jsxs("div",{className:"admin-grid",children:[T.jsx(mt,{label:"عنوان محركات البحث",value:(ft=h.seo)==null?void 0:ft.title,onChange:b=>_("seo.title",b)}),T.jsx(mt,{label:"وصف محركات البحث",value:(bt=h.seo)==null?void 0:bt.description,onChange:b=>_("seo.description",b),textarea:!0}),T.jsx(mt,{label:"كلمات مفتاحية",value:(H=h.seo)==null?void 0:H.keywords,onChange:b=>_("seo.keywords",b),textarea:!0})]})]}),T.jsxs("div",{className:"admin-panel",children:[T.jsx("h2",{children:"المهن والتقارير"}),T.jsx("div",{className:"admin-grid",children:T.jsx(mt,{label:"بنود التقرير، كل بند بسطر",value:ug(h.reports),onChange:b=>_("reports",cg(b)),textarea:!0})}),T.jsxs("div",{className:"editor-section-heading",children:[T.jsx("strong",{children:"التخصصات المصورة"}),T.jsx("button",{type:"button",onClick:B,children:"إضافة تخصص"})]}),T.jsx("div",{className:"profession-editor-list",children:(h.professions||[]).map(qo).map((b,j)=>T.jsxs("div",{className:"profession-editor",children:[T.jsx("img",{src:b.image,alt:b.name}),T.jsx(mt,{label:"اسم التخصص",value:b.name,onChange:Z=>q(j,{name:Z})}),T.jsx(mt,{label:"رابط الصورة",value:b.image,onChange:Z=>q(j,{image:Z})}),T.jsxs("label",{className:"admin-field",children:["رفع صورة",T.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/webp",onChange:Z=>{var ue;return x((ue=Z.target.files)==null?void 0:ue[0],`professions.${j}.image`)}})]}),T.jsx("button",{type:"button",className:"danger-button",onClick:()=>k(j),children:"حذف التخصص"})]},`${b.name}-${j}`))})]}),T.jsxs("div",{className:"admin-panel",children:[T.jsx("h2",{children:"آراء العملاء"}),T.jsxs("label",{className:"toggle-row",children:[T.jsx("input",{type:"checkbox",checked:!!((nn=h.testimonials)!=null&&nn.show),onChange:b=>_("testimonials.show",b.target.checked)}),"عرض قسم آراء العملاء في الموقع"]}),T.jsxs("div",{className:"admin-grid",children:[T.jsx(mt,{label:"عنوان القسم",value:(ut=h.testimonials)==null?void 0:ut.headline,onChange:b=>_("testimonials.headline",b)}),T.jsx(mt,{label:"وصف القسم",value:(at=h.testimonials)==null?void 0:at.intro,onChange:b=>_("testimonials.intro",b),textarea:!0})]}),T.jsx("button",{className:"admin-add-button",type:"button",onClick:pe,children:"إضافة رأي عميل"}),T.jsx("div",{className:"testimonial-editor-list",children:(h.testimonials&&h.testimonials.items||[]).map((b,j)=>T.jsxs("div",{className:"testimonial-editor",children:[T.jsxs("div",{className:"editor-title-row",children:[T.jsxs("strong",{children:["رأي رقم ",j+1]}),T.jsx("button",{type:"button",onClick:()=>ge(j),children:"حذف"})]}),T.jsx("img",{src:b.image,alt:b.name}),T.jsx(mt,{label:"اسم العميل",value:b.name,onChange:Z=>te(j,{name:Z})}),T.jsx(mt,{label:"وصف مختصر",value:b.role,onChange:Z=>te(j,{role:Z})}),T.jsx(mt,{label:"رابط الصورة",value:b.image,onChange:Z=>te(j,{image:Z})}),T.jsxs("label",{className:"admin-field",children:["رفع صورة",T.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/webp",onChange:Z=>{var ue;return x((ue=Z.target.files)==null?void 0:ue[0],`testimonials.items.${j}.image`)}})]}),T.jsx(mt,{label:"الرأي",value:b.quote,onChange:Z=>te(j,{quote:Z}),textarea:!0})]},`${b.name}-${j}`))})]}),T.jsxs("div",{className:"admin-panel",children:[T.jsx("h2",{children:"العروض والأسعار"}),T.jsxs("label",{className:"toggle-row",children:[T.jsx("input",{type:"checkbox",checked:!!((Xe=h.offers)!=null&&Xe.showPrices),onChange:b=>_("offers.showPrices",b.target.checked)}),"إظهار الأسعار للعامة"]}),T.jsxs("div",{className:"admin-grid",children:[T.jsx(mt,{label:"عنوان العروض",value:(Mt=h.offers)==null?void 0:Mt.headline,onChange:b=>_("offers.headline",b)}),T.jsx(mt,{label:"وصف العروض",value:(Ve=h.offers)==null?void 0:Ve.intro,onChange:b=>_("offers.intro",b),textarea:!0}),T.jsx(mt,{label:"عبارة بداية الأسعار",value:(D=h.offers)==null?void 0:D.priceNote,onChange:b=>_("offers.priceNote",b)})]}),T.jsx("button",{className:"admin-add-button",type:"button",onClick:$,children:"إضافة عرض"}),T.jsx("div",{className:"plan-editor-list",children:(((w=h.offers)==null?void 0:w.plans)||[]).map((b,j)=>T.jsxs("div",{className:"plan-editor",children:[T.jsxs("div",{className:"editor-title-row",children:[T.jsxs("strong",{children:["عرض رقم ",j+1]}),T.jsx("button",{type:"button",onClick:()=>L(j),children:"حذف"})]}),T.jsx(mt,{label:"اسم العرض",value:b.name,onChange:Z=>N(j,{name:Z})}),T.jsx(mt,{label:"السعر",value:b.price,onChange:Z=>N(j,{price:Z})}),T.jsx(mt,{label:"المدة",value:b.duration,onChange:Z=>N(j,{duration:Z})}),T.jsx(mt,{label:"الوصف",value:b.description,onChange:Z=>N(j,{description:Z}),textarea:!0}),T.jsx(mt,{label:"المزايا، كل ميزة بسطر",value:ug(b.features),onChange:Z=>N(j,{features:cg(Z)}),textarea:!0}),T.jsxs("label",{className:"toggle-row",children:[T.jsx("input",{checked:!!b.highlighted,type:"checkbox",onChange:Z=>N(j,{highlighted:Z.target.checked})}),"عرض مميز"]})]},`${b.name}-${j}`))})]}),T.jsxs("div",{className:"admin-panel",children:[T.jsx("h2",{children:"الأسئلة الشائعة"}),T.jsx("button",{className:"admin-add-button",type:"button",onClick:z,children:"إضافة سؤال"}),T.jsx("div",{className:"faq-editor-list",children:(h.faq||[]).map((b,j)=>T.jsxs("div",{className:"faq-editor",children:[T.jsxs("div",{className:"editor-title-row",children:[T.jsxs("strong",{children:["سؤال رقم ",j+1]}),T.jsx("button",{type:"button",onClick:()=>le(j),children:"حذف"})]}),T.jsx(mt,{label:"السؤال",value:b.question,onChange:Z=>R(j,{question:Z})}),T.jsx(mt,{label:"الإجابة",value:b.answer,onChange:Z=>R(j,{answer:Z}),textarea:!0})]},`${b.question}-${j}`))})]}),T.jsxs("div",{className:"admin-panel",children:[T.jsxs("div",{className:"editor-title-row",children:[T.jsx("h2",{children:"طلبات التواصل"}),T.jsx("button",{className:"soft-action-button",type:"button",onClick:M,children:"تحديث الطلبات"})]}),T.jsx("div",{className:"lead-list",children:g.length?g.map(b=>T.jsxs("div",{className:"lead-row",children:[T.jsx("strong",{children:b.name}),T.jsx("span",{children:b.phone}),T.jsx("span",{children:b.email||"بدون بريد"}),T.jsx("small",{children:b.profession||"بدون مجال"}),T.jsx("p",{children:b.message})]},b.id)):T.jsx("p",{children:"لا توجد طلبات بعد."})})]})]})]}):T.jsx("main",{className:"admin-login",children:T.jsxs("form",{onSubmit:A,children:[T.jsx(o0,{size:28}),T.jsx("h1",{children:"لوحة تحكم سواعد"}),T.jsx("p",{children:"أدخل كلمة المرور لتعديل محتوى الموقع والعروض."}),T.jsx("input",{value:o,onChange:b=>l(b.target.value),placeholder:"اسم المستخدم"}),T.jsx("input",{type:"password",value:c,onChange:b=>f(b.target.value),placeholder:"كلمة المرور"}),T.jsx("button",{className:"primary-action",type:"submit",children:"دخول"}),y==="wrong-password"?T.jsx("span",{className:"form-status error",children:"كلمة المرور غير صحيحة."}):null]})})}function dT(){const{content:s,setContent:e,loading:t}=tT(),[r,o]=Ot.useState(window.location.pathname);return Ot.useEffect(()=>{const c=()=>o(window.location.pathname);return window.addEventListener("popstate",c),()=>window.removeEventListener("popstate",c)},[]),Ot.useMemo(()=>t?T.jsx("div",{className:"loading-screen",children:"Sawaed"}):r==="/dashboard"?T.jsx(fT,{initialContent:s,setPublicContent:e}):r==="/offers"?T.jsx(cT,{content:s}):T.jsx(uT,{content:s}),[s,t,r,e])}Q_.createRoot(document.getElementById("root")).render(T.jsx(q_.StrictMode,{children:T.jsx(dT,{})}));
