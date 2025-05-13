import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "HeaderTop",
  __ssrInlineRender: true,
  setup(__props) {
    const contactInfo = ref([]);
    const socialLinks = ref([]);
    const followUsLabel = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "headerTop",
        class: "header-top"
      }, _attrs))} data-v-f55781dd><div class="container" data-v-f55781dd><div class="header-top-wrapper d-flex justify-content-between align-items-center" data-v-f55781dd><div class="header-top-contact" data-v-f55781dd>`);
      if (contactInfo.value.length) {
        _push(`<ul class="list-unstyled d-flex gap-3 mb-0" data-v-f55781dd><!--[-->`);
        ssrRenderList(contactInfo.value, (contact, index) => {
          _push(`<li data-v-f55781dd><a${ssrRenderAttr("href", contact.link)} target="_blank" rel="noopener noreferrer" data-v-f55781dd><i class="${ssrRenderClass([contact.icon, "me-1"])}" data-v-f55781dd></i> ${ssrInterpolate(contact.text)}</a></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (socialLinks.value.length) {
        _push(`<div class="header-top-social d-flex align-items-center gap-2" data-v-f55781dd>`);
        if (followUsLabel.value) {
          _push(`<span data-v-f55781dd>${ssrInterpolate(followUsLabel.value)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(socialLinks.value, (social, index) => {
          _push(`<a${ssrRenderAttr("href", social.link)} target="_blank" rel="noopener noreferrer" data-v-f55781dd><i class="${ssrRenderClass(social.icon)}" data-v-f55781dd></i></a>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pageHeader/HeaderTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderTop = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f55781dd"]]);
export {
  HeaderTop as default
};
//# sourceMappingURL=HeaderTop.vue.mjs.map
