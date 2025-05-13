import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "shareholdersInfo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "shareholders-info",
        class: "about-area p-5"
      }, _attrs))} data-v-243e33db><div class="container" data-v-243e33db><div class="row align-items-center gy-5" data-v-243e33db><div class="site-heading mb-3" data-v-243e33db><span class="site-title-tagline" data-v-243e33db>Shareholders Information</span><h2 class="site-title" data-v-243e33db>Our <span data-v-243e33db> Shareholders </span>Information</h2><p class="text-muted" data-v-243e33db> This section provides information on the key shareholders of Maxearth Resources Limited. Details include names, shareholder type, ownership percentages, and shareholder status. The data is presented transparently for stakeholder awareness. </p></div><div class="col-md-6" data-v-243e33db><div class="portfolio-sidebar" data-v-243e33db><div class="widget portfolio-sidebar-content" data-v-243e33db><h4 class="portfolio-sidebar-title" data-v-243e33db>Shareholder Details</h4><ul data-v-243e33db><li data-v-243e33db>Shareholder Name <span data-v-243e33db>Rajesh Kumar</span></li><li data-v-243e33db>Type <span data-v-243e33db>Individual</span></li><li data-v-243e33db>Shareholding <span data-v-243e33db>15.25%</span></li><li data-v-243e33db>Status <span data-v-243e33db>Active</span></li><li data-v-243e33db>Shares Held <span data-v-243e33db>15,250</span></li></ul></div></div></div><div class="col-md-6" data-v-243e33db><div class="portfolio-sidebar" data-v-243e33db><div class="widget portfolio-sidebar-content" data-v-243e33db><h4 class="portfolio-sidebar-title" data-v-243e33db>Shareholder Details</h4><ul data-v-243e33db><li data-v-243e33db>Shareholder Name <span data-v-243e33db>Green Equity Partners</span></li><li data-v-243e33db>Type <span data-v-243e33db>Institutional</span></li><li data-v-243e33db>Shareholding <span data-v-243e33db>22.10%</span></li><li data-v-243e33db>Status <span data-v-243e33db>Active</span></li><li data-v-243e33db>Shares Held <span data-v-243e33db>22,100</span></li></ul></div></div></div><div class="col-md-6" data-v-243e33db><div class="portfolio-sidebar" data-v-243e33db><div class="widget portfolio-sidebar-content" data-v-243e33db><h4 class="portfolio-sidebar-title" data-v-243e33db>Shareholder Details</h4><ul data-v-243e33db><li data-v-243e33db>Shareholder Name <span data-v-243e33db>Priya Mehta</span></li><li data-v-243e33db>Type <span data-v-243e33db>Individual</span></li><li data-v-243e33db>Shareholding <span data-v-243e33db>9.80%</span></li><li data-v-243e33db>Status <span data-v-243e33db>Active</span></li><li data-v-243e33db>Shares Held <span data-v-243e33db>9,800</span></li></ul></div></div></div><div class="col-md-6" data-v-243e33db><div class="portfolio-sidebar" data-v-243e33db><div class="widget portfolio-sidebar-content" data-v-243e33db><h4 class="portfolio-sidebar-title" data-v-243e33db>Shareholder Details</h4><ul data-v-243e33db><li data-v-243e33db>Shareholder Name <span data-v-243e33db>Maxwealth Holding Pvt. Ltd.</span></li><li data-v-243e33db>Type <span data-v-243e33db>Promoter Group</span></li><li data-v-243e33db>Shareholding <span data-v-243e33db>35.00%</span></li><li data-v-243e33db>Status <span data-v-243e33db>Active</span></li><li data-v-243e33db>Shares Held <span data-v-243e33db>35,000</span></li></ul></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Investors/shareholdersInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shareholdersInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-243e33db"]]);
export {
  shareholdersInfo as default
};
//# sourceMappingURL=shareholdersInfo.vue.mjs.map
