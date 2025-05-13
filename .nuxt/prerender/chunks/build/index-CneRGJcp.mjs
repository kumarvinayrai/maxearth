import { unref, mergeProps, ref, reactive, computed, useSSRContext } from 'file://D:/Project_1205/maxearth/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'file://D:/Project_1205/maxearth/node_modules/vue/server-renderer/index.mjs';
import { u as usePageLoader, P as PageLoader, _ as _sfc_main$a } from './usePageLoader-BVeLbgfC.mjs';
import { _ as _export_sfc } from './server.mjs';
import { F as Footer } from './Footer-Dip3Fl9h.mjs';
import './nuxt-link-Cd-cNNtK.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/destr/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unstorage/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/Project_1205/maxearth/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://D:/Project_1205/maxearth/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/ohash/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/klona/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/scule/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/Project_1205/maxearth/node_modules/pathe/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unhead/dist/server.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/devalue/index.js';
import 'file://D:/Project_1205/maxearth/node_modules/unhead/dist/utils.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unhead/dist/plugins.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unctx/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$9 = {
  __name: "CarouselSlide",
  __ssrInlineRender: true,
  setup(__props) {
    const slides = ref([]);
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c68c4741>`);
      if (!loading.value && slides.value.length > 0) {
        _push(`<div id="DynamicCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="hover" data-v-c68c4741>`);
        if (slides.value.length > 1) {
          _push(`<div class="carousel-indicators" data-v-c68c4741><!--[-->`);
          ssrRenderList(slides.value, (slide, index) => {
            _push(`<button type="button" data-bs-target="#DynamicCarousel"${ssrRenderAttr("data-bs-slide-to", index)} class="${ssrRenderClass({ active: index === 0 })}"${ssrRenderAttr("aria-current", index === 0 ? "true" : null)}${ssrRenderAttr("aria-label", `Slide ${index + 1}`)} data-v-c68c4741></button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="carousel-inner" data-v-c68c4741><!--[-->`);
        ssrRenderList(slides.value, (slide, index) => {
          _push(`<div class="${ssrRenderClass(["carousel-item", { active: index === 0 }])}" data-v-c68c4741><div class="slide-item d-flex align-items-center" style="${ssrRenderStyle({ backgroundImage: `url(${slide.image || "/img/default-image.png"})` })}" data-v-c68c4741><div class="overlay" data-v-c68c4741></div><div class="container" data-v-c68c4741><div class="row align-items-center" data-v-c68c4741><div class="col-12 col-lg-10 text-center text-lg-start" data-v-c68c4741><div class="slider-content" data-v-c68c4741><h6 class="slide-sub-title mb-2" data-v-c68c4741>${ssrInterpolate(slide.subtitle || "Default Subtitle")}</h6><h1 class="slide-title" data-v-c68c4741>${ssrInterpolate(slide.title || "Default Title")} <span data-v-c68c4741>${ssrInterpolate(slide.headingHighlight || "")}</span> ${ssrInterpolate(slide.headingAfter || "")}</h1><p class="lead" data-v-c68c4741>${ssrInterpolate(slide.description || "Default Description")}</p><div class="slide-btn mt-3" data-v-c68c4741><a${ssrRenderAttr("href", slide.buttonLink || "#")} class="btn btn-warning btn-lg me-2 theme-btn" data-v-c68c4741> About More <i class="fas fa-arrow-right-long" data-v-c68c4741></i></a><a${ssrRenderAttr("href", slide.secondaryButtonLink || "#")} class="btn btn-outline-light btn-lg theme-btn theme-btn-outline" data-v-c68c4741> Learn More <i class="fas fa-arrow-right-long" data-v-c68c4741></i></a></div></div></div></div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
        if (slides.value.length > 1) {
          _push(`<button class="carousel-control-prev" type="button" data-bs-target="#DynamicCarousel" data-bs-slide="prev" data-v-c68c4741><span class="carousel-control-prev-icon" aria-hidden="true" data-v-c68c4741></span><span class="visually-hidden" data-v-c68c4741>Previous</span></button>`);
        } else {
          _push(`<!---->`);
        }
        if (slides.value.length > 1) {
          _push(`<button class="carousel-control-next" type="button" data-bs-target="#DynamicCarousel" data-bs-slide="next" data-v-c68c4741><span class="carousel-control-next-icon" aria-hidden="true" data-v-c68c4741></span><span class="visually-hidden" data-v-c68c4741>Next</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (loading.value) {
        _push(`<div class="loading-state" data-v-c68c4741><p data-v-c68c4741>Loading...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/CarouselSlide.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const CarouselSlide = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-c68c4741"]]);
const _sfc_main$8 = {
  __name: "AboutServices",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        count: "01",
        icon: "flaticon-labor-man",
        title: "Expert Engineers",
        description: "It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.",
        animation: "fadeInUp",
        delay: ".25s"
      },
      {
        count: "02",
        icon: "flaticon-forklift",
        title: "Modern Equipment",
        description: "It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.",
        animation: "fadeInDown",
        delay: ".25s"
      },
      {
        count: "03",
        icon: "flaticon-factory",
        title: "We Quality Industrial",
        description: "It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.",
        animation: "fadeInUp",
        delay: ".25s"
      },
      {
        count: "04",
        icon: "flaticon-mechanical-arm",
        title: "Best Manufacturing",
        description: "It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.",
        animation: "fadeInDown",
        delay: ".25s"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "feature-area py-120 pt-3" }, _attrs))}><div class="container"><div class="feature-wrapper"><div class="row g-4"><!--[-->`);
      ssrRenderList(features, (item, index) => {
        _push(`<div class="col-12 col-sm-6 col-lg-3 d-flex"><div class="${ssrRenderClass([item.animation, "feature-item wow w-100"])}"${ssrRenderAttr("data-wow-delay", item.delay)}><span class="count">${ssrInterpolate(item.count)}</span><div class="feature-icon mb-3"><i class="${ssrRenderClass(item.icon)}"></i></div><h4 class="feature-title mb-2">${ssrInterpolate(item.title)}</h4><p class="mb-0">${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/AboutServices.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/AboutArea.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const AboutArea = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2e3bc23f"]]);
const _sfc_main$6 = {
  __name: "OurVision",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionData = ref({
      tagline: "",
      title: "",
      description: "",
      image: ""
    });
    const visionData = ref({
      tagline: "",
      title: "",
      description: ""
    });
    const whatWeDoTitle = ref({
      title: ""
    });
    const whatWeDo = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "missionVision",
        class: "choose-area bg py-120"
      }, _attrs))} data-v-a9aea71a><div class="container" data-v-a9aea71a><div class="row align-items-center" data-v-a9aea71a><div class="col-lg-6" data-v-a9aea71a><div class="choose-content choose fadeInUp" data-v-a9aea71a><div class="site-heading mb-3" data-v-a9aea71a><span class="site-title-tagline" data-v-a9aea71a>${ssrInterpolate(sectionData.value.tagline)}</span><h2 class="site-title" data-v-a9aea71a>${ssrInterpolate(sectionData.value.title)}</h2></div><p data-v-a9aea71a>${ssrInterpolate(sectionData.value.description)}</p><div class="site-heading mb-3" data-v-a9aea71a><span class="site-title-tagline" data-v-a9aea71a>${ssrInterpolate(visionData.value.tagline)}</span><h2 class="site-title" data-v-a9aea71a>${ssrInterpolate(visionData.value.title)}</h2></div><p data-v-a9aea71a>${ssrInterpolate(visionData.value.description)}</p><div class="site-heading mb-3" data-v-a9aea71a><h2 class="site-title" data-v-a9aea71a>${ssrInterpolate(whatWeDoTitle.value.title)}</h2></div><div class="choose-wrapper" data-v-a9aea71a><!--[-->`);
      ssrRenderList(whatWeDo.value, (item, index) => {
        _push(`<div class="choose-item" data-v-a9aea71a><div class="choose-icon" data-v-a9aea71a><i class="${ssrRenderClass(item.icon)}" data-v-a9aea71a></i></div><div class="choose-item-content" data-v-a9aea71a><h4 data-v-a9aea71a>${ssrInterpolate(item.title)}</h4><p data-v-a9aea71a>${ssrInterpolate(item.text)}</p></div></div>`);
      });
      _push(`<!--]--></div><a href="/aboutUs/about" class="theme-btn mt-3" data-v-a9aea71a> Discover More <i class="fas fa-arrow-right-long" data-v-a9aea71a></i></a></div></div><div class="col-lg-6" data-v-a9aea71a><div class="choose-img choose fadeInRight" data-v-a9aea71a><img${ssrRenderAttr("src", sectionData.value.image)} alt="choose image" class="img-fluid w-100 min-height" data-v-a9aea71a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/OurVision.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const OurVision = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-a9aea71a"]]);
const _sfc_main$5 = {
  __name: "SafetyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    const safetyPolicy = reactive({
      image: "",
      imageAlt: "",
      tagline: "",
      highlightHeadingBefore: "",
      headingBefore: "",
      headingHighlight: "",
      headingAfter: "",
      description: "",
      points: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "SafetyPolicy",
        class: "safety-policy py-120"
      }, _attrs))} data-v-05e0f347><div class="container" data-v-05e0f347><div class="row align-items-center gy-5" data-v-05e0f347><div class="col-lg-6" data-v-05e0f347><div class="safety-policy-left fadeInLeft" data-v-05e0f347><div class="safety-policy-itemimg mb-4 mb-lg-0" data-v-05e0f347><img${ssrRenderAttr("src", safetyPolicy.image)}${ssrRenderAttr("alt", safetyPolicy.imageAlt)} class="img-fluid rounded-0" data-v-05e0f347></div></div></div><div class="col-lg-6" data-v-05e0f347><div class="safety-policy-right fadeInRight" data-v-05e0f347><div class="site-heading mb-3" data-v-05e0f347><span class="site-title-tagline" data-v-05e0f347>${ssrInterpolate(safetyPolicy.tagline)}</span><h2 class="site-title" data-v-05e0f347><span data-v-05e0f347>${ssrInterpolate(safetyPolicy.highlightHeadingBefore)}\xA0</span>${ssrInterpolate(safetyPolicy.headingBefore)} <span data-v-05e0f347>${ssrInterpolate(safetyPolicy.headingHighlight)}</span> ${ssrInterpolate(safetyPolicy.headingAfter)}</h2></div><p class="mb-4" data-v-05e0f347>${ssrInterpolate(safetyPolicy.description)}</p><ul class="safety-policy-list list-unstyled mb-4" data-v-05e0f347><!--[-->`);
      ssrRenderList(safetyPolicy.points, (point, index) => {
        _push(`<li data-v-05e0f347><i class="${ssrRenderClass([point.icon, "me-2", "txt-warning"])}" data-v-05e0f347></i>${ssrInterpolate(point.text)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/SafetyPolicy.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SafetyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-05e0f347"]]);
const _sfc_main$4 = {
  __name: "CounterSection",
  __ssrInlineRender: true,
  setup(__props) {
    const counters = reactive([]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "counter-area py-120" }, _attrs))} data-v-fb13a58b><div class="container" data-v-fb13a58b><div class="row g-4" data-v-fb13a58b><!--[-->`);
      ssrRenderList(counters, (counter, index) => {
        _push(`<div class="col-6 col-lg-3" data-v-fb13a58b><div class="counter-box text-center p-3 h-100" data-v-fb13a58b><div class="icon" data-v-fb13a58b><i class="${ssrRenderClass(counter.iconClass)}" data-v-fb13a58b></i></div><div data-v-fb13a58b><span class="counter" data-v-fb13a58b>${ssrInterpolate(counter.current)}</span><h6 class="title" data-v-fb13a58b>${ssrInterpolate(counter.title)}</h6></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/CounterSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CounterSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fb13a58b"]]);
const _sfc_main$3 = {
  __name: "TeamArea",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionData = ref({});
    const teamMembers = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-area 65rem bg pt-120 pb-50" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6 mx-auto"><div class="site-heading text-center"><span class="site-title-tagline">${ssrInterpolate(sectionData.value.tagline)}</span><h2 class="site-title">${ssrInterpolate(sectionData.value.titleBefore)} <span>${ssrInterpolate(sectionData.value.titleHighlight)}</span></h2></div></div></div><div class="row mt-5"><!--[-->`);
      ssrRenderList(teamMembers.value, (member, index) => {
        _push(`<div class="col-md-6 col-lg-3"><div class="team-item wow fadeInUp"${ssrRenderAttr("data-wow-delay", member.delay)}><div class="team-img"><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)}></div><div class="team-social"><!--[-->`);
        ssrRenderList(member.socials, (social, i) => {
          _push(`<a${ssrRenderAttr("href", `https://${social.platform}.com`)} target="_blank" rel="noopener noreferrer"><i class="${ssrRenderClass(social.iconClass)}"></i></a>`);
        });
        _push(`<!--]--></div><div class="team-content"><div class="team-bio"><h5><a href="#">${ssrInterpolate(member.name)}</a></h5><span>${ssrInterpolate(member.position)}</span></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/TeamArea.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "VideoArea",
  __ssrInlineRender: true,
  setup(__props) {
    const videoData = ref({
      background: "",
      videoUrl: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "video-area" }, _attrs))}><div class="container-fluid px-0"><div class="video-content d-flex justify-content-center align-items-center" style="${ssrRenderStyle(videoData.value.background ? `background-image: url(${videoData.value.background})` : "")}"><div class="row w-100"><div class="col-12 d-flex justify-content-center"><div class="video-wrapper"><a class="play-btn popup-youtube"${ssrRenderAttr("href", videoData.value.videoUrl)} target="_blank" rel="noopener noreferrer"><i class="fas fa-play"></i></a></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/VideoArea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "PartnerArea",
  __ssrInlineRender: true,
  setup(__props) {
    const partners = ref([]);
    const repeatedPartners = computed(() => [
      ...partners.value,
      ...partners.value,
      ...partners.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "partner-area bg py-120" }, _attrs))} data-v-d4081d4f><div class="container" data-v-d4081d4f><div class="marquee-wrapper overflow-hidden position-relative" data-v-d4081d4f><div class="marquee-track" data-v-d4081d4f><div class="marquee d-flex align-items-center gap-4" data-v-d4081d4f><!--[-->`);
      ssrRenderList(unref(repeatedPartners), (logo, index) => {
        _push(`<div class="partner-logo" data-v-d4081d4f><img${ssrRenderAttr("src", logo.src)}${ssrRenderAttr("alt", logo.alt)} class="img-fluid" data-v-d4081d4f></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/PartnerArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PartnerArea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d4081d4f"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading } = usePageLoader();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(PageLoader, { show: unref(loading) }, null, _parent));
      _push(`<div style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(ssrRenderComponent(CarouselSlide, null, null, _parent));
      _push(ssrRenderComponent(AboutArea, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(OurVision, null, null, _parent));
      _push(ssrRenderComponent(SafetyPolicy, null, null, _parent));
      _push(ssrRenderComponent(CounterSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
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

export { _sfc_main as default };
//# sourceMappingURL=index-CneRGJcp.mjs.map
