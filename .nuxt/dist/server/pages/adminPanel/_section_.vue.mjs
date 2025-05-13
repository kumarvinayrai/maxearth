import { computed, defineAsyncComponent, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import { useRoute } from "vue-router";
import PageLoader from "../../components/pageLoader/PageLoader.vue.mjs";
import _sfc_main$1 from "../../components/pageHeader/Header.vue.mjs";
import Footer from "../../components/pageFooter/Footer.vue.mjs";
import GlobalSection from "../../components/GlobalSection.vue.mjs";
import SideNav from "../../components/SideNav/SideNav.vue.mjs";
import { usePageLoader } from "../../composables/usePageLoader.mjs";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "[section]",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading } = usePageLoader();
    const route = useRoute();
    const componentMap = {
      annualReportsFrm: () => import("../../components/admin/annualReportsFrm.vue.mjs"),
      contactDetailsUpdateFrm: () => import("../../components/admin/contactdetailsUpdateFrm.vue.mjs"),
      latestNewsUpdateFrm: () => import("../../components/admin/latestNewsupdateFrm.vue.mjs"),
      mediaAnnounceFrm: () => import("../../components/admin/mediaAnnounceFrm.vue.mjs"),
      quarterlyUpdatesFrm: () => import("../../components/admin/quarterlyUpdatesFrm.vue.mjs"),
      shareholdersDetailsFrm: () => import("../../components/admin/shareholdersDetailsFrm.vue.mjs"),
      socialMediaLinksFrm: () => import("../../components/admin/socialMedialinksFrm.vue.mjs"),
      stockPriceUpdateFrm: () => import("../../components/admin/stockPricepdateFrm.vue.mjs")
    };
    const dynamicComponent = computed(() => {
      const section = (route.params.section || "").toLowerCase();
      const keyMap = Object.keys(componentMap).reduce((acc, key) => {
        acc[key.toLowerCase()] = key;
        return acc;
      }, {});
      const matchedKey = keyMap[section] || "annualReportsFrm";
      return defineAsyncComponent(componentMap[matchedKey]);
    });
    const computedBannerKey = computed(() => {
      const section = route.params.section || "annualReportsFrm";
      return `${section.toLowerCase()}Section`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageLoader, { show: unref(loading) }, null, _parent));
      if (!unref(loading)) {
        _push(`<div data-v-d30056b1>`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(ssrRenderComponent(GlobalSection, {
          fileName: "bannerSection.txt",
          sectionKey: computedBannerKey.value
        }, null, _parent));
        _push(`<section data-v-d30056b1><div class="blog-single-area" data-v-d30056b1><div class="container-fluid" data-v-d30056b1><div class="row gx-4" data-v-d30056b1><div class="col-lg-3 col-md-12 mb-4 mb-lg-0 px-0" data-v-d30056b1>`);
        _push(ssrRenderComponent(SideNav, {
          title: "Admin Panel",
          sectionKey: "adminPanel",
          baseRoute: "/adminPanel"
        }, null, _parent));
        _push(`</div><div class="col-lg-9 col-md-12" data-v-d30056b1><div class="blog-single-wrapper" data-v-d30056b1><div class="blog-single-content" data-v-d30056b1>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adminPanel/[section].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _section_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d30056b1"]]);
export {
  _section_ as default
};
//# sourceMappingURL=_section_.vue.mjs.map
