import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "PartnerArea",
  __ssrInlineRender: true,
  setup(__props) {
    const partners = ref([]);
    const repeatedPartners = computed(() => [
      ...partners.value,
      ...partners.value,
      ...partners.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "partner-area bg py-120" }, _attrs))} data-v-d4081d4f><div class="container" data-v-d4081d4f><div class="marquee-wrapper overflow-hidden position-relative" data-v-d4081d4f><div class="marquee-track" data-v-d4081d4f><div class="marquee d-flex align-items-center gap-4" data-v-d4081d4f><!--[-->`);
      ssrRenderList(unref(repeatedPartners), (logo, index) => {
        _push(`<div class="partner-logo" data-v-d4081d4f><img${ssrRenderAttr("src", logo.src)}${ssrRenderAttr("alt", logo.alt)} class="img-fluid" data-v-d4081d4f></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/PartnerArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PartnerArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d4081d4f"]]);
export {
  PartnerArea as default
};
//# sourceMappingURL=PartnerArea.vue.mjs.map
