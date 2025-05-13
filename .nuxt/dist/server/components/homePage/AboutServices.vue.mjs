import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/AboutServices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=AboutServices.vue.mjs.map
