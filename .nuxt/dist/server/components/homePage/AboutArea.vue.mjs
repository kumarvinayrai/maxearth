import { reactive, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "AboutArea",
  __ssrInlineRender: true,
  setup(__props) {
    const about = reactive({
      image: "",
      imageAlt: "",
      experienceYears: 0,
      experienceText: "",
      experienceIcon: "",
      tagline: "",
      headingBefore: "",
      headingHighlight: "",
      headingAfter: "",
      description: "",
      description2: "",
      features: [],
      points: [],
      cta: {
        text: "",
        link: ""
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "about-area py-120 pb-5"
      }, _attrs))} data-v-2e3bc23f><div class="container" data-v-2e3bc23f><div class="row align-items-center gy-5" data-v-2e3bc23f><div class="col-lg-6" data-v-2e3bc23f><div class="about-left fadeInLeft" data-v-2e3bc23f><div class="about-img mb-4 mb-lg-0" data-v-2e3bc23f><img${ssrRenderAttr("src", about.image)}${ssrRenderAttr("alt", about.imageAlt)} class="img-fluid rounded-0" data-v-2e3bc23f></div><div class="about-experience d-flex align-items-center" data-v-2e3bc23f><div class="about-experience-icon me-3" data-v-2e3bc23f><i class="${ssrRenderClass(about.experienceIcon)}" data-v-2e3bc23f></i></div><strong class="text-start" data-v-2e3bc23f>${ssrInterpolate(about.experienceYears)} Years Of <br data-v-2e3bc23f> ${ssrInterpolate(about.experienceText)}</strong></div></div></div><div class="col-lg-6" data-v-2e3bc23f><div class="about-right fadeInRight" data-v-2e3bc23f><div class="site-heading mb-3" data-v-2e3bc23f><span class="site-title-tagline" data-v-2e3bc23f>${ssrInterpolate(about.tagline)}</span><h2 class="site-title" data-v-2e3bc23f>${ssrInterpolate(about.headingBefore)} <span data-v-2e3bc23f>${ssrInterpolate(about.headingHighlight)}</span> ${ssrInterpolate(about.headingAfter)}</h2></div><p class="about-text mb-4" data-v-2e3bc23f>${ssrInterpolate(about.description)}</p><p class="about-text mb-4" data-v-2e3bc23f>${ssrInterpolate(about.description2)}</p><div class="about-content mb-4" data-v-2e3bc23f><div class="row g-3" data-v-2e3bc23f><!--[-->`);
      ssrRenderList(about.features, (feature, index) => {
        _push(`<div class="col-md-6" data-v-2e3bc23f><div class="about-item d-flex" data-v-2e3bc23f><div class="about-item-icon me-3" data-v-2e3bc23f><i class="${ssrRenderClass(feature.icon)}" data-v-2e3bc23f></i></div><div class="about-item-content" data-v-2e3bc23f><h5 class="mb-1" data-v-2e3bc23f>${ssrInterpolate(feature.title)}</h5><p class="mb-0" data-v-2e3bc23f>${ssrInterpolate(feature.text)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div><ul class="about-list list-unstyled mb-4" data-v-2e3bc23f><!--[-->`);
      ssrRenderList(about.points, (point, index) => {
        _push(`<li data-v-2e3bc23f><i class="${ssrRenderClass([point.icon, "me-2", "txt-warning"])}" data-v-2e3bc23f></i>${ssrInterpolate(point.text)}</li>`);
      });
      _push(`<!--]--></ul><a${ssrRenderAttr("href", about.cta.link)} class="theme-btn mt-3" data-v-2e3bc23f>${ssrInterpolate(about.cta.text)} <i class="fas fa-arrow-right-long" data-v-2e3bc23f></i></a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/AboutArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2e3bc23f"]]);
export {
  AboutArea as default
};
//# sourceMappingURL=AboutArea.vue.mjs.map
