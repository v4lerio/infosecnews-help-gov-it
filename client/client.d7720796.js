function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}let d,h,m=!1;function p(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function g(e,t){if(m){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const s=t[n];void 0!==s.claim_order&&e.push(s)}t=e}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(r>0&&t[n[r]].claim_order<=o?r+1:p(1,r,(e=>t[n[e]].claim_order),o))-1;s[e]=n[i]+1;const a=i+1;n[a]=e,r=Math.max(a,r)}const o=[],i=[];let a=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(i[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){m&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function _(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function E(){return x(" ")}function T(){return x("")}function S(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function R(e){return function(t){return t.preventDefault(),e.call(this,t)}}function A(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function I(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:A(e,s,t[s])}function N(e){return Array.from(e.childNodes)}function P(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,s,r=!1){P(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function k(e,t,n,s){return L(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s(t)))}function O(e,t,n){return k(e,t,n,$)}function C(e,t,n){return k(e,t,n,y)}function H(e,t){return L(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>x(t)),!0)}function U(e){return H(e," ")}function M(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function j(e,t){const n=M(e,"HTML_TAG_START",0),s=M(e,"HTML_TAG_END",n);if(n===s)return new V(void 0,t);P(e);const r=e.splice(n,s-n+1);b(r[0]),b(r[r.length-1]);const o=r.slice(1,r.length-1);for(const t of o)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new V(o,t)}function D(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=null==t?"":t}function z(e,t,n,s){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function B(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function q(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=B();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=S(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=S(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(s||r&&n.contentWindow)&&r(),b(n)}}function K(e,t=document.body){return Array.from(t.querySelectorAll(e))}class J{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=y(t.nodeName):this.e=$(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)w(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(b)}}class V extends J{constructor(e,t=!1){super(t),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function F(e){h=e}function W(){if(!h)throw new Error("Function called outside component initialization");return h}function Y(e){W().$$.on_mount.push(e)}function X(e){W().$$.after_update.push(e)}function Q(e){W().$$.on_destroy.push(e)}const Z=[],ee=[],te=[],ne=[],se=Promise.resolve();let re=!1;function oe(e){te.push(e)}const ie=new Set;let ae=0;function ce(){const e=h;do{for(;ae<Z.length;){const e=Z[ae];ae++,F(e),le(e.$$)}for(F(null),Z.length=0,ae=0;ee.length;)ee.pop()();for(let e=0;e<te.length;e+=1){const t=te[e];ie.has(t)||(ie.add(t),t())}te.length=0}while(Z.length);for(;ne.length;)ne.pop()();re=!1,ie.clear(),F(e)}function le(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(oe)}}const ue=new Set;let fe;function de(){fe={r:0,c:[],p:fe}}function he(){fe.r||r(fe.c),fe=fe.p}function me(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function pe(e,t,n,s){if(e&&e.o){if(ue.has(e))return;ue.add(e),fe.c.push((()=>{ue.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}function ge(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(s[e]=1);for(const e in a)r[e]||(n[e]=a[e],r[e]=1);e[o]=a}else for(const e in i)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function we(e){return"object"==typeof e&&null!==e?e:{}}function ve(e){e&&e.c()}function be(e,t){e&&e.l(t)}function _e(e,t,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,s),i||oe((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(oe)}function $e(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){-1===e.$$.dirty[0]&&(Z.push(e),re||(re=!0,se.then(ce)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(t,n,o,i,a,c,l,u=[-1]){const f=h;F(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),p&&ye(t,e)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){m=!0;const e=N(n.target);d.fragment&&d.fragment.l(e),e.forEach(b)}else d.fragment&&d.fragment.c();n.intro&&me(t.$$.fragment),_e(t,n.target,n.anchor,n.customElement),m=!1,ce()}F(f)}class Ee{$destroy(){$e(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Te=[];function Se(t,n=e){let s;const r=new Set;function o(e){if(i(t,e)&&(t=e,s)){const e=!Te.length;for(const e of r)e[1](),Te.push(e,t);if(e){for(let e=0;e<Te.length;e+=2)Te[e][0](Te[e+1]);Te.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||e),i(t),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Re={};var Ae={owner:"v4lerio",repo:"infosecnews-help-gov-it",sites:[{name:"Parlamento",url:"https://www.parlamento.it/",maxResponseTime:5e3},{name:"Agenzia delle Entrate",url:"https://www.agenziaentrate.gov.it/",maxResponseTime:5e3},{name:"Governo",url:"https://www.governo.it/",maxResponseTime:5e3},{name:"Salute",url:"https://www.salute.gov.it/",maxResponseTime:5e3},{name:"Esteri",url:"https://www.esteri.it/",maxResponseTime:5e3},{name:"Giustizia",url:"https://www.giustizia.it/",maxResponseTime:5e3},{name:"Interno",url:"https://www.interno.gov.it/",maxResponseTime:5e3},{name:"Difesa",url:"https://www.difesa.it/",maxResponseTime:5e3},{name:"Economia e Finance (MEF)",url:"https://www.mef.gov.it/",maxResponseTime:5e3},{name:"Sviluppo Economico",url:"https://www.mise.gov.it/",maxResponseTime:5e3},{name:"Universita e Ricerca (MUR)",url:"https://www.mur.gov.it/",maxResponseTime:5e3},{name:"Lavoro",url:"https://www.lavoro.gov.it/",maxResponseTime:5e3},{name:"Infrastrutture e Trasporti",url:"https://www.mit.gov.it/",maxResponseTime:5e3},{name:"Politiche Agricole",url:"https://www.politicheagricole.it/",maxResponseTime:5e3},{name:"Ambiente",url:"https://www.mite.gov.it/",maxResponseTime:5e3},{name:"Beni Culturali",url:"https://www.beniculturali.it/",maxResponseTime:5e3}],"status-website":{baseUrl:"/infosecnews-help-gov-it",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"HelpGovIT",introTitle:"**HelpGovIT** - Micro progetto di supporto informativo.",introMessage:"Di seguito lo status dei portali web dei ministeri Italiani al servizio del cittadino...",navbar:[{title:"InfoSec.News",href:"https://infosec.news"}]},path:"https://v4lerio.github.io/infosecnews-help-gov-it",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Ie(e,t,n){const s=e.slice();return s[1]=t[n],s}function Ne(t){let n,s,r,o=Ae["status-website"]&&!Ae["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=$("img"),this.h()},l(e){n=O(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),c(n.src,s=Ae["status-website"].logoUrl)||A(n,"src",s),A(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&b(n)}}}(),i=Ae["status-website"]&&!Ae["status-website"].hideNavTitle&&function(t){let n,s,r=Ae["status-website"].name+"";return{c(){n=$("div"),s=x(r)},l(e){n=O(e,"DIV",{});var t=N(n);s=H(t,r),t.forEach(b)},m(e,t){v(e,n,t),g(n,s)},p:e,d(e){e&&b(n)}}}();return{c(){n=$("div"),s=$("a"),o&&o.c(),r=E(),i&&i.c(),this.h()},l(e){n=O(e,"DIV",{});var t=N(n);s=O(t,"A",{href:!0,class:!0});var a=N(s);o&&o.l(a),r=U(a),i&&i.l(a),a.forEach(b),t.forEach(b),this.h()},h(){A(s,"href",Ae["status-website"].logoHref||Ae.path),A(s,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),o&&o.m(s,null),g(s,r),i&&i.m(s,null)},p(e,t){Ae["status-website"]&&!Ae["status-website"].hideNavLogo&&o.p(e,t),Ae["status-website"]&&!Ae["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&b(n),o&&o.d(),i&&i.d()}}}function Pe(e){let t,n,s,r,o,i=e[1].title+"";return{c(){t=$("li"),n=$("a"),s=x(i),o=E(),this.h()},l(e){t=O(e,"LI",{});var r=N(t);n=O(r,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=N(n);s=H(a,i),a.forEach(b),o=U(r),r.forEach(b),this.h()},h(){A(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),A(n,"href",e[1].href.replace("$OWNER",Ae.owner).replace("$REPO",Ae.repo)),A(n,"target",e[1].target||"_self"),A(n,"class","svelte-a08hsz")},m(e,r){v(e,t,r),g(t,n),g(n,s),g(t,o)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&A(n,"aria-current",r)},d(e){e&&b(t)}}}function Le(t){let n,s,r,o,i,a=Ae["status-website"]&&Ae["status-website"].logoUrl&&Ne(),c=Ae["status-website"]&&Ae["status-website"].navbar&&function(e){let t,n=Ae["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Pe(Ie(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(1&r){let o;for(n=Ae["status-website"].navbar,o=0;o<n.length;o+=1){const i=Ie(e,n,o);s[o]?s[o].p(i,r):(s[o]=Pe(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){_(s,e),e&&b(t)}}}(t),l=Ae["status-website"]&&Ae["status-website"].navbarGitHub&&!Ae["status-website"].navbar&&function(t){let n,s,r,o=Ae.i18n.navGitHub+"";return{c(){n=$("li"),s=$("a"),r=x(o),this.h()},l(e){n=O(e,"LI",{});var t=N(n);s=O(t,"A",{href:!0,class:!0});var i=N(s);r=H(i,o),i.forEach(b),t.forEach(b),this.h()},h(){A(s,"href",`https://github.com/${Ae.owner}/${Ae.repo}`),A(s,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),g(s,r)},p:e,d(e){e&&b(n)}}}();return{c(){n=$("nav"),s=$("div"),a&&a.c(),r=E(),o=$("ul"),c&&c.c(),i=E(),l&&l.c(),this.h()},l(e){n=O(e,"NAV",{class:!0});var t=N(n);s=O(t,"DIV",{class:!0});var u=N(s);a&&a.l(u),r=U(u),o=O(u,"UL",{class:!0});var f=N(o);c&&c.l(f),i=U(f),l&&l.l(f),f.forEach(b),u.forEach(b),t.forEach(b),this.h()},h(){A(o,"class","svelte-a08hsz"),A(s,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(e,[t]){Ae["status-website"]&&Ae["status-website"].logoUrl&&a.p(e,t),Ae["status-website"]&&Ae["status-website"].navbar&&c.p(e,t),Ae["status-website"]&&Ae["status-website"].navbarGitHub&&!Ae["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&b(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function ke(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Oe extends Ee{constructor(e){super(),xe(this,e,ke,Le,i,{segment:0})}}var Ce={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function He(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ue(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Me(e,t){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=Ce[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(e);)s=e.substring(f,r.index),f=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+He(Ue(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Me(He(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Ue(r[8])+'" alt="'+Ue(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ue(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Me(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Ue(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function je(e,t,n){const s=e.slice();return s[3]=t[n],s}function De(e,t,n){const s=e.slice();return s[3]=t[n],s}function Ge(e,t,n){const s=e.slice();return s[8]=t[n],s}function ze(t){let n;return{c(){n=$("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${Ae.path}/themes/${(Ae["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&b(n)}}}function Be(t){let n;return{c(){n=$("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(Ae["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&b(n)}}}function qe(t){let n,s;return{c(){n=$("script"),this.h()},l(e){n=O(e,"SCRIPT",{src:!0}),N(n).forEach(b),this.h()},h(){c(n.src,s=t[8].src)||A(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&b(n)}}}function Ke(t){let n;return{c(){n=$("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",t[3].rel),A(n,"href",t[3].href),A(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&b(n)}}}function Je(t){let n;return{c(){n=$("meta"),this.h()},l(e){n=O(e,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",t[3].name),A(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&b(n)}}}function Ve(t){let n,s,r,o,i,a,c,u,f,d,h,m,p,w,y,x,S,R,I=Me(Ae.i18n.footer.replace(/\$REPO/,`https://github.com/${Ae.owner}/${Ae.repo}`))+"",P=(Ae["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(Ae["status-website"]||{}).customHeadHtml+"";return{c(){n=new V(!1),s=T(),this.h()},l(e){n=j(e,!1),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&b(s),e&&n.d()}}}();let L=((Ae["status-website"]||{}).themeUrl?Be:ze)(t),k=(Ae["status-website"]||{}).scripts&&function(e){let t,n=(Ae["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=qe(Ge(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Ae["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Ge(e,n,o);s[o]?s[o].p(i,r):(s[o]=qe(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){_(s,e),e&&b(t)}}}(t),C=(Ae["status-website"]||{}).links&&function(e){let t,n=(Ae["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ke(De(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Ae["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=De(e,n,o);s[o]?s[o].p(i,r):(s[o]=Ke(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){_(s,e),e&&b(t)}}}(t),H=(Ae["status-website"]||{}).metaTags&&function(e){let t,n=(Ae["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=Je(je(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Ae["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=je(e,n,o);s[o]?s[o].p(i,r):(s[o]=Je(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){_(s,e),e&&b(t)}}}(t),M=Ae["status-website"].css&&function(t){let n,s,r=`<style>${Ae["status-website"].css}</style>`;return{c(){n=new V(!1),s=T(),this.h()},l(e){n=j(e,!1),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&b(s),e&&n.d()}}}(),D=Ae["status-website"].js&&function(t){let n,s,r=`<script>${Ae["status-website"].js}<\/script>`;return{c(){n=new V(!1),s=T(),this.h()},l(e){n=j(e,!1),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&b(s),e&&n.d()}}}(),G=(Ae["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(Ae["status-website"]||{}).customBodyHtml+"";return{c(){n=new V(!1),s=T(),this.h()},l(e){n=j(e,!1),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&b(s),e&&n.d()}}}();m=new Oe({props:{segment:t[0]}});const z=t[2].default,B=function(e,t,n,s){if(e){const r=l(e,t,n,s);return e[0](r)}}(z,t,t[1],null);return{c(){P&&P.c(),n=T(),L.c(),s=$("link"),r=$("link"),o=$("link"),k&&k.c(),i=T(),C&&C.c(),a=T(),H&&H.c(),c=T(),M&&M.c(),u=T(),D&&D.c(),f=T(),d=E(),G&&G.c(),h=E(),ve(m.$$.fragment),p=E(),w=$("main"),B&&B.c(),y=E(),x=$("footer"),S=$("p"),this.h()},l(e){const t=K('[data-svelte="svelte-fmspuk"]',document.head);P&&P.l(t),n=T(),L.l(t),s=O(t,"LINK",{rel:!0,href:!0}),r=O(t,"LINK",{rel:!0,type:!0,href:!0}),o=O(t,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(t),i=T(),C&&C.l(t),a=T(),H&&H.l(t),c=T(),M&&M.l(t),u=T(),D&&D.l(t),f=T(),t.forEach(b),d=U(e),G&&G.l(e),h=U(e),be(m.$$.fragment,e),p=U(e),w=O(e,"MAIN",{class:!0});var l=N(w);B&&B.l(l),l.forEach(b),y=U(e),x=O(e,"FOOTER",{class:!0});var g=N(x);S=O(g,"P",{}),N(S).forEach(b),g.forEach(b),this.h()},h(){A(s,"rel","stylesheet"),A(s,"href",`${Ae.path}/global.css`),A(r,"rel","icon"),A(r,"type","image/svg"),A(r,"href",(Ae["status-website"]||{}).faviconSvg||(Ae["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),A(o,"rel","icon"),A(o,"type","image/png"),A(o,"href",(Ae["status-website"]||{}).favicon||"/logo-192.png"),A(w,"class","container"),A(x,"class","svelte-jbr799")},m(e,t){P&&P.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,a),H&&H.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,f),v(e,d,t),G&&G.m(e,t),v(e,h,t),_e(m,e,t),v(e,p,t),v(e,w,t),B&&B.m(w,null),v(e,y,t),v(e,x,t),g(x,S),S.innerHTML=I,R=!0},p(e,[t]){(Ae["status-website"]||{}).customHeadHtml&&P.p(e,t),L.p(e,t),(Ae["status-website"]||{}).scripts&&k.p(e,t),(Ae["status-website"]||{}).links&&C.p(e,t),(Ae["status-website"]||{}).metaTags&&H.p(e,t),Ae["status-website"].css&&M.p(e,t),Ae["status-website"].js&&D.p(e,t),(Ae["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),m.$set(n),B&&B.p&&(!R||2&t)&&function(e,t,n,s,r,o){if(r){const i=l(t,n,s,o);e.p(i,r)}}(B,z,e,e[1],R?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(z,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){R||(me(m.$$.fragment,e),me(B,e),R=!0)},o(e){pe(m.$$.fragment,e),pe(B,e),R=!1},d(e){P&&P.d(e),b(n),L.d(e),b(s),b(r),b(o),k&&k.d(e),b(i),C&&C.d(e),b(a),H&&H.d(e),b(c),M&&M.d(e),b(u),D&&D.d(e),b(f),e&&b(d),G&&G.d(e),e&&b(h),$e(m,e),e&&b(p),e&&b(w),B&&B.d(e),e&&b(y),e&&b(x)}}}function Fe(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class We extends Ee{constructor(e){super(),xe(this,e,Fe,Ve,i,{segment:0})}}function Ye(e){let t,n,s=e[1].stack+"";return{c(){t=$("pre"),n=x(s)},l(e){t=O(e,"PRE",{});var r=N(t);n=H(r,s),r.forEach(b)},m(e,s){v(e,t,s),g(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&D(n,s)},d(e){e&&b(t)}}}function Xe(t){let n,s,r,o,i,a,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Ye(t);return{c(){s=E(),r=$("h1"),o=x(t[0]),i=E(),a=$("p"),c=x(f),l=E(),d&&d.c(),u=T(),this.h()},l(e){K('[data-svelte="svelte-1moakz"]',document.head).forEach(b),s=U(e),r=O(e,"H1",{class:!0});var n=N(r);o=H(n,t[0]),n.forEach(b),i=U(e),a=O(e,"P",{class:!0});var h=N(a);c=H(h,f),h.forEach(b),l=U(e),d&&d.l(e),u=T(),this.h()},h(){A(r,"class","svelte-17w3omn"),A(a,"class","svelte-17w3omn")},m(e,t){v(e,s,t),v(e,r,t),g(r,o),v(e,i,t),v(e,a,t),g(a,c),v(e,l,t),d&&d.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&D(o,e[0]),2&t&&f!==(f=e[1].message+"")&&D(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Ye(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&b(s),e&&b(r),e&&b(i),e&&b(a),e&&b(l),d&&d.d(e),e&&b(u)}}}function Qe(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Ze extends Ee{constructor(e){super(),xe(this,e,Qe,Xe,i,{status:0,error:1})}}function et(e){let n,s,r;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ve(n.$$.fragment),s=T()},l(e){n&&be(n.$$.fragment,e),s=T()},m(e,t){n&&_e(n,e,t),v(e,s,t),r=!0},p(e,t){const r=16&t?ge(o,[we(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){de();const e=n;pe(e.$$.fragment,1,0,(()=>{$e(e,1)})),he()}i?(n=new i(a()),ve(n.$$.fragment),me(n.$$.fragment,1),_e(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(e){r||(n&&me(n.$$.fragment,e),r=!0)},o(e){n&&pe(n.$$.fragment,e),r=!1},d(e){e&&b(s),n&&$e(n,e)}}}function tt(e){let t,n;return t=new Ze({props:{error:e[0],status:e[1]}}),{c(){ve(t.$$.fragment)},l(e){be(t.$$.fragment,e)},m(e,s){_e(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(me(t.$$.fragment,e),n=!0)},o(e){pe(t.$$.fragment,e),n=!1},d(e){$e(t,e)}}}function nt(e){let t,n,s,r;const o=[tt,et],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),s=T()},l(e){n.l(e),s=T()},m(e,n){i[t].m(e,n),v(e,s,n),r=!0},p(e,r){let c=t;t=a(e),t===c?i[t].p(e,r):(de(),pe(i[c],1,1,(()=>{i[c]=null})),he(),n=i[t],n?n.p(e,r):(n=i[t]=o[t](e),n.c()),me(n,1),n.m(s.parentNode,s))},i(e){r||(me(n),r=!0)},o(e){pe(n),r=!1},d(e){i[t].d(e),e&&b(s)}}}function st(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[nt]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new We({props:o}),{c(){ve(n.$$.fragment)},l(e){be(n.$$.fragment,e)},m(e,t){_e(n,e,t),s=!0},p(e,[t]){const s=12&t?ge(r,[4&t&&{segment:e[2][0]},8&t&&we(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(me(n.$$.fragment,e),s=!0)},o(e){pe(n.$$.fragment,e),s=!1},d(e){$e(n,e)}}}function rt(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return X(l),u=Re,f=s,W().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,i,a,c,s,l]}class ot extends Ee{constructor(e){super(),xe(this,e,rt,st,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const it=[],at=[{js:()=>Promise.all([import("./index.833562c8.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.f1b75721.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.678b82d1.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.7bdfd33e.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.e9f8d0d7.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],ct=(lt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:lt(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:lt(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var lt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ut(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function a(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))}function ft(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let dt,ht=1;const mt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},pt={};let gt,wt;function vt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function bt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(gt))return null;let t=e.pathname.slice(gt.length);if(""===t&&(t="/"),!it.some((e=>e.test(t))))for(let n=0;n<ct.length;n+=1){const s=ct[n],r=s.pattern.exec(t);if(r){const n=vt(e.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:s,match:r,page:a}}}}function _t(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ft(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=bt(r);if(o){xt(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),mt.pushState({id:dt},"",r.href)}}function $t(){return{x:pageXOffset,y:pageYOffset}}function yt(e){if(pt[dt]=$t(),e.state){const t=bt(new URL(location.href));t?xt(t,e.state.id):location.href=location.href}else!function(e){ht=e}(ht+1),function(e){dt=e}(ht),mt.replaceState({id:dt},"",location.href)}function xt(e,t,n,s){return ut(this,void 0,void 0,(function*(){const r=!!t;if(r)dt=t;else{const e=$t();pt[dt]=e,dt=t=++ht,pt[dt]=n?e:{x:0,y:0}}if(yield wt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=pt[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),pt[dt]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Et(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let Tt,St=null;function Rt(e){const t=ft(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=bt(new URL(e,Et(document)));if(t)St&&e===St.href||(St={href:e,promise:qt(t)}),St.promise}(t.href)}function At(e){clearTimeout(Tt),Tt=setTimeout((()=>{Rt(e)}),20)}function It(e,t={noscroll:!1,replaceState:!1}){const n=bt(new URL(e,Et(document)));if(n){const s=xt(n,null,t.noscroll);return mt[t.replaceState?"replaceState":"pushState"]({id:dt},"",e),s}return location.href=e,new Promise((()=>{}))}const Nt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pt,Lt,kt,Ot=!1,Ct=[],Ht="{}";const Ut={page:function(e){const t=Se(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:Se(null),session:Se(Nt&&Nt.session)};let Mt,jt,Dt;function Gt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function zt(e){return ut(this,void 0,void 0,(function*(){Pt&&Ut.preloading.set(!0);const t=function(e){return St&&St.href===e.href?St.promise:qt(e)}(e),n=Lt={},s=yield t,{redirect:r}=s;if(n===Lt)if(r)yield It(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Bt(n,t,Gt(t,e.page))}}))}function Bt(e,t,n){return ut(this,void 0,void 0,(function*(){Ut.page.set(n),Ut.preloading.set(!1),Pt?Pt.$set(t):(t.stores={page:{subscribe:Ut.page.subscribe},preloading:{subscribe:Ut.preloading.subscribe},session:Ut.session},t.level0={props:yield kt},t.notify=Ut.page.notify,Pt=new ot({target:Dt,props:t,hydrate:!0})),Ct=e,Ht=JSON.stringify(n.query),Ot=!0,jt=!1}))}function qt(e){return ut(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!kt){const e=()=>({});kt=Nt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Mt)}let a,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>ut(this,void 0,void 0,(function*(){const f=s[a];if(function(e,t,n,s){if(s!==Ht)return!0;const r=Ct[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,r)&&(u=!0),o.segments[c]=s[a+1],!t)return{segment:f};const d=c++;let h;if(jt||u||!Ct[a]||Ct[a].part!==t.i){u=!1;const{default:s,preload:r}=yield at[t.i].js();let o;o=Ot||!Nt.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Mt):{}:Nt.preloaded[a+1],h={component:s,props:o,segment:f,match:l,part:t.i}}else h=Ct[a];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Kt,Jt,Vt;Ut.session.subscribe((e=>ut(void 0,void 0,void 0,(function*(){if(Mt=e,!Ot)return;jt=!0;const t=bt(new URL(location.href)),n=Lt={},{redirect:s,props:r,branch:o}=yield qt(t);n===Lt&&(s?yield It(s.location,{replaceState:!0}):yield Bt(o,r,Gt(r,t.page)))})))),Kt={target:document.querySelector("#sapper")},Jt=Kt.target,Dt=Jt,Vt=Nt.baseUrl,gt=Vt,wt=zt,"scrollRestoration"in mt&&(mt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{mt.scrollRestoration="auto"})),addEventListener("load",(()=>{mt.scrollRestoration="manual"})),addEventListener("click",_t),addEventListener("popstate",yt),addEventListener("touchstart",Rt),addEventListener("mousemove",At),Nt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Nt;kt||(kt=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:kt},level1:{props:{status:o,error:i},component:Ze},segments:r},c=vt(n);Bt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;mt.replaceState({id:ht},"",t);const n=bt(new URL(location.href));if(n)return xt(n,ht,!0,e)}));export{D as A,S as B,r as C,ee as D,j as E,c as F,f as G,V as H,z as I,K as J,Me as K,y as L,C as M,It as N,G as O,R as P,t as Q,I as R,Ee as S,ge as T,X as U,Q as V,u as W,we as X,oe as Y,q as Z,E as a,O as b,U as c,N as d,$ as e,b as f,A as g,v as h,xe as i,de as j,he as k,me as l,x as m,H as n,Y as o,g as p,e as q,Ae as r,i as s,pe as t,T as u,_ as v,ve as w,be as x,_e as y,$e as z};

import __inject_styles from './inject_styles.803b7e80.js';