import { _ as _export_sfc, u as useRuntimeConfig, H as Head, T as Title } from '../server.mjs';
import { withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main = {
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const SITE_NAME = runtimeConfig.public.SITE_NAME;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-dab39af1>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u9690\u79C1\u6761\u6B3E - ${ssrInterpolate(unref(SITE_NAME))}`);
                } else {
                  return [
                    createTextVNode("\u9690\u79C1\u6761\u6B3E - " + toDisplayString(unref(SITE_NAME)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("\u9690\u79C1\u6761\u6B3E - " + toDisplayString(unref(SITE_NAME)), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container" data-v-dab39af1><h1 data-v-dab39af1>${ssrInterpolate(unref(SITE_NAME))}\u9690\u79C1\u6761\u6B3E</h1><p data-v-dab39af1> \u6211\u4EEC\u4E0D\u4F1A\u4ECE <b data-v-dab39af1>${ssrInterpolate(unref(SITE_NAME))}</b> \u7684\u7528\u6237\u90A3\u91CC\u6536\u96C6\u4EFB\u4F55\u4E2A\u4EBA\u8EAB\u4EFD\u4FE1\u606F\u3002\u6211\u4EEC\u53EA\u5B58\u50A8\u63D0\u4F9BURL\u7F29\u77ED\u670D\u52A1\u6240\u9700\u7684\u4FE1\u606F\uFF08\u5982\u539F\u59CB\u7684\u957FURL\uFF09\u3001\u8BC6\u522B\u548C\u8DDF\u8E2A\u6EE5\u7528\u6211\u4EEC\u7684\u670D\u52A1\u6240\u9700\u7684\u4FE1\u606F\uFF08\u5982IP\u5730\u5740\uFF09\u548C\u6C47\u603B\u4FE1\u606F\uFF0C\u4EE5\u6536\u96C6\u6709\u5173\u5404\u4E2A\u94FE\u63A5\u4F7F\u7528\u60C5\u51B5\u7684\u7EDF\u8BA1\u4FE1\u606F\uFF08\u5982\u6D4F\u89C8\u5668\u548C\u5C45\u4F4F\u56FD\uFF09\u3002 </p><p data-v-dab39af1>\u6211\u4EEC\u5728\u9700\u8981\u65F6\u4E0E\u7B2C\u4E09\u65B9\u5171\u4EAB\u4FE1\u606F\uFF0C\u4EE5\u8BC6\u522B\u6216\u8DDF\u8E2A\u6EE5\u7528\u6216\u9632\u6B62\u672A\u6765\u7684\u6EE5\u7528\uFF08\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u7B2C\u4E09\u65B9\u9ED1\u540D\u5355\u68C0\u67E5\u63D0\u4EA4\u7684URL\uFF0C\u5E76\u53EF\u80FD\u4E0E\u7B2C\u4E09\u65B9\u5171\u4EAB\u6076\u610FURL\u6216\u6EE5\u7528\u7528\u6237\u7684\u4FE1\u606F\uFF09\u3002</p><p data-v-dab39af1><b data-v-dab39af1>${ssrInterpolate(unref(SITE_NAME))}</b> \u7684\u77ED\u94FE\u63A5\u4E0D\u662F\u79C1\u6709\u7684\uFF0C\u5E76\u4E14\u4E0D\u5E94\u88AB\u89C6\u4E3A\u79C1\u6709\u7684\u3002\u7B2C\u4E09\u65B9\u5F88\u5BB9\u6613\u731C\u51FA\u60A8\u4F7F\u7528\u7684\u77ED\u94FE\u63A5\uFF0C\u56E0\u6B64\u60A8\u4E0D\u5E94\u8BE5\u4F7F\u7528 <b data-v-dab39af1>${ssrInterpolate(unref(SITE_NAME))}</b> \u94FE\u63A5\u5230\u654F\u611F\u6216\u5B89\u5168\u7684\u6570\u636E\u3002 </p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dab39af1"]]);

export { privacy as default };
//# sourceMappingURL=privacy-15820941.mjs.map
