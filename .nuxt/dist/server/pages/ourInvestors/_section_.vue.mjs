import { computed, defineAsyncComponent, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import { useRoute } from "vue-router";
import PageLoader from "../../components/pageLoader/PageLoader.vue.mjs";
import _sfc_main$1 from "../../components/pageHeader/Header.vue.mjs";
import Footer from "../../components/pageFooter/Footer.vue.mjs";
import GlobalSection from "../../components/GlobalSection.vue.mjs";
import SideNav from "../../components/SideNav/SideNav.vue.mjs";
import { usePageLoader } from "../../composables/usePageLoader.mjs";
const _sfc_main = {
  __name: "[section]",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading } = usePageLoader();
    const route = useRoute();
    const componentMap = {
      investorsDetails: () => import("../../components/Investors/investorsDetails.vue.mjs"),
      annualReports: () => import("../../components/Investors/annualReports.vue.mjs"),
      quarterlyResults: () => import("../../components/Investors/quarterlyResults.vue.mjs"),
      shareholdersInfo: () => import("../../components/Investors/shareholdersInfo.vue.mjs"),
      stockPrice: () => import("../../components/Investors/stockPrice.vue.mjs")
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
//# sourceMappingURL=_section_.vue.mjs.map
