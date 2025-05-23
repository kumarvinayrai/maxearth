import { computed, defineAsyncComponent, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { u as usePageLoader, P as PageLoader, _ as _sfc_main$1 } from "./usePageLoader-BVeLbgfC.js";
import { F as Footer } from "./Footer-Dip3Fl9h.js";
import { G as GlobalSection } from "./GlobalSection-CMCYOAVe.js";
import { S as SideNav } from "./SideNav-C_vDSpzB.js";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-Cd-cNNtK.js";
import "D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/klona/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "D:/Project_1205/maxearth/node_modules/unctx/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/radix3/dist/index.mjs";
const _sfc_main = {
  __name: "[section]",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading } = usePageLoader();
    const route = useRoute();
    const componentMap = {
      majorMinerals: () => import("./majorMinerals-BXzXR_3w.js"),
      minorMinerals: () => import("./minorMinerals-D4uaYDRx.js"),
      miningEquipment: () => import("./miningEquipment-JAbNTuED.js")
    };
    const dynamicComponent = computed(() => {
      const section = route.params.section;
      return defineAsyncComponent(componentMap[section] || componentMap.miningEquipment);
    });
    const computedBannerKey = computed(() => {
      const section = route.params.section || "miningEquipment";
      return `${section.toLowerCase()}Section`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageLoader, { show: unref(loading) }, null, _parent));
      if (!unref(loading)) {
        _push(`<div data-v-60d81eff>`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(ssrRenderComponent(GlobalSection, {
          fileName: "bannerSection.txt",
          sectionKey: computedBannerKey.value
        }, null, _parent));
        _push(`<section data-v-60d81eff><div class="blog-single-area" data-v-60d81eff><div class="container-fluid" data-v-60d81eff><div class="row gx-4" data-v-60d81eff><div class="col-lg-3 col-md-12 mb-4 mb-lg-0 px-0" data-v-60d81eff>`);
        _push(ssrRenderComponent(SideNav, {
          title: "Our verticals",
          sectionKey: "verticals",
          baseRoute: "/VerticalArea"
        }, null, _parent));
        _push(`</div><div class="col-lg-9 col-md-12" data-v-60d81eff><div class="blog-single-wrapper" data-v-60d81eff><div class="blog-single-content" data-v-60d81eff>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(dynamicComponent.value), null, null), _parent);
        _push(`</div></div></div></div></div></div></section>`);
        _push(ssrRenderComponent(Footer, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/VerticalArea/[section].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _section_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60d81eff"]]);
export {
  _section_ as default
};
//# sourceMappingURL=_section_-SU4NVrfY.js.map
