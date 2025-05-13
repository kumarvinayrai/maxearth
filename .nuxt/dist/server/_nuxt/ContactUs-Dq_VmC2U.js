import { mergeProps, useSSRContext, reactive, unref } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { u as usePageLoader, P as PageLoader, _ as _sfc_main$3 } from "./usePageLoader-BVeLbgfC.js";
import { G as GlobalSection } from "./GlobalSection-CMCYOAVe.js";
import { _ as _export_sfc } from "../server.mjs";
import { F as Footer } from "./Footer-Dip3Fl9h.js";
import "./nuxt-link-Cd-cNNtK.js";
import "D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/klona/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "D:/Project_1205/maxearth/node_modules/unctx/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/Project_1205/maxearth/node_modules/radix3/dist/index.mjs";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "getTouchCard" }, _attrs))} data-v-df3daca1><div class="contact-content" data-v-df3daca1><div class="row" data-v-df3daca1><div class="col-md-3" data-v-df3daca1><div class="contact-info" data-v-df3daca1><div class="contact-info-icon" data-v-df3daca1><i class="fa-solid fa-location-dot" data-v-df3daca1></i></div><div class="contact-info-content" data-v-df3daca1><h5 data-v-df3daca1>Office Address</h5><p data-v-df3daca1>103/104 Wellington Business Park Marol, Andheri East, Mumbai-400059</p></div></div></div><div class="col-md-3" data-v-df3daca1><div class="contact-info" data-v-df3daca1><div class="contact-info-icon" data-v-df3daca1><i class="fa-solid fa-phone-volume" data-v-df3daca1></i></div><div class="contact-info-content" data-v-df3daca1><h5 data-v-df3daca1>Call Us</h5><p data-v-df3daca1> +91 9664233822</p></div></div></div><div class="col-md-3" data-v-df3daca1><div class="contact-info" data-v-df3daca1><div class="contact-info-icon" data-v-df3daca1><i class="fa-solid fa-envelope" data-v-df3daca1></i></div><div class="contact-info-content" data-v-df3daca1><h5 data-v-df3daca1>Email Us</h5><p data-v-df3daca1>support@maxearth.in </p></div></div></div><div class="col-md-3" data-v-df3daca1><div class="contact-info" data-v-df3daca1><div class="contact-info-icon" data-v-df3daca1><i class="fa-solid fa-business-time" data-v-df3daca1></i></div><div class="contact-info-content" data-v-df3daca1><h5 data-v-df3daca1>Open Time</h5><p data-v-df3daca1>Mon - Sat (10.00AM - 05.30PM)</p></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contactUs/getTouchCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const getTouchCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-df3daca1"]]);
const _sfc_main$1 = {
  __name: "MapSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "map-section mb-0 pb-0" }, _attrs))}><iframe class="w-100 rounded-0" height="350" frameborder="0" style="${ssrRenderStyle({ "border": "0", "margin-bottom": "0", "padding-bottom": "0", "display": "block" })}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=5th+Floor,+501/502+Timmy+Arcade+Makhwana+Road+Marol,+Andheri+East,+Mumbai-400059&amp;output=embed"></iframe></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contactUs/MapSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
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
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
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
//# sourceMappingURL=ContactUs-Dq_VmC2U.js.map
