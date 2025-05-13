import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    type: { type: String, required: true },
    message: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["alert", `alert-${__props.type}`, "alert-dismissible", "fade", "show"],
        role: "alert"
      }, _attrs))}>${ssrInterpolate(__props.message)} <button type="button" class="btn-close" aria-label="Close"></button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popupAlert/Alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Alert.vue.mjs.map
