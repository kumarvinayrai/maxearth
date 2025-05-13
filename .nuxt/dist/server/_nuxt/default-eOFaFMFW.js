import { _ as _export_sfc, e as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/unctx/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/Project_1205/maxearth/node_modules/radix3/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs";
import "D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-eOFaFMFW.js.map
