import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))}><div class="container"><div class="row pb-5"><div class="col-lg-12"><div class=""><div class="site-heading mb-3"><span class="site-title-tagline">Mex Earth Vision and Vission</span><h2 class="site-title"> Mex Earth Vision and Vission <span>Reflecting Growth </span>Innovation </h2></div><p class=""> Max Earth Resources has earned the trust of leading private coal and metal mining companies across India. As pioneers in underground mine development—spanning both coal and metal sectors—we deliver exceptional service quality, enabling us to expand our horizons through collaboration with global industry experts. </p><p class=""> Our commitment to innovation is reflected in ongoing R&amp;D initiatives, particularly focused on the efficient utilization of tailing materials left after copper extraction. We are also in the process of establishing Waste Metal Recovery Plants to recover valuable metals often left behind by conventional underground mining methods. </p><div class="about-list-wrapper"><ul class="about-list list-unstyled"><li><i class="fa-solid fa-circle-check me-2 txt-warning"></i>Fastest Growing Company in India. </li><li><i class="fa-solid fa-circle-check me-2 txt-warning"></i>Certified for the preparation of Geological Reports in Coal. </li><li><i class="fa-solid fa-circle-check me-2 txt-warning"></i>Recognized by the Ministry of Mines in 2025. </li></ul></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/visionNmission.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visionNmission = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  visionNmission as default
};
//# sourceMappingURL=visionNmission.vue.mjs.map
