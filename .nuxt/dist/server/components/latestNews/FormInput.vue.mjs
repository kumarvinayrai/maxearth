import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "FormInput",
  __ssrInlineRender: true,
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    error: String,
    modelValue: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-group mb-3" }, _attrs))}><label${ssrRenderAttr("for", __props.id)} class="form-label">${ssrInterpolate(__props.label)}</label><input${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", __props.placeholder)} class="form-control">`);
      if (__props.error) {
        _push(`<div class="text-danger small">${ssrInterpolate(__props.error)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/latestNews/FormInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=FormInput.vue.mjs.map
