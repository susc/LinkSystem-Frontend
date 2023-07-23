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
  __name: "terms-and-conditions",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const SITE_NAME = runtimeConfig.public.SITE_NAME;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3d8abe7d>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u4F7F\u7528\u6761\u6B3E - ${ssrInterpolate(unref(SITE_NAME))}`);
                } else {
                  return [
                    createTextVNode("\u4F7F\u7528\u6761\u6B3E - " + toDisplayString(unref(SITE_NAME)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("\u4F7F\u7528\u6761\u6B3E - " + toDisplayString(unref(SITE_NAME)), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container" data-v-3d8abe7d><h1 data-v-3d8abe7d>${ssrInterpolate(unref(SITE_NAME))}\u4F7F\u7528\u6761\u6B3E</h1><p data-v-3d8abe7d>\u6211\u4EEC\u5DF2\u7ECF\u5C3D\u529B\u4F7F\u6211\u4EEC\u7684\u6761\u6B3E\u5C3D\u53EF\u80FD\u7684\u6E05\u6670\u6613\u8BFB\uFF0C\u6240\u4EE5\u4E0D\u8981\u671F\u5F85\u6CD5\u5F8B\u672F\u8BED\u7684\u9875\u9762\uFF01</p><h2 data-v-3d8abe7d>\u7981\u6B62\u7684\u6D3B\u52A8</h2><p data-v-3d8abe7d> \u7528\u6237\u4E0D\u5F97\u901A\u8FC7 <b data-v-3d8abe7d>${ssrInterpolate(unref(SITE_NAME))}</b> \u7F29\u77ED\u4EE5\u4E0B\u7C7B\u578B\u7684URL\uFF1A <ul data-v-3d8abe7d><li data-v-3d8abe7d>\u5546\u7528\u7535\u5B50\u90AE\u4EF6\u4E2D\u7684URL</li><li data-v-3d8abe7d>\u7528\u4E8E\u672A\u7ECF\u8BF7\u6C42\u7684\u5E7F\u544A\uFF08\u5783\u573E\u90AE\u4EF6\uFF09\uFF0C\u5305\u62EC\u7535\u5B50\u90AE\u4EF6\u3001\u8BBA\u575B\u5E16\u5B50\u3001SMS\u6D88\u606F\u3001\u793E\u4EA4\u7F51\u7EDC</li><li data-v-3d8abe7d>\u94FE\u63A5\u5230\u6076\u610F\u5185\u5BB9\uFF08\u9493\u9C7C\u7F51\u7AD9\u3001\u75C5\u6BD2\u3001\u6728\u9A6C\u3001\u5E7F\u544A\u8F6F\u4EF6\u6216\u662F\u4EFB\u4F55\u5176\u4ED6\u6076\u610F\u8F6F\u4EF6\uFF09</li><li data-v-3d8abe7d>\u4EFB\u4F55\u5F62\u5F0F\u7684\u513F\u7AE5\u8272\u60C5\u94FE\u63A5</li><li data-v-3d8abe7d>\u94FE\u63A5\u5230\u5176\u4ED6\u77ED\u94FE\u63A5\u670D\u52A1\u6216\u91CD\u5B9A\u5411\u7AD9\u70B9\u6216\u811A\u672C\uFF08\u8FD9\u4E9B\u201C\u94FE\u63A5\u94FE\u201D\u901A\u5E38\u7528\u4E8E\u9690\u85CF\u6076\u610F\u4F7F\u7528\uFF09</li><li data-v-3d8abe7d>\u4FB5\u72AF\u7248\u6743\u7684\u94FE\u63A5</li><li data-v-3d8abe7d>\u94FE\u63A5\u5230\u6211\u4EEC\u8BA4\u4E3A\u4E0D\u9053\u5FB7\u7684\u5185\u5BB9\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u201C\u5FEB\u901F\u81F4\u5BCC\u201D\u8BA1\u5212\u3001\u4F20\u9500\u8BA1\u5212\u3001\u6709\u507F\u201C\u81EA\u52A9\u201D\u8BA1\u5212\u3001\u53EF\u7591\u7ADE\u4E89\u3001\u8981\u6C42\u7528\u6237\u586B\u5199\u4ED8\u8D39\u8C03\u67E5\u7684\u7F51\u7AD9\u4EE5\u53CA\u9F13\u52B1\u7528\u6237\u5411\u5176\u4ED6\u4EBA\u53D1\u9001\u5783\u573E\u90AE\u4EF6\u7684\u7F51\u7AD9\uFF08\u5982\u201C\u9080\u8BF710\u540D\u65B0\u4F1A\u5458\u514D\u8D39\u83B7\u5F97XXX\u201D\uFF09</li></ul> \u6B64\u5916\uFF0C\u7528\u6237\u5728\u4F7F\u7528 <b data-v-3d8abe7d>${ssrInterpolate(unref(SITE_NAME))}</b> \u65F6\u987B\u9075\u5B88\u4E2D\u56FD\u5927\u9646\u7684\u6CD5\u5F8B\u6CD5\u89C4\u3002 </p><h2 data-v-3d8abe7d>URL\u7684\u62D2\u7EDD\u548C\u5220\u9664</h2><p data-v-3d8abe7d>\u6211\u4EEC\u53EF\u4EE5\u5728\u4EE5\u540E\u56E0\u4E3A\u4EFB\u4F55\u539F\u56E0\u62D2\u7EDD\u67D0\u4E9BURL\u6216\u5C06\u5176\u5220\u9664\u3002\u6211\u4EEC\u7684\u76EE\u7684\u53EA\u662F\u4E3A\u4E86\u4FDD\u8BC1\u7528\u6237\u4E0D\u8FDD\u53CD\u6211\u4EEC\u7684\u4F7F\u7528\u6761\u6B3E\u6216\u516C\u5E73\u4F7F\u7528\u7684\u7CBE\u795E\uFF0C\u540C\u65F6\u6211\u4EEC\u6709\u6743\u529B\u6000\u7591\u67D0\u4E9B\u7528\u6237\u4F1A\u8FD9\u6837\u505A\u3002\u6211\u4EEC\u53EA\u662F\u4EBA\u7C7B\uFF0C\u5076\u5C14\u4F1A\u72AF\u9519\u8BEF\u2014\u2014\u5982\u679C\u6211\u4EEC\u8BA4\u4E3A\u5408\u9002\u7684\u8BDD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6062\u590D\u88AB\u7981\u7528\u7684\u77ED\u94FE\u63A5\u3002</p><h2 data-v-3d8abe7d>\u8FC7\u5EA6\u4F7F\u7528</h2><p data-v-3d8abe7d> \u6211\u4EEC\u9700\u8981\u4FDD\u6301 <b data-v-3d8abe7d>${ssrInterpolate(unref(SITE_NAME))}</b> \u5BF9\u5927\u90E8\u5206\u4EBA\u7684\u5FEB\u901F\u54CD\u5E94\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5C06\u5B83\u7684\u4F7F\u7528\u91CF\u9650\u5236\u5728\u6211\u4EEC\u8BA4\u4E3A\u5408\u7406\u7684\u6C34\u5E73\u4E0A\u3002 </p><h2 data-v-3d8abe7d>\u6211\u4EEC\u7684\u77ED\u7F51\u5740</h2><p data-v-3d8abe7d> \u5728\u4E0D\u8FDD\u6CD5\u6211\u4EEC\u7684\u4F7F\u7528\u6761\u6B3E\u7684\u60C5\u51B5\u4E0B\uFF0C <b data-v-3d8abe7d>${ssrInterpolate(unref(SITE_NAME))}</b> \u7684\u7528\u6237\u53EF\u4EE5\u5C06\u77ED\u94FE\u63A5\u91CD\u5B9A\u5411\u5230\u4EFB\u4F55URL\uFF0C\u5E76\u4E14\u5BF9\u8FD9\u4E9B\u77ED\u94FE\u63A5\u7684\u5185\u5BB9\u8D1F\u8D23\u3002 </p><h2 data-v-3d8abe7d>\u6570\u636E\u4F7F\u7528</h2><p data-v-3d8abe7d>\u6211\u4EEC\u4E0D\u4F1A\u4E0E\u7B2C\u4E09\u65B9\u5171\u4EAB\u4EFB\u4F55\u4FE1\u606F\uFF0C\u9664\u975E\u5728\u6211\u4EEC\u7684\u9690\u79C1\u653F\u7B56\u4E2D\u660E\u786E\u8BF4\u660E\u3002</p><h2 data-v-3d8abe7d>\u8FDD\u53CD\u6211\u4EEC\u7684\u6761\u6B3E</h2><p data-v-3d8abe7d> \u5982\u679C\u60A8\u8FDD\u53CD\u4E86\u6211\u4EEC\u7684\u6761\u6B3E\uFF0C\u6839\u636E\u6EE5\u7528\u7684\u4E25\u91CD\u7A0B\u5EA6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6682\u65F6\u6216\u6C38\u4E45\u7981\u7528\u60A8\u521B\u5EFA\u7684\u77ED\u94FE\u63A5\u6216\u963B\u6B62\u60A8\u4F7F\u7528 <b data-v-3d8abe7d>${ssrInterpolate(unref(SITE_NAME))}</b> \u3002\u5728\u4E25\u91CD\u6EE5\u7528\u6216\u975E\u6CD5\u4F7F\u7528\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5411\u76F8\u5173\u6267\u6CD5\u673A\u6784\u4E3E\u62A5\u3002 </p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms-and-conditions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const termsAndConditions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d8abe7d"]]);

export { termsAndConditions as default };
//# sourceMappingURL=terms-and-conditions-9ace672f.mjs.map
