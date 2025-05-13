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
  __name: "quarterlyUpdatesFrm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-form p-5 bg-white" }, _attrs))} data-v-f2f3b154><div class="quote-content p-0" data-v-f2f3b154><div class="quote-header mb-4" data-v-f2f3b154><h6 class="site-title-tagline" data-v-f2f3b154>Admin Panel</h6><h2 class="site-title" data-v-f2f3b154>Quarterly Update</h2></div><form data-v-f2f3b154><div class="row g-3" data-v-f2f3b154><div class="col-md-6" data-v-f2f3b154><input type="text" class="form-control" placeholder="Quarter (e.g. Q1 2025)" required data-v-f2f3b154></div><div class="col-md-6" data-v-f2f3b154><input type="date" class="form-control" placeholder="Update Date" required data-v-f2f3b154></div><div class="col-md-12" data-v-f2f3b154><input type="file" class="form-control" accept=".pdf,.doc,.docx" required data-v-f2f3b154></div></div><div class="mt-3" data-v-f2f3b154><textarea class="form-control" placeholder="Summary or Highlights" rows="4" required data-v-f2f3b154></textarea></div><button type="submit" class="theme-btn mt-3" data-v-f2f3b154> Submit Update <i class="fas fa-sync-alt" data-v-f2f3b154></i></button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/quarterlyUpdatesFrm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quarterlyUpdatesFrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2f3b154"]]);

export { quarterlyUpdatesFrm as default };
//# sourceMappingURL=quarterlyUpdatesFrm.vue.mjs.map
