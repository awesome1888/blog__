(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),o=e(155),r=e(153);t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(r.a,{title:"404: Not found"}),a.a.createElement("h1",null,"NOT FOUND"),a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(n,t,e){"use strict";e.d(t,"b",function(){return m});var i=e(0),a=e.n(i),o=e(4),r=e.n(o),d=e(32),l=e.n(d);e.d(t,"a",function(){return l.a});e(147);var g=a.a.createContext({}),m=function(n){return a.a.createElement(g.Consumer,null,function(t){return n.data||t[n.query]&&t[n.query].data?(n.render||n.children)(n.data?n.data.data:t[n.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},147:function(n,t,e){var i;n.exports=(i=e(149))&&i.default||i},148:function(n,t,e){"use strict";e.d(t,"b",function(){return a}),e.d(t,"a",function(){return o});var i=e(145),a=i.default.div.withConfig({displayName:"layoutComponents__MainWrapper",componentId:"sc-10ayajj-0"})(["margin:0;display:flex;min-height:100vh;flex-direction:column;"]),o=i.default.div.withConfig({displayName:"layoutComponents__Container",componentId:"sc-10ayajj-1"})(["margin:0 auto;max-width:1280px;padding:0px 1.0875rem;padding-top:0;"]);i.default.div.withConfig({displayName:"layoutComponents__Row",componentId:"sc-10ayajj-2"})(["display:flex;flex:",";flex-direction:row;flex-wrap:",";align-content:",";justify-content:",";@media screen and (max-width:768px){flex-direction:",";}"],function(n){return n.flex?n.flex:"initial"},function(n){return n.wrap?n.wrap:"initial"},function(n){return n.alignContent?n.alignContent:"initial"},function(n){return n.justifyContent?n.justifyContent:"initial"},function(n){return n.mobile?"column":"row"}),i.default.div.withConfig({displayName:"layoutComponents__Column",componentId:"sc-10ayajj-3"})(["flex:",";flex-direction:column;align-content:",";justify-content:",";margin:",";width:",";"],function(n){return n.flex?n.flex:"initial"},function(n){return n.alignContent?n.alignContent:"initial"},function(n){return n.justifyContent?n.justifyContent:"initial"},function(n){return n.margin?n.margin:"0"},function(n){return n.width?n.width:"auto"})},149:function(n,t,e){"use strict";e.r(t);e(33);var i=e(0),a=e.n(i),o=e(4),r=e.n(o),d=e(54),l=e(2),g=function(n){var t=n.location,e=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(d.a,Object.assign({location:t,pageResources:e},e.json))};g.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=g},151:function(n){n.exports={data:{site:{siteMetadata:{title:"Gatsby Starter w/ styled-componets"}}}}},153:function(n,t,e){"use strict";var i=e(154),a=e(0),o=e.n(a),r=e(4),d=e.n(r),l=e(156),g=e.n(l),m=e(146);function p(n){var t=n.description,e=n.lang,a=n.meta,r=n.keywords,d=n.title;return o.a.createElement(m.b,{query:s,render:function(n){var i=t||n.site.siteMetadata.description;return o.a.createElement(g.a,{htmlAttributes:{lang:e},title:d,titleTemplate:"%s | "+n.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:d},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.site.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:i}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:i})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:d.a.string,lang:d.a.string,meta:d.a.array,keywords:d.a.arrayOf(d.a.string),title:d.a.string.isRequired},t.a=p;var s="1025518380"},154:function(n){n.exports={data:{site:{siteMetadata:{title:"Gatsby Starter w/ styled-componets",description:"Gatsby starter using styled-components",author:"@blakenoll"}}}}},155:function(n,t,e){"use strict";var i=e(151),a=e(0),o=e.n(a),r=e(4),d=e.n(r),l=e(146),g=e(152),m=e.n(g),p=e(145);function s(){var n=m()(['\n  @import url(\'https://fonts.googleapis.com/css?family=Karla|Lato\');\n  :root {\n    --primary-color: rebeccapurple;\n    --white: #FFFAFF;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  html {\n    font-family: lato;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    touch-action: manipulation;\n    over-flow: hidden;\n  }\n  body {\n    margin: 0;\n  }\n  main {\n    flex: 1 0 auto;\n    h1,h2,h3,h4,h5,h6 {\n    font-family: Karla;\n    color: #0c2340;\n    }\n    a {\n      color: #2A5DB0;\n    }\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  menu,\n  nav,\n  section,\n  summary {\n    display: block;\n  }\n  audio,\n  canvas,\n  progress,\n  video {\n    display: inline-block;\n  }\n  audio:not([controls]) {\n    display: none;\n    height: 0;\n  }\n  progress {\n    vertical-align: baseline;\n  }\n  [hidden],\n  template {\n    display: none;\n  }\n  a {\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n  }\n  a:active,\n  a:hover {\n    outline-width: 0;\n  }\n  abbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted;\n  }\n  b,\n  strong {\n    font-weight: inherit;\n    font-weight: bolder;\n  }\n  dfn {\n    font-style: italic;\n  }\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  mark {\n    background-color: #ff0;\n    color: #000;\n  }\n  small {\n    font-size: 80%;\n  }\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  sub {\n    bottom: -0.25em;\n  }\n  sup {\n    top: -0.5em;\n  }\n  img {\n    border-style: none;\n  }\n  svg:not(:root) {\n    overflow: hidden;\n  }\n  code,\n  kbd,\n  pre,\n  samp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n  figure {\n    margin: 1em 40px;\n  }\n  hr {\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible;\n  }\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font: inherit;\n    margin: 0;\n  }\n  optgroup {\n    font-weight: 700;\n  }\n  button,\n  input {\n    overflow: visible;\n  }\n  button,\n  select {\n    text-transform: none;\n  }\n  [type="reset"],\n  [type="submit"],\n  button,\n  html [type="button"] {\n    -webkit-appearance: button;\n  }\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner,\n  button::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring,\n  button:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  fieldset {\n    border: 1px solid silver;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n  }\n  legend {\n    box-sizing: border-box;\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    padding: 0;\n    white-space: normal;\n  }\n  textarea {\n    overflow: auto;\n  }\n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  [type="search"] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n  }\n  [type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  ::-webkit-input-placeholder {\n    color: inherit;\n    opacity: 0.54;\n  }\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n  }\n  html {\n    font: 112.5%/1.45em georgia, serif;\n    box-sizing: border-box;\n    overflow-y: scroll;\n  }\n  * {\n    box-sizing: inherit;\n  }\n  *:before {\n    box-sizing: inherit;\n  }\n  *:after {\n    box-sizing: inherit;\n  }\n  body {\n    color: hsla(0, 0%, 0%, 0.8);\n    font-family: georgia, serif;\n    font-weight: normal;\n    word-wrap: break-word;\n    font-kerning: normal;\n    -moz-font-feature-settings: "kern", "liga", "clig", "calt";\n    -ms-font-feature-settings: "kern", "liga", "clig", "calt";\n    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";\n    font-feature-settings: "kern", "liga", "clig", "calt";\n  }\n  img {\n    max-width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n  }\n  h1 {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n    color: inherit;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-weight: bold;\n    text-rendering: optimizeLegibility;\n    font-size: 2.25rem;\n    line-height: 1.1;\n  }\n  h2 {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n    color: inherit;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-weight: bold;\n    text-rendering: optimizeLegibility;\n    font-size: 1.62671rem;\n    line-height: 1.1;\n  }\n  h3 {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n    color: inherit;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-weight: bold;\n    text-rendering: optimizeLegibility;\n    font-size: 1.38316rem;\n    line-height: 1.1;\n  }\n  h4 {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n    color: inherit;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-weight: bold;\n    text-rendering: optimizeLegibility;\n    font-size: 1rem;\n    line-height: 1.1;\n  }\n  h5 {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n    color: inherit;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-weight: bold;\n    text-rendering: optimizeLegibility;\n    font-size: 0.85028rem;\n    line-height: 1.1;\n  }\n  h6 {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n    color: inherit;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-weight: bold;\n    text-rendering: optimizeLegibility;\n    font-size: 0.78405rem;\n    line-height: 1.1;\n  }\n  hgroup {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n  }\n  ul {\n    margin-left: 1.45rem;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n    list-style-position: outside;\n    list-style-image: none;\n  }\n  ol {\n    margin-left: 1.45rem;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n    list-style-position: outside;\n    list-style-image: none;\n  }\n  dl {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n  }\n  dd {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n  }\n  p {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n  }\n  figure {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n  }\n  pre {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    margin-bottom: 1.45rem;\n    font-size: 0.85rem;\n    line-height: 1.42;\n    background: hsla(0, 0%, 0%, 0.04);\n    border-radius: 3px;\n    overflow: auto;\n    word-wrap: normal;\n    padding: 1.45rem;\n  }\n  table {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n    font-size: 1rem;\n    line-height: 1.45rem;\n    border-collapse: collapse;\n    width: 100%;\n  }\n  fieldset {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n  }\n  blockquote {\n    margin-left: 1.45rem;\n    margin-right: 1.45rem;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n  }\n  form {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n  }\n  noscript {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n  }\n  iframe {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n  }\n  hr {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: calc(1.45rem - 1px);\n    background: hsla(0, 0%, 0%, 0.2);\n    border: none;\n    height: 1px;\n  }\n  address {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin-bottom: 1.45rem;\n  }\n  b {\n    font-weight: bold;\n  }\n  strong {\n    font-weight: bold;\n  }\n  dt {\n    font-weight: bold;\n  }\n  th {\n    font-weight: bold;\n  }\n  li {\n    margin-bottom: calc(1.45rem / 2);\n  }\n  ol li {\n    padding-left: 0;\n  }\n  ul li {\n    padding-left: 0;\n  }\n  li > ol {\n    margin-left: 1.45rem;\n    margin-bottom: calc(1.45rem / 2);\n    margin-top: calc(1.45rem / 2);\n  }\n  li > ul {\n    margin-left: 1.45rem;\n    margin-bottom: calc(1.45rem / 2);\n    margin-top: calc(1.45rem / 2);\n  }\n  blockquote *:last-child {\n    margin-bottom: 0;\n  }\n  li *:last-child {\n    margin-bottom: 0;\n  }\n  p *:last-child {\n    margin-bottom: 0;\n  }\n  li > p {\n    margin-bottom: calc(1.45rem / 2);\n  }\n  code {\n    font-size: 0.85rem;\n    line-height: 1.45rem;\n  }\n  kbd {\n    font-size: 0.85rem;\n    line-height: 1.45rem;\n  }\n  samp {\n    font-size: 0.85rem;\n    line-height: 1.45rem;\n  }\n  abbr {\n    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);\n    cursor: help;\n  }\n  acronym {\n    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);\n    cursor: help;\n  }\n  abbr[title] {\n    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);\n    cursor: help;\n    text-decoration: none;\n  }\n  thead {\n    text-align: left;\n  }\n  td,\n  th {\n    text-align: left;\n    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);\n    font-feature-settings: "tnum";\n    -moz-font-feature-settings: "tnum";\n    -ms-font-feature-settings: "tnum";\n    -webkit-font-feature-settings: "tnum";\n    padding-left: 0.96667rem;\n    padding-right: 0.96667rem;\n    padding-top: 0.725rem;\n    padding-bottom: calc(0.725rem - 1px);\n  }\n  th:first-child,\n  td:first-child {\n    padding-left: 0;\n  }\n  th:last-child,\n  td:last-child {\n    padding-right: 0;\n  }\n  tt,\n  code {\n    background-color: hsla(0, 0%, 0%, 0.04);\n    border-radius: 3px;\n    font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",\n      "Liberation Mono", Menlo, Courier, monospace;\n    padding: 0;\n    padding-top: 0.2em;\n    padding-bottom: 0.2em;\n  }\n  pre code {\n    background: none;\n    line-height: 1.42;\n  }\n  code:before,\n  code:after,\n  tt:before,\n  tt:after {\n    letter-spacing: -0.2em;\n    content: " ";\n  }\n  pre code:before,\n  pre code:after,\n  pre tt:before,\n  pre tt:after {\n    content: "";\n  }\n  @media only screen and (max-width: 480px) {\n    html {\n      font-size: 100%;\n    }\n  }\n']);return s=function(){return n},n}var c=Object(p.createGlobalStyle)(s()),f=e(148),u=function(n){var t=n.siteTitle,e=n.className;return o.a.createElement("header",{className:e},o.a.createElement(f.a,null,o.a.createElement("h1",null,o.a.createElement(l.a,{to:"/"},t))))};u.propTypes={siteTitle:d.a.string},u.defaultProps={siteTitle:""};var b=Object(p.default)(u).withConfig({displayName:"header__StyledHeader",componentId:"sc-983eva-0"})(["color:var(--white);background:var(--primary-color);padding:1rem 0;margin-bottom:1rem;h1{margin:0;}"]),h=Object(p.default)(function(n){var t=n.className;return o.a.createElement("footer",{className:t},o.a.createElement(f.a,null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))}).withConfig({displayName:"footer__StyledFooter",componentId:"sc-1drmrmk-0"})(["color:#fffaff;background:var(--primary-color);padding:1rem 0;"]),y=function(n){var t=n.children;return o.a.createElement(l.b,{query:"755544856",render:function(n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c,null),o.a.createElement(f.b,null,o.a.createElement(b,{siteTitle:n.site.siteMetadata.title}),o.a.createElement("main",null,t),o.a.createElement(h,null)))},data:i})};y.propTypes={children:d.a.node.isRequired};t.a=y}}]);
//# sourceMappingURL=component---src-pages-404-js-35bcc91e62d2e211a808.js.map