import { reactive, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import PageLoader from "../components/pageLoader/PageLoader.vue.mjs";
import GlobalSection from "../components/GlobalSection.vue.mjs";
import getTouchCard from "../components/contactUs/getTouchCard.vue.mjs";
import _sfc_main$2 from "../components/contactUs/MapSection.vue.mjs";
import _sfc_main$1 from "../components/pageHeader/Header.vue.mjs";
import Footer from "../components/pageFooter/Footer.vue.mjs";
import { usePageLoader } from "../composables/usePageLoader.mjs";
const _sfc_main = {
  __name: "ContactUs",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading } = usePageLoader();
    const quoteInfo = {
      subheading: "Get Free Quote",
      heading: "Do You Have Any Questions?",
      image: "/img/quote/01.jpg",
      alt: "Quote Illustration"
    };
    const services = [
      "Mine Engineering",
      "Coal Excavation",
      "Geological Consulting",
      "Mobile Crane Services",
      "Stone Crushers",
      "Responsible Mining"
    ];
    const form = reactive({
      name: "",
      email: "",
      subject: "",
      service: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageLoader, { show: unref(loading) }, null, _parent));
      _push(`<div style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(GlobalSection, {
        fileName: "bannerSection.txt",
        sectionKey: "newsSection"
      }, null, _parent));
      _push(`<section id="getQuote" class="quote-area bg py-120"><div class="container">`);
      _push(ssrRenderComponent(getTouchCard, null, null, _parent));
      _push(`<div class="quote-wrapper"><div class="row align-items-center g-4"><div class="col-lg-5"><div class="quote-img"><img${ssrRenderAttr("src", quoteInfo.image)}${ssrRenderAttr("alt", quoteInfo.alt)} class="img-fluid w-100 rounded-0"></div></div><div class="col-lg-7"><div class="quote-content"><div class="quote-header mb-4"><h6 class="site-title-tagline">${ssrInterpolate(quoteInfo.subheading)}</h6><h2 class="site-title">${ssrInterpolate(quoteInfo.heading)}</h2></div><form><div class="row g-3"><div class="col-md-6"><div class="form-group"><input${ssrRenderAttr("value", form.name)} type="text" name="name" class="form-control" placeholder="Your Name" required></div></div><div class="col-md-6"><div class="form-group"><input${ssrRenderAttr("value", form.email)} type="email" name="email" class="form-control" placeholder="Email Address" required></div></div><div class="col-md-6"><div class="form-group"><input${ssrRenderAttr("value", form.subject)} type="text" name="subject" class="form-control" placeholder="Subject" required></div></div><div class="col-md-6"><div class="form-group"><select class="form-select" name="service" required><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(form.service) ? ssrLooseContain(form.service, "") : ssrLooseEqual(form.service, "")) ? " selected" : ""}>Choose Service</option><!--[-->`);
      ssrRenderList(services, (service, index) => {
        _push(`<option${ssrRenderAttr("value", service)}${ssrIncludeBooleanAttr(Array.isArray(form.service) ? ssrLooseContain(form.service, service) : ssrLooseEqual(form.service, service)) ? " selected" : ""}>${ssrInterpolate(service)}</option>`);
      });
      _push(`<!--]--></select></div></div></div><div class="form-group mt-3"><textarea name="message" class="form-control" placeholder="Type Message" rows="4" required>${ssrInterpolate(form.message)}</textarea></div><button type="submit" class="theme-btn mt-3"> Submit Now <i class="fas fa-arrow-right-long"></i></button></form></div></div></div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ContactUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ContactUs.vue.mjs.map
