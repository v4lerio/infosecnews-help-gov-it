function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}let d,h,m=!1;function p(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function g(e,t){if(m){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const s=t[n];void 0!==s.claim_order&&e.push(s)}t=e}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(r>0&&t[n[r]].claim_order<=o?r+1:p(1,r,(e=>t[n[e]].claim_order),o))-1;s[e]=n[i]+1;const a=i+1;n[a]=e,r=Math.max(a,r)}const o=[],i=[];let a=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(i[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function b(e,t,n){m&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function T(){return E("")}function S(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function R(e){return function(t){return t.preventDefault(),e.call(this,t)}}function A(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function I(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:A(e,s,t[s])}function N(e){return Array.from(e.childNodes)}function P(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,s,r=!1){P(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function k(e,t,n,s){return L(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s?y(t):_(t)))}function O(e,t){return L(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function C(e){return O(e," ")}function H(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function U(e){const t=H(e,"HTML_TAG_START",0),n=H(e,"HTML_TAG_END",t);if(t===n)return new q;P(e);const s=e.splice(t,n+1);v(s[0]),v(s[s.length-1]);const r=s.slice(1,s.length-1);for(const t of r)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new q(r)}function M(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function j(e,t){e.value=null==t?"":t}function D(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function G(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=_("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=D();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=S(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=S(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(s||r&&n.contentWindow)&&r(),v(n)}}function z(e,t=document.body){return Array.from(t.querySelectorAll(e))}class q extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=_(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)w(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}}function B(e){h=e}function K(){if(!h)throw new Error("Function called outside component initialization");return h}function J(e){K().$$.on_mount.push(e)}function V(e){K().$$.after_update.push(e)}function F(e){K().$$.on_destroy.push(e)}const W=[],Y=[],X=[],Q=[],Z=Promise.resolve();let ee=!1;function te(e){X.push(e)}let ne=!1;const se=new Set;function re(){if(!ne){ne=!0;do{for(let e=0;e<W.length;e+=1){const t=W[e];B(t),oe(t.$$)}for(B(null),W.length=0;Y.length;)Y.pop()();for(let e=0;e<X.length;e+=1){const t=X[e];se.has(t)||(se.add(t),t())}X.length=0}while(W.length);for(;Q.length;)Q.pop()();ee=!1,ne=!1,se.clear()}}function oe(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}const ie=new Set;let ae;function ce(){ae={r:0,c:[],p:ae}}function le(){ae.r||r(ae.c),ae=ae.p}function ue(e,t){e&&e.i&&(ie.delete(e),e.i(t))}function fe(e,t,n,s){if(e&&e.o){if(ie.has(e))return;ie.add(e),ae.c.push((()=>{ie.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function de(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(s[e]=1);for(const e in a)r[e]||(n[e]=a[e],r[e]=1);e[o]=a}else for(const e in i)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function he(e){return"object"==typeof e&&null!==e?e:{}}function me(e){e&&e.c()}function pe(e,t){e&&e.l(t)}function ge(e,t,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,s),i||te((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(te)}function we(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function be(e,t){-1===e.$$.dirty[0]&&(W.push(e),ee||(ee=!0,Z.then(re)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(t,n,o,i,a,c,l,u=[-1]){const f=h;B(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),p&&be(t,e)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){m=!0;const e=N(n.target);d.fragment&&d.fragment.l(e),e.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&ue(t.$$.fragment),ge(t,n.target,n.anchor,n.customElement),m=!1,re()}B(f)}class $e{$destroy(){we(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _e=[];function ye(t,n=e){let s;const r=new Set;function o(e){if(i(t,e)&&(t=e,s)){const e=!_e.length;for(const e of r)e[1](),_e.push(e,t);if(e){for(let e=0;e<_e.length;e+=2)_e[e][0](_e[e+1]);_e.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||e),i(t),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Ee={};var xe={owner:"v4lerio",repo:"infosecnews-help-gov-it",sites:[{name:"Parlamento",url:"https://www.parlamento.it/",maxResponseTime:5e3},{name:"Agenzia delle Entrate",url:"https://www.agenziaentrate.gov.it/",maxResponseTime:5e3},{name:"Governo",url:"https://www.governo.it/",maxResponseTime:5e3},{name:"Salute",url:"https://www.salute.gov.it/",maxResponseTime:5e3},{name:"Esteri",url:"https://www.esteri.it/",maxResponseTime:5e3},{name:"Giustizia",url:"https://www.giustizia.it/",maxResponseTime:5e3},{name:"Interno",url:"https://www.interno.gov.it/",maxResponseTime:5e3},{name:"Difesa",url:"https://www.difesa.it/",maxResponseTime:5e3},{name:"Economia e Finance (MEF)",url:"https://www.mef.gov.it/",maxResponseTime:5e3},{name:"Sviluppo Economico",url:"https://www.mise.gov.it/",maxResponseTime:5e3},{name:"Universita e Ricerca (MUR)",url:"https://www.mur.gov.it/",maxResponseTime:5e3},{name:"Lavoro",url:"https://www.lavoro.gov.it/",maxResponseTime:5e3},{name:"Infrastrutture e Trasporti",url:"https://www.mit.gov.it/",maxResponseTime:5e3},{name:"Politiche Agricole",url:"https://www.politicheagricole.it/",maxResponseTime:5e3},{name:"Ambiente",url:"https://www.mite.gov.it/",maxResponseTime:5e3},{name:"Beni Culturali",url:"https://www.beniculturali.it/",maxResponseTime:5e3}],"status-website":{baseUrl:"/infosecnews-help-gov-it",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"HelpGovIT",introTitle:"**HelpGovIT** - Micro progetto di supporto informativo.",introMessage:"Di seguito lo status dei portali web dei ministeri Italiani al servizio del cittadino...",navbar:[{title:"InfoSec.News",href:"https://infosec.news"}]},path:"https://v4lerio.github.io/infosecnews-help-gov-it",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Te(e,t,n){const s=e.slice();return s[1]=t[n],s}function Se(t){let n,s,r,o=xe["status-website"]&&!xe["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=_("img"),this.h()},l(e){n=k(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),c(n.src,s=xe["status-website"].logoUrl)||A(n,"src",s),A(n,"class","svelte-a08hsz")},m(e,t){b(e,n,t)},p:e,d(e){e&&v(n)}}}(),i=xe["status-website"]&&!xe["status-website"].hideNavTitle&&function(t){let n,s,r=xe["status-website"].name+"";return{c(){n=_("div"),s=E(r)},l(e){n=k(e,"DIV",{});var t=N(n);s=O(t,r),t.forEach(v)},m(e,t){b(e,n,t),g(n,s)},p:e,d(e){e&&v(n)}}}();return{c(){n=_("div"),s=_("a"),o&&o.c(),r=x(),i&&i.c(),this.h()},l(e){n=k(e,"DIV",{});var t=N(n);s=k(t,"A",{href:!0,class:!0});var a=N(s);o&&o.l(a),r=C(a),i&&i.l(a),a.forEach(v),t.forEach(v),this.h()},h(){A(s,"href",xe["status-website"].logoHref||xe.path),A(s,"class","logo svelte-a08hsz")},m(e,t){b(e,n,t),g(n,s),o&&o.m(s,null),g(s,r),i&&i.m(s,null)},p(e,t){xe["status-website"]&&!xe["status-website"].hideNavLogo&&o.p(e,t),xe["status-website"]&&!xe["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&v(n),o&&o.d(),i&&i.d()}}}function Re(e){let t,n,s,r,o,i,a=e[1].title+"";return{c(){t=_("li"),n=_("a"),s=E(a),i=x(),this.h()},l(e){t=k(e,"LI",{});var r=N(t);n=k(r,"A",{"aria-current":!0,href:!0,class:!0});var o=N(n);s=O(o,a),o.forEach(v),i=C(r),r.forEach(v),this.h()},h(){A(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),A(n,"href",o=e[1].href.replace("$OWNER",xe.owner).replace("$REPO",xe.repo)),A(n,"class","svelte-a08hsz")},m(e,r){b(e,t,r),g(t,n),g(n,s),g(t,i)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&A(n,"aria-current",r)},d(e){e&&v(t)}}}function Ae(t){let n,s,r,o,i,a=xe["status-website"]&&xe["status-website"].logoUrl&&Se(),c=xe["status-website"]&&xe["status-website"].navbar&&function(e){let t,n=xe["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Re(Te(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(1&r){let o;for(n=xe["status-website"].navbar,o=0;o<n.length;o+=1){const i=Te(e,n,o);s[o]?s[o].p(i,r):(s[o]=Re(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&v(t)}}}(t),l=xe["status-website"]&&xe["status-website"].navbarGitHub&&!xe["status-website"].navbar&&function(t){let n,s,r,o=xe.i18n.navGitHub+"";return{c(){n=_("li"),s=_("a"),r=E(o),this.h()},l(e){n=k(e,"LI",{});var t=N(n);s=k(t,"A",{href:!0,class:!0});var i=N(s);r=O(i,o),i.forEach(v),t.forEach(v),this.h()},h(){A(s,"href",`https://github.com/${xe.owner}/${xe.repo}`),A(s,"class","svelte-a08hsz")},m(e,t){b(e,n,t),g(n,s),g(s,r)},p:e,d(e){e&&v(n)}}}();return{c(){n=_("nav"),s=_("div"),a&&a.c(),r=x(),o=_("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(e){n=k(e,"NAV",{class:!0});var t=N(n);s=k(t,"DIV",{class:!0});var u=N(s);a&&a.l(u),r=C(u),o=k(u,"UL",{class:!0});var f=N(o);c&&c.l(f),i=C(f),l&&l.l(f),f.forEach(v),u.forEach(v),t.forEach(v),this.h()},h(){A(o,"class","svelte-a08hsz"),A(s,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(e,t){b(e,n,t),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(e,[t]){xe["status-website"]&&xe["status-website"].logoUrl&&a.p(e,t),xe["status-website"]&&xe["status-website"].navbar&&c.p(e,t),xe["status-website"]&&xe["status-website"].navbarGitHub&&!xe["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&v(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Ie(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Ne extends $e{constructor(e){super(),ve(this,e,Ie,Ae,i,{segment:0})}}var Pe={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Le(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function ke(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oe(e,t){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=Pe[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(e);)s=e.substring(f,r.index),f=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Le(ke(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Oe(Le(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+ke(r[8])+'" alt="'+ke(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+ke(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Oe(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+ke(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Ce(e,t,n){const s=e.slice();return s[3]=t[n],s}function He(e,t,n){const s=e.slice();return s[3]=t[n],s}function Ue(e,t,n){const s=e.slice();return s[8]=t[n],s}function Me(t){let n;return{c(){n=_("link"),this.h()},l(e){n=k(e,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${xe.path}/themes/${(xe["status-website"]||{}).theme||"light"}.css`)},m(e,t){b(e,n,t)},p:e,d(e){e&&v(n)}}}function je(t){let n;return{c(){n=_("link"),this.h()},l(e){n=k(e,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(xe["status-website"]||{}).themeUrl)},m(e,t){b(e,n,t)},p:e,d(e){e&&v(n)}}}function De(t){let n,s;return{c(){n=_("script"),this.h()},l(e){n=k(e,"SCRIPT",{src:!0}),N(n).forEach(v),this.h()},h(){c(n.src,s=t[8].src)||A(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){b(e,n,t)},p:e,d(e){e&&v(n)}}}function Ge(t){let n;return{c(){n=_("link"),this.h()},l(e){n=k(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",t[3].rel),A(n,"href",t[3].href),A(n,"media",t[3].media)},m(e,t){b(e,n,t)},p:e,d(e){e&&v(n)}}}function ze(t){let n;return{c(){n=_("meta"),this.h()},l(e){n=k(e,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",t[3].name),A(n,"content",t[3].content)},m(e,t){b(e,n,t)},p:e,d(e){e&&v(n)}}}function qe(t){let n,s,r,o,i,a,c,u,f,d,h,m,p,w,y,E,S,R,I=Oe(xe.i18n.footer.replace(/\$REPO/,`https://github.com/${xe.owner}/${xe.repo}`))+"",P=(xe["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(xe["status-website"]||{}).customHeadHtml+"";return{c(){n=new q,s=T(),this.h()},l(e){n=U(e),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&v(s),e&&n.d()}}}();let L=((xe["status-website"]||{}).themeUrl?je:Me)(t),O=(xe["status-website"]||{}).scripts&&function(e){let t,n=(xe["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=De(Ue(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(0&r){let o;for(n=(xe["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Ue(e,n,o);s[o]?s[o].p(i,r):(s[o]=De(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&v(t)}}}(t),H=(xe["status-website"]||{}).links&&function(e){let t,n=(xe["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ge(He(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(0&r){let o;for(n=(xe["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=He(e,n,o);s[o]?s[o].p(i,r):(s[o]=Ge(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&v(t)}}}(t),M=(xe["status-website"]||{}).metaTags&&function(e){let t,n=(xe["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=ze(Ce(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(0&r){let o;for(n=(xe["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ce(e,n,o);s[o]?s[o].p(i,r):(s[o]=ze(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&v(t)}}}(t),j=xe["status-website"].css&&function(t){let n,s,r=`<style>${xe["status-website"].css}</style>`;return{c(){n=new q,s=T(),this.h()},l(e){n=U(e),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&v(s),e&&n.d()}}}(),D=xe["status-website"].js&&function(t){let n,s,r=`<script>${xe["status-website"].js}<\/script>`;return{c(){n=new q,s=T(),this.h()},l(e){n=U(e),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&v(s),e&&n.d()}}}(),G=(xe["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(xe["status-website"]||{}).customBodyHtml+"";return{c(){n=new q,s=T(),this.h()},l(e){n=U(e),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&v(s),e&&n.d()}}}();m=new Ne({props:{segment:t[0]}});const B=t[2].default,K=function(e,t,n,s){if(e){const r=l(e,t,n,s);return e[0](r)}}(B,t,t[1],null);return{c(){P&&P.c(),n=T(),L.c(),s=_("link"),r=_("link"),o=_("link"),O&&O.c(),i=T(),H&&H.c(),a=T(),M&&M.c(),c=T(),j&&j.c(),u=T(),D&&D.c(),f=T(),d=x(),G&&G.c(),h=x(),me(m.$$.fragment),p=x(),w=_("main"),K&&K.c(),y=x(),E=_("footer"),S=_("p"),this.h()},l(e){const t=z('[data-svelte="svelte-ri9y7q"]',document.head);P&&P.l(t),n=T(),L.l(t),s=k(t,"LINK",{rel:!0,href:!0}),r=k(t,"LINK",{rel:!0,type:!0,href:!0}),o=k(t,"LINK",{rel:!0,type:!0,href:!0}),O&&O.l(t),i=T(),H&&H.l(t),a=T(),M&&M.l(t),c=T(),j&&j.l(t),u=T(),D&&D.l(t),f=T(),t.forEach(v),d=C(e),G&&G.l(e),h=C(e),pe(m.$$.fragment,e),p=C(e),w=k(e,"MAIN",{class:!0});var l=N(w);K&&K.l(l),l.forEach(v),y=C(e),E=k(e,"FOOTER",{class:!0});var g=N(E);S=k(g,"P",{}),N(S).forEach(v),g.forEach(v),this.h()},h(){A(s,"rel","stylesheet"),A(s,"href",`${xe.path}/global.css`),A(r,"rel","icon"),A(r,"type","image/svg"),A(r,"href",(xe["status-website"]||{}).faviconSvg||(xe["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),A(o,"rel","icon"),A(o,"type","image/png"),A(o,"href",(xe["status-website"]||{}).favicon||"/logo-192.png"),A(w,"class","container"),A(E,"class","svelte-jbr799")},m(e,t){P&&P.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),O&&O.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,a),M&&M.m(document.head,null),g(document.head,c),j&&j.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,f),b(e,d,t),G&&G.m(e,t),b(e,h,t),ge(m,e,t),b(e,p,t),b(e,w,t),K&&K.m(w,null),b(e,y,t),b(e,E,t),g(E,S),S.innerHTML=I,R=!0},p(e,[t]){(xe["status-website"]||{}).customHeadHtml&&P.p(e,t),L.p(e,t),(xe["status-website"]||{}).scripts&&O.p(e,t),(xe["status-website"]||{}).links&&H.p(e,t),(xe["status-website"]||{}).metaTags&&M.p(e,t),xe["status-website"].css&&j.p(e,t),xe["status-website"].js&&D.p(e,t),(xe["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),m.$set(n),K&&K.p&&(!R||2&t)&&function(e,t,n,s,r,o){if(r){const i=l(t,n,s,o);e.p(i,r)}}(K,B,e,e[1],R?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(B,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){R||(ue(m.$$.fragment,e),ue(K,e),R=!0)},o(e){fe(m.$$.fragment,e),fe(K,e),R=!1},d(e){P&&P.d(e),v(n),L.d(e),v(s),v(r),v(o),O&&O.d(e),v(i),H&&H.d(e),v(a),M&&M.d(e),v(c),j&&j.d(e),v(u),D&&D.d(e),v(f),e&&v(d),G&&G.d(e),e&&v(h),we(m,e),e&&v(p),e&&v(w),K&&K.d(e),e&&v(y),e&&v(E)}}}function Be(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class Ke extends $e{constructor(e){super(),ve(this,e,Be,qe,i,{segment:0})}}function Je(e){let t,n,s=e[1].stack+"";return{c(){t=_("pre"),n=E(s)},l(e){t=k(e,"PRE",{});var r=N(t);n=O(r,s),r.forEach(v)},m(e,s){b(e,t,s),g(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&M(n,s)},d(e){e&&v(t)}}}function Ve(t){let n,s,r,o,i,a,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Je(t);return{c(){s=x(),r=_("h1"),o=E(t[0]),i=x(),a=_("p"),c=E(f),l=x(),d&&d.c(),u=T(),this.h()},l(e){z('[data-svelte="svelte-1moakz"]',document.head).forEach(v),s=C(e),r=k(e,"H1",{class:!0});var n=N(r);o=O(n,t[0]),n.forEach(v),i=C(e),a=k(e,"P",{class:!0});var h=N(a);c=O(h,f),h.forEach(v),l=C(e),d&&d.l(e),u=T(),this.h()},h(){A(r,"class","svelte-17w3omn"),A(a,"class","svelte-17w3omn")},m(e,t){b(e,s,t),b(e,r,t),g(r,o),b(e,i,t),b(e,a,t),g(a,c),b(e,l,t),d&&d.m(e,t),b(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&M(o,e[0]),2&t&&f!==(f=e[1].message+"")&&M(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Je(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&v(s),e&&v(r),e&&v(i),e&&v(a),e&&v(l),d&&d.d(e),e&&v(u)}}}function Fe(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class We extends $e{constructor(e){super(),ve(this,e,Fe,Ve,i,{status:0,error:1})}}function Ye(e){let n,s,r;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&me(n.$$.fragment),s=T()},l(e){n&&pe(n.$$.fragment,e),s=T()},m(e,t){n&&ge(n,e,t),b(e,s,t),r=!0},p(e,t){const r=16&t?de(o,[he(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ce();const e=n;fe(e.$$.fragment,1,0,(()=>{we(e,1)})),le()}i?(n=new i(a()),me(n.$$.fragment),ue(n.$$.fragment,1),ge(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(e){r||(n&&ue(n.$$.fragment,e),r=!0)},o(e){n&&fe(n.$$.fragment,e),r=!1},d(e){e&&v(s),n&&we(n,e)}}}function Xe(e){let t,n;return t=new We({props:{error:e[0],status:e[1]}}),{c(){me(t.$$.fragment)},l(e){pe(t.$$.fragment,e)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(ue(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){we(t,e)}}}function Qe(e){let t,n,s,r;const o=[Xe,Ye],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),s=T()},l(e){n.l(e),s=T()},m(e,n){i[t].m(e,n),b(e,s,n),r=!0},p(e,r){let c=t;t=a(e),t===c?i[t].p(e,r):(ce(),fe(i[c],1,1,(()=>{i[c]=null})),le(),n=i[t],n?n.p(e,r):(n=i[t]=o[t](e),n.c()),ue(n,1),n.m(s.parentNode,s))},i(e){r||(ue(n),r=!0)},o(e){fe(n),r=!1},d(e){i[t].d(e),e&&v(s)}}}function Ze(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[Qe]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new Ke({props:o}),{c(){me(n.$$.fragment)},l(e){pe(n.$$.fragment,e)},m(e,t){ge(n,e,t),s=!0},p(e,[t]){const s=12&t?de(r,[4&t&&{segment:e[2][0]},8&t&&he(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(ue(n.$$.fragment,e),s=!0)},o(e){fe(n.$$.fragment,e),s=!1},d(e){we(n,e)}}}function et(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return V(l),u=Ee,f=s,K().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,i,a,c,s,l]}class tt extends $e{constructor(e){super(),ve(this,e,et,Ze,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const nt=[],st=[{js:()=>Promise.all([import("./index.93ce4cf5.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.2ae0e330.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].d3007ac6.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].185f32a8.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.770efc16.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],rt=(ot=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:ot(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:ot(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ot;
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
function it(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function a(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))}function at(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ct,lt=1;const ut="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ft={};let dt,ht;function mt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function pt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(dt))return null;let t=e.pathname.slice(dt.length);if(""===t&&(t="/"),!nt.some((e=>e.test(t))))for(let n=0;n<rt.length;n+=1){const s=rt[n],r=s.pattern.exec(t);if(r){const n=mt(e.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:s,match:r,page:a}}}}function gt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=at(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=pt(r);if(o){vt(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),ut.pushState({id:ct},"",r.href)}}function wt(){return{x:pageXOffset,y:pageYOffset}}function bt(e){if(ft[ct]=wt(),e.state){const t=pt(new URL(location.href));t?vt(t,e.state.id):location.href=location.href}else!function(e){lt=e}(lt+1),function(e){ct=e}(lt),ut.replaceState({id:ct},"",location.href)}function vt(e,t,n,s){return it(this,void 0,void 0,(function*(){const r=!!t;if(r)ct=t;else{const e=wt();ft[ct]=e,ct=t=++lt,ft[ct]=n?e:{x:0,y:0}}if(yield ht(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ft[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ft[ct]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function $t(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let _t,yt=null;function Et(e){const t=at(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=pt(new URL(e,$t(document)));if(t)yt&&e===yt.href||(yt={href:e,promise:Dt(t)}),yt.promise}(t.href)}function xt(e){clearTimeout(_t),_t=setTimeout((()=>{Et(e)}),20)}function Tt(e,t={noscroll:!1,replaceState:!1}){const n=pt(new URL(e,$t(document)));if(n){const s=vt(n,null,t.noscroll);return ut[t.replaceState?"replaceState":"pushState"]({id:ct},"",e),s}return location.href=e,new Promise((()=>{}))}const St="undefined"!=typeof __SAPPER__&&__SAPPER__;let Rt,At,It,Nt=!1,Pt=[],Lt="{}";const kt={page:function(e){const t=ye(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:ye(null),session:ye(St&&St.session)};let Ot,Ct,Ht;function Ut(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Mt(e){return it(this,void 0,void 0,(function*(){Rt&&kt.preloading.set(!0);const t=function(e){return yt&&yt.href===e.href?yt.promise:Dt(e)}(e),n=At={},s=yield t,{redirect:r}=s;if(n===At)if(r)yield Tt(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield jt(n,t,Ut(t,e.page))}}))}function jt(e,t,n){return it(this,void 0,void 0,(function*(){kt.page.set(n),kt.preloading.set(!1),Rt?Rt.$set(t):(t.stores={page:{subscribe:kt.page.subscribe},preloading:{subscribe:kt.preloading.subscribe},session:kt.session},t.level0={props:yield It},t.notify=kt.page.notify,Rt=new tt({target:Ht,props:t,hydrate:!0})),Pt=e,Lt=JSON.stringify(n.query),Nt=!0,Ct=!1}))}function Dt(e){return it(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!It){const e=()=>({});It=St.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ot)}let a,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>it(this,void 0,void 0,(function*(){const f=s[a];if(function(e,t,n,s){if(s!==Lt)return!0;const r=Pt[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,r)&&(u=!0),o.segments[c]=s[a+1],!t)return{segment:f};const d=c++;let h;if(Ct||u||!Pt[a]||Pt[a].part!==t.i){u=!1;const{default:s,preload:r}=yield st[t.i].js();let o;o=Nt||!St.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ot):{}:St.preloaded[a+1],h={component:s,props:o,segment:f,match:l,part:t.i}}else h=Pt[a];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Gt,zt,qt;kt.session.subscribe((e=>it(void 0,void 0,void 0,(function*(){if(Ot=e,!Nt)return;Ct=!0;const t=pt(new URL(location.href)),n=At={},{redirect:s,props:r,branch:o}=yield Dt(t);n===At&&(s?yield Tt(s.location,{replaceState:!0}):yield jt(o,r,Ut(r,t.page)))})))),Gt={target:document.querySelector("#sapper")},zt=Gt.target,Ht=zt,qt=St.baseUrl,dt=qt,ht=Mt,"scrollRestoration"in ut&&(ut.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ut.scrollRestoration="auto"})),addEventListener("load",(()=>{ut.scrollRestoration="manual"})),addEventListener("click",gt),addEventListener("popstate",bt),addEventListener("touchstart",Et),addEventListener("mousemove",xt),St.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:i}=St;It||(It=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:It},level1:{props:{status:o,error:i},component:We},segments:r},c=mt(n);jt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ut.replaceState({id:lt},"",t);const n=pt(new URL(location.href));if(n)return vt(n,lt,!0,e)}));export{we as A,S as B,r as C,Y as D,U as E,c as F,f as G,q as H,z as I,Oe as J,y as K,Tt as L,j as M,R as N,t as O,I as P,de as Q,V as R,$e as S,F as T,u as U,he as V,te as W,G as X,N as a,O as b,k as c,v as d,_ as e,A as f,b as g,g as h,ve as i,x as j,C as k,ce as l,fe as m,e as n,le as o,ue as p,J as q,xe as r,i as s,E as t,M as u,T as v,$ as w,me as x,pe as y,ge as z};

import __inject_styles from './inject_styles.803b7e80.js';