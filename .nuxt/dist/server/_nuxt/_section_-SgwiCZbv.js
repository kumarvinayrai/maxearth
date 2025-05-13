import { computed, defineAsyncComponent, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { u as usePageLoader, P as PageLoader, _ as _sfc_main$1 } from "./usePageLoader-BVeLbgfC.js";
import { F as Footer } from "./Footer-Dip3Fl9h.js";
import { G as GlobalSection } from "./GlobalSection-CMCYOAVe.js";
import { S as SideNav } from "./SideNav-C_vDSpzB.js";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/unctx/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/radix3/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs";
import "D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs";
import "./nuxt-link-Cd-cNNtK.js";
import "D:/Project_1205/maxearth/node_modules/klona/dist/index.mjs";
const _sfc_main = {
  __name: "[section]",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading } = usePageLoader();
    const route = useRoute();
    const componentMap = {
      investorsDetails: () => import("./investorsDetails-Drz2wCKN.js"),
      annualReports: () => import("./annualReports-eTUBGt_J.js"),
      quarterlyResults: () => import("./quarterlyResults-Y-GHjdKv.js"),
      shareholdersInfo: () => import("./shareholdersInfo-DMUDk-qK.js"),
      stockPrice: () => import("./stockPrice-CohN8fym.js")
      // added
    };
    const dynamicComponent = computed(() => {
      const section = route.params.section;
      return defineAsyncComponent(componentMap[section] || componentMap.investorsDetails);
    });
    const computedBannerKey = computed(() => {
      const section = route.params.section || "investorsDetails";
      return `${section.toLowerCase()}Section`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageLoader, { show: unref(loading) }, null, _parent));
      if (!unref(loading)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(ssrRenderComponent(GlobalSection, {
          fileName: "bannerSection.txt",
          sectionKey: computedBannerKey.value
        }, null, _parent));
        _push(`<section><div class="blog-single-area"><div class="container-fluid"><div class="row gx-4"><div class="col-lg-3 col-md-12 mb-4 mb-lg-0 p-0">`);
        _push(ssrRenderComponent(SideNav, {
          title: "Our Investors",
          sectionKey: "ourInvestors",
          baseRoute: "/ourInvestors"
        }, null, _parent));
        _push(`</div><div class="col-lg-9 col-md-12"><div class="blog-single-wrapper"><div class="blog-single-content">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ourInvestors/[section].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_section_-SgwiCZbv.js.map
