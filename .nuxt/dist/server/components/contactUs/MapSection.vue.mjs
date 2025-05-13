import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
const _sfc_main = {
  __name: "MapSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "map-section mb-0 pb-0" }, _attrs))}><iframe class="w-100 rounded-0" height="350" frameborder="0" style="${ssrRenderStyle({ "border": "0", "margin-bottom": "0", "padding-bottom": "0", "display": "block" })}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=5th+Floor,+501/502+Timmy+Arcade+Makhwana+Road+Marol,+Andheri+East,+Mumbai-400059&amp;output=embed"></iframe></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contactUs/MapSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=MapSection.vue.mjs.map
