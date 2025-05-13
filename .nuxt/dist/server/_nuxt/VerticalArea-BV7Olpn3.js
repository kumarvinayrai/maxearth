import { reactive, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { u as usePageLoader, P as PageLoader, _ as _sfc_main$1 } from "./usePageLoader-BVeLbgfC.js";
import { F as Footer } from "./Footer-Dip3Fl9h.js";
import { G as GlobalSection } from "./GlobalSection-CMCYOAVe.js";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-Cd-cNNtK.js";
import "D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/klona/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "vue-router";
import "ofetch";
import "D:/Project_1205/maxearth/node_modules/unctx/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/radix3/dist/index.mjs";
const _sfc_main = {
  __name: "VerticalArea",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading } = usePageLoader();
    const service = reactive({
      headingTagline: "Critical & Strategic Minerals",
      headingBefore: "Mineral Utilization Sector",
      //headingHighlight: 'Services',
      headingAfter: "",
      items: [
        {
          image: "/img/service/02.jpg",
          title: "Cobalt",
          description: "Used in Steel Alloys, rechargeable batteries, medical equipment and aviatronics.",
          iconClass: "flaticon-weight-scale",
          link: "#"
        },
        {
          image: "/img/service/01.jpg",
          title: "Beryllium",
          description: "Beryllium used in the aviation industry. Beryllium is used as alloys with copper or nickel to make byroscopes, springs, electrical contracts, sport welding electrodes, heat bearing industrial  paints.",
          iconClass: "flaticon-foreman",
          link: "#"
        },
        {
          image: "/img/service/05.jpg",
          title: "Natural Graphite",
          description: "Used in Crucibles, foundries, pencils, refractories production of graphite-based sealing gaskets, graphite grease, brake lining, industrial paints defense sector, high speed brakes lining, electrical grease and series of industrial usages.",
          iconClass: "flaticon-refinery",
          link: "#"
        },
        {
          image: "/img/service/03.jpg",
          title: "Cadmium",
          description: "Used in electro-plating in nuclear reactors electrical storage/ rechargeable batteries, cadmium-based bearing alloys are used in high-speed internal combustion engines. Copper Cadmium alloys are used in electric transmission wires, paints, enamel, soap, rubber, glass, ceramic glazes, photographic films and lithography.",
          iconClass: "flaticon-factory-machine-1",
          link: "#"
        },
        {
          image: "/img/service/04.jpg",
          title: "Molybdenum",
          description: "Molybdenum is used in production of steel alloys as refractories metal in electrical and electronic components and heat resistance element in electric arc furnaces operated at extremely high temperatures. Also used in lubricants, catalysts, pigments, oil and greases, aerosol sprays in reducing surface friction and as anti-wear and antifriction agents in plastics.",
          iconClass: "flaticon-crane-truck",
          link: "#"
        },
        {
          image: "/img/service/06.jpg",
          title: "Vanadium",
          description: "Alloy Vanadium is used in manufacture of steel products, low carbon flat rolled steels, high strength plates and structural steel to pipes, reenforcing bars, forging steels, rail steel and tool steels. Used as stabilizer in titanium and alumina, vanadium-based batteries for power plants and rechargeable Vanadium redox battery (VRB) for commercial applications. Vanadium is also used to produce super conductive magnets with a field of 1, 75,000 gausses.",
          iconClass: "flaticon-miner",
          link: "#"
        },
        {
          image: "/img/service/06.jpg",
          title: "Manganese",
          description: "Steel Industry Alloys, Manganese Dioxide is used for manufacturing dry cell batteries used in manufacture of various chemicals such as potassium permanganate hydroquinone manganese sulphate manganese chloride, manganese phosphate etc.  Pyrolusite is used generally to impart glaze to pottery and make colored bricks, used in dryers for oils varnishes and paints.Manganese Sulphide is used in the manufacture of salts and In- calico Printing, Manganese Chloride used in Cotton Textile as bronze dye, besides leather, photography and matchbox industries.",
          iconClass: "flaticon-miner",
          link: "#"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageLoader, { show: unref(loading) }, null, _parent));
      _push(`<div style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}" data-v-b5b5d5d8>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(GlobalSection, { fileName: "Verticals.txt" }, null, _parent));
      _push(`<section id="verticals" class="service-area bg py-120" data-v-b5b5d5d8><div class="container" data-v-b5b5d5d8><div class="row" data-v-b5b5d5d8><div class="col-lg-6 mx-auto text-center" data-v-b5b5d5d8><div class="site-heading" data-v-b5b5d5d8><span class="site-title-tagline" data-v-b5b5d5d8>${ssrInterpolate(service.headingTagline)}</span><h2 class="site-title" data-v-b5b5d5d8>${ssrInterpolate(service.headingBefore)} <span data-v-b5b5d5d8>${ssrInterpolate(service.headingHighlight)}</span> ${ssrInterpolate(service.headingAfter)}</h2></div></div></div><div class="row g-4" data-v-b5b5d5d8><!--[-->`);
      ssrRenderList(service.items, (item, index) => {
        _push(`<div class="col-md-6 col-lg-3" data-v-b5b5d5d8><div class="service-item wow fadeInUp"${ssrRenderAttr("data-wow-delay", `${0.25 * index}s`)} data-v-b5b5d5d8><div class="service-img position-relative overflow-hidden" data-v-b5b5d5d8><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="img-fluid w-100 rounded-0" data-v-b5b5d5d8><div class="service-icon position-absolute top-50 start-50 translate-middle" data-v-b5b5d5d8><i class="${ssrRenderClass(item.iconClass)}" data-v-b5b5d5d8></i></div></div><div class="service-content p-3" data-v-b5b5d5d8><h3 class="service-title" data-v-b5b5d5d8><a${ssrRenderAttr("href", item.link)} data-v-b5b5d5d8>${ssrInterpolate(item.title)}</a></h3><p class="truncate-txt" data-v-b5b5d5d8>${ssrInterpolate(item.description)}</p><div class="service-shadow-icon" data-v-b5b5d5d8><i class="${ssrRenderClass(item.iconClass)}" data-v-b5b5d5d8></i></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ourInvestors/VerticalArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VerticalArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b5b5d5d8"]]);
export {
  VerticalArea as default
};
//# sourceMappingURL=VerticalArea-BV7Olpn3.js.map
