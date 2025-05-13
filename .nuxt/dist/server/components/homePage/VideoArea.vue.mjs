import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/VideoArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=VideoArea.vue.mjs.map
