import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/CarouselSlide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CarouselSlide = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c68c4741"]]);
export {
  CarouselSlide as default
};
//# sourceMappingURL=CarouselSlide.vue.mjs.map
