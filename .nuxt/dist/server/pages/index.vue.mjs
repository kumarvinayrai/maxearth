import { unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import PageLoader from "../components/pageLoader/PageLoader.vue.mjs";
import _sfc_main$1 from "../components/pageHeader/Header.vue.mjs";
import CarouselSlide from "../components/homePage/CarouselSlide.vue.mjs";
import _sfc_main$2 from "../components/homePage/AboutServices.vue.mjs";
import AboutArea from "../components/homePage/AboutArea.vue.mjs";
import OurVision from "../components/homePage/OurVision.vue.mjs";
import SafetyPolicy from "../components/homePage/SafetyPolicy.vue.mjs";
import CounterSection from "../components/homePage/CounterSection.vue.mjs";
import _sfc_main$3 from "../components/homePage/TeamArea.vue.mjs";
import _sfc_main$4 from "../components/homePage/VideoArea.vue.mjs";
import PartnerArea from "../components/homePage/PartnerArea.vue.mjs";
import Footer from "../components/pageFooter/Footer.vue.mjs";
import { usePageLoader } from "../composables/usePageLoader.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading } = usePageLoader();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(PageLoader, { show: unref(loading) }, null, _parent));
      _push(`<div style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(CarouselSlide, null, null, _parent));
      _push(ssrRenderComponent(AboutArea, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(OurVision, null, null, _parent));
      _push(ssrRenderComponent(SafetyPolicy, null, null, _parent));
      _push(ssrRenderComponent(CounterSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(PartnerArea, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue.mjs.map
