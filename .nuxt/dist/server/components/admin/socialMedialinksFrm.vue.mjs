import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "socialMedialinksFrm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-form p-5 bg-white" }, _attrs))} data-v-d72be8b1><div class="quote-content p-0" data-v-d72be8b1><div class="quote-header mb-4" data-v-d72be8b1><h6 class="site-title-tagline" data-v-d72be8b1>Admin Panel</h6><h2 class="site-title" data-v-d72be8b1>Update Social Media Links</h2></div><form data-v-d72be8b1><div class="row g-3" data-v-d72be8b1><div class="col-md-6" data-v-d72be8b1><input type="url" class="form-control" placeholder="Facebook URL" data-v-d72be8b1></div><div class="col-md-6" data-v-d72be8b1><input type="url" class="form-control" placeholder="Twitter URL" data-v-d72be8b1></div><div class="col-md-6" data-v-d72be8b1><input type="url" class="form-control" placeholder="LinkedIn URL" data-v-d72be8b1></div><div class="col-md-6" data-v-d72be8b1><input type="url" class="form-control" placeholder="Instagram URL" data-v-d72be8b1></div><div class="col-md-6" data-v-d72be8b1><input type="url" class="form-control" placeholder="YouTube URL" data-v-d72be8b1></div><div class="col-md-6" data-v-d72be8b1><input type="url" class="form-control" placeholder="Other (e.g. Threads, TikTok)" data-v-d72be8b1></div></div><div class="mt-3" data-v-d72be8b1><textarea class="form-control" placeholder="Additional Notes (Optional)" rows="3" data-v-d72be8b1></textarea></div><button type="submit" class="theme-btn mt-3" data-v-d72be8b1> Save Links <i class="fas fa-link" data-v-d72be8b1></i></button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/socialMedialinksFrm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const socialMedialinksFrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d72be8b1"]]);
export {
  socialMedialinksFrm as default
};
//# sourceMappingURL=socialMedialinksFrm.vue.mjs.map
