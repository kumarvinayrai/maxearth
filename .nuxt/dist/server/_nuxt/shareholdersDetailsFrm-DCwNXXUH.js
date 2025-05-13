import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/unctx/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/Project_1205/maxearth/node_modules/radix3/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs";
import "D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "shareholdersDetailsFrm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-form p-5 bg-white" }, _attrs))} data-v-d78d19c6><div class="quote-content p-0" data-v-d78d19c6><div class="quote-header mb-4" data-v-d78d19c6><h6 class="site-title-tagline" data-v-d78d19c6>Admin Panel</h6><h2 class="site-title" data-v-d78d19c6>Update Shareholders Details</h2></div><form data-v-d78d19c6><div class="row g-3" data-v-d78d19c6><div class="col-md-6" data-v-d78d19c6><input type="text" class="form-control" placeholder="Shareholder Name" required data-v-d78d19c6></div><div class="col-md-6" data-v-d78d19c6><input type="text" class="form-control" placeholder="Shareholder ID or Reference" required data-v-d78d19c6></div><div class="col-md-6" data-v-d78d19c6><input type="email" class="form-control" placeholder="Email Address" data-v-d78d19c6></div><div class="col-md-6" data-v-d78d19c6><input type="text" class="form-control" placeholder="Phone Number" data-v-d78d19c6></div><div class="col-md-12" data-v-d78d19c6><input type="text" class="form-control" placeholder="Address" data-v-d78d19c6></div><div class="col-md-12" data-v-d78d19c6><input type="number" class="form-control" placeholder="Number of Shares" min="1" required data-v-d78d19c6></div></div><div class="mt-3" data-v-d78d19c6><textarea class="form-control" placeholder="Additional Notes (if any)" rows="4" data-v-d78d19c6></textarea></div><button type="submit" class="theme-btn mt-3" data-v-d78d19c6> Save Details <i class="fas fa-user-edit" data-v-d78d19c6></i></button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/shareholdersDetailsFrm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shareholdersDetailsFrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d78d19c6"]]);
export {
  shareholdersDetailsFrm as default
};
//# sourceMappingURL=shareholdersDetailsFrm-DCwNXXUH.js.map
