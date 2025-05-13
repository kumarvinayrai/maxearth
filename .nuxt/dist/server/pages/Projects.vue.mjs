import { unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../public/img/portfolio/01.jpg.mjs";
import _imports_1 from "../public/img/portfolio/02.jpg.mjs";
import PageLoader from "../components/pageLoader/PageLoader.vue.mjs";
import _sfc_main$1 from "../components/pageHeader/Header.vue.mjs";
import Footer from "../components/pageFooter/Footer.vue.mjs";
import GlobalSection from "../components/GlobalSection.vue.mjs";
import { usePageLoader } from "../composables/usePageLoader.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading } = usePageLoader();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageLoader, { show: unref(loading) }, null, _parent));
      _push(`<div style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}" data-v-4257034c>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(GlobalSection, {
        fileName: "bannerSection.txt",
        sectionKey: "projectsSection"
      }, null, _parent));
      _push(`<div class="portfolio-single-area" data-v-4257034c><div class="container-fluid p-0" data-v-4257034c><div class="portfolio-single-wrapper" data-v-4257034c><div class="row" data-v-4257034c><div class="col-3 mb-lg-0 px-0" data-v-4257034c><aside class="portfolio-sidebar" data-v-4257034c><div class="widget portfolio-sidebar-content mb-0" data-v-4257034c><h4 class="widget-title" data-v-4257034c>Project Overview</h4><ul data-v-4257034c><li data-v-4257034c>Category <span data-v-4257034c>Coal Excavation</span></li><li data-v-4257034c>Date <span data-v-4257034c>19 May, 2024</span></li><li data-v-4257034c>Client <span data-v-4257034c>Roger M. Collins</span></li><li data-v-4257034c>Budget <span data-v-4257034c>Rs1,250,000</span></li><li data-v-4257034c>Project Manager <span data-v-4257034c>Doseph Brehmer</span></li><li data-v-4257034c>Location <span data-v-4257034c> Andheri East, Mumbai-400059</span></li><li data-v-4257034c>Website <span data-v-4257034c>maxearth.com</span></li><li data-v-4257034c>Rating <div class="rating" data-v-4257034c><i class="fas fa-star" data-v-4257034c></i><i class="fas fa-star" data-v-4257034c></i><i class="fas fa-star" data-v-4257034c></i><i class="fas fa-star" data-v-4257034c></i><i class="fas fa-star" data-v-4257034c></i></div></li></ul></div><div class="widget new-portfolio" data-v-4257034c><h4 data-v-4257034c>Committed to Sustainable Mining Excellence</h4><a href="#" class="theme-btn theme-btn2" data-v-4257034c>Contact Us<i class="fas fa-arrow-right-long" data-v-4257034c></i></a></div></aside></div><div class="col-9 px-5 pt-5 py-120" data-v-4257034c><div class="portfolio-details" data-v-4257034c><div class="site-heading mb-3" data-v-4257034c><span class="site-title-tagline" data-v-4257034c>Coal Excavation – Hudson</span><h2 class="site-title" data-v-4257034c>Coal Excavation – <span data-v-4257034c> Hudson Valley </span>Project</h2></div><p class="mb-20" data-v-4257034c> The Hudson Valley Coal Excavation Project represents one of MaxEarth Resources’ largest and most complex undertakings to date. This initiative focused on responsible extraction techniques, integrating environmental monitoring, land rehabilitation planning, and energy-efficient equipment. </p><p class="mb-20" data-v-4257034c> Over the course of 18 months, the project team successfully extracted over 1.5 million metric tons of thermal-grade coal while maintaining a minimal ecological footprint. A portion of the operational area is already undergoing reclamation with native vegetation to restore the natural landscape. </p><div class="row" data-v-4257034c><div class="col-md-6 mb-20" data-v-4257034c><img${ssrRenderAttr("src", _imports_0)} alt="Mining Operations" data-v-4257034c></div><div class="col-md-6 mb-20" data-v-4257034c><img${ssrRenderAttr("src", _imports_1)} alt="Excavation Equipment" data-v-4257034c></div></div><p class="mb-20" data-v-4257034c> This project is part of MaxEarth’s broader vision to modernize coal mining through automation and digital tracking. Our adaptive mining technologies have reduced waste, lowered energy usage, and ensured compliance with strict federal environmental regulations. </p><div class="my-4" data-v-4257034c><h3 class="mb-3" data-v-4257034c>Project Tips &amp; Recommendations</h3><p data-v-4257034c> Through our experience on this project, we developed key best practices in logistics, resource planning, and on-site safety. These insights now inform our ongoing and future operations across multiple mining regions. </p><ul class="portfolio-single-list" data-v-4257034c><li data-v-4257034c><i class="fa-solid fa-circle-check me-2 txt-warning" data-v-4257034c></i> Implement advanced safety protocols for excavation crews</li><li data-v-4257034c><i class="fa-solid fa-circle-check me-2 txt-warning" data-v-4257034c></i> Use GIS mapping to identify low-impact zones for mining</li><li data-v-4257034c><i class="fa-solid fa-circle-check me-2 txt-warning" data-v-4257034c></i> Coordinate with local communities to align on environmental plans</li><li data-v-4257034c><i class="fa-solid fa-circle-check me-2 txt-warning" data-v-4257034c></i> Deploy energy-efficient haulage and excavation equipment</li><li data-v-4257034c><i class="fa-solid fa-circle-check me-2 txt-warning" data-v-4257034c></i> Maintain real-time data tracking on production volumes</li></ul></div><div class="my-4" data-v-4257034c><h3 class="mb-3" data-v-4257034c>Project Challenges &amp; Solutions</h3><p data-v-4257034c> One of the key challenges involved operating within protected watershed areas. Through strategic engineering design, MaxEarth was able to minimize surface runoff, implement water recycling systems, and gain regional approval for continued development. </p><p data-v-4257034c> Another obstacle was ensuring consistent labor safety amidst high-volume excavation. Our smart wearables and live monitoring dashboards contributed to a 28% reduction in on-site incidents compared to previous baselines. </p></div><div class="my-4" data-v-4257034c><h3 class="mb-3" data-v-4257034c>Upcoming Projects</h3><p data-v-4257034c> Building on the success of this operation, MaxEarth Resources will begin exploratory drilling in the Appalachian Basin in Q3 2025. This next phase will focus on rare earth elements critical to clean energy solutions, including neodymium and dysprosium. </p><p data-v-4257034c> We’re also advancing digital transformation across all sites, with AI-assisted geological modeling set to roll out by the end of the year. </p></div></div></div></div></div></div></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4257034c"]]);
export {
  Projects as default
};
//# sourceMappingURL=Projects.vue.mjs.map
