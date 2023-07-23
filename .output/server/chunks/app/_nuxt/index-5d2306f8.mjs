import { _ as _export_sfc, u as useRuntimeConfig, H as Head, T as Title } from '../server.mjs';
import { useSSRContext, withCtx, unref, createTextVNode, toDisplayString, createVNode, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wwrap" }, _attrs))} data-v-da92a85b><div class="wrap" data-v-da92a85b><div class="box d1" data-v-da92a85b></div><div class="box d2" data-v-da92a85b></div><div class="box d3" data-v-da92a85b></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-da92a85b"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap" }, _attrs))} data-v-2a1c36f5><embed class="icon" src="/icon/security.svg" data-v-2a1c36f5> \u94FE\u63A5\u5B89\u5168\u6027\u68C0\u6D4B\u7ED3\u679C\u7531 <a href="https://urlsec.qq.com/" target="_blank" data-v-2a1c36f5>\u817E\u8BAF\u5B89\u5168</a> \u63D0\u4F9B </div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SecurityHint.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2a1c36f5"]]);
const _sfc_main$2 = {
  __name: "Counter",
  __ssrInlineRender: true,
  setup(__props) {
    const links = ref(-1);
    const clicks = ref(-1);
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    runtimeConfig.public.API_HOST;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ab54a69d>`);
      if (unref(links) >= 0 && unref(clicks) >= 0) {
        _push(`<div class="wrapper" data-v-ab54a69d><div class="link-count" data-v-ab54a69d> \u5DF2\u751F\u6210 <strong data-v-ab54a69d>${ssrInterpolate(unref(links))}</strong> \u4E2A\u77ED\u94FE\u63A5 </div><div class="click-count" data-v-ab54a69d> \u5B83\u4EEC\u5DF2\u7ECF\u88AB\u70B9\u51FB\u4E86 <strong data-v-ab54a69d>${ssrInterpolate(unref(clicks))}</strong> \u6B21 </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Counter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ab54a69d"]]);
const _sfc_main$1 = {
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    const input_url = ref("");
    const processing = ref(false);
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    runtimeConfig.public.API_HOST;
    runtimeConfig.public.ERROR_MESSAGE_MAP;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = __nuxt_component_0;
      const _component_SecurityHint = __nuxt_component_1;
      const _component_Counter = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ead56106><div class="main" data-v-ead56106><div class="container" data-v-ead56106>`);
      _push(ssrRenderComponent(_component_Logo, null, null, _parent));
      _push(`<h1 data-v-ead56106>\u5F00\u59CB\u7F29\u77ED\u60A8\u7684\u94FE\u63A5\u5427</h1><div class="input-area" data-v-ead56106><div data-v-ead56106><input id="url-input" type="url" placeholder="\u60A8\u7684\u957F\u94FE\u63A5\uFF08\u4EE5 http:// \u6216 https:// \u5F00\u5934\uFF09"${ssrRenderAttr("value", unref(input_url))} data-v-ead56106><button${ssrIncludeBooleanAttr(unref(processing) ? true : false) ? " disabled" : ""} data-v-ead56106>${ssrInterpolate(unref(processing) ? "\u751F\u6210\u4E2D" : "\u7F29\u77ED")}</button></div></div>`);
      _push(ssrRenderComponent(_component_SecurityHint, null, null, _parent));
      _push(`<div class="counter" data-v-ead56106>`);
      _push(ssrRenderComponent(_component_Counter, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ead56106"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const SITE_NAME = runtimeConfig.public.SITE_NAME;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Main = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b87cb10c>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u9996\u9875 - ${ssrInterpolate(unref(SITE_NAME))}`);
                } else {
                  return [
                    createTextVNode("\u9996\u9875 - " + toDisplayString(unref(SITE_NAME)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("\u9996\u9875 - " + toDisplayString(unref(SITE_NAME)), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Main, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b87cb10c"]]);

export { index as default };
//# sourceMappingURL=index-5d2306f8.mjs.map
