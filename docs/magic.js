"use strict";function c(a,b){return f(a)||e(a,b)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function e(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function f(a){if(Array.isArray(a))return a}function j(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a,b){if(null==a)return{};var c,d,e=m(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function m(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function n(a){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(a)}var o=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(!!(b&&!0!==b)&&("function"==typeof b[0]?[b]:k(b)))},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name):document.createElement(a.name),f=a.props;for(var g in f)p(e,g,null,f[g],c,d);for(var h=0,j=a.children.length;h<j;h++)e.appendChild(q(a.children[h]=u(a.children[h]),c,d));return a.node=e},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(v[x]=u(v[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,null,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,null,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===n(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,null,b.key)};return{h:y,app:function app(a,b){var c={},d=!1,e=a.view,h=a.node,i=h&&x(h),j=a.subscriptions,l=[],m=function(a){p(this.actions[a.type],a)},n=function(a){return c===a||d||g(q,d=!0),c=a},p=(b||function(a){return a})(function(a,b,d){return"function"==typeof a?p(a(c,b),d||b):f(a)?"function"==typeof a[0]?p(a[0],"function"==typeof(a=a[1])?a(b):a,b):(k(a.slice(1)).map(function(a){a&&a[0](p,a[1],b)},n(a[0])),c):n(a)}),q=function(){d=!1,j&&(l=o(l,k(j(c)),p)),e&&(h=s(h.parentNode,h,i,"string"==typeof(i=e(c))?w(i):i,m))};p(a.init)},Lazy:function Lazy(b){return{lazy:b,type:a}}}}(),r=o.h,h=o.Lazy,t=o.app,v=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===n(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),r(a,b,d)}},w=v("a"),a=v("abbr"),x=v("address"),y=v("area"),z=v("article"),A=v("aside"),B=v("audio"),C=v("b"),b=v("bdi"),D=v("bdo"),E=v("blockquote"),F=v("br"),G=v("button"),H=v("canvas"),I=v("caption"),J=v("cite"),K=v("code"),L=v("col"),M=v("colgroup"),N=v("data"),O=v("datalist"),P=v("dd"),Q=v("del"),R=v("details"),S=v("dfn"),T=v("dialog"),U=v("div"),V=v("dl"),W=v("dt"),X=v("em"),Y=v("embed"),Z=v("fieldset"),$=v("figcaption"),_=v("figure"),aa=v("footer"),ba=v("form"),ca=v("h1"),da=v("h2"),ea=v("h3"),fa=v("h4"),ga=v("h5"),ha=v("h6"),ia=v("header"),ja=v("hr"),ka=v("i"),i=v("iframe"),la=v("img"),ma=v("input"),na=v("ins"),oa=v("kbd"),pa=v("label"),qa=v("legend"),ra=v("li"),sa=v("main"),ta=v("map"),ua=v("mark"),va=v("menu"),wa=v("menuitem"),xa=v("meter"),ya=v("nav"),za=v("object"),Aa=v("ol"),Ba=v("optgroup"),Ca=v("option"),Da=v("output"),Ea=v("p"),p=v("param"),Fa=v("picture"),Ga=v("pre"),Ha=v("progress"),Ia=v("q"),q=v("rp"),Ja=v("rt"),Ka=v("rtc"),La=v("ruby"),Ma=v("s"),s=v("samp"),Na=v("section"),Oa=v("select"),Pa=v("small"),Qa=v("source"),Ra=v("span"),Sa=v("strong"),Ta=v("sub"),Ua=v("summary"),Va=v("sup"),Wa=v("table"),Xa=v("tbody"),Ya=v("td"),Za=v("textarea"),$a=v("tfoot"),_a=v("th"),ab=v("thead"),bb=v("time"),cb=v("tr"),db=v("track"),eb=v("u"),u=v("ul"),fb=v("video"),gb=v("wbr"),hb=v("svg"),ib=v("g"),g=v("circle"),jb=v("ellipse"),kb=v("rect"),lb=v("polygon"),mb=v("path"),nb=v("defs"),ob=v("linearGradient"),pb=v("stop"),qb=v("text"),rb=v("html"),sb=v("head"),tb=v("title"),ub=v("meta"),vb=v("link"),wb=v("body"),xb=v("script"),yb=v("description"),zb={url:"/",root:"/",title:"@magic-libraries",description:"@magic-libraries. tiny client side javascript @magic.",logotext:"@magic-libraries",logo:"/logo.png",menu:[{to:"/#gl-magic-libraries",text:"magic-libraries"}]},Ab={mapClickToGo:function mapClickToGo(a){return function(b){return b.preventDefault(),{to:a,e:b}}},listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},Bb=function(a){var b=a.items,c=a.hash,d=a.url,e=void 0===d?"":d,f=a.root,g=l(a,["items","hash","url","root"]),h=g["class"],i=void 0===h?"Menu":h,k=g.collapse;if(b.length)return c&&(e+="#".concat(c)),ya({class:i},u(b.map(function(a){return Bb.Item(j({},a,{url:e,root:f,collapse:void 0===k||k}))})))};Bb.Item=function(a){var b=a.url,c=a.text,d=a.items,e=void 0===d?[]:d,f=a.parentTo,g=void 0===f?void 0:f,h=a.collapse,k=a.root,m=l(a,["url","text","items","parentTo","collapse","root"]);if(m.to||c){var n={class:"MenuItem"};if(g){var i=m.to.includes("://"),o=m.to.startsWith("/"),p=!g||m.to.startsWith(g);p||o||i||(!g.endsWith("/")&&!m.to.startsWith("-")&&(g="".concat(g,"/")),m.to=g+m.to)}m.to=m.to.startsWith(k)?m.to:"".concat(k).concat(m.to.substr(1));var q=b&&b.startsWith(m.to);b===m.to&&(n["class"]+=" active");var r=[];return(e.length&&q||!h)&&(r=u(e.map(function(a){return Bb.Item(j({parentTo:m.to,url:b,root:k,collapse:h},a))}))),ra(n,[m.to?Gb(m,c):Ra(m,c),r])}};var Cb=function(){return aa({class:"Footer"},[U({class:"Container"},["made with a few bits of ",Gb({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])},Db=function(a){var b=a.logo,c=a.menu,d=a.tagline,e=a.logotext,f=l(a,["logo","menu","tagline","logotext"]);return(b||c||d)&&ia({class:"Header"},[(b||e)&&Gb({to:"/",class:"LogoWrapper"},[b&&Eb({class:"Logo",src:b}),e&&Ra({class:"LogoText"},e)]),c&&Bb(j({},f,{items:c}))])},Eb=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),la(a)},Fb=function(a){var b=a.page,c=a.state;return U({class:"Wrapper"},[Db(c),U({class:"Page"},b?b(c):"404 - not found"),Cb(c)])},Gb=function(a,b){var c=a.to,d=l(a,["to"]),e=d.href,f=d.text,g=d.nofollow,h=d.noreferrer,i=d.onclick,j=l(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||e||"",j.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?j.onclick=[Lb.go,Ab.mapClickToGo(c)]:(j.target="_blank",j.rel="noopener",g&&(j.rel+=" nofollow"),h&&(j.rel+=" noreferrer")),w(j,[f,b])},Hb=function(){},Ib=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return Kb(j({org:"magic-libraries",header:[Gb({to:"https://magic-libraries.github.io"},"@magic-libraries")],desc:["below is a collection of the available @magic client libraries."],items:[{name:"json",description:["the @magic-libraries/json module parses and stringifies json."," it also returns errors instead of throwing them."]},{name:"is",description:"the @magic-libraries/is module unifies the javascript type testing apis."},{name:"uri",description:["the @magic-libraries/uri module "," encodes objects to uri strings and decodes uri strings to objects."]}]},a))},Jb=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,d=b.project,e=void 0!==d&&d,f=b.branch,g=void 0===f?"master":f,h=b.host,i=void 0===h?"github":h,j=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:e;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:e;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(g)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:e;if(a){var b=a.split("/"),d=c(b,2),f=d[0],h=d[1];return f=f.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(f,"/").concat(h,"/branch/").concat(g),src:"https://img.shields.io/appveyor/ci/".concat(f,"/").concat(h,"/").concat(g,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:e;return{to:"https://coveralls.io/".concat(i,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(i,"/").concat(a,"/").concat(g,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:e;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:e;return a&&{to:"https://snyk.io/test/".concat(i,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var d=c(b,2),e=d[0],f=d[1];return f(a[e])}).filter(function(b){return b.to&&b.src});return j.length?u({class:"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return ra([Gb({to:b},Eb({src:c}))])})):void 0},Kb=function(a){var b=a.items,c=void 0===b?[]:b,d=a.org,e=a.host,f=void 0===e?"github":e,g=a.header,h=a.desc,i=void 0===h?a.description:h,k={};return a["class"]?!a["class"].includes("GitList")&&(k["class"]="GitList ".concat(a["class"])):k["class"]="GitList",k.id=a.id?a.id:d,k.id.startsWith("gl")||(k.id="gl-".concat(k.id)),U(k,[g&&da(g),i&&U({class:"description"},i),u({id:"".concat(k.id,"-ul")},[c.map(function(a){return Kb.Item(j({org:d,id:"".concat(k.id,"-li"),host:f},a))})])])};Kb.Item=function(a){var b=a.name,c=a.org,d=a.id,e=a.host,f=a.desc||a.description;return ra({id:"".concat(d,"-").concat(b),class:"GitListItem"},[ea([Gb({to:"https://".concat(e,".com/").concat(c,"/").concat(b)},"@".concat(c,"/").concat(b))]),f&&Ea(f),Jb("".concat(c,"/").concat(b)),Gb({to:"https://".concat(c,".").concat(e,".io/").concat(b)},"docs / demo")])};var Lb={pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scrollTo(0,0),j({},a,{url:d,hash:e})},go:function go(a,b){var d=b.to;d=d.replace(window.location.origin,"");var e=d.startsWith("/")||d.startsWith("#"),f=d.startsWith(a.root);e&&!f&&(d="".concat(a.root).concat(d).replace(/\/\//g,"/"));var g=d.split("#"),h=c(g,2),i=h[0],k=h[1],l=void 0===k?"":k;if(i===a.url&&l===a.hash)return a;if(window.history.pushState({url:i,hash:l},"",d),l){var m=document.getElementById(l);m&&window.scrollTo(0,m.scrollTop),window.location.hash=l}else window.scrollTo(0,0);return j({},a,{url:i,hash:l,prev:a.url})}},Mb={"/":function _(){return[ca([Gb({to:"https://magic.github.io"},"@magic")]),Ea("magic is a module/component based generator for static pages and serverless deployments."),Ea("goal of the project is to keep the client boilerplate footprint minimal yet easily extendable"),Jb("magic/core"),Ib()]},"/404/":function _(){return U("404 - not found")}};t({init:function init(){return j({},zb,{url:window.location.pathname})},subscriptions:function subscriptions(){return[[Ab.listenPopState,Lb.pop]]},view:function view(a){var b=Mb[a.url]?a.url:"/404/",c=Mb[b];if(a.pages){var d=a.pages[b];for(var e in d)a[e]=d[e]}return U({id:"Magic"},Fb({page:c,state:a}))},node:document.getElementById("Magic")});