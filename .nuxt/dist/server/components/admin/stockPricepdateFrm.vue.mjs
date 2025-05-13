import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "stockPricepdateFrm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-form p-5 bg-white" }, _attrs))} data-v-3c8d2c20><h2 class="mb-3" data-v-3c8d2c20>Update Stock Price</h2><p class="text-muted" data-v-3c8d2c20>Update the current stock price and related details for investors.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stockPricepdateFrm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stockPricepdateFrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c8d2c20"]]);
export {
  stockPricepdateFrm as default
};
//# sourceMappingURL=stockPricepdateFrm.vue.mjs.map
