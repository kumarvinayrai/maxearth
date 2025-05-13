import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "annualReportsFrm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-form p-5 bg-white" }, _attrs))} data-v-caa6f841><div class="quote-content p-0" data-v-caa6f841><div class="quote-header mb-4" data-v-caa6f841><h6 class="site-title-tagline" data-v-caa6f841>Admin Panel</h6><h2 class="site-title" data-v-caa6f841>Update Annual Reports</h2></div><form data-v-caa6f841><div class="row g-3" data-v-caa6f841><div class="col-md-6" data-v-caa6f841><input type="text" class="form-control" placeholder="Report Title" required data-v-caa6f841></div><div class="col-md-6" data-v-caa6f841><input type="number" class="form-control" placeholder="Year (e.g. 2024)" min="1900" max="2100" required data-v-caa6f841></div><div class="col-md-12" data-v-caa6f841><input type="file" class="form-control" accept=".pdf,.doc,.docx" required data-v-caa6f841></div></div><div class="mt-3" data-v-caa6f841><textarea class="form-control" placeholder="Brief Description or Notes" rows="4" required data-v-caa6f841></textarea></div><button type="submit" class="theme-btn mt-3" data-v-caa6f841> Upload Report <i class="fas fa-upload" data-v-caa6f841></i></button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/annualReportsFrm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const annualReportsFrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-caa6f841"]]);
export {
  annualReportsFrm as default
};
//# sourceMappingURL=annualReportsFrm.vue.mjs.map
