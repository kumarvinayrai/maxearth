import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "PageLoader",
  __ssrInlineRender: true,
  props: { show: Boolean },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-loader d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-white z-5" }, _attrs))} data-v-832c491b><div class="spinner-border text-warning" role="status" data-v-832c491b><span class="visually-hidden" data-v-832c491b>Loading...</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pageLoader/PageLoader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageLoader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-832c491b"]]);
export {
  PageLoader as default
};
//# sourceMappingURL=PageLoader.vue.mjs.map
