import { reactive, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "SafetyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    const safetyPolicy = reactive({
      image: "",
      imageAlt: "",
      tagline: "",
      highlightHeadingBefore: "",
      headingBefore: "",
      headingHighlight: "",
      headingAfter: "",
      description: "",
      points: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "SafetyPolicy",
        class: "safety-policy py-120"
      }, _attrs))} data-v-05e0f347><div class="container" data-v-05e0f347><div class="row align-items-center gy-5" data-v-05e0f347><div class="col-lg-6" data-v-05e0f347><div class="safety-policy-left fadeInLeft" data-v-05e0f347><div class="safety-policy-itemimg mb-4 mb-lg-0" data-v-05e0f347><img${ssrRenderAttr("src", safetyPolicy.image)}${ssrRenderAttr("alt", safetyPolicy.imageAlt)} class="img-fluid rounded-0" data-v-05e0f347></div></div></div><div class="col-lg-6" data-v-05e0f347><div class="safety-policy-right fadeInRight" data-v-05e0f347><div class="site-heading mb-3" data-v-05e0f347><span class="site-title-tagline" data-v-05e0f347>${ssrInterpolate(safetyPolicy.tagline)}</span><h2 class="site-title" data-v-05e0f347><span data-v-05e0f347>${ssrInterpolate(safetyPolicy.highlightHeadingBefore)} </span>${ssrInterpolate(safetyPolicy.headingBefore)} <span data-v-05e0f347>${ssrInterpolate(safetyPolicy.headingHighlight)}</span> ${ssrInterpolate(safetyPolicy.headingAfter)}</h2></div><p class="mb-4" data-v-05e0f347>${ssrInterpolate(safetyPolicy.description)}</p><ul class="safety-policy-list list-unstyled mb-4" data-v-05e0f347><!--[-->`);
      ssrRenderList(safetyPolicy.points, (point, index) => {
        _push(`<li data-v-05e0f347><i class="${ssrRenderClass([point.icon, "me-2", "txt-warning"])}" data-v-05e0f347></i>${ssrInterpolate(point.text)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/SafetyPolicy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SafetyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05e0f347"]]);
export {
  SafetyPolicy as default
};
//# sourceMappingURL=SafetyPolicy.vue.mjs.map
