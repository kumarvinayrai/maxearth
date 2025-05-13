import { mergeProps, useSSRContext } from 'file://D:/Project_1205/maxearth/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://D:/Project_1205/maxearth/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unctx/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/radix3/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs';

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

export { socialMedialinksFrm as default };
//# sourceMappingURL=socialMedialinksFrm.vue.mjs.map
