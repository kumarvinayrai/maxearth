import { unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import PageLoader from "../components/pageLoader/PageLoader.vue.mjs";
import _sfc_main$1 from "../components/pageHeader/Header.vue.mjs";
import Footer from "../components/pageFooter/Footer.vue.mjs";
import GlobalSection from "../components/GlobalSection.vue.mjs";
import { usePageLoader } from "../composables/usePageLoader.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "myIIInvestors",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading } = usePageLoader();
    const sectionData = {
      tagline: "Max Earth Advantage",
      titleBefore: "India’s Most  ",
      titleHighlight: "Strategic",
      titleAfter: "Mineral Partner",
      description: "We have several Black Strap Project (s) in the States of – Jharkhand, Maharashtra, Orissa, and Kerala.  We anticipate at least 6-7 Project (s) to be Operational during the Financial Year 2026-27 and becomes as Strategic Business Units in the Minor Mineral Sector, as majority of them are located at Key Places, on New Rail Head, Road Head, Vicinity of  Port and Civil City Retail Consumption and Captive Consumptions.",
      image: "/img/choose/010.png"
    };
    const chooseItems = [
      {
        icon: "flaticon-foreman",
        title: "The Botejhari Manganese Initiative",
        text: "On the Major Mineral front, the Group have recently engaged itself into the Prospecting and Exploration of the Botejhari Manganese Block, (a G-3 Work, Mine Block Area 6.094-Hectare with 34% + Manganese Contents of Composite Licence) Mineral Block in the Distt: Balaghat, Madhya Pradesh State as  our 1st Priority Project.  ."
      },
      {
        icon: "flaticon-mining-cart-1",
        title: "Timeline-Driven Expansion in Strategic Mineral Assets",
        text: "Max Earth is strategically expanding its presence in the major minerals sector, with a focused commitment to acquiring and developing critical and strategic mineral assets. We prioritize swift execution, adhering to aggressive timelines to secure high-potential mineral blocks that strengthen India’s resource independence and industrial growth. Our disciplined approach ensures rapid deployment of technical and operational expertise, positioning us as a key player in the nation’s critical minerals supply chain."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageLoader, { show: unref(loading) }, null, _parent));
      _push(`<div style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}" data-v-90108045>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(GlobalSection, { fileName: "Investors.txt" }, null, _parent));
      _push(`<section id="investors" class="choose-area py-120" data-v-90108045><div class="container" data-v-90108045><div class="row align-items-center" data-v-90108045><div class="col-lg-6" data-v-90108045><div class="choose-content choose fadeInUp" data-v-90108045><div class="site-heading mb-3" data-v-90108045><span class="site-title-tagline" data-v-90108045>${ssrInterpolate(sectionData.tagline)}</span><h2 class="site-title" data-v-90108045>${ssrInterpolate(sectionData.titleBefore)} <span data-v-90108045>${ssrInterpolate(sectionData.titleHighlight)}</span> ${ssrInterpolate(sectionData.titleAfter)}</h2></div><p data-v-90108045>${ssrInterpolate(sectionData.description)}</p><div class="choose-wrapper" data-v-90108045><!--[-->`);
      ssrRenderList(chooseItems, (item, index) => {
        _push(`<div class="choose-item" data-v-90108045><div class="choose-icon" data-v-90108045><i class="${ssrRenderClass(item.icon)}" data-v-90108045></i></div><div class="choose-item-content" data-v-90108045><h4 data-v-90108045>${ssrInterpolate(item.title)}</h4><p data-v-90108045>${ssrInterpolate(item.text)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="col-lg-6" data-v-90108045><div class="choose-img choose fadeInRight" data-v-90108045><img${ssrRenderAttr("src", sectionData.image)} alt="choose image" class="img-fluid w-100 min-height" data-v-90108045></div></div></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/myIIInvestors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const myIIInvestors = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-90108045"]]);
export {
  myIIInvestors as default
};
//# sourceMappingURL=myIIInvestors.vue.mjs.map
