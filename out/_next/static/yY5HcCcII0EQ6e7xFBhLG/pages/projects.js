exports.ids=[13],exports.modules={"2NuI":function(e,t,n){"use strict";var o=function(e){};e.exports=function(e,t,n,i,r,s,a,l){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,i,r,s,a,l],p=0;(c=new Error(t.replace(/%s/g,(function(){return u[p++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},"7WL4":function(e,t){e.exports=require("https")},D85t:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("RHEb")}])},FMKJ:function(e,t){e.exports=require("zlib")},Jssm:function(e,t,n){"use strict";var o=n("q1tI"),i=n("i8i4"),r=n("17x9"),s=n("fhzG");e.exports=s({displayName:"ReactFitText",propTypes:{children:r.element.isRequired,compressor:r.number,minFontSize:r.number,maxFontSize:r.number},getDefaultProps:function(){return{compressor:1,minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY}},componentDidMount:function(){window.addEventListener("resize",this._onBodyResize),this._onBodyResize()},componentWillUnmount:function(){window.removeEventListener("resize",this._onBodyResize)},componentDidUpdate:function(){this._onBodyResize()},_onBodyResize:function(){var e=i.findDOMNode(this),t=e.offsetWidth;e.style.fontSize=Math.max(Math.min(t/(10*this.props.compressor),parseFloat(this.props.maxFontSize)),parseFloat(this.props.minFontSize))+"px"},_renderChildren:function(){var e=this;return o.Children.map(this.props.children,(function(t){return o.cloneElement(t,{ref:function(t){return e._childRef=t}})}))},render:function(){return this._renderChildren()[0]}})},KEll:function(e,t){e.exports=require("http")},PJMN:function(e,t){e.exports=require("crypto")},Qs3B:function(e,t){e.exports=require("assert")},RHEb:function(e,t,n){"use strict";n.r(t);var o=n("ln6h"),i=n.n(o),r=n("q1tI"),s=n.n(r),a=n("G9T2"),l=n("kOwS"),c=n("d03p"),u=n("Efxr"),p=n("Jssm"),d=n.n(p),f=n("xyb1"),h=n.n(f),m=n("8Z9I"),y=n.n(m),b=n("Bh6w"),v=b.b.absoluteCentered,g=b.b.absoluteMiddle,_=b.b.absoluteVerticalAlign,w=b.b.responsiveSquares,E=c.b.div.withConfig({displayName:"DeviceStyles__DesktopContainer",componentId:"sc-6wdb7o-0"})(["height:0;padding-bottom:66.67%;position:relative;"]),N=c.b.div.withConfig({displayName:"DeviceStyles__AbsoluteInnerWrapper",componentId:"sc-6wdb7o-1"})(["position:absolute;width:100%;height:100%;"]),D=c.b.div.withConfig({displayName:"DeviceStyles__RelativeInnerWrapper",componentId:"sc-6wdb7o-2"})(["position:relative;width:100%;height:100%;"]),I=c.b.div.withConfig({displayName:"DeviceStyles__DesktopBezel",componentId:"sc-6wdb7o-3"})(["width:100%;height:100%;background-color:#7D7D7D;border-radius:0.5em;"]),x=c.b.div.withConfig({displayName:"DeviceStyles__DesktopCamera",componentId:"sc-6wdb7o-4"})([""," top:2%;background-color:#000;width:2%;height:0;padding-bottom:2%;border-radius:100%;:after{",' display:block;content:"";background-color:#212121;width:35%;height:0;padding-bottom:35%;border-radius:100%;}'],v,g),C=c.b.div.withConfig({displayName:"DeviceStyles__DesktopScreen",componentId:"sc-6wdb7o-5"})([""," top:6%;background-color:#fff;height:81.25%;width:91.67%;overflow:hidden;"],v),j=c.b.div.withConfig({displayName:"DeviceStyles__BrowserBar",componentId:"sc-6wdb7o-6"})(["position:relative;background-color:#474747;width:100%;height:7.7%;"]),M=c.b.div.withConfig({displayName:"DeviceStyles__BrowserButton",componentId:"sc-6wdb7o-7"})([""," "," background-color:",";border-radius:100%;left:",";"],_,w("2%"),(function(e){return e.color}),(function(e){return e.left})),P=c.b.div.withConfig({displayName:"DeviceStyles__AddressBar",componentId:"sc-6wdb7o-8"})([""," display:block;width:70%;height:55%;background-color:#FFF;overflow-x:hidden;"],g),R=c.b.a.withConfig({displayName:"DeviceStyles__Address",componentId:"sc-6wdb7o-9"})(["display:block;width:100%;text-decoration:none;color:black;margin-left:1%;"]),S=c.b.div.withConfig({displayName:"DeviceStyles__BrowserWindow",componentId:"sc-6wdb7o-10"})(["width:100%;height:92.3%"]),F=c.b.div.withConfig({displayName:"DeviceStyles__DestopButton",componentId:"sc-6wdb7o-11"})([""," "," bottom:4%;background-color:#fff;border-radius:100%;"],w("4%"),v),T=c.b.div.withConfig({displayName:"DeviceStyles__DesktopButtonDetail",componentId:"sc-6wdb7o-12"})([""," height:50%;width:50%;border:1px solid darkgrey;"],g),O=s.a.createElement;var A=b.b.maxWidth,Y=Object(c.b)((function(e){var t=e.className,n=e.address,o=e.children,i=e.onTypingDone;return O("div",{className:t},O(E,null,O(N,null,O(I,null,O(x,null),O(C,null,O(j,null,O(M,{color:"red",left:"2%"}),O(M,{color:"yellow",left:"6%"}),O(M,{color:"green",left:"10%"}),O(P,null,O(D,null,O(h.a,{once:!0},O((function(e){var t=e.isVisible;return O(d.a,{compressor:3.5},O(R,{href:n,target:"_blank",rel:"noopener noreferrer"},t&&O(y.a,{cursor:{hideWhenDone:!0},onTypingDone:i},n)))}),null))))),O(S,null,o)),O(F,null,O(N,null,O(T,null)))))))})).withConfig({displayName:"projectStyles__StyledDesktop",componentId:"jdw3if-0"})(["",";margin:0 auto;"],A),k=c.b.img.withConfig({displayName:"projectStyles__ProjectImage",componentId:"jdw3if-1"})(["width:100%;height:auto;"]),B=c.b.div.withConfig({displayName:"projectStyles__MobileProjectLayout",componentId:"jdw3if-2"})(["margin:0 auto 28px auto;padding:5%;"]),V=c.b.h2.withConfig({displayName:"projectStyles__MobileProjectTitle",componentId:"jdw3if-3"})([""," margin:0 auto 28px auto;font-size:28px;"],A),W=c.b.p.withConfig({displayName:"projectStyles__MobileProjectDescription",componentId:"jdw3if-4"})(["",";margin:28px auto 0 auto;text-indent:36px;font-size:18px;line-height:24px;"],A),z=c.b.div.withConfig({displayName:"projectStyles__MobileTechContainer",componentId:"jdw3if-5"})([""," margin:0 auto;"],A),q=c.b.img.withConfig({displayName:"projectStyles__Icon",componentId:"jdw3if-6"})(["width:50px;margin-right:10px;"]),L=Object(u.b)(q)({hoverable:!0,pressable:!1,visible:{opacity:1},hidden:{opacity:0},init:{scale:1},hover:{scale:1.2},press:{scale:1.1}}),U=s.a.createElement;function G(e){var t=e.tech,n=Object(r.useState)(null),o=n[0],i=n[1];return U(z,null,U("h3",null,"Technologies: ",o),t.map((function(e){return U(L,{src:e.fields.icon.fields.file.url,alt:e.fields.altText,key:e.sys.id,onMouseEnter:function(){return i(e.fields.name)},onMouseLeave:function(){return i(null)}})})))}var K=s.a.createElement,H=function(e){var t=e.fields;return K(B,null,K(V,null,t.title),K(Y,{address:t.link},K(k,{src:t.image.fields.file.url,alt:"".concat(t.title," screenshot")})),K(W,null,t.description),K(G,{tech:t.skills}))};var J=function(e){return e.projects.items.map((function(e){return K(H,Object(l.a)({},e,{key:e.sys.id}))}))},$=n("NsBw");n.d(t,"default",(function(){return X}));var Q=s.a.createElement;function X(e){var t=e.projects;return Q(a.a,null,Q(J,{projects:t}))}X.getInitialProps=function(e){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap($.a.getProjects());case 2:return e.t0=e.sent,e.abrupt("return",{projects:e.t0});case 4:case"end":return e.stop()}}))}},YVcj:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("q1tI")),i=a(n("17x9")),r=a(n("hKI/")),s=a(n("Gytx"));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).isVisible=function(e,t,o){var i=e.top,r=e.left,s=e.bottom,a=e.right,l=e.width,c=e.height,u=n.props,p=u.offset,d=u.partialVisibility;if(i+a+s+r===0)return!1;var f=0-p,h=0-p,m=t+p,y=o+p;return d?i+c>=f&&r+l>=h&&s-c<=y&&a-l<=m:i>=f&&r>=h&&s<=y&&a<=m},n.isComponentVisible=function(){setTimeout((function(){if(n.nodeRef&&n.nodeRef.getBoundingClientRect){var e=document.documentElement,t=n.props.once,o=n.nodeRef.getBoundingClientRect(),i=window.innerWidth||e.clientWidth,r=window.innerHeight||e.clientHeight,s=n.isVisible(o,i,r);s&&t&&n.removeListener(),n.setState({isVisible:s})}}),0)},n.setNodeRef=function(e){return n.nodeRef=e},n.ownProps=Object.keys(i.propTypes),n.state={isVisible:!1},n.throttleCb=(0,r.default)(n.isComponentVisible,n.props.throttleInterval),t.nodeRef&&n.setNodeRef(t.nodeRef),n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=i.prototype;return a.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},a.componentDidUpdate=function(e){(0,s.default)(this.getChildProps(this.props),this.getChildProps(e))||this.isComponentVisible()},a.componentWillUnmount=function(){this.removeListener()},a.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},a.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},a.getChildProps=function(e){var t=this;void 0===e&&(e=this.props);var n={};return Object.keys(e).forEach((function(o){-1===t.ownProps.indexOf(o)&&(n[o]=e[o])})),n},a.getChildren=function(){var e=this;return"function"===typeof this.props.children?this.props.children(l({},this.getChildProps(),{isVisible:this.state.isVisible})):o.default.Children.map(this.props.children,(function(t){return o.default.cloneElement(t,l({},e.getChildProps(),{isVisible:e.state.isVisible}))}))},a.render=function(){var e=this.props,t=e.className,n=e.style,i=e.nodeRef,r=e.tag,s=l({},t&&{className:t},n&&{style:n});return o.default.createElement(r,l({ref:!i&&this.setNodeRef},s),this.getChildren())},i}(o.PureComponent);t.default=c,c.propTypes={once:i.default.bool,throttleInterval:function(e,t,n){var o=e[t];return!Number.isInteger(o)||o<0?new Error("The "+t+" prop you provided to "+n+" is not a valid integer >= 0."):null},children:i.default.oneOfType([i.default.func,i.default.element,i.default.arrayOf(i.default.element)]),style:i.default.object,className:i.default.string,offset:i.default.number,partialVisibility:i.default.bool,nodeRef:i.default.object,tag:i.default.string},c.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},bzos:function(e,t){e.exports=require("url")},fhzG:function(e,t,n){"use strict";var o=n("q1tI"),i=n("lT4e");if("undefined"===typeof o)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var r=(new o.Component).updater;e.exports=i(o.Component,o.isValidElement,r)},"hKI/":function(e,t){var n="Expected a function",o=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof global&&global&&global.Object===Object&&global,p="object"==typeof self&&self&&self.Object===Object&&self,d=u||p||Function("return this")(),f=Object.prototype.toString,h=Math.max,m=Math.min,y=function(){return d.Date.now()};function b(e,t,o){var i,r,s,a,l,c,u=0,p=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(n);function b(t){var n=i,o=r;return i=r=void 0,u=t,a=e.apply(o,n)}function _(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-u>=s}function w(){var e=y();if(_(e))return E(e);l=setTimeout(w,function(e){var n=t-(e-c);return d?m(n,s-(e-u)):n}(e))}function E(e){return l=void 0,f&&i?b(e):(i=r=void 0,a)}function N(){var e=y(),n=_(e);if(i=arguments,r=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(w,t),p?b(e):a}(c);if(d)return l=setTimeout(w,t),b(c)}return void 0===l&&(l=setTimeout(w,t)),a}return t=g(t)||0,v(o)&&(p=!!o.leading,s=(d="maxWait"in o)?h(g(o.maxWait)||0,t):s,f="trailing"in o?!!o.trailing:f),N.cancel=function(){void 0!==l&&clearTimeout(l),u=0,i=c=r=l=void 0},N.flush=function(){return void 0===l?a:E(y())},N}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==i}(e))return o;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):s.test(e)?o:+e}e.exports=function(e,t,o){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return v(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})}},"jle/":function(e,t){e.exports=require("os")},lT4e:function(e,t,n){"use strict";var o=n("Qetd"),i=n("t33a"),r=n("2NuI"),s="mixins";e.exports=function(e,t,n){var a=[],l={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},c={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},u={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)d(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=o({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=o({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=h(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=o({},e.propTypes,t)},statics:function(e,t){!function(e,t){if(!t)return;for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){if(r(!(n in u),'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n),n in e){var i=c.hasOwnProperty(n)?c[n]:null;return r("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=h(e[n],o))}e[n]=o}}}(e,t)},autobind:function(){}};function p(e,t){var n=l.hasOwnProperty(t)?l[t]:null;g.hasOwnProperty(t)&&r("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&r("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function d(e,n){if(n){r("function"!==typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),r(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,i=o.__reactAutoBindPairs;for(var a in n.hasOwnProperty(s)&&u.mixins(e,n.mixins),n)if(n.hasOwnProperty(a)&&a!==s){var c=n[a],d=o.hasOwnProperty(a);if(p(d,a),u.hasOwnProperty(a))u[a](e,c);else{var f=l.hasOwnProperty(a);if("function"===typeof c&&!f&&!d&&!1!==n.autobind)i.push(a,c),o[a]=c;else if(d){var y=l[a];r(f&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,a),"DEFINE_MANY_MERGED"===y?o[a]=h(o[a],c):"DEFINE_MANY"===y&&(o[a]=m(o[a],c))}else o[a]=c}}}else;}function f(e,t){for(var n in r(e&&t&&"object"===typeof e&&"object"===typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."),t)t.hasOwnProperty(n)&&(r(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function h(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var i={};return f(i,n),f(i,o),i}}function m(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function y(e,t){return t.bind(e)}var b={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},g={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},_=function(){};return o(_.prototype,e.prototype,g),function(e){var t=function(e,o,s){this.__reactAutoBindPairs.length&&function(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],i=t[n+1];e[o]=y(e,i)}}(this),this.props=e,this.context=o,this.refs=i,this.updater=s||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;r("object"===typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a};for(var o in t.prototype=new _,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],a.forEach(d.bind(null,t)),d(t,b),d(t,e),d(t,v),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),r(t.prototype.render,"createClass(...): Class specification must implement a `render` method."),l)t.prototype[o]||(t.prototype[o]=null);return t}}},msIP:function(e,t){e.exports=require("stream")},"mw/K":function(e,t){e.exports=require("fs")},oyvS:function(e,t){e.exports=require("path")},t33a:function(e,t,n){"use strict";e.exports={}},xyb1:function(e,t,n){"use strict";var o;t.__esModule=!0,t.default=void 0;var i=((o=n("YVcj"))&&o.__esModule?o:{default:o}).default;t.default=i}};