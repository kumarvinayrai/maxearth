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
  __name: "mediaAnnounceFrm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-form p-5 bg-white" }, _attrs))} data-v-8a005915><div class="quote-content p-0" data-v-8a005915><div class="quote-header mb-4" data-v-8a005915><h6 class="site-title-tagline" data-v-8a005915>Admin Panel</h6><h2 class="site-title" data-v-8a005915>Update Media Announce</h2></div><form data-v-8a005915><div class="row g-3" data-v-8a005915><div class="col-md-12" data-v-8a005915><input type="text" class="form-control" placeholder="Announcement Title" required data-v-8a005915></div><div class="col-md-6" data-v-8a005915><input type="date" class="form-control" required data-v-8a005915></div><div class="col-md-6" data-v-8a005915><select class="form-select" required data-v-8a005915><option disabled selected value="" data-v-8a005915>Select Type</option><option data-v-8a005915>Press Release</option><option data-v-8a005915>Media Coverage</option><option data-v-8a005915>Public Statement</option><option data-v-8a005915>Interview</option></select></div><div class="col-md-12" data-v-8a005915><input type="file" class="form-control" accept=".pdf,.jpg,.jpeg,.png,.mp4,.mov" data-v-8a005915></div></div><div class="mt-3" data-v-8a005915><textarea class="form-control" placeholder="Description or Details" rows="5" required data-v-8a005915></textarea></div><button type="submit" class="theme-btn mt-3" data-v-8a005915> Publish Announcement <i class="fas fa-bullhorn" data-v-8a005915></i></button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/mediaAnnounceFrm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mediaAnnounceFrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8a005915"]]);

export { mediaAnnounceFrm as default };
//# sourceMappingURL=mediaAnnounceFrm-B5eeggFc.mjs.map
