import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as d,a as e,d as t,b as o,e as n,r as l}from"./app.c47ce94b.js";const h={},c=e("h2",{id:"\u5728\u6D4F\u89C8\u5668\u4E2D\u8C03\u8BD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5728\u6D4F\u89C8\u5668\u4E2D\u8C03\u8BD5","aria-hidden":"true"},"#"),o(" \u5728\u6D4F\u89C8\u5668\u4E2D\u8C03\u8BD5")],-1),s=o("\u5B8C\u6574\u624B\u518C "),p={href:"https://developer.chrome.com/docs/devtools/",target:"_blank",rel:"noopener noreferrer"},m=o("https://developer.chrome.com/docs/devtools/"),u={href:"https://zh.javascript.info/debugging-chrome",target:"_blank",rel:"noopener noreferrer"},_=o("https://zh.javascript.info/debugging-chrome"),g=n('<h3 id="\u6761\u4EF6\u65AD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u65AD\u70B9" aria-hidden="true">#</a> \u6761\u4EF6\u65AD\u70B9\uFF1A</h3><p>\u5728\u884C\u53F7<strong>\u53F3\u952E\u5355\u51FB</strong> \u5141\u8BB8\u521B\u5EFA\u4E00\u4E2A \u6761\u4EF6\u65AD\u70B9\uFF0C\u53EA\u6709\u5F53\u7ED9\u5B9A\u7684\u8868\u8FBE\u5F0F\u4E3A\u771F\u65F6\u624D\u4F1A\u88AB\u89E6\u53D1\u3002<strong>\u5F53\u6211\u4EEC\u9700\u8981\u5728\u7279\u5B9A\u7684\u53D8\u91CF\u503C\u6216\u53C2\u6570\u7684\u60C5\u51B5\u4E0B\u6682\u505C\u7A0B\u5E8F\u6267\u884C\u65F6\uFF0C\u8FD9\u79CD\u8C03\u8BD5\u65B9\u6CD5\u5C31\u5F88\u6709\u7528\u4E86\u3002</strong></p><p><img src="https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/image-20220418093552427.png" alt="image-20220418093552427" loading="lazy"></p><p>\u53F3\u4FA7\u7684\u4FE1\u606F\u4E0B\u62C9\u5217\u8868\uFF08\u7BAD\u5934\u4E4B\u5904\u7684\u5730\u65B9\uFF09</p><ol><li><p><code>Watch</code> <strong>\u5BDF\u770B</strong> - \u663E\u793A\u4EFB\u610F\u8868\u8FBE\u5F0F\u7684\u5F53\u524D\u503C\u3002</p></li><li><p><code>Call Stack</code> <strong>\u8C03\u7528\u6808</strong> - \u663E\u793A\u5D4C\u5957\u7684\u8C03\u7528\u94FE</p><p>\u6B64\u65F6\uFF0C\u8C03\u8BD5\u5668\u6B63\u5728 <code>hello()</code> \u7684\u8C03\u7528\u94FE\u4E2D\uFF0C\u88AB <code>index.html</code> \u4E2D\u7684\u4E00\u4E2A\u811A\u672C\u8C03\u7528\uFF08\u8FD9\u91CC\u6CA1\u6709\u51FD\u6570\uFF0C\u56E0\u6B64\u663E\u793A \u201Canonymous\u201D\uFF09</p><p>\u5982\u679C\u4F60\u70B9\u51FB\u4E86\u4E00\u4E2A\u5806\u6808\u9879\uFF0C\u8C03\u8BD5\u5668\u5C06\u8DF3\u5230\u5BF9\u5E94\u7684\u4EE3\u7801\u5904\uFF0C\u5E76\u4E14\u8FD8\u53EF\u4EE5\u67E5\u770B\u5176\u6240\u6709\u53D8\u91CF\u3002</p></li><li><p><code>Scope</code> <strong>\u4F5C\u7528\u57DF</strong> - \u663E\u793A\u5F53\u524D\u7684\u53D8\u91CF</p><p><code>Local</code> \u663E\u793A\u5F53\u524D\u51FD\u6570\u4E2D\u7684\u53D8\u91CF</p><p><code>Global</code>\u663E\u793A\u5168\u5C40\u53D8\u91CF\uFF08\u4E0D\u5728\u4EFB\u4F55\u51FD\u6570\u4E2D\uFF09</p></li></ol><h3 id="\u8DDF\u8E2A\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u8DDF\u8E2A\u6267\u884C" aria-hidden="true">#</a> \u8DDF\u8E2A\u6267\u884C</h3><ul><li>\u6062\u590D Resume</li><li>\u4E0B\u4E00\u6B65 Step\uFF1A\u4F1A\u5FFD\u7565\u5F02\u6B65\u884C\u4E3A</li><li>\u8DE8\u6B65 Step Over</li><li>\u6B65\u5165 Step into \uFF1A<strong>\u4F1A\u8FDB\u5165\u5230\u5F02\u6B65\u4EE3\u7801\u4E2D\u5E76\u7B49\u5F85</strong>\u3002</li><li>\u6B65\u51FA Step out\uFF1A<strong>\u7EE7\u7EED\u6267\u884C\u5230\u5F53\u524D\u51FD\u6570\u7684\u672B\u5C3E</strong>\u3002\u7EE7\u7EED\u6267\u884C\u4EE3\u7801\u5E76\u505C\u6B62\u5728\u5F53\u524D\u51FD\u6570\u7684\u6700\u540E\u4E00\u884C\u3002\u5F53\u6211\u4EEC\u4F7F\u7528 \u5076\u7136\u5730\u8FDB\u5165\u5230\u4E00\u4E2A\u5D4C\u5957\u8C03\u7528\uFF0C\u4F46\u662F\u6211\u4EEC\u53C8\u5BF9\u8FD9\u4E2A\u51FD\u6570\u4E0D\u611F\u5174\u8DA3\u65F6\uFF0C\u6211\u4EEC\u60F3\u8981\u5C3D\u53EF\u80FD\u7684\u7EE7\u7EED\u6267\u884C\u5230\u6700\u540E\u7684\u65F6\u5019\u662F\u975E\u5E38\u65B9\u4FBF\u7684\u3002</li><li>\u542F\u7528/\u7981\u7528\u6240\u6709\u7684\u65AD\u70B9</li><li>\u542F\u7528/\u7981\u7528\u51FA\u73B0\u9519\u8BEF\u65F6\u81EA\u52A8\u6682\u505C\u811A\u672C\u6267\u884C\u3002</li></ul><blockquote><p>Continue to here</p><p>\u5728\u4EE3\u7801\u4E2D\u7684\u67D0\u4E00\u884C\u4E0A\u53F3\u952E\uFF0C\u5728\u663E\u793A\u7684\u5173\u8054\u83DC\u5355\u4E2D\u70B9\u51FB\u8FD9\u4E2A\u9009\u9879\u3002</p><p>\u5F53\u90A3\u4F60\u60F3\u5230\u5411\u524D\u79FB\u52A8\u5F88\u591A\u6B65\u5230\u67D0\u4E00\u884C\u4E3A\u6B62\uFF0C\u4F46\u662F\u53C8\u61D2\u5F97\u8BBE\u7F6E\u4E00\u4E2A\u65AD\u70B9\u65F6\u975E\u5E38\u7684\u65B9\u4FBF\u3002</p></blockquote><h3 id="device-mode" tabindex="-1"><a class="header-anchor" href="#device-mode" aria-hidden="true">#</a> Device Mode</h3><p>\u63D0\u4F9B\u4EE5\u4E0B\u529F\u80FD\uFF1A</p><ol><li>\u6A21\u62DF\u79FB\u52A8\u8BBE\u5907\u89C6\u53E3</li><li>\u7F51\u7EDC\u8282\u6D41</li><li>CPU\u8282\u6D41</li><li>\u6A21\u62DF\u5B9A\u4F4D</li><li>\u8BBE\u7F6E\u65B9\u5411</li></ol><p>\u65E0\u6CD5\u6A21\u62DF \u624B\u673ACPU\u67B6\u6784\uFF0C\u53EF\u4F7F\u7528Remote Debugging</p><h4 id="simulate-a-mobile-viewport" tabindex="-1"><a class="header-anchor" href="#simulate-a-mobile-viewport" aria-hidden="true">#</a> Simulate a mobile viewport</h4><h5 id="show-media-queries" tabindex="-1"><a class="header-anchor" href="#show-media-queries" aria-hidden="true">#</a> show Media Queries</h5><h5 id="device-type" tabindex="-1"><a class="header-anchor" href="#device-type" aria-hidden="true">#</a> Device Type</h5><h5 id="mobile-device-viewport-mode" tabindex="-1"><a class="header-anchor" href="#mobile-device-viewport-mode" aria-hidden="true">#</a> Mobile Device Viewport Mode</h5><h5 id="rotate-landscape-orientation" tabindex="-1"><a class="header-anchor" href="#rotate-landscape-orientation" aria-hidden="true">#</a> Rotate :Landscape orientation</h5><h5 id="throttle-the-network-and-cpu" tabindex="-1"><a class="header-anchor" href="#throttle-the-network-and-cpu" aria-hidden="true">#</a> Throttle the network and CPU</h5><p>Mid-tier mobile\uFF08\u5FEB3G CPU\u8282\u6D41\uFF09 \u6BD4\u6B63\u5E38\u61624\u500D</p><p>low-end mobile\uFF08\u61623G CPU\u8282\u6D41\uFF09 \u6BD4\u6B63\u5E38\u61626\u500D</p>',20);function b(v,f){const a=l("ExternalLinkIcon");return r(),d("div",null,[c,e("p",null,[s,e("a",p,[m,t(a)])]),e("p",null,[e("a",u,[_,t(a)])]),g])}var k=i(h,[["render",b],["__file","2022-04-18-\u6D4F\u89C8\u5668\u8C03\u8BD5.html.vue"]]);export{k as default};
