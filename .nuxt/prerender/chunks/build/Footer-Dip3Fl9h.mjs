import { ref, withCtx, createVNode, createTextVNode, toDisplayString, unref, mergeProps, useSSRContext } from 'file://D:/Project_1205/maxearth/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrRenderClass } from 'file://D:/Project_1205/maxearth/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Cd-cNNtK.mjs';
import { useRouter } from 'file://D:/Project_1205/maxearth/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$1 = {
  __name: "HeaderTop",
  __ssrInlineRender: true,
  setup(__props) {
    const contactInfo = ref([]);
    const socialLinks = ref([]);
    const followUsLabel = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "headerTop",
        class: "header-top"
      }, _attrs))} data-v-f55781dd><div class="container" data-v-f55781dd><div class="header-top-wrapper d-flex justify-content-between align-items-center" data-v-f55781dd><div class="header-top-contact" data-v-f55781dd>`);
      if (contactInfo.value.length) {
        _push(`<ul class="list-unstyled d-flex gap-3 mb-0" data-v-f55781dd><!--[-->`);
        ssrRenderList(contactInfo.value, (contact, index) => {
          _push(`<li data-v-f55781dd><a${ssrRenderAttr("href", contact.link)} target="_blank" rel="noopener noreferrer" data-v-f55781dd><i class="${ssrRenderClass([contact.icon, "me-1"])}" data-v-f55781dd></i> ${ssrInterpolate(contact.text)}</a></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (socialLinks.value.length) {
        _push(`<div class="header-top-social d-flex align-items-center gap-2" data-v-f55781dd>`);
        if (followUsLabel.value) {
          _push(`<span data-v-f55781dd>${ssrInterpolate(followUsLabel.value)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(socialLinks.value, (social, index) => {
          _push(`<a${ssrRenderAttr("href", social.link)} target="_blank" rel="noopener noreferrer" data-v-f55781dd><i class="${ssrRenderClass(social.icon)}" data-v-f55781dd></i></a>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pageHeader/HeaderTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HeaderTop = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f55781dd"]]);
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const footerData = ref({
      logo: { src: "", alt: "" },
      description: "",
      contact: { phone: "", email: "", address: "" },
      sections: [],
      newsletter: { title: "", description: "" },
      socials: [],
      copyright: ""
    });
    const email = ref("");
    const isVisible = ref(false);
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-8310e4d3><footer class="footer-area" data-v-8310e4d3><div class="footer-content py-5" data-v-8310e4d3><div class="container" data-v-8310e4d3><div class="row" data-v-8310e4d3><div class="col-md-6 col-lg-4" data-v-8310e4d3><div class="footer-content-box about-us" data-v-8310e4d3><a href="#" class="footer-logo d-inline-block mb-3" data-v-8310e4d3><img${ssrRenderAttr("src", footerData.value.logo.src)}${ssrRenderAttr("alt", footerData.value.logo.alt)} data-v-8310e4d3></a><p class="mb-3" data-v-8310e4d3>${ssrInterpolate(footerData.value.description)}</p><ul class="list-unstyled footer-contact" data-v-8310e4d3><li data-v-8310e4d3><a${ssrRenderAttr("href", `tel:${footerData.value.contact.phone}`)} data-v-8310e4d3><i class="fa-solid fa-phone me-2" data-v-8310e4d3></i>${ssrInterpolate(footerData.value.contact.phone)}</a></li><li data-v-8310e4d3><a${ssrRenderAttr("href", `mailto:${footerData.value.contact.address}`)} data-v-8310e4d3><i class="fa-solid fa-location-dot me-2" data-v-8310e4d3></i>${ssrInterpolate(footerData.value.contact.address)}</a></li><li data-v-8310e4d3><a${ssrRenderAttr("href", `mailto:${footerData.value.contact.email}`)} data-v-8310e4d3><i class="fa-solid fa-envelope me-2" data-v-8310e4d3></i>${ssrInterpolate(footerData.value.contact.email)}</a></li></ul></div></div><!--[-->`);
      ssrRenderList(footerData.value.sections, (section, idx) => {
        _push(`<div class="col-md-6 col-lg-2" data-v-8310e4d3><div class="footer-content-box list" data-v-8310e4d3><h4 class="footer-content-title" style="${ssrRenderStyle(section.title === "Our Services" ? "visibility: hidden;" : "")}" data-v-8310e4d3>${ssrInterpolate(section.title)}</h4><ul class="footer-list list-unstyled" data-v-8310e4d3><!--[-->`);
        ssrRenderList(section.links, (link, i) => {
          _push(`<li data-v-8310e4d3>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.href
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fas fa-caret-right me-2" data-v-8310e4d3${_scopeId}></i>${ssrInterpolate(link.text)}`);
              } else {
                return [
                  createVNode("i", { class: "fas fa-caret-right me-2" }),
                  createTextVNode(toDisplayString(link.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--><div class="col-md-6 col-lg-3" data-v-8310e4d3><div class="footer-content-box list" data-v-8310e4d3><h4 class="footer-content-title" data-v-8310e4d3>${ssrInterpolate(footerData.value.newsletter.title)}</h4><div class="footer-newsletter" data-v-8310e4d3><p data-v-8310e4d3>${ssrInterpolate(footerData.value.newsletter.description)}</p><form class="subscribe-form" data-v-8310e4d3><input${ssrRenderAttr("value", email.value)} type="email" class="form-control mb-2" placeholder="Your Email" required data-v-8310e4d3><button class="theme-btn w-100" type="submit" data-v-8310e4d3> Subscribe Now <i class="fa-solid fa-paper-plane ms-2" data-v-8310e4d3></i></button></form></div></div></div></div></div></div><div class="copyright" data-v-8310e4d3><div class="container" data-v-8310e4d3><div class="row" data-v-8310e4d3><div class="col-md-6 align-self-center" data-v-8310e4d3><p class="copyright-text" data-v-8310e4d3> \xA9 ${ssrInterpolate(unref(currentYear))} ${ssrInterpolate(footerData.value.copyright)} <br data-v-8310e4d3> Powered by <a href="#" data-v-8310e4d3>Neorotech Solutions Pvt Ltd.</a></p></div><div class="col-md-6 align-self-center" data-v-8310e4d3><ul class="footer-social" data-v-8310e4d3><!--[-->`);
      ssrRenderList(footerData.value.socials, (icon, i) => {
        _push(`<li data-v-8310e4d3><a${ssrRenderAttr("href", icon.href)} target="_blank" data-v-8310e4d3><i class="${ssrRenderClass(icon.icon)}" data-v-8310e4d3></i></a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div></footer><a href="#" id="scroll-top" aria-label="Scroll to top" class="${ssrRenderClass([{ active: isVisible.value }, "scroll-top"])}" data-v-8310e4d3><i class="fa-solid fa-arrow-up" data-v-8310e4d3></i></a></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pageFooter/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8310e4d3"]]);

export { Footer as F, HeaderTop as H };
//# sourceMappingURL=Footer-Dip3Fl9h.mjs.map
