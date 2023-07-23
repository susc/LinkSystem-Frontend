import { _ as _export_sfc, a as __nuxt_component_0$1 } from '../server.mjs';
import moment from 'moment';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  computed: {
    nowYear() {
      return moment().utcOffset(8).format("YYYY");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-1a8795b1><div class="container" data-v-1a8795b1><hr data-v-1a8795b1><div class="friendship-links" data-v-1a8795b1>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flink",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u9996\u9875`);
      } else {
        return [
          createTextVNode("\u9996\u9875")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flink",
    to: "/terms-and-conditions"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u4F7F\u7528\u6761\u6B3E`);
      } else {
        return [
          createTextVNode("\u4F7F\u7528\u6761\u6B3E")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flink",
    to: "/privacy"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u9690\u79C1\u6761\u6B3E`);
      } else {
        return [
          createTextVNode("\u9690\u79C1\u6761\u6B3E")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a class="flink" href="mailto:info@ewrt.top" data-v-1a8795b1>\u8054\u7CFB\u7AD9\u957F</a></div><div class="copyright" data-v-1a8795b1> \xA9 \u4E1C\u65B9\u84DD\u77ED\u94FE\u63A5\u670D\u52A1 2017 - ${ssrInterpolate($options.nowYear)}</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1a8795b1"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=bootstrap-grid.min-95be327f.mjs.map
