"use strict";(self["webpackChunkblog_noticias"]=self["webpackChunkblog_noticias"]||[]).push([[504],{2455:function(e,t,n){n.d(t,{cY:function(){return w},FA:function(){return L},g:function(){return P},u:function(){return l},Uj:function(){return u},Fy:function(){return b},tD:function(){return H},bD:function(){return U},hp:function(){return q},T9:function(){return v},Tj:function(){return m},yU:function(){return y},XA:function(){return _},mS:function(){return h},Ku:function(){return K},ZQ:function(){return E},sr:function(){return A},zJ:function(){return Q},c1:function(){return S},Im:function(){return V},lT:function(){return k},zW:function(){return N},jZ:function(){return T},lV:function(){return C},nr:function(){return O},Ov:function(){return x},gE:function(){return Y},Am:function(){return $},I9:function(){return B},eX:function(){return R}});n(4423),n(4114),n(6573),n(8100),n(7936),n(8111),n(7588),n(1701),n(9112),n(3110),n(9577),n(6632),n(4226),n(9486),n(456),n(4979),n(4603),n(7566),n(8721);const r=()=>{},i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==u||null==h)throw new a;const f=t<<2|o>>4;if(r.push(f),64!==u){const e=o<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(e){const t=i(e);return o.encodeByteArray(t,!0)},u=function(e){return c(e).replace(/\./g,"")},l=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={VUE_APP_FIREBASE_PROJECT_ID:"blogdenoticias-27596",VUE_APP_FIREBASE_APP_ID:"1:992229100253:web:78794e74cd9775dd262934",VUE_APP_FIREBASE_API_KEY:"AIzaSyB1Wk5OcJWR1f19PddShAMlH71-HM71f0A",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"992229100253",VUE_APP_FIREBASE_STORAGE_BUCKET:"blogdenoticias-27596.firebasestorage.app",VUE_APP_FIREBASE_AUTH_DOMAIN:"blogdenoticias-27596.firebaseapp.com",NODE_ENV:"production",BASE_URL:"/blog_noticias/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},p=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},g=()=>{try{return r()||f()||d()||p()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},m=e=>g()?.emulatorHosts?.[e],y=e=>{const t=m(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},v=()=>g()?.config,_=e=>g()?.[`_${e}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...e},a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function T(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function I(){const e=g()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}function S(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function A(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function k(){const e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x(){return!I()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function N(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D="FirebaseError";class P extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=D,Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?M(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new P(r,o,n);return a}}function M(e,t){return e.replace(F,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function U(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(j(n)&&j(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function j(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function B(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function q(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){const n=new z(e,t);return n.subscribe.bind(n)}class z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=W(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=G),void 0===r.error&&(r.error=G),void 0===r.complete&&(r.complete=G);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function W(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){try{const t=e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e;return t.endsWith(".cloudworkstations.dev")}catch{return!1}}async function Y(e){const t=await fetch(e,{credentials:"include"});return t.ok}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */},144:function(e,t,n){n.d(t,{C4:function(){return S},EW:function(){return Ue},Gc:function(){return _e},IG:function(){return Ce},IJ:function(){return Re},KR:function(){return Ne},Kh:function(){return ve},Pr:function(){return Fe},R1:function(){return Le},Tm:function(){return Te},X2:function(){return l},a1:function(){return Oe},bl:function(){return A},fE:function(){return Ie},g8:function(){return Ee},hV:function(){return ze},hZ:function(){return F},i9:function(){return xe},ju:function(){return Se},lJ:function(){return ke},qA:function(){return U},u4:function(){return M},uY:function(){return a},ux:function(){return Ae},wB:function(){return He},yC:function(){return o}});n(4114),n(8111),n(2489),n(7588),n(1701),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(4232);let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){1===++this._on&&(this.prevScope=i,i=this)}off(){this._on>0&&0===--this._on&&(i=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function a(e){return new o(e)}function c(){return i}const u=new WeakSet;class l{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,u.has(this)&&(u.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||p(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,C(this),y(this);const e=s,t=T;s=this,T=!0;try{return this.fn()}finally{0,v(this),s=e,T=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)b(e);this.deps=this.depsTail=void 0,C(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?u.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_(this)&&this.run()}get dirty(){return _(this)}}let h,f,d=0;function p(e,t=!1){if(e.flags|=8,t)return e.next=f,void(f=e);e.next=h,h=e}function g(){d++}function m(){if(--d>0)return;if(f){let e=f;f=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(h){let n=h;h=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function y(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function v(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),b(r),E(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function _(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(w(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function w(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===k)return;if(e.globalVersion=k,!e.isSSR&&128&e.flags&&(!e.deps&&!e._dirty||!_(e)))return;e.flags|=2;const t=e.dep,n=s,i=T;s=e,T=!0;try{y(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(o){throw t.version++,o}finally{s=n,T=i,v(e),e.flags&=-3}}function b(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)b(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function E(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let T=!0;const I=[];function S(){I.push(T),T=!1}function A(){const e=I.pop();T=void 0===e||e}function C(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=s;s=void 0;try{t()}finally{s=e}}}let k=0;class O{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class x{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!s||!T||s===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==s)t=this.activeLink=new O(s,this),s.deps?(t.prevDep=s.depsTail,s.depsTail.nextDep=t,s.depsTail=t):s.deps=s.depsTail=t,N(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=s.depsTail,t.nextDep=void 0,s.depsTail.nextDep=t,s.depsTail=t,s.deps===t&&(s.deps=e)}return t}trigger(e){this.version++,k++,this.notify(e)}notify(e){g();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{m()}}}function N(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)N(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const R=new WeakMap,D=Symbol(""),P=Symbol(""),L=Symbol("");function M(e,t,n){if(T&&s){let t=R.get(e);t||R.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new x),r.map=t,r.key=n),r.track()}}function F(e,t,n,i,s,o){const a=R.get(e);if(!a)return void k++;const c=e=>{e&&e.trigger()};if(g(),"clear"===t)a.forEach(c);else{const s=(0,r.cy)(e),o=s&&(0,r.yI)(n);if(s&&"length"===n){const e=Number(i);a.forEach((t,n)=>{("length"===n||n===L||!(0,r.Bm)(n)&&n>=e)&&c(t)})}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(L)),t){case"add":s?o&&c(a.get("length")):(c(a.get(D)),(0,r.CE)(e)&&c(a.get(P)));break;case"delete":s||(c(a.get(D)),(0,r.CE)(e)&&c(a.get(P)));break;case"set":(0,r.CE)(e)&&c(a.get(D));break}}m()}function V(e){const t=Ae(e);return t===e?t:(M(t,"iterate",L),Ie(e)?t:t.map(ke))}function U(e){return M(e=Ae(e),"iterate",L),e}function j(e,t){return Te(e)?Ee(e)?Oe(ke(t)):Oe(t):ke(t)}const $={__proto__:null,[Symbol.iterator](){return B(this,Symbol.iterator,e=>j(this,e))},concat(...e){return V(this).concat(...e.map(e=>(0,r.cy)(e)?V(e):e))},entries(){return B(this,"entries",e=>(e[1]=j(this,e[1]),e))},every(e,t){return H(this,"every",e,t,void 0,arguments)},filter(e,t){return H(this,"filter",e,t,e=>e.map(e=>j(this,e)),arguments)},find(e,t){return H(this,"find",e,t,e=>j(this,e),arguments)},findIndex(e,t){return H(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return H(this,"findLast",e,t,e=>j(this,e),arguments)},findLastIndex(e,t){return H(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return H(this,"forEach",e,t,void 0,arguments)},includes(...e){return W(this,"includes",e)},indexOf(...e){return W(this,"indexOf",e)},join(e){return V(this).join(e)},lastIndexOf(...e){return W(this,"lastIndexOf",e)},map(e,t){return H(this,"map",e,t,void 0,arguments)},pop(){return G(this,"pop")},push(...e){return G(this,"push",e)},reduce(e,...t){return z(this,"reduce",e,t)},reduceRight(e,...t){return z(this,"reduceRight",e,t)},shift(){return G(this,"shift")},some(e,t){return H(this,"some",e,t,void 0,arguments)},splice(...e){return G(this,"splice",e)},toReversed(){return V(this).toReversed()},toSorted(e){return V(this).toSorted(e)},toSpliced(...e){return V(this).toSpliced(...e)},unshift(...e){return G(this,"unshift",e)},values(){return B(this,"values",e=>j(this,e))}};function B(e,t,n){const r=U(e),i=r[t]();return r===e||Ie(e)||(i._next=i.next,i.next=()=>{const e=i._next();return e.done||(e.value=n(e.value)),e}),i}const q=Array.prototype;function H(e,t,n,r,i,s){const o=U(e),a=o!==e&&!Ie(e),c=o[t];if(c!==q[t]){const t=c.apply(e,s);return a?ke(t):t}let u=n;o!==e&&(a?u=function(t,r){return n.call(this,j(e,t),r,e)}:n.length>2&&(u=function(t,r){return n.call(this,t,r,e)}));const l=c.call(o,u,r);return a&&i?i(l):l}function z(e,t,n,r){const i=U(e),s=i!==e&&!Ie(e);let o=n,a=!1;i!==e&&(s?(a=0===r.length,o=function(t,r,i){return a&&(a=!1,t=j(e,t)),n.call(this,t,j(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));const c=i[t](o,...r);return a?j(e,c):c}function W(e,t,n){const r=Ae(e);M(r,"iterate",L);const i=r[t](...n);return-1!==i&&!1!==i||!Se(n[0])?i:(n[0]=Ae(n[0]),r[t](...n))}function G(e,t,n=[]){S(),g();const r=Ae(e)[t].apply(e,n);return m(),A(),r}const K=(0,r.pD)("__proto__,__v_isRef,__isVue"),Q=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(r.Bm));function Y(e){(0,r.Bm)(e)||(e=String(e));const t=Ae(this);return M(t,"has",e),t.hasOwnProperty(e)}class X{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?ge:pe:s?de:fe).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!i){let e;if(o&&(e=$[t]))return e;if("hasOwnProperty"===t)return Y}const a=Reflect.get(e,t,xe(e)?e:n);if((0,r.Bm)(t)?Q.has(t):K(t))return a;if(i||M(e,"get",t),s)return a;if(xe(a)){const e=o&&(0,r.yI)(t)?a:a.value;return i&&(0,r.Gv)(e)?we(e):e}return(0,r.Gv)(a)?i?we(a):ve(a):a}}class J extends X{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];const o=(0,r.cy)(e)&&(0,r.yI)(t);if(!this._isShallow){const e=Te(s);if(Ie(n)||Te(n)||(s=Ae(s),n=Ae(n)),!o&&xe(s)&&!xe(n))return e||(s.value=n),!0}const a=o?Number(t)<e.length:(0,r.$3)(e,t),c=Reflect.set(e,t,n,xe(e)?e:i);return e===Ae(i)&&(a?(0,r.$H)(n,s)&&F(e,"set",t,n,s):F(e,"add",t,n)),c}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&F(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&Q.has(t)||M(e,"has",t),n}ownKeys(e){return M(e,"iterate",(0,r.cy)(e)?"length":D),Reflect.ownKeys(e)}}class Z extends X{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ee=new J,te=new Z,ne=new J(!0),re=e=>e,ie=e=>Reflect.getPrototypeOf(e);function se(e,t,n){return function(...i){const s=this["__v_raw"],o=Ae(s),a=(0,r.CE)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?re:t?Oe:ke;return!t&&M(o,"iterate",u?P:D),(0,r.X$)(Object.create(l),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}}})}}function oe(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function ae(e,t){const n={get(n){const i=this["__v_raw"],s=Ae(i),o=Ae(n);e||((0,r.$H)(n,o)&&M(s,"get",n),M(s,"get",o));const{has:a}=ie(s),c=t?re:e?Oe:ke;return a.call(s,n)?c(i.get(n)):a.call(s,o)?c(i.get(o)):void(i!==s&&i.get(n))},get size(){const t=this["__v_raw"];return!e&&M(Ae(t),"iterate",D),t.size},has(t){const n=this["__v_raw"],i=Ae(n),s=Ae(t);return e||((0,r.$H)(t,s)&&M(i,"has",t),M(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=Ae(s),a=t?re:e?Oe:ke;return!e&&M(o,"iterate",D),s.forEach((e,t)=>n.call(r,a(e),a(t),i))}};(0,r.X$)(n,e?{add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear")}:{add(e){const n=Ae(this),i=ie(n),s=Ae(e),o=t||Ie(e)||Te(e)?e:s,a=i.has.call(n,o)||(0,r.$H)(e,o)&&i.has.call(n,e)||(0,r.$H)(s,o)&&i.has.call(n,s);return a||(n.add(o),F(n,"add",o,o)),this},set(e,n){t||Ie(n)||Te(n)||(n=Ae(n));const i=Ae(this),{has:s,get:o}=ie(i);let a=s.call(i,e);a||(e=Ae(e),a=s.call(i,e));const c=o.call(i,e);return i.set(e,n),a?(0,r.$H)(n,c)&&F(i,"set",e,n,c):F(i,"add",e,n),this},delete(e){const t=Ae(this),{has:n,get:r}=ie(t);let i=n.call(t,e);i||(e=Ae(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&F(t,"delete",e,void 0,s),o},clear(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&F(e,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach(r=>{n[r]=se(r,e,t)}),n}function ce(e,t){const n=ae(e,t);return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,s)}const ue={get:ce(!1,!1)},le={get:ce(!1,!0)},he={get:ce(!0,!1)};const fe=new WeakMap,de=new WeakMap,pe=new WeakMap,ge=new WeakMap;function me(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return e["__v_skip"]||!Object.isExtensible(e)?0:me((0,r.Zf)(e))}function ve(e){return Te(e)?e:be(e,!1,ee,ue,fe)}function _e(e){return be(e,!1,ne,le,de)}function we(e){return be(e,!0,te,he,pe)}function be(e,t,n,i,s){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=ye(e);if(0===o)return e;const a=s.get(e);if(a)return a;const c=new Proxy(e,2===o?i:n);return s.set(e,c),c}function Ee(e){return Te(e)?Ee(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function Ie(e){return!(!e||!e["__v_isShallow"])}function Se(e){return!!e&&!!e["__v_raw"]}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Ce(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const ke=e=>(0,r.Gv)(e)?ve(e):e,Oe=e=>(0,r.Gv)(e)?we(e):e;function xe(e){return!!e&&!0===e["__v_isRef"]}function Ne(e){return De(e,!1)}function Re(e){return De(e,!0)}function De(e,t){return xe(e)?e:new Pe(e,t)}class Pe{constructor(e,t){this.dep=new x,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Ae(e),this._value=t?e:ke(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Ie(e)||Te(e);e=n?e:Ae(e),(0,r.$H)(e,t)&&(this._rawValue=e,this._value=n?e:ke(e),this.dep.trigger())}}function Le(e){return xe(e)?e.value:e}const Me={get:(e,t,n)=>"__v_raw"===t?e:Le(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Fe(e){return Ee(e)?e:new Proxy(e,Me)}class Ve{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new x(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=k-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return p(this,!0),!0}get value(){const e=this.dep.track();return w(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ue(e,t,n=!1){let i,s;(0,r.Tn)(e)?i=e:(i=e.get,s=e.set);const o=new Ve(i,s,n);return o}const je={},$e=new WeakMap;let Be;function qe(e,t=!1,n=Be){if(n){let t=$e.get(n);t||$e.set(n,t=[]),t.push(e)}else 0}function He(e,t,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:a,augmentJob:u,call:h}=n,f=e=>s?e:Ie(e)||!1===s||0===s?ze(e,1):ze(e);let d,p,g,m,y=!1,v=!1;if(xe(e)?(p=()=>e.value,y=Ie(e)):Ee(e)?(p=()=>f(e),y=!0):(0,r.cy)(e)?(v=!0,y=e.some(e=>Ee(e)||Ie(e)),p=()=>e.map(e=>xe(e)?e.value:Ee(e)?f(e):(0,r.Tn)(e)?h?h(e,2):e():void 0)):p=(0,r.Tn)(e)?t?h?()=>h(e,2):e:()=>{if(g){S();try{g()}finally{A()}}const t=Be;Be=d;try{return h?h(e,3,[m]):e(m)}finally{Be=t}}:r.tE,t&&s){const e=p,t=!0===s?1/0:s;p=()=>ze(e(),t)}const _=c(),w=()=>{d.stop(),_&&_.active&&(0,r.TF)(_.effects,d)};if(o&&t){const e=t;t=(...t)=>{e(...t),w()}}let b=v?new Array(e.length).fill(je):je;const E=e=>{if(1&d.flags&&(d.dirty||e))if(t){const e=d.run();if(s||y||(v?e.some((e,t)=>(0,r.$H)(e,b[t])):(0,r.$H)(e,b))){g&&g();const n=Be;Be=d;try{const n=[e,b===je?void 0:v&&b[0]===je?[]:b,m];b=e,h?h(t,3,n):t(...n)}finally{Be=n}}}else d.run()};return u&&u(E),d=new l(p),d.scheduler=a?()=>a(E,!1):E,m=e=>qe(e,!1,d),g=d.onStop=()=>{const e=$e.get(d);if(e){if(h)h(e,4);else for(const t of e)t();$e.delete(d)}},t?i?E(!0):b=d.run():a?a(E.bind(null,!0),!0):d.run(),w.pause=d.pause.bind(d),w.resume=d.resume.bind(d),w.stop=w,w}function ze(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Map,(n.get(e)||0)>=t)return e;if(n.set(e,t),t--,xe(e))ze(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)ze(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach(e=>{ze(e,t,n)});else if((0,r.Qd)(e)){for(const r in e)ze(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ze(e[r],t,n)}return e}},6768:function(e,t,n){n.d(t,{$u:function(){return me},CE:function(){return en},Df:function(){return Q},EW:function(){return $n},FK:function(){return qt},Gt:function(){return N},Gy:function(){return q},K9:function(){return Nt},Lk:function(){return an},MZ:function(){return K},OW:function(){return G},Q3:function(){return dn},QP:function(){return z},WQ:function(){return R},Wv:function(){return tn},bF:function(){return cn},bo:function(){return O},dY:function(){return m},eW:function(){return fn},g2:function(){return Ie},h:function(){return Bn},k6:function(){return k},nI:function(){return Tn},pI:function(){return ke},pM:function(){return Y},qL:function(){return o},uX:function(){return Qt},wB:function(){return L}});n(4423),n(4114),n(8111),n(1148),n(2489),n(7588),n(1701),n(8237),n(3579),n(3110),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(144),i=n(4232);function s(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function o(e,t,n,r){if((0,i.Tn)(e)){const o=s(e,t,n,r);return o&&(0,i.yL)(o)&&o.catch(e=>{a(e,t,n)}),o}if((0,i.cy)(e)){const i=[];for(let s=0;s<e.length;s++)i.push(o(e[s],t,n,r));return i}}function a(e,t,n,o=!0){const a=t?t.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||i.MZ;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;i=i.parent}if(u)return(0,r.C4)(),s(u,null,10,[e,o,a]),void(0,r.bl)()}c(e,n,a,o,l)}function c(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const u=[];let l=-1;const h=[];let f=null,d=0;const p=Promise.resolve();let g=null;function m(e){const t=g||p;return e?t.then(this?e.bind(this):e):t}function y(e){let t=l+1,n=u.length;while(t<n){const r=t+n>>>1,i=u[r],s=T(i);s<e||s===e&&2&i.flags?t=r+1:n=r}return t}function v(e){if(!(1&e.flags)){const t=T(e),n=u[u.length-1];!n||!(2&e.flags)&&t>=T(n)?u.push(e):u.splice(y(t),0,e),e.flags|=1,_()}}function _(){g||(g=p.then(I))}function w(e){(0,i.cy)(e)?h.push(...e):f&&-1===e.id?f.splice(d+1,0,e):1&e.flags||(h.push(e),e.flags|=1),_()}function b(e,t,n=l+1){for(0;n<u.length;n++){const t=u[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,u.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function E(e){if(h.length){const e=[...new Set(h)].sort((e,t)=>T(e)-T(t));if(h.length=0,f)return void f.push(...e);for(f=e,d=0;d<f.length;d++){const e=f[d];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}f=null,d=0}}const T=e=>null==e.id?2&e.flags?-1:1/0:e.id;function I(e){i.tE;try{for(l=0;l<u.length;l++){const e=u[l];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),s(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;l<u.length;l++){const e=u[l];e&&(e.flags&=-2)}l=-1,u.length=0,E(e),g=null,(u.length||h.length)&&I(e)}}let S=null,A=null;function C(e){const t=S;return S=e,A=e&&e.type.__scopeId||null,t}function k(e,t=S,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Jt(-1);const i=C(t);let s;try{s=e(...n)}finally{C(i),r._d&&Jt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function O(e,t){if(null===S)return e;const n=Vn(S),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,a,c,u=i.MZ]=t[o];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,r.hV)(a),s.push({dir:e,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function x(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[e.el,u,e,t]),(0,r.bl)())}}function N(e,t){if(En){let n=En.provides;const r=En.parent&&En.parent.provides;r===n&&(n=En.provides=Object.create(r)),n[e]=t}}function R(e,t,n=!1){const r=Tn();if(r||Je){let s=Je?Je._context.provides:r?null==r.parent||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const D=Symbol.for("v-scx"),P=()=>{{const e=R(D);return e}};function L(e,t,n){return M(e,t,n)}function M(e,t,n=i.MZ){const{immediate:s,deep:a,flush:c,once:u}=n;const l=(0,i.X$)({},n);const h=t&&s||!t&&"post"!==c;let f;if(Nn)if("sync"===c){const e=P();f=e.__watcherHandles||(e.__watcherHandles=[])}else if(!h){const e=()=>{};return e.stop=i.tE,e.resume=i.tE,e.pause=i.tE,e}const d=En;l.call=(e,t,n)=>o(e,d,t,n);let p=!1;"post"===c?l.scheduler=e=>{xt(e,d&&d.suspense)}:"sync"!==c&&(p=!0,l.scheduler=(e,t)=>{t?e():v(e)}),l.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,d&&(e.id=d.uid,e.i=d))};const g=(0,r.wB)(e,t,l);return Nn&&(f?f.push(g):h&&g()),g}function F(e,t,n){const r=this.proxy,s=(0,i.Kg)(e)?e.includes(".")?V(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.Tn)(t)?o=t:(o=t.handler,n=t);const a=An(this),c=M(s,o.bind(r),n);return a(),c}function V(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const U=Symbol("_vte"),j=e=>e.__isTeleport;const $=Symbol("_leaveCb"),B=Symbol("_enterCb");function q(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pe(()=>{e.isMounted=!0}),ye(()=>{e.isUnmounting=!0}),e}const H=[Function,Array],z={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:H,onEnter:H,onAfterEnter:H,onEnterCancelled:H,onBeforeLeave:H,onLeave:H,onAfterLeave:H,onLeaveCancelled:H,onBeforeAppear:H,onAppear:H,onAfterAppear:H,onAppearCancelled:H};function W(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function G(e,t,n,r,s){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:_,onAfterAppear:w,onAppearCancelled:b}=t,E=String(e.key),T=W(n,e),I=(e,t)=>{e&&o(e,r,9,t)},S=(e,t)=>{const n=t[1];I(e,t),(0,i.cy)(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},A={mode:c,persisted:u,beforeEnter(t){let r=l;if(!n.isMounted){if(!a)return;r=v||l}t[$]&&t[$](!0);const i=T[E];i&&rn(e,i)&&i.el[$]&&i.el[$](),I(r,[t])},enter(t){if(T[E]===e)return;let r=h,i=f,s=d;if(!n.isMounted){if(!a)return;r=_||h,i=w||f,s=b||d}let o=!1;t[B]=e=>{o||(o=!0,I(e?s:i,[t]),A.delayedLeave&&A.delayedLeave(),t[B]=void 0)};const c=t[B].bind(null,!1);r?S(r,[t,c]):c()},leave(t,r){const i=String(e.key);if(t[B]&&t[B](!0),n.isUnmounting)return r();I(p,[t]);let s=!1;t[$]=n=>{s||(s=!0,r(),I(n?y:m,[t]),t[$]=void 0,T[i]===e&&delete T[i])};const o=t[$].bind(null,!1);T[i]=e,g?S(g,[t,o]):o()},clone(e){const i=G(e,t,n,r,s);return s&&s(i),i}};return A}function K(e,t){6&e.shapeFlag&&e.component?(e.transition=t,K(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Q(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===qt?(128&o.patchFlag&&i++,r=r.concat(Q(o.children,t,a))):(t||o.type!==zt)&&r.push(null!=a?hn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Y(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}function X(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function J(e,t){let n;return!(!(n=Object.getOwnPropertyDescriptor(e,t))||n.configurable)}const Z=new WeakMap;function ee(e,t,n,o,a=!1){if((0,i.cy)(e))return void e.forEach((e,r)=>ee(e,t&&((0,i.cy)(t)?t[r]:t),n,o,a));if(ne(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&ee(e,t,n,o.component.subTree));const c=4&o.shapeFlag?Vn(o.component):o.el,u=a?null:c,{i:l,r:h}=e;const f=t&&t.r,d=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState,g=(0,r.ux)(p),m=p===i.MZ?i.NO:e=>!J(d,e)&&(0,i.$3)(g,e),y=(e,t)=>!t||!J(d,t);if(null!=f&&f!==h)if(te(t),(0,i.Kg)(f))d[f]=null,m(f)&&(p[f]=null);else if((0,r.i9)(f)){const e=t;y(f,e.k)&&(f.value=null),e.k&&(d[e.k]=null)}if((0,i.Tn)(h))s(h,l,12,[u,d]);else{const t=(0,i.Kg)(h),s=(0,r.i9)(h);if(t||s){const r=()=>{if(e.f){const n=t?m(h)?p[h]:d[h]:y(h)||!e.k?h.value:d[e.k];if(a)(0,i.cy)(n)&&(0,i.TF)(n,c);else if((0,i.cy)(n))n.includes(c)||n.push(c);else if(t)d[h]=[c],m(h)&&(p[h]=d[h]);else{const t=[c];y(h,e.k)&&(h.value=t),e.k&&(d[e.k]=t)}}else t?(d[h]=u,m(h)&&(p[h]=u)):s&&(y(h,e.k)&&(h.value=u),e.k&&(d[e.k]=u))};if(u){const t=()=>{r(),Z.delete(e)};t.id=-1,Z.set(e,t),xt(t,n)}else te(e),r()}else 0}}function te(e){const t=Z.get(e);t&&(t.flags|=8,Z.delete(e))}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const ne=e=>!!e.type.__asyncLoader;const re=e=>e.type.__isKeepAlive;RegExp,RegExp;function ie(e,t){return(0,i.cy)(e)?e.some(e=>ie(e,t)):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&(e.lastIndex=0,e.test(t))}function se(e,t){ae(e,"a",t)}function oe(e,t){ae(e,"da",t)}function ae(e,t,n=En){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(he(t,r,n),n){let e=n.parent;while(e&&e.parent)re(e.parent.vnode)&&ce(r,t,n,e),e=e.parent}}function ce(e,t,n,r){const s=he(t,e,r,!0);ve(()=>{(0,i.TF)(r[t],s)},n)}function ue(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function le(e){return 128&e.shapeFlag?e.ssContent:e}function he(e,t,n=En,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{(0,r.C4)();const s=An(n),a=o(t,n,e,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const fe=e=>(t,n=En)=>{Nn&&"sp"!==e||he(e,(...e)=>t(...e),n)},de=fe("bm"),pe=fe("m"),ge=fe("bu"),me=fe("u"),ye=fe("bum"),ve=fe("um"),_e=fe("sp"),we=fe("rtg"),be=fe("rtc");function Ee(e,t=En){he("ec",e,t)}const Te="components";function Ie(e,t){return Ae(Te,e,!0,t)||e}const Se=Symbol.for("v-ndc");function Ae(e,t,n=!0,r=!1){const s=S||En;if(s){const n=s.type;if(e===Te){const e=Un(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const o=Ce(s[e]||n[e],t)||Ce(s.appContext[e],t);return!o&&r?n:o}}function Ce(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}function ke(e,t,n,s){let o;const a=n&&n[s],c=(0,i.cy)(e);if(c||(0,i.Kg)(e)){const n=c&&(0,r.g8)(e);let i=!1,s=!1;n&&(i=!(0,r.fE)(e),s=(0,r.Tm)(e),e=(0,r.qA)(e)),o=new Array(e.length);for(let c=0,u=e.length;c<u;c++)o[c]=t(i?s?(0,r.a1)((0,r.lJ)(e[c])):(0,r.lJ)(e[c]):e[c],c,void 0,a&&a[c])}else if("number"===typeof e){o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}const Oe=e=>e?kn(e)?Vn(e):Oe(e.parent):null,xe=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Oe(e.parent),$root:e=>Oe(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ue(e),$forceUpdate:e=>e.f||(e.f=()=>{v(e.update)}),$nextTick:e=>e.n||(e.n=m.bind(e.proxy)),$watch:e=>F.bind(e)}),Ne=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),Re={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;if("$"!==t[0]){const e=c[t];if(void 0!==e)switch(e){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Ne(s,t))return c[t]=1,s[t];if(o!==i.MZ&&(0,i.$3)(o,t))return c[t]=2,o[t];if((0,i.$3)(a,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Pe&&(c[t]=0)}}const h=xe[t];let f,d;return h?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),h(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(d=l.config.globalProperties,(0,i.$3)(d,t)?d[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Ne(s,t)?(s[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:o,type:a}},c){let u;return!!(n[c]||e!==i.MZ&&"$"!==c[0]&&(0,i.$3)(e,c)||Ne(t,c)||(0,i.$3)(o,c)||(0,i.$3)(r,c)||(0,i.$3)(xe,c)||(0,i.$3)(s.config.globalProperties,c)||(u=a.__cssModules)&&u[c])},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function De(e){return(0,i.cy)(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}let Pe=!0;function Le(e){const t=Ue(e),n=e.proxy,s=e.ctx;Pe=!1,t.beforeCreate&&Fe(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:E,render:T,renderTracked:I,renderTriggered:S,errorCaptured:A,serverPrefetch:C,expose:k,inheritAttrs:O,components:x,directives:R,filters:D}=t,P=null;if(h&&Me(h,s,P),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Pe=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=$n({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ve(u[r],s,n,r);if(l){const e=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{N(t,e[t])})}function L(e,t){(0,i.cy)(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(f&&Fe(f,e,"c"),L(de,d),L(pe,p),L(ge,g),L(me,m),L(se,y),L(oe,v),L(Ee,A),L(be,I),L(we,S),L(ye,w),L(ve,E),L(_e,C),(0,i.cy)(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||(e.exposed={});T&&e.render===i.tE&&(e.render=T),null!=O&&(e.inheritAttrs=O),x&&(e.components=x),R&&(e.directives=R),C&&X(e)}function Me(e,t,n=i.tE){(0,i.cy)(e)&&(e=He(e));for(const s in e){const n=e[s];let o;o=(0,i.Gv)(n)?"default"in n?R(n.from||s,n.default,!0):R(n.from||s):R(n),(0,r.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Fe(e,t,n){o((0,i.cy)(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ve(e,t,n,r){let s=r.includes(".")?V(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&L(s,n)}else if((0,i.Tn)(e))L(s,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach(e=>Ve(e,t,n,r));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&L(s,r,e)}else 0}function Ue(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach(e=>je(u,e,a,!0)),je(u,t,a)):u=t,(0,i.Gv)(t)&&o.set(t,u),u}function je(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&je(e,s,n,!0),i&&i.forEach(t=>je(e,t,n,!0));for(const o in t)if(r&&"expose"===o);else{const r=$e[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const $e={data:Be,props:Ge,emits:Ge,methods:We,computed:We,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:We,directives:We,watch:Ke,provide:Be,inject:qe};function Be(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function qe(e,t){return We(He(e),He(t))}function He(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ze(e,t){return e?[...new Set([].concat(e,t))]:t}function We(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function Ge(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),De(e),De(null!=t?t:{})):t}function Ke(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=ze(e[r],t[r]);return n}function Qe(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ye=0;function Xe(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=Qe(),a=new WeakSet,c=[];let u=!1;const l=s.app={_uid:Ye++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:qn,get config(){return s.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,i.Tn)(e.install)?(a.add(e),e.install(l,...t)):(0,i.Tn)(e)&&(a.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(i,o,a){if(!u){0;const c=l._ceVNode||cn(n,r);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&t?t(c,i):e(c,i,a),u=!0,l._container=i,i.__vue_app__=l,Vn(c.component)}},onUnmount(e){c.push(e)},unmount(){u&&(o(c,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l},runWithContext(e){const t=Je;Je=l;try{return e()}finally{Je=t}}};return l}}let Je=null;const Ze=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,i.PT)(t)}Modifiers`]||e[`${(0,i.Tg)(t)}Modifiers`];function et(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let s=n;const a=t.startsWith("update:"),c=a&&Ze(r,t.slice(7));let u;c&&(c.trim&&(s=n.map(e=>(0,i.Kg)(e)?e.trim():e)),c.number&&(s=n.map(i.bB)));let l=r[u=(0,i.rU)(t)]||r[u=(0,i.rU)((0,i.PT)(t))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}const tt=new WeakMap;function nt(e,t,n=!1){const r=n?tt:t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=nt(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach(e=>a[e]=null):(0,i.X$)(a,o),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function rt(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}function it(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=e,v=C(e);let _,w;try{if(4&n.shapeFlag){const e=s||r,t=e;_=pn(h.call(t,e,f,d,g,p,m)),w=u}else{const e=t;0,_=pn(e.length>1?e(d,{attrs:u,slots:c,emit:l}):e(d,null)),w=t.props?u:st(u)}}catch(E){Gt.length=0,a(E,e,1),_=cn(zt)}let b=_;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(i.CP)&&(w=ot(w,o)),b=hn(b,w,!1,!0))}return n.dirs&&(b=hn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&K(b,n.transition),_=b,C(v),_}const st=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},ot=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function at(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||ct(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?ct(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(ut(o,r,n)&&!rt(u,n))return!0}}return!1}function ct(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(ut(t,e,s)&&!rt(n,s))return!0}return!1}function ut(e,t,n){const r=e[n],s=t[n];return"style"===n&&(0,i.Gv)(r)&&(0,i.Gv)(s)?!(0,i.BX)(r,s):r!==s}function lt({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const ht={},ft=()=>Object.create(ht),dt=e=>Object.getPrototypeOf(e)===ht;function pt(e,t,n,i=!1){const s={},o=ft();e.propsDefaults=Object.create(null),mt(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:(0,r.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function gt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.ux)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;mt(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.$3)(t,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=yt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(rt(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i.PT)(s);o[t]=yt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(e.attrs,"set","")}function mt(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const l=t[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:rt(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=yt(o,t,c,s[c],e,!(0,i.$3)(s,c))}}return u}function yt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=An(s);r=i[n]=e.call(null,t),o()}}else r=e;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const vt=new WeakMap;function _t(e,t,n=!1){const r=n?vt:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.Tn)(e)){const r=e=>{u=!0;const[n,r]=_t(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,i.PT)(o[h]);wt(e)&&(a[e]=i.MZ)}else if(o){0;for(const e in o){const t=(0,i.PT)(e);if(wt(t)){const n=o[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let u=!1,l=!0;if((0,i.cy)(s))for(let e=0;e<s.length;++e){const t=s[e],n=(0,i.Tn)(t)&&t.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=u,r[1]=l,(u||(0,i.$3)(r,"default"))&&c.push(t)}}}const l=[a,c];return(0,i.Gv)(e)&&r.set(e,l),l}function wt(e){return"$"!==e[0]&&!(0,i.SU)(e)}const bt=e=>"_"===e||"_ctx"===e||"$stable"===e,Et=e=>(0,i.cy)(e)?e.map(pn):[pn(e)],Tt=(e,t,n)=>{if(t._n)return t;const r=k((...e)=>Et(t(...e)),n);return r._c=!1,r},It=(e,t,n)=>{const r=e._ctx;for(const s in e){if(bt(s))continue;const n=e[s];if((0,i.Tn)(n))t[s]=Tt(s,n,r);else if(null!=n){0;const e=Et(n);t[s]=()=>e}}},St=(e,t)=>{const n=Et(t);e.slots.default=()=>n},At=(e,t,n)=>{for(const r in t)!n&&bt(r)||(e[r]=t[r])},Ct=(e,t,n)=>{const r=e.slots=ft();if(32&e.vnode.shapeFlag){const e=t._;e?(At(r,t,n),n&&(0,i.yQ)(r,"_",e,!0)):It(t,r)}else t&&St(e,t)},kt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:At(s,t,n):(o=!t.$stable,It(t,s)),a=t}else t&&(St(e,t),a={default:1});if(o)for(const i in s)bt(i)||null!=a[i]||delete s[i]};function Ot(){}const xt=Bt;function Nt(e){return Rt(e)}function Rt(e,t){Ot();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=e,y=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!rn(e,t)&&(r=X(e),W(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Ht:_(e,t,n,r);break;case zt:w(e,t,n,r);break;case Wt:null==e&&T(t,n,r,o);break;case qt:P(e,t,n,r,i,s,o,a,c);break;default:1&h?A(e,t,n,r,i,s,o,a,c):6&h?L(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i?ee(l,e&&e.ref,s,t||e,!t):null==l&&e&&null!=e.ref&&ee(e.ref,null,s,e,!0)},_=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},T=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},A=(e,t,n,r,i,s,o,a,c)=>{if("svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e)C(t,n,r,i,s,o,a,c);else{const n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),N(e,t,i,s,o,a,c)}finally{n&&n._endPatch()}}},C=(e,t,n,r,o,u,l,h)=>{let d,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=e;if(d=e.el=c(e.type,u,g&&g.is,g),8&m?f(d,e.children):16&m&&O(e.children,d,null,r,o,Dt(e,u),l,h),v&&x(e,null,r,"created"),k(d,e,e.scopeId,l,r),g){for(const e in g)"value"===e||(0,i.SU)(e)||a(d,e,null,g[e],u,r);"value"in g&&a(d,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&vn(p,r,e)}v&&x(e,null,r,"beforeMount");const _=Lt(o,y);_&&y.beforeEnter(d),s(d,t,n),((p=g&&g.onVnodeMounted)||_||v)&&xt(()=>{p&&vn(p,r,e),_&&y.enter(d),v&&x(e,null,r,"mounted")},o)},k=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n||$t(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=i.vnode;k(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?gn(e[u]):pn(e[u]);y(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=t;l|=16&e.patchFlag;const p=e.props||i.MZ,g=t.props||i.MZ;let m;if(n&&Pt(n,!1),(m=g.onVnodeBeforeUpdate)&&vn(m,n,t,e),d&&x(t,e,n,"beforeUpdate"),n&&Pt(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(u,""),h?R(e.dynamicChildren,h,u,n,r,Dt(t,s),o):c||B(e,t,u,null,n,r,Dt(t,s),o,!1),l>0){if(16&l)D(u,p,g,n,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],i=p[r],o=g[r];o===i&&"value"!==r||a(u,r,i,o,s,n)}}1&l&&e.children!==t.children&&f(u,t.children)}else c||null!=h||D(u,p,g,n,s);((m=g.onVnodeUpdated)||d)&&xt(()=>{m&&vn(m,n,t,e),d&&x(t,e,n,"updated")},r)},R=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===qt||!rn(c,u)||198&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},D=(e,t,n,r,s)=>{if(t!==n){if(t!==i.MZ)for(const o in t)(0,i.SU)(o)||o in n||a(e,o,t[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],u=t[o];c!==u&&"value"!==o&&a(e,o,u,c,s,r)}"value"in n&&a(e,"value",t.value,n.value,s)}},P=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),f=t.anchor=e?e.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(f,n,r),O(t.children||[],n,f,i,o,a,c,l)):d>0&&64&d&&p&&e.dynamicChildren&&e.dynamicChildren.length===p.length?(R(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Mt(e,t,!0)):B(e,t,n,f,i,o,a,c,l)},L=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):M(t,n,r,i,s,o,c):F(e,t,c)},M=(e,t,n,r,i,s,o)=>{const a=e.component=bn(e,r,i);if(re(e)&&(a.ctx.renderer=te),Rn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,V,o),!e.el){const r=a.subTree=cn(zt);w(null,r,t,n),e.placeholder=r.el}}else V(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(at(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:u}=e;{const n=Vt(e);if(n)return t&&(t.el=u.el,j(e,t,c)),void n.asyncDep.then(()=>{xt(()=>{e.isUnmounted||h()},o)})}let l,f=t;0,Pt(e,!1),t?(t.el=u.el,j(e,t,c)):t=u,n&&(0,i.DY)(n),(l=t.props&&t.props.onVnodeBeforeUpdate)&&vn(l,s,t,u),Pt(e,!0);const p=it(e);0;const g=e.subTree;e.subTree=p,y(g,p,d(g.el),X(g),e,o,a),t.el=p.el,null===f&&lt(e,p.el),r&&xt(r,o),(l=t.props&&t.props.onVnodeUpdated)&&xt(()=>vn(l,s,t,u),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:f,root:d,type:p}=e,g=ne(t);if(Pt(e,!1),l&&(0,i.DY)(l),!g&&(r=u&&u.onVnodeBeforeMount)&&vn(r,f,t),Pt(e,!0),c&&se){const t=()=>{e.subTree=it(e),se(c,e.subTree,e,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,e,t):t()}else{d.ce&&d.ce._hasShadowRoot()&&d.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);const r=e.subTree=it(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&xt(h,o),!g&&(r=u&&u.onVnodeMounted)){const e=t;xt(()=>vn(r,f,e),o)}(256&t.shapeFlag||f&&ne(f.vnode)&&256&f.vnode.shapeFlag)&&e.a&&xt(e.a,o),e.isMounted=!0,t=n=s=null}};e.scope.on();const l=e.effect=new r.X2(u);e.scope.off();const h=e.update=l.run.bind(l),f=e.job=l.runIfDirty.bind(l);f.i=e,f.id=e.uid,l.scheduler=()=>v(f),Pt(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,gt(e,t.props,i,n),kt(e,t.children,n),(0,r.C4)(),b(e),(0,r.bl)()},B=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:d,shapeFlag:p}=t;if(d>0){if(128&d)return void H(u,h,n,r,i,s,o,a,c);if(256&d)return void q(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Y(u,i,s),h!==u&&f(n,h)):16&l?16&p?H(u,h,n,r,i,s,o,a,c):Y(u,i,s,!0):(8&l&&f(n,""),16&p&&O(h,n,r,i,s,o,a,c))},q=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Oj,t=t||i.Oj;const l=e.length,h=t.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=t[d]=u?gn(t[d]):pn(t[d]);y(e[d],r,n,null,s,o,a,c,u)}l>h?Y(e,s,o,!0,!1,f):O(t,n,r,s,o,a,c,u,f)},H=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let f=e.length-1,d=h-1;while(l<=f&&l<=d){const r=e[l],i=t[l]=u?gn(t[l]):pn(t[l]);if(!rn(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=e[f],i=t[d]=u?gn(t[d]):pn(t[d]);if(!rn(r,i))break;y(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const e=d+1,i=e<h?t[e].el:r;while(l<=d)y(null,t[l]=u?gn(t[l]):pn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>d)while(l<=f)W(e[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const e=t[l]=u?gn(t[l]):pn(t[l]);null!=e.key&&m.set(e.key,l)}let v,_=0;const w=d-g+1;let b=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=f;l++){const r=e[l];if(_>=w){W(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&rn(r,t[v])){i=v;break}void 0===i?W(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:b=!0,y(r,t[i],n,null,s,o,a,c,u),_++)}const I=b?Ft(T):i.Oj;for(v=I.length-1,l=w-1;l>=0;l--){const e=g+l,i=t[e],f=t[e+1],d=e+1<h?f.el||jt(f):r;0===T[l]?y(null,i,n,d,s,o,a,c,u):b&&(v<0||l!==I[v]?z(i,n,d,2):v--)}}},z=(e,t,n,r,i=null)=>{const{el:a,type:c,transition:u,children:l,shapeFlag:h}=e;if(6&h)return void z(e.component.subTree,t,n,r);if(128&h)return void e.suspense.move(t,n,r);if(64&h)return void c.move(e,t,n,te);if(c===qt){s(a,t,n);for(let e=0;e<l.length;e++)z(l[e],t,n,r);return void s(e.anchor,t,n)}if(c===Wt)return void I(e,t,n);const f=2!==r&&1&h&&u;if(f)if(0===r)u.beforeEnter(a),s(a,t,n),xt(()=>u.enter(a),i);else{const{leave:r,delayLeave:i,afterLeave:c}=u,l=()=>{e.ctx.isUnmounted?o(a):s(a,t,n)},h=()=>{a._isLeaving&&a[$](!0),r(a,()=>{l(),c&&c()})};i?i(a,l,h):h()}else s(a,t,n)},W=(e,t,n,i=!1,s=!1)=>{const{type:o,props:a,ref:c,children:u,dynamicChildren:l,shapeFlag:h,patchFlag:f,dirs:d,cacheIndex:p}=e;if(-2===f&&(s=!1),null!=c&&((0,r.C4)(),ee(c,null,n,e,!0),(0,r.bl)()),null!=p&&(t.renderCache[p]=void 0),256&h)return void t.ctx.deactivate(e);const g=1&h&&d,m=!ne(e);let y;if(m&&(y=a&&a.onVnodeBeforeUnmount)&&vn(y,t,e),6&h)Q(e.component,n,i);else{if(128&h)return void e.suspense.unmount(n,i);g&&x(e,null,t,"beforeUnmount"),64&h?e.type.remove(e,t,n,te,i):l&&!l.hasOnce&&(o!==qt||f>0&&64&f)?Y(l,t,n,!1,!0):(o===qt&&384&f||!s&&16&h)&&Y(u,t,n),i&&G(e)}(m&&(y=a&&a.onVnodeUnmounted)||g)&&xt(()=>{y&&vn(y,t,e),g&&x(e,null,t,"unmounted")},n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===qt)return void K(n,r);if(t===Wt)return void S(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},K=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:c,m:u,a:l}=e;Ut(u),Ut(l),r&&(0,i.DY)(r),s.stop(),o&&(o.flags|=8,W(a,e,t,n)),c&&xt(c,t),xt(()=>{e.isUnmounted=!0},t)},Y=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,r,i)},X=e=>{if(6&e.shapeFlag)return X(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[U];return n?p(n):t};let J=!1;const Z=(e,t,n)=>{let r;null==e?t._vnode&&(W(t._vnode,null,null,!0),r=t._vnode.component):y(t._vnode||null,e,t,null,null,null,n),t._vnode=e,J||(J=!0,b(r),E(),J=!1)},te={p:y,um:W,m:z,r:G,mt:M,mc:O,pc:B,pbc:R,n:X,o:e};let ie,se;return t&&([ie,se]=t(te)),{render:Z,hydrate:ie,createApp:Xe(Z,ie)}}function Dt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Pt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Lt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Mt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=gn(s[i]),t.el=e.el),n||-2===t.patchFlag||Mt(e,t)),t.type===Ht&&(-1===t.patchFlag&&(t=s[i]=gn(t)),t.el=e.el),t.type!==zt||t.el||(t.el=e.el)}}function Ft(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function Vt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Vt(t)}function Ut(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function jt(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?jt(t.subTree):null}const $t=e=>e.__isSuspense;function Bt(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):w(e)}const qt=Symbol.for("v-fgt"),Ht=Symbol.for("v-txt"),zt=Symbol.for("v-cmt"),Wt=Symbol.for("v-stc"),Gt=[];let Kt=null;function Qt(e=!1){Gt.push(Kt=e?null:[])}function Yt(){Gt.pop(),Kt=Gt[Gt.length-1]||null}let Xt=1;function Jt(e,t=!1){Xt+=e,e<0&&Kt&&t&&(Kt.hasOnce=!0)}function Zt(e){return e.dynamicChildren=Xt>0?Kt||i.Oj:null,Yt(),Xt>0&&Kt&&Kt.push(e),e}function en(e,t,n,r,i,s){return Zt(an(e,t,n,r,i,s,!0))}function tn(e,t,n,r,i){return Zt(cn(e,t,n,r,i,!0))}function nn(e){return!!e&&!0===e.__v_isVNode}function rn(e,t){return e.type===t.type&&e.key===t.key}const sn=({key:e})=>null!=e?e:null,on=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:S,r:e,k:t,f:!!n}:e:null);function an(e,t=null,n=null,r=0,s=null,o=(e===qt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sn(t),ref:t&&on(t),scopeId:A,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:S};return c?(mn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),Xt>0&&!a&&Kt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Kt.push(u),u}const cn=un;function un(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Se||(e=zt),nn(e)){const r=hn(e,t,!0);return n&&mn(r,n),Xt>0&&!a&&Kt&&(6&r.shapeFlag?Kt[Kt.indexOf(e)]=r:Kt.push(r)),r.patchFlag=-2,r}if(jn(e)&&(e=e.__vccOpts),t){t=ln(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:$t(e)?128:j(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return an(e,t,n,s,o,c,a,!0)}function ln(e){return e?(0,r.ju)(e)||dt(e)?(0,i.X$)({},e):e:null}function hn(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=e,l=t?yn(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&sn(l),ref:t&&t.ref?n&&o?(0,i.cy)(o)?o.concat(on(t)):[o,on(t)]:on(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==qt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&hn(e.ssContent),ssFallback:e.ssFallback&&hn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&K(h,u.clone(h)),h}function fn(e=" ",t=0){return cn(Ht,null,e,t)}function dn(e="",t=!1){return t?(Qt(),tn(zt,null,e)):cn(zt,null,e)}function pn(e){return null==e||"boolean"===typeof e?cn(zt):(0,i.cy)(e)?cn(qt,null,e.slice()):nn(e)?gn(e):cn(Ht,null,String(e))}function gn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:hn(e)}function mn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),mn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||dt(t)?3===r&&S&&(1===S.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=S}}else(0,i.Tn)(t)?(t={default:t,_ctx:S},n=32):(t=String(t),64&r?(n=16,t=[fn(t)]):n=8);e.children=t,e.shapeFlag|=n}function yn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function vn(e,t,n,r=null){o(e,t,7,[n,r])}const _n=Qe();let wn=0;function bn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||_n,a={uid:wn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_t(s,o),emitsOptions:nt(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=et.bind(null,a),e.ce&&e.ce(a),a}let En=null;const Tn=()=>En||S;let In,Sn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};In=t("__VUE_INSTANCE_SETTERS__",e=>En=e),Sn=t("__VUE_SSR_SETTERS__",e=>Nn=e)}const An=e=>{const t=En;return In(e),e.scope.on(),()=>{e.scope.off(),In(t)}},Cn=()=>{En&&En.scope.off(),In(null)};function kn(e){return 4&e.vnode.shapeFlag}let On,xn,Nn=!1;function Rn(e,t=!1,n=!1){t&&Sn(t);const{props:r,children:i}=e.vnode,s=kn(e);pt(e,r,s,t),Ct(e,i,n||t);const o=s?Dn(e,t):void 0;return t&&Sn(!1),o}function Dn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Re);const{setup:o}=n;if(o){(0,r.C4)();const n=e.setupContext=o.length>1?Fn(e):null,c=An(e),u=s(o,e,0,[e.props,n]),l=(0,i.yL)(u);if((0,r.bl)(),c(),!l&&!e.sp||ne(e)||X(e),l){if(u.then(Cn,Cn),t)return u.then(n=>{Pn(e,n,t)}).catch(t=>{a(t,e,0)});e.asyncDep=u}else Pn(e,u,t)}else Ln(e,t)}function Pn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Ln(e,n)}function Ln(e,t,n){const s=e.type;if(!e.render){if(!t&&On&&!s.render){const t=s.template||Ue(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=On(t,c)}}e.render=s.render||i.tE,xn&&xn(e)}{const t=An(e);(0,r.C4)();try{Le(e)}finally{(0,r.bl)(),t()}}}const Mn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Fn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Mn),slots:e.slots,emit:e.emit,expose:t}}function Vn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in xe?xe[n](e):void 0},has(e,t){return t in e||t in xe}})):e.proxy}function Un(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function jn(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const $n=(e,t)=>{const n=(0,r.EW)(e,t,Nn);return n};function Bn(e,t,n){try{Jt(-1);const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?nn(t)?cn(e,null,[t]):cn(e,t):cn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&nn(n)&&(n=[n]),cn(e,t,n))}finally{Jt(1)}}const qn="3.5.30"},5130:function(e,t,n){n.d(t,{D$:function(){return te},Ef:function(){return se},Jo:function(){return Q},u1:function(){return Y}});n(4423),n(4114),n(8111),n(2489),n(7588),n(1701),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(6768),i=(n(144),n(4232));
/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:e=>e})}catch(ce){}const a=s?e=>s.createHTML(e):e=>e,c="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),f={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?l.createElementNS(c,e):"mathml"===t?l.createElementNS(u,e):n?l.createElement(e,{is:n}):l.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>l.createTextNode(e),createComment:e=>l.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>l.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const i=h.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},d=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(e,t,n){const r=e[d];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const m=Symbol("_vod"),y=Symbol("_vsh");const v=Symbol("");const _=/(?:^|;)\s*display\s*:/;function w(e,t,n){const r=e.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&E(r,t,"")}else for(const e in t)null==n[e]&&E(r,e,"");for(const e in n)"display"===e&&(o=!0),E(r,e,n[e])}else if(s){if(t!==n){const e=r[v];e&&(n+=";"+e),r.cssText=n,o=_.test(n)}}else t&&e.removeAttribute("style");m in e&&(e[m]=o?r.display:"",e[y]&&(r.display="none"))}const b=/\s*!important$/;function E(e,t,n){if((0,i.cy)(n))n.forEach(n=>E(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=S(e,t);b.test(n)?e.setProperty((0,i.Tg)(r),n.replace(b,""),"important"):e[r]=n}}const T=["Webkit","Moz","ms"],I={};function S(e,t){const n=I[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return I[t]=r;r=(0,i.ZH)(r);for(let i=0;i<T.length;i++){const n=T[i]+r;if(n in e)return I[t]=n}return t}const A="http://www.w3.org/1999/xlink";function C(e,t,n,r,s,o=(0,i.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(A,t.slice(6,t.length)):e.setAttributeNS(A,t,n):null==n||o&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,i.Bm)(n)?String(n):n)}function k(e,t,n,r,s){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?e.getAttribute("value")||"":e.value,i=null==n?"checkbox"===e.type?"on":"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(ce){0}c&&e.removeAttribute(s||t)}function O(e,t,n,r){e.addEventListener(t,n,r)}function x(e,t,n,r){e.removeEventListener(t,n,r)}const N=Symbol("_vei");function R(e,t,n,r,i=null){const s=e[N]||(e[N]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=P(t);if(r){const o=s[t]=V(r,i);O(e,n,o,a)}else o&&(x(e,n,o,a),s[t]=void 0)}}const D=/(?:Once|Passive|Capture)$/;function P(e){let t;if(D.test(e)){let n;t={};while(n=e.match(D))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let L=0;const M=Promise.resolve(),F=()=>L||(M.then(()=>L=0),L=Date.now());function V(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(U(e,n.value),t,5,[e])};return n.value=e,n.attached=F(),n}function U(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const j=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$=(e,t,n,r,s,o)=>{const a="svg"===s;"class"===t?g(e,r,a):"style"===t?w(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||R(e,t,n,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):B(e,t,r,a))?(k(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||C(e,t,r,a,o,"value"!==t)):e._isVueCE&&(q(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!(0,i.Kg)(r)))?k(e,(0,i.PT)(t),r,o,t):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),C(e,t,r,a))};function B(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&j(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"autocorrect"===t)return!1;if("sandbox"===t&&"IFRAME"===e.tagName)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!j(t)||!(0,i.Kg)(n))&&t in e}function q(e,t){const n=e._def.props;if(!n)return!1;const r=(0,i.PT)(t);return Array.isArray(n)?n.some(e=>(0,i.PT)(e)===r):Object.keys(n).some(e=>(0,i.PT)(e)===r)}"undefined"!==typeof HTMLElement&&HTMLElement;const H=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function z(e){e.target.composing=!0}function W(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const G=Symbol("_assign");function K(e,t,n){return t&&(e=e.trim()),n&&(e=(0,i.bB)(e)),e}const Q={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[G]=H(i);const s=r||i.props&&"number"===i.props.type;O(e,t?"change":"input",t=>{t.target.composing||e[G](K(e.value,n,s))}),(n||s)&&O(e,"change",()=>{e.value=K(e.value,n,s)}),t||(O(e,"compositionstart",z),O(e,"compositionend",W),O(e,"change",W))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(e[G]=H(a),e.composing)return;const c=!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,i.bB)(e.value),u=null==t?"":t;if(c!==u){if(document.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(s&&e.value.trim()===u)return}e.value=u}}};const Y={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=(0,i.vM)(t);O(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?(0,i.bB)(J(e)):J(e));e[G](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,(0,r.dY)(()=>{e._assigning=!1})}),e[G]=H(s)},mounted(e,{value:t}){X(e,t)},beforeUpdate(e,t,n){e[G]=H(n)},updated(e,{value:t}){e._assigning||X(e,t)}};function X(e,t){const n=e.multiple,r=(0,i.cy)(t);if(!n||r||(0,i.vM)(t)){for(let s=0,o=e.options.length;s<o;s++){const o=e.options[s],a=J(o);if(n)if(r){const e=typeof a;o.selected="string"===e||"number"===e?t.some(e=>String(e)===String(a)):(0,i.u3)(t,a)>-1}else o.selected=t.has(a);else if((0,i.BX)(J(o),t))return void(e.selectedIndex!==s&&(e.selectedIndex=s))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function J(e){return"_value"in e?e._value:e.value}const Z=["ctrl","shift","alt","meta"],ee={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Z.some(n=>e[`${n}Key`]&&!t.includes(n))},te=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=ee[t[e]];if(r&&r(n,t))return}return e(n,...r)})},ne=(0,i.X$)({patchProp:$},f);let re;function ie(){return re||(re=(0,r.K9)(ne))}const se=(...e)=>{const t=ie().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=ae(e);if(!r)return;const s=t._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,oe(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function oe(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ae(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){n.d(t,{$3:function(){return d},$H:function(){return F},BH:function(){return z},BX:function(){return ne},Bm:function(){return b},C4:function(){return X},CE:function(){return g},CP:function(){return u},DY:function(){return V},Gv:function(){return E},J$:function(){return Z},Kg:function(){return w},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return R},Qd:function(){return C},Ro:function(){return $},SU:function(){return O},TF:function(){return h},Tg:function(){return P},Tn:function(){return _},Tr:function(){return W},We:function(){return q},X$:function(){return l},Y2:function(){return ee},ZH:function(){return L},Zf:function(){return A},bB:function(){return j},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return M},tE:function(){return o},u3:function(){return re},vM:function(){return m},v_:function(){return se},yI:function(){return k},yL:function(){return T},yQ:function(){return U}});n(4114),n(8111),n(2489),n(7588),n(3110);
/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),l=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(e,t)=>f.call(e,t),p=Array.isArray,g=e=>"[object Map]"===S(e),m=e=>"[object Set]"===S(e),y=e=>"[object Date]"===S(e),v=e=>"[object RegExp]"===S(e),_=e=>"function"===typeof e,w=e=>"string"===typeof e,b=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,T=e=>(E(e)||_(e))&&_(e.then)&&_(e.catch),I=Object.prototype.toString,S=e=>I.call(e),A=e=>S(e).slice(8,-1),C=e=>"[object Object]"===S(e),k=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,O=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),x=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},N=/-\w/g,R=x(e=>e.replace(N,e=>e.slice(1).toUpperCase())),D=/\B([A-Z])/g,P=x(e=>e.replace(D,"-$1").toLowerCase()),L=x(e=>e.charAt(0).toUpperCase()+e.slice(1)),M=x(e=>{const t=e?`on${L(e)}`:"";return t}),F=(e,t)=>!Object.is(e,t),V=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},U=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let B;const q=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",z=r(H);function W(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=w(r)?Y(r):W(r);if(i)for(const e in i)t[e]=i[e]}return t}if(w(e)||E(e))return e}const G=/;(?![^(]*\))/g,K=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function Y(e){const t={};return e.replace(Q,"").split(G).forEach(e=>{if(e){const n=e.split(K);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function X(e){let t="";if(w(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=y(e),r=y(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=b(e),r=b(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex(e=>ne(e,t))}const ie=e=>!(!e||!0!==e["__v_isRef"]),se=e=>w(e)?e:null==e?"":p(e)||E(e)&&(e.toString===I||!_(e.toString))?ie(e)?se(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>ie(t)?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ae(e))}:b(t)?ae(t):!E(t)||p(t)||C(t)?t:String(t),ae=(e,t="")=>{var n;return b(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},8077:function(e,t,n){var r={};n.r(r),n.d(r,{afterMain:function(){return T},afterRead:function(){return w},afterWrite:function(){return A},applyStyles:function(){return L},arrow:function(){return ae},auto:function(){return c},basePlacements:function(){return u},beforeMain:function(){return b},beforeRead:function(){return v},beforeWrite:function(){return I},bottom:function(){return s},clippingParents:function(){return f},computeStyles:function(){return de},createPopper:function(){return lt},createPopperBase:function(){return ct},createPopperLite:function(){return ft},detectOverflow:function(){return Pe},end:function(){return h},eventListeners:function(){return me},flip:function(){return Ve},hide:function(){return Be},left:function(){return a},main:function(){return E},modifierPhases:function(){return C},offset:function(){return ze},placements:function(){return y},popper:function(){return p},popperGenerator:function(){return at},popperOffsets:function(){return Ge},preventOverflow:function(){return Ye},read:function(){return _},reference:function(){return g},right:function(){return o},start:function(){return l},top:function(){return i},variationPlacements:function(){return m},viewport:function(){return d},write:function(){return S}});n(4423),n(4114),n(8111),n(2489),n(116),n(1701),n(3579),n(9112),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8237);var i="top",s="bottom",o="right",a="left",c="auto",u=[i,s,o,a],l="start",h="end",f="clippingParents",d="viewport",p="popper",g="reference",m=u.reduce(function(e,t){return e.concat([t+"-"+l,t+"-"+h])},[]),y=[].concat(u,[c]).reduce(function(e,t){return e.concat([t,t+"-"+l,t+"-"+h])},[]),v="beforeRead",_="read",w="afterRead",b="beforeMain",E="main",T="afterMain",I="beforeWrite",S="write",A="afterWrite",C=[v,_,w,b,E,T,I,S,A];n(7588);function k(e){return e?(e.nodeName||"").toLowerCase():null}function O(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){var t=O(e).Element;return e instanceof t||e instanceof Element}function N(e){var t=O(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function R(e){if("undefined"===typeof ShadowRoot)return!1;var t=O(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function D(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];N(i)&&k(i)&&(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)}))})}function P(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce(function(e,t){return e[t]="",e},{});N(r)&&k(r)&&(Object.assign(r.style,o),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}}var L={name:"applyStyles",enabled:!0,phase:"write",fn:D,effect:P,requires:["computeStyles"]};function M(e){return e.split("-")[0]}var F=Math.max,V=Math.min,U=Math.round;function j(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function $(){return!/^((?!chrome|android).)*safari/i.test(j())}function B(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),i=1,s=1;t&&N(e)&&(i=e.offsetWidth>0&&U(r.width)/e.offsetWidth||1,s=e.offsetHeight>0&&U(r.height)/e.offsetHeight||1);var o=x(e)?O(e):window,a=o.visualViewport,c=!$()&&n,u=(r.left+(c&&a?a.offsetLeft:0))/i,l=(r.top+(c&&a?a.offsetTop:0))/s,h=r.width/i,f=r.height/s;return{width:h,height:f,top:l,right:u+h,bottom:l+f,left:u,x:u,y:l}}function q(e){var t=B(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function H(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&R(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function z(e){return O(e).getComputedStyle(e)}function W(e){return["table","td","th"].indexOf(k(e))>=0}function G(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function K(e){return"html"===k(e)?e:e.assignedSlot||e.parentNode||(R(e)?e.host:null)||G(e)}function Q(e){return N(e)&&"fixed"!==z(e).position?e.offsetParent:null}function Y(e){var t=/firefox/i.test(j()),n=/Trident/i.test(j());if(n&&N(e)){var r=z(e);if("fixed"===r.position)return null}var i=K(e);R(i)&&(i=i.host);while(N(i)&&["html","body"].indexOf(k(i))<0){var s=z(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function X(e){var t=O(e),n=Q(e);while(n&&W(n)&&"static"===z(n).position)n=Q(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===z(n).position)?t:n||Y(e)||t}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Z(e,t,n){return F(e,V(t,n))}function ee(e,t,n){var r=Z(e,t,n);return r>n?n:r}function te(){return{top:0,right:0,bottom:0,left:0}}function ne(e){return Object.assign({},te(),e)}function re(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var ie=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,ne("number"!==typeof e?e:re(e,u))};function se(e){var t,n=e.state,r=e.name,c=e.options,u=n.elements.arrow,l=n.modifiersData.popperOffsets,h=M(n.placement),f=J(h),d=[a,o].indexOf(h)>=0,p=d?"height":"width";if(u&&l){var g=ie(c.padding,n),m=q(u),y="y"===f?i:a,v="y"===f?s:o,_=n.rects.reference[p]+n.rects.reference[f]-l[f]-n.rects.popper[p],w=l[f]-n.rects.reference[f],b=X(u),E=b?"y"===f?b.clientHeight||0:b.clientWidth||0:0,T=_/2-w/2,I=g[y],S=E-m[p]-g[v],A=E/2-m[p]/2+T,C=Z(I,A,S),k=f;n.modifiersData[r]=(t={},t[k]=C,t.centerOffset=C-A,t)}}function oe(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&H(t.elements.popper,i)&&(t.elements.arrow=i)}var ae={name:"arrow",enabled:!0,phase:"main",fn:se,effect:oe,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(e){return e.split("-")[1]}var ue={top:"auto",right:"auto",bottom:"auto",left:"auto"};function le(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:U(n*i)/i||0,y:U(r*i)/i||0}}function he(e){var t,n=e.popper,r=e.popperRect,c=e.placement,u=e.variation,l=e.offsets,f=e.position,d=e.gpuAcceleration,p=e.adaptive,g=e.roundOffsets,m=e.isFixed,y=l.x,v=void 0===y?0:y,_=l.y,w=void 0===_?0:_,b="function"===typeof g?g({x:v,y:w}):{x:v,y:w};v=b.x,w=b.y;var E=l.hasOwnProperty("x"),T=l.hasOwnProperty("y"),I=a,S=i,A=window;if(p){var C=X(n),k="clientHeight",x="clientWidth";if(C===O(n)&&(C=G(n),"static"!==z(C).position&&"absolute"===f&&(k="scrollHeight",x="scrollWidth")),c===i||(c===a||c===o)&&u===h){S=s;var N=m&&C===A&&A.visualViewport?A.visualViewport.height:C[k];w-=N-r.height,w*=d?1:-1}if(c===a||(c===i||c===s)&&u===h){I=o;var R=m&&C===A&&A.visualViewport?A.visualViewport.width:C[x];v-=R-r.width,v*=d?1:-1}}var D,P=Object.assign({position:f},p&&ue),L=!0===g?le({x:v,y:w},O(n)):{x:v,y:w};return v=L.x,w=L.y,d?Object.assign({},P,(D={},D[S]=T?"0":"",D[I]=E?"0":"",D.transform=(A.devicePixelRatio||1)<=1?"translate("+v+"px, "+w+"px)":"translate3d("+v+"px, "+w+"px, 0)",D)):Object.assign({},P,(t={},t[S]=T?w+"px":"",t[I]=E?v+"px":"",t.transform="",t))}function fe(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,u={placement:M(t.placement),variation:ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,he(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,he(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var de={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:fe,data:{}},pe={passive:!0};function ge(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=O(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach(function(e){e.addEventListener("scroll",n.update,pe)}),a&&c.addEventListener("resize",n.update,pe),function(){s&&u.forEach(function(e){e.removeEventListener("scroll",n.update,pe)}),a&&c.removeEventListener("resize",n.update,pe)}}var me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ge,data:{}},ye=(n(1148),{left:"right",right:"left",bottom:"top",top:"bottom"});function ve(e){return e.replace(/left|right|bottom|top/g,function(e){return ye[e]})}var _e={start:"end",end:"start"};function we(e){return e.replace(/start|end/g,function(e){return _e[e]})}function be(e){var t=O(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Ee(e){return B(G(e)).left+be(e).scrollLeft}function Te(e,t){var n=O(e),r=G(e),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;var u=$();(u||!u&&"fixed"===t)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a+Ee(e),y:c}}function Ie(e){var t,n=G(e),r=be(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=F(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=F(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Ee(e),c=-r.scrollTop;return"rtl"===z(i||n).direction&&(a+=F(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Se(e){var t=z(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Ae(e){return["html","body","#document"].indexOf(k(e))>=0?e.ownerDocument.body:N(e)&&Se(e)?e:Ae(K(e))}function Ce(e,t){var n;void 0===t&&(t=[]);var r=Ae(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=O(r),o=i?[s].concat(s.visualViewport||[],Se(r)?r:[]):r,a=t.concat(o);return i?a:a.concat(Ce(K(o)))}function ke(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Oe(e,t){var n=B(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function xe(e,t,n){return t===d?ke(Te(e,n)):x(t)?Oe(t,n):ke(Ie(G(e)))}function Ne(e){var t=Ce(K(e)),n=["absolute","fixed"].indexOf(z(e).position)>=0,r=n&&N(e)?X(e):e;return x(r)?t.filter(function(e){return x(e)&&H(e,r)&&"body"!==k(e)}):[]}function Re(e,t,n,r){var i="clippingParents"===t?Ne(e):[].concat(t),s=[].concat(i,[n]),o=s[0],a=s.reduce(function(t,n){var i=xe(e,n,r);return t.top=F(i.top,t.top),t.right=V(i.right,t.right),t.bottom=V(i.bottom,t.bottom),t.left=F(i.left,t.left),t},xe(e,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function De(e){var t,n=e.reference,r=e.element,c=e.placement,u=c?M(c):null,f=c?ce(c):null,d=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2;switch(u){case i:t={x:d,y:n.y-r.height};break;case s:t={x:d,y:n.y+n.height};break;case o:t={x:n.x+n.width,y:p};break;case a:t={x:n.x-r.width,y:p};break;default:t={x:n.x,y:n.y}}var g=u?J(u):null;if(null!=g){var m="y"===g?"height":"width";switch(f){case l:t[g]=t[g]-(n[m]/2-r[m]/2);break;case h:t[g]=t[g]+(n[m]/2-r[m]/2);break;default:}}return t}function Pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=void 0===r?e.placement:r,c=n.strategy,l=void 0===c?e.strategy:c,h=n.boundary,m=void 0===h?f:h,y=n.rootBoundary,v=void 0===y?d:y,_=n.elementContext,w=void 0===_?p:_,b=n.altBoundary,E=void 0!==b&&b,T=n.padding,I=void 0===T?0:T,S=ne("number"!==typeof I?I:re(I,u)),A=w===p?g:p,C=e.rects.popper,k=e.elements[E?A:w],O=Re(x(k)?k:k.contextElement||G(e.elements.popper),m,v,l),N=B(e.elements.reference),R=De({reference:N,element:C,strategy:"absolute",placement:a}),D=ke(Object.assign({},C,R)),P=w===p?D:N,L={top:O.top-P.top+S.top,bottom:P.bottom-O.bottom+S.bottom,left:O.left-P.left+S.left,right:P.right-O.right+S.right},M=e.modifiersData.offset;if(w===p&&M){var F=M[a];Object.keys(L).forEach(function(e){var t=[o,s].indexOf(e)>=0?1:-1,n=[i,s].indexOf(e)>=0?"y":"x";L[e]+=F[n]*t})}return L}function Le(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?y:c,h=ce(r),f=h?a?m:m.filter(function(e){return ce(e)===h}):u,d=f.filter(function(e){return l.indexOf(e)>=0});0===d.length&&(d=f);var p=d.reduce(function(t,n){return t[n]=Pe(e,{placement:n,boundary:i,rootBoundary:s,padding:o})[M(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}function Me(e){if(M(e)===c)return[];var t=ve(e);return[we(e),t,we(t)]}function Fe(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var u=n.mainAxis,h=void 0===u||u,f=n.altAxis,d=void 0===f||f,p=n.fallbackPlacements,g=n.padding,m=n.boundary,y=n.rootBoundary,v=n.altBoundary,_=n.flipVariations,w=void 0===_||_,b=n.allowedAutoPlacements,E=t.options.placement,T=M(E),I=T===E,S=p||(I||!w?[ve(E)]:Me(E)),A=[E].concat(S).reduce(function(e,n){return e.concat(M(n)===c?Le(t,{placement:n,boundary:m,rootBoundary:y,padding:g,flipVariations:w,allowedAutoPlacements:b}):n)},[]),C=t.rects.reference,k=t.rects.popper,O=new Map,x=!0,N=A[0],R=0;R<A.length;R++){var D=A[R],P=M(D),L=ce(D)===l,F=[i,s].indexOf(P)>=0,V=F?"width":"height",U=Pe(t,{placement:D,boundary:m,rootBoundary:y,altBoundary:v,padding:g}),j=F?L?o:a:L?s:i;C[V]>k[V]&&(j=ve(j));var $=ve(j),B=[];if(h&&B.push(U[P]<=0),d&&B.push(U[j]<=0,U[$]<=0),B.every(function(e){return e})){N=D,x=!1;break}O.set(D,B)}if(x)for(var q=w?3:1,H=function(e){var t=A.find(function(t){var n=O.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return N=t,"break"},z=q;z>0;z--){var W=H(z);if("break"===W)break}t.placement!==N&&(t.modifiersData[r]._skip=!0,t.placement=N,t.reset=!0)}}var Ve={name:"flip",enabled:!0,phase:"main",fn:Fe,requiresIfExists:["offset"],data:{_skip:!1}};function Ue(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function je(e){return[i,o,s,a].some(function(t){return e[t]>=0})}function $e(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=Pe(t,{elementContext:"reference"}),a=Pe(t,{altBoundary:!0}),c=Ue(o,r),u=Ue(a,i,s),l=je(c),h=je(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}var Be={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:$e};function qe(e,t,n){var r=M(e),s=[a,i].indexOf(r)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,u=c[0],l=c[1];return u=u||0,l=(l||0)*s,[a,o].indexOf(r)>=0?{x:l,y:u}:{x:u,y:l}}function He(e){var t=e.state,n=e.options,r=e.name,i=n.offset,s=void 0===i?[0,0]:i,o=y.reduce(function(e,n){return e[n]=qe(n,t.rects,s),e},{}),a=o[t.placement],c=a.x,u=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=o}var ze={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:He};function We(e){var t=e.state,n=e.name;t.modifiersData[n]=De({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Ge={name:"popperOffsets",enabled:!0,phase:"read",fn:We,data:{}};function Ke(e){return"x"===e?"y":"x"}function Qe(e){var t=e.state,n=e.options,r=e.name,c=n.mainAxis,u=void 0===c||c,h=n.altAxis,f=void 0!==h&&h,d=n.boundary,p=n.rootBoundary,g=n.altBoundary,m=n.padding,y=n.tether,v=void 0===y||y,_=n.tetherOffset,w=void 0===_?0:_,b=Pe(t,{boundary:d,rootBoundary:p,padding:m,altBoundary:g}),E=M(t.placement),T=ce(t.placement),I=!T,S=J(E),A=Ke(S),C=t.modifiersData.popperOffsets,k=t.rects.reference,O=t.rects.popper,x="function"===typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,N="number"===typeof x?{mainAxis:x,altAxis:x}:Object.assign({mainAxis:0,altAxis:0},x),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(C){if(u){var P,L="y"===S?i:a,U="y"===S?s:o,j="y"===S?"height":"width",$=C[S],B=$+b[L],H=$-b[U],z=v?-O[j]/2:0,W=T===l?k[j]:O[j],G=T===l?-O[j]:-k[j],K=t.elements.arrow,Q=v&&K?q(K):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:te(),ne=Y[L],re=Y[U],ie=Z(0,k[j],Q[j]),se=I?k[j]/2-z-ie-ne-N.mainAxis:W-ie-ne-N.mainAxis,oe=I?-k[j]/2+z+ie+re+N.mainAxis:G+ie+re+N.mainAxis,ae=t.elements.arrow&&X(t.elements.arrow),ue=ae?"y"===S?ae.clientTop||0:ae.clientLeft||0:0,le=null!=(P=null==R?void 0:R[S])?P:0,he=$+se-le-ue,fe=$+oe-le,de=Z(v?V(B,he):B,$,v?F(H,fe):H);C[S]=de,D[S]=de-$}if(f){var pe,ge="x"===S?i:a,me="x"===S?s:o,ye=C[A],ve="y"===A?"height":"width",_e=ye+b[ge],we=ye-b[me],be=-1!==[i,a].indexOf(E),Ee=null!=(pe=null==R?void 0:R[A])?pe:0,Te=be?_e:ye-k[ve]-O[ve]-Ee+N.altAxis,Ie=be?ye+k[ve]+O[ve]-Ee-N.altAxis:we,Se=v&&be?ee(Te,ye,Ie):Z(v?Te:_e,ye,v?Ie:we);C[A]=Se,D[A]=Se-ye}t.modifiersData[r]=D}}var Ye={name:"preventOverflow",enabled:!0,phase:"main",fn:Qe,requiresIfExists:["offset"]};function Xe(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Je(e){return e!==O(e)&&N(e)?Xe(e):be(e)}function Ze(e){var t=e.getBoundingClientRect(),n=U(t.width)/e.offsetWidth||1,r=U(t.height)/e.offsetHeight||1;return 1!==n||1!==r}function et(e,t,n){void 0===n&&(n=!1);var r=N(t),i=N(t)&&Ze(t),s=G(t),o=B(e,i,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==k(t)||Se(s))&&(a=Je(t)),N(t)?(c=B(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=Ee(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function tt(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){n.has(e.name)||i(e)}),r}function nt(e){var t=tt(e);return C.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}function rt(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function it(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}var st={placement:"bottom",modifiers:[],strategy:"absolute"};function ot(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"===typeof e.getBoundingClientRect)})}function at(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?st:i;return function(e,t,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},st,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:x(e)?Ce(e):e.contextElement?Ce(e.contextElement):[],popper:Ce(t)};var a=nt(it([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter(function(e){return e.enabled}),u(),c.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(ot(t,n)){i.rects={reference:et(t,X(n),"fixed"===i.options.strategy),popper:q(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(e){return i.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,u=s.options,l=void 0===u?{}:u,h=s.name;"function"===typeof o&&(i=o({state:i,options:l,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:rt(function(){return new Promise(function(e){c.forceUpdate(),e(i)})}),destroy:function(){l(),a=!0}};if(!ot(e,t))return c;function u(){i.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:i,name:t,instance:c,options:r}),u=function(){};o.push(a||u)}})}function l(){o.forEach(function(e){return e()}),o=[]}return c.setOptions(n).then(function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)}),c}}var ct=at(),ut=[me,Ge,de,L,ze,Ve,Ye,ae,Be],lt=at({defaultModifiers:ut}),ht=[me,Ge,de,L],ft=at({defaultModifiers:ht});
/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const dt=new Map,pt={set(e,t,n){dt.has(e)||dt.set(e,new Map);const r=dt.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return dt.has(e)&&dt.get(e).get(t)||null},remove(e,t){if(!dt.has(e))return;const n=dt.get(e);n.delete(t),0===n.size&&dt.delete(e)}},gt=1e6,mt=1e3,yt="transitionend",vt=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),_t=e=>null===e||void 0===e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),wt=e=>{do{e+=Math.floor(Math.random()*gt)}while(document.getElementById(e));return e},bt=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),i=Number.parseFloat(n);return r||i?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*mt):0},Et=e=>{e.dispatchEvent(new Event(yt))},Tt=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),It=e=>Tt(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(vt(e)):null,St=e=>{if(!Tt(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},At=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),Ct=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Ct(e.parentNode):null},kt=()=>{},Ot=e=>{e.offsetHeight},xt=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Nt=[],Rt=e=>{"loading"===document.readyState?(Nt.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Nt)e()}),Nt.push(e)):e()},Dt=()=>"rtl"===document.documentElement.dir,Pt=e=>{Rt(()=>{const t=xt();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},Lt=(e,t=[],n=e)=>"function"===typeof e?e.call(...t):n,Mt=(e,t,n=!0)=>{if(!n)return void Lt(e);const r=5,i=bt(t)+r;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(yt,o),Lt(e))};t.addEventListener(yt,o),setTimeout(()=>{s||Et(t)},i)},Ft=(e,t,n,r)=>{const i=e.length;let s=e.indexOf(t);return-1===s?!n&&r?e[i-1]:e[0]:(s+=n?1:-1,r&&(s=(s+i)%i),e[Math.max(0,Math.min(s,i-1))])},Vt=/[^.]*(?=\..*)\.|.*/,Ut=/\..*/,jt=/::\d+$/,$t={};let Bt=1;const qt={mouseenter:"mouseover",mouseleave:"mouseout"},Ht=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function zt(e,t){return t&&`${t}::${Bt++}`||e.uidEvent||Bt++}function Wt(e){const t=zt(e);return e.uidEvent=t,$t[t]=$t[t]||{},$t[t]}function Gt(e,t){return function n(r){return nn(r,{delegateTarget:e}),n.oneOff&&tn.off(e,r.type,t),t.apply(e,[r])}}function Kt(e,t,n){return function r(i){const s=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return nn(i,{delegateTarget:o}),r.oneOff&&tn.off(e,i.type,t,n),n.apply(o,[i])}}function Qt(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function Yt(e,t,n){const r="string"===typeof t,i=r?n:t||n;let s=en(e);return Ht.has(s)||(s=e),[r,i,s]}function Xt(e,t,n,r,i){if("string"!==typeof t||!e)return;let[s,o,a]=Yt(t,n,r);if(t in qt){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o=e(o)}const c=Wt(e),u=c[a]||(c[a]={}),l=Qt(u,o,s?n:null);if(l)return void(l.oneOff=l.oneOff&&i);const h=zt(o,t.replace(Vt,"")),f=s?Kt(e,n,o):Gt(e,o);f.delegationSelector=s?n:null,f.callable=o,f.oneOff=i,f.uidEvent=h,u[h]=f,e.addEventListener(a,f,s)}function Jt(e,t,n,r,i){const s=Qt(t[n],r,i);s&&(e.removeEventListener(n,s,Boolean(i)),delete t[n][s.uidEvent])}function Zt(e,t,n,r){const i=t[n]||{};for(const[s,o]of Object.entries(i))s.includes(r)&&Jt(e,t,n,o.callable,o.delegationSelector)}function en(e){return e=e.replace(Ut,""),qt[e]||e}const tn={on(e,t,n,r){Xt(e,t,n,r,!1)},one(e,t,n,r){Xt(e,t,n,r,!0)},off(e,t,n,r){if("string"!==typeof t||!e)return;const[i,s,o]=Yt(t,n,r),a=o!==t,c=Wt(e),u=c[o]||{},l=t.startsWith(".");if("undefined"===typeof s){if(l)for(const n of Object.keys(c))Zt(e,c,n,t.slice(1));for(const[n,r]of Object.entries(u)){const i=n.replace(jt,"");a&&!t.includes(i)||Jt(e,c,o,r.callable,r.delegationSelector)}}else{if(!Object.keys(u).length)return;Jt(e,c,o,s,i?n:null)}},trigger(e,t,n){if("string"!==typeof t||!e)return null;const r=xt(),i=en(t),s=t!==i;let o=null,a=!0,c=!0,u=!1;s&&r&&(o=r.Event(t,n),r(e).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),u=o.isDefaultPrevented());const l=nn(new Event(t,{bubbles:a,cancelable:!0}),n);return u&&l.preventDefault(),c&&e.dispatchEvent(l),l.defaultPrevented&&o&&o.preventDefault(),l}};function nn(e,t={}){for(const[r,i]of Object.entries(t))try{e[r]=i}catch(n){Object.defineProperty(e,r,{configurable:!0,get(){return i}})}return e}function rn(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!==typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function sn(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const on={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${sn(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${sn(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"));for(const r of n){let n=r.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1),t[n]=rn(e.dataset[r])}return t},getDataAttribute(e,t){return rn(e.getAttribute(`data-bs-${sn(t)}`))}};class an{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=Tt(t)?on.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"===typeof n?n:{},...Tt(t)?on.getDataAttributes(t):{},..."object"===typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,r]of Object.entries(t)){const t=e[n],i=Tt(t)?"element":_t(t);if(!new RegExp(r).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${r}".`)}}}const cn="5.3.8";class un extends an{constructor(e,t){super(),e=It(e),e&&(this._element=e,this._config=this._getConfig(t),pt.set(this._element,this.constructor.DATA_KEY,this))}dispose(){pt.remove(this._element,this.constructor.DATA_KEY),tn.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){Mt(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return pt.get(It(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return cn}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const ln=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t?t.split(",").map(e=>vt(e)).join(","):null},hn={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){const n=[];let r=e.parentNode.closest(t);while(r)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(e=>!At(e)&&St(e))},getSelectorFromElement(e){const t=ln(e);return t&&hn.findOne(t)?t:null},getElementFromSelector(e){const t=ln(e);return t?hn.findOne(t):null},getMultipleElementsFromSelector(e){const t=ln(e);return t?hn.find(t):[]}},fn=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;tn.on(document,n,`[data-bs-dismiss="${r}"]`,function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),At(this))return;const i=hn.getElementFromSelector(this)||this.closest(`.${r}`),s=e.getOrCreateInstance(i);s[t]()})},dn="alert",pn="bs.alert",gn=`.${pn}`,mn=`close${gn}`,yn=`closed${gn}`,vn="fade",_n="show";class wn extends un{static get NAME(){return dn}close(){const e=tn.trigger(this._element,mn);if(e.defaultPrevented)return;this._element.classList.remove(_n);const t=this._element.classList.contains(vn);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),tn.trigger(this._element,yn),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=wn.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}})}}fn(wn,"close"),Pt(wn);const bn="button",En="bs.button",Tn=`.${En}`,In=".data-api",Sn="active",An='[data-bs-toggle="button"]',Cn=`click${Tn}${In}`;class kn extends un{static get NAME(){return bn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Sn))}static jQueryInterface(e){return this.each(function(){const t=kn.getOrCreateInstance(this);"toggle"===e&&t[e]()})}}tn.on(document,Cn,An,e=>{e.preventDefault();const t=e.target.closest(An),n=kn.getOrCreateInstance(t);n.toggle()}),Pt(kn);const On="swipe",xn=".bs.swipe",Nn=`touchstart${xn}`,Rn=`touchmove${xn}`,Dn=`touchend${xn}`,Pn=`pointerdown${xn}`,Ln=`pointerup${xn}`,Mn="touch",Fn="pen",Vn="pointer-event",Un=40,jn={endCallback:null,leftCallback:null,rightCallback:null},$n={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Bn extends an{constructor(e,t){super(),this._element=e,e&&Bn.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return jn}static get DefaultType(){return $n}static get NAME(){return On}dispose(){tn.off(this._element,xn)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Lt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Un)return;const t=e/this._deltaX;this._deltaX=0,t&&Lt(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(tn.on(this._element,Pn,e=>this._start(e)),tn.on(this._element,Ln,e=>this._end(e)),this._element.classList.add(Vn)):(tn.on(this._element,Nn,e=>this._start(e)),tn.on(this._element,Rn,e=>this._move(e)),tn.on(this._element,Dn,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Fn||e.pointerType===Mn)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const qn="carousel",Hn="bs.carousel",zn=`.${Hn}`,Wn=".data-api",Gn="ArrowLeft",Kn="ArrowRight",Qn=500,Yn="next",Xn="prev",Jn="left",Zn="right",er=`slide${zn}`,tr=`slid${zn}`,nr=`keydown${zn}`,rr=`mouseenter${zn}`,ir=`mouseleave${zn}`,sr=`dragstart${zn}`,or=`load${zn}${Wn}`,ar=`click${zn}${Wn}`,cr="carousel",ur="active",lr="slide",hr="carousel-item-end",fr="carousel-item-start",dr="carousel-item-next",pr="carousel-item-prev",gr=".active",mr=".carousel-item",yr=gr+mr,vr=".carousel-item img",_r=".carousel-indicators",wr="[data-bs-slide], [data-bs-slide-to]",br='[data-bs-ride="carousel"]',Er={[Gn]:Zn,[Kn]:Jn},Tr={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ir={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Sr extends un{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=hn.findOne(_r,this._element),this._addEventListeners(),this._config.ride===cr&&this.cycle()}static get Default(){return Tr}static get DefaultType(){return Ir}static get NAME(){return qn}next(){this._slide(Yn)}nextWhenVisible(){!document.hidden&&St(this._element)&&this.next()}prev(){this._slide(Xn)}pause(){this._isSliding&&Et(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?tn.one(this._element,tr,()=>this.cycle()):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void tn.one(this._element,tr,()=>this.to(e));const n=this._getItemIndex(this._getActive());if(n===e)return;const r=e>n?Yn:Xn;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&tn.on(this._element,nr,e=>this._keydown(e)),"hover"===this._config.pause&&(tn.on(this._element,rr,()=>this.pause()),tn.on(this._element,ir,()=>this._maybeEnableCycle())),this._config.touch&&Bn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of hn.find(vr,this._element))tn.on(n,sr,e=>e.preventDefault());const e=()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Qn+this._config.interval))},t={leftCallback:()=>this._slide(this._directionToOrder(Jn)),rightCallback:()=>this._slide(this._directionToOrder(Zn)),endCallback:e};this._swipeHelper=new Bn(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Er[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=hn.findOne(gr,this._indicatorsElement);t.classList.remove(ur),t.removeAttribute("aria-current");const n=hn.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(ur),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),r=e===Yn,i=t||Ft(this._getItems(),n,r,this._config.wrap);if(i===n)return;const s=this._getItemIndex(i),o=t=>tn.trigger(this._element,t,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:s}),a=o(er);if(a.defaultPrevented)return;if(!n||!i)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=i;const u=r?fr:hr,l=r?dr:pr;i.classList.add(l),Ot(i),n.classList.add(u),i.classList.add(u);const h=()=>{i.classList.remove(u,l),i.classList.add(ur),n.classList.remove(ur,l,u),this._isSliding=!1,o(tr)};this._queueCallback(h,n,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(lr)}_getActive(){return hn.findOne(yr,this._element)}_getItems(){return hn.find(mr,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return Dt()?e===Jn?Xn:Yn:e===Jn?Yn:Xn}_orderToDirection(e){return Dt()?e===Xn?Jn:Zn:e===Xn?Zn:Jn}static jQueryInterface(e){return this.each(function(){const t=Sr.getOrCreateInstance(this,e);if("number"!==typeof e){if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)})}}tn.on(document,ar,wr,function(e){const t=hn.getElementFromSelector(this);if(!t||!t.classList.contains(cr))return;e.preventDefault();const n=Sr.getOrCreateInstance(t),r=this.getAttribute("data-bs-slide-to");return r?(n.to(r),void n._maybeEnableCycle()):"next"===on.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())}),tn.on(window,or,()=>{const e=hn.find(br);for(const t of e)Sr.getOrCreateInstance(t)}),Pt(Sr);const Ar="collapse",Cr="bs.collapse",kr=`.${Cr}`,Or=".data-api",xr=`show${kr}`,Nr=`shown${kr}`,Rr=`hide${kr}`,Dr=`hidden${kr}`,Pr=`click${kr}${Or}`,Lr="show",Mr="collapse",Fr="collapsing",Vr="collapsed",Ur=`:scope .${Mr} .${Mr}`,jr="collapse-horizontal",$r="width",Br="height",qr=".collapse.show, .collapse.collapsing",Hr='[data-bs-toggle="collapse"]',zr={parent:null,toggle:!0},Wr={parent:"(null|element)",toggle:"boolean"};class Gr extends un{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=hn.find(Hr);for(const r of n){const e=hn.getSelectorFromElement(r),t=hn.find(e).filter(e=>e===this._element);null!==e&&t.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return zr}static get DefaultType(){return Wr}static get NAME(){return Ar}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(qr).filter(e=>e!==this._element).map(e=>Gr.getOrCreateInstance(e,{toggle:!1}))),e.length&&e[0]._isTransitioning)return;const t=tn.trigger(this._element,xr);if(t.defaultPrevented)return;for(const o of e)o.hide();const n=this._getDimension();this._element.classList.remove(Mr),this._element.classList.add(Fr),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Fr),this._element.classList.add(Mr,Lr),this._element.style[n]="",tn.trigger(this._element,Nr)},i=n[0].toUpperCase()+n.slice(1),s=`scroll${i}`;this._queueCallback(r,this._element,!0),this._element.style[n]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=tn.trigger(this._element,Rr);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,Ot(this._element),this._element.classList.add(Fr),this._element.classList.remove(Mr,Lr);for(const r of this._triggerArray){const e=hn.getElementFromSelector(r);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(Fr),this._element.classList.add(Mr),tn.trigger(this._element,Dr)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Lr)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=It(e.parent),e}_getDimension(){return this._element.classList.contains(jr)?$r:Br}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Hr);for(const t of e){const e=hn.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=hn.find(Ur,this._config.parent);return hn.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle(Vr,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const n=Gr.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}})}}tn.on(document,Pr,Hr,function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const t of hn.getMultipleElementsFromSelector(this))Gr.getOrCreateInstance(t,{toggle:!1}).toggle()}),Pt(Gr);const Kr="dropdown",Qr="bs.dropdown",Yr=`.${Qr}`,Xr=".data-api",Jr="Escape",Zr="Tab",ei="ArrowUp",ti="ArrowDown",ni=2,ri=`hide${Yr}`,ii=`hidden${Yr}`,si=`show${Yr}`,oi=`shown${Yr}`,ai=`click${Yr}${Xr}`,ci=`keydown${Yr}${Xr}`,ui=`keyup${Yr}${Xr}`,li="show",hi="dropup",fi="dropend",di="dropstart",pi="dropup-center",gi="dropdown-center",mi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',yi=`${mi}.${li}`,vi=".dropdown-menu",_i=".navbar",wi=".navbar-nav",bi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ei=Dt()?"top-end":"top-start",Ti=Dt()?"top-start":"top-end",Ii=Dt()?"bottom-end":"bottom-start",Si=Dt()?"bottom-start":"bottom-end",Ai=Dt()?"left-start":"right-start",Ci=Dt()?"right-start":"left-start",ki="top",Oi="bottom",xi={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ni={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ri extends un{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=hn.next(this._element,vi)[0]||hn.prev(this._element,vi)[0]||hn.findOne(vi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return xi}static get DefaultType(){return Ni}static get NAME(){return Kr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(At(this._element)||this._isShown())return;const e={relatedTarget:this._element},t=tn.trigger(this._element,si,e);if(!t.defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(wi))for(const e of[].concat(...document.body.children))tn.on(e,"mouseover",kt);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(li),this._element.classList.add(li),tn.trigger(this._element,oi,e)}}hide(){if(At(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=tn.trigger(this._element,ri,e);if(!t.defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))tn.off(e,"mouseover",kt);this._popper&&this._popper.destroy(),this._menu.classList.remove(li),this._element.classList.remove(li),this._element.setAttribute("aria-expanded","false"),on.removeDataAttribute(this._menu,"popper"),tn.trigger(this._element,ii,e)}}_getConfig(e){if(e=super._getConfig(e),"object"===typeof e.reference&&!Tt(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${Kr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if("undefined"===typeof r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;"parent"===this._config.reference?e=this._parent:Tt(this._config.reference)?e=It(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=lt(e,this._menu,t)}_isShown(){return this._menu.classList.contains(li)}_getPlacement(){const e=this._parent;if(e.classList.contains(fi))return Ai;if(e.classList.contains(di))return Ci;if(e.classList.contains(pi))return ki;if(e.classList.contains(gi))return Oi;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(hi)?t?Ti:Ei:t?Si:Ii}_detectNavbar(){return null!==this._element.closest(_i)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(on.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...Lt(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){const n=hn.find(bi,this._menu).filter(e=>St(e));n.length&&Ft(n,t,e===ti,!n.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=Ri.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===ni||"keyup"===e.type&&e.key!==Zr)return;const t=hn.find(yi);for(const n of t){const t=Ri.getInstance(n);if(!t||!1===t._config.autoClose)continue;const r=e.composedPath(),i=r.includes(t._menu);if(r.includes(t._element)||"inside"===t._config.autoClose&&!i||"outside"===t._config.autoClose&&i)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&e.key===Zr||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const s={relatedTarget:t._element};"click"===e.type&&(s.clickEvent=e),t._completeHide(s)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===Jr,r=[ei,ti].includes(e.key);if(!r&&!n)return;if(t&&!n)return;e.preventDefault();const i=this.matches(mi)?this:hn.prev(this,mi)[0]||hn.next(this,mi)[0]||hn.findOne(mi,e.delegateTarget.parentNode),s=Ri.getOrCreateInstance(i);if(r)return e.stopPropagation(),s.show(),void s._selectMenuItem(e);s._isShown()&&(e.stopPropagation(),s.hide(),i.focus())}}tn.on(document,ci,mi,Ri.dataApiKeydownHandler),tn.on(document,ci,vi,Ri.dataApiKeydownHandler),tn.on(document,ai,Ri.clearMenus),tn.on(document,ui,Ri.clearMenus),tn.on(document,ai,mi,function(e){e.preventDefault(),Ri.getOrCreateInstance(this).toggle()}),Pt(Ri);const Di="backdrop",Pi="fade",Li="show",Mi=`mousedown.bs.${Di}`,Fi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Vi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ui extends an{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Fi}static get DefaultType(){return Vi}static get NAME(){return Di}show(e){if(!this._config.isVisible)return void Lt(e);this._append();const t=this._getElement();this._config.isAnimated&&Ot(t),t.classList.add(Li),this._emulateAnimation(()=>{Lt(e)})}hide(e){this._config.isVisible?(this._getElement().classList.remove(Li),this._emulateAnimation(()=>{this.dispose(),Lt(e)})):Lt(e)}dispose(){this._isAppended&&(tn.off(this._element,Mi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Pi),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=It(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),tn.on(e,Mi,()=>{Lt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Mt(e,this._getElement(),this._config.isAnimated)}}const ji="focustrap",$i="bs.focustrap",Bi=`.${$i}`,qi=`focusin${Bi}`,Hi=`keydown.tab${Bi}`,zi="Tab",Wi="forward",Gi="backward",Ki={autofocus:!0,trapElement:null},Qi={autofocus:"boolean",trapElement:"element"};class Yi extends an{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Ki}static get DefaultType(){return Qi}static get NAME(){return ji}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),tn.off(document,Bi),tn.on(document,qi,e=>this._handleFocusin(e)),tn.on(document,Hi,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,tn.off(document,Bi))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=hn.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===Gi?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===zi&&(this._lastTabNavDirection=e.shiftKey?Gi:Wi)}}const Xi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ji=".sticky-top",Zi="padding-right",es="margin-right";class ts{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Zi,t=>t+e),this._setElementAttributes(Xi,Zi,t=>t+e),this._setElementAttributes(Ji,es,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Zi),this._resetElementAttributes(Xi,Zi),this._resetElementAttributes(Ji,es)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),i=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(i))}px`)};this._applyManipulationCallback(e,i)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&on.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=on.getDataAttribute(e,t);null!==n?(on.removeDataAttribute(e,t),e.style.setProperty(t,n)):e.style.removeProperty(t)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){if(Tt(e))t(e);else for(const n of hn.find(e,this._element))t(n)}}const ns="modal",rs="bs.modal",is=`.${rs}`,ss=".data-api",os="Escape",as=`hide${is}`,cs=`hidePrevented${is}`,us=`hidden${is}`,ls=`show${is}`,hs=`shown${is}`,fs=`resize${is}`,ds=`click.dismiss${is}`,ps=`mousedown.dismiss${is}`,gs=`keydown.dismiss${is}`,ms=`click${is}${ss}`,ys="modal-open",vs="fade",_s="show",ws="modal-static",bs=".modal.show",Es=".modal-dialog",Ts=".modal-body",Is='[data-bs-toggle="modal"]',Ss={backdrop:!0,focus:!0,keyboard:!0},As={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Cs extends un{constructor(e,t){super(e,t),this._dialog=hn.findOne(Es,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ts,this._addEventListeners()}static get Default(){return Ss}static get DefaultType(){return As}static get NAME(){return ns}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=tn.trigger(this._element,ls,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ys),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;const e=tn.trigger(this._element,as);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(_s),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){tn.off(window,is),tn.off(this._dialog,is),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ui({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Yi({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=hn.findOne(Ts,this._dialog);t&&(t.scrollTop=0),Ot(this._element),this._element.classList.add(_s);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,tn.trigger(this._element,hs,{relatedTarget:e})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){tn.on(this._element,gs,e=>{e.key===os&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),tn.on(window,fs,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),tn.on(this._element,ps,e=>{tn.one(this._element,ds,t=>{this._element===e.target&&this._element===t.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ys),this._resetAdjustments(),this._scrollBar.reset(),tn.trigger(this._element,us)})}_isAnimated(){return this._element.classList.contains(vs)}_triggerBackdropTransition(){const e=tn.trigger(this._element,cs);if(e.defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;"hidden"===n||this._element.classList.contains(ws)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ws),this._queueCallback(()=>{this._element.classList.remove(ws),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const e=Dt()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!n&&e){const e=Dt()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const n=Cs.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}})}}tn.on(document,ms,Is,function(e){const t=hn.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),tn.one(t,ls,e=>{e.defaultPrevented||tn.one(t,us,()=>{St(this)&&this.focus()})});const n=hn.findOne(bs);n&&Cs.getInstance(n).hide();const r=Cs.getOrCreateInstance(t);r.toggle(this)}),fn(Cs),Pt(Cs);const ks="offcanvas",Os="bs.offcanvas",xs=`.${Os}`,Ns=".data-api",Rs=`load${xs}${Ns}`,Ds="Escape",Ps="show",Ls="showing",Ms="hiding",Fs="offcanvas-backdrop",Vs=".offcanvas.show",Us=`show${xs}`,js=`shown${xs}`,$s=`hide${xs}`,Bs=`hidePrevented${xs}`,qs=`hidden${xs}`,Hs=`resize${xs}`,zs=`click${xs}${Ns}`,Ws=`keydown.dismiss${xs}`,Gs='[data-bs-toggle="offcanvas"]',Ks={backdrop:!0,keyboard:!0,scroll:!1},Qs={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ys extends un{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ks}static get DefaultType(){return Qs}static get NAME(){return ks}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=tn.trigger(this._element,Us,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new ts).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ls);const n=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ps),this._element.classList.remove(Ls),tn.trigger(this._element,js,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=tn.trigger(this._element,$s);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ms),this._backdrop.hide();const t=()=>{this._element.classList.remove(Ps,Ms),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new ts).reset(),tn.trigger(this._element,qs)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{"static"!==this._config.backdrop?this.hide():tn.trigger(this._element,Bs)},t=Boolean(this._config.backdrop);return new Ui({className:Fs,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new Yi({trapElement:this._element})}_addEventListeners(){tn.on(this._element,Ws,e=>{e.key===Ds&&(this._config.keyboard?this.hide():tn.trigger(this._element,Bs))})}static jQueryInterface(e){return this.each(function(){const t=Ys.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}})}}tn.on(document,zs,Gs,function(e){const t=hn.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),At(this))return;tn.one(t,qs,()=>{St(this)&&this.focus()});const n=hn.findOne(Vs);n&&n!==t&&Ys.getInstance(n).hide();const r=Ys.getOrCreateInstance(t);r.toggle(this)}),tn.on(window,Rs,()=>{for(const e of hn.find(Vs))Ys.getOrCreateInstance(e).show()}),tn.on(window,Hs,()=>{for(const e of hn.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&Ys.getOrCreateInstance(e).hide()}),fn(Ys),Pt(Ys);const Xs=/^aria-[\w-]*$/i,Js={"*":["class","dir","id","lang","role",Xs],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Zs=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),eo=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,to=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!Zs.has(n)||Boolean(eo.test(e.nodeValue)):t.filter(e=>e instanceof RegExp).some(e=>e.test(n))};function no(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const r=new window.DOMParser,i=r.parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const o of s){const e=o.nodeName.toLowerCase();if(!Object.keys(t).includes(e)){o.remove();continue}const n=[].concat(...o.attributes),r=[].concat(t["*"]||[],t[e]||[]);for(const t of n)to(t,r)||o.removeAttribute(t.nodeName)}return i.body.innerHTML}const ro="TemplateFactory",io={allowList:Js,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},so={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},oo={entry:"(string|element|function|null)",selector:"(string|element)"};class ao extends an{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return io}static get DefaultType(){return so}static get NAME(){return ro}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(e,i,r);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},oo)}_setContent(e,t,n){const r=hn.findOne(n,e);r&&(t=this._resolvePossibleFunction(t),t?Tt(t)?this._putElementInTemplate(It(t),r):this._config.html?r.innerHTML=this._maybeSanitize(t):r.textContent=t:r.remove())}_maybeSanitize(e){return this._config.sanitize?no(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return Lt(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}const co="tooltip",uo=new Set(["sanitize","allowList","sanitizeFn"]),lo="fade",ho="modal",fo="show",po=".tooltip-inner",go=`.${ho}`,mo="hide.bs.modal",yo="hover",vo="focus",_o="click",wo="manual",bo="hide",Eo="hidden",To="show",Io="shown",So="inserted",Ao="click",Co="focusin",ko="focusout",Oo="mouseenter",xo="mouseleave",No={AUTO:"auto",TOP:"top",RIGHT:Dt()?"left":"right",BOTTOM:"bottom",LEFT:Dt()?"right":"left"},Ro={allowList:Js,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Do={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Po extends un{constructor(e,t){if("undefined"===typeof r)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Ro}static get DefaultType(){return Do}static get NAME(){return co}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),tn.off(this._element.closest(go),mo,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=tn.trigger(this._element,this.constructor.eventName(To)),t=Ct(this._element),n=(t||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(r),tn.trigger(this._element,this.constructor.eventName(So))),this._popper=this._createPopper(r),r.classList.add(fo),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))tn.on(o,"mouseover",kt);const s=()=>{tn.trigger(this._element,this.constructor.eventName(Io)),!1===this._isHovered&&this._leave(),this._isHovered=!1};this._queueCallback(s,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const e=tn.trigger(this._element,this.constructor.eventName(bo));if(e.defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(fo),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))tn.off(r,"mouseover",kt);this._activeTrigger[_o]=!1,this._activeTrigger[vo]=!1,this._activeTrigger[yo]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),tn.trigger(this._element,this.constructor.eventName(Eo)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(lo,fo),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=wt(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(lo),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new ao({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[po]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(lo)}_isShown(){return this.tip&&this.tip.classList.contains(fo)}_createPopper(e){const t=Lt(this._config.placement,[this,e,this._element]),n=No[t.toUpperCase()];return lt(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return Lt(e,[this._element,this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...Lt(this._config.popperConfig,[void 0,t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)tn.on(this._element,this.constructor.eventName(Ao),this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger[_o]=!(t._isShown()&&t._activeTrigger[_o]),t.toggle()});else if(t!==wo){const e=t===yo?this.constructor.eventName(Oo):this.constructor.eventName(Co),n=t===yo?this.constructor.eventName(xo):this.constructor.eventName(ko);tn.on(this._element,e,this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?vo:yo]=!0,t._enter()}),tn.on(this._element,n,this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?vo:yo]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},tn.on(this._element.closest(go),mo,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=on.getDataAttributes(this._element);for(const n of Object.keys(t))uo.has(n)&&delete t[n];return e={...t,..."object"===typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:It(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=Po.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}}Pt(Po);const Lo="popover",Mo=".popover-header",Fo=".popover-body",Vo={...Po.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Uo={...Po.DefaultType,content:"(null|string|element|function)"};class jo extends Po{static get Default(){return Vo}static get DefaultType(){return Uo}static get NAME(){return Lo}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Mo]:this._getTitle(),[Fo]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=jo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}}Pt(jo);const $o="scrollspy",Bo="bs.scrollspy",qo=`.${Bo}`,Ho=".data-api",zo=`activate${qo}`,Wo=`click${qo}`,Go=`load${qo}${Ho}`,Ko="dropdown-item",Qo="active",Yo='[data-bs-spy="scroll"]',Xo="[href]",Jo=".nav, .list-group",Zo=".nav-link",ea=".nav-item",ta=".list-group-item",na=`${Zo}, ${ea} > ${Zo}, ${ta}`,ra=".dropdown",ia=".dropdown-toggle",sa={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},oa={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class aa extends un{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return sa}static get DefaultType(){return oa}static get NAME(){return $o}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=It(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"===typeof e.threshold&&(e.threshold=e.threshold.split(",").map(e=>Number.parseFloat(e))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(tn.off(this._config.target,Wo),tn.on(this._config.target,Wo,Xo,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:r,behavior:"smooth"});n.scrollTop=r}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}_observerCallback(e){const t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const s of e){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(s));continue}const e=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&e){if(n(s),!r)return}else i||e||n(s)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=hn.find(Xo,this._config.target);for(const t of e){if(!t.hash||At(t))continue;const e=hn.findOne(decodeURI(t.hash),this._element);St(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Qo),this._activateParents(e),tn.trigger(this._element,zo,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(Ko))hn.findOne(ia,e.closest(ra)).classList.add(Qo);else for(const t of hn.parents(e,Jo))for(const e of hn.prev(t,na))e.classList.add(Qo)}_clearActiveClass(e){e.classList.remove(Qo);const t=hn.find(`${Xo}.${Qo}`,e);for(const n of t)n.classList.remove(Qo)}static jQueryInterface(e){return this.each(function(){const t=aa.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}})}}tn.on(window,Go,()=>{for(const e of hn.find(Yo))aa.getOrCreateInstance(e)}),Pt(aa);const ca="tab",ua="bs.tab",la=`.${ua}`,ha=`hide${la}`,fa=`hidden${la}`,da=`show${la}`,pa=`shown${la}`,ga=`click${la}`,ma=`keydown${la}`,ya=`load${la}`,va="ArrowLeft",_a="ArrowRight",wa="ArrowUp",ba="ArrowDown",Ea="Home",Ta="End",Ia="active",Sa="fade",Aa="show",Ca="dropdown",ka=".dropdown-toggle",Oa=".dropdown-menu",xa=`:not(${ka})`,Na='.list-group, .nav, [role="tablist"]',Ra=".nav-item, .list-group-item",Da=`.nav-link${xa}, .list-group-item${xa}, [role="tab"]${xa}`,Pa='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',La=`${Da}, ${Pa}`,Ma=`.${Ia}[data-bs-toggle="tab"], .${Ia}[data-bs-toggle="pill"], .${Ia}[data-bs-toggle="list"]`;class Fa extends un{constructor(e){super(e),this._parent=this._element.closest(Na),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),tn.on(this._element,ma,e=>this._keydown(e)))}static get NAME(){return ca}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?tn.trigger(t,ha,{relatedTarget:e}):null,r=tn.trigger(e,da,{relatedTarget:t});r.defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(Ia),this._activate(hn.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),tn.trigger(e,pa,{relatedTarget:t})):e.classList.add(Aa)};this._queueCallback(n,e,e.classList.contains(Sa))}_deactivate(e,t){if(!e)return;e.classList.remove(Ia),e.blur(),this._deactivate(hn.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),tn.trigger(e,fa,{relatedTarget:t})):e.classList.remove(Aa)};this._queueCallback(n,e,e.classList.contains(Sa))}_keydown(e){if(![va,_a,wa,ba,Ea,Ta].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter(e=>!At(e));let n;if([Ea,Ta].includes(e.key))n=t[e.key===Ea?0:t.length-1];else{const r=[_a,ba].includes(e.key);n=Ft(t,e.target,r,!0)}n&&(n.focus({preventScroll:!0}),Fa.getOrCreateInstance(n).show())}_getChildren(){return hn.find(La,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=hn.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(Ca))return;const r=(e,r)=>{const i=hn.findOne(e,n);i&&i.classList.toggle(r,t)};r(ka,Ia),r(Oa,Aa),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(Ia)}_getInnerElement(e){return e.matches(La)?e:hn.findOne(La,e)}_getOuterElement(e){return e.closest(Ra)||e}static jQueryInterface(e){return this.each(function(){const t=Fa.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}})}}tn.on(document,ga,Pa,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),At(this)||Fa.getOrCreateInstance(this).show()}),tn.on(window,ya,()=>{for(const e of hn.find(Ma))Fa.getOrCreateInstance(e)}),Pt(Fa);const Va="toast",Ua="bs.toast",ja=`.${Ua}`,$a=`mouseover${ja}`,Ba=`mouseout${ja}`,qa=`focusin${ja}`,Ha=`focusout${ja}`,za=`hide${ja}`,Wa=`hidden${ja}`,Ga=`show${ja}`,Ka=`shown${ja}`,Qa="fade",Ya="hide",Xa="show",Ja="showing",Za={animation:"boolean",autohide:"boolean",delay:"number"},ec={animation:!0,autohide:!0,delay:5e3};class tc extends un{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ec}static get DefaultType(){return Za}static get NAME(){return Va}show(){const e=tn.trigger(this._element,Ga);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Qa);const t=()=>{this._element.classList.remove(Ja),tn.trigger(this._element,Ka),this._maybeScheduleHide()};this._element.classList.remove(Ya),Ot(this._element),this._element.classList.add(Xa,Ja),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=tn.trigger(this._element,za);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Ya),this._element.classList.remove(Ja,Xa),tn.trigger(this._element,Wa)};this._element.classList.add(Ja),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Xa),super.dispose()}isShown(){return this._element.classList.contains(Xa)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){tn.on(this._element,$a,e=>this._onInteraction(e,!0)),tn.on(this._element,Ba,e=>this._onInteraction(e,!1)),tn.on(this._element,qa,e=>this._onInteraction(e,!0)),tn.on(this._element,Ha,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=tc.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}})}}fn(tc),Pt(tc)},1241:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9306:function(e,t,n){var r=n(4901),i=n(6823),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},3506:function(e,t,n){var r=n(3925),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s("Can't set "+i(e)+" as a prototype")}},7080:function(e,t,n){var r=n(4402).has;e.exports=function(e){return r(e),e}},3463:function(e){var t=TypeError;e.exports=function(e){if("string"==typeof e)return e;throw new t("Argument is not a string")}},4328:function(e,t,n){var r=n(4995),i=new r.WeakMap,s=r.set,o=r.remove;e.exports=function(e){return s(i,e,1),o(i,e),e}},6557:function(e,t,n){var r=n(4995).has;e.exports=function(e){return r(e),e}},6469:function(e,t,n){var r=n(8227),i=n(2360),s=n(4913).f,o=r("unscopables"),a=Array.prototype;void 0===a[o]&&s(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},679:function(e,t,n){var r=n(1625),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},3972:function(e,t,n){var r=n(34),i=String,s=TypeError;e.exports=function(e){if(void 0===e||r(e))return e;throw new s(i(e)+" is not an object or undefined")}},8551:function(e,t,n){var r=n(34),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},4154:function(e,t,n){var r=n(6955),i=TypeError;e.exports=function(e){if("Uint8Array"===r(e))return e;throw new i("Argument is not an Uint8Array")}},7811:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(e,t,n){var r=n(4576),i=n(6706),s=n(2195),o=r.ArrayBuffer,a=r.TypeError;e.exports=o&&i(o.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==s(e))throw new a("ArrayBuffer expected");return e.byteLength}},3238:function(e,t,n){var r=n(4576),i=n(7811),s=n(7394),o=r.DataView;e.exports=function(e){if(!i||0!==s(e))return!1;try{return new o(e),!1}catch(t){return!0}}},5169:function(e,t,n){var r=n(3238),i=TypeError;e.exports=function(e){if(r(e))throw new i("ArrayBuffer is detached");return e}},5636:function(e,t,n){var r=n(4576),i=n(9504),s=n(6706),o=n(7696),a=n(5169),c=n(7394),u=n(4483),l=n(1548),h=r.structuredClone,f=r.ArrayBuffer,d=r.DataView,p=Math.max,g=Math.min,m=f.prototype,y=d.prototype,v=i(m.slice),_=s(m,"resizable","get"),w=s(m,"maxByteLength","get"),b=i(y.getInt8),E=i(y.setInt8);e.exports=(l||u)&&function(e,t,n){var r,i=c(e),s=void 0===t?i:o(t),m=!_||!_(e);if(a(e),l&&(e=h(e,{transfer:[e]}),i===s&&(n||m)))return e;if(i>=s&&(!n||m))r=v(e,0,s);else{var y=n&&!m&&w?{maxByteLength:p(s,w(e))}:void 0;r=new f(s,y);for(var T=new d(e),I=new d(r),S=g(s,i),A=0;A<S;A++)E(I,A,b(T,A))}return l||u(e),r}},4644:function(e,t,n){var r,i,s,o=n(7811),a=n(3724),c=n(4576),u=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),m=n(2106),y=n(1625),v=n(2787),_=n(2967),w=n(8227),b=n(3392),E=n(1181),T=E.enforce,I=E.get,S=c.Int8Array,A=S&&S.prototype,C=c.Uint8ClampedArray,k=C&&C.prototype,O=S&&v(S),x=A&&v(A),N=Object.prototype,R=c.TypeError,D=w("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!_&&"Opera"!==f(c.opera),F=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=f(e);return"DataView"===t||h(V,t)||h(U,t)},$=function(e){var t=v(e);if(l(t)){var n=I(t);return n&&h(n,L)?n[L]:$(t)}},B=function(e){if(!l(e))return!1;var t=f(e);return h(V,t)||h(U,t)},q=function(e){if(B(e))return e;throw new R("Target is not a typed array")},H=function(e){if(u(e)&&(!_||y(O,e)))return e;throw new R(d(e)+" is not a typed array constructor")},z=function(e,t,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}x[e]&&!n||g(x,e,n?t:M&&A[e]||t,r)}},W=function(e,t,n){var r,i;if(a){if(_){if(n)for(r in V)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(O[e]&&!n)return;try{return g(O,e,n?t:M&&O[e]||t)}catch(s){}}for(r in V)i=c[r],!i||i[e]&&!n||g(i,e,t)}};for(r in V)i=c[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!u(O)||O===Function.prototype)&&(O=function(){throw new R("Incorrect invocation")},M))for(r in V)c[r]&&_(c[r],O);if((!M||!x||x===N)&&(x=O.prototype,M))for(r in V)c[r]&&_(c[r].prototype,x);if(M&&v(k)!==x&&_(k,x),a&&!h(x,D))for(r in F=!0,m(x,D,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),V)c[r]&&p(c[r].prototype,P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&P,aTypedArray:q,aTypedArrayConstructor:H,exportTypedArrayMethod:z,exportTypedArrayStaticMethod:W,getTypedArrayConstructor:$,isView:j,isTypedArray:B,TypedArray:O,TypedArrayPrototype:x}},9617:function(e,t,n){var r=n(5397),i=n(5610),s=n(6198),o=function(e){return function(t,n,o){var a=r(t),c=s(a);if(0===c)return!e&&-1;var u,l=i(o,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4527:function(e,t,n){var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7680:function(e,t,n){var r=n(9504);e.exports=r([].slice)},2804:function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t+"+/",r=t+"-_",i=function(e){for(var t={},n=0;n<64;n++)t[e.charAt(n)]=n;return t};e.exports={i2c:n,c2i:i(n),i2cUrl:r,c2iUrl:i(r)}},6319:function(e,t,n){var r=n(8551),i=n(9539);e.exports=function(e,t,n,s){try{return s?t(r(n)[0],n[1]):t(n)}catch(o){i(e,"throw",o)}}},2195:function(e,t,n){var r=n(9504),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},6955:function(e,t,n){var r=n(2140),i=n(4901),s=n(2195),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"===(r=s(t))&&i(t.callee)?"Arguments":r}},7740:function(e,t,n){var r=n(9297),i=n(5031),s=n(7347),o=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},2211:function(e,t,n){var r=n(9039);e.exports=!r(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})},2529:function(e){e.exports=function(e,t){return{value:e,done:t}}},6699:function(e,t,n){var r=n(3724),i=n(4913),s=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},4659:function(e,t,n){var r=n(3724),i=n(4913),s=n(6980);e.exports=function(e,t,n){r?i.f(e,t,s(0,n)):e[t]=n}},2106:function(e,t,n){var r=n(283),i=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},6840:function(e,t,n){var r=n(4901),i=n(4913),s=n(283),o=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},6279:function(e,t,n){var r=n(6840);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},9433:function(e,t,n){var r=n(4576),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})},4483:function(e,t,n){var r,i,s,o,a=n(4576),c=n(9429),u=n(1548),l=a.structuredClone,h=a.ArrayBuffer,f=a.MessageChannel,d=!1;if(u)d=function(e){l(e,{transfer:[e]})};else if(h)try{f||(r=c("worker_threads"),r&&(f=r.MessageChannel)),f&&(i=new f,s=new h(2),o=function(e){i.port1.postMessage(null,[e])},2===s.byteLength&&(o(s),0===s.byteLength&&(d=o)))}catch(p){}e.exports=d},4055:function(e,t,n){var r=n(4576),i=n(34),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw new t("Maximum allowed index exceeded");return e}},5002:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(e,t,n){var r=n(4215);e.exports="NODE"===r},2839:function(e,t,n){var r=n(4576),i=r.navigator,s=i&&i.userAgent;e.exports=s?String(s):""},9519:function(e,t,n){var r,i,s=n(4576),o=n(2839),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},4215:function(e,t,n){var r=n(4576),i=n(2839),s=n(2195),o=function(e){return i.slice(0,e.length)===e};e.exports=function(){return o("Bun/")?"BUN":o("Cloudflare-Workers")?"CLOUDFLARE":o("Deno/")?"DENO":o("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===s(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},8574:function(e,t,n){var r=n(9504),i=Error,s=r("".replace),o=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},6518:function(e,t,n){var r=n(4576),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);e.exports=function(e,t){var n,l,h,f,d,p,g=e.target,m=e.global,y=e.stat;if(l=m?r:y?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in t){if(d=t[h],e.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,e.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(e.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},8745:function(e,t,n){var r=n(616),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},6080:function(e,t,n){var r=n(7476),i=n(9306),s=n(616),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},616:function(e,t,n){var r=n(9039);e.exports=!r(function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})},9565:function(e,t,n){var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(e,t,n){var r=n(9504),i=n(9306);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},7476:function(e,t,n){var r=n(2195),i=n(9504);e.exports=function(e){if("Function"===r(e))return i(e)}},9504:function(e,t,n){var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},944:function(e){var t=TypeError;e.exports=function(e){var n=e&&e.alphabet;if(void 0===n||"base64"===n||"base64url"===n)return n||"base64";throw new t("Incorrect `alphabet` option")}},9429:function(e,t,n){var r=n(4576),i=n(6193);e.exports=function(e){if(i){try{return r.process.getBuiltinModule(e)}catch(t){}try{return Function('return require("'+e+'")')()}catch(t){}}}},7751:function(e,t,n){var r=n(4576),i=n(4901),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},1767:function(e){e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},851:function(e,t,n){var r=n(6955),i=n(5966),s=n(4117),o=n(6269),a=n(8227),c=a("iterator");e.exports=function(e){if(!s(e))return i(e,c)||i(e,"@@iterator")||o[r(e)]}},81:function(e,t,n){var r=n(9565),i=n(9306),s=n(8551),o=n(6823),a=n(851),c=TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(i(n))return s(r(n,e));throw new c(o(e)+" is not iterable")}},5966:function(e,t,n){var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},3789:function(e,t,n){var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,f=function(e,t){this.set=e,this.size=h(t,0),this.has=r(e.has),this.keys=r(e.keys)};f.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(e){return s(this.has,this.set,e)}},e.exports=function(e){i(e);var t=+e.size;if(t!==t)throw new l(c);var n=o(t);if(n<0)throw new u(c);return new f(e,n)}},4576:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},421:function(e){e.exports={}},397:function(e,t,n){var r=n(7751);e.exports=r("document","documentElement")},5917:function(e,t,n){var r=n(3724),i=n(9039),s=n(4055);e.exports=!r&&!i(function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a})},7055:function(e,t,n){var r=n(9504),i=n(9039),s=n(2195),o=Object,a=r("".split);e.exports=i(function(){return!o("z").propertyIsEnumerable(0)})?function(e){return"String"===s(e)?a(e,""):o(e)}:o},3167:function(e,t,n){var r=n(4901),i=n(34),s=n(2967);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},3706:function(e,t,n){var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},1181:function(e,t,n){var r,i,s,o=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw new g(p);return t.facade=e,_.set(e,t),t},i=function(e){return _.get(e)||{}},s=function(e){return _.has(e)}}else{var w=f("state");d[w]=!0,r=function(e,t){if(l(e,w))throw new g(p);return t.facade=e,u(e,w,t),t},i=function(e){return l(e,w)?e[w]:{}},s=function(e){return l(e,w)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},4209:function(e,t,n){var r=n(8227),i=n(6269),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},4376:function(e,t,n){var r=n(2195);e.exports=Array.isArray||function(e){return"Array"===r(e)}},1108:function(e,t,n){var r=n(6955);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){e.exports=!1},5810:function(e,t,n){var r=n(34),i=n(1181).get;e.exports=function(e){if(!r(e))return!1;var t=i(e);return!!t&&"RawJSON"===t.type}},757:function(e,t,n){var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},507:function(e,t,n){var r=n(9565);e.exports=function(e,t,n){var i,s,o=n?e:e.iterator,a=e.next;while(!(i=r(a,o)).done)if(s=t(i.value),void 0!==s)return s}},2652:function(e,t,n){var r=n(6080),i=n(9565),s=n(8551),o=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),f=n(9539),d=TypeError,p=function(e,t){this.stopped=e,this.result=t},g=p.prototype;e.exports=function(e,t,n){var m,y,v,_,w,b,E,T=n&&n.that,I=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_RECORD),A=!(!n||!n.IS_ITERATOR),C=!(!n||!n.INTERRUPTED),k=r(t,T),O=function(e){var t=m;return m=void 0,t&&f(t,"normal"),new p(!0,e)},x=function(e){return I?(s(e),C?k(e[0],e[1],O):k(e[0],e[1])):C?k(e,O):k(e)};if(S)m=e.iterator;else if(A)m=e;else{if(y=h(e),!y)throw new d(o(e)+" is not iterable");if(a(y)){for(v=0,_=c(e);_>v;v++)if(w=x(e[v]),w&&u(g,w))return w;return new p(!1)}m=l(e,y)}b=S?e.next:m.next;while(!(E=i(b,m)).done){var N=E.value;try{w=x(N)}catch(R){if(!m)throw R;f(m,"throw",R)}if("object"==typeof w&&w&&u(g,w))return w}return new p(!1)}},1385:function(e,t,n){var r=n(9539);e.exports=function(e,t,n){for(var i=e.length-1;i>=0;i--)if(void 0!==e[i])try{n=r(e[i].iterator,t,n)}catch(s){t="throw",n=s}if("throw"===t)throw n;return n}},9539:function(e,t,n){var r=n(9565),i=n(8551),s=n(5966);e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},9462:function(e,t,n){var r=n(9565),i=n(2360),s=n(6699),o=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),f=n(9539),d=n(1385),p=a("toStringTag"),g="IteratorHelper",m="WrapForValidIterator",y="normal",v="throw",_=c.set,w=function(e){var t=c.getterFor(e?m:g);return o(i(l),{next:function(){var n=t(this);if(e)return n.nextHandler();if(n.done)return h(void 0,!0);try{var r=n.nextHandler();return n.returnHandlerResult?r:h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=t(this),i=n.iterator,s=n.done;if(n.done=!0,e){var o=u(i,"return");return o?r(o,i):h(void 0,!0)}if(s)return h(void 0,!0);if(n.inner)try{f(n.inner.iterator,y)}catch(a){return f(i,v,a)}if(n.openIters)try{d(n.openIters,y)}catch(a){if(i)return f(i,v,a);throw a}return i&&f(i,y),h(void 0,!0)}})},b=w(!0),E=w(!1);s(E,p,"Iterator Helper"),e.exports=function(e,t,n){var r=function(r,i){i?(i.iterator=r.iterator,i.next=r.next):i=r,i.type=t?m:g,i.returnHandlerResult=!!n,i.nextHandler=e,i.counter=0,i.done=!1,_(this,i)};return r.prototype=t?b:E,r}},684:function(e){e.exports=function(e,t){var n="function"==typeof Iterator&&Iterator.prototype[e];if(n)try{n.call({next:null},t).next()}catch(r){return!0}}},4549:function(e,t,n){var r=n(4576);e.exports=function(e,t){var n=r.Iterator,i=n&&n.prototype,s=i&&i[e],o=!1;if(s)try{s.call({next:function(){return{done:!0}},return:function(){o=!0}},-1)}catch(a){a instanceof t||(o=!1)}if(!o)return s}},7657:function(e,t,n){var r,i,s,o=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),f=n(8227),d=n(6395),p=f("iterator"),g=!1;[].keys&&(s=[].keys(),"next"in s?(i=l(l(s)),i!==Object.prototype&&(r=i)):g=!0);var m=!c(r)||o(function(){var e={};return r[p].call(e)!==e});m?r={}:d&&(r=u(r)),a(r[p])||h(r,p,function(){return this}),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},6269:function(e){e.exports={}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i(function(){return 8!==p(function(){},"length",{value:8}).length}),_=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===g(d(t),0,7)&&(t="["+m(d(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(_,"string"==typeof t?t:"")),e};Function.prototype.toString=w(function(){return s(this)&&f(this).source||u(this)},"toString")},2248:function(e,t,n){var r=n(9504),i=Map.prototype;e.exports={Map:Map,set:r(i.set),get:r(i.get),has:r(i.has),remove:r(i["delete"]),proto:i}},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},7819:function(e,t,n){var r=n(9039);e.exports=!r(function(){var e="9007199254740993",t=JSON.rawJSON(e);return!JSON.isRawJSON(t)||JSON.stringify(t)!==e})},2603:function(e,t,n){var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},2360:function(e,t,n){var r,i=n(8551),s=n(6801),o=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(e){return f+p+h+e+f+"/"+p+h},v=function(e){e.write(y("")),e.close();var t=e.parentWindow.Object;return e=null,t},_=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(y("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?v(r):_():v(r);var e=o.length;while(e--)delete w[d][o[e]];return w()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[d]=i(e),n=new m,m[d]=null,n[g]=e):n=w(),void 0===t?n:s.f(n,t)}},6801:function(e,t,n){var r=n(3724),i=n(8686),s=n(4913),o=n(8551),a=n(5397),c=n(1072);t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)s.f(e,n=i[l++],r[n]);return e}},4913:function(e,t,n){var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&d in n&&!n[d]){var r=l(e,t);r&&r[d]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),i=n(8727),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},1072:function(e,t,n){var r=n(1828),i=n(8727);e.exports=Object.keys||function(e){return r(e,i)}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){var r=n(6706),i=n(34),s=n(7750),o=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){var r=n(9565),i=n(4901),s=n(34),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},8235:function(e,t,n){var r=n(9504),i=n(9297),s=SyntaxError,o=parseInt,a=String.fromCharCode,c=r("".charAt),u=r("".slice),l=r(/./.exec),h={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":"\n","\\r":"\r","\\t":"\t"},f=/^[\da-f]{4}$/i,d=/^[\u0000-\u001F]$/;e.exports=function(e,t){var n=!0,r="";while(t<e.length){var p=c(e,t);if("\\"===p){var g=u(e,t,t+2);if(i(h,g))r+=h[g],t+=2;else{if("\\u"!==g)throw new s('Unknown escape sequence: "'+g+'"');t+=2;var m=u(e,t,t+4);if(!l(f,m))throw new s("Bad Unicode escape at: "+t);r+=a(o(m,16)),t+=4}}else{if('"'===p){n=!1,t++;break}if(l(d,p))throw new s("Bad control character in string literal at: "+t);r+=p,t++}}if(n)throw new s("Unterminated string at: "+t);return{value:r,end:t}}},9167:function(e,t,n){var r=n(4576);e.exports=r},7750:function(e,t,n){var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},9286:function(e,t,n){var r=n(4402),i=n(8469),s=r.Set,o=r.add;e.exports=function(e){var t=new s;return i(e,function(e){o(t,e)}),t}},3440:function(e,t,n){var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;e.exports=function(e){var t=r(this),n=a(e),i=s(t);return o(i)<=n.size?c(i,function(e){n.includes(e)&&h(i,e)}):u(n.getIterator(),function(e){l(i,e)&&h(i,e)}),i}},4402:function(e,t,n){var r=n(9504),i=Set.prototype;e.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(e,t,n){var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;e.exports=function(e){var t=r(this),n=o(e),i=new u;return s(t)>n.size?c(n.getIterator(),function(e){h(t,e)&&l(i,e)}):a(t,function(e){n.includes(e)&&l(i,e)}),i}},4449:function(e,t,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),c=n(507),u=n(9539);e.exports=function(e){var t=r(this),n=o(e);if(s(t)<=n.size)return!1!==a(t,function(e){if(n.includes(e))return!1},!0);var l=n.getIterator();return!1!==c(l,function(e){if(i(t,e))return u(l.iterator,"normal",!1)})}},3838:function(e,t,n){var r=n(7080),i=n(5170),s=n(8469),o=n(3789);e.exports=function(e){var t=r(this),n=o(e);return!(i(t)>n.size)&&!1!==s(t,function(e){if(!n.includes(e))return!1},!0)}},8527:function(e,t,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),c=n(9539);e.exports=function(e){var t=r(this),n=o(e);if(s(t)<n.size)return!1;var u=n.getIterator();return!1!==a(u,function(e){if(!i(t,e))return c(u.iterator,"normal",!1)})}},8469:function(e,t,n){var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,c=r(a.forEach),u=r(a.keys),l=u(new o).next;e.exports=function(e,t,n){return n?i({iterator:u(e),next:l},t):c(e,t)}},4916:function(e,t,n){var r=n(7751),i=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},s=function(e){return{size:e,has:function(){return!0},keys:function(){throw new Error("e")}}};e.exports=function(e,t){var n=r("Set");try{(new n)[e](i(0));try{return(new n)[e](i(-1)),!1}catch(a){if(!t)return!0;try{return(new n)[e](s(-1/0)),!1}catch(c){var o=new n([1,2]);return t(o[e](s(1/0)))}}}catch(c){return!1}}},9835:function(e){e.exports=function(e){try{var t=new Set,n={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return t.clear(),t.add(4),function(){return{done:!0}}}})}},r=t[e](n);return 1===r.size&&4===r.values().next().value}catch(i){return!1}}},5170:function(e,t,n){var r=n(6706),i=n(4402);e.exports=r(i.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;e.exports=function(e){var t=r(this),n=o(e).getIterator(),i=s(t);return a(n,function(e){u(t,e)?l(i,e):c(i,e)}),i}},4204:function(e,t,n){var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);e.exports=function(e){var t=r(this),n=o(e).getIterator(),c=s(t);return a(n,function(e){i(c,e)}),c}},6119:function(e,t,n){var r=n(5745),i=n(3392),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},7629:function(e,t,n){var r=n(6395),i=n(4576),s=n(9433),o="__core-js_shared__",a=e.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.49.0",mode:r?"pure":"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){var r=n(4576),i=n(9039),s=n(9519),o=n(4215),a=r.structuredClone;e.exports=!!a&&!i(function(){if("DENO"===o&&s>92||"NODE"===o&&s>94||"BROWSER"===o&&s>97)return!1;var e=new ArrayBuffer(8),t=a(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength})},4495:function(e,t,n){var r=n(9519),i=n(9039),s=n(4576),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i(function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41})},5610:function(e,t,n){var r=n(1291),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5854:function(e,t,n){var r=n(2777),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new i("Can't convert number to bigint");return BigInt(t)}},7696:function(e,t,n){var r=n(1291),i=n(8014),s=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw new s("Wrong length or index");return n}},5397:function(e,t,n){var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},2140:function(e,t,n){var r=n(8227),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},655:function(e,t,n){var r=n(6955),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),i=0,s=Math.random(),o=r(1.1.toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},9143:function(e,t,n){var r=n(4576),i=n(9504),s=n(3972),o=n(3463),a=n(9297),c=n(2804),u=n(944),l=n(5169),h=c.c2i,f=c.c2iUrl,d=r.SyntaxError,p=r.TypeError,g=i("".charAt),m=function(e,t){for(var n=e.length;t<n;t++){var r=g(e,t);if(" "!==r&&"\t"!==r&&"\n"!==r&&"\f"!==r&&"\r"!==r)break}return t},y=function(e,t,n){var r=e.length;r<4&&(e+=2===r?"AA":"A");var i=(t[g(e,0)]<<18)+(t[g(e,1)]<<12)+(t[g(e,2)]<<6)+t[g(e,3)],s=[i>>16&255,i>>8&255,255&i];if(2===r){if(n&&0!==s[1])throw new d("Extra bits");return[s[0]]}if(3===r){if(n&&0!==s[2])throw new d("Extra bits");return[s[0],s[1]]}return s},v=function(e,t,n){for(var r=t.length,i=0;i<r;i++)e[n+i]=t[i];return n+r};e.exports=function(e,t,n,r){o(e),s(t);var i="base64"===u(t)?h:f,c=t?t.lastChunkHandling:void 0;if(void 0===c&&(c="loose"),"loose"!==c&&"strict"!==c&&"stop-before-partial"!==c)throw new p("Incorrect `lastChunkHandling` option");n&&l(n.buffer);var _=e.length,w=n||[],b=0,E=0,T="",I=0;if(r)while(1){if(I=m(e,I),I===_){if(T.length>0){if("stop-before-partial"===c)break;if("loose"!==c)throw new d("Missing padding");if(1===T.length)throw new d("Malformed padding: exactly one additional character");b=v(w,y(T,i,!1),b)}E=_;break}var S=g(e,I);if(++I,"="===S){if(T.length<2)throw new d("Padding is too early");if(I=m(e,I),2===T.length){if(I===_){if("stop-before-partial"===c)break;throw new d("Malformed padding: only one =")}"="===g(e,I)&&(++I,I=m(e,I))}if(I<_)throw new d("Unexpected character after padding");b=v(w,y(T,i,"strict"===c),b),E=_;break}if(!a(i,S))throw new d("Unexpected character");var A=r-b;if(1===A&&2===T.length||2===A&&3===T.length)break;if(T+=S,4===T.length&&(b=v(w,y(T,i,!1),b),T="",E=I,b===r))break}return{bytes:w,read:E,written:b}}},2303:function(e,t,n){var r=n(4576),i=n(9504),s=r.Uint8Array,o=r.SyntaxError,a=Math.min,c=i("".match);e.exports=function(e,t){var n=e.length;if(n%2!==0)throw new o("String should be an even number of characters");for(var r=t?a(t.length,n/2):n/2,i=t||new s(r),u=c(e,/.{2}/g),l=0;l<r;l++){var h=+("0x"+u[l]+"0");if(h!==h)throw new o("String should only contain hex characters");i[l]=h>>4}return{bytes:i,read:l<<1}}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),i=n(9039);e.exports=r&&i(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},2812:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){var r=n(4576),i=n(4901),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},4995:function(e,t,n){var r=n(9504),i=WeakMap.prototype;e.exports={WeakMap:WeakMap,set:r(i.set),get:r(i.get),has:r(i.has),remove:r(i["delete"])}},511:function(e,t,n){var r=n(9167),i=n(9297),s=n(1951),o=n(4913).f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||o(t,e,{value:s.f(e)})}},1951:function(e,t,n){var r=n(8227);t.f=r},8227:function(e,t,n){var r=n(4576),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},6573:function(e,t,n){var r=n(3724),i=n(2106),s=n(3238),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},7936:function(e,t,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4423:function(e,t,n){var r=n(6518),i=n(9617).includes,s=n(9039),o=n(6469),a=s(function(){return!Array(1).includes()}),c=s(function(){return[,1].includes(void 0,1)});r({target:"Array",proto:!0,forced:a||c},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},4114:function(e,t,n){var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c(function(){return 4294967297!==[].push.call({length:4294967296},1)}),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},8111:function(e,t,n){var r=n(6518),i=n(4576),s=n(679),o=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),f=n(9297),d=n(8227),p=n(7657).IteratorPrototype,g=n(3724),m=n(6395),y="constructor",v="Iterator",_=d("toStringTag"),w=TypeError,b=i[v],E=m||!a(b)||b.prototype!==p||!h(function(){b({})}),T=function(){if(s(this,p),c(this)===p)throw new w("Abstract class Iterator not directly constructable")},I=function(e,t){g?u(p,e,{configurable:!0,get:function(){return t},set:function(t){if(o(this),this===p)throw new w("You can't redefine this property");f(this,e)?this[e]=t:l(this,e,t)}}):p[e]=t};f(p,_)||I(_,v),!E&&f(p,y)&&p[y]!==Object||I(y,T),T.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:T})},6382:function(e,t,n){var r=n(9565),i=n(6840),s=n(5966),o=n(9297),a=n(8227),c=n(7657).IteratorPrototype,u=a("dispose");o(c,u)||i(c,u,function(){var e=s(this,"return");e&&r(e,this)})},1148:function(e,t,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("every",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{every:function(e){a(this);try{o(e)}catch(r){u(this,"throw",r)}if(h)return i(h,this,e);var t=c(this),n=0;return!s(t,function(t,r){if(!e(t,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},2489:function(e,t,n){var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=n(9539),f=n(684),d=n(4549),p=!l&&!f("filter",function(){}),g=!l&&!p&&d("filter",TypeError),m=l||p||g,y=c(function(){var e,t,n,r=this.iterator,s=this.predicate,a=this.next;while(1){if(e=o(i(a,r)),t=this.done=!!e.done,t)return;if(n=e.value,u(r,s,[n,this.counter++],!0))return n}});r({target:"Iterator",proto:!0,real:!0,forced:m},{filter:function(e){o(this);try{s(e)}catch(t){h(this,"throw",t)}return g?i(g,this,e):new y(a(this),{predicate:e})}})},116:function(e,t,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("find",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{find:function(e){a(this);try{o(e)}catch(r){u(this,"throw",r)}if(h)return i(h,this,e);var t=c(this),n=0;return s(t,function(t,r){if(e(t,n++))return r(t)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},7588:function(e,t,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("forEach",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{forEach:function(e){a(this);try{o(e)}catch(r){u(this,"throw",r)}if(h)return i(h,this,e);var t=c(this),n=0;s(t,function(t){e(t,n++)},{IS_RECORD:!0})}})},1701:function(e,t,n){var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(9539),h=n(684),f=n(4549),d=n(6395),p=!d&&!h("map",function(){}),g=!d&&!p&&f("map",TypeError),m=d||p||g,y=c(function(){var e=this.iterator,t=o(i(this.next,e)),n=this.done=!!t.done;if(!n)return u(e,this.mapper,[t.value,this.counter++],!0)});r({target:"Iterator",proto:!0,real:!0,forced:m},{map:function(e){o(this);try{s(e)}catch(t){l(this,"throw",t)}return g?i(g,this,e):new y(a(this),{mapper:e})}})},8237:function(e,t,n){var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767),c=n(9539),u=n(4549),l=n(8745),h=n(9039),f=TypeError,d=h(function(){[].keys().reduce(function(){},void 0)}),p=!d&&u("reduce",f);r({target:"Iterator",proto:!0,real:!0,forced:d||p},{reduce:function(e){o(this);try{s(e)}catch(h){c(this,"throw",h)}var t=arguments.length<2,n=t?void 0:arguments[1];if(p)return l(p,this,t?[e]:[e,n]);var r=a(this),u=0;if(i(r,function(r){t?(t=!1,n=r):n=e(n,r,u),u++},{IS_RECORD:!0}),t)throw new f("Reduce of empty iterator with no initial value");return n}})},3579:function(e,t,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("some",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{some:function(e){a(this);try{o(e)}catch(r){u(this,"throw",r)}if(h)return i(h,this,e);var t=c(this),n=0;return s(t,function(t,r){if(e(t,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1806:function(e,t,n){var r=n(6518),i=n(8551),s=n(4659),o=n(2652),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var e=[],t=0;return o(a(i(this)),function(n){s(e,t++,n)},{IS_RECORD:!0}),e}})},9112:function(e,t,n){var r=n(6518),i=n(3724),s=n(4576),o=n(7751),a=n(9504),c=n(9565),u=n(4901),l=n(34),h=n(4376),f=n(9297),d=n(655),p=n(6198),g=n(4659),m=n(9039),y=n(8235),v=n(4495),_=s.JSON,w=s.Number,b=s.SyntaxError,E=_&&_.parse,T=o("Object","keys"),I=Object.getOwnPropertyDescriptor,S=a("".charAt),A=a("".slice),C=a(/./.exec),k=a([].push),O=/^\d$/,x=/^[1-9]$/,N=/^[\d-]$/,R=/^[\t\n\r ]$/,D=0,P=1,L=function(e,t){e=d(e);var n=new U(e,0,""),r=n.parse(),i=r.value,s=n.skip(R,r.end);if(s<e.length)throw new b('Unexpected extra character: "'+S(e,s)+'" after the parsed data at: '+s);return u(t)?M({"":i},"",t,r):i},M=function(e,t,n,r){var i,s,o,a,u,d=e[t],g=r&&d===r.value,m=g&&"string"==typeof r.source?{source:r.source}:{};if(l(d)){var y=h(d),v=g?r.nodes:y?[]:{};if(y)for(i=v.length,o=p(d),a=0;a<o;a++)F(d,a,M(d,""+a,n,a<i?v[a]:void 0));else for(s=T(d),o=p(s),a=0;a<o;a++)u=s[a],F(d,u,M(d,u,n,f(v,u)?v[u]:void 0))}return c(n,e,t,d,m)},F=function(e,t,n){if(i){var r=I(e,t);if(r&&!r.configurable)return}void 0===n?delete e[t]:g(e,t,n)},V=function(e,t,n,r){this.value=e,this.end=t,this.source=n,this.nodes=r},U=function(e,t){this.source=e,this.index=t};U.prototype={fork:function(e){return new U(this.source,e)},parse:function(){var e=this.source,t=this.skip(R,this.index),n=this.fork(t),r=S(e,t);if(C(N,r))return n.number();switch(r){case"{":return n.object();case"[":return n.array();case'"':return n.string();case"t":return n.keyword(!0);case"f":return n.keyword(!1);case"n":return n.keyword(null)}throw new b('Unexpected character: "'+r+'" at: '+t)},node:function(e,t,n,r,i){return new V(t,r,e?null:A(this.source,n,r),i)},object:function(){var e=this.source,t=this.index+1,n=!1,r={},i={},s=!1;while(t<e.length){if(t=this.until(['"',"}"],t),"}"===S(e,t)&&!n){t++,s=!0;break}var o=this.fork(t).string(),a=o.value;t=o.end,t=this.until([":"],t)+1,t=this.skip(R,t),o=this.fork(t).parse(),g(i,a,o),g(r,a,o.value),t=this.until([",","}"],o.end);var c=S(e,t);if(","===c)n=!0,t++;else if("}"===c){t++,s=!0;break}}if(!s)throw new b("Unterminated object at: "+t);return this.node(P,r,this.index,t,i)},array:function(){var e=this.source,t=this.index+1,n=!1,r=[],i=[],s=!1;while(t<e.length){if(t=this.skip(R,t),"]"===S(e,t)&&!n){t++,s=!0;break}var o=this.fork(t).parse();if(k(i,o),k(r,o.value),t=this.until([",","]"],o.end),","===S(e,t))n=!0,t++;else if("]"===S(e,t)){t++,s=!0;break}}if(!s)throw new b("Unterminated array at: "+t);return this.node(P,r,this.index,t,i)},string:function(){var e=this.index,t=y(this.source,this.index+1);return this.node(D,t.value,e,t.end)},number:function(){var e=this.source,t=this.index,n=t;if("-"===S(e,n)&&n++,"0"===S(e,n))n++;else{if(!C(x,S(e,n)))throw new b("Failed to parse number at: "+n);n=this.skip(O,n+1)}if("."===S(e,n)){var r=n+1;if(n=this.skip(O,r),r===n)throw new b("Failed to parse number's fraction at: "+n)}if("e"===S(e,n)||"E"===S(e,n)){n++,"+"!==S(e,n)&&"-"!==S(e,n)||n++;var i=n;if(n=this.skip(O,n),i===n)throw new b("Failed to parse number's exponent value at: "+n)}return this.node(D,w(A(e,t,n)),t,n)},keyword:function(e){var t=""+e,n=this.index,r=n+t.length;if(A(this.source,n,r)!==t)throw new b("Failed to parse value at: "+n);return this.node(D,e,n,r)},skip:function(e,t){for(var n=this.source;t<n.length;t++)if(!C(e,S(n,t)))break;return t},until:function(e,t){t=this.skip(R,t);for(var n=S(this.source,t),r=0;r<e.length;r++)if(e[r]===n)return t;throw new b('Unexpected character: "'+n+'" at: '+t)}};var j=m(function(){var e,t="9007199254740993";return E(t,function(t,n,r){e=r.source}),e!==t}),$=v&&!m(function(){return 1/E("-0 \t")!==-1/0});r({target:"JSON",stat:!0,forced:j},{parse:function(e,t){return $&&!u(t)?E(e):L(e,t)}})},3110:function(e,t,n){var r=n(6518),i=n(7751),s=n(8745),o=n(9565),a=n(9504),c=n(9039),u=n(4376),l=n(4901),h=n(5810),f=n(757),d=n(2195),p=n(655),g=n(7680),m=n(8235),y=n(3392),v=n(4495),_=n(7819),w=String,b=i("JSON","stringify"),E=a(/./.exec),T=a("".charAt),I=a("".charCodeAt),S=a("".replace),A=a("".slice),C=a([].push),k=a(1.1.toString),O=/[\uD800-\uDFFF]/g,x=/^[\uD800-\uDBFF]$/,N=/^[\uDC00-\uDFFF]$/,R=y(),D=R.length,P=!v||c(function(){var e=i("Symbol")("stringify detection");return"[null]"!==b([e])||"{}"!==b({a:e})||"{}"!==b(Object(e))}),L=c(function(){return'"\\udf06\\ud834"'!==b("\udf06\ud834")||'"\\udead"'!==b("\udead")}),M=P?function(e,t){var n=g(arguments),r=V(t);if(l(r)||void 0!==e&&!f(e))return n[1]=function(e,t){if(l(r)&&(t=o(r,this,w(e),t)),!f(t))return t},s(b,null,n)}:b,F=function(e,t,n){var r=T(n,t-1),i=T(n,t+1);return E(x,e)&&!E(N,i)||E(N,e)&&!E(x,r)?"\\u"+k(I(e,0),16):e},V=function(e){if(l(e))return e;if(u(e)){for(var t=e.length,n=[],r=0;r<t;r++){var i=e[r];"string"==typeof i?C(n,i):"number"!=typeof i&&"Number"!==d(i)&&"String"!==d(i)||C(n,p(i))}var s=n.length,o=!0;return function(e,t){if(o)return o=!1,t;if(u(this))return t;for(var r=0;r<s;r++)if(n[r]===e)return t}}};b&&r({target:"JSON",stat:!0,arity:3,forced:P||L||!_},{stringify:function(e,t,n){var r=V(t),i=[],s=M(e,function(e,t){var n=l(r)?o(r,this,w(e),t):t;return!_&&h(n)?R+(C(i,n.rawJSON)-1):n},n);if("string"!=typeof s)return s;if(L&&(s=S(s,O,F)),_)return s;for(var a="",c=s.length,u=0;u<c;u++){var f=T(s,u);if('"'===f){var d=m(s,++u).end-1,p=A(s,u,d);a+=A(p,0,D)===R?i[A(p,D)]:'"'+p+'"',u=d}else a+=f}return a}})},2731:function(e,t,n){var r=n(6518),i=n(9306),s=n(2248),o=n(6395),a=s.get,c=s.has,u=s.set;r({target:"Map",proto:!0,real:!0,forced:o},{getOrInsertComputed:function(e,t){var n=c(this,e);if(i(t),n)return a(this,e);0===e&&1/e===-1/0&&(e=0);var r=t(e);return u(this,e,r),r}})},5367:function(e,t,n){var r=n(6518),i=n(2248),s=n(6395),o=i.get,a=i.has,c=i.set;r({target:"Map",proto:!0,real:!0,forced:s},{getOrInsert:function(e,t){return a(this,e)?o(this,e):(c(this,e,t),t)}})},7642:function(e,t,n){var r=n(6518),i=n(3440),s=n(9039),o=n(4916),a=!o("difference",function(e){return 0===e.size}),c=a||s(function(){var e={size:1,has:function(){return!0},keys:function(){var e=0;return{next:function(){var n=e++>1;return t.has(1)&&t.clear(),{done:n,value:2}}}}},t=new Set([1,2,3,4]);return 3!==t.difference(e).size});r({target:"Set",proto:!0,real:!0,forced:c},{difference:i})},8004:function(e,t,n){var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection",function(e){return 2===e.size&&e.has(1)&&e.has(2)})||i(function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))});r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},3853:function(e,t,n){var r=n(6518),i=n(4449),s=n(4916),o=!s("isDisjointFrom",function(e){return!e});r({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:i})},5876:function(e,t,n){var r=n(6518),i=n(3838),s=n(4916),o=!s("isSubsetOf",function(e){return e});r({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:i})},2475:function(e,t,n){var r=n(6518),i=n(8527),s=n(4916),o=!s("isSupersetOf",function(e){return!e});r({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:i})},5024:function(e,t,n){var r=n(6518),i=n(3650),s=n(9835),o=n(4916),a=!o("symmetricDifference")||!s("symmetricDifference");r({target:"Set",proto:!0,real:!0,forced:a},{symmetricDifference:i})},1698:function(e,t,n){var r=n(6518),i=n(4204),s=n(9835),o=n(4916),a=!o("union")||!s("union");r({target:"Set",proto:!0,real:!0,forced:a},{union:i})},7324:function(e,t,n){var r=n(4576),i=n(511),s=n(4913).f,o=n(7347).f,a=r.Symbol;if(i("dispose"),a){var c=o(a,"dispose");c.enumerable&&c.configurable&&c.writable&&s(a,"dispose",{value:c.value,enumerable:!1,configurable:!1,writable:!1})}},9577:function(e,t,n){var r=n(4644),i=n(1108),s=n(6198),o=n(1291),a=n(5854),c=r.aTypedArray,u=r.getTypedArrayConstructor,l=r.exportTypedArrayMethod,h=RangeError,f=function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}(),d=f&&function(){try{new Int8Array(1)["with"](-.5,1)}catch(e){return!0}}();l("with",{with:function(e,t){var n=c(this),r=s(n),l=o(e),f=l<0?r+l:l,d=i(n)?a(t):+t;if(f>=r||f<0)throw new h("Incorrect index");for(var p=new(u(n))(r),g=0;g<r;g++)p[g]=g===f?d:n[g];return p}}["with"],!f||d)},6632:function(e,t,n){var r=n(6518),i=n(4576),s=n(9143),o=n(4154),a=i.Uint8Array,c=!a||!a.prototype.setFromBase64||!function(){var e=new a([255,255,255,255,255]);try{return void e.setFromBase64("",null)}catch(t){}try{return void e.setFromBase64("a")}catch(t){}try{e.setFromBase64("MjYyZg===")}catch(t){return 50===e[0]&&54===e[1]&&50===e[2]&&255===e[3]&&255===e[4]}}();a&&r({target:"Uint8Array",proto:!0,forced:c},{setFromBase64:function(e){o(this);var t=s(e,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:t.read,written:t.written}}})},4226:function(e,t,n){var r=n(6518),i=n(4576),s=n(3463),o=n(4154),a=n(5169),c=n(2303);function u(){try{var e=new ArrayBuffer(16,{maxByteLength:1024});new Uint8Array(e).setFromHex("cafed00d")}catch(t){return!0}}i.Uint8Array&&r({target:"Uint8Array",proto:!0,forced:u()},{setFromHex:function(e){o(this),s(e),a(this.buffer);var t=c(e,this).read;return{read:t,written:t/2}}})},9486:function(e,t,n){var r=n(6518),i=n(4576),s=n(9504),o=n(3972),a=n(4154),c=n(5169),u=n(2804),l=n(944),h=u.i2c,f=u.i2cUrl,d=s("".charAt),p=i.Uint8Array,g=!p||!p.prototype.toBase64||!function(){try{var e=new p;e.toBase64(null)}catch(t){return!0}}();p&&r({target:"Uint8Array",proto:!0,forced:g},{toBase64:function(){var e=a(this),t=arguments.length?o(arguments[0]):void 0,n="base64"===l(t)?h:f,r=!!t&&!!t.omitPadding;c(this.buffer);for(var i,s="",u=0,p=e.length,g=function(e){return d(n,i>>6*e&63)};u+2<p;u+=3)i=(e[u]<<16)+(e[u+1]<<8)+e[u+2],s+=g(3)+g(2)+g(1)+g(0);return u+2===p?(i=(e[u]<<16)+(e[u+1]<<8),s+=g(3)+g(2)+g(1)+(r?"":"=")):u+1===p&&(i=e[u]<<16,s+=g(3)+g(2)+(r?"":"==")),s}})},456:function(e,t,n){var r=n(6518),i=n(4576),s=n(9504),o=n(4154),a=n(5169),c=s(1.1.toString),u=s([].join),l=Array,h=i.Uint8Array,f=!h||!h.prototype.toHex||!function(){try{var e=new h([255,255,255,255,255,255,255,255]);return"ffffffffffffffff"===e.toHex()}catch(t){return!1}}();h&&r({target:"Uint8Array",proto:!0,forced:f},{toHex:function(){o(this),a(this.buffer);for(var e=l(this.length),t=0,n=this.length;t<n;t++){var r=c(this[t],16);e[t]=1===r.length?"0"+r:r}return u(e,"")}})},9452:function(e,t,n){var r=n(6518),i=n(9306),s=n(6557),o=n(4328),a=n(4995),c=n(6395),u=a.get,l=a.has,h=a.set,f=c||!function(){try{WeakMap.prototype.getOrInsertComputed&&(new WeakMap).getOrInsertComputed(1,function(){throw 1})}catch(e){return e instanceof TypeError}}();r({target:"WeakMap",proto:!0,real:!0,forced:f},{getOrInsertComputed:function(e,t){if(c||s(this),o(e),i(t),l(this,e))return u(this,e);var n=t(e);return h(this,e,n),n}})},8454:function(e,t,n){var r=n(6518),i=n(4995),s=n(6395),o=i.get,a=i.has,c=i.set;r({target:"WeakMap",proto:!0,real:!0,forced:s},{getOrInsert:function(e,t){return a(this,e)?o(this,e):(c(this,e,t),t)}})},4979:function(e,t,n){var r=n(6518),i=n(4576),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),f=n(5002),d=n(8574),p=n(3724),g=n(6395),m="DOMException",y=s("Error"),v=s(m),_=function(){u(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=new y(t);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,_),r},w=_.prototype=v.prototype,b="stack"in new y(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),I=!!T&&!(T.writable&&T.configurable),S=b&&!I&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?_:v});var A=s(m),C=A.prototype;if(C.constructor!==A)for(var k in g||a(C,"constructor",o(1,A)),f)if(c(f,k)){var O=f[k],x=O.s;c(A,x)||a(A,x,o(6,O.c))}},4603:function(e,t,n){var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),f=i([].push),d=new a("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(c,"delete",function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];h(this,function(e,t){f(r,{key:t,value:e})}),o(t,1);var i,a=s(e),c=s(n),d=0,p=r.length;while(d<p)i=r[d],l(this,i.key),d++;d=0;while(d<p)i=r[d++],i.key===a&&i.value===c||u(this,i.key,i.value)},{enumerable:!0,unsafe:!0})},7566:function(e,t,n){var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);o(t,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1},{enumerable:!0,unsafe:!0})},8721:function(e,t,n){var r=n(3724),i=n(9504),s=n(2106),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,function(){e++}),e},configurable:!0,enumerable:!0})},262:function(e,t,n){n.d(t,{MF:function(){return _e},j6:function(){return pe},xZ:function(){return ge},om:function(){return de},Sx:function(){return be},Wp:function(){return we},KO:function(){return Ee}});n(4114),n(8111),n(2489),n(1701),n(3579),n(9112),n(3110),n(5367),n(2731);var r=n(798),i=n(6189),s=n(2455);n(4423),n(8454),n(9452),n(4979);const o=(e,t)=>t.some(t=>e instanceof t);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),g.set(t,e),t}function y(e){if(f.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});f.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){v=e(v)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return d.set(r,t.sort?t.sort():[t]),E(r)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const T=e=>g.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const S=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],C=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return C.set(t,s),s}_(e=>({...e,get:(t,n,r)=>k(t,n)||e.get(t,n,r),has:(t,n)=>!!k(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===t?.type}const N="@firebase/app",R="0.14.10",D=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/data-connect",q="@firebase/database-compat",H="@firebase/functions",z="@firebase/functions-compat",W="@firebase/installations",G="@firebase/installations-compat",K="@firebase/messaging",Q="@firebase/messaging-compat",Y="@firebase/performance",X="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",ee="@firebase/storage",te="@firebase/storage-compat",ne="@firebase/firestore",re="@firebase/ai",ie="@firebase/firestore-compat",se="firebase",oe="12.11.0",ae="[DEFAULT]",ce={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-data-connect",[q]:"fire-rtdb-compat",[H]:"fire-fn",[z]:"fire-fn-compat",[W]:"fire-iid",[G]:"fire-iid-compat",[K]:"fire-fcm",[Q]:"fire-fcm-compat",[Y]:"fire-perf",[X]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[ee]:"fire-gcs",[te]:"fire-gcs-compat",[ne]:"fire-fst",[ie]:"fire-fst-compat",[re]:"fire-vertex","fire-js":"fire-js",[se]:"fire-js-all"},ue=new Map,le=new Map,he=new Map;function fe(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function de(e){const t=e.name;if(he.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;he.set(t,e);for(const n of ue.values())fe(n,e);for(const n of le.values())fe(n,e);return!0}function pe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ge(e){return null!==e&&void 0!==e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const me={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ye=new s.FA("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ye.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e=oe;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i={name:ae,automaticDataCollectionEnabled:!0,...t},o=i.name;if("string"!==typeof o||!o)throw ye.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw ye.create("no-options");const a=ue.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw ye.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of he.values())c.addComponent(r);const u=new ve(n,i,c);return ue.set(o,u),u}function be(e=ae){const t=ue.get(e);if(!t&&e===ae&&(0,s.T9)())return we();if(!t)throw ye.create("no-app",{appName:e});return t}function Ee(e,t,n){let i=ce[e]??e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}de(new r.uA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Te="firebase-heartbeat-database",Ie=1,Se="firebase-heartbeat-store";let Ae=null;function Ce(){return Ae||(Ae=I(Te,Ie,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Se)}catch(n){console.warn(n)}}}}).catch(e=>{throw ye.create("idb-open",{originalErrorMessage:e.message})})),Ae}async function ke(e){try{const t=await Ce(),n=t.transaction(Se),r=await n.objectStore(Se).get(xe(e));return await n.done,r}catch(t){if(t instanceof s.g)D.warn(t.message);else{const e=ye.create("idb-get",{originalErrorMessage:t?.message});D.warn(e.message)}}}async function Oe(e,t){try{const n=await Ce(),r=n.transaction(Se,"readwrite"),i=r.objectStore(Se);await i.put(t,xe(e)),await r.done}catch(n){if(n instanceof s.g)D.warn(n.message);else{const e=ye.create("idb-set",{originalErrorMessage:n?.message});D.warn(e.message)}}}function xe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=1024,Re=30;class De{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Me(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Pe();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>Re){const e=Ve(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){D.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pe(),{heartbeatsToSend:t,unsentEntries:n}=Le(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return D.warn(e),""}}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function Le(e,t=Ne){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Fe(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Me{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ke(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Oe(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Oe(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Fe(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}function Ve(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){de(new r.uA("platform-logger",e=>new O(e),"PRIVATE")),de(new r.uA("heartbeat",e=>new De(e),"PRIVATE")),Ee(N,R,e),Ee(N,R,"esm2020"),Ee("fire-js","")}Ue("")},798:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return i}});n(8111),n(2489),n(1701),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(2455);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},6189:function(e,t,n){n.d(t,{$b:function(){return i},Vy:function(){return u}});n(4114),n(8111),n(2489),n(1701),n(3110);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},6400:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(262),i="firebase",s="12.11.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},6375:function(e,t,n){n.d(t,{eJ:function(){return Ft},xI:function(){return ei},hg:function(){return $t},x9:function(){return Vt},CI:function(){return Bt}});n(4423),n(4114),n(8111),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(9112),n(3110),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452),n(4603),n(7566),n(8721);var r=n(262),i=n(2455),s=n(6189),o=n(798);function a(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=a,u=new i.FA("auth","Firebase",a()),l=new s.Vy("@firebase/auth");function h(e,...t){l.logLevel<=s.$b.WARN&&l.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){l.logLevel<=s.$b.ERROR&&l.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,...t){throw y(e,...t)}function p(e,...t){return y(e,...t)}function g(e,t,n){const r={...c(),[t]:n},s=new i.FA("auth","Firebase",r);return s.create(t,{appName:e.name})}function m(e){return g(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw y(t,...n)}function _(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function w(e,t){e||_(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof self&&self.location?.href||""}function E(){return"http:"===T()||"https:"===T()}function T(){return"undefined"!==typeof self&&self.location?.protocol||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},x=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],N=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function D(e,t,n,r,s={}){return P(e,s,async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)({key:e.config.apiKey,...o}).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u={method:t,headers:c,...s};return(0,i.c1)()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&(0,i.zJ)(e.emulatorConfig.host)&&(u.credentials="include"),k.fetch()(await M(e,e.config.apiHost,n,a),u)})}async function P(e,t,n){e._canInitEmulator=!1;const r={...O,...t};try{const t=new V(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw U(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw U(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);d(e,a)}}catch(s){if(s instanceof i.g)throw s;d(e,"network-request-failed",{message:String(s)})}}async function L(e,t,n,r,i={}){const s=await D(e,t,n,r,i);return"mfaPendingCredential"in s&&d(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function M(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?C(e.config,i):`${e.config.apiScheme}://${i}`;if(x.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){const e=s._getPersistence();return e._getFinalTarget(o).toString()}return o}function F(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class V{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),N.get())})}}function U(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return void 0!==e&&void 0!==e.enterprise}class ${constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return F(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return D(e,"GET","/v2/recaptchaConfig",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function H(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),s=K(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=o?.["sign_in_provider"];return{claims:s,token:r,authTime:z(G(s.auth_time)),issuedAtTime:z(G(s.iat)),expirationTime:z(G(s.exp)),signInProvider:a||null,signInSecondFactor:o?.["sign_in_second_factor"]||null}}function G(e){return 1e3*Number(e)}function K(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Q(e){const t=K(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&X(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=this.user.stsTokenManager.expirationTime??0,t=e-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e?.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){const t=e.auth,n=await e.getIdToken(),r=await Y(e,H(t,{idToken:n}));v(r?.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=i.providerUserInfo?.length?re(i.providerUserInfo):[],o=ne(e.providerData,s),a=e.isAnonymous,c=!(e.email&&i.passwordHash)&&!o?.length,u=!!a&&c,l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Z(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,l)}async function te(e){const t=(0,i.Ku)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ne(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function re(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e,t){const n=await P(e,{},async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=await M(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:n};return e.emulatorConfig&&(0,i.zJ)(e.emulatorConfig.host)&&(c.credentials="include"),k.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function se(e,t){return D(e,"POST","/v2/accounts:revokeToken",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){v(0!==e.length,"internal-error");const t=Q(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(v(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ie(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new oe;return n&&(v("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ce{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Z(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Y(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W(this,e)}reload(){return te(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ce({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(m(this.auth));const e=await this.getIdToken();return await Y(this,q(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,s=t.photoURL??void 0,o=t.tenantId??void 0,a=t._redirectEventId??void 0,c=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:l,emailVerified:h,isAnonymous:f,providerData:d,stsTokenManager:p}=t;v(l&&p,e,"internal-error");const g=oe.fromJSON(this.name,p);v("string"===typeof l,e,"internal-error"),ae(n,e.name),ae(r,e.name),v("boolean"===typeof h,e,"internal-error"),v("boolean"===typeof f,e,"internal-error"),ae(i,e.name),ae(s,e.name),ae(o,e.name),ae(a,e.name),ae(c,e.name),ae(u,e.name);const m=new ce({uid:l,auth:e,email:r,emailVerified:h,displayName:n,isAnonymous:f,photoURL:s,phoneNumber:i,tenantId:o,stsTokenManager:g,createdAt:c,lastLoginAt:u});return d&&Array.isArray(d)&&(m.providerData=d.map(e=>({...e}))),a&&(m._redirectEventId=a),m}static async _fromIdTokenResponse(e,t,n=!1){const r=new oe;r.updateFromServerResponse(t);const i=new ce({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];v(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?re(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!i?.length,o=new oe;o.updateFromIdToken(n);const a=new ce({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Z(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Map;function le(e){w(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const fe=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=de(this.userKey,r.apiKey,i),this.fullPersistenceKey=de("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"===typeof e){const t=await H(this.auth,{idToken:e}).catch(()=>{});return t?ce._fromGetAccountInfoResponse(this.auth,t,e):null}return ce._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(le(fe),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||le(fe);const s=de(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){let n;if("string"===typeof t){const r=await H(e,{idToken:t}).catch(()=>{});if(!r)break;n=await ce._fromGetAccountInfoResponse(e,r,t)}else n=ce._fromJSON(e,t);c!==i&&(o=n),i=c;break}}catch{}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch{}})),new pe(i,e,n)):new pe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_e(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(be(t))return"Blackberry";if(Ee(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||ve(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function me(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ye(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ve(e=(0,i.ZQ)()){return/crios\//i.test(e)}function _e(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function we(e=(0,i.ZQ)()){return/android/i.test(e)}function be(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Ee(e=(0,i.ZQ)()){return/webos/i.test(e)}function Te(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ie(e=(0,i.ZQ)()){return Te(e)&&!!window.navigator?.standalone}function Se(){return(0,i.lT)()&&10===document.documentMode}function Ae(e=(0,i.ZQ)()){return Te(e)||we(e)||Ee(e)||be(e)||/windows phone/i.test(e)||_e(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.ZQ)());break;case"Worker":n=`${ge((0,i.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(e,t={}){return D(e,"GET","/v2/passwordPolicy",R(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=6;class Ne{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??xe,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.beforeStateQueue=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=le(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(n){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await H(this,{idToken:e}),n=await ce._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,r=n?._redirectEventId,s=await this.tryRedirectSignIn(e);t&&t!==r||!s?.user||(n=s.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(t){if("auth/network-request-failed"!==t?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(m(this));const t=e?(0,i.Ku)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(m(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(m(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(le(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Oe(this),t=new Ne(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await se(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&le(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&h(`Error while retrieving App Check token: ${e.error}`),e?.token}}function De(e){return(0,i.Ku)(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Me(e){Le=e}function Fe(e){return Le.loadJS(e)}function Ve(){return Le.recaptchaEnterpriseScript}function Ue(){return Le.gapiScript}function je(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(){this.enterprise=new Be}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Be{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qe="recaptcha-enterprise",He="NO_RECAPTCHA";class ze{constructor(e){this.type=qe,this.auth=De(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{B(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new $(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const i=window.grecaptcha;j(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(He)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const e=new $e;return e.execute("siteKey",{action:"verify"})}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&j(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Ve();0!==t.length&&(t+=n),Fe(t).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function We(e,t,n,r=!1,i=!1){const s=new ze(e);let o;if(i)o=He;else try{o=await s.verify(n)}catch(c){o=await s.verify(n,!0)}const a={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ge(e,t,n,r,i){if("EMAIL_PASSWORD_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await We(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await We(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)})}if("PHONE_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await We(e,t,n);return r(e,i).catch(async i=>{if("AUDIT"===e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await We(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)})}{const i=await We(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}async function Ke(e){const t=De(e),n=await B(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new $(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){const e=new ze(t);e.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,t??{}))return e;d(e,"already-initialized")}const s=n.initialize({options:t});return s}function Ye(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(le);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function Xe(e,t,n){const r=De(e);v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!n?.disableWarnings,o=Je(t),{host:a,port:c}=Ze(t),u=null===c?"":`:${c}`,l={url:`${o}//${a}${u}/`},h=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator)return v(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void v((0,i.bD)(l,r.config.emulator)&&(0,i.bD)(h,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=l,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,(0,i.zJ)(a)?(0,i.gE)(`${o}//${a}${u}`):s||tt()}function Je(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ze(e){const t=Je(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:et(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:et(t)}}}function et(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function tt(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _("not implemented")}_getIdTokenResponse(e){return _("not implemented")}_linkToIdToken(e,t){return _("not implemented")}_getReauthenticationResolver(e){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t){return D(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}async function ot(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends nt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new at(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new at(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ge(e,t,"signInWithPassword",it,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return st(e,{email:this._email,oobCode:this._password});default:d(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ge(e,n,"signUpPassword",rt,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ot(e,{idToken:t,email:this._email,oobCode:this._password});default:d(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="http://localhost";class lt extends nt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):d("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const s=new lt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ct(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ct(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ct(e,t)}buildRequest(){const e={requestUri:ut,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}async function ft(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}async function dt(e,t){const n=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}const pt={["USER_NOT_FOUND"]:"user-not-found"};async function gt(e,t){const n={...t,operation:"REAUTH"};return L(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,n),pt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends nt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new mt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new mt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ft(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return dt(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return gt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new mt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||t||e}class _t{constructor(e){const t=(0,i.I9)((0,i.hp)(e)),n=t["apiKey"]??null,r=t["oobCode"]??null,s=yt(t["mode"]??null);v(n&&r&&s,"argument-error"),this.apiKey=n,this.operation=s,this.code=r,this.continueUrl=t["continueUrl"]??null,this.languageCode=t["lang"]??null,this.tenantId=t["tenantId"]??null}static parseLink(e){const t=vt(e);try{return new _t(t)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(){this.providerId=wt.PROVIDER_ID}static credential(e,t){return at._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=_t.parseLink(t);return v(n,"argument-error"),at._fromEmailAndCode(e,n.code,n.tenantId)}}wt.PROVIDER_ID="password",wt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends bt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends Et{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Tt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends Et{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return It.credential(t,n)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com",It.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St extends Et{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com",St.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends Et{constructor(){super("twitter.com")}static credential(e,t){return lt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return At.credential(t,n)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ct(e,t){return L(e,"POST","/v1/accounts:signUp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.TWITTER_SIGN_IN_METHOD="twitter.com",At.PROVIDER_ID="twitter.com";class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ce._fromIdTokenResponse(e,n,r),s=Ot(n),o=new kt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ot(n);return new kt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ot(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt extends i.g{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,xt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new xt(e,t,n,r)}}function Nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw xt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const r=await Y(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dt(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(m(i));const s="reauthenticate";try{const r=await Y(e,Nt(i,s,t,e),n);v(r.idToken,i,"internal-error");const o=K(r.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(e.uid===a,i,"user-mismatch"),kt._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===o?.code&&d(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(m(e));const i="signIn",s=await Nt(e,i,t),o=await kt._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(o.user),o}async function Lt(e,t){return Pt(De(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mt(e){const t=De(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Ft(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(m(e));const i=De(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},o=Ge(i,s,"signUpPassword",Ct,"EMAIL_PASSWORD_PROVIDER"),a=await o.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Mt(e),t}),c=await kt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Vt(e,t,n){return(0,r.xZ)(e.app)?Promise.reject(m(e)):Lt((0,i.Ku)(e),wt.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Mt(e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function jt(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}function $t(e,t,n,r){return(0,i.Ku)(e).onAuthStateChanged(t,n,r)}function Bt(e){return(0,i.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function Ht(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}function zt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function Wt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}new WeakMap;const Gt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gt,"1"),this.storage.removeItem(Gt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=1e3,Yt=10;class Xt extends Kt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ae(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Se()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Yt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Qt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xt.type="LOCAL";const Jt=Xt,Zt=1e3;
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){const t=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function tn(e){const t="http:"===window.location.protocol;return`${t?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}class nn{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(void 0===typeof window)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return!("boolean"===typeof isSecureContext&&!isSecureContext)&&("undefined"!==typeof navigator&&"undefined"!==typeof document&&(navigator.cookieEnabled??!0))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=tn(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return e?.value}return en(t)}async _remove(e){if(!this._isAvailable())return;const t=await this._get(e);if(!t)return;const n=tn(e);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=tn(e);if(window.cookieStore){const e=e=>{const r=e.changed.find(e=>e.name===n);r&&t(r.value);const i=e.deleted.find(e=>e.name===n);i&&t(null)},r=()=>window.cookieStore.removeEventListener("change",e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener("change",e)}let r=en(n);const i=setInterval(()=>{const e=en(n);e!==r&&(t(e),r=e)},Zt),s=()=>clearInterval(i);this.listenerUnsubscribes.set(t,s)}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}nn.type="COOKIE";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn extends Kt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rn.type="SESSION";const sn=rn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new an(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!s?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await on(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.receivers=[];class un{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=cn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function hn(e){ln().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return"undefined"!==typeof ln()["WorkerGlobalScope"]&&"function"===typeof ln()["importScripts"]}async function dn(){if(!navigator?.serviceWorker)return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch{return null}}function pn(){return navigator?.serviceWorker?.controller||null}function gn(){return fn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="firebaseLocalStorageDb",yn=1,vn="firebaseLocalStorage",_n="fbase_key";class wn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bn(e,t){return e.transaction([vn],t?"readwrite":"readonly").objectStore(vn)}function En(){const e=indexedDB.deleteDatabase(mn);return new wn(e).toPromise()}function Tn(){const e=indexedDB.open(mn,yn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(vn,{keyPath:_n})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(vn)?t(n):(n.close(),await En(),t(await Tn()))})})}async function In(e,t,n){const r=bn(e,!0).put({[_n]:t,value:n});return new wn(r).toPromise()}async function Sn(e,t){const n=bn(e,!1).get(t),r=await new wn(n).toPromise();return void 0===r?null:r.value}function An(e,t){const n=bn(e,!0).delete(t);return new wn(n).toPromise()}const Cn=800,kn=3;class On{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Tn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>kn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=an._getInstance(gn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await dn(),!this.activeServiceWorker)return;this.sender=new un(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&pn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tn();return await In(e,Gt,"1"),await An(e,Gt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>In(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Sn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>An(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=bn(e,!1).getAll();return new wn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}On.type="LOCAL";const xn=On;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}function Rn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}function Dn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn="recaptcha";async function Ln(e,t,n){if(!e._getRecaptchaConfig())try{await Ke(e)}catch(r){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(r="string"===typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){v("enroll"===t.type,e,"internal-error");const i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===He){v(n?.type===Pn,e,"argument-error");const r=await Mn(e,t,n);return qt(e,r)}return qt(e,t)},o=Ge(e,i,"mfaSmsEnrollment",s,"PHONE_PROVIDER"),a=await o.catch(e=>Promise.reject(e));return a.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;v(i,e,"missing-multi-factor-info");const s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===He){v(n?.type===Pn,e,"argument-error");const r=await Mn(e,t,n);return Nn(e,r)}return Nn(e,t)},a=Ge(e,s,"mfaSmsSignIn",o,"PHONE_PROVIDER"),c=await a.catch(e=>Promise.reject(e));return c.phoneResponseInfo.sessionInfo}}{const t={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=async(e,t)=>{if(t.captchaResponse===He){v(n?.type===Pn,e,"argument-error");const r=await Mn(e,t,n);return ht(e,r)}return ht(e,t)},s=Ge(e,t,"sendVerificationCode",i,"PHONE_PROVIDER"),o=await s.catch(e=>Promise.reject(e));return o.sessionInfo}}finally{n?._reset()}}async function Mn(e,t,n){v(n.type===Pn,e,"argument-error");const r=await n.verify();v("string"===typeof r,e,"argument-error");const i={...t};if("phoneEnrollmentInfo"in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:s}}),i}if("phoneSignInInfo"in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.providerId=Fn.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return Ln(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return mt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Fn.credentialFromTaggedObject(t)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?mt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vn(e,t){return t?le(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn.PROVIDER_ID="phone",Fn.PHONE_SIGN_IN_METHOD="phone";class Un extends nt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ct(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ct(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ct(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jn(e){return Pt(e.auth,new Un(e),e.bypassAuthState)}function $n(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),Dt(n,new Un(e),e.bypassAuthState)}async function Bn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),Rt(n,new Un(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jn;case"linkViaPopup":case"linkViaRedirect":return Bn;case"reauthViaPopup":case"reauthViaRedirect":return $n;default:d(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new A(2e3,1e4);class zn extends qn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=cn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Hn.get())};e()}}zn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wn="pendingRedirect",Gn=new Map;class Kn extends qn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gn.get(this.auth._key());if(!e){try{const t=await Qn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Gn.set(this.auth._key(),e)}return this.bypassAuthState||Gn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Qn(e,t){const n=Jn(t),r=Xn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Yn(e,t){Gn.set(e._key(),t)}function Xn(e){return le(e._redirectPersistence)}function Jn(e){return de(Wn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(m(e));const i=De(e),s=Vn(i,t),o=new Kn(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const er=6e5;class tr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ir(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!rr(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(p(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=er&&this.cachedEventUids.clear(),this.cachedEventUids.has(nr(e))}saveEventToCache(e){this.cachedEventUids.add(nr(e)),this.lastProcessedEventTime=Date.now()}}function nr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function rr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}function ir(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ar=/^https?/;async function cr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await sr(e);for(const n of t)try{if(ur(n))return}catch{}d(e,"unauthorized-domain")}function ur(e){const t=b(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ar.test(n))return!1;if(or.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new A(3e4,6e4);function hr(){const e=ln().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function fr(e){return new Promise((t,n)=>{function r(){hr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{hr(),n(p(e,"network-request-failed"))},timeout:lr.get()})}if(ln().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!ln().gapi?.load){const t=je("iframefcb");return ln()[t]=()=>{gapi.load?r():n(p(e,"network-request-failed"))},Fe(`${Ue()}?onload=${t}`).catch(e=>n(e))}r()}}).catch(e=>{throw dr=null,e})}let dr=null;function pr(e){return dr=dr||fr(e),dr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new A(5e3,15e3),mr="__/auth/iframe",yr="emulator/auth/iframe",vr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_r=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wr(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?C(t,yr):`https://${e.config.authDomain}/${mr}`,s={apiKey:t.apiKey,appName:e.name,v:r.MF},o=_r.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function br(e){const t=await pr(e),n=ln().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:wr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vr,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=ln().setTimeout(()=>{r(i)},gr.get());function o(){ln().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tr=500,Ir=600,Sr="_blank",Ar="http://localhost";class Cr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function kr(e,t,n,r=Tr,s=Ir){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...Er,width:r.toString(),height:s.toString(),top:o,left:a},l=(0,i.ZQ)().toLowerCase();n&&(c=ve(l)?Sr:n),me(l)&&(t=t||Ar,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Ie(l)&&"_self"!==c)return Or(t||"",c),new Cr(null);const f=window.open(t||"",c,h);v(f,e,"popup-blocked");try{f.focus()}catch(d){}return new Cr(f)}function Or(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="__/auth/handler",Nr="emulator/auth/handler",Rr=encodeURIComponent("fac");async function Dr(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(t instanceof bt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Et){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${Rr}=${encodeURIComponent(l)}`:"";return`${Pr(e)}?${(0,i.Am)(u).slice(1)}${h}`}function Pr({config:e}){return e.emulator?C(e,Nr):`https://${e.authDomain}/${xr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="webStorageSupport";class Mr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sn,this._completeRedirectFn=Zn,this._overrideRedirectResult=Yn}async _openPopup(e,t,n,r){w(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Dr(e,t,n,b(),r);return kr(e,i,cn())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Dr(e,t,n,b(),r);return hn(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await br(e),n=new tr(e);return t.register("authEvent",t=>{v(t?.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Lr,{type:Lr},n=>{const r=n?.[0]?.[Lr];void 0!==r&&t(!!r),d(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ae()||ye()||Te()}}const Fr=Mr;class Vr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return _("unexpected MultiFactorSessionType")}}}class Ur extends Vr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ur(e)}_finalizeEnroll(e,t,n){return Ht(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Rn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class jr{constructor(){}static assertion(e){return Ur._fromCredential(e)}}jr.FACTOR_ID="phone";class $r{static assertionForEnrollment(e,t){return Br._fromSecret(e,t)}static assertionForSignIn(e,t){return Br._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;v("undefined"!==typeof t.user?.auth,"internal-error");const n=await zt(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return qr._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}$r.FACTOR_ID="totp";class Br extends Vr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Br(t,void 0,e)}static _fromEnrollmentId(e,t){return new Br(t,e)}async _finalizeEnroll(e,t,n){return v("undefined"!==typeof this.secret,e,"argument-error"),Wt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){v(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Dn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class qr{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new qr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let n=!1;return(Hr(e)||Hr(t))&&(n=!0),n&&(Hr(e)&&(e=this.auth.currentUser?.email||"unknownuser"),Hr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Hr(e){return"undefined"===typeof e||0===e?.length}var zr="@firebase/auth",Wr="1.12.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qr(e){(0,r.om)(new o.uA("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce(e)},u=new Re(r,i,s,c);return Ye(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),(0,r.om)(new o.uA("auth-internal",e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new Gr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(zr,Wr,Kr(e)),(0,r.KO)(zr,Wr,"esm2020")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=300,Xr=(0,i.XA)("authIdTokenMaxAge")||Yr;let Jr=null;const Zr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Xr)return;const i=n?.token;Jr!==i&&(Jr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ei(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Qe(e,{popupRedirectResolver:Fr,persistence:[xn,Jt,sn]}),s=(0,i.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(s,location.origin);if(location.origin===e.origin){const t=Zr(e.toString());jt(n,t,()=>t(n.currentUser)),Ut(n,e=>t(e))}}const o=(0,i.Tj)("auth");return o&&Xe(n,`http://${o}`),n}function ti(){return document.getElementsByTagName("head")?.[0]??document}Me({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ti().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Qr("Browser")},7492:function(e,t,n){n.d(t,{gS:function(){return xu},rJ:function(){return vc},kd:function(){return Ou},H9:function(){return _c},x7:function(){return Su},GG:function(){return Au},aU:function(){return Ic},My:function(){return gu},P:function(){return lu},O5:function(){return nu},BN:function(){return Cu},mZ:function(){return ku},_M:function(){return fu}});n(4114),n(8111),n(2489),n(7588),n(1701),n(9112),n(5367),n(2731),n(8454),n(9452);var r,i,s=n(262),o=n(798),a=(n(4423),n(6573),n(8100),n(7936),n(1148),n(116),n(8237),n(3579),n(1806),n(3110),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(9577),n(6632),n(4226),n(9486),n(456),n(4979),n(4603),n(7566),n(8721),n(2455)),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={};(function(){var e;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function t(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function o(e,t,n){n||(n=0);const r=Array(16);if("string"===typeof t)for(var i=0;i<16;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];let s,o=e.g[3];s=t+(o^n&(i^o))+r[0]+3614090360&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[1]+3905402710&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[4]+4118548399&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[5]+1200080426&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[8]+1770035416&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[9]+2336552879&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[12]+1804603682&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[13]+4254626195&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(i^o&(n^i))+r[1]+4129170786&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[5]+3593408605&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[9]+568446438&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[13]+2850285829&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(n^i^o)+r[5]+4294588738&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[8]+2272392833&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[1]+2763975236&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[4]+1272893353&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[13]+681279174&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[0]+3936430074&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[9]+3654602809&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[12]+3873151461&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(i^(n|~o))+r[0]+4096336452&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[12]+1700485571&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[8]+1873313359&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[4]+4149444226&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}function a(e,t){var n=l;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function c(e,t){this.h=t;const n=[];let r=!0;for(let i=e.length-1;i>=0;i--){const s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}t(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.v=function(e,t){void 0===t&&(t=e.length);const n=t-this.blockSize,r=this.C;let i=this.h,s=0;for(;s<t;){if(0==i)for(;s<=n;)o(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=t},s.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};var l={};function h(e){return-128<=e&&e<128?a(e,function(e){return new c([0|e],e<0?-1:0)}):new c([0|e],e<0?-1:0)}function f(e){if(isNaN(e)||!isFinite(e))return p;if(e<0)return _(f(-e));const t=[];let n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new c(t,0)}function d(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,t<2||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return _(d(e.substring(1),t));if(e.indexOf("-")>=0)throw Error('number format error: interior "-" character');const n=f(Math.pow(t,8));let r=p;for(let s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s);const o=parseInt(e.substring(s,s+i),t);i<8?(i=f(Math.pow(t,i)),r=r.j(i).add(f(o))):(r=r.j(n),r=r.add(f(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function y(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function v(e){return-1==e.h}function _(e){const t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new c(n,~e.h).add(g)}function w(e,t){return e.add(_(t))}function b(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function E(e,t){this.g=e,this.h=t}function T(e,t){if(y(t))throw Error("division by zero");if(y(e))return new E(p,p);if(v(e))return t=T(_(e),t),new E(_(t.g),_(t.h));if(v(t))return t=T(e,_(t)),new E(_(t.g),t.h);if(e.g.length>30){if(v(e)||v(t))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=t;r.l(e)<=0;)n=I(n),r=I(r);var i=S(n,1),s=S(r,1);for(r=S(r,2),n=S(n,2);!y(r);){var o=s.add(r);o.l(e)<=0&&(i=i.add(n),s=o),r=S(r,1),n=S(n,1)}return t=w(e,i.j(t)),new E(i,t)}for(i=p;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=r<=48?1:Math.pow(2,r-48),s=f(n),o=s.j(t);v(o)||o.l(e)>0;)n-=r,s=f(n),o=s.j(t);y(s)&&(s=g),i=i.add(s),e=w(e,o)}return new E(i,e)}function I(e){const t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new c(n,e.h)}function S(e,t){const n=t>>5;t%=32;const r=e.g.length-n,i=[];for(let s=0;s<r;s++)i[s]=t>0?e.i(s+n)>>>t|e.i(s+n+1)<<32-t:e.i(s+n);return new c(i,e.h)}e=c.prototype,e.m=function(){if(v(this))return-_(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(e=e||10,e<2||36<e)throw Error("radix out of range: "+e);if(y(this))return"0";if(v(this))return"-"+_(this).toString(e);const t=f(Math.pow(e,6));var n=this;let r="";for(;;){const i=T(n,t).g;n=w(n,i.j(t));let s=((n.g.length>0?n.g[0]:n.h)>>>0).toString(e);if(n=i,y(n))return s+r;for(;s.length<6;)s="0"+s;r=s+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return e=w(this,e),v(e)?-1:y(e)?0:1},e.abs=function(){return v(this)?_(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let r=0;for(let i=0;i<=t;i++){let t=r+(65535&this.i(i))+(65535&e.i(i)),s=(t>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16);r=s>>>16,t&=65535,s&=65535,n[i]=s<<16|t}return new c(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(y(this)||y(e))return p;if(v(this))return v(e)?_(this).j(_(e)):_(_(this).j(e));if(v(e))return _(this.j(_(e)));if(this.l(m)<0&&e.l(m)<0)return f(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let t=0;t<e.g.length;t++){const i=this.i(r)>>>16,s=65535&this.i(r),o=e.i(t)>>>16,a=65535&e.i(t);n[2*r+2*t]+=s*a,b(n,2*r+2*t),n[2*r+2*t+1]+=i*a,b(n,2*r+2*t+1),n[2*r+2*t+1]+=s*o,b(n,2*r+2*t+1),n[2*r+2*t+2]+=i*o,b(n,2*r+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new c(n,0)},e.B=function(e){return T(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new c(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new c(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new c(n,this.h^e.h)},s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,i=u.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=d,r=u.Integer=c}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var l,h,f,d,p,g,m,y,v=n(6189),_=(n(7324),n(6382),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),w={};(function(){var e,t=Object.defineProperty;function n(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof _&&_];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(e,n){if(n)e:{var i=r;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}e=e[e.length-1],s=i[e],n=n(s),n!=s&&null!=n&&t(i,e,{configurable:!0,writable:!0,value:n})}}i("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var s=s||{},o=this||self;function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function c(e,t,n){return e.call.apply(e.bind,arguments)}function u(e,t,n){return u=c,u.apply(null,arguments)}function v(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function b(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}var T="undefined"!==typeof AsyncContext&&"function"===typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function I(e){const t=e.length;if(t>0){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function S(e,t){for(let r=1;r<arguments.length;r++){const t=arguments[r];var n=typeof t;if(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null","array"==n||"object"==n&&"number"==typeof t.length){n=e.length||0;const r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}class A{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function C(e){o.setTimeout(()=>{throw e},0)}function k(){var e=P;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class O{constructor(){this.h=this.g=null}add(e,t){const n=x.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var x=new A(()=>new N,e=>e.reset());class N{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let R,D=!1,P=new O,L=()=>{const e=Promise.resolve(void 0);R=()=>{e.then(M)}};function M(){for(var e;e=k();){try{e.h.call(e.g)}catch(n){C(n)}var t=x;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}D=!1}function F(){this.u=this.u,this.C=this.C}function V(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}F.prototype.u=!1,F.prototype.dispose=function(){this.u||(this.u=!0,this.N())},F.prototype[Symbol.dispose]=function(){this.dispose()},F.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},V.prototype.h=function(){this.defaultPrevented=!0};var U=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};o.addEventListener("test",e,t),o.removeEventListener("test",e,t)}catch(n){}return e}();function j(e){return/^[\s\xa0]*$/.test(e)}function $(e,t){V.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}b($,V),$.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget,t||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&$.Z.h.call(this)},$.prototype.h=function(){$.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),q=0;function H(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++q,this.da=this.fa=!1}function z(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function W(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function G(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function K(e){const t={};for(const n in e)t[n]=e[n];return t}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<Q.length;t++)n=Q[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function X(e){this.src=e,this.g={},this.h=0}function J(e,t){const n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=s>=0)&&Array.prototype.splice.call(i,s,1),r&&(z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Z(e,t,n,r){for(let i=0;i<e.length;++i){const s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}X.prototype.add=function(e,t,n,r,i){const s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);const o=Z(e,t,r,i);return o>-1?(t=e[o],n||(t.fa=!1)):(t=new H(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ee="closure_lm_"+(1e6*Math.random()|0),te={};function re(e,t,n,r,i){if(r&&r.once)return oe(e,t,n,r,i);if(Array.isArray(t)){for(let s=0;s<t.length;s++)re(e,t[s],n,r,i);return null}return n=de(n),e&&e[B]?e.J(t,n,a(r)?!!r.capture:!!r,i):ie(e,t,n,!1,r,i)}function ie(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");const o=a(i)?!!i.capture:!!i;let c=he(e);if(c||(e[ee]=c=new X(e)),n=c.add(t,n,r,o,s),n.proxy)return n;if(r=se(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)U||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ue(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function se(){function e(n){return t.call(e.src,e.listener,n)}const t=le;return e}function oe(e,t,n,r,i){if(Array.isArray(t)){for(let s=0;s<t.length;s++)oe(e,t[s],n,r,i);return null}return n=de(n),e&&e[B]?e.K(t,n,a(r)?!!r.capture:!!r,i):ie(e,t,n,!0,r,i)}function ae(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ae(e,t[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=de(n),e&&e[B]?(e=e.i,s=String(t).toString(),s in e.g&&(t=e.g[s],n=Z(t,n,r,i),n>-1&&(z(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[s],e.h--)))):e&&(e=he(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Z(t,n,r,i)),(n=e>-1?t[e]:null)&&ce(n))}function ce(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[B])J(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ue(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=he(t))?(J(n,e),0==n.h&&(n.src=null,t[ee]=null)):z(e)}}}function ue(e){return e in te?te[e]:te[e]="on"+e}function le(e,t){if(e.da)e=!0;else{t=new $(t,this);const n=e.listener,r=e.ha||e.src;e.fa&&ce(e),e=n.call(r,t)}return e}function he(e){return e=e[ee],e instanceof X?e:null}var fe="__closure_events_fn_"+(1e9*Math.random()>>>0);function de(e){return"function"===typeof e?e:(e[fe]||(e[fe]=function(t){return e.handleEvent(t)}),e[fe])}function pe(){F.call(this),this.i=new X(this),this.M=this,this.G=null}function ge(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,"string"===typeof t)t=new V(t,e);else if(t instanceof V)t.target=t.target||e;else{var i=t;t=new V(r,e),Y(t,i)}let s,o;if(i=!0,n)for(o=n.length-1;o>=0;o--)s=t.g=n[o],i=me(s,r,!0,t)&&i;if(s=t.g=e,i=me(s,r,!0,t)&&i,i=me(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=me(s,r,!1,t)&&i}function me(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();let i=!0;for(let s=0;s<t.length;++s){const o=t[s];if(o&&!o.da&&o.capture==n){const t=o.listener,n=o.ha||o.src;o.fa&&J(e.i,o),i=!1!==t.call(n,r)&&i}}return i&&!r.defaultPrevented}function ye(e,t){if("function"!==typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return Number(t)>2147483647?-1:o.setTimeout(e,t||0)}function ve(e){e.g=ye(()=>{e.g=null,e.i&&(e.i=!1,ve(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}b(pe,F),pe.prototype[B]=!0,pe.prototype.removeEventListener=function(e,t,n,r){ae(this,e,t,n,r)},pe.prototype.N=function(){if(pe.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)z(n[e]);delete e.g[t],e.h--}}this.G=null},pe.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},pe.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class _e extends F{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ve(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function we(e){F.call(this),this.h=e,this.g={}}b(we,F);var be=[];function Ee(e){W(e.g,function(e,t){this.g.hasOwnProperty(t)&&ce(e)},e),e.g={}}we.prototype.N=function(){we.Z.N.call(this),Ee(this)},we.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Te=o.JSON.stringify,Ie=o.JSON.parse,Se=class{stringify(e){return o.JSON.stringify(e,void 0)}parse(e){return o.JSON.parse(e,void 0)}};function Ae(){}function Ce(){}var ke={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Oe(){V.call(this,"d")}function xe(){V.call(this,"c")}b(Oe,V),b(xe,V);var Ne={},Re=null;function De(){return Re=Re||new pe}function Pe(e){V.call(this,Ne.Ia,e)}function Le(e){const t=De();ge(t,new Pe(t))}function Me(e,t){V.call(this,Ne.STAT_EVENT,e),this.stat=t}function Fe(e){const t=De();ge(t,new Me(t,e))}function Ve(e,t){V.call(this,Ne.Ja,e),this.size=t}function Ue(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){e()},t)}function je(){this.g=!0}function $e(e,t,n,r,i,s){e.info(function(){if(e.g)if(s){var o="",a=s.split("&");for(let e=0;e<a.length;e++){var c=a[e].split("=");if(c.length>1){const e=c[0];c=c[1];const t=e.split("_");o=t.length>=2&&"type"==t[1]?o+(e+"=")+c+"&":o+(e+"=redacted&")}}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}function Be(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}function qe(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ze(e,n)+(r?" "+r:"")})}function He(e,t){e.info(function(){return"TIMEOUT: "+t})}function ze(e,t){if(!e.g)return t;if(!t)return null;try{const s=JSON.parse(t);if(s)for(e=0;e<s.length;e++)if(Array.isArray(s[e])){var n=s[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let e=1;e<r.length;e++)r[e]=""}}}return Te(s)}catch(s){return t}}Ne.Ia="serverreachability",b(Pe,V),Ne.STAT_EVENT="statevent",b(Me,V),Ne.Ja="timingevent",b(Ve,V),je.prototype.ua=function(){this.g=!1},je.prototype.info=function(){};var We,Ge={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ke={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Qe(){}function Ye(e){return encodeURIComponent(String(e))}function Xe(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Je(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new we(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ze}function Ze(){this.i=null,this.g="",this.h=!1}b(Qe,Ae),Qe.prototype.g=function(){return new XMLHttpRequest},We=new Qe;var et={},tt={};function nt(e,t,n){e.M=1,e.A=Ot(It(t)),e.u=n,e.R=!0,rt(e,null)}function rt(e,t){e.F=Date.now(),at(e),e.B=It(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),qt(n.i,"t",r),e.C=0,n=e.j.L,e.h=new Ze,e.g=Ln(e.j,n?t:null,!e.u),e.P>0&&(e.O=new _e(u(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var i="readystatechange";Array.isArray(i)||(i&&(be[0]=i.toString()),i=be);for(let s=0;s<i.length;s++){const e=re(n,i[s],r||t.handleEvent,!1,t.h||t);if(!e)break;t.g[e.key]=e}t=e.J?K(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),Le(),$e(e.i,e.v,e.B,e.l,e.S,e.u)}function it(e){if(!st(e))return e.g.la();const t=dn(e.g);if(""===t)return"";let n="";const r=t.length,i=4==fn(e.g);if(!e.h.i){if("undefined"===typeof TextDecoder)return ht(e),lt(e),"";e.h.i=new o.TextDecoder}for(let s=0;s<r;s++)e.h.h=!0,n+=e.h.i.decode(t[s],{stream:!(i&&s==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}function st(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function ot(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?tt:(n=Number(t.substring(n,r)),isNaN(n)?et:(r+=1,r+n>t.length?tt:(t=t.slice(r,r+n),e.C=r+n,t)))}function at(e){e.T=Date.now()+e.H,ct(e,e.H)}function ct(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=Ue(u(e.aa,e),t)}function ut(e){e.D&&(o.clearTimeout(e.D),e.D=null)}function lt(e){0==e.j.I||e.K||xn(e.j,e)}function ht(e){ut(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,Ee(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function ft(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||yt(n.h,e)))if(!e.L&&yt(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;On(n),vn(n)}An(n),Fe(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Ue(u(n.Va,n),6e3));mt(n.h)<=1&&n.ta&&(n.ta=void 0)}else Rn(n,11)}else if((e.L||n.g==e)&&On(n),!j(t))for(i=n.Ba.g.parse(t),t=0;t<i.length;t++){let u=i[t];const l=u[0];if(!(l<=n.K))if(n.K=l,u=u[1],2==n.I)if("c"==u[0]){n.M=u[1],n.ba=u[2];const t=u[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const i=u[4];null!=i&&(n.za=i,n.j.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&l>0&&(r=1.5*l,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(vt(s,s.h),s.h=null))}if(r.G){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.wa=e,kt(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms")),r=n;var o=e;if(r.na=Pn(r,r.L?r.ba:null,r.W),o.L){_t(r.h,o);var a=o,c=r.O;c&&(a.H=c),a.D&&(ut(a),at(a)),r.g=o}else Sn(r);n.i.length>0&&wn(n)}else"stop"!=u[0]&&"close"!=u[0]||Rn(n,7);else 3==n.I&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Rn(n,7):yn(n):"noop"!=u[0]&&n.l&&n.l.qa(u),n.A=0)}Le(4)}catch(l){}}Je.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==fn(e)?t.j():this.Y(e)},Je.prototype.Y=function(e){try{if(e==this.g)e:{const a=fn(this.g),c=this.g.ya(),u=this.g.ca();if(!(a<3)&&(3!=a||this.g&&(this.h.h||this.g.la()||dn(this.g)))){this.K||4!=a||7==c||Le(8==c||u<=0?3:2),ut(this);var t=this.g.ca();this.X=t;var n=it(this);if(this.o=200==t,Be(this.i,this.v,this.B,this.l,this.S,a,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(r)){var s=r;break t}}s=null}if(!(e=s)){this.o=!1,this.m=3,Fe(12),ht(this),lt(this);break e}qe(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ft(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=ot(this,n),t==tt){4==a&&(this.m=4,Fe(14),e=!1),qe(this.i,this.l,null,"[Incomplete Response]");break}if(t==et){this.m=4,Fe(15),qe(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}qe(this.i,this.l,t,null),ft(this,t)}if(st(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=a||0!=n.length||this.h.h||(this.m=1,Fe(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cn(o),o.P=!0,Fe(11))}}else qe(this.i,this.l,n,"[Invalid Chunked Response]"),ht(this),lt(this)}else qe(this.i,this.l,n,null),ft(this,n);4==a&&ht(this),this.o&&!this.K&&(4==a?xn(this.j,this):(this.o=!1,at(this)))}else pn(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,Fe(12)):(this.m=0,Fe(13)),ht(this),lt(this)}}}catch(a){}},Je.prototype.cancel=function(){this.K=!0,ht(this)},Je.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(He(this.i,this.B),2!=this.M&&(Le(),Fe(17)),ht(this),this.m=2,lt(this)):ct(this,this.T-e)};var dt=class{constructor(e,t){this.g=e,this.map=t}};function pt(e){this.l=e||10,o.PerformanceNavigationTiming?(e=o.performance.getEntriesByType("navigation"),e=e.length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function gt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function mt(e){return e.h?1:e.g?e.g.size:0}function yt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function vt(e,t){e.g?e.g.add(t):e.h=t}function _t(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function wt(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return I(e.i)}pt.prototype.cancel=function(){if(this.i=wt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var bt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Et(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const r=e[n].indexOf("=");let i,s=null;r>=0?(i=e[n].substring(0,r),s=e[n].substring(r+1)):i=e[n],t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Tt(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof Tt?(this.l=e.l,St(this,e.j),this.o=e.o,this.g=e.g,At(this,e.u),this.h=e.h,Ct(this,Ht(e.i)),this.m=e.m):e&&(t=String(e).match(bt))?(this.l=!1,St(this,t[1]||"",!0),this.o=xt(t[2]||""),this.g=xt(t[3]||"",!0),At(this,t[4]),this.h=xt(t[5]||"",!0),Ct(this,t[6]||"",!0),this.m=xt(t[7]||"")):(this.l=!1,this.i=new Vt(null,this.l))}function It(e){return new Tt(e)}function St(e,t,n){e.j=n?xt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function At(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function Ct(e,t,n){t instanceof Vt?(e.i=t,Wt(e.i,e.l)):(n||(t=Nt(t,Mt)),e.i=new Vt(t,e.l))}function kt(e,t,n){e.i.set(t,n)}function Ot(e){return kt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function xt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Nt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Rt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Rt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Tt.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(Nt(t,Dt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(Nt(t,Dt,!0),"@"),e.push(Ye(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.u,null!=n&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Nt(n,"/"==n.charAt(0)?Lt:Pt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",Nt(n,Ft)),e.join("")},Tt.prototype.resolve=function(e){const t=It(this);let n=!!e.j;n?St(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var r=e.h;if(n)At(t,e.u);else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var i=t.h.lastIndexOf("/");-1!=i&&(r=t.h.slice(0,i+1)+r)}if(i=r,".."==i||"."==i)r="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");const e=[];for(let t=0;t<i.length;){const n=i[t++];"."==n?r&&t==i.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==i.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=i}return n?t.h=r:n=""!==e.i.toString(),n?Ct(t,Ht(e.i)):n=!!e.m,n&&(t.m=e.m),t};var Dt=/[#\/\?@]/g,Pt=/[#\?:]/g,Lt=/[#\?]/g,Mt=/[#\?@]/g,Ft=/#/g;function Vt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ut(e){e.g||(e.g=new Map,e.h=0,e.i&&Et(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function jt(e,t){Ut(e),t=zt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function $t(e,t){return Ut(e),t=zt(e,t),e.g.has(t)}function Bt(e,t){Ut(e);let n=[];if("string"===typeof t)$t(e,t)&&(n=n.concat(e.g.get(zt(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function qt(e,t,n){jt(e,t),n.length>0&&(e.i=null,e.g.set(zt(e,t),I(n)),e.h+=n.length)}function Ht(e){const t=new Vt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function zt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Wt(e,t){t&&!e.j&&(Ut(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(jt(this,t),qt(this,n,e))},e)),e.j=t}function Gt(e,t){const n=new je;if(o.Image){const r=new Image;r.onload=v(Qt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=v(Qt,n,"TestLoadImage: error",!1,t,r),r.onabort=v(Qt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=v(Qt,n,"TestLoadImage: timeout",!1,t,r),o.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Kt(e,t){const n=new je,r=new AbortController,i=setTimeout(()=>{r.abort(),Qt(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(i),e.ok?Qt(n,"TestPingServer: ok",!0,t):Qt(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),Qt(n,"TestPingServer: error",!1,t)})}function Qt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Yt(){this.g=new Se}function Xt(e){this.i=e.Sb||null,this.h=e.ab||!1}function Jt(e,t){pe.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Zt(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function en(e){e.readyState=4,e.l=null,e.j=null,e.B=null,tn(e)}function tn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function nn(e){let t="";return W(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function rn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=nn(n),"string"===typeof e?null!=n&&Ye(n):kt(e,t,n))}function sn(e){pe.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}e=Vt.prototype,e.add=function(e,t){Ut(this),this.i=null,e=zt(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){Ut(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.set=function(e,t){return Ut(this),this.i=null,e=zt(this,e),$t(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=Bt(this,e),e.length>0?String(e[0]):t):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];const i=Ye(n);n=Bt(this,n);for(let t=0;t<n.length;t++){let r=i;""!==n[t]&&(r+="="+Ye(n[t])),e.push(r)}}return this.i=e.join("&")},b(Xt,Ae),Xt.prototype.g=function(){return new Jt(this.i,this.h)},b(Jt,pe),e=Jt.prototype,e.open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,tn(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||o).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,en(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tn(this)),this.g&&(this.readyState=3,tn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if("undefined"!==typeof o.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zt(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?en(this):tn(this),3==this.readyState&&Zt(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,en(this))},e.Na=function(e){this.g&&(this.response=e,en(this))},e.ga=function(){this.g&&en(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Jt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),b(sn,pe);var on=/^https?$/i,an=["POST","PUT"];function cn(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,un(e),hn(e)}function un(e){e.A||(e.A=!0,ge(e,"complete"),ge(e,"error"))}function ln(e){if(e.h&&"undefined"!=typeof s)if(e.v&&4==fn(e))setTimeout(e.Ca.bind(e),0);else if(ge(e,"readystatechange"),4==fn(e)){e.h=!1;try{const s=e.ca();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===s){let t=String(e.D).match(bt)[1]||null;!t&&o.self&&o.self.location&&(t=o.self.location.protocol.slice(0,-1)),r=!on.test(t?t.toLowerCase():"")}n=r}if(n)ge(e,"complete"),ge(e,"success");else{e.o=6;try{var i=fn(e)>2?e.g.statusText:""}catch(a){i=""}e.l=i+" ["+e.ca()+"]",un(e)}}finally{hn(e)}}}function hn(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const r=e.g;e.g=null,t||ge(e,"ready");try{r.onreadystatechange=null}catch(n){}}}function fn(e){return e.g?e.g.readyState:0}function dn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(E){return null}}function pn(e){const t={};e=(e.g&&fn(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(j(e[r]))continue;var n=Xe(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}G(t,function(e){return e.join(", ")})}function gn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function mn(e){this.za=0,this.i=[],this.j=new je,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gn("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gn("baseRetryDelayMs",5e3,e),this.Za=gn("retryDelaySeedMs",1e4,e),this.Ta=gn("forwardChannelMaxRetries",2,e),this.va=gn("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new pt(e&&e.concurrentRequestLimit),this.Ba=new Yt,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function yn(e){if(_n(e),3==e.I){var t=e.V++,n=It(e.J);if(kt(n,"SID",e.M),kt(n,"RID",t),kt(n,"TYPE","terminate"),Tn(e,n),t=new Je(e,e.j,t),t.M=2,t.A=Ot(It(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(t.A.toString(),"")}catch(r){}!n&&o.Image&&((new Image).src=t.A,n=!0),n||(t.g=Ln(t.j,null),t.g.ea(t.A)),t.F=Date.now(),at(t)}Dn(e)}function vn(e){e.g&&(Cn(e),e.g.cancel(),e.g=null)}function _n(e){vn(e),e.v&&(o.clearTimeout(e.v),e.v=null),On(e),e.h.cancel(),e.m&&("number"===typeof e.m&&o.clearTimeout(e.m),e.m=null)}function wn(e){if(!gt(e.h)&&!e.m){e.m=!0;var t=e.Ea;R||L(),D||(R(),D=!0),P.add(t,e),e.D=0}}function bn(e,t){return!(mt(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.G.concat(e.i),!0):!(1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta))&&(e.m=Ue(u(e.Ea,e,t),Nn(e,e.D)),e.D++,!0))}function En(e,t){var n;n=t?t.l:e.V++;const r=It(e.J);kt(r,"SID",e.M),kt(r,"RID",n),kt(r,"AID",e.K),Tn(e,r),e.u&&e.o&&rn(r,e.u,e.o),n=new Je(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=In(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),vt(e.h,n),nt(n,r,t)}function Tn(e,t){e.H&&W(e.H,function(e,n){kt(t,n,e)}),e.l&&W({},function(e,n){kt(t,n,e)})}function In(e,t,n){n=Math.min(e.i.length,n);const r=e.l?u(e.l.Ka,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let c=!0;for(let u=0;u<n;u++){var s=i[u].g;const n=i[u].map;if(s-=t,s<0)t=Math.max(0,i[u].g-100),c=!1;else try{s="req"+s+"_"||0;try{var o=n instanceof Map?n:Object.entries(n);for(const[t,n]of o){let r=n;a(n)&&(r=Te(n)),e.push(s+t+"="+encodeURIComponent(r))}}catch(ne){throw e.push(s+"type="+encodeURIComponent("_badmap")),ne}}catch(ne){r&&r(n)}}if(c){o=e.join("&");break e}}o=void 0}return e=e.i.splice(0,n),t.G=e,o}function Sn(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;R||L(),D||(R(),D=!0),P.add(t,e),e.A=0}}function An(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=Ue(u(e.Da,e),Nn(e,e.A)),e.A++,!0)}function Cn(e){null!=e.B&&(o.clearTimeout(e.B),e.B=null)}function kn(e){e.g=new Je(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=It(e.na);kt(t,"RID","rpc"),kt(t,"SID",e.M),kt(t,"AID",e.K),kt(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&kt(t,"TO",e.ia),kt(t,"TYPE","xmlhttp"),Tn(e,t),e.u&&e.o&&rn(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=Ot(It(t)),n.u=null,n.R=!0,rt(n,e)}function On(e){null!=e.C&&(o.clearTimeout(e.C),e.C=null)}function xn(e,t){var n=null;if(e.g==t){On(e),Cn(e),e.g=null;var r=2}else{if(!yt(e.h,t))return;n=t.G,_t(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F;var i=e.D;r=De(),ge(r,new Ve(r,n)),wn(e)}else Sn(e);else if(i=t.m,3==i||0==i&&t.X>0||!(1==r&&bn(e,t)||2==r&&An(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Rn(e,5);break;case 4:Rn(e,10);break;case 3:Rn(e,6);break;default:Rn(e,2)}}function Nn(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function Rn(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.bb,e),r=e.Ua;const t=!r;r=new Tt(r||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||St(r,"https"),Ot(r),t?Gt(r.toString(),n):Kt(r.toString(),n)}else Fe(2);e.I=0,e.l&&e.l.pa(t),Dn(e),_n(e)}function Dn(e){if(e.I=0,e.ja=[],e.l){const t=wt(e.h);0==t.length&&0==e.i.length||(S(e.ja,t),S(e.ja,e.i),e.h.i.length=0,I(e.i),e.i.length=0),e.l.oa()}}function Pn(e,t,n){var r=n instanceof Tt?It(n):new Tt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),At(r,r.u);else{var i=o.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;const e=new Tt(null);r&&St(e,r),t&&(e.g=t),i&&At(e,i),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&kt(r,n,t),kt(r,"VER",e.ka),Tn(e,r),r}function Ln(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Aa&&!e.ma?new sn(new Xt({ab:n})):new sn(e.ma),t.Fa(e.L),t}function Mn(){}function Fn(){}function Vn(e,t){pe.call(this),this.g=new mn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!j(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!j(t)&&(this.g.G=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new $n(this)}function Un(e){Oe.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function jn(){xe.call(this),this.status=1}function $n(e){this.g=e}e=sn.prototype,e.Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():We.g(),this.g.onreadystatechange=T(u(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(s){return void cn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=o.FormData&&e instanceof o.FormData,!(Array.prototype.indexOf.call(an,t,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(s){cn(this,s)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,ge(this,"complete"),ge(this,"abort"),hn(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hn(this,!0)),sn.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?ln(this):this.Xa())},e.Xa=function(){ln(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return fn(this)>2?this.g.status:-1}catch(e){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ie(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"===typeof this.l?this.l:String(this.l)},e=mn.prototype,e.ka=8,e.I=1,e.connect=function(e,t,n,r){Fe(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=Pn(this,null,this.W),wn(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Je(this,this.j,e);let s=this.o;if(this.U&&(s?(s=K(s),Y(s,this.U)):s=this.U),null!==this.u||this.R||(i.J=s,s=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,t>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=In(this,i,t),n=It(this.J),kt(n,"RID",e),kt(n,"CVER",22),this.G&&kt(n,"X-HTTP-Session-Id",this.G),Tn(this,n),s&&(this.R?t="headers="+Ye(nn(s))+"&"+t:this.u&&rn(n,this.u,s)),vt(this.h,i),this.Ra&&kt(n,"TYPE","init"),this.S?(kt(n,"$req",t),kt(n,"SID","null"),i.U=!0,nt(i,n,null)):nt(i,n,t),this.I=2}}else 3==this.I&&(e?En(this,e):0==this.i.length||gt(this.h)||En(this))},e.Da=function(){if(this.v=null,kn(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=Ue(u(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Fe(10),vn(this),kn(this))},e.Va=function(){null!=this.C&&(this.C=null,vn(this),An(this),Fe(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},e=Mn.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},Fn.prototype.g=function(e,t){return new Vn(e,t)},b(Vn,pe),Vn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vn.prototype.close=function(){yn(this.g)},Vn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Te(e),e=n);t.i.push(new dt(t.Ya++,e)),3==t.I&&wn(t)},Vn.prototype.N=function(){this.g.l=null,delete this.j,yn(this.g),delete this.g,Vn.Z.N.call(this)},b(Un,Oe),b(jn,xe),b($n,Mn),$n.prototype.ra=function(){ge(this.g,"a")},$n.prototype.qa=function(e){ge(this.g,new Un(e))},$n.prototype.pa=function(e){ge(this.g,new jn)},$n.prototype.oa=function(){ge(this.g,"b")},Fn.prototype.createWebChannel=Fn.prototype.g,Vn.prototype.send=Vn.prototype.o,Vn.prototype.open=Vn.prototype.m,Vn.prototype.close=Vn.prototype.close,y=w.createWebChannelTransport=function(){return new Fn},m=w.getStatEventTarget=function(){return De()},g=w.Event=Ne,p=w.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ge.NO_ERROR=0,Ge.TIMEOUT=8,Ge.HTTP_ERROR=6,d=w.ErrorCode=Ge,Ke.COMPLETE="complete",f=w.EventType=Ke,Ce.EventType=ke,ke.OPEN="a",ke.CLOSE="b",ke.ERROR="c",ke.MESSAGE="d",pe.prototype.listen=pe.prototype.J,h=w.WebChannel=Ce,w.FetchXmlHttpFactory=Xt,sn.prototype.listenOnce=sn.prototype.K,sn.prototype.getLastError=sn.prototype.Ha,sn.prototype.getLastErrorCode=sn.prototype.ya,sn.prototype.getStatus=sn.prototype.ca,sn.prototype.getResponseJson=sn.prototype.La,sn.prototype.getResponseText=sn.prototype.la,sn.prototype.send=sn.prototype.ea,sn.prototype.setWithCredentials=sn.prototype.Fa,l=w.XhrIo=sn}).apply("undefined"!==typeof _?_:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}b.UNAUTHENTICATED=new b(null),b.GOOGLE_CREDENTIALS=new b("google-credentials-uid"),b.FIRST_PARTY=new b("first-party-uid"),b.MOCK_USER=new b("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let E="12.11.0";function T(e){E=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=new v.Vy("@firebase/firestore");function S(){return I.logLevel}function A(e,...t){if(I.logLevel<=v.$b.DEBUG){const n=t.map(O);I.debug(`Firestore (${E}): ${e}`,...n)}}function C(e,...t){if(I.logLevel<=v.$b.ERROR){const n=t.map(O);I.error(`Firestore (${E}): ${e}`,...n)}}function k(e,...t){if(I.logLevel<=v.$b.WARN){const n=t.map(O);I.warn(`Firestore (${E}): ${e}`,...n)}}function O(e){if("string"==typeof e)return e;try{return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,N(e,r,n)}function N(e,t,n){let r=`FIRESTORE (${E}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw C(r),new Error(r)}function R(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||N(t,i,r)}function D(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends a.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(b.UNAUTHENTICATED))}shutdown(){}}class U{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class j{constructor(e){this.t=e,this.currentUser=b.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){R(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new M;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new M,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new M)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(R("string"==typeof t.accessToken,31837,{l:t}),new F(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return R(null===e||"string"==typeof e,2055,{h:e}),new b(e)}}class ${constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=b.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class B{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new $(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(b.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class q{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,s.xZ)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){R(void 0===this.o,3512);const n=e=>{null!=e.error&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,A("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new q(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(R("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new q(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=z(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function G(e,t){return e<t?-1:e>t?1:0}function K(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),i=t.charAt(r);if(n!==i)return X(n)===X(i)?G(n,i):X(n)?1:-1}return G(e.length,t.length)}const Q=55296,Y=57343;function X(e){const t=e.charCodeAt(0);return t>=Q&&t<=Y}function J(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="__name__";class ee{constructor(e,t,n){void 0===t?t=0:t>e.length&&x(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&x(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ee.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ee?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=ee.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return G(e.length,t.length)}static compareSegments(e,t){const n=ee.isNumericId(e),r=ee.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?ee.extractNumericId(e).compare(ee.extractNumericId(t)):K(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return r.fromString(e.substring(4,e.length-2))}}class te extends ee{construct(e,t,n){return new te(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new te(t)}static emptyPath(){return new te([])}}const ne=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class re extends ee{construct(e,t,n){return new re(e,t,n)}static isValidIdentifier(e){return ne.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Z}static keyField(){return new re([Z])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new re(t)}static emptyPath(){return new re([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(te.fromString(e))}static fromName(e){return new ie(te.fromString(e).popFirst(5))}static empty(){return new ie(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===te.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new te(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t,n){if(!n)throw new L(P.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function oe(e,t,n,r){if(!0===t&&!0===r)throw new L(P.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ae(e){if(!ie.isDocumentKey(e))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ce(e){if(ie.isDocumentKey(e))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ue(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function le(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":x(12329,{type:typeof e})}function he(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=le(e);throw new L(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(e,t){const n={typeString:e};return t&&(n.value=t),n}function de(e,t){if(!ue(e))throw new L(P.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new L(P.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=-62135596800,ge=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*ge);return new me(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<pe)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ge}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(de(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pe;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:fe("string",me._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new me(0,0))}static max(){return new ye(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=-1;class _e{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}_e.UNKNOWN_ID=-1;function we(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ye.fromTimestamp(1e9===r?new me(n+1,0):new me(n,r));return new Ee(i,ie.empty(),t)}function be(e){return new Ee(e.readTime,e.key,ve)}class Ee{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ee(ye.min(),ie.empty(),ve)}static max(){return new Ee(ye.max(),ie.empty(),ve)}}function Te(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ie.comparator(e.documentKey,t.documentKey),0!==n?n:G(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const Ie="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Se{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e){if(e.code!==P.FAILED_PRECONDITION||e.message!==Ie)throw e;A("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ce((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Ce?t:Ce.resolve(t)}catch(e){return Ce.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Ce.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Ce.reject(t)}static resolve(e){return new Ce((t,n)=>{t(e)})}static reject(e){return new Ce((t,n)=>{n(e)})}static waitFor(e){return new Ce((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=Ce.resolve(!1);for(const n of e)t=t.next(e=>e?Ce.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Ce((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next(e=>{s[c]=e,++o,o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new Ce((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Oe(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}xe.ce=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=-1;function Re(e){return null==e}function De(e){return 0===e&&1/e==-1/0}function Pe(e){return"number"==typeof e&&Number.isInteger(e)&&!De(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Le="";function Me(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Ve(t)),t=Fe(e.get(n),t);return Ve(t)}function Fe(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case Le:n+="";break;default:n+=t}}return n}function Ve(e){return e+Le+""}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ue="remoteDocuments",je="owner",$e="mutationQueues",Be="mutations";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="documentMutations",He="remoteDocumentsV14",ze="remoteDocumentGlobal",We="targets",Ge="targetDocuments",Ke="targetGlobal",Qe="collectionParents",Ye="clientMetadata",Xe="bundles",Je="namedQueries",Ze="indexConfiguration",et="indexState",tt="indexEntries",nt="documentOverlays",rt="globals",it=[$e,Be,qe,Ue,We,je,Ke,Ge,Ye,ze,Qe,Xe,Je],st=[$e,Be,qe,He,We,je,Ke,Ge,Ye,ze,Qe,Xe,Je,nt],ot=st,at=[...ot,Ze,et,tt];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ut(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function lt(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){this.comparator=e,this.root=t||dt.EMPTY}insert(e,t){return new ht(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ft(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ft(this.root,e,this.comparator,!1)}getReverseIterator(){return new ft(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ft(this.root,e,this.comparator,!0)}}class ft{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:dt.RED,this.left=null!=r?r:dt.EMPTY,this.right=null!=i?i:dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new dt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return dt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1,dt.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gt(this.data.getIterator())}getIteratorFrom(e){return new gt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof pt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class gt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(e){this.fields=e,e.sort(re.comparator)}static empty(){return new mt([])}unionWith(e){let t=new pt(re.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new mt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return J(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new yt("Invalid base64 string: "+e):e}}(e);return new vt(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const _t=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wt(e){if(R(!!e,39018),"string"==typeof e){let t=0;const n=_t.exec(e);if(R(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:bt(e.seconds),nanos:bt(e.nanos)}}function bt(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Et(e){return"string"==typeof e?vt.fromBase64String(e):vt.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="server_timestamp",It="__type__",St="__previous_value__",At="__local_write_time__";function Ct(e){const t=(e?.mapValue?.fields||{})[It]?.stringValue;return t===Tt}function kt(e){const t=e.mapValue.fields[St];return Ct(t)?kt(t):t}function Ot(e){const t=wt(e.mapValue.fields[At].timestampValue);return new me(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,n,r,i,s,o,a,c,u,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=l}}const Nt="(default)";class Rt{constructor(e,t){this.projectId=e,this.database=t||Nt}static empty(){return new Rt("","")}get isDefaultDatabase(){return this.database===Nt}isEqual(e){return e instanceof Rt&&e.projectId===this.projectId&&e.database===this.database}}function Dt(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rt(e.options.projectId,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="__type__",Lt="__max__",Mt={mapValue:{fields:{__type__:{stringValue:Lt}}}},Ft="__vector__",Vt="value";function Ut(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ct(e)?4:nn(e)?9007199254740991:en(e)?10:11:x(28295,{value:e})}function jt(e,t){if(e===t)return!0;const n=Ut(e);if(n!==Ut(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ot(e).isEqual(Ot(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=wt(e.timestampValue),r=wt(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Et(e.bytesValue).isEqual(Et(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return bt(e.geoPointValue.latitude)===bt(t.geoPointValue.latitude)&&bt(e.geoPointValue.longitude)===bt(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return bt(e.integerValue)===bt(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=bt(e.doubleValue),r=bt(t.doubleValue);return n===r?De(n)===De(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return J(e.arrayValue.values||[],t.arrayValue.values||[],jt);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ct(n)!==ct(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!jt(n[i],r[i])))return!1;return!0}(e,t);default:return x(52216,{left:e})}}function $t(e,t){return void 0!==(e.values||[]).find(e=>jt(e,t))}function Bt(e,t){if(e===t)return 0;const n=Ut(e),r=Ut(t);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=bt(e.integerValue||e.doubleValue),r=bt(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return qt(e.timestampValue,t.timestampValue);case 4:return qt(Ot(e),Ot(t));case 5:return K(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Et(e),r=Et(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=G(n[i],r[i]);if(0!==e)return e}return G(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=G(bt(e.latitude),bt(t.latitude));return 0!==n?n:G(bt(e.longitude),bt(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Ht(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=t.fields||{},i=n[Vt]?.arrayValue,s=r[Vt]?.arrayValue,o=G(i?.values?.length||0,s?.values?.length||0);return 0!==o?o:Ht(i,s)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Mt.mapValue&&t===Mt.mapValue)return 0;if(e===Mt.mapValue)return 1;if(t===Mt.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=K(r[o],s[o]);if(0!==e)return e;const t=Bt(n[r[o]],i[s[o]]);if(0!==t)return t}return G(r.length,s.length)}(e.mapValue,t.mapValue);default:throw x(23264,{he:n})}}function qt(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return G(e,t);const n=wt(e),r=wt(t),i=G(n.seconds,r.seconds);return 0!==i?i:G(n.nanos,r.nanos)}function Ht(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Bt(n[i],r[i]);if(e)return e}return G(n.length,r.length)}function zt(e){return Wt(e)}function Wt(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=wt(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Et(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return ie.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Wt(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Wt(e.fields[i])}`;return n+"}"}(e.mapValue):x(61005,{value:e})}function Gt(e){switch(Ut(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=kt(e);return t?16+Gt(t):16;case 5:return 2*e.stringValue.length;case 6:return Et(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((e,t)=>e+Gt(t),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return ut(e.fields,(e,n)=>{t+=e.length+Gt(n)}),t}(e.mapValue);default:throw x(13486,{value:e})}}function Kt(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Qt(e){return!!e&&"integerValue"in e}function Yt(e){return!!e&&"arrayValue"in e}function Xt(e){return!!e&&"nullValue"in e}function Jt(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Zt(e){return!!e&&"mapValue"in e}function en(e){const t=(e?.mapValue?.fields||{})[Pt]?.stringValue;return t===Ft}function tn(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return ut(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=tn(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tn(e.arrayValue.values[n]);return t}return{...e}}function nn(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Lt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Zt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tn(t)}setAll(e){let t=re.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=tn(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Zt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Zt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){ut(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new rn(tn(this.value))}}function sn(e){const t=[];return ut(e.fields,(e,n)=>{const r=new re([e]);if(Zt(n)){const e=sn(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new mt(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class on{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new on(e,0,ye.min(),ye.min(),ye.min(),rn.empty(),0)}static newFoundDocument(e,t,n,r){return new on(e,1,t,ye.min(),n,r,0)}static newNoDocument(e,t){return new on(e,2,t,ye.min(),ye.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new on(e,3,t,ye.min(),ye.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof on&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){this.position=e,this.inclusive=t}}function cn(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ie.comparator(ie.fromName(o.referenceValue),n.key):Bt(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function un(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!jt(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t="asc"){this.field=e,this.dir=t}}function hn(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{}class dn extends fn{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new bn(e,t,n):"array-contains"===t?new Sn(e,n):"in"===t?new An(e,n):"not-in"===t?new Cn(e,n):"array-contains-any"===t?new kn(e,n):new dn(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new En(e,n):new Tn(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(Bt(t,this.value)):null!==t&&Ut(this.value)===Ut(t)&&this.matchesComparison(Bt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends fn{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new pn(e,t)}matches(e){return gn(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gn(e){return"and"===e.op}function mn(e){return yn(e)&&gn(e)}function yn(e){for(const t of e.filters)if(t instanceof pn)return!1;return!0}function vn(e){if(e instanceof dn)return e.field.canonicalString()+e.op.toString()+zt(e.value);if(mn(e))return e.filters.map(e=>vn(e)).join(",");{const t=e.filters.map(e=>vn(e)).join(",");return`${e.op}(${t})`}}function _n(e,t){return e instanceof dn?function(e,t){return t instanceof dn&&e.op===t.op&&e.field.isEqual(t.field)&&jt(e.value,t.value)}(e,t):e instanceof pn?function(e,t){return t instanceof pn&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&_n(n,t.filters[r]),!0)}(e,t):void x(19439)}function wn(e){return e instanceof dn?function(e){return`${e.field.canonicalString()} ${e.op} ${zt(e.value)}`}(e):e instanceof pn?function(e){return e.op.toString()+" {"+e.getFilters().map(wn).join(" ,")+"}"}(e):"Filter"}class bn extends dn{constructor(e,t,n){super(e,t,n),this.key=ie.fromName(n.referenceValue)}matches(e){const t=ie.comparator(e.key,this.key);return this.matchesComparison(t)}}class En extends dn{constructor(e,t){super(e,"in",t),this.keys=In("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Tn extends dn{constructor(e,t){super(e,"not-in",t),this.keys=In("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function In(e,t){return(t.arrayValue?.values||[]).map(e=>ie.fromName(e.referenceValue))}class Sn extends dn{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yt(t)&&$t(t.arrayValue,this.value)}}class An extends dn{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&$t(this.value.arrayValue,t)}}class Cn extends dn{constructor(e,t){super(e,"not-in",t)}matches(e){if($t(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!$t(this.value.arrayValue,t)}}class kn extends dn{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yt(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>$t(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.Te=null}}function xn(e,t=null,n=[],r=[],i=null,s=null,o=null){return new On(e,t,n,r,i,s,o)}function Nn(e){const t=D(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>vn(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),Re(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>zt(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>zt(e)).join(",")),t.Te=e}return t.Te}function Rn(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!hn(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!_n(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!un(e.startAt,t.startAt)&&un(e.endAt,t.endAt)}function Dn(e){return ie.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Ln(e,t,n,r,i,s,o,a){return new Pn(e,t,n,r,i,s,o,a)}function Mn(e){return new Pn(e)}function Fn(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Vn(e){return ie.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Un(e){return null!==e.collectionGroup}function jn(e){const t=D(e);if(null===t.Ee){t.Ee=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new pt(re.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t);r.forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ee.push(new ln(r,n))}),e.has(re.keyField().canonicalString())||t.Ee.push(new ln(re.keyField(),n))}return t.Ee}function $n(e){const t=D(e);return t.Ie||(t.Ie=Bn(t,jn(e))),t.Ie}function Bn(e,t){if("F"===e.limitType)return xn(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new ln(e.field,t)});const n=e.endAt?new an(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new an(e.startAt.position,e.startAt.inclusive):null;return xn(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function qn(e,t){const n=e.filters.concat([t]);return new Pn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Hn(e,t){const n=e.explicitOrderBy.concat([t]);return new Pn(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}function zn(e,t,n){return new Pn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Wn(e,t){return Rn($n(e),$n(t))&&e.limitType===t.limitType}function Gn(e){return`${Nn($n(e))}|lt:${e.limitType}`}function Kn(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>wn(e)).join(", ")}]`),Re(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>zt(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>zt(e)).join(",")),`Target(${t})`}($n(e))}; limitType=${e.limitType})`}function Qn(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ie.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of jn(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=cn(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,jn(e),t))&&!(e.endAt&&!function(e,t,n){const r=cn(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,jn(e),t))}(e,t)}function Yn(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Xn(e){return(t,n)=>{let r=!1;for(const i of jn(e)){const e=Jn(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Jn(e,t,n){const r=e.field.isKeyField()?ie.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Bt(r,i):x(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:e.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ut(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return lt(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new ht(ie.comparator);function tr(){return er}const nr=new ht(ie.comparator);function rr(...e){let t=nr;for(const n of e)t=t.insert(n.key,n);return t}function ir(e){let t=nr;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function sr(){return ar()}function or(){return ar()}function ar(){return new Zn(e=>e.toString(),(e,t)=>e.isEqual(t))}const cr=new ht(ie.comparator),ur=new pt(ie.comparator);function lr(...e){let t=ur;for(const n of e)t=t.add(n);return t}const hr=new pt(G);function fr(){return hr}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:De(t)?"-0":t}}function pr(e){return{integerValue:""+e}}function gr(e,t){return Pe(t)?pr(t):dr(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this._=void 0}}function yr(e,t,n){return e instanceof wr?function(e,t){const n={fields:{[It]:{stringValue:Tt},[At]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Ct(t)&&(t=kt(t)),t&&(n.fields[St]=t),{mapValue:n}}(n,t):e instanceof br?Er(e,t):e instanceof Tr?Ir(e,t):function(e,t){const n=_r(e,t),r=Ar(n)+Ar(e.Ae);return Qt(n)&&Qt(e.Ae)?pr(r):dr(e.serializer,r)}(e,t)}function vr(e,t,n){return e instanceof br?Er(e,t):e instanceof Tr?Ir(e,t):n}function _r(e,t){return e instanceof Sr?function(e){return Qt(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class wr extends mr{}class br extends mr{constructor(e){super(),this.elements=e}}function Er(e,t){const n=Cr(t);for(const r of e.elements)n.some(e=>jt(e,r))||n.push(r);return{arrayValue:{values:n}}}class Tr extends mr{constructor(e){super(),this.elements=e}}function Ir(e,t){let n=Cr(t);for(const r of e.elements)n=n.filter(e=>!jt(e,r));return{arrayValue:{values:n}}}class Sr extends mr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ar(e){return bt(e.integerValue||e.doubleValue)}function Cr(e){return Yt(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.field=e,this.transform=t}}function Or(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof br&&t instanceof br||e instanceof Tr&&t instanceof Tr?J(e.elements,t.elements,jt):e instanceof Sr&&t instanceof Sr?jt(e.Ae,t.Ae):e instanceof wr&&t instanceof wr}(e.transform,t.transform)}class xr{constructor(e,t){this.version=e,this.transformResults=t}}class Nr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nr}static exists(e){return new Nr(void 0,e)}static updateTime(e){return new Nr(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rr(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Dr{}function Pr(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Hr(e.key,Nr.none()):new Ur(e.key,e.data,Nr.none());{const n=e.data,r=rn.empty();let i=new pt(re.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new jr(e.key,r,new mt(i.toArray()),Nr.none())}}function Lr(e,t,n){e instanceof Ur?function(e,t,n){const r=e.value.clone(),i=Br(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof jr?function(e,t,n){if(!Rr(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Br(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll($r(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Mr(e,t,n,r){return e instanceof Ur?function(e,t,n,r){if(!Rr(e.precondition,t))return n;const i=e.value.clone(),s=qr(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof jr?function(e,t,n,r){if(!Rr(e.precondition,t))return n;const i=qr(e.fieldTransforms,r,t),s=t.data;return s.setAll($r(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return Rr(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Fr(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=_r(r.transform,e||null);null!=i&&(null===n&&(n=rn.empty()),n.set(r.field,i))}return n||null}function Vr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&J(e,t,(e,t)=>Or(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ur extends Dr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class jr extends Dr{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $r(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Br(e,t,n){const r=new Map;R(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,vr(o,a,n[i]))}return r}function qr(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,yr(e,s,t))}return r}class Hr extends Dr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zr extends Dr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Lr(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Mr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Mr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=or();return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Pr(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ye.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),lr())}isEqual(e){return this.batchId===e.batchId&&J(this.mutations,e.mutations,(e,t)=>Vr(e,t))&&J(this.baseMutations,e.baseMutations,(e,t)=>Vr(e,t))}}class Gr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){R(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=function(){return cr}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Gr(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qr{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yr,Xr;function Jr(e){switch(e){case P.OK:return x(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return x(15467,{code:e})}}function Zr(e){if(void 0===e)return C("GRPC error has no .code"),P.UNKNOWN;switch(e){case Yr.OK:return P.OK;case Yr.CANCELLED:return P.CANCELLED;case Yr.UNKNOWN:return P.UNKNOWN;case Yr.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Yr.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Yr.INTERNAL:return P.INTERNAL;case Yr.UNAVAILABLE:return P.UNAVAILABLE;case Yr.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Yr.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Yr.NOT_FOUND:return P.NOT_FOUND;case Yr.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Yr.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Yr.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Yr.ABORTED:return P.ABORTED;case Yr.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Yr.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Yr.DATA_LOSS:return P.DATA_LOSS;default:return x(39323,{code:e})}}(Xr=Yr||(Yr={}))[Xr.OK=0]="OK",Xr[Xr.CANCELLED=1]="CANCELLED",Xr[Xr.UNKNOWN=2]="UNKNOWN",Xr[Xr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xr[Xr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xr[Xr.NOT_FOUND=5]="NOT_FOUND",Xr[Xr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xr[Xr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xr[Xr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xr[Xr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xr[Xr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xr[Xr.ABORTED=10]="ABORTED",Xr[Xr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xr[Xr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xr[Xr.INTERNAL=13]="INTERNAL",Xr[Xr.UNAVAILABLE=14]="UNAVAILABLE",Xr[Xr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ei=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ti(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new r([4294967295,4294967295],0);function ri(e){const t=ti().encode(e),n=new i;return n.update(t),new Uint8Array(n.digest())}function ii(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class si{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new oi(`Invalid padding: ${t}`);if(n<0)throw new oi(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new oi(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new oi(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=r.fromNumber(this.ge)}ye(e,t,n){let i=e.add(t.multiply(r.fromNumber(n)));return 1===i.compare(ni)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;const t=ri(e),[n,r]=ii(t);for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i);if(!this.we(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new si(i,r,t);return n.forEach(e=>s.insert(e)),s}insert(e){if(0===this.ge)return;const t=ri(e),[n,r]=ii(t);for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i);this.Se(e)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ci.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ai(ye.min(),r,new ht(G),tr(),lr())}}class ci{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ci(n,t,lr(),lr(),lr())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class li{constructor(e,t){this.targetId=e,this.Ce=t}}class hi{constructor(e,t,n=vt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class fi{constructor(){this.ve=0,this.Fe=gi(),this.Me=vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=lr(),t=lr(),n=lr();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:x(38017,{changeType:i})}}),new ci(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=gi()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,R(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class di{constructor(e){this.Ge=e,this.ze=new Map,this.je=tr(),this.Je=pi(),this.He=pi(),this.Ze=new ht(G)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:x(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.rt(n)&&t(n)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Dn(i))if(0===n){const e=new ie(i.path);this.et(t,e,on.newNoDocument(e,ye.min()))}else R(1===n,20013,{expectedCount:n});else{const r=this._t(t);if(r!==n){const n=this.ut(e),i=n?this.ct(n,e,r):1;if(0!==i){this.it(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,e)}ei?.o(function(e,t,n,r,i){const s={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},o=t.unchangedNames;return o&&(s.bloomFilter={applied:0===i,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:e=>r?.mightContain(e)??!1}),s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e.Ce,this.Ge.ht(),n,i))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=Et(n).toUint8Array()}catch(e){if(e instanceof yt)return k("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new si(s,r,i)}catch(e){return k(e instanceof oi?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.ge?null:o}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Ge.ht(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.et(t,n,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Dn(i.target)){const t=new ie(i.target.path);this.Et(t).has(r)||this.It(r,t)||this.et(r,t,on.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}});let n=lr();this.He.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.ot(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));const r=new ai(e,t,this.Ze,this.je,n);return this.je=tr(),this.Je=pi(),this.He=pi(),this.Ze=new ht(G),r}Ye(e,t){if(!this.rt(e))return;const n=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new fi,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new pt(G),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new pt(G),this.Je=this.Je.insert(e,t)),t}rt(e){const t=null!==this.ot(e);return t||A("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fi),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function pi(){return new ht(ie.comparator)}function gi(){return new ht(ie.comparator)}const mi=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),yi=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),vi=(()=>{const e={and:"AND",or:"OR"};return e})();class _i{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wi(e,t){return e.useProto3Json||Re(t)?t:{value:t}}function bi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ei(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ti(e,t){return bi(e,t.toTimestamp())}function Ii(e){return R(!!e,49232),ye.fromTimestamp(function(e){const t=wt(e);return new me(t.seconds,t.nanos)}(e))}function Si(e,t){return Ai(e,t).canonicalString()}function Ai(e,t){const n=function(e){return new te(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Ci(e){const t=te.fromString(e);return R(Yi(t),10190,{key:t.toString()}),t}function ki(e,t){return Si(e.databaseId,t.path)}function Oi(e,t){const n=Ci(t);if(n.get(1)!==e.databaseId.projectId)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ie(Di(n))}function xi(e,t){return Si(e.databaseId,t)}function Ni(e){const t=Ci(e);return 4===t.length?te.emptyPath():Di(t)}function Ri(e){return new te(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Di(e){return R(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Pi(e,t,n){return{name:ki(e,t),fields:n.value.mapValue.fields}}function Li(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:x(39313,{state:e})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(R(void 0===t||"string"==typeof t,58123),vt.fromBase64String(t||"")):(R(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),vt.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?P.UNKNOWN:Zr(e.code);return new L(t,e.message||"")}(o);n=new hi(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oi(e,r.document.name),s=Ii(r.document.updateTime),o=r.document.createTime?Ii(r.document.createTime):ye.min(),a=new rn({mapValue:{fields:r.document.fields}}),c=on.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ui(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Oi(e,r.document),s=r.readTime?Ii(r.readTime):ye.min(),o=on.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ui([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Oi(e,r.document),s=r.removedTargetIds||[];n=new ui([],s,i,null)}else{if(!("filter"in t))return x(11601,{Vt:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Qr(r,i),o=e.targetId;n=new li(o,s)}}return n}function Mi(e,t){let n;if(t instanceof Ur)n={update:Pi(e,t.key,t.value)};else if(t instanceof Hr)n={delete:ki(e,t.key)};else if(t instanceof jr)n={update:Pi(e,t.key,t.data),updateMask:Qi(t.fieldMask)};else{if(!(t instanceof zr))return x(16599,{dt:t.type});n={verify:ki(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof wr)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof br)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Tr)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Sr)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw x(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ti(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:x(27497)}(e,t.precondition)),n}function Fi(e,t){return e&&e.length>0?(R(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?Ii(e.updateTime):Ii(t);return n.isEqual(ye.min())&&(n=Ii(t)),new xr(n,e.transformResults||[])}(e,t))):[]}function Vi(e,t){return{documents:[xi(e,t.path)]}}function Ui(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xi(e,i);const s=function(e){if(0!==e.length)return Ki(pn.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Wi(e.field),direction:qi(e.dir)}}(e))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=wi(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ft:n,parent:i}}function ji(e){let t=Ni(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){R(1===r,65062);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Bi(e);return t instanceof pn&&mn(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map(e=>function(e){return new ln(Gi(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Re(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new an(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new an(n,t)}(n.endAt)),Ln(t,i,o,s,a,"F",c,u)}function $i(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function Bi(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Gi(e.unaryFilter.field);return dn.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Gi(e.unaryFilter.field);return dn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Gi(e.unaryFilter.field);return dn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Gi(e.unaryFilter.field);return dn.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(e):void 0!==e.fieldFilter?function(e){return dn.create(Gi(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return pn.create(e.compositeFilter.filters.map(e=>Bi(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(e.compositeFilter.op))}(e):x(30097,{filter:e})}function qi(e){return mi[e]}function Hi(e){return yi[e]}function zi(e){return vi[e]}function Wi(e){return{fieldPath:e.canonicalString()}}function Gi(e){return re.fromServerFormat(e.fieldPath)}function Ki(e){return e instanceof dn?function(e){if("=="===e.op){if(Jt(e.value))return{unaryFilter:{field:Wi(e.field),op:"IS_NAN"}};if(Xt(e.value))return{unaryFilter:{field:Wi(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Jt(e.value))return{unaryFilter:{field:Wi(e.field),op:"IS_NOT_NAN"}};if(Xt(e.value))return{unaryFilter:{field:Wi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wi(e.field),op:Hi(e.op),value:e.value}}}(e):e instanceof pn?function(e){const t=e.getFilters().map(e=>Ki(e));return 1===t.length?t[0]:{compositeFilter:{op:zi(e.op),filters:t}}}(e):x(54877,{filter:e})}function Qi(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Yi(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function Xi(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(e,t,n,r,i=ye.min(),s=ye.min(),o=vt.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Ji(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ji(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.yt=e}}function es(e){const t=ji({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?zn(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(bt(e.integerValue));else if("doubleValue"in e){const n=bt(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),De(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),"string"==typeof n&&(n=wt(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Et(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?nn(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):en(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):x(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const r of Object.keys(n))this.Ot(r,t),this.Ct(n[r],t)}kt(e,t){const n=e.fields||{};this.Ft(t,53);const r=Vt,i=n[r].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(bt(i)),this.Ot(r,t),this.Ct(n[r],t)}Kt(e,t){const n=e.values||[];this.Ft(t,50);for(const r of n)this.Ct(r,t)}Lt(e,t){this.Ft(t,37),ie.fromName(e).path.forEach(e=>{this.Ft(t,60),this.$t(e,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}ts.Wt=new ts;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(){this.bn=new rs}addToCollectionParentIndex(e,t){return this.bn.add(t),Ce.resolve()}getCollectionParents(e,t){return Ce.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return Ce.resolve()}deleteFieldIndex(e,t){return Ce.resolve()}deleteAllFieldIndexes(e){return Ce.resolve()}createTargetIndexes(e,t){return Ce.resolve()}getDocumentsMatchingTarget(e,t){return Ce.resolve(null)}getIndexType(e,t){return Ce.resolve(0)}getFieldIndexes(e,t){return Ce.resolve([])}getNextCollectionGroupToUpdate(e){return Ce.resolve(null)}getMinOffset(e,t){return Ce.resolve(Ee.min())}getMinOffsetFromCollectionGroup(e,t){return Ce.resolve(Ee.min())}updateCollectionGroup(e,t,n){return Ce.resolve()}updateIndexEntries(e,t){return Ce.resolve()}}class rs{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new pt(te.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new pt(te.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const is={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ss=41943040;class os{static withCacheSize(e){return new os(e,os.DEFAULT_COLLECTION_PERCENTILE,os.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */os.DEFAULT_COLLECTION_PERCENTILE=10,os.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,os.DEFAULT=new os(ss,os.DEFAULT_COLLECTION_PERCENTILE,os.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),os.DISABLED=new os(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class as{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new as(0)}static ar(){return new as(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cs="LruGarbageCollector",us=1048576;function ls([e,t],[n,r]){const i=G(e,n);return 0===i?G(t,r):i}class hs{constructor(e){this.Pr=e,this.buffer=new pt(ls),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();ls(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fs{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(e){A(cs,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Oe(e)?A(cs,"Ignoring IndexedDB error during garbage collection: ",e):await Ae(e)}await this.Ar(3e5)})}}class ds{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Ce.resolve(xe.ce);const n=new hs(t);return this.Vr.forEachTarget(e,e=>n.Ir(e.sequenceNumber)).next(()=>this.Vr.mr(e,e=>n.Ir(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector","Garbage collection skipped; disabled"),Ce.resolve(is)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),is):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(c=Date.now(),S()<=v.$b.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),Ce.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}function ps(e,t){return new ds(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gs{constructor(){this.changes=new Zn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,on.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ce.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Mr(n.mutation,e,mt.empty(),me.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,lr()).next(()=>t))}getLocalViewOfDocuments(e,t,n=lr()){const r=sr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=rr();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=sr();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,lr()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=tr();const s=ar(),o=function(){return ar()}();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof jr)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Mr(o.mutation,t,o.mutation.getFieldMask(),me.now())):s.set(t.key,mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>o.set(e,new ms(t,s.get(e)??null))),o))}recalculateAndSaveOverlays(e,t){const n=ar();let r=new ht((e,t)=>e-t),i=lr();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||mt.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||lr()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=or();c.forEach(e=>{if(!i.has(e)){const r=Pr(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ce.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return Vn(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Un(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ce.resolve(sr());let o=ve,a=i;return s.next(t=>Ce.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ce.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,lr())).next(e=>({batchId:o,changes:ir(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ie(t)).next(e=>{let t=rr();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=rr();return this.indexManager.getCollectionParents(e,i).next(o=>Ce.forEach(o,o=>{const a=function(e,t){return new Pn(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,on.newInvalidDocument(r)))});let n=rr();return e.forEach((e,r)=>{const s=i.get(e);void 0!==s&&Mr(s.mutation,r,mt.empty(),me.now()),Qn(t,r)&&(n=n.insert(e,r))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return Ce.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Ii(e.createTime)}}(t)),Ce.resolve()}getNamedQuery(e,t){return Ce.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(e){return{name:e.name,query:es(e.bundledQuery),readTime:Ii(e.readTime)}}(t)),Ce.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.overlays=new ht(ie.comparator),this.Lr=new Map}getOverlay(e,t){return Ce.resolve(this.overlays.get(t))}getOverlays(e,t){const n=sr();return Ce.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),Ce.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Lr.delete(n)),Ce.resolve()}getOverlaysForCollection(e,t,n){const r=sr(),i=t.length+1,s=new ie(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ce.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ht((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=sr(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=sr(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((e,t)=>o.set(e,t)),o.size()>=r)break;return Ce.resolve(o)}St(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Kr(t,n));let i=this.Lr.get(t);void 0===i&&(i=lr(),this.Lr.set(t,i)),this.Lr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return Ce.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Ce.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.kr=new pt(Es.qr),this.Kr=new pt(Es.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new Es(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new Es(e,t))}Qr(e,t){e.forEach(e=>this.removeReference(e,t))}Gr(e){const t=new ie(new te([])),n=new Es(t,e),r=new Es(t,e+1),i=[];return this.Kr.forEachInRange([n,r],e=>{this.Wr(e),i.push(e.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new ie(new te([])),n=new Es(t,e),r=new Es(t,e+1);let i=lr();return this.Kr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Es(e,0),n=this.kr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Es{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return ie.comparator(e.key,t.key)||G(e.Jr,t.Jr)}static Ur(e,t){return G(e.Jr,t.Jr)||ie.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new pt(Es.qr)}checkEmpty(e){return Ce.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Wr(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Hr=this.Hr.add(new Es(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ce.resolve(s)}lookupMutationBatch(e,t){return Ce.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),i=r<0?0:r;return Ce.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ce.resolve(0===this.mutationQueue.length?Ne:this.Yn-1)}getAllMutationBatches(e){return Ce.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Es(t,0),r=new Es(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,r],e=>{const t=this.Zr(e.Jr);i.push(t)}),Ce.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new pt(G);return t.forEach(e=>{const t=new Es(e,0),r=new Es(e,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([t,r],e=>{n=n.add(e.Jr)})}),Ce.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ie.isDocumentKey(i)||(i=i.child(""));const s=new Es(new ie(i),0);let o=new pt(G);return this.Hr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Jr)),!0)},s),Ce.resolve(this.Yr(o))}Yr(e){const t=[];return e.forEach(e=>{const n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){R(0===this.ei(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Hr;return Ce.forEach(t.mutations,r=>{const i=new Es(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Hr=n})}nr(e){}containsKey(e,t){const n=new Es(t,0),r=this.Hr.firstAfterOrEqual(n);return Ce.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ce.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.ti=e,this.docs=function(){return new ht(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ce.resolve(n?n.document.mutableCopy():on.newInvalidDocument(t))}getEntries(e,t){let n=tr();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():on.newInvalidDocument(e))}),Ce.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=tr();const s=t.path,o=new ie(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Te(be(o),n)<=0||(r.has(o.key)||Qn(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ce.resolve(i)}getAllFromCollectionGroup(e,t,n,r){x(9500)}ni(e,t){return Ce.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Ss(this)}getSize(e){return Ce.resolve(this.size)}}class Ss extends gs{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(n)}),Ce.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.persistence=e,this.ri=new Zn(e=>Nn(e),Rn),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.ii=0,this.si=new bs,this.targetCount=0,this.oi=as._r()}forEachTarget(e,t){return this.ri.forEach((e,n)=>t(n)),Ce.resolve()}getLastRemoteSnapshotVersion(e){return Ce.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ce.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),Ce.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),Ce.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new as(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,Ce.resolve()}updateTargetData(e,t){return this.lr(t),Ce.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,Ce.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.ri.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ri.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Ce.waitFor(i).next(()=>r)}getTargetCount(e){return Ce.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return Ce.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),Ce.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Ce.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),Ce.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return Ce.resolve(n)}containsKey(e,t){return Ce.resolve(this.si.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this._i={},this.overlays={},this.ai=new xe(0),this.ui=!1,this.ui=!0,this.ci=new ws,this.referenceDelegate=e(this),this.li=new As(this),this.indexManager=new ns,this.remoteDocumentCache=function(e){return new Is(e)}(e=>this.referenceDelegate.hi(e)),this.serializer=new Zi(t),this.Pi=new vs(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _s,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new Ts(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){A("MemoryPersistence","Starting transaction:",e);const r=new ks(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(e=>this.referenceDelegate.Ei(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ii(e,t){return Ce.or(Object.values(this._i).map(n=>()=>n.containsKey(e,t)))}}class ks extends Se{constructor(e){super(),this.currentSequenceNumber=e}}class Os{constructor(e){this.persistence=e,this.Ri=new bs,this.Ai=null}static Vi(e){return new Os(e)}get di(){if(this.Ai)return this.Ai;throw x(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),Ce.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),Ce.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),Ce.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(e=>this.di.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.di.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ce.forEach(this.di,n=>{const r=ie.fromPath(n);return this.mi(e,r).next(e=>{e||t.removeEntry(r,ye.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(e=>{e?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return Ce.or([()=>Ce.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class xs{constructor(e,t){this.persistence=e,this.fi=new Zn(e=>Me(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=ps(this,t)}static Vi(e,t){return new xs(e,t)}Ti(){}Ei(e){return Ce.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}pr(e){let t=0;return this.mr(e,e=>{t++}).next(()=>t)}mr(e,t){return Ce.forEach(this.fi,(n,r)=>this.wr(e,n,r).next(e=>e?Ce.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,r=>this.wr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,ye.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),Ce.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),Ce.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),Ce.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),Ce.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gt(e.data.value)),t}wr(e,t,n){return Ce.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.fi.get(t);return Ce.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=r}static Is(e,t){let n=lr(),r=lr();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ns(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return(0,a.nr)()?8:ke((0,a.ZQ)())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.gs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ps(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;const n=new Rs;return this.ys(e,t,n).next(r=>{if(i.result=r,this.As)return this.ws(e,t,n,r.size)})}).next(()=>i.result)}ws(e,t,n,r){return n.documentReadCount<this.Vs?(S()<=v.$b.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",Kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Ce.resolve()):(S()<=v.$b.DEBUG&&A("QueryEngine","Query:",Kn(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(S()<=v.$b.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",Kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$n(t))):Ce.resolve())}gs(e,t){if(Fn(t))return Ce.resolve(null);let n=$n(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=zn(t,null,"F"),n=$n(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=lr(...r);return this.fs.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.Ss(t,r);return this.bs(t,s,i,n.readTime)?this.gs(e,zn(t,null,"F")):this.Ds(e,s,t,n)}))})))}ps(e,t,n,r){return Fn(t)||r.isEqual(ye.min())?Ce.resolve(null):this.fs.getDocuments(e,n).next(i=>{const s=this.Ss(t,i);return this.bs(t,s,n,r)?Ce.resolve(null):(S()<=v.$b.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kn(t)),this.Ds(e,s,t,we(r,ve)).next(e=>e))})}Ss(e,t){let n=new pt(Xn(e));return t.forEach((t,r)=>{Qn(e,r)&&(n=n.add(r))}),n}bs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,n){return S()<=v.$b.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Kn(t)),this.fs.getDocumentsMatchingQuery(e,t,Ee.min(),n)}Ds(e,t,n,r){return this.fs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="LocalStore",Ls=3e8;class Ms{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new ht(G),this.Fs=new Zn(e=>Nn(e),Rn),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ys(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Fs(e,t,n,r){return new Ms(e,t,n,r)}async function Vs(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Os(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=lr();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Ns:e,removedBatchIds:i,addedBatchIds:s}))})})}function Us(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ce.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);R(null!==s,48541),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=lr();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}function js(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function $s(e,t){const n=D(e),r=t.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.li.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.li.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(vt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;const r=t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds();if(r>=Ls)return!0;const i=n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size;return i>0}(c,u,s)&&o.push(n.li.updateTargetData(e,u))});let a=tr(),c=lr();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Bs(e,s,t.documentUpdates).next(e=>{a=e.Bs,c=e.Ls})),!r.isEqual(ye.min())){const t=n.li.getLastRemoteSnapshotVersion(e).next(t=>n.li.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Ce.waitFor(o).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,c)).next(()=>a)}).then(e=>(n.vs=i,e))}function Bs(e,t,n){let r=lr(),i=lr();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=tr();return n.forEach((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ye.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):A(Ps,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Bs:r,Ls:i}})}function qs(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=Ne),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function Hs(e,t){const n=D(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.li.getTargetData(e,t).next(i=>i?(r=i,Ce.resolve(r)):n.li.allocateTargetId(e).next(i=>(r=new Ji(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.li.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.vs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(e.targetId,e),n.Fs.set(t,e.targetId)),e})}async function zs(e,t,n){const r=D(e),i=r.vs.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!Oe(e))throw e;A(Ps,`Failed to update sequence numbers for target ${t}: ${e}`)}r.vs=r.vs.remove(t),r.Fs.delete(i.target)}function Ws(e,t,n){const r=D(e);let i=ye.min(),s=lr();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=D(e),i=r.Fs.get(n);return void 0!==i?Ce.resolve(r.vs.get(i)):r.li.getTargetData(t,n)}(r,e,$n(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Cs.getDocumentsMatchingQuery(e,t,n?i:ye.min(),n?s:lr())).next(e=>(Gs(r,Yn(t),e),{documents:e,ks:s})))}function Gs(e,t,n){let r=e.Ms.get(t)||ye.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ms.set(t,r)}class Ks{constructor(){this.activeTargetIds=fr()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qs{constructor(){this.vo=new Ks,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ks,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{Mo(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="ConnectivityMonitor";class Js{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){A(Xs,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){A(Xs,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs=null;function eo(){return null===Zs?Zs=function(){return 268435456+Math.round(2147483648*Math.random())}():Zs++,"0x"+Zs.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const to="RestConnection",no={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ro{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===Nt?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,i){const s=eo(),o=this.Qo(e,t.toUriEncodedString());A(to,`Sending RPC '${e}' ${s}:`,o,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,r,i);const{host:u}=new URL(o),l=(0,a.zJ)(u);return this.zo(e,o,c,n,l).then(t=>(A(to,`Received RPC '${e}' ${s}: `,t),t),t=>{throw k(to,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}jo(e,t,n,r,i,s){return this.Wo(e,t,n,r,i)}Go(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+E}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Qo(e,t){const n=no[e];let r=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="WebChannelConnection",oo=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class ao extends ro{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ao.c_){const e=m();oo(e,g.STAT_EVENT,e=>{e.stat===p.PROXY?A(so,"STAT_EVENT: detected buffering proxy"):e.stat===p.NOPROXY&&A(so,"STAT_EVENT: detected no buffering proxy")}),ao.c_=!0}}zo(e,t,n,r,i){const s=eo();return new Promise((i,o)=>{const a=new l;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case d.NO_ERROR:const t=a.getResponseJson();A(so,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case d.TIMEOUT:A(so,`RPC '${e}' ${s} timed out`),o(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case d.HTTP_ERROR:const n=a.getStatus();if(A(so,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(t)>=0?t:P.UNKNOWN}(t.status);o(new L(e,t.message))}else o(new L(P.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(P.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:e,streamId:s,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{A(so,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);A(so,`RPC '${e}' ${s} sending request:`,r),a.send(t,"POST",c,n,15)})}T_(e,t,n){const r=eo(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const c=i.join("");A(so,`Creating RPC '${e}' stream ${r}: ${c}`,o);const u=s.createWebChannel(c,o);this.E_(u);let l=!1,f=!1;const d=new io({Jo:t=>{f?A(so,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(l||(A(so,`Opening RPC '${e}' stream ${r} transport.`),u.open(),l=!0),A(so,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Ho:()=>u.close()});return oo(u,h.EventType.OPEN,()=>{f||(A(so,`RPC '${e}' stream ${r} transport opened.`),d.i_())}),oo(u,h.EventType.CLOSE,()=>{f||(f=!0,A(so,`RPC '${e}' stream ${r} transport closed`),d.o_(),this.I_(u))}),oo(u,h.EventType.ERROR,t=>{f||(f=!0,k(so,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),d.o_(new L(P.UNAVAILABLE,"The operation could not be completed")))}),oo(u,h.EventType.MESSAGE,t=>{if(!f){const n=t.data[0];R(!!n,16349);const i=n,s=i?.error||i[0]?.error;if(s){A(so,`RPC '${e}' stream ${r} received error:`,s);const t=s.status;let n=function(e){const t=Yr[e];if(void 0!==t)return Zr(t)}(t),i=s.message;"NOT_FOUND"===t&&i.includes("database")&&i.includes("does not exist")&&i.includes(this.databaseId.database)&&k(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=P.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,d.o_(new L(n,i)),u.close()}else A(so,`RPC '${e}' stream ${r} received:`,n),d.__(n)}}),ao.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e){return new ao(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(e){return new _i(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ao.c_=!1;class ho{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="PersistentStream";class po{constructor(e,t,n,r,i,s,o,a){this.Ci=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ho(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(C(t.toString()),C("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.D_===t&&this.G_(e,n)},t=>{e(()=>{const e=new L(P.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return A(fo,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(A(fo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class go extends po{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Li(this.serializer,e),n=function(e){if(!("targetChange"in e))return ye.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ye.min():t.readTime?Ii(t.readTime):ye.min()}(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=Ri(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Dn(r)?{documents:Vi(e,r)}:{query:Ui(e,r).ft},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Ei(e,t.resumeToken);const r=wi(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(ye.min())>0){n.readTime=bi(e,t.snapshotVersion.toTimestamp());const r=wi(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=$i(this.serializer,e);n&&(t.labels=n),this.q_(t)}X_(e){const t={};t.database=Ri(this.serializer),t.removeTarget=e,this.q_(t)}}class mo extends po{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return R(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,R(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){R(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Fi(e.writeResults,e.commitTime),n=Ii(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Ri(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Mi(this.serializer,e))};this.q_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{}class vo extends yo{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Wo(e,Ai(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new L(P.UNKNOWN,e.toString())})}jo(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.jo(e,Ai(t,n),r,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new L(P.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function _o(e,t,n,r){return new vo(e,t,n,r)}class wo{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(C(t),this.aa=!1):A("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="RemoteStore";class Eo{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(e=>{n.enqueueAndForget(async()=>{No(this)&&(A(bo,"Restarting streams for network reachability change."),await async function(e){const t=D(e);t.Ia.add(4),await Io(t),t.Va.set("Unknown"),t.Ia.delete(4),await To(t)}(this))})}),this.Va=new wo(n,r)}}async function To(e){if(No(e))for(const t of e.Ra)await t(!0)}async function Io(e){for(const t of e.Ra)await t(!1)}function So(e,t){const n=D(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),xo(n)?Oo(n):Yo(n).O_()&&Co(n,t))}function Ao(e,t){const n=D(e),r=Yo(n);n.Ea.delete(t),r.O_()&&ko(n,t),0===n.Ea.size&&(r.O_()?r.L_():No(n)&&n.Va.set("Unknown"))}function Co(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ye.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Yo(e).Z_(t)}function ko(e,t){e.da.$e(t),Yo(e).X_(t)}function Oo(e){e.da=new di({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ea.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Yo(e).start(),e.Va.ua()}function xo(e){return No(e)&&!Yo(e).x_()&&e.Ea.size>0}function No(e){return 0===D(e).Ia.size}function Ro(e){e.da=void 0}async function Do(e){e.Va.set("Online")}async function Po(e){e.Ea.forEach((t,n)=>{Co(e,t)})}async function Lo(e,t){Ro(e),xo(e)?(e.Va.ha(t),Oo(e)):e.Va.set("Unknown")}async function Mo(e,t,n){if(e.Va.set("Online"),t instanceof hi&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ea.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ea.delete(r),e.da.removeTarget(r))}(e,t)}catch(n){A(bo,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Fo(e,n)}else if(t instanceof ui?e.da.Xe(t):t instanceof li?e.da.st(t):e.da.tt(t),!n.isEqual(ye.min()))try{const t=await js(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.da.Tt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Ea.get(r);i&&e.Ea.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ea.get(t);if(!r)return;e.Ea.set(t,r.withResumeToken(vt.EMPTY_BYTE_STRING,r.snapshotVersion)),ko(e,t);const i=new Ji(r.target,t,n,r.sequenceNumber);Co(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){A(bo,"Failed to raise snapshot:",t),await Fo(e,t)}}async function Fo(e,t,n){if(!Oe(t))throw t;e.Ia.add(1),await Io(e),e.Va.set("Offline"),n||(n=()=>js(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{A(bo,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await To(e)})}function Vo(e,t){return t().catch(n=>Fo(e,n,t))}async function Uo(e){const t=D(e),n=Xo(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ne;for(;jo(t);)try{const e=await qs(t.localStore,r);if(null===e){0===t.Ta.length&&n.L_();break}r=e.batchId,$o(t,e)}catch(e){await Fo(t,e)}Bo(t)&&qo(t)}function jo(e){return No(e)&&e.Ta.length<10}function $o(e,t){e.Ta.push(t);const n=Xo(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function Bo(e){return No(e)&&!Xo(e).x_()&&e.Ta.length>0}function qo(e){Xo(e).start()}async function Ho(e){Xo(e).ra()}async function zo(e){const t=Xo(e);for(const n of e.Ta)t.ea(n.mutations)}async function Wo(e,t,n){const r=e.Ta.shift(),i=Gr.from(r,t,n);await Vo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Uo(e)}async function Go(e,t){t&&Xo(e).Y_&&await async function(e,t){if(function(e){return Jr(e)&&e!==P.ABORTED}(t.code)){const n=e.Ta.shift();Xo(e).B_(),await Vo(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Uo(e)}}(e,t),Bo(e)&&qo(e)}async function Ko(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),A(bo,"RemoteStore received new credentials");const r=No(n);n.Ia.add(3),await Io(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await To(n)}async function Qo(e,t){const n=D(e);t?(n.Ia.delete(2),await To(n)):t||(n.Ia.add(2),await Io(n),n.Va.set("Unknown"))}function Yo(e){return e.ma||(e.ma=function(e,t,n){const r=D(e);return r.sa(),new go(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Zo:Do.bind(null,e),Yo:Po.bind(null,e),t_:Lo.bind(null,e),H_:Mo.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),xo(e)?Oo(e):e.Va.set("Unknown")):(await e.ma.stop(),Ro(e))})),e.ma}function Xo(e){return e.fa||(e.fa=function(e,t,n){const r=D(e);return r.sa(),new mo(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Ho.bind(null,e),t_:Go.bind(null,e),ta:zo.bind(null,e),na:Wo.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await Uo(e)):(await e.fa.stop(),e.Ta.length>0&&(A(bo,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Jo{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Jo(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zo(e,t){if(C("AsyncQueue",`${t}: ${e}`),Oe(e))return new L(P.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{static emptySet(e){return new ea(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||ie.comparator(t.key,n.key):(e,t)=>ie.comparator(e.key,t.key),this.keyedMap=rr(),this.sortedSet=new ht(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ea))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new ea;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.ga=new ht(ie.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?0!==e.type&&3===n.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==n.type?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ga=this.ga.remove(t):1===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):x(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class na{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new na(e,t,ea.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class ia{constructor(){this.queries=sa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=D(e),r=n.queries;n.queries=sa(),r.forEach((e,n)=>{for(const r of n.Sa)r.onError(t)})}(this,new L(P.ABORTED,"Firestore shutting down"))}}function sa(){return new Zn(e=>Gn(e),Wn)}async function oa(e,t){const n=D(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.ba()&&t.Da()&&(r=2):(s=new ra,r=t.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=Zo(e,`Initialization of query '${Kn(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.Sa.push(t),t.va(n.onlineState),s.wa&&t.Fa(s.wa)&&la(n)}async function aa(e,t){const n=D(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.Sa.indexOf(t);e>=0&&(s.Sa.splice(e,1),0===s.Sa.length?i=t.Da()?0:1:!s.ba()&&t.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ca(e,t){const n=D(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.Sa)e.Fa(i)&&(r=!0);t.wa=i}}r&&la(n)}function ua(e,t,n){const r=D(e),i=r.queries.get(t);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(t)}function la(e){e.Ca.forEach(e=>{e.next()})}var ha,fa;(fa=ha||(ha={})).Ma="default",fa.Cache="cache";class da{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new na(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==t;return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=na.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ha.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pa{constructor(e){this.key=e}}class ga{constructor(e){this.key=e}}class ma{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=lr(),this.mutatedKeys=lr(),this.eu=Xn(e),this.tu=new ea(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new ta,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=Qn(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.su(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.eu(l,a)>0||c&&this.eu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tu:s,iu:n,bs:o,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const s=e.iu.ya();s.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Vt:e})}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.eu(e.doc,t.doc)),this.ou(n),r=r??!1;const o=t&&!r?this._u():[],a=0===this.Ya.size&&this.current&&!r?1:0,c=a!==this.Xa;return this.Xa=a,0!==s.length||c?{snapshot:new na(this.query,e.tu,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ta,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=lr(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Ya=this.Ya.add(e.key))});const t=[];return e.forEach(e=>{this.Ya.has(e)||t.push(new ga(e))}),this.Ya.forEach(n=>{e.has(n)||t.push(new pa(n))}),t}cu(e){this.Za=e.ks,this.Ya=lr();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return na.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const ya="SyncEngine";class va{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class _a{constructor(e){this.key=e,this.hu=!1}}class wa{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new Zn(e=>Gn(e),Wn),this.Eu=new Map,this.Iu=new Set,this.Ru=new ht(ie.comparator),this.Au=new Map,this.Vu=new bs,this.du={},this.mu=new Map,this.fu=as.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function ba(e,t,n=!0){const r=qa(e);let i;const s=r.Tu.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Ta(r,t,n,!0),i}async function Ea(e,t){const n=qa(e);await Ta(n,t,!0,!1)}async function Ta(e,t,n,r){const i=await Hs(e.localStore,$n(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await Ia(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&So(e.remoteStore,i),a}async function Ia(e,t,n,r,i){e.pu=(t,n,r)=>async function(e,t,n,r){let i=t.view.ru(n);i.bs&&(i=await Ws(e.localStore,t.query,!1).then(({documents:e})=>t.view.ru(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return Fa(e,t.targetId,a.au),a.snapshot}(e,t,n,r);const s=await Ws(e.localStore,t,!0),o=new ma(t,s.ks),a=o.ru(s.documents),c=ci.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);Fa(e,n,u.au);const l=new va(t,n,o);return e.Tu.set(t,l),e.Eu.has(n)?e.Eu.get(n).push(t):e.Eu.set(n,[t]),u.snapshot}async function Sa(e,t,n){const r=D(e),i=r.Tu.get(t),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(e=>!Wn(e,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ao(r.remoteStore,i.targetId),La(r,i.targetId)}).catch(Ae)):(La(r,i.targetId),await zs(r.localStore,i.targetId,!0))}async function Aa(e,t){const n=D(e),r=n.Tu.get(t),i=n.Eu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ao(n.remoteStore,r.targetId))}async function Ca(e,t,n){const r=Ha(e);try{const e=await function(e,t){const n=D(e),r=me.now(),i=t.reduce((e,t)=>e.add(t.key),lr());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=tr(),c=lr();return n.xs.getEntries(e,i).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(i=>{s=i;const o=[];for(const e of t){const t=Fr(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new jr(e.key,t,sn(t.value.mapValue),Nr.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:ir(s)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.du[e.currentUser.toKey()];r||(r=new ht(G)),r=r.insert(t,n),e.du[e.currentUser.toKey()]=r}(r,e.batchId,n),await ja(r,e.changes),await Uo(r.remoteStore)}catch(e){const t=Zo(e,"Failed to persist write");n.reject(t)}}async function ka(e,t){const n=D(e);try{const e=await $s(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Au.get(t);r&&(R(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.hu=!0:e.modifiedDocuments.size>0?R(r.hu,14607):e.removedDocuments.size>0&&(R(r.hu,42227),r.hu=!1))}),await ja(n,e,t)}catch(e){await Ae(e)}}function Oa(e,t,n){const r=D(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Tu.forEach((n,r)=>{const i=r.view.va(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=D(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.Sa)i.va(t)&&(r=!0)}),r&&la(n)}(r.eventManager,t),e.length&&r.Pu.H_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function xa(e,t,n){const r=D(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Au.get(t),s=i&&i.key;if(s){let e=new ht(ie.comparator);e=e.insert(s,on.newNoDocument(s,ye.min()));const n=lr().add(s),i=new ai(ye.min(),new Map,new ht(G),e,n);await ka(r,i),r.Ru=r.Ru.remove(s),r.Au.delete(t),Ua(r)}else await zs(r.localStore,t,!1).then(()=>La(r,t,n)).catch(Ae)}async function Na(e,t){const n=D(e),r=t.batch.batchId;try{const e=await Us(n.localStore,t);Pa(n,r,null),Da(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ja(n,e)}catch(e){await Ae(e)}}async function Ra(e,t,n){const r=D(e);try{const e=await function(e,t){const n=D(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(R(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);Pa(r,t,n),Da(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ja(r,e)}catch(n){await Ae(n)}}function Da(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function Pa(e,t,n){const r=D(e);let i=r.du[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.du[r.currentUser.toKey()]=i}}function La(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Eu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Eu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(t=>{e.Vu.containsKey(t)||Ma(e,t)})}function Ma(e,t){e.Iu.delete(t.path.canonicalString());const n=e.Ru.get(t);null!==n&&(Ao(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),Ua(e))}function Fa(e,t,n){for(const r of n)r instanceof pa?(e.Vu.addReference(r.key,t),Va(e,r)):r instanceof ga?(A(ya,"Document no longer in limbo: "+r.key),e.Vu.removeReference(r.key,t),e.Vu.containsKey(r.key)||Ma(e,r.key)):x(19791,{wu:r})}function Va(e,t){const n=t.key,r=n.path.canonicalString();e.Ru.get(n)||e.Iu.has(r)||(A(ya,"New document in limbo: "+n),e.Iu.add(r),Ua(e))}function Ua(e){for(;e.Iu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new ie(te.fromString(t)),r=e.fu.next();e.Au.set(r,new _a(n)),e.Ru=e.Ru.insert(n,r),So(e.remoteStore,new Ji($n(Mn(n.path)),r,"TargetPurposeLimboResolution",xe.ce))}}async function ja(e,t,n){const r=D(e),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((e,a)=>{o.push(r.pu(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(a.targetId)?.current;r.sharedClientState.updateQueryState(a.targetId,t?"current":"not-current")}if(e){i.push(e);const t=Ns.Is(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(e,t){const n=D(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ce.forEach(t,t=>Ce.forEach(t.Ts,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Ce.forEach(t.Es,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Oe(e))throw e;A(Ps,"Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.vs.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(e,i)}}}(r.localStore,s))}async function $a(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){A(ya,"User change. New user:",t.toKey());const e=await Vs(n.localStore,t);n.currentUser=t,function(e,t){e.mu.forEach(e=>{e.forEach(e=>{e.reject(new L(P.CANCELLED,t))})}),e.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ja(n,e.Ns)}}function Ba(e,t){const n=D(e),r=n.Au.get(t);if(r&&r.hu)return lr().add(r.key);{let e=lr();const r=n.Eu.get(t);if(!r)return e;for(const t of r){const r=n.Tu.get(t);e=e.unionWith(r.view.nu)}return e}}function qa(e){const t=D(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ka.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ba.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=xa.bind(null,t),t.Pu.H_=ca.bind(null,t.eventManager),t.Pu.yu=ua.bind(null,t.eventManager),t}function Ha(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Na.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ra.bind(null,t),t}class za{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Fs(this.persistence,new Ds,e.initialUser,this.serializer)}Cu(e){return new Cs(Os.Vi,this.serializer)}Du(e){return new Qs}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}za.provider={build:()=>new za};class Wa extends za{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){R(this.persistence.referenceDelegate instanceof xs,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new fs(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?os.withCacheSize(this.cacheSizeBytes):os.DEFAULT;return new Cs(e=>xs.Vi(e,t),this.serializer)}}class Ga{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Oa(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=$a.bind(null,this.syncEngine),await Qo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ia}()}createDatastore(e){const t=lo(e.databaseInfo.databaseId),n=co(e.databaseInfo);return _o(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new Eo(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,e=>Oa(this.syncEngine,e,0),function(){return Js.v()?new Js:new Ys}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new wa(e,t,n,r,i,s);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=D(e);A(bo,"RemoteStore shutting down."),t.Ia.add(5),await Io(t),t.Aa.shutdown(),t.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ga.provider={build:()=>new Ga};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):C("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qa="FirestoreClient";class Ya{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=b.UNAUTHENTICATED,this.clientId=W.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{A(Qa,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(A(Qa,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new M;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Zo(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Xa(e,t){e.asyncQueue.verifyOperationInProgress(),A(Qa,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Vs(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Ja(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Za(e);A(Qa,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>Ko(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Ko(t.remoteStore,n)),e._onlineComponents=t}async function Za(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){A(Qa,"Using user provided OfflineComponentProvider");try{await Xa(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===P.FAILED_PRECONDITION||e.code===P.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;k("Error using user provided cache. Falling back to memory cache: "+n),await Xa(e,new za)}}else A(Qa,"Using default OfflineComponentProvider"),await Xa(e,new Wa(void 0));return e._offlineComponents}async function ec(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(A(Qa,"Using user provided OnlineComponentProvider"),await Ja(e,e._uninitializedComponentsProvider._online)):(A(Qa,"Using default OnlineComponentProvider"),await Ja(e,new Ga))),e._onlineComponents}function tc(e){return ec(e).then(e=>e.syncEngine)}async function nc(e){const t=await ec(e),n=t.eventManager;return n.onListen=ba.bind(null,t.syncEngine),n.onUnlisten=Sa.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Ea.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Aa.bind(null,t.syncEngine),n}function rc(e,t,n={}){const r=new M;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Ka({next:a=>{s.Nu(),t.enqueueAndForget(()=>aa(e,o));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new L(P.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new L(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new da(Mn(n.path),s,{includeMetadataChanges:!0,qa:!0});return oa(e,o)}(await nc(e),e.asyncQueue,t,n,r)),r.promise}function ic(e,t,n={}){const r=new M;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Ka({next:n=>{s.Nu(),t.enqueueAndForget(()=>aa(e,o)),n.fromCache&&"server"===r.source?i.reject(new L(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new da(n,s,{includeMetadataChanges:!0,qa:!0});return oa(e,o)}(await nc(e),e.asyncQueue,t,n,r)),r.promise}function sc(e,t){const n=new M;return e.asyncQueue.enqueueAndForget(async()=>Ca(await tc(e),t,n)),n.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oc(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ac="ComponentProvider",cc=new Map;function uc(e,t,n,r,i){return new xt(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,oc(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="firestore.googleapis.com",hc=!0;class fc{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lc,this.ssl=hc}else this.host=e.host,this.ssl=e.ssl??hc;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=ss;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<us)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oe("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oc(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dc{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fc(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new V;switch(e.type){case"firstParty":return new B(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=cc.get(e);t&&(A(ac,"Removing Datastore"),cc.delete(e),t.terminate())}(this),Promise.resolve()}}function pc(e,t,n,r={}){e=he(e,dc);const i=(0,a.zJ)(t),s=e._getSettings(),o={...s,emulatorOptions:e._getEmulatorOptions()},c=`${t}:${n}`;i&&(0,a.gE)(`https://${c}`),s.host!==lc&&s.host!==c&&k("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:c,ssl:i,emulatorOptions:r};if(!(0,a.bD)(u,o)&&(e._setSettings(u),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=b.MOCK_USER;else{t=(0,a.Fy)(r.mockUserToken,e._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new b(i)}e._authCredentials=new U(new F(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new gc(this.firestore,e,this._query)}}class mc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mc(this.firestore,e,this._key)}toJSON(){return{type:mc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(de(t,mc._jsonSchema))return new mc(e,n||null,new ie(te.fromString(t.referencePath)))}}mc._jsonSchemaVersion="firestore/documentReference/1.0",mc._jsonSchema={type:fe("string",mc._jsonSchemaVersion),referencePath:fe("string")};class yc extends gc{constructor(e,t,n){super(e,t,Mn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mc(this.firestore,null,new ie(e))}withConverter(e){return new yc(this.firestore,e,this._path)}}function vc(e,t,...n){if(e=(0,a.Ku)(e),se("collection","path",t),e instanceof dc){const r=te.fromString(t,...n);return ce(r),new yc(e,null,r)}{if(!(e instanceof mc||e instanceof yc))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(te.fromString(t,...n));return ce(r),new yc(e.firestore,null,r)}}function _c(e,t,...n){if(e=(0,a.Ku)(e),1===arguments.length&&(t=W.newId()),se("doc","path",t),e instanceof dc){const r=te.fromString(t,...n);return ae(r),new mc(e,null,new ie(r))}{if(!(e instanceof mc||e instanceof yc))throw new L(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(te.fromString(t,...n));return ae(r),new mc(e.firestore,e instanceof yc?e.converter:null,new ie(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wc="AsyncQueue";class bc{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ho(this,"async_queue_retry"),this._c=()=>{const e=uo();e&&A(wc,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=uo();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=uo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new M;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Oe(e))throw e;A(wc,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,C("INTERNAL UNHANDLED ERROR: ",Ec(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Jo.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(r),r}uc(){this.nc&&x(47125,{Pc:Ec(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ec(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Tc extends dc{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new bc,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bc(e),this._firestoreClient=void 0,await e}}}function Ic(e,t){const n="object"==typeof e?e:(0,s.Sx)(),r="string"==typeof e?e:t||Nt,i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(0,a.yU)("firestore");e&&pc(i,...e)}return i}function Sc(e){if(e._terminated)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||Ac(e),e._firestoreClient}function Ac(e){const t=e._freezeSettings(),n=uc(e._databaseId,e._app?.options.appId||"",e._persistenceKey,e._app?.options.apiKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new Ya(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cc(vt.fromBase64String(e))}catch(e){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Cc(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cc._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(de(e,Cc._jsonSchema))return Cc.fromBase64String(e.bytes)}}Cc._jsonSchemaVersion="firestore/bytes/1.0",Cc._jsonSchema={type:fe("string",Cc._jsonSchemaVersion),bytes:fe("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oc{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xc._jsonSchemaVersion}}static fromJSON(e){if(de(e,xc._jsonSchema))return new xc(e.latitude,e.longitude)}}xc._jsonSchemaVersion="firestore/geoPoint/1.0",xc._jsonSchema={type:fe("string",xc._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nc{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Nc._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(de(e,Nc._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new Nc(e.vectorValues);throw new L(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nc._jsonSchemaVersion="firestore/vectorValue/1.0",Nc._jsonSchema={type:fe("string",Nc._jsonSchemaVersion),vectorValues:fe("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rc=/^__.*__$/;class Dc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new jr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ur(e,this.data,t,this.fieldTransforms)}}class Pc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new jr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Lc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{dataSource:e})}}class Mc{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Mc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Jc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(0===e.length)throw this.yc("Document fields must not be empty");if(Lc(this.dataSource)&&Rc.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class Fc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||lo(e)}A(e,t,n,r=!1){return new Mc({dataSource:e,methodName:t,targetDoc:n,path:re.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vc(e){const t=e._freezeSettings(),n=lo(e._databaseId);return new Fc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Uc(e,t,n,r,i,s={}){const o=e.A(s.merge||s.mergeFields?2:0,t,n,i);Kc("Data must be an object, but it was:",o,r);const a=Wc(r,o);let c,u;if(s.merge)c=new mt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Qc(t,r,n);if(!o.contains(i))throw new L(P.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Zc(e,i)||e.push(i)}c=new mt(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new Dc(new rn(a),c,u)}class jc extends Oc{_toFieldTransform(e){if(2!==e.dataSource)throw 1===e.dataSource?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jc}}class $c extends Oc{_toFieldTransform(e){return new kr(e.path,new wr)}isEqual(e){return e instanceof $c}}function Bc(e,t,n,r){const i=e.A(1,t,n);Kc("Data must be an object, but it was:",i,r);const s=[],o=rn.empty();ut(r,(e,r)=>{const c=Xc(t,e,n);r=(0,a.Ku)(r);const u=i.fc(c);if(r instanceof jc)s.push(c);else{const e=zc(r,u);null!=e&&(s.push(c),o.set(c,e))}});const c=new mt(s);return new Pc(o,c,i.fieldTransforms)}function qc(e,t,n,r,i,s){const o=e.A(1,t,n),c=[Qc(t,r,n)],u=[i];if(s.length%2!=0)throw new L(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Qc(t,s[a])),u.push(s[a+1]);const l=[],h=rn.empty();for(let d=c.length-1;d>=0;--d)if(!Zc(l,c[d])){const e=c[d];let t=u[d];t=(0,a.Ku)(t);const n=o.fc(e);if(t instanceof jc)l.push(e);else{const r=zc(t,n);null!=r&&(l.push(e),h.set(e,r))}}const f=new mt(l);return new Pc(h,f,o.fieldTransforms)}function Hc(e,t,n,r=!1){return zc(n,e.A(r?4:3,t))}function zc(e,t){if(Gc(e=(0,a.Ku)(e)))return Kc("Unsupported field value:",t,e),Wc(e,t);if(e instanceof Oc)return function(e,t){if(!Lc(t.dataSource))throw t.yc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.yc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.yc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=zc(i,t.gc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return gr(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=me.fromDate(e);return{timestampValue:bi(t.serializer,n)}}if(e instanceof me){const n=new me(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:bi(t.serializer,n)}}if(e instanceof xc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Cc)return{bytesValue:Ei(t.serializer,e._byteString)};if(e instanceof mc){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.yc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Si(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Nc)return function(e,t){const n=e instanceof Nc?e.toArray():e,r={fields:{[Pt]:{stringValue:Ft},[Vt]:{arrayValue:{values:n.map(e=>{if("number"!=typeof e)throw t.yc("VectorValues must only contain numeric values.");return dr(t.serializer,e)})}}}};return{mapValue:r}}(e,t);if(Xi(e))return e._toProto(t.serializer);throw t.yc(`Unsupported field value: ${le(e)}`)}(e,t)}function Wc(e,t){const n={};return lt(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ut(e,(e,r)=>{const i=zc(r,t.dc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Gc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof me||e instanceof xc||e instanceof Cc||e instanceof mc||e instanceof Oc||e instanceof Nc||Xi(e))}function Kc(e,t,n){if(!Gc(n)||!ue(n)){const r=le(n);throw"an object"===r?t.yc(e+" a custom object"):t.yc(e+" "+r)}}function Qc(e,t,n){if((t=(0,a.Ku)(t))instanceof kc)return t._internalPath;if("string"==typeof t)return Xc(e,t);throw Jc("Field path arguments must be of type string or ",e,!1,void 0,n)}const Yc=new RegExp("[~\\*/\\[\\]]");function Xc(e,t,n){if(t.search(Yc)>=0)throw Jc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new kc(...t.split("."))._internalPath}catch(r){throw Jc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Jc(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new L(P.INVALID_ARGUMENT,a+e+c)}function Zc(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu{convertValue(e,t="none"){switch(Ut(e)){case 0:return null;case 1:return e.booleanValue;case 2:return bt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Et(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ut(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){const t=e.fields?.[Vt].arrayValue?.values?.map(e=>bt(e.doubleValue));return new Nc(t)}convertGeoPoint(e){return new xc(bt(e.latitude),bt(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=kt(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ot(e));default:return null}}convertTimestamp(e){const t=wt(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=te.fromString(e);R(Yi(n),9688,{name:e});const r=new Rt(n.get(1),n.get(3)),i=new ie(n.popFirst(5));return r.isEqual(t)||C(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends eu{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mc(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){return new $c("serverTimestamp")}const ru="@firebase/firestore",iu="4.13.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class su{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ou(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Qc("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ou extends su{data(){return super.data()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new L(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cu{}class uu extends cu{}function lu(e,t,...n){let r=[];t instanceof cu&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof du).length,n=e.filter(e=>e instanceof hu).length;if(t>1||t>0&&n>0)throw new L(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(r);for(const i of r)e=i._apply(e);return e}class hu extends uu{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new hu(e,t,n)}_apply(e){const t=this._parse(e);return vu(e._query,t),new gc(e.firestore,e.converter,qn(e._query,t))}_parse(e){const t=Vc(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new L(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){yu(o,s);const t=[];for(const n of o)t.push(mu(r,e,n));a={arrayValue:{values:t}}}else a=mu(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||yu(o,s),a=Hc(n,t,o,"in"===s||"not-in"===s);const c=dn.create(i,s,a);return c}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function fu(e,t,n){const r=t,i=Qc("where",e);return hu._create(i,r,n)}class du extends cu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new du(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:pn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)vu(n,i),n=qn(n,i)}(e._query,t),new gc(e.firestore,e.converter,qn(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class pu extends uu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new pu(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new ln(t,n);return r}(e._query,this._field,this._direction);return new gc(e.firestore,e.converter,Hn(e._query,t))}}function gu(e,t="asc"){const n=t,r=Qc("orderBy",e);return pu._create(r,n)}function mu(e,t,n){if("string"==typeof(n=(0,a.Ku)(n))){if(""===n)throw new L(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Un(t)&&-1!==n.indexOf("/"))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(te.fromString(n));if(!ie.isDocumentKey(r))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kt(e,new ie(r))}if(n instanceof mc)return Kt(e,n._key);throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${le(n)}.`)}function yu(e,t){if(!Array.isArray(e)||0===e.length)throw new L(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function vu(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function _u(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class wu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bu extends su{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Eu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Qc("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bu._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}bu._jsonSchemaVersion="firestore/documentSnapshot/1.0",bu._jsonSchema={type:fe("string",bu._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Eu extends bu{data(e={}){return super.data(e)}}class Tu{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new wu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Eu(this._firestore,this._userDataWriter,n.key,n,new wu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new Eu(e._firestore,e._userDataWriter,n.doc.key,n.doc,new wu(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Eu(e._firestore,e._userDataWriter,t.doc.key,t.doc,new wu(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Iu(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Tu._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=W.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Iu(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:e})}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Tu._jsonSchemaVersion="firestore/querySnapshot/1.0",Tu._jsonSchema={type:fe("string",Tu._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Su(e){e=he(e,mc);const t=he(e.firestore,Tc),n=Sc(t);return rc(n,e._key).then(n=>Ru(t,e,n))}function Au(e){e=he(e,gc);const t=he(e.firestore,Tc),n=Sc(t),r=new tu(t);return au(e._query),ic(n,e._query).then(n=>new Tu(t,r,e,n))}function Cu(e,t,n){e=he(e,mc);const r=he(e.firestore,Tc),i=_u(e.converter,t,n),s=Vc(r);return Nu(r,[Uc(s,"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Nr.none())])}function ku(e,t,n,...r){e=he(e,mc);const i=he(e.firestore,Tc),s=Vc(i);let o;return o="string"==typeof(t=(0,a.Ku)(t))||t instanceof kc?qc(s,"updateDoc",e._key,t,n,r):Bc(s,"updateDoc",e._key,t),Nu(i,[o.toMutation(e._key,Nr.exists(!0))])}function Ou(e){return Nu(he(e.firestore,Tc),[new Hr(e._key,Nr.none())])}function xu(e,t){const n=he(e.firestore,Tc),r=_c(e),i=_u(e.converter,t),s=Vc(e.firestore);return Nu(n,[Uc(s,"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Nr.exists(!1))]).then(()=>r)}function Nu(e,t){const n=Sc(e);return sc(n,t)}function Ru(e,t,n){const r=n.docs.get(t._key),i=new tu(e);return new bu(e,i,t._key,r,new wu(n.hasPendingWrites,n.fromCache),t.converter)}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){T(s.MF),(0,s.om)(new o.uA("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Tc(new j(e.getProvider("auth-internal")),new H(i,e.getProvider("app-check-internal")),Dt(i,n),i);return r={useFetchStreams:t,...r},s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(ru,iu,e),(0,s.KO)(ru,iu,"esm2020")}()},2261:function(e,t,n){n.d(t,{Ey:function(){return b}});n(4423),n(4114),n(8111),n(2489),n(7588),n(1701),n(8237),n(9112),n(3110),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(4603),n(7566),n(8721);var r=n(144);
/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const i="undefined"!==typeof window;let s;const o=e=>s=e,a=Symbol();var c;(function(e){e["direct"]="direct",e["patchObject"]="patch object",e["patchFunction"]="patch function"})(c||(c={}));const u=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof n.g&&n.g.global===n.g?n.g:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function l(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function h(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){m(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function f(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return t.status>=200&&t.status<=299}function d(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,detail:0,screenX:80,screenY:20,clientX:80,clientY:20,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});e.dispatchEvent(n)}}const p="object"===typeof navigator?navigator:{userAgent:""},g=(()=>/Macintosh/.test(p.userAgent)&&/AppleWebKit/.test(p.userAgent)&&!/Safari/.test(p.userAgent))(),m=i?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!g?y:"msSaveOrOpenBlob"in p?v:_:()=>{};function y(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener","string"===typeof e?(r.href=e,r.origin!==location.origin?f(r.href)?h(e,t,n):(r.target="_blank",d(r)):d(r)):(r.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){d(r)},0))}function v(e,t="download",n){if("string"===typeof e)if(f(e))h(e,t,n);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout(function(){d(t)})}else navigator.msSaveOrOpenBlob(l(e,n),t)}function _(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof e)return h(e,t,n);const i="application/octet-stream"===e.type,s=/constructor/i.test(String(u.HTMLElement))||"safari"in u,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&s||g)&&"undefined"!==typeof FileReader){const t=new FileReader;t.onloadend=function(){let e=t.result;if("string"!==typeof e)throw r=null,new Error("Wrong reader.result type");e=o?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{const t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout(function(){URL.revokeObjectURL(t)},4e4)}}const{assign:w}=Object;function b(){const e=(0,r.uY)(!0),t=e.run(()=>(0,r.KR)({}));let n=[],i=[];const s=(0,r.IG)({install(e){o(s),s._a=e,e.provide(a,s),e.config.globalProperties.$pinia=s,i.forEach(e=>n.push(e)),i=[]},use(e){return this._a?n.push(e):i.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}Symbol(),Symbol();Symbol();const{assign:E}=Object},8728:function(e,t,n){n.d(t,{aE:function(){return ft},Bt:function(){return xe}});n(4423),n(4114),n(8111),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(3110),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(1148);
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const r="undefined"!==typeof document;function i(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]||e.default&&i(e.default)}const o=Object.assign;function a(e,t){const n={};for(const r in t){const i=t[r];n[r]=u(i)?i.map(e):e(i)}return n}const c=()=>{},u=Array.isArray;function l(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const h=/#/g,f=/&/g,d=/\//g,p=/=/g,g=/\?/g,m=/\+/g,y=/%5B/g,v=/%5D/g,_=/%5E/g,w=/%60/g,b=/%7B/g,E=/%7C/g,T=/%7D/g,I=/%20/g;function S(e){return null==e?"":encodeURI(""+e).replace(E,"|").replace(y,"[").replace(v,"]")}function A(e){return S(e).replace(b,"{").replace(T,"}").replace(_,"^")}function C(e){return S(e).replace(m,"%2B").replace(I,"+").replace(h,"%23").replace(f,"%26").replace(w,"`").replace(b,"{").replace(T,"}").replace(_,"^")}function k(e){return C(e).replace(p,"%3D")}function O(e){return S(e).replace(h,"%23").replace(g,"%3F")}function x(e){return O(e).replace(d,"%2F")}function N(e){if(null==e)return null;try{return decodeURIComponent(""+e)}catch(t){}return""+e}const R=/\/$/,D=e=>e.replace(R,"");function P(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=t.slice(0,c),s=t.slice(c,a>0?a:t.length),i=e(s.slice(1))),a>=0&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=B(null!=r?r:t,n),{fullPath:r+s+o,path:r,query:i,hash:N(o)}}function L(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function F(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&V(t.matched[r],n.matched[i])&&U(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function V(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function U(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!j(e[n],t[n]))return!1;return!0}function j(e,t){return u(e)?$(e,t):u(t)?$(t,e):e?.valueOf()===t?.valueOf()}function $(e,t){return u(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function B(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let H=function(e){return e["pop"]="pop",e["push"]="push",e}({}),z=function(e){return e["back"]="back",e["forward"]="forward",e["unknown"]="",e}({});function W(e){if(!e)if(r){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),D(e)}const G=/^[^#]+#/;function K(e,t){return e.replace(G,"#")+t}function Q(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Y=()=>({left:window.scrollX,top:window.scrollY});function X(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Q(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function J(e,t){return(history.state?history.state.position-t:-1)+e}const Z=new Map;function ee(e,t){Z.set(e,t)}function te(e){const t=Z.get(e);return Z.delete(e),t}function ne(e){return"string"===typeof e||e&&"object"===typeof e}function re(e){return"string"===typeof e||"symbol"===typeof e}let ie=function(e){return e[e["MATCHER_NOT_FOUND"]=1]="MATCHER_NOT_FOUND",e[e["NAVIGATION_GUARD_REDIRECT"]=2]="NAVIGATION_GUARD_REDIRECT",e[e["NAVIGATION_ABORTED"]=4]="NAVIGATION_ABORTED",e[e["NAVIGATION_CANCELLED"]=8]="NAVIGATION_CANCELLED",e[e["NAVIGATION_DUPLICATED"]=16]="NAVIGATION_DUPLICATED",e}({});const se=Symbol("");ie.MATCHER_NOT_FOUND,ie.NAVIGATION_GUARD_REDIRECT,ie.NAVIGATION_ABORTED,ie.NAVIGATION_CANCELLED,ie.NAVIGATION_DUPLICATED;function oe(e,t){return o(new Error,{type:e,[se]:!0},t)}function ae(e,t){return e instanceof Error&&se in e&&(null==t||!!(e.type&t))}const ce=["params","query","hash"];function ue(e){if("string"===typeof e)return e;if(null!=e.path)return e.path;const t={};for(const n of ce)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function le(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(m," "),i=e.indexOf("="),s=N(i<0?e:e.slice(0,i)),o=i<0?null:N(e.slice(i+1));if(s in t){let e=t[s];u(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function he(e){let t="";for(let n in e){const r=e[n];n=k(n),null!=r?(u(r)?r.map(e=>e&&C(e)):[r&&C(r)]).forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}):void 0!==r&&(t+=(t.length?"&":"")+n)}return t}function fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=u(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}const de=Symbol(""),pe=Symbol(""),ge=Symbol(""),me=Symbol(""),ye=Symbol("");function ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function _e(e,t,n,r,i,s=e=>e()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const u=e=>{!1===e?c(oe(ie.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):ne(e)?c(oe(ie.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),a())},l=s(()=>e.call(r&&r.instances[i],t,n,u));let h=Promise.resolve(l);e.length<3&&(h=h.then(u)),h.catch(e=>c(e))})}function we(e,t,n,r,o=e=>e()){const a=[];for(const c of e){0;for(const e in c.components){let u=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if(i(u)){const i=(u.__vccOpts||u)[t];i&&a.push(_e(i,n,r,c,e,o))}else{let i=u();0,a.push(()=>i.then(i=>{if(!i)throw new Error(`Couldn't resolve component "${e}" at "${c.path}"`);const a=s(i)?i.default:i;c.mods[e]=i,c.components[e]=a;const u=(a.__vccOpts||a)[t];return u&&_e(u,n,r,c,e,o)()}))}}}return a}function be(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>V(e,s))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>V(e,a))||i.push(a))}return[n,r,i]}var Ee=n(6768),Te=n(144);
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Ie=()=>location.protocol+"//"+location.host;function Se(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),M(n,"")}return M(n,e)+r+i}function Ae(e,t,n,r){let i=[],s=[],a=null;const c=({state:s})=>{const o=Se(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=o,t.value=s,a&&a===c)return void(a=null);l=u?s.position-u.position:0}else r(o);i.forEach(e=>{e(n.value,c,{delta:l,type:H.pop,direction:l?l>0?z.forward:z.back:z.unknown})})};function u(){a=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){if("hidden"===document.visibilityState){const{history:e}=window;if(!e.state)return;e.replaceState(o({},e.state,{scroll:Y()}),"")}}function f(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:u,listen:l,destroy:f}}function Ce(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Y():null}}function ke(e){const{history:t,location:n}=window,r={value:Se(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:Ie()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function a(e,n){s(e,o({},t.state,Ce(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function c(e,n){const a=o({},i.value,t.state,{forward:e,scroll:Y()});s(a.current,a,!0),s(e,o({},Ce(r.value,e,null),{position:a.position+1},n),!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:a}}function Oe(e){e=W(e);const t=ke(e),n=Ae(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=o({location:"",base:e,go:r,createHref:K.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function xe(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Oe(e)}let Ne=function(e){return e[e["Static"]=0]="Static",e[e["Param"]=1]="Param",e[e["Group"]=2]="Group",e}({});var Re=function(e){return e[e["Static"]=0]="Static",e[e["Param"]=1]="Param",e[e["ParamRegExp"]=2]="ParamRegExp",e[e["ParamRegExpEnd"]=3]="ParamRegExpEnd",e[e["EscapeNext"]=4]="EscapeNext",e}(Re||{});const De={type:Ne.Static,value:""},Pe=/[a-zA-Z0-9_]/;function Le(e){if(!e)return[[]];if("/"===e)return[[De]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=Re.Static,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(n===Re.Static?s.push({type:Ne.Static,value:u}):n===Re.Param||n===Re.ParamRegExp||n===Re.ParamRegExpEnd?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Ne.Param,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||n===Re.ParamRegExp)switch(n){case Re.Static:"/"===a?(u&&h(),o()):":"===a?(h(),n=Re.Param):f();break;case Re.EscapeNext:f(),n=r;break;case Re.Param:"("===a?n=Re.ParamRegExp:Pe.test(a)?f():(h(),n=Re.Static,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case Re.ParamRegExp:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=Re.ParamRegExpEnd:l+=a;break;case Re.ParamRegExpEnd:h(),n=Re.Static,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=Re.EscapeNext;return n===Re.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}const Me="[^/]+?",Fe={sensitive:!1,strict:!1,start:!0,end:!0};var Ve=function(e){return e[e["_multiplier"]=10]="_multiplier",e[e["Root"]=90]="Root",e[e["Segment"]=40]="Segment",e[e["SubSegment"]=30]="SubSegment",e[e["Static"]=40]="Static",e[e["Dynamic"]=20]="Dynamic",e[e["BonusCustomRegExp"]=10]="BonusCustomRegExp",e[e["BonusWildcard"]=-50]="BonusWildcard",e[e["BonusRepeatable"]=-20]="BonusRepeatable",e[e["BonusOptional"]=-8]="BonusOptional",e[e["BonusStrict"]=.7000000000000001]="BonusStrict",e[e["BonusCaseSensitive"]=.25]="BonusCaseSensitive",e}(Ve||{});const Ue=/[.+*?^${}()[\]/\\]/g;function je(e,t){const n=o({},Fe,t),r=[];let i=n.start?"^":"";const s=[];for(const o of e){const e=o.length?[]:[Ve.Root];n.strict&&!o.length&&(i+="/");for(let t=0;t<o.length;t++){const r=o[t];let a=Ve.Segment+(n.sensitive?Ve.BonusCaseSensitive:0);if(r.type===Ne.Static)t||(i+="/"),i+=r.value.replace(Ue,"\\$&"),a+=Ve.Static;else if(r.type===Ne.Param){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||Me;l!==Me&&(a+=Ve.BonusCustomRegExp);let h=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(h=c&&o.length<2?`(?:/${h})`:"/"+h),c&&(h+="?"),i+=h,a+=Ve.Dynamic,c&&(a+=Ve.BonusOptional),n&&(a+=Ve.BonusRepeatable),".*"===l&&(a+=Ve.BonusWildcard)}e.push(a)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=Ve.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(a),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(e.type===Ne.Static)n+=e.value;else if(e.type===Ne.Param){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(u(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:a,score:r,keys:s,parse:c,stringify:l}}function $e(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&e[0]===Ve.Static+Ve.Segment?-1:1:e.length>t.length?1===t.length&&t[0]===Ve.Static+Ve.Segment?1:-1:0}function Be(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=$e(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(qe(r))return 1;if(qe(i))return-1}return i.length-r.length}function qe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const He={strict:!1,end:!0,sensitive:!1};function ze(e,t,n){const r=je(Le(e.path),n);const i=o(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function We(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,u=Ke(e);u.aliasOf=r&&r.record;const f=l(t,e),d=[u];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(Ke(o({},u,{components:r?r.record.components:u.components,path:e,aliasOf:r?r.record:u})))}let p,g;for(const t of d){const{path:o}=t;if(n&&"/"!==o[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(o&&r+o)}if(p=ze(t,n,f),r?r.alias.push(p):(g=g||p,g!==p&&g.alias.push(p),i&&e.name&&!Ye(p)&&a(e.name)),et(p)&&h(p),u.children){const e=u.children;for(let t=0;t<e.length;t++)s(e[t],p,r&&r.children[t])}r=r||p}return g?()=>{a(g)}:c}function a(e){if(re(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function u(){return n}function h(e){const t=Je(e,n);n.splice(t,0,e),e.record.name&&!Ye(e)&&r.set(e.record.name,e)}function f(e,t){let i,s,a,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw oe(ie.MATCHER_NOT_FOUND,{location:e});0,a=i.record.name,c=o(Ge(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Ge(e.params,i.keys.map(e=>e.name))),s=i.stringify(c)}else if(null!=e.path)s=e.path,i=n.find(e=>e.re.test(s)),i&&(c=i.parse(s),a=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw oe(ie.MATCHER_NOT_FOUND,{location:e,currentLocation:t});a=i.record.name,c=o({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:a,path:s,params:c,matched:u,meta:Xe(u)}}function d(){n.length=0,r.clear()}return t=l(He,t),e.forEach(e=>s(e)),{addRoute:s,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:u,getRecordMatcher:i}}function Ge(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ke(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Qe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Qe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Ye(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Xe(e){return e.reduce((e,t)=>o(e,t.meta),{})}function Je(e,t){let n=0,r=t.length;while(n!==r){const i=n+r>>1;Be(e,t[i])<0?r=i:n=i+1}const i=Ze(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Ze(e){let t=e;while(t=t.parent)if(et(t)&&0===Be(e,t))return t}function et({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function tt(e){const t=(0,Ee.WQ)(ge),n=(0,Ee.WQ)(me);const r=(0,Ee.EW)(()=>{const n=(0,Te.R1)(e.to);return t.resolve(n)}),i=(0,Ee.EW)(()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(V.bind(null,i));if(o>-1)return o;const a=at(e[t-2]);return t>1&&at(i)===a&&s[s.length-1].path!==a?s.findIndex(V.bind(null,e[t-2])):o}),s=(0,Ee.EW)(()=>i.value>-1&&ot(n.params,r.value.params)),o=(0,Ee.EW)(()=>i.value>-1&&i.value===n.matched.length-1&&U(n.params,r.value.params));function a(n={}){if(st(n)){const n=t[(0,Te.R1)(e.replace)?"replace":"push"]((0,Te.R1)(e.to)).catch(c);return e.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:(0,Ee.EW)(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}function nt(e){return 1===e.length?e[0]:e}const rt=(0,Ee.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:tt,setup(e,{slots:t}){const n=(0,Te.Kh)(tt(e)),{options:r}=(0,Ee.WQ)(ge),i=(0,Ee.EW)(()=>({[ct(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ct(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&nt(t.default(n));return e.custom?r:(0,Ee.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),it=rt;function st(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ot(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function at(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ct=(e,t,n)=>null!=e?e:null!=t?t:n,ut=(0,Ee.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=(0,Ee.WQ)(ye),i=(0,Ee.EW)(()=>e.route||r.value),s=(0,Ee.WQ)(pe,0),a=(0,Ee.EW)(()=>{let e=(0,Te.R1)(s);const{matched:t}=i.value;let n;while((n=t[e])&&!n.components)e++;return e}),c=(0,Ee.EW)(()=>i.value.matched[a.value]);(0,Ee.Gt)(pe,(0,Ee.EW)(()=>a.value+1)),(0,Ee.Gt)(de,c),(0,Ee.Gt)(ye,i);const u=(0,Te.KR)();return(0,Ee.wB)(()=>[u.value,c.value,e.name],([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&V(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const r=i.value,s=e.name,a=c.value,l=a&&a.components[s];if(!l)return lt(n.default,{Component:l,route:r});const h=a.props[s],f=h?!0===h?r.params:"function"===typeof h?h(r):h:null,d=e=>{e.component.isUnmounted&&(a.instances[s]=null)},p=(0,Ee.h)(l,o({},f,t,{onVnodeUnmounted:d,ref:u}));return lt(n.default,{Component:p,route:r})||p}}});function lt(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const ht=ut;function ft(e){const t=We(e.routes,e),n=e.parseQuery||le,i=e.stringifyQuery||he,s=e.history;const l=ve(),h=ve(),f=ve(),d=(0,Te.IJ)(q);let p=q;r&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=a.bind(null,e=>""+e),m=a.bind(null,x),y=a.bind(null,N);function v(e,n){let r,i;return re(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function _(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function w(){return t.getRoutes().map(e=>e.record)}function b(e){return!!t.getRecordMatcher(e)}function E(e,r){if(r=o({},r||d.value),"string"===typeof e){const i=P(n,e,r.path),a=t.resolve({path:i.path},r),c=s.createHref(i.fullPath);return o(i,a,{params:y(a.params),hash:N(i.hash),redirectedFrom:void 0,href:c})}let a;if(null!=e.path)a=o({},e,{path:P(n,e.path,r.path).path});else{const t=o({},e.params);for(const e in t)null==t[e]&&delete t[e];a=o({},e,{params:m(t)}),r.params=m(r.params)}const c=t.resolve(a,r),u=e.hash||"";c.params=g(y(c.params));const l=L(i,o({},e,{hash:A(u),path:c.path})),h=s.createHref(l);return o({fullPath:l,hash:u,query:i===he?fe(e.query):e.query||{}},c,{redirectedFrom:void 0,href:h})}function T(e){return"string"===typeof e?P(n,e,d.value.path):o({},e)}function I(e,t){if(p!==e)return oe(ie.NAVIGATION_CANCELLED,{from:t,to:e})}function S(e){return O(e)}function C(e){return S(o(T(e),{replace:!0}))}function k(e,t){const n=e.matched[e.matched.length-1];if(n&&n.redirect){const{redirect:r}=n;let i="function"===typeof r?r(e,t):r;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=T(i):{path:i},i.params={}),o({query:e.query,hash:e.hash,params:null!=i.path?{}:e.params},i)}}function O(e,t){const n=p=E(e),r=d.value,s=e.state,a=e.force,c=!0===e.replace,u=k(n,r);if(u)return O(o(T(u),{state:"object"===typeof u?o({},s,u.state):s,force:a,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!a&&F(i,r,n)&&(h=oe(ie.NAVIGATION_DUPLICATED,{to:l,from:r}),Z(r,r,!0,!1)),(h?Promise.resolve(h):M(l,r)).catch(e=>ae(e)?ae(e,ie.NAVIGATION_GUARD_REDIRECT)?e:Q(e):G(e,l,r)).then(e=>{if(e){if(ae(e,ie.NAVIGATION_GUARD_REDIRECT))return O(o({replace:c},T(e.to),{state:"object"===typeof e.to?o({},s,e.to.state):s,force:a}),t||l)}else e=U(l,r,!0,c,s);return V(l,r,e),e})}function R(e,t){const n=I(e,t);return n?Promise.reject(n):Promise.resolve()}function D(e){const t=ce.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function M(e,t){let n;const[r,i,s]=be(e,t);n=we(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach(r=>{n.push(_e(r,e,t))});const o=R.bind(null,e,t);return n.push(o),de(n).then(()=>{n=[];for(const r of l.list())n.push(_e(r,e,t));return n.push(o),de(n)}).then(()=>{n=we(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(_e(r,e,t))});return n.push(o),de(n)}).then(()=>{n=[];for(const r of s)if(r.beforeEnter)if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push(_e(i,e,t));else n.push(_e(r.beforeEnter,e,t));return n.push(o),de(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=we(s,"beforeRouteEnter",e,t,D),n.push(o),de(n))).then(()=>{n=[];for(const r of h.list())n.push(_e(r,e,t));return n.push(o),de(n)}).catch(e=>ae(e,ie.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function V(e,t,n){f.list().forEach(r=>D(()=>r(e,t,n)))}function U(e,t,n,i,a){const c=I(e,t);if(c)return c;const u=t===q,l=r?history.state:{};n&&(i||u?s.replace(e.fullPath,o({scroll:u&&l&&l.scroll},a)):s.push(e.fullPath,a)),d.value=e,Z(e,t,n,u),Q()}let j;function $(){j||(j=s.listen((e,t,n)=>{if(!ue.listening)return;const i=E(e),a=k(i,ue.currentRoute.value);if(a)return void O(o(a,{replace:!0,force:!0}),i).catch(c);p=i;const u=d.value;r&&ee(J(u.fullPath,n.delta),Y()),M(i,u).catch(e=>ae(e,ie.NAVIGATION_ABORTED|ie.NAVIGATION_CANCELLED)?e:ae(e,ie.NAVIGATION_GUARD_REDIRECT)?(O(o(T(e.to),{force:!0}),i).then(e=>{ae(e,ie.NAVIGATION_ABORTED|ie.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===H.pop&&s.go(-1,!1)}).catch(c),Promise.reject()):(n.delta&&s.go(-n.delta,!1),G(e,i,u))).then(e=>{e=e||U(i,u,!1),e&&(n.delta&&!ae(e,ie.NAVIGATION_CANCELLED)?s.go(-n.delta,!1):n.type===H.pop&&ae(e,ie.NAVIGATION_ABORTED|ie.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),V(i,u,e)}).catch(c)}))}let B,z=ve(),W=ve();function G(e,t,n){Q(e);const r=W.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function K(){return B&&d.value!==q?Promise.resolve():new Promise((e,t)=>{z.add([e,t])})}function Q(e){return B||(B=!e,$(),z.list().forEach(([t,n])=>e?n(e):t()),z.reset()),e}function Z(t,n,i,s){const{scrollBehavior:o}=e;if(!r||!o)return Promise.resolve();const a=!i&&te(J(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,Ee.dY)().then(()=>o(t,n,a)).then(e=>e&&X(e)).catch(e=>G(e,t,n))}const ne=e=>s.go(e);let se;const ce=new Set,ue={currentRoute:d,listening:!0,addRoute:v,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:b,getRoutes:w,resolve:E,options:e,push:S,replace:C,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:l.add,beforeResolve:h.add,afterEach:f.add,onError:W.add,isReady:K,install(e){e.component("RouterLink",it),e.component("RouterView",ht),e.config.globalProperties.$router=ue,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,Te.R1)(d)}),r&&!se&&d.value===q&&(se=!0,S(s.location).catch(e=>{0}));const t={};for(const r in q)Object.defineProperty(t,r,{get:()=>d.value[r],enumerable:!0});e.provide(ge,ue),e.provide(me,(0,Te.Gc)(t)),e.provide(ye,d);const n=e.unmount;ce.add(e),e.unmount=function(){ce.delete(e),ce.size<1&&(p=q,j&&j(),j=null,d.value=q,se=!1,B=!1),n()}}};function de(e){return e.reduce((e,t)=>e.then(()=>D(t)),Promise.resolve())}return ue}}}]);
//# sourceMappingURL=chunk-vendors.2fff9e43.js.map