import { mergeProps, useSSRContext } from 'file://D:/Project_1205/maxearth/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://D:/Project_1205/maxearth/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/destr/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/ofetch/dist/node.mjs';
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

const _imports_0 = publicAssetsURL("/img/accomplish/card-01.png");
const _imports_1 = publicAssetsURL("/img/accomplish/card-02.png");
const _imports_2 = publicAssetsURL("/img/accomplish/card-03.png");
const _imports_3 = publicAssetsURL("/img/accomplish/card-04.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))}><div class="container"><div class="row pb-5"><div class="col-lg-12"><div class=""><div class="site-heading mb-3"><span class="site-title-tagline">Awards &amp; Recognition</span><h2 class="site-title"> Achievements and <span>Reflecting Growth </span>Innovation </h2></div><p class=""> Max Earth Resources has earned the trust of leading private coal and metal mining companies across India. As pioneers in underground mine development\u2014spanning both coal and metal sectors\u2014we deliver exceptional service quality, enabling us to expand our horizons through collaboration with global industry experts. </p><p class=""> Our commitment to innovation is reflected in ongoing R&amp;D initiatives, particularly focused on the efficient utilization of tailing materials left after copper extraction. We are also in the process of establishing Waste Metal Recovery Plants to recover valuable metals often left behind by conventional underground mining methods. </p><div class="about-list-wrapper"><ul class="about-list list-unstyled"><li><i class="fa-solid fa-circle-check me-2 txt-warning"></i>Fastest Growing Company in India. </li><li><i class="fa-solid fa-circle-check me-2 txt-warning"></i>Certified for the preparation of Geological Reports in Coal. </li><li><i class="fa-solid fa-circle-check me-2 txt-warning"></i>Recognized by the Ministry of Mines in 2025. </li></ul></div></div></div></div><div class="row mt-5"><div class="col-md-6 col-lg-3"><div><div class="team-img"><img${ssrRenderAttr("src", _imports_0)} alt="thumb"></div></div></div><div class="col-md-6 col-lg-3"><div><div class="team-img"><img${ssrRenderAttr("src", _imports_1)} alt="thumb"></div></div></div><div class="col-md-6 col-lg-3"><div><div class="team-img"><img${ssrRenderAttr("src", _imports_2)} alt="thumb"></div></div></div><div class="col-md-6 col-lg-3"><div><div class="team-img"><img${ssrRenderAttr("src", _imports_3)} alt="thumb"></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/accomplishMent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accomplishMent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { accomplishMent as default };
//# sourceMappingURL=accomplishMent-BaojpuBr.mjs.map
