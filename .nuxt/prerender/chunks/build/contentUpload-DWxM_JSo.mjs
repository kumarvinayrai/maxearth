import { ref, mergeProps, useSSRContext } from 'file://D:/Project_1205/maxearth/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://D:/Project_1205/maxearth/node_modules/vue/server-renderer/index.mjs';
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
  __name: "contentUpload",
  __ssrInlineRender: true,
  setup(__props) {
    const content = ref("");
    const error = ref(null);
    const loadContent = async () => {
      try {
        const response = await fetch("/dynamicContent/Content");
        if (!response.ok) {
          throw new Error("Failed to load content");
        }
        content.value = await response.text();
      } catch (err) {
        error.value = "Error loading the file.";
      }
    };
    loadContent();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "adminPanel" }, _attrs))} data-v-50f0dfb9><h3 data-v-50f0dfb9>Admin Panel - Manage Slide Content</h3><textarea rows="10" class="form-control" placeholder="Edit slide content..." data-v-50f0dfb9>${ssrInterpolate(content.value)}</textarea><button class="btn btn-primary mt-3" data-v-50f0dfb9>Save Content</button>`);
      if (error.value) {
        _push(`<div class="mt-3 alert alert-danger" data-v-50f0dfb9>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contentUpload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contentUpload = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-50f0dfb9"]]);

export { contentUpload as default };
//# sourceMappingURL=contentUpload-DWxM_JSo.mjs.map
