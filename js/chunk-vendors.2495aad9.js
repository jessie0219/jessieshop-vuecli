"use strict";(self["webpackChunkjessieshop_vue"]=self["webpackChunkjessieshop_vue"]||[]).push([[998],{262:function(e,t,n){n.d(t,{Bj:function(){return s},Fl:function(){return He},IU:function(){return Ce},Jd:function(){return k},PG:function(){return Te},SU:function(){return Fe},Um:function(){return we},WL:function(){return $e},X$:function(){return O},X3:function(){return Oe},XI:function(){return De},Xl:function(){return Re},dq:function(){return xe},iH:function(){return Me},j:function(){return E},lk:function(){return T},qj:function(){return be},qq:function(){return _},yT:function(){return Se}});var r=n(577);let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,l=e=>(e.n&p)>0,u=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const v=Symbol(""),y=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=w;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,w=!0,p=1<<++f,f<=m?u(this):b(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,w=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let w=!0;const I=[];function k(){I.push(w),w=!1}function T(){const e=I.pop();w=void 0===e||e}function E(e,t,n){if(w&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;S(r,i)}}function S(e,t){let n=!1;f<=m?l(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function O(e,t,n,i,s,o){const c=d.get(e);if(!c)return;let l=[];if("clear"===t)l=[...c.values()];else if("length"===n&&(0,r.kJ)(e))c.forEach(((e,t)=>{("length"===t||t>=i)&&l.push(e)}));else switch(void 0!==n&&l.push(c.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(c.get("length")):(l.push(c.get(v)),(0,r._N)(e)&&l.push(c.get(y)));break;case"delete":(0,r.kJ)(e)||(l.push(c.get(v)),(0,r._N)(e)&&l.push(c.get(y)));break;case"set":(0,r._N)(e)&&l.push(c.get(v));break}if(1===l.length)l[0]&&C(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);C(a(e))}}function C(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&R(r,t);for(const r of n)r.computed||R(r,t)}function R(e,t){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const A=(0,r.fY)("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),N=U(),L=U(!1,!0),x=U(!0),M=D();function D(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,i=this.length;t<i;t++)E(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ce)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){k();const n=Ce(this)[t].apply(this,e);return T(),n}})),e}function U(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ve:ge:t?me:pe).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(M,i))return Reflect.get(M,i,s);const a=Reflect.get(n,i,s);return((0,r.yk)(i)?P.has(i):A(i))?a:(e||E(n,"get",i),t?a:xe(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ie(a):be(a):a)}}const j=V(),F=V(!0);function V(e=!1){return function(t,n,i,s){let o=t[n];if(Ee(o)&&xe(o)&&!xe(i))return!1;if(!e&&!Ee(i)&&(Se(i)||(i=Ce(i),o=Ce(o)),!(0,r.kJ)(t)&&xe(o)&&!xe(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Ce(s)&&(a?(0,r.aU)(i,o)&&O(t,"set",n,i,o):O(t,"add",n,i)),c}}function $(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&O(e,"delete",t,void 0,i),s}function B(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&P.has(t)||E(e,"has",t),n}function H(e){return E(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const W={get:N,set:j,deleteProperty:$,has:B,ownKeys:H},J={get:x,set(e,t){return!0},deleteProperty(e,t){return!0}},G=(0,r.l7)({},W,{get:L,set:F}),q=e=>e,z=e=>Reflect.getPrototypeOf(e);function K(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ce(e),s=Ce(t);n||(t!==s&&E(i,"get",t),E(i,"get",s));const{has:o}=z(i),a=r?q:n?Pe:Ae;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Ce(n),i=Ce(e);return t||(e!==i&&E(r,"has",e),E(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Y(e,t=!1){return e=e["__v_raw"],!t&&E(Ce(e),"iterate",v),Reflect.get(e,"size",e)}function Z(e){e=Ce(e);const t=Ce(this),n=z(t),r=n.has.call(t,e);return r||(t.add(e),O(t,"add",e,e)),this}function Q(e,t){t=Ce(t);const n=Ce(this),{has:i,get:s}=z(n);let o=i.call(n,e);o||(e=Ce(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&O(n,"set",e,t,a):O(n,"add",e,t),this}function ee(e){const t=Ce(this),{has:n,get:r}=z(t);let i=n.call(t,e);i||(e=Ce(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&O(t,"delete",e,void 0,s),o}function te(){const e=Ce(this),t=0!==e.size,n=void 0,r=e.clear();return t&&O(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ce(s),a=t?q:e?Pe:Ae;return!e&&E(o,"iterate",v),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function re(e,t,n){return function(...i){const s=this["__v_raw"],o=Ce(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),h=n?q:t?Pe:Ae;return!t&&E(o,"iterate",l?y:v),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function se(){const e={get(e){return K(this,e)},get size(){return Y(this)},has:X,add:Z,set:Q,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return K(this,e,!1,!0)},get size(){return Y(this)},has:X,add:Z,set:Q,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return K(this,e,!0)},get size(){return Y(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return K(this,e,!0,!0)},get size(){return Y(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[oe,ae,ce,le]=se();function ue(e,t){const n=t?e?le:ce:e?ae:oe;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const he={get:ue(!1,!1)},de={get:ue(!1,!0)},fe={get:ue(!0,!1)};const pe=new WeakMap,me=new WeakMap,ge=new WeakMap,ve=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _e(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,r.W7)(e))}function be(e){return Ee(e)?e:ke(e,!1,W,he,pe)}function we(e){return ke(e,!1,G,de,me)}function Ie(e){return ke(e,!0,J,fe,ge)}function ke(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=_e(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Te(e){return Ee(e)?Te(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ee(e){return!(!e||!e["__v_isReadonly"])}function Se(e){return!(!e||!e["__v_isShallow"])}function Oe(e){return Te(e)||Ee(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function Re(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ae=e=>(0,r.Kn)(e)?be(e):e,Pe=e=>(0,r.Kn)(e)?Ie(e):e;function Ne(e){w&&g&&(e=Ce(e),S(e.dep||(e.dep=a())))}function Le(e,t){e=Ce(e),e.dep&&C(e.dep)}function xe(e){return!(!e||!0!==e.__v_isRef)}function Me(e){return Ue(e,!1)}function De(e){return Ue(e,!0)}function Ue(e,t){return xe(e)?e:new je(e,t)}class je{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ce(e),this._value=t?e:Ae(e)}get value(){return Ne(this),this._value}set value(e){e=this.__v_isShallow?e:Ce(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ae(e),Le(this,e))}}function Fe(e){return xe(e)?e.value:e}const Ve={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function $e(e){return Te(e)?e:new Proxy(e,Ve)}class Be{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ce(this);return Ne(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function He(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new Be(i,s,o||!s,n);return a}},252:function(e,t,n){n.d(t,{$d:function(){return o},FN:function(){return gn},Fl:function(){return Nn},HY:function(){return xt},JJ:function(){return K},Ko:function(){return Be},LL:function(){return Fe},P$:function(){return oe},Q6:function(){return de},U2:function(){return ce},Uk:function(){return rn},Us:function(){return Ct},Wm:function(){return Qt},Y3:function(){return I},Y8:function(){return re},YP:function(){return Z},_:function(){return Zt},aZ:function(){return fe},f3:function(){return X},h:function(){return Ln},iD:function(){return Jt},ic:function(){return Ce},j4:function(){return Gt},kq:function(){return on},nK:function(){return he},uE:function(){return sn},up:function(){return Ue},w5:function(){return V},wg:function(){return Vt}});var r=n(262),i=n(577);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=[];let v=null,y=0;const _=Promise.resolve();let b=null,w=null;function I(e){const t=b||_;return e?t.then(this?e.bind(this):e):t}function k(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=N(h[r]);i<e?t=r+1:n=r}return t}function T(e){h.length&&h.includes(e,l&&e.allowRecurse?d+1:d)||e===w||(null==e.id?h.push(e):h.splice(k(e.id),0,e),E())}function E(){l||u||(u=!0,b=_.then(L))}function S(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function O(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),E()}function C(e){O(e,p,f,m)}function R(e){O(e,v,g,y)}function A(e,t=null){if(f.length){for(w=t,p=[...new Set(f)],f.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,w=null,A(e,t)}}function P(e){if(A(),g.length){const e=[...new Set(g)];if(g.length=0,v)return void v.push(...e);for(v=e,v.sort(((e,t)=>N(e)-N(t))),y=0;y<v.length;y++)v[y]();v=null,y=0}}const N=e=>null==e.id?1/0:e.id;function L(e){u=!1,l=!0,A(e),h.sort(((e,t)=>N(e)-N(t)));i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,P(e),l=!1,b=null,(h.length||f.length||g.length)&&L(e)}}new Set;new Map;function x(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>e.trim()))),t&&(s=n.map(i.He))}let l;let u=r[l=(0,i.hR)(t)]||r[l=(0,i.hR)((0,i._A)(t))];!u&&a&&(u=r[l=(0,i.hR)((0,i.rs)(t))]),u&&o(u,e,6,s);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(h,e,6,s)}}function M(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=M(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),r.set(e,a),a):(r.set(e,null),null)}function D(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let U=null,j=null;function F(e){const t=U;return U=e,j=e&&e.type.__scopeId||null,t}function V(e,t=U,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ht(-1);const i=F(t),s=e(...n);return F(i),r._d&&Ht(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function $(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:l,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let y,_;const b=F(e);try{if(4&n.shapeFlag){const e=s||r;y=an(d.call(e,e,f,o,m,p,g)),_=u}else{const e=t;0,y=an(e.length>1?e(o,{attrs:u,slots:l,emit:h}):e(o,null)),_=t.props?u:B(u)}}catch(I){jt.length=0,a(I,e,1),y=Qt(Dt)}let w=y;if(_&&!1!==v){const e=Object.keys(_),{shapeFlag:t}=w;e.length&&7&t&&(c&&e.some(i.tR)&&(_=H(_,c)),w=nn(w,_))}return n.dirs&&(w=nn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,F(b),y}const B=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},H=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function W(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||J(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?J(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!D(l,n))return!0}}return!1}function J(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!D(n,s))return!0}return!1}function G({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const q=e=>e.__isSuspense;function z(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):R(e)}function K(e,t){if(mn){let n=mn.provides;const r=mn.parent&&mn.parent.provides;r===n&&(n=mn.provides=Object.create(r)),n[e]=t}else 0}function X(e,t,n=!1){const r=mn||U;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const Y={};function Z(e,t,n){return Q(e,t,n)}function Q(e,t,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=i.kT){const h=mn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ne(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[g])}:i.dG,t&&a){const e=d;d=()=>ne(e())}let g=e=>{f=b.onStop=()=>{s(e,h,4)}};if(In)return g=i.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,g]):d(),i.dG;let v=m?[]:Y;const y=()=>{if(b.active)if(t){const e=b.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,v[t]))):(0,i.aU)(e,v)))&&(f&&f(),o(t,h,3,[e,v===Y?void 0:v,g]),v=e)}else b.run()};let _;y.allowRecurse=!!t,_="sync"===c?y:"post"===c?()=>Ot(y,h&&h.suspense):()=>C(y);const b=new r.qq(d,_);return t?n?y():v=b.run():"post"===c?Ot(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,b)}}function ee(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?te(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=mn;vn(this);const c=Q(s,o.bind(r),n);return a?vn(a):yn(),c}function te(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ne(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ne(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ne(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ne(e,t)}));else if((0,i.PO)(e))for(const n in e)ne(e[n],t);return e}function re(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Se((()=>{e.isMounted=!0})),Re((()=>{e.isUnmounting=!0})),e}const ie=[Function,Array],se={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ie,onEnter:ie,onAfterEnter:ie,onEnterCancelled:ie,onBeforeLeave:ie,onLeave:ie,onAfterLeave:ie,onLeaveCancelled:ie,onBeforeAppear:ie,onAppear:ie,onAfterAppear:ie,onAppearCancelled:ie},setup(e,{slots:t}){const n=gn(),i=re();let s;return()=>{const o=t.default&&de(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Dt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:l}=c;if(i.isLeaving)return le(a);const u=ue(a);if(!u)return le(a);const h=ce(u,c,i,n);he(u,h);const d=n.subTree,f=d&&ue(d);let p=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Dt&&(!zt(u,f)||p)){const e=ce(f,c,i,n);if(he(f,e),"out-in"===l)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},le(a);"in-out"===l&&u.type!==Dt&&(e.delayLeave=(e,t,n)=>{const r=ae(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},oe=se;function ae(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ce(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:b}=t,w=String(e.key),I=ae(n,e),k=(e,t)=>{e&&o(e,r,9,t)},T=(e,t)=>{const n=t[1];k(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},E={mode:a,persisted:c,beforeEnter(t){let r=l;if(!n.isMounted){if(!s)return;r=v||l}t._leaveCb&&t._leaveCb(!0);const i=I[w];i&&zt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),k(r,[t])},enter(e){let t=u,r=h,i=d;if(!n.isMounted){if(!s)return;t=y||u,r=_||h,i=b||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,k(t?i:r,[e]),E.delayedLeave&&E.delayedLeave(),e._enterCb=void 0)};t?T(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();k(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),k(n?g:m,[t]),t._leaveCb=void 0,I[i]===e&&delete I[i])};I[i]=e,p?T(p,[t,o]):o()},clone(e){return ce(e,t,n,r)}};return E}function le(e){if(me(e))return e=nn(e),e.children=null,e}function ue(e){return me(e)?e.children?e.children[0]:void 0:e}function he(e,t){6&e.shapeFlag&&e.component?he(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function de(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===xt?(128&o.patchFlag&&i++,r=r.concat(de(o.children,t,a))):(t||o.type!==Dt)&&r.push(null!=a?nn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function fe(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const pe=e=>!!e.type.__asyncLoader;const me=e=>e.type.__isKeepAlive;RegExp,RegExp;function ge(e,t){return(0,i.kJ)(e)?e.some((e=>ge(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function ve(e,t){_e(e,"a",t)}function ye(e,t){_e(e,"da",t)}function _e(e,t,n=mn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ke(t,r,n),n){let e=n.parent;while(e&&e.parent)me(e.parent.vnode)&&be(r,t,n,e),e=e.parent}}function be(e,t,n,r){const s=ke(t,e,r,!0);Ae((()=>{(0,i.Od)(r[t],s)}),n)}function we(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ie(e){return 128&e.shapeFlag?e.ssContent:e}function ke(e,t,n=mn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),vn(n);const s=o(t,n,e,i);return yn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Te=e=>(t,n=mn)=>(!In||"sp"===e)&&ke(e,t,n),Ee=Te("bm"),Se=Te("m"),Oe=Te("bu"),Ce=Te("u"),Re=Te("bum"),Ae=Te("um"),Pe=Te("sp"),Ne=Te("rtg"),Le=Te("rtc");function xe(e,t=mn){ke("ec",e,t)}function Me(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.Jd)(),o(u,n,8,[e.el,l,e,t]),(0,r.lk)())}}const De="components";function Ue(e,t){return Ve(De,e,!0,t)||e}const je=Symbol();function Fe(e){return(0,i.HD)(e)?Ve(De,e,!1)||e:e||je}function Ve(e,t,n=!0,r=!1){const s=U||mn;if(s){const n=s.type;if(e===De){const e=An(n);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=$e(s[e]||n[e],t)||$e(s.appContext[e],t);return!o&&r?n:o}}function $e(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Be(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const He=e=>e?_n(e)?Rn(e)||e.proxy:He(e.parent):null,We=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>He(e.parent),$root:e=>He(e.root),$emit:e=>e.emit,$options:e=>Ye(e),$forceUpdate:e=>e.f||(e.f=()=>T(e.update)),$nextTick:e=>e.n||(e.n=I.bind(e.proxy)),$watch:e=>ee.bind(e)}),Je={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Ge&&(c[t]=0)}}const d=We[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i.kT&&(0,i.RI)(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(We,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ge=!0;function qe(e){const t=Ye(e),n=e.proxy,s=e.ctx;Ge=!1,t.beforeCreate&&Ke(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:I,render:k,renderTracked:T,renderTriggered:E,errorCaptured:S,serverPrefetch:O,expose:C,inheritAttrs:R,components:A,directives:P,filters:N}=t,L=null;if(h&&ze(h,s,L,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Ge=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Nn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)Xe(l[r],s,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{K(t,e[t])}))}function x(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ke(d,e,"c"),x(Ee,f),x(Se,p),x(Oe,m),x(Ce,g),x(ve,v),x(ye,y),x(xe,S),x(Le,T),x(Ne,E),x(Re,b),x(Ae,I),x(Pe,O),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});k&&e.render===i.dG&&(e.render=k),null!=R&&(e.inheritAttrs=R),A&&(e.components=A),P&&(e.directives=P)}function ze(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=nt(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?X(n.from||o,n.default,!0):X(n.from||o):X(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Ke(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Xe(e,t,n,r){const s=r.includes(".")?te(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&Z(s,n)}else if((0,i.mf)(e))Z(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Xe(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&Z(s,r,e)}else 0}function Ye(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>Ze(c,e,o,!0))),Ze(c,t,o)):c=t,s.set(t,c),c}function Ze(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Ze(e,s,n,!0),i&&i.forEach((t=>Ze(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Qe[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Qe={data:et,props:it,emits:it,methods:it,computed:it,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:it,directives:it,watch:st,provide:et,inject:tt};function et(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function tt(e,t){return it(nt(e),nt(t))}function nt(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function rt(e,t){return e?[...new Set([].concat(e,t))]:t}function it(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function st(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=rt(e[r],t[r]);return n}function ot(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Kt,1),e.propsDefaults=Object.create(null),ct(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function at(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ct(e,t,o,a)&&(h=!0);for(const s in l)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=lt(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(D(e.emitsOptions,s))continue;const c=t[s];if(u)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=lt(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function ct(e,t,n,s){const[o,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const u=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:D(e.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,l=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=lt(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return l}function lt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(vn(s),r=i[n]=e.call(null,t),yn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ut(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,i.mf)(e)){const r=e=>{l=!0;const[n,r]=ut(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);ht(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(ht(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=pt(Boolean,r.type),n=pt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const u=[a,c];return r.set(e,u),u}function ht(e){return"$"!==e[0]}function dt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function ft(e,t){return dt(e)===dt(t)}function pt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>ft(t,e))):(0,i.mf)(t)&&ft(t,e)?0:-1}const mt=e=>"_"===e[0]||"$stable"===e,gt=e=>(0,i.kJ)(e)?e.map(an):[an(e)],vt=(e,t,n)=>{if(t._n)return t;const r=V(((...e)=>gt(t(...e))),n);return r._c=!1,r},yt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(mt(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=vt(s,n,r);else if(null!=n){0;const e=gt(n);t[s]=()=>e}}},_t=(e,t)=>{const n=gt(t);e.slots.default=()=>n},bt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):yt(t,e.slots={})}else e.slots={},t&&_t(e,t);(0,i.Nj)(e.slots,Kt,1)},wt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,yt(t,s)),a=t}else t&&(_t(e,t),a={default:1});if(o)for(const i in s)mt(i)||i in a||delete s[i]};function It(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kt=0;function Tt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=It(),o=new Set;let a=!1;const c=s.app={_uid:kt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:xn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,l){if(!a){0;const u=Qt(n,r);return u.appContext=s,o&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,Rn(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function Et(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Et(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(pe(o)&&!a)return;const c=4&o.shapeFlag?Rn(o.component)||o.component.proxy:o.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,u,12,[l,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const s=()=>{if(e.f){const n=t?f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=l,(0,i.RI)(p,h)&&(p[h]=l)):(0,r.dq)(h)&&(h.value=l,e.k&&(f[e.k]=l))};l?(s.id=-1,Ot(s,n)):s()}else 0}}function St(){}const Ot=z;function Ct(e){return Rt(e)}function Rt(e,t){St();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,cloneNode:g,insertStaticContent:v}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!zt(e,t)&&(r=Q(e),z(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Mt:_(e,t,n,r);break;case Dt:b(e,t,n,r);break;case Ut:null==e&&w(t,n,r,o);break;case xt:M(e,t,n,r,i,s,o,a,c);break;default:1&h?E(e,t,n,r,i,s,o,a,c):6&h?D(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,te)}null!=u&&i&&Et(u,e&&e.ref,s,t||e,!t)},_=(e,t,n,r)=>{if(null==e)s(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},E=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?O(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},O=(e,t,n,r,o,l,u,h)=>{let f,p;const{type:m,props:v,shapeFlag:y,transition:_,patchFlag:b,dirs:w}=e;if(e.el&&void 0!==g&&-1===b)f=e.el=g(e.el);else{if(f=e.el=c(e.type,l,v&&v.is,v),8&y?d(f,e.children):16&y&&R(e.children,f,null,r,o,l&&"foreignObject"!==m,u,h),w&&Me(e,null,r,"created"),v){for(const t in v)"value"===t||(0,i.Gg)(t)||a(f,t,null,v[t],l,e.children,r,o,Z);"value"in v&&a(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&hn(p,r,e)}C(f,e,e.scopeId,u,r)}w&&Me(e,null,r,"beforeMount");const I=(!o||o&&!o.pendingBranch)&&_&&!_.persisted;I&&_.beforeEnter(f),s(f,t,n),((p=v&&v.onVnodeMounted)||I||w)&&Ot((()=>{p&&hn(p,r,e),I&&_.enter(f),w&&Me(e,null,r,"mounted")}),o)},C=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?cn(e[l]):an(e[l]);y(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&At(n,!1),(g=m.onVnodeBeforeUpdate)&&hn(g,n,t,e),f&&Me(t,e,n,"beforeUpdate"),n&&At(n,!0);const v=s&&"foreignObject"!==t.type;if(h?L(e.dynamicChildren,h,l,n,r,v,o):c||B(e,t,l,null,n,r,v,o,!1),u>0){if(16&u)x(l,t,p,m,n,r,s);else if(2&u&&p.class!==m.class&&a(l,"class",null,m.class,s),4&u&&a(l,"style",p.style,m.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],u=m[o];u===c&&"value"!==o||a(l,o,c,u,s,e.children,n,r,Z)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||x(l,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&Ot((()=>{g&&hn(g,n,t,e),f&&Me(t,e,n,"updated")}),r)},L=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===xt||!zt(c,l)||70&c.shapeFlag)?f(c.el):n;y(c,l,u,null,r,i,s,o,!0)}},x=(e,t,n,r,s,o,c)=>{if(n!==r){for(const l in r){if((0,i.Gg)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(e,l,h,u,c,t.children,s,o,Z)}if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||a(e,l,n[l],null,c,t.children,s,o,Z);"value"in r&&a(e,"value",n.value,r.value)}},M=(e,t,n,r,i,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),R(t.children,n,d,i,o,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(L(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Pt(e,t,!0)):B(e,t,n,d,i,o,a,c,u)},D=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):U(t,n,r,i,s,o,c):j(e,t,c)},U=(e,t,n,r,i,s,o)=>{const a=e.component=pn(e,r,i);if(me(e)&&(a.ctx.renderer=te),kn(a),a.asyncDep){if(i&&i.registerDep(a,F),!e.el){const e=a.subTree=Qt(Dt);b(null,e,t,n)}}else F(a,e,t,n,i,s,o)},j=(e,t,n)=>{const r=t.component=e.component;if(W(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,S(r.update),r.update()}else t.el=e.el,r.vnode=t},F=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:l,vnode:u}=e,h=n;0,At(e,!1),n?(n.el=u.el,V(e,n,c)):n=u,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&hn(t,l,n,u),At(e,!0);const d=$(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),Q(p),e,o,a),n.el=d.el,null===h&&G(e,d.el),s&&Ot(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Ot((()=>hn(t,l,n,u)),o)}else{let r;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=pe(t);if(At(e,!1),u&&(0,i.ir)(u),!f&&(r=l&&l.onVnodeBeforeMount)&&hn(r,d,t),At(e,!0),c&&re){const n=()=>{e.subTree=$(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=$(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&Ot(h,o),!f&&(r=l&&l.onVnodeMounted)){const e=t;Ot((()=>hn(r,d,e)),o)}(256&t.shapeFlag||d&&pe(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Ot(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new r.qq(l,(()=>T(h)),e.scope),h=e.update=()=>u.run();h.id=e.uid,At(e,!0),h()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,at(e,t.props,i,n),wt(e,t.children,n),(0,r.Jd)(),A(void 0,e.update),(0,r.lk)()},B=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void J(l,h,n,r,i,s,o,a,c);if(256&f)return void H(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&Z(l,i,s),h!==l&&d(n,h)):16&u?16&p?J(l,h,n,r,i,s,o,a,c):Z(l,i,s,!0):(8&u&&d(n,""),16&p&&R(h,n,r,i,s,o,a,c))},H=(e,t,n,r,s,o,a,c,l)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?cn(t[f]):an(t[f]);y(e[f],r,n,null,s,o,a,c,l)}u>h?Z(e,s,o,!0,!1,d):R(t,n,r,s,o,a,c,l,d)},J=(e,t,n,r,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?cn(t[u]):an(t[u]);if(!zt(r,i))break;y(r,i,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?cn(t[f]):an(t[f]);if(!zt(r,i))break;y(r,i,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)y(null,t[u]=l?cn(t[u]):an(t[u]),n,i,s,o,a,c,l),u++}}else if(u>f)while(u<=d)z(e[u],s,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?cn(t[u]):an(t[u]);null!=e.key&&g.set(e.key,u)}let v,_=0;const b=f-m+1;let w=!1,I=0;const k=new Array(b);for(u=0;u<b;u++)k[u]=0;for(u=p;u<=d;u++){const r=e[u];if(_>=b){z(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===k[v-m]&&zt(r,t[v])){i=v;break}void 0===i?z(r,s,o,!0):(k[i-m]=u+1,i>=I?I=i:w=!0,y(r,t[i],n,null,s,o,a,c,l),_++)}const T=w?Nt(k):i.Z6;for(v=T.length-1,u=b-1;u>=0;u--){const e=m+u,i=t[e],d=e+1<h?t[e+1].el:r;0===k[u]?y(null,i,n,d,s,o,a,c,l):w&&(v<0||u!==T[v]?q(i,n,d,2):v--)}}},q=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void q(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,te);if(a===xt){s(o,t,n);for(let e=0;e<l.length;e++)q(l[e],t,n,r);return void s(e.anchor,t,n)}if(a===Ut)return void I(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Ot((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),l=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,l):l()}else s(o,t,n)},z=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Et(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!pe(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&hn(m,t,e),6&u)Y(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&Me(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,te,r):l&&(s!==xt||h>0&&64&h)?Z(l,t,n,!1,!0):(s===xt&&384&h||!i&&16&u)&&Z(c,t,n),r&&K(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&Ot((()=>{m&&hn(m,t,e),f&&Me(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===xt)return void X(n,r);if(t===Ut)return void k(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},X=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Y=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,z(a,e,t,n)),c&&Ot(c,t),Ot((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Z=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)z(e[o],t,n,r,i)},Q=e=>6&e.shapeFlag?Q(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&z(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),P(),t._vnode=e},te={p:y,um:z,m:q,r:K,mt:U,mc:R,pc:B,pbc:L,n:Q,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:Tt(ee,ne)}}function At({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Pt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=cn(s[i]),t.el=e.el),n||Pt(e,t))}}function Nt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Lt=e=>e.__isTeleport;const xt=Symbol(void 0),Mt=Symbol(void 0),Dt=Symbol(void 0),Ut=Symbol(void 0),jt=[];let Ft=null;function Vt(e=!1){jt.push(Ft=e?null:[])}function $t(){jt.pop(),Ft=jt[jt.length-1]||null}let Bt=1;function Ht(e){Bt+=e}function Wt(e){return e.dynamicChildren=Bt>0?Ft||i.Z6:null,$t(),Bt>0&&Ft&&Ft.push(e),e}function Jt(e,t,n,r,i,s){return Wt(Zt(e,t,n,r,i,s,!0))}function Gt(e,t,n,r,i){return Wt(Qt(e,t,n,r,i,!0))}function qt(e){return!!e&&!0===e.__v_isVNode}function zt(e,t){return e.type===t.type&&e.key===t.key}const Kt="__vInternal",Xt=({key:e})=>null!=e?e:null,Yt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:U,r:e,k:t,f:!!n}:e:null;function Zt(e,t=null,n=null,r=0,s=null,o=(e===xt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xt(t),ref:t&&Yt(t),scopeId:j,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(ln(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),Bt>0&&!a&&Ft&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Ft.push(l),l}const Qt=en;function en(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==je||(e=Dt),qt(e)){const r=nn(e,t,!0);return n&&ln(r,n),Bt>0&&!a&&Ft&&(6&r.shapeFlag?Ft[Ft.indexOf(e)]=r:Ft.push(r)),r.patchFlag|=-2,r}if(Pn(e)&&(e=e.__vccOpts),t){t=tn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:q(e)?128:Lt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Zt(e,t,n,s,o,c,a,!0)}function tn(e){return e?(0,r.X3)(e)||Kt in e?(0,i.l7)({},e):e:null}function nn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?un(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Xt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Yt(t)):[s,Yt(t)]:Yt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&nn(e.ssContent),ssFallback:e.ssFallback&&nn(e.ssFallback),el:e.el,anchor:e.anchor};return l}function rn(e=" ",t=0){return Qt(Mt,null,e,t)}function sn(e,t){const n=Qt(Ut,null,e);return n.staticCount=t,n}function on(e="",t=!1){return t?(Vt(),Gt(Dt,null,e)):Qt(Dt,null,e)}function an(e){return null==e||"boolean"===typeof e?Qt(Dt):(0,i.kJ)(e)?Qt(xt,null,e.slice()):"object"===typeof e?cn(e):Qt(Mt,null,String(e))}function cn(e){return null===e.el||e.memo?e:nn(e)}function ln(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),ln(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Kt in t?3===r&&U&&(1===U.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=U}}else(0,i.mf)(t)?(t={default:t,_ctx:U},n=32):(t=String(t),64&r?(n=16,t=[rn(t)]):n=8);e.children=t,e.shapeFlag|=n}function un(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function hn(e,t,n,r=null){o(e,t,7,[n,r])}const dn=It();let fn=0;function pn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||dn,a={uid:fn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ut(s,o),emitsOptions:M(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=x.bind(null,a),e.ce&&e.ce(a),a}let mn=null;const gn=()=>mn||U,vn=e=>{mn=e,e.scope.on()},yn=()=>{mn&&mn.scope.off(),mn=null};function _n(e){return 4&e.vnode.shapeFlag}let bn,wn,In=!1;function kn(e,t=!1){In=t;const{props:n,children:r}=e.vnode,i=_n(e);ot(e,n,i,t),bt(e,r);const s=i?Tn(e,t):void 0;return In=!1,s}function Tn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Je));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Cn(e):null;vn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),yn(),(0,i.tI)(c)){if(c.then(yn,yn),t)return c.then((n=>{En(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else En(e,c,t)}else Sn(e,t)}function En(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Sn(e,n)}function Sn(e,t,n){const s=e.type;if(!e.render){if(!t&&bn&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=bn(t,c)}}e.render=s.render||i.dG,wn&&wn(e)}vn(e),(0,r.Jd)(),qe(e),(0,r.lk)(),yn()}function On(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Cn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=On(e))},slots:e.slots,emit:e.emit,expose:t}}function Rn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in We?We[n](e):void 0}}))}function An(e){return(0,i.mf)(e)&&e.displayName||e.name}function Pn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Nn=(e,t)=>(0,r.Fl)(e,t,In);function Ln(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?qt(t)?Qt(e,null,[t]):Qt(e,t):Qt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&qt(n)&&(n=[n]),Qt(e,t,n))}Symbol("");const xn="3.2.36"},963:function(e,t,n){n.d(t,{ri:function(){return ne}});var r=n(577),i=n(252);n(262);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?o.createElementNS(s,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function u(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)d(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const f=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function v(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function y(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(l){0}c&&e.removeAttribute(t)}const[_,b]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let w=0;const I=Promise.resolve(),k=()=>{w=0},T=()=>w||(I.then(k),w=_());function E(e,t,n,r){e.addEventListener(t,n,r)}function S(e,t,n,r){e.removeEventListener(t,n,r)}function O(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=R(t);if(r){const o=s[t]=A(r,i);E(e,n,o,a)}else o&&(S(e,n,o,a),s[t]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function R(e){let t;if(C.test(e)){let n;t={};while(n=e.match(C))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function A(e,t){const n=e=>{const r=e.timeStamp||_();(b||r>=n.attached-1)&&(0,i.$d)(P(e,n.value),t,5,[e])};return n.value=e,n.attached=T(),n}function P(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const N=/^on[a-z]/,L=(e,t,n,i,s=!1,o,a,c,h)=>{"class"===t?l(e,i,s):"style"===t?u(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||O(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):x(e,t,i,s))?y(e,t,i,o,a,c,h):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,s))};function x(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&N.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!N.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",D="animation",U=(e,{slots:t})=>(0,i.h)(i.P$,$(e),t);U.displayName="Transition";const j={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=(U.props=(0,r.l7)({},i.P$.props,j),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),V=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function $(e){const t={};for(const r in e)r in j||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=B(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:b,onLeave:w,onLeaveCancelled:I,onBeforeAppear:k=y,onAppear:T=_,onAppearCancelled:E=b}=t,S=(e,t,n)=>{J(e,t?h:c),J(e,t?u:a),n&&n()},O=(e,t)=>{e._isLeaving=!1,J(e,d),J(e,p),J(e,f),t&&t()},C=e=>(t,n)=>{const r=e?T:_,s=()=>S(t,e,n);F(r,[t,s]),G((()=>{J(t,e?l:o),W(t,e?h:c),V(r)||z(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){F(y,[e]),W(e,o),W(e,a)},onBeforeAppear(e){F(k,[e]),W(e,l),W(e,u)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>O(e,t);W(e,d),Z(),W(e,f),G((()=>{e._isLeaving&&(J(e,d),W(e,p),V(w)||z(e,i,v,n))})),F(w,[e,n])},onEnterCancelled(e){S(e,!1),F(b,[e])},onAppearCancelled(e){S(e,!0),F(E,[e])},onLeaveCancelled(e){O(e),F(I,[e])}})}function B(e){if(null==e)return null;if((0,r.Kn)(e))return[H(e.enter),H(e.leave)];{const t=H(e);return[t,t]}}function H(e){const t=(0,r.He)(e);return t}function W(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function J(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function G(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let q=0;function z(e,t,n,r){const i=e._endId=++q,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=K(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function K(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(M+"Delay"),s=r(M+"Duration"),o=X(i,s),a=r(D+"Delay"),c=r(D+"Duration"),l=X(a,c);let u=null,h=0,d=0;t===M?o>0&&(u=M,h=o,d=s.length):t===D?l>0&&(u=D,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?M:D:null,d=u?u===M?s.length:c.length:0);const f=u===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function X(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Y(t)+Y(e[n]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Z(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Q=(0,r.l7)({patchProp:L},c);let ee;function te(){return ee||(ee=(0,i.Us)(Q))}const ne=(...e)=>{const t=te().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=re(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function re(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},577:function(e,t,n){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return f},DM:function(){return N},E9:function(){return re},F7:function(){return T},Gg:function(){return W},HD:function(){return M},He:function(){return te},Kn:function(){return U},NO:function(){return I},Nj:function(){return ee},Od:function(){return O},PO:function(){return B},Pq:function(){return a},RI:function(){return R},S0:function(){return H},W7:function(){return $},WV:function(){return m},Z6:function(){return b},_A:function(){return q},_N:function(){return P},aU:function(){return Z},dG:function(){return w},e1:function(){return s},fY:function(){return r},hR:function(){return Y},hq:function(){return g},ir:function(){return Q},j5:function(){return l},kC:function(){return X},kJ:function(){return A},kT:function(){return _},l7:function(){return S},mf:function(){return x},rs:function(){return K},tI:function(){return j},tR:function(){return E},yA:function(){return c},yk:function(){return D},zw:function(){return v}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function l(e){if(A(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=M(r)?d(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return M(e)||U(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(M(e))t=e;else if(A(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(U(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=L(e),r=L(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=D(e),r=D(t),n||r)return e===t;if(n=A(e),r=A(t),n||r)return!(!n||!r)&&p(e,t);if(n=U(e),r=U(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const v=e=>M(e)?e:null==e?"":A(e)||U(e)&&(e.toString===F||!x(e.toString))?JSON.stringify(e,y,2):String(e),y=(e,t)=>t&&t.__v_isRef?y(e,t.value):P(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:N(t)?{[`Set(${t.size})`]:[...t.values()]}:!U(t)||A(t)||B(t)?t:String(t),_={},b=[],w=()=>{},I=()=>!1,k=/^on[^a-z]/,T=e=>k.test(e),E=e=>e.startsWith("onUpdate:"),S=Object.assign,O=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},C=Object.prototype.hasOwnProperty,R=(e,t)=>C.call(e,t),A=Array.isArray,P=e=>"[object Map]"===V(e),N=e=>"[object Set]"===V(e),L=e=>"[object Date]"===V(e),x=e=>"function"===typeof e,M=e=>"string"===typeof e,D=e=>"symbol"===typeof e,U=e=>null!==e&&"object"===typeof e,j=e=>U(e)&&x(e.then)&&x(e.catch),F=Object.prototype.toString,V=e=>F.call(e),$=e=>V(e).slice(8,-1),B=e=>"[object Object]"===V(e),H=e=>M(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,W=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},G=/-(\w)/g,q=J((e=>e.replace(G,((e,t)=>t?t.toUpperCase():"")))),z=/\B([A-Z])/g,K=J((e=>e.replace(z,"-$1").toLowerCase())),X=J((e=>e.charAt(0).toUpperCase()+e.slice(1))),Y=J((e=>e?`on${X(e)}`:"")),Z=(e,t)=>!Object.is(e,t),Q=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},456:function(e,t,n){
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function h(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function p(){return"object"===typeof indexedDB}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
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
const g="FirebaseError";class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=g,Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?_(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new v(r,o,n);return a}}function _(e,t){return e.replace(b,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const b=/\{\$([^}]+)}/g;
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
function w(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function I(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function k(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function T(e,t){const n=new E(e,t);return n.subscribe.bind(n)}class E{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=S(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=O),void 0===r.error&&(r.error=O),void 0===r.complete&&(r.complete=O);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function S(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function O(){}
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
function C(e){return e&&e._delegate?e._delegate:e}class R{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
const A=[];var P;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(P||(P={}));const N={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},L=P.INFO,x={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},M=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=x[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class D{constructor(e){this.name=e,this._logLevel=L,this._logHandler=M,this._userLogHandler=null,A.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?N[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const U=(e,t)=>t.some((t=>e instanceof t));let j,F;function V(){return j||(j=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $(){return F||(F=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B=new WeakMap,H=new WeakMap,W=new WeakMap,J=new WeakMap,G=new WeakMap;function q(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Q(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&B.set(t,e)})).catch((()=>{})),G.set(t,e),t}function z(e){if(H.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));H.set(e,t)}let K={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return H.get(e);if("objectStoreNames"===t)return e.objectStoreNames||W.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Q(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function X(e){K=e(K)}function Y(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?$().includes(e)?function(...t){return e.apply(ee(this),t),Q(B.get(this))}:function(...t){return Q(e.apply(ee(this),t))}:function(t,...n){const r=e.call(ee(this),t,...n);return W.set(r,t.sort?t.sort():[t]),Q(r)}}function Z(e){return"function"===typeof e?Y(e):(e instanceof IDBTransaction&&z(e),U(e,V())?new Proxy(e,K):e)}function Q(e){if(e instanceof IDBRequest)return q(e);if(J.has(e))return J.get(e);const t=Z(e);return t!==e&&(J.set(e,t),G.set(t,e)),t}const ee=e=>G.get(e);function te(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Q(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Q(o.result),e.oldVersion,e.newVersion,Q(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const ne=["get","getKey","getAll","getAllKeys","count"],re=["put","add","delete","clear"],ie=new Map;function se(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(ie.get(t))return ie.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=re.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!ne.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return ie.set(t,s),s}X((e=>({...e,get:(t,n,r)=>se(t,n)||e.get(t,n,r),has:(t,n)=>!!se(t,n)||e.has(t,n)})));
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
class oe{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(ae(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function ae(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const ce="@firebase/app",le="0.7.25",ue=new D("@firebase/app"),he="@firebase/app-compat",de="@firebase/analytics-compat",fe="@firebase/analytics",pe="@firebase/app-check-compat",me="@firebase/app-check",ge="@firebase/auth",ve="@firebase/auth-compat",ye="@firebase/database",_e="@firebase/database-compat",be="@firebase/functions",we="@firebase/functions-compat",Ie="@firebase/installations",ke="@firebase/installations-compat",Te="@firebase/messaging",Ee="@firebase/messaging-compat",Se="@firebase/performance",Oe="@firebase/performance-compat",Ce="@firebase/remote-config",Re="@firebase/remote-config-compat",Ae="@firebase/storage",Pe="@firebase/storage-compat",Ne="@firebase/firestore",Le="@firebase/firestore-compat",xe="firebase",Me="9.8.2",De={[ce]:"fire-core",[he]:"fire-core-compat",[fe]:"fire-analytics",[de]:"fire-analytics-compat",[me]:"fire-app-check",[pe]:"fire-app-check-compat",[ge]:"fire-auth",[ve]:"fire-auth-compat",[ye]:"fire-rtdb",[_e]:"fire-rtdb-compat",[be]:"fire-fn",[we]:"fire-fn-compat",[Ie]:"fire-iid",[ke]:"fire-iid-compat",[Te]:"fire-fcm",[Ee]:"fire-fcm-compat",[Se]:"fire-perf",[Oe]:"fire-perf-compat",[Ce]:"fire-rc",[Re]:"fire-rc-compat",[Ae]:"fire-gcs",[Pe]:"fire-gcs-compat",[Ne]:"fire-fst",[Le]:"fire-fst-compat","fire-js":"fire-js",[xe]:"fire-js-all"},Ue=new Map,je=new Map;function Fe(e,t){try{e.container.addComponent(t)}catch(n){ue.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ve(e){const t=e.name;if(je.has(t))return ue.debug(`There were multiple attempts to register component ${t}.`),!1;je.set(t,e);for(const n of Ue.values())Fe(n,e);return!0}
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
const $e={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Be=new y("app","Firebase",$e);
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
const He=Me;function We(e,t,n){var r;let i=null!==(r=De[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ue.warn(e.join(" "))}Ve(new R(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
const Je="firebase-heartbeat-database",Ge=1,qe="firebase-heartbeat-store";let ze=null;function Ke(){return ze||(ze=te(Je,Ge,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qe)}}}).catch((e=>{throw Be.create("storage-open",{originalErrorMessage:e.message})}))),ze}async function Xe(e){try{const t=await Ke();return t.transaction(qe).objectStore(qe).get(Ze(e))}catch(t){throw Be.create("storage-get",{originalErrorMessage:t.message})}}async function Ye(e,t){try{const n=await Ke(),r=n.transaction(qe,"readwrite"),i=r.objectStore(qe);return await i.put(t,Ze(e)),r.done}catch(n){throw Be.create("storage-set",{originalErrorMessage:n.message})}}function Ze(e){return`${e.name}!${e.options.appId}`}
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
 */const Qe=1024,et=2592e6;class tt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new it(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=nt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=et})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=nt(),{heartbeatsToSend:t,unsentEntries:n}=rt(this._heartbeatsCache.heartbeats),r=a(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function nt(){const e=new Date;return e.toISOString().substring(0,10)}function rt(e,t=Qe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),st(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),st(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class it{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!p()&&m().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Xe(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ye(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ye(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function st(e){return a(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function ot(e){Ve(new R("platform-logger",(e=>new oe(e)),"PRIVATE")),Ve(new R("heartbeat",(e=>new tt(e)),"PRIVATE")),We(ce,le,e),We(ce,le,"esm2017"),We("fire-js","")}ot("");function at(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function ct(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lt=ct,ut=new y("auth","Firebase",ct()),ht=new D("@firebase/auth");function dt(e,...t){ht.logLevel<=P.ERROR&&ht.error(`Auth (${He}): ${e}`,...t)}
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
 */function ft(e,...t){throw gt(e,...t)}function pt(e,...t){return gt(e,...t)}function mt(e,t,n){const r=Object.assign(Object.assign({},lt()),{[t]:n}),i=new y("auth","Firebase",r);return i.create(t,{appName:e.name})}function gt(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ut.create(e,...t)}function vt(e,t,...n){if(!e)throw gt(t,...n)}function yt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw dt(t),new Error(t)}function _t(e,t){e||yt(t)}
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
 */const bt=new Map;function wt(e){_t(e instanceof Function,"Expected a class definition");let t=bt.get(e);return t?(_t(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,bt.set(e,t),t)}
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
 */function It(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wt);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
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
 */function kt(){return"http:"===Tt()||"https:"===Tt()}function Tt(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Et(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(kt()||h()||"connection"in navigator))||navigator.onLine}function St(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class Ot{constructor(e,t){this.shortDelay=e,this.longDelay=t,_t(t>e,"Short delay should be less than long delay!"),this.isMobile=u()||d()}get(){return Et()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Ct(e,t){_t(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Rt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const At={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},Pt=new Ot(3e4,6e4);
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
 */function Nt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Lt(e,t,n,r,i={}){return xt(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=w(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Rt.fetch()(Dt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function xt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},At),t);try{const t=new Ut(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw jt(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw jt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw jt(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw jt(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw mt(e,a,o);ft(e,a)}}catch(i){if(i instanceof v)throw i;ft(e,"network-request-failed")}}async function Mt(e,t,n,r,i={}){const s=await Lt(e,t,n,r,i);return"mfaPendingCredential"in s&&ft(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Dt(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ct(e.config,i):`${e.config.apiScheme}://${i}`}class Ut{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(pt(this.auth,"network-request-failed"))),Pt.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function jt(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pt(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function Ft(e,t){return Lt(e,"POST","/v1/accounts:delete",t)}async function Vt(e,t){return Lt(e,"POST","/v1/accounts:lookup",t)}
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
 */function $t(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function Bt(e,t=!1){const n=C(e),r=await n.getIdToken(t),i=Wt(r);vt(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,o=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:r,authTime:$t(Ht(i.auth_time)),issuedAtTime:$t(Ht(i.iat)),expirationTime:$t(Ht(i.exp)),signInProvider:o||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Ht(e){return 1e3*Number(e)}function Wt(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return dt("JWT malformed, contained fewer than 3 sections"),null;try{const e=c(n);return e?JSON.parse(e):(dt("Failed to decode base64 JWT payload"),null)}catch(i){return dt("Caught error parsing JWT payload as JSON",i),null}}function Jt(e){const t=Wt(e);return vt(t,"internal-error"),vt("undefined"!==typeof t.exp,"internal-error"),vt("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function Gt(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof v&&qt(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function qt({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class zt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class Kt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$t(this.lastLoginAt),this.creationTime=$t(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Xt(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Gt(e,Vt(n,{idToken:r}));vt(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?Qt(s.providerUserInfo):[],a=Zt(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Kt(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Yt(e){const t=C(e);await Xt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Zt(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function Qt(e){return e.map((e=>{var{providerId:t}=e,n=at(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function en(e,t){const n=await xt(e,{},(async()=>{const n=w({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Dt(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Rt.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){vt(e.idToken,"internal-error"),vt("undefined"!==typeof e.idToken,"internal-error"),vt("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Jt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return vt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await en(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new tn;return n&&(vt("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(vt("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(vt("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return yt("not implemented")}}
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
 */function nn(e,t){vt("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class rn{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=at(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Gt(this,this.stsTokenManager.getToken(this.auth,e));return vt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bt(this,e)}reload(){return Yt(this)}_assign(e){this!==e&&(vt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){vt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Xt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gt(this,Ft(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:I}=t;vt(y&&I,e,"internal-error");const k=tn.fromJSON(this.name,I);vt("string"===typeof y,e,"internal-error"),nn(u,e.name),nn(h,e.name),vt("boolean"===typeof _,e,"internal-error"),vt("boolean"===typeof b,e,"internal-error"),nn(d,e.name),nn(f,e.name),nn(p,e.name),nn(m,e.name),nn(g,e.name),nn(v,e.name);const T=new rn({uid:y,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(T.providerData=w.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new tn;r.updateFromServerResponse(t);const i=new rn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Xt(i),i}}
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
 */class sn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sn.type="NONE";const on=sn;
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
 */function an(e,t,n){return`firebase:${e}:${t}:${n}`}class cn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=an(this.userKey,r.apiKey,i),this.fullPersistenceKey=an("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new cn(wt(on),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||wt(on);const s=an(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=rn._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new cn(i,e,n)):new cn(i,e,n)}}
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
 */function ln(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(un(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(mn(t))return"Blackberry";if(gn(t))return"Webos";if(hn(t))return"Safari";if((t.includes("chrome/")||dn(t))&&!t.includes("edge/"))return"Chrome";if(pn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function un(e=l()){return/firefox\//i.test(e)}function hn(e=l()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dn(e=l()){return/crios\//i.test(e)}function fn(e=l()){return/iemobile/i.test(e)}function pn(e=l()){return/android/i.test(e)}function mn(e=l()){return/blackberry/i.test(e)}function gn(e=l()){return/webos/i.test(e)}function vn(e=l()){return/iphone|ipad|ipod/i.test(e)}function yn(){return f()&&10===document.documentMode}function _n(e=l()){return vn(e)||pn(e)||gn(e)||mn(e)||/windows phone/i.test(e)||fn(e)}function bn(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function wn(e,t=[]){let n;switch(e){case"Browser":n=ln(l());break;case"Worker":n=`${ln(l())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${He}/${r}`}
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
 */class In{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n.message})}}}
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
 */class kn{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new En(this),this.idTokenSubscription=new En(this),this.beforeStateQueue=new In(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ut,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wt(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return vt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xt(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=St()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?C(e):null;return t&&vt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&vt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(wt(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new y("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wt(e)||this._popupRedirectResolver;vt(t,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return vt(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return vt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Tn(e){return C(e)}class En{constructor(e){this.auth=e,this.observer=null,this.addObserver=T((e=>this.observer=e))}get next(){return vt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class Sn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yt("not implemented")}_getIdTokenResponse(e){return yt("not implemented")}_linkToIdToken(e,t){return yt("not implemented")}_getReauthenticationResolver(e){return yt("not implemented")}}
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
 */async function On(e,t){return Lt(e,"POST","/v1/accounts:update",t)}
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
async function Cn(e,t){return Mt(e,"POST","/v1/accounts:signInWithPassword",Nt(e,t))}
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
async function Rn(e,t){return Mt(e,"POST","/v1/accounts:signInWithEmailLink",Nt(e,t))}async function An(e,t){return Mt(e,"POST","/v1/accounts:signInWithEmailLink",Nt(e,t))}
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
 */class Pn extends Sn{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Pn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Pn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Cn(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Rn(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return On(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return An(e,{idToken:t,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Nn(e,t){return Mt(e,"POST","/v1/accounts:signInWithIdp",Nt(e,t))}
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
 */const Ln="http://localhost";class xn extends Sn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=at(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new xn(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Nn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Nn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nn(e,t)}buildRequest(){const e={requestUri:Ln,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=w(t)}return e}}
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
 */async function Mn(e,t){return Lt(e,"POST","/v1/accounts:sendVerificationCode",Nt(e,t))}async function Dn(e,t){return Mt(e,"POST","/v1/accounts:signInWithPhoneNumber",Nt(e,t))}async function Un(e,t){const n=await Mt(e,"POST","/v1/accounts:signInWithPhoneNumber",Nt(e,t));if(n.temporaryProof)throw jt(e,"account-exists-with-different-credential",n);return n}const jn={["USER_NOT_FOUND"]:"user-not-found"};async function Fn(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Mt(e,"POST","/v1/accounts:signInWithPhoneNumber",Nt(e,n),jn)}
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
 */class Vn extends Sn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Vn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Vn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Dn(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Un(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Fn(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Vn({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function $n(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bn(e){const t=I(k(e))["link"],n=t?I(k(t))["deep_link_id"]:null,r=I(k(e))["deep_link_id"],i=r?I(k(r))["link"]:null;return i||r||n||t||e}class Hn{constructor(e){var t,n,r,i,s,o;const a=I(k(e)),c=null!==(t=a["apiKey"])&&void 0!==t?t:null,l=null!==(n=a["oobCode"])&&void 0!==n?n:null,u=$n(null!==(r=a["mode"])&&void 0!==r?r:null);vt(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=a["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=Bn(e);try{return new Hn(t)}catch(n){return null}}}
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
class Wn{constructor(){this.providerId=Wn.PROVIDER_ID}static credential(e,t){return Pn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Hn.parseLink(t);return vt(n,"argument-error"),Pn._fromEmailAndCode(e,n.code,n.tenantId)}}Wn.PROVIDER_ID="password",Wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Jn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Gn extends Jn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class qn extends Gn{constructor(){super("facebook.com")}static credential(e){return xn._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch(t){return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com",qn.PROVIDER_ID="facebook.com";
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
class zn extends Gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xn._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return zn.credential(t,n)}catch(r){return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com",zn.PROVIDER_ID="google.com";
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
class Kn extends Gn{constructor(){super("github.com")}static credential(e){return xn._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch(t){return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com",Kn.PROVIDER_ID="github.com";
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
class Xn extends Gn{constructor(){super("twitter.com")}static credential(e,t){return xn._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Xn.credential(t,n)}catch(r){return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com",Xn.PROVIDER_ID="twitter.com";
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
class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await rn._fromIdTokenResponse(e,n,r),s=Zn(n),o=new Yn({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Zn(n);return new Yn({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Zn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Qn extends v{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Qn.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Qn(e,t,n,r)}}function er(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Qn._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function tr(e,t,n=!1){const r=await Gt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Yn._forOperation(e,"link",r)}
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
async function nr(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Gt(e,er(r,i,t,e),n);vt(s.idToken,r,"internal-error");const o=Wt(s.idToken);vt(o,r,"internal-error");const{sub:a}=o;return vt(e.uid===a,r,"user-mismatch"),Yn._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&ft(r,"user-mismatch"),s}}
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
 */async function rr(e,t,n=!1){const r="signIn",i=await er(e,r,t),s=await Yn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}
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
function ir(e,t){return Lt(e,"POST","/v2/accounts/mfaEnrollment:start",Nt(e,t))}function sr(e,t){return Lt(e,"POST","/v2/accounts/mfaEnrollment:finalize",Nt(e,t))}new WeakMap;const or="__sak";
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
 */class ar{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(or,"1"),this.storage.removeItem(or),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function cr(){const e=l();return hn(e)||vn(e)}const lr=1e3,ur=10;class hr extends ar{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cr()&&bn(),this.fallbackToPolling=_n(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);yn()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ur):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),lr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hr.type="LOCAL";
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
class dr extends ar{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dr.type="SESSION";
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
function fr(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
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
 */class pr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new pr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await fr(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function mr(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */pr.receivers=[];class gr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=mr("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function vr(){return window}
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
 */
function yr(){return"undefined"!==typeof vr()["WorkerGlobalScope"]&&"function"===typeof vr()["importScripts"]}async function _r(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function br(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function wr(){return yr()?self:null}
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
 */const Ir="firebaseLocalStorageDb",kr=1,Tr="firebaseLocalStorage",Er="fbase_key";class Sr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Or(e,t){return e.transaction([Tr],t?"readwrite":"readonly").objectStore(Tr)}function Cr(){const e=indexedDB.deleteDatabase(Ir);return new Sr(e).toPromise()}function Rr(){const e=indexedDB.open(Ir,kr);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Tr,{keyPath:Er})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Tr)?t(n):(n.close(),await Cr(),t(await Rr()))}))}))}async function Ar(e,t,n){const r=Or(e,!0).put({[Er]:t,value:n});return new Sr(r).toPromise()}async function Pr(e,t){const n=Or(e,!1).get(t),r=await new Sr(n).toPromise();return void 0===r?null:r.value}function Nr(e,t){const n=Or(e,!0).delete(t);return new Sr(n).toPromise()}const Lr=800,xr=3;class Mr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Rr()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>xr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pr._getInstance(wr()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await _r(),!this.activeServiceWorker)return;this.sender=new gr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&br()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rr();return await Ar(e,or,"1"),await Nr(e,or),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ar(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Pr(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Nr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Or(e,!1).getAll();return new Sr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Lr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Mr.type="LOCAL";
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
function Dr(e,t){return Lt(e,"POST","/v2/accounts/mfaSignIn:start",Nt(e,t))}function Ur(e,t){return Lt(e,"POST","/v2/accounts/mfaSignIn:finalize",Nt(e,t))}
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
 */function jr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
jr("rcb"),new Ot(3e4,6e4);
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
const Fr="recaptcha";async function Vr(e,t,n){var r;const i=await n.verify();try{let s;if(vt("string"===typeof i,e,"argument-error"),vt(n.type===Fr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){vt("enroll"===t.type,e,"internal-error");const n=await ir(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{vt("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;vt(n,e,"missing-multi-factor-info");const o=await Dr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Mn(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class $r{constructor(e){this.providerId=$r.PROVIDER_ID,this.auth=Tn(e)}verifyPhoneNumber(e,t){return Vr(this.auth,e,C(t))}static credential(e,t){return Vn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return $r.credentialFromTaggedObject(t)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Vn._fromTokenResponse(t,n):null}}$r.PROVIDER_ID="phone",$r.PHONE_SIGN_IN_METHOD="phone";
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
class Br extends Sn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hr(e){return rr(e.auth,new Br(e),e.bypassAuthState)}function Wr(e){const{auth:t,user:n}=e;return vt(n,t,"internal-error"),nr(n,new Br(e),e.bypassAuthState)}async function Jr(e){const{auth:t,user:n}=e;return vt(n,t,"internal-error"),tr(n,new Br(e),e.bypassAuthState)}
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
 */class Gr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hr;case"linkViaPopup":case"linkViaRedirect":return Jr;case"reauthViaPopup":case"reauthViaRedirect":return Wr;default:ft(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const qr=new Ot(2e3,1e4);class zr extends Gr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return vt(e,this.auth,"internal-error"),e}async onExecution(){_t(1===this.filter.length,"Popup operations only handle one event");const e=mr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(pt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,qr.get())};e()}}zr.currentPopupAction=null;
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
new Map;
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
 */
new Ot(3e4,6e4);
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
 */
new Ot(5e3,15e3),new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);class Kr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return yt("unexpected MultiFactorSessionType")}}}class Xr extends Kr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xr(e)}_finalizeEnroll(e,t,n){return sr(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Ur(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Yr{constructor(){}static assertion(e){return Xr._fromCredential(e)}}Yr.FACTOR_ID="phone";var Zr="@firebase/auth",Qr="0.20.2";
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
class ei{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){vt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function ti(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ni(e){Ve(new R("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{vt(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),vt(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wn(e)},a=new kn(t,r,i);return It(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),Ve(new R("auth-internal",(e=>{const t=Tn(e.getProvider("auth").getImmediate());return(e=>new ei(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),We(Zr,Qr,ti(e)),We(Zr,Qr,"esm2017")}
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
 */ni("Browser")},744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},119:function(e,t,n){n.d(t,{p7:function(){return nt},r5:function(){return G}});var r=n(252),i=n(262);
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>s?Symbol(e):"_vr_"+e,a=o("rvlm"),c=o("rvd"),l=o("r"),u=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||s&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function m(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const g=()=>{};const v=/\/$/,y=e=>e.replace(v,"");function _(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=O(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function I(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&k(t.matched[r],n.matched[i])&&T(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function k(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function T(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?S(e,t):Array.isArray(t)?S(t,e):e===t}function S(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function O(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var C,R;(function(e){e["pop"]="pop",e["push"]="push"})(C||(C={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(R||(R={}));function A(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}const P=/^[^#]+#/;function N(e,t){return e.replace(P,"#")+t}function L(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function M(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=L(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function D(e,t){const n=history.state?history.state.position-t:-1;return n+e}const U=new Map;function j(e,t){U.set(e,t)}function F(e){const t=U.get(e);return U.delete(e),t}let V=()=>location.protocol+"//"+location.host;function $(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,e);return o+r+i}function B(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=$(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:C.pop,direction:u?u>0?R.forward:R.back:R.unknown})}))};function c(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:x()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function H(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?x():null}}function W(e){const{history:t,location:n}=window,r={value:$(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:V()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=p({},t.state,H(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=p({},i.value,t.state,{forward:e,scroll:x()});s(o.current,o,!0);const a=p({},H(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function J(e){e=A(e);const t=W(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=p({location:"",base:e,go:r,createHref:N.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function G(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),J(e)}function q(e){return"string"===typeof e||e&&"object"===typeof e}function z(e){return"string"===typeof e||"symbol"===typeof e}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},X=o("nf");var Y;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Y||(Y={}));function Z(e,t){return p(new Error,{type:e,[X]:!0},t)}function Q(e,t){return e instanceof Error&&X in e&&(null==t||!!(e.type&t))}const ee="[^/]+?",te={sensitive:!1,strict:!1,start:!0,end:!0},ne=/[.+*?^${}()[\]/\\]/g;function re(e,t){const n=p({},te,t),r=[];let i=n.start?"^":"";const s=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let t=0;t<u.length;t++){const r=u[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ne,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;s.push({name:e,repeatable:n,optional:a});const h=c||ee;if(h!==ee){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const s of i)if(0===s.type)n+=s.value;else if(1===s.type){const{value:o,repeatable:a,optional:c}=s,l=o in t?t[o]:"";if(Array.isArray(l)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(l)?l.join("/"):l;if(!u){if(!c)throw new Error(`Missing required param "${o}"`);i.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function ie(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function se(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ie(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const oe={type:0,value:""},ae=/[a-zA-Z0-9_]/;function ce(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ae.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function le(e,t,n){const r=re(ce(e.path),n);const i=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ue(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=de(e);a.aliasOf=r&&r.record;const l=ge(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=le(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!pe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(e){if(z(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&se(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ve(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!pe(e)&&r.set(e.record.name,e)}function l(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Z(1,{location:e});o=i.record.name,a=p(he(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Z(1,{location:e,currentLocation:t});o=i.record.name,a=p({},t.params,e.params),s=i.stringify(a)}const c=[];let l=i;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:me(c)}}return t=ge({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function he(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function de(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function pe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function me(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function ge(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ve(e,t){return t.children.some((t=>t===e||ve(e,t)))}const ye=/#/g,_e=/&/g,be=/\//g,we=/=/g,Ie=/\?/g,ke=/\+/g,Te=/%5B/g,Ee=/%5D/g,Se=/%5E/g,Oe=/%60/g,Ce=/%7B/g,Re=/%7C/g,Ae=/%7D/g,Pe=/%20/g;function Ne(e){return encodeURI(""+e).replace(Re,"|").replace(Te,"[").replace(Ee,"]")}function Le(e){return Ne(e).replace(Ce,"{").replace(Ae,"}").replace(Se,"^")}function xe(e){return Ne(e).replace(ke,"%2B").replace(Pe,"+").replace(ye,"%23").replace(_e,"%26").replace(Oe,"`").replace(Ce,"{").replace(Ae,"}").replace(Se,"^")}function Me(e){return xe(e).replace(we,"%3D")}function De(e){return Ne(e).replace(ye,"%23").replace(Ie,"%3F")}function Ue(e){return null==e?"":De(e).replace(be,"%2F")}function je(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Fe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ke," "),n=e.indexOf("="),s=je(n<0?e:e.slice(0,n)),o=n<0?null:je(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Ve(e){let t="";for(let n in e){const r=e[n];if(n=Me(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((e=>e&&xe(e))):[r&&xe(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function $e(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function He(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(Z(4,{from:n,to:t})):e instanceof Error?a(e):q(e)?a(Z(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function We(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(Je(o)){const a=o.__vccOpts||o,c=a[t];c&&i.push(He(c,n,r,s,e))}else{let a=o();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&He(c,n,r,s,e)()}))))}}return i}function Je(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ge(e){const t=(0,r.f3)(l),n=(0,r.f3)(u),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(k.bind(null,r));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&i[i.length-1].path!==a?i.findIndex(k.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Xe(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&T(n.params,s.value.params)));function h(n={}){return Ke(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(g):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const qe=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,i.qj)(Ge(e)),{options:s}=(0,r.f3)(l),o=(0,r.Fl)((()=>({[Ze(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ze(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),ze=qe;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ze=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(h),o=(0,r.Fl)((()=>e.route||s.value)),l=(0,r.f3)(c,0),u=(0,r.Fl)((()=>o.value.matched[l]));(0,r.JJ)(c,l+1),(0,r.JJ)(a,u),(0,r.JJ)(h,o);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,u.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&k(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return et(n.default,{Component:a,route:i});const l=s.props[e.name],h=l?!0===l?i.params:"function"===typeof l?l(i):l:null,f=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=(0,r.h)(a,p({},h,t,{onVnodeUnmounted:f,ref:d}));return et(n.default,{Component:m,route:i})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Qe;function nt(e){const t=ue(e.routes,e),n=e.parseQuery||Fe,s=e.stringifyQuery||Ve,o=e.history;const a=Be(),c=Be(),f=Be(),v=(0,i.XI)(K);let y=K;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=m.bind(null,(e=>""+e)),k=m.bind(null,Ue),T=m.bind(null,je);function E(e,n){let r,i;return z(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function O(){return t.getRoutes().map((e=>e.record))}function R(e){return!!t.getRecordMatcher(e)}function A(e,r){if(r=p({},r||v.value),"string"===typeof e){const i=_(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return p(i,s,{params:T(s.params),hash:je(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=p({},e,{path:_(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];i=p({},e,{params:k(e.params)}),r.params=k(r.params)}const a=t.resolve(i,r),c=e.hash||"";a.params=w(T(a.params));const l=b(s,p({},e,{hash:Le(c),path:a.path})),u=o.createHref(l);return p({fullPath:l,hash:c,query:s===Ve?$e(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function P(e){return"string"===typeof e?_(n,e,v.value.path):p({},e)}function N(e,t){if(y!==e)return Z(8,{from:t,to:e})}function L(e){return $(e)}function U(e){return L(p(P(e),{replace:!0}))}function V(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function $(e,t){const n=y=A(e),r=v.value,i=e.state,o=e.force,a=!0===e.replace,c=V(n);if(c)return $(p(P(c),{state:i,force:o,replace:a}),t||n);const l=n;let u;return l.redirectedFrom=t,!o&&I(s,r,n)&&(u=Z(16,{to:l,from:r}),ie(r,r,!0,!1)),(u?Promise.resolve(u):H(l,r)).catch((e=>Q(e)?Q(e,2)?e:re(e):te(e,l,r))).then((e=>{if(e){if(Q(e,2))return $(p(P(e.to),{state:i,force:o,replace:a}),t||l)}else e=J(l,r,!0,a,i);return W(l,r,e),e}))}function B(e,t){const n=N(e,t);return n?Promise.reject(n):Promise.resolve()}function H(e,t){let n;const[r,i,s]=it(e,t);n=We(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(He(r,e,t))}));const o=B.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of a.list())n.push(He(r,e,t));return n.push(o),rt(n)})).then((()=>{n=We(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(He(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(He(i,e,t));else n.push(He(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=We(s,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of c.list())n.push(He(r,e,t));return n.push(o),rt(n)})).catch((e=>Q(e,8)?e:Promise.reject(e)))}function W(e,t,n){for(const r of f.list())r(e,t,n)}function J(e,t,n,r,i){const s=N(e,t);if(s)return s;const a=t===K,c=d?history.state:{};n&&(r||a?o.replace(e.fullPath,p({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),v.value=e,ie(e,t,n,a),re()}let G;function q(){G||(G=o.listen(((e,t,n)=>{const r=A(e),i=V(r);if(i)return void $(p(i,{replace:!0}),r).catch(g);y=r;const s=v.value;d&&j(D(s.fullPath,n.delta),x()),H(r,s).catch((e=>Q(e,12)?e:Q(e,2)?($(e.to,r).then((e=>{Q(e,20)&&!n.delta&&n.type===C.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),te(e,r,s)))).then((e=>{e=e||J(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===C.pop&&Q(e,20)&&o.go(-1,!1)),W(r,s,e)})).catch(g)})))}let X,Y=Be(),ee=Be();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return X&&v.value!==K?Promise.resolve():new Promise(((e,t)=>{Y.add([e,t])}))}function re(e){return X||(X=!e,q(),Y.list().forEach((([t,n])=>e?n(e):t())),Y.reset()),e}function ie(t,n,i,s){const{scrollBehavior:o}=e;if(!d||!o)return Promise.resolve();const a=!i&&F(D(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(t,n,a))).then((e=>e&&M(e))).catch((e=>te(e,t,n)))}const se=e=>o.go(e);let oe;const ae=new Set,ce={currentRoute:v,addRoute:E,removeRoute:S,hasRoute:R,getRoutes:O,resolve:A,options:e,push:L,replace:U,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",ze),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),d&&!oe&&v.value===K&&(oe=!0,L(o.location).catch((e=>{0})));const n={};for(const i in K)n[i]=(0,r.Fl)((()=>v.value[i]));e.provide(l,t),e.provide(u,(0,i.qj)(n)),e.provide(h,v);const s=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(y=K,G&&G(),G=null,v.value=K,oe=!1,X=!1),s()}}};return ce}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>k(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>k(e,a)))||i.push(a))}return[n,r,i]}},907:function(e,t,n){n.d(t,{MT:function(){return ee}});var r=n(252),i=n(262);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",l="plugin:settings:set";let u,h;function d(){var e;return void 0!==u||("undefined"!==typeof window&&window.performance?(u=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(u=!0,h=n.g.perf_hooks.performance):u=!1),u}function f(){return d()?h.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e},now(){return f()}},t&&t.on(l,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function m(e,t){const n=e,r=o(),i=s(),l=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const e=l?new p(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(c,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var g="store";function v(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function y(e){return null!==e&&"object"===typeof e}function _(e){return e&&"function"===typeof e.then}function b(e,t){return function(){return e(t)}}function w(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function I(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;T(e,n,[],e._modules.root,!0),k(e,n,t)}function k(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,o={};v(s,(function(t,n){o[n]=b(t,e),Object.defineProperty(e.getters,n,{get:function(){return o[n]()},enumerable:!0})})),e._state=(0,i.qj)({data:t}),e.strict&&A(e),r&&n&&e._withCommit((function(){r.data=null}))}function T(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=P(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){a[c]=r.state}))}var l=r.context=E(e,o,n);r.forEachMutation((function(t,n){var r=o+n;O(e,r,t,l)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;C(e,r,i,l)})),r.forEachGetter((function(t,n){var r=o+n;R(e,r,t,l)})),r.forEachChild((function(r,s){T(e,t,n.concat(s),r,i)}))}function E(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:r?e.commit:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return S(e,t)}},state:{get:function(){return P(e.state,n)}}}),i}function S(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function O(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function C(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return _(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function R(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function A(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function P(e,t){return t.reduce((function(e,t){return e[t]}),e)}function N(e,t,n){return y(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var L="vuex bindings",x="vuex:mutations",M="vuex:actions",D="vuex",U=0;function j(e,t){m({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[L]},(function(n){n.addTimelineLayer({id:x,label:"Vuex Mutations",color:F}),n.addTimelineLayer({id:M,label:"Vuex Actions",color:F}),n.addInspector({id:D,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===D)if(n.filter){var r=[];J(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[W(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===D){var r=n.nodeId;S(t,r),n.state=G(z(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===D){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(D),n.sendInspectorState(D),n.addTimelineEvent({layerId:x,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=U++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:M,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:M,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var F=8702998,V=6710886,$=16777215,B={label:"namespaced",textColor:$,backgroundColor:V};function H(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function W(e,t){return{id:t||"root",label:H(t),tags:e.namespaced?[B]:[],children:Object.keys(e._children).map((function(n){return W(e._children[n],t+n+"/")}))}}function J(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[B]:[]}),Object.keys(t._children).forEach((function(i){J(e,t._children[i],n,r+i+"/")}))}function G(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=q(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?H(e):e,editable:!1,value:K((function(){return s[e]}))}}))}return i}function q(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=K((function(){return e[n]}))}else t[n]=K((function(){return e[n]}))})),t}function z(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var s=e[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function K(e){try{return e()}catch(t){return t}}var X=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},Y={namespaced:{configurable:!0}};Y.namespaced.get=function(){return!!this._rawModule.namespaced},X.prototype.addChild=function(e,t){this._children[e]=t},X.prototype.removeChild=function(e){delete this._children[e]},X.prototype.getChild=function(e){return this._children[e]},X.prototype.hasChild=function(e){return e in this._children},X.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},X.prototype.forEachChild=function(e){v(this._children,e)},X.prototype.forEachGetter=function(e){this._rawModule.getters&&v(this._rawModule.getters,e)},X.prototype.forEachAction=function(e){this._rawModule.actions&&v(this._rawModule.actions,e)},X.prototype.forEachMutation=function(e){this._rawModule.mutations&&v(this._rawModule.mutations,e)},Object.defineProperties(X.prototype,Y);var Z=function(e){this.register([],e,!1)};function Q(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;Q(e.concat(r),t.getChild(r),n.modules[r])}}Z.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Z.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},Z.prototype.update=function(e){Q([],this.root,e)},Z.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new X(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&v(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},Z.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},Z.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Z(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(s,e,t)},this.commit=function(e,t,n){return c.call(s,e,t,n)},this.strict=r;var l=this._modules.root.state;T(this,l,[],this._modules.root),k(this,l),n.forEach((function(e){return e(t)}))},ne={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||g,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&j(e,this)},ne.state.get=function(){return this._state.data},ne.state.set=function(e){0},te.prototype.commit=function(e,t,n){var r=this,i=N(e,t,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},te.prototype.dispatch=function(e,t){var n=this,r=N(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(l){0}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(l){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(l){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return w(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return w(n,this._actionSubscribers,t)},te.prototype.watch=function(e,t,n){var i=this;return(0,r.YP)((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),T(this,this.state,e,this._modules.get(e),n.preserveState),k(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=P(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),I(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),I(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ne);se((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=oe(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),se((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=oe(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),se((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||oe(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),se((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=oe(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function re(e){return ie(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ie(e){return Array.isArray(e)||y(e)}function se(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function oe(e,t,n){var r=e._modulesNamespaceMap[n];return r}}}]);
//# sourceMappingURL=chunk-vendors.2495aad9.js.map