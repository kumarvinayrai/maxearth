import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "contactdetailsUpdateFrm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-form p-5 bg-white" }, _attrs))} data-v-6bc0bd83><div class="quote-content p-0" data-v-6bc0bd83><div class="quote-header mb-4" data-v-6bc0bd83><h6 class="site-title-tagline" data-v-6bc0bd83>Admin Panel</h6><h2 class="site-title" data-v-6bc0bd83>Update Contact Details</h2></div><form data-v-6bc0bd83><div class="row g-3" data-v-6bc0bd83><div class="col-md-6" data-v-6bc0bd83><input type="text" class="form-control" placeholder="Company Name" required data-v-6bc0bd83></div><div class="col-md-6" data-v-6bc0bd83><input type="text" class="form-control" placeholder="Phone Number" required data-v-6bc0bd83></div><div class="col-md-6" data-v-6bc0bd83><input type="email" class="form-control" placeholder="Email Address" required data-v-6bc0bd83></div><div class="col-md-6" data-v-6bc0bd83><input type="text" class="form-control" placeholder="Website URL" data-v-6bc0bd83></div><div class="col-md-12" data-v-6bc0bd83><input type="text" class="form-control" placeholder="Full Address" required data-v-6bc0bd83></div></div><div class="mt-3" data-v-6bc0bd83><textarea class="form-control" placeholder="Additional Notes (Optional)" rows="3" data-v-6bc0bd83></textarea></div><button type="submit" class="theme-btn mt-3" data-v-6bc0bd83> Save Changes <i class="fas fa-save" data-v-6bc0bd83></i></button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/contactdetailsUpdateFrm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactdetailsUpdateFrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6bc0bd83"]]);
export {
  contactdetailsUpdateFrm as default
};
//# sourceMappingURL=contactdetailsUpdateFrm.vue.mjs.map
