(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const _ of t)if(_.type==="childList")for(const i of _.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const _={};return t.integrity&&(_.integrity=t.integrity),t.referrerPolicy&&(_.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?_.credentials="include":t.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function r(t){if(t.ep)return;t.ep=!0;const _=o(t);fetch(t.href,_)}})();(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const _ of t.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&o(_)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();var R,d,Y,x,J,Z,W,$,j,B,C={},ee=[],ie=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z=Array.isArray;function S(n,e){for(var o in e)n[o]=e[o];return n}function ne(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function ue(n,e,o){var r,t,_,i={};for(_ in e)_=="key"?r=e[_]:_=="ref"?t=e[_]:i[_]=e[_];if(arguments.length>2&&(i.children=arguments.length>3?R.call(arguments,2):o),typeof n=="function"&&n.defaultProps!=null)for(_ in n.defaultProps)i[_]===void 0&&(i[_]=n.defaultProps[_]);return U(n,i,r,t,null)}function U(n,e,o,r,t){var _={type:n,props:e,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:t??++Y,__i:-1,__u:0};return t==null&&d.vnode!=null&&d.vnode(_),_}function F(n){return n.children}function E(n,e){this.props=n,this.context=e}function P(n,e){if(e==null)return n.__?P(n.__,n.__i+1):null;for(var o;e<n.__k.length;e++)if((o=n.__k[e])!=null&&o.__e!=null)return o.__e;return typeof n.type=="function"?P(n):null}function te(n){var e,o;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((o=n.__k[e])!=null&&o.__e!=null){n.__e=n.__c.base=o.__e;break}return te(n)}}function Q(n){(!n.__d&&(n.__d=!0)&&x.push(n)&&!I.__r++||J!==d.debounceRendering)&&((J=d.debounceRendering)||Z)(I)}function I(){var n,e,o,r,t,_,i,s;for(x.sort(W);n=x.shift();)n.__d&&(e=x.length,r=void 0,_=(t=(o=n).__v).__e,i=[],s=[],o.__P&&((r=S({},t)).__v=t.__v+1,d.vnode&&d.vnode(r),K(o.__P,r,t,o.__n,o.__P.namespaceURI,32&t.__u?[_]:null,i,_??P(t),!!(32&t.__u),s),r.__v=t.__v,r.__.__k[r.__i]=r,le(i,r,s),r.__e!=_&&te(r)),x.length>e&&x.sort(W));I.__r=0}function oe(n,e,o,r,t,_,i,s,a,u,f){var l,y,c,m,b,v=r&&r.__k||ee,p=e.length;for(o.__d=a,se(o,e,v),a=o.__d,l=0;l<p;l++)(c=o.__k[l])!=null&&(y=c.__i===-1?C:v[c.__i]||C,c.__i=l,K(n,c,y,t,_,i,s,a,u,f),m=c.__e,c.ref&&y.ref!=c.ref&&(y.ref&&q(y.ref,null,c),f.push(c.ref,c.__c||m,c)),b==null&&m!=null&&(b=m),65536&c.__u||y.__k===c.__k?a=re(c,a,n):typeof c.type=="function"&&c.__d!==void 0?a=c.__d:m&&(a=m.nextSibling),c.__d=void 0,c.__u&=-196609);o.__d=a,o.__e=b}function se(n,e,o){var r,t,_,i,s,a=e.length,u=o.length,f=u,l=0;for(n.__k=[],r=0;r<a;r++)(t=e[r])!=null&&typeof t!="boolean"&&typeof t!="function"?(i=r+l,(t=n.__k[r]=typeof t=="string"||typeof t=="number"||typeof t=="bigint"||t.constructor==String?U(null,t,null,null,null):z(t)?U(F,{children:t},null,null,null):t.constructor===void 0&&t.__b>0?U(t.type,t.props,t.key,t.ref?t.ref:null,t.__v):t).__=n,t.__b=n.__b+1,_=null,(s=t.__i=ce(t,o,i,f))!==-1&&(f--,(_=o[s])&&(_.__u|=131072)),_==null||_.__v===null?(s==-1&&l--,typeof t.type!="function"&&(t.__u|=65536)):s!==i&&(s==i-1?l--:s==i+1?l++:(s>i?l--:l++,t.__u|=65536))):t=n.__k[r]=null;if(f)for(r=0;r<u;r++)(_=o[r])!=null&&!(131072&_.__u)&&(_.__e==n.__d&&(n.__d=P(_)),_e(_,_))}function re(n,e,o){var r,t;if(typeof n.type=="function"){for(r=n.__k,t=0;r&&t<r.length;t++)r[t]&&(r[t].__=n,e=re(r[t],e,o));return e}n.__e!=e&&(e&&n.type&&!o.contains(e)&&(e=P(n)),o.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ce(n,e,o,r){var t=n.key,_=n.type,i=o-1,s=o+1,a=e[o];if(a===null||a&&t==a.key&&_===a.type&&!(131072&a.__u))return o;if(r>(a!=null&&!(131072&a.__u)?1:0))for(;i>=0||s<e.length;){if(i>=0){if((a=e[i])&&!(131072&a.__u)&&t==a.key&&_===a.type)return i;i--}if(s<e.length){if((a=e[s])&&!(131072&a.__u)&&t==a.key&&_===a.type)return s;s++}}return-1}function V(n,e,o){e[0]==="-"?n.setProperty(e,o??""):n[e]=o==null?"":typeof o!="number"||ie.test(e)?o:o+"px"}function O(n,e,o,r,t){var _;e:if(e==="style")if(typeof o=="string")n.style.cssText=o;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)o&&e in o||V(n.style,e,"");if(o)for(e in o)r&&o[e]===r[e]||V(n.style,e,o[e])}else if(e[0]==="o"&&e[1]==="n")_=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in n||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+_]=o,o?r?o.u=r.u:(o.u=$,n.addEventListener(e,_?B:j,_)):n.removeEventListener(e,_?B:j,_);else{if(t=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&e[4]!=="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&o==1?"":o))}}function X(n){return function(e){if(this.l){var o=this.l[e.type+n];if(e.t==null)e.t=$++;else if(e.t<o.u)return;return o(d.event?d.event(e):e)}}}function K(n,e,o,r,t,_,i,s,a,u){var f,l,y,c,m,b,v,p,h,N,w,T,L,G,M,H,k=e.type;if(e.constructor!==void 0)return null;128&o.__u&&(a=!!(32&o.__u),_=[s=e.__e=o.__e]),(f=d.__b)&&f(e);e:if(typeof k=="function")try{if(p=e.props,h="prototype"in k&&k.prototype.render,N=(f=k.contextType)&&r[f.__c],w=f?N?N.props.value:f.__:r,o.__c?v=(l=e.__c=o.__c).__=l.__E:(h?e.__c=l=new k(p,w):(e.__c=l=new E(p,w),l.constructor=k,l.render=fe),N&&N.sub(l),l.props=p,l.state||(l.state={}),l.context=w,l.__n=r,y=l.__d=!0,l.__h=[],l._sb=[]),h&&l.__s==null&&(l.__s=l.state),h&&k.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=S({},l.__s)),S(l.__s,k.getDerivedStateFromProps(p,l.__s))),c=l.props,m=l.state,l.__v=e,y)h&&k.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),h&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(h&&k.getDerivedStateFromProps==null&&p!==c&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(p,w),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(p,l.__s,w)===!1||e.__v===o.__v)){for(e.__v!==o.__v&&(l.props=p,l.state=l.__s,l.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.some(function(D){D&&(D.__=e)}),T=0;T<l._sb.length;T++)l.__h.push(l._sb[T]);l._sb=[],l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(p,l.__s,w),h&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(c,m,b)})}if(l.context=w,l.props=p,l.__P=n,l.__e=!1,L=d.__r,G=0,h){for(l.state=l.__s,l.__d=!1,L&&L(e),f=l.render(l.props,l.state,l.context),M=0;M<l._sb.length;M++)l.__h.push(l._sb[M]);l._sb=[]}else do l.__d=!1,L&&L(e),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++G<25);l.state=l.__s,l.getChildContext!=null&&(r=S(S({},r),l.getChildContext())),h&&!y&&l.getSnapshotBeforeUpdate!=null&&(b=l.getSnapshotBeforeUpdate(c,m)),oe(n,z(H=f!=null&&f.type===F&&f.key==null?f.props.children:f)?H:[H],e,o,r,t,_,i,s,a,u),l.base=e.__e,e.__u&=-161,l.__h.length&&i.push(l),v&&(l.__E=l.__=null)}catch(D){if(e.__v=null,a||_!=null){for(e.__u|=a?160:128;s&&s.nodeType===8&&s.nextSibling;)s=s.nextSibling;_[_.indexOf(s)]=null,e.__e=s}else e.__e=o.__e,e.__k=o.__k;d.__e(D,e,o)}else _==null&&e.__v===o.__v?(e.__k=o.__k,e.__e=o.__e):e.__e=ae(o.__e,e,o,r,t,_,i,a,u);(f=d.diffed)&&f(e)}function le(n,e,o){e.__d=void 0;for(var r=0;r<o.length;r++)q(o[r],o[++r],o[++r]);d.__c&&d.__c(e,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(_){_.call(t)})}catch(_){d.__e(_,t.__v)}})}function ae(n,e,o,r,t,_,i,s,a){var u,f,l,y,c,m,b,v=o.props,p=e.props,h=e.type;if(h==="svg"?t="http://www.w3.org/2000/svg":h==="math"?t="http://www.w3.org/1998/Math/MathML":t||(t="http://www.w3.org/1999/xhtml"),_!=null){for(u=0;u<_.length;u++)if((c=_[u])&&"setAttribute"in c==!!h&&(h?c.localName===h:c.nodeType===3)){n=c,_[u]=null;break}}if(n==null){if(h===null)return document.createTextNode(p);n=document.createElementNS(t,h,p.is&&p),s&&(d.__m&&d.__m(e,_),s=!1),_=null}if(h===null)v===p||s&&n.data===p||(n.data=p);else{if(_=_&&R.call(n.childNodes),v=o.props||C,!s&&_!=null)for(v={},u=0;u<n.attributes.length;u++)v[(c=n.attributes[u]).name]=c.value;for(u in v)if(c=v[u],u!="children"){if(u=="dangerouslySetInnerHTML")l=c;else if(!(u in p)){if(u=="value"&&"defaultValue"in p||u=="checked"&&"defaultChecked"in p)continue;O(n,u,null,c,t)}}for(u in p)c=p[u],u=="children"?y=c:u=="dangerouslySetInnerHTML"?f=c:u=="value"?m=c:u=="checked"?b=c:s&&typeof c!="function"||v[u]===c||O(n,u,c,v[u],t);if(f)s||l&&(f.__html===l.__html||f.__html===n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(l&&(n.innerHTML=""),oe(n,z(y)?y:[y],e,o,r,h==="foreignObject"?"http://www.w3.org/1999/xhtml":t,_,i,_?_[0]:o.__k&&P(o,0),s,a),_!=null)for(u=_.length;u--;)ne(_[u]);s||(u="value",h==="progress"&&m==null?n.removeAttribute("value"):m!==void 0&&(m!==n[u]||h==="progress"&&!m||h==="option"&&m!==v[u])&&O(n,u,m,v[u],t),u="checked",b!==void 0&&b!==n[u]&&O(n,u,b,v[u],t))}return n}function q(n,e,o){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(t){d.__e(t,o)}}function _e(n,e,o){var r,t;if(d.unmount&&d.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||q(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){d.__e(_,e)}r.base=r.__P=null}if(r=n.__k)for(t=0;t<r.length;t++)r[t]&&_e(r[t],e,o||typeof n.type!="function");o||ne(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function fe(n,e,o){return this.constructor(n,o)}function de(n,e,o){var r,t,_,i;d.__&&d.__(n,e),t=(r=typeof o=="function")?null:e.__k,_=[],i=[],K(e,n=(!r&&o||e).__k=ue(F,null,[n]),t||C,C,e.namespaceURI,!r&&o?[o]:t?null:e.firstChild?R.call(e.childNodes):null,_,!r&&o?o:t?t.__e:e.firstChild,r,i),le(_,n,i)}R=ee.slice,d={__e:function(n,e,o,r){for(var t,_,i;e=e.__;)if((t=e.__c)&&!t.__)try{if((_=t.constructor)&&_.getDerivedStateFromError!=null&&(t.setState(_.getDerivedStateFromError(n)),i=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(n,r||{}),i=t.__d),i)return t.__E=t}catch(s){n=s}throw n}},Y=0,E.prototype.setState=function(n,e){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof n=="function"&&(n=n(S({},o),this.props)),n&&S(o,n),n!=null&&this.__v&&(e&&this._sb.push(e),Q(this))},E.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Q(this))},E.prototype.render=F,x=[],Z=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W=function(n,e){return n.__v.__b-e.__v.__b},I.__r=0,$=0,j=X(!1),B=X(!0);var pe=0;function g(n,e,o,r,t,_){e||(e={});var i,s,a=e;"ref"in e&&(i=e.ref,delete e.ref);var u={type:n,props:a,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--pe,__i:-1,__u:0,__source:t,__self:_};if(typeof n=="function"&&(i=n.defaultProps))for(s in i)a[s]===void 0&&(a[s]=i[s]);return d.vnode&&d.vnode(u),u}const he="Bill Tallitsch",me="Raleigh, United States",ve={phone:"+1 2672053549",email:"bill.tallitsch@gmail.com"},ye="Senior Full Stack Developer and Tech Lead with 10+ years of experience...",ge={frontend:["React","Next.js","Vue.js","TypeScript","JavaScript","HTML5","CSS3","Tailwind CSS"],backend:["Node.js","Express.js","PHP"],databases:["SQL","MongoDB"],cloud_and_devops:["Azure","Docker","Kubernetes","CI/CD pipelines"],tools_and_methodologies:["Git","JIRA","Agile/Scrum","REST APIs","GraphQL"],other:["Technical Direction","Project Management","Client Relations","Performance Optimization"]},A={name:he,location:me,contact:ve,professional_summary:ye,technical_skills:ge},be=()=>g("header",{className:"p-5 bg-base-200 text-center",children:[g("h1",{className:"text-4xl font-bold",children:A.name}),g("p",{className:"text-lg",children:A.location}),g("p",{className:"text-lg",children:["📧 ",A.contact.email]})]}),ke=()=>{const{technical_skills:n}=A;return g("section",{className:"p-5",children:[g("h2",{className:"text-2xl font-bold mb-4",children:"Technical Skills"}),g("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:Object.keys(n).map((e,o)=>g("div",{className:"bg-base-100 shadow p-4 rounded-lg",children:[g("h3",{className:"font-bold",children:e}),g("ul",{className:"list-disc pl-5",children:n[e].map((r,t)=>g("li",{children:r},t))})]},o))})]})},we=()=>g("div",{className:"container mx-auto",children:[g(be,{}),g(ke,{})]});de(g(we,{}),document.getElementById("app"));
