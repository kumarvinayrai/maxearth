import { ref, mergeProps, useSSRContext } from 'file://D:/Project_1205/maxearth/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file://D:/Project_1205/maxearth/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "GlobalSection",
  __ssrInlineRender: true,
  props: {
    fileName: { type: String, required: true },
    sectionKey: { type: [String, Number], required: true }
    // Handle any type
  },
  setup(__props) {
    const sectionData = ref(null);
    const loaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (loaded.value && sectionData.value) {
        _push(`<section${ssrRenderAttrs(_attrs)} data-v-0eb2b38a><div class="container-fluid" data-v-0eb2b38a><div class="row align-items-center min-vh-50 bg-primary-clip" data-v-0eb2b38a><div class="col-lg-6 px-5" data-v-0eb2b38a><h1 class="display-5 fw-bold mb-3 text-white" data-v-0eb2b38a>${ssrInterpolate(sectionData.value.heading)}</h1><p class="lead text-white" data-v-0eb2b38a>${ssrInterpolate(sectionData.value.subheading)}</p></div><div class="col-lg-6 p-0" data-v-0eb2b38a><img${ssrRenderAttr("src", sectionData.value.imageSrc)}${ssrRenderAttr("alt", sectionData.value.imageAlt)}${ssrRenderAttr("title", sectionData.value.imageTitle)}${ssrRenderAttr("loading", sectionData.value.imageLoading || "lazy")} class="img-fluid object-fit-cover clip-img" data-v-0eb2b38a></div></div></div></section>`);
      } else if (loaded.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center p-5 text-danger" }, _attrs))} data-v-0eb2b38a> Failed to load content. </div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center p-5 text-muted" }, _attrs))} data-v-0eb2b38a> Loading... </div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GlobalSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GlobalSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0eb2b38a"]]);

export { GlobalSection as G };
//# sourceMappingURL=GlobalSection.vue.mjs.map
