import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/OurVision.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OurVision = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a9aea71a"]]);
export {
  OurVision as default
};
//# sourceMappingURL=OurVision.vue.mjs.map
