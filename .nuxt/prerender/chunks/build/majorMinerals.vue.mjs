import { mergeProps, useSSRContext } from 'file://D:/Project_1205/maxearth/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://D:/Project_1205/maxearth/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unctx/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/radix3/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "about-area p-5"
  }, _attrs))}><div class="container"><div class="row align-items-center gy-5"><div class="col-12"><div class=""><div class="site-heading mb-3"><span class="site-title-tagline">Major Minerals</span><h2 class="site-title"> We at Max Earth Resources Limited attempts to live to the <span>Dreams</span> We See. </h2></div><p class="mb-4"> Max Earth Resources Limited is a leading mining company in India, specializing in minor and Major Minerals like Black Strap Metal and Manganese. With operations across Jharkhand, Maharashtra, Odisha, and Kerala, we are committed to innovation, sustainability, and industrial growth. </p><p class="mb-4"> The Group has strong Inspiration to Contribute to the Nation’s economy through its contributions in the Minor and Major Mineral Mining, Processing, Blending, Marketing and Sales in India and abroad. It comes to the Group as Intrinsic Traits, and therefore, we can humbly notify that as an Institutional Minor, we are the largest Black Strap Minor and Manufacturer of Black Strap Metal in the State of Jharkhand, with an annual Production surpassing 2 Lakhs Ton. </p><ul class="about-list list-unstyled mb-4"><li><i class="fa-solid fa-circle-check me-2 txt-warning"></i> At vero eos et accusamus et iusto odio. </li><li><i class="fa-solid fa-circle-check me-2 txt-warning"></i> Established fact that a reader will be distracted. </li><li><i class="fa-solid fa-circle-check me-2 txt-warning"></i> Sed ut perspiciatis unde omnis iste natus sit. </li></ul></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Verticals/majorMinerals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const majorMinerals = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { majorMinerals as default };
//# sourceMappingURL=majorMinerals.vue.mjs.map
