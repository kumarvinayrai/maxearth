import { mergeProps, useSSRContext } from 'file://D:/Project_1205/maxearth/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://D:/Project_1205/maxearth/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/destr/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unstorage/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/Project_1205/maxearth/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://D:/Project_1205/maxearth/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/ohash/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/klona/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/scule/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/Project_1205/maxearth/node_modules/pathe/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unhead/dist/server.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/devalue/index.js';
import 'file://D:/Project_1205/maxearth/node_modules/unhead/dist/utils.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unhead/dist/plugins.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unctx/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "latestNewsupdateFrm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-form p-5 bg-white" }, _attrs))} data-v-a1185b85><div class="quote-content p-0" data-v-a1185b85><div class="quote-header mb-4" data-v-a1185b85><h6 class="site-title-tagline" data-v-a1185b85>Admin Panel</h6><h2 class="site-title" data-v-a1185b85>Update Latest News</h2></div><form data-v-a1185b85><div class="row g-3" data-v-a1185b85><div class="col-md-12" data-v-a1185b85><input type="text" class="form-control" placeholder="News Title" required data-v-a1185b85></div><div class="col-md-6" data-v-a1185b85><input type="date" class="form-control" placeholder="Date" required data-v-a1185b85></div><div class="col-md-6" data-v-a1185b85><input type="text" class="form-control" placeholder="Author or Source" data-v-a1185b85></div><div class="col-md-12" data-v-a1185b85><input type="file" class="form-control" accept=".jpg,.jpeg,.png,.webp" data-v-a1185b85></div></div><div class="mt-3" data-v-a1185b85><textarea class="form-control" placeholder="News Content or Summary" rows="5" required data-v-a1185b85></textarea></div><button type="submit" class="theme-btn mt-3" data-v-a1185b85> Publish News <i class="fas fa-newspaper" data-v-a1185b85></i></button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/latestNewsupdateFrm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const latestNewsupdateFrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1185b85"]]);

export { latestNewsupdateFrm as default };
//# sourceMappingURL=latestNewsupdateFrm-CUdW0OL-.mjs.map
