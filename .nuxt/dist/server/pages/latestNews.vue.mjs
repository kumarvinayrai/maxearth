import { unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import PageLoader from "../components/pageLoader/PageLoader.vue.mjs";
import _sfc_main$1 from "../components/pageHeader/Header.vue.mjs";
import Footer from "../components/pageFooter/Footer.vue.mjs";
import GlobalSection from "../components/GlobalSection.vue.mjs";
import { usePageLoader } from "../composables/usePageLoader.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "latestNews",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading } = usePageLoader();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageLoader, { show: unref(loading) }, null, _parent));
      _push(`<div style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}" data-v-f17d7642>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(GlobalSection, {
        fileName: "bannerSection.txt",
        sectionKey: "newsSection"
      }, null, _parent));
      _push(`<section data-v-f17d7642><div class="blog-single-area pt-5 pb-5" data-v-f17d7642><div class="container" data-v-f17d7642><div class="row" data-v-f17d7642><div class="col-lg-8" data-v-f17d7642><div class="blog-single-wrapper" data-v-f17d7642><div class="blog-single-content" data-v-f17d7642><div class="blog-thumb-img mb-4" data-v-f17d7642><img src="https://live.themewild.com/minox/assets/img/blog/single.jpg" class="img-fluid" alt="thumb" data-v-f17d7642></div><div class="blog-info" data-v-f17d7642><div class="blog-details" data-v-f17d7642><h3 class="blog-details-title mb-3" data-v-f17d7642>It is a long established fact that a reader</h3><p class="mb-3" data-v-f17d7642>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p><p class="mb-3" data-v-f17d7642>But I must explain to you how all this mistaken idea...</p><blockquote class="blockqoute p-3 border-start border-3 border-primary bg-light" data-v-f17d7642> It is a long established fact that a reader will be distracted... <h6 class="blockqoute-author mt-2" data-v-f17d7642>Mark Crawford</h6></blockquote><p class="mb-4" data-v-f17d7642>In a free hour when our power of choice is untrammelled...</p><div class="row" data-v-f17d7642><div class="col-md-6 mb-3" data-v-f17d7642><img src="https://live.themewild.com/minox/assets/img/blog/01.jpg" class="img-fluid" alt="" data-v-f17d7642></div><div class="col-md-6 mb-3" data-v-f17d7642><img src="https://live.themewild.com/minox/assets/img/blog/02.jpg" class="img-fluid" alt="" data-v-f17d7642></div></div><p class="mb-4" data-v-f17d7642>Power of choice is untrammelled and when nothing prevents...</p></div></div></div></div></div><div class="col-lg-4" data-v-f17d7642><aside class="sidebar" data-v-f17d7642><div class="widget category mb-4" data-v-f17d7642><h5 class="widget-title" data-v-f17d7642>Category</h5><div class="category-list list-group" data-v-f17d7642><a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-v-f17d7642><span data-v-f17d7642><i class="fa-solid fa-arrow-right me-2" data-v-f17d7642></i>Mine Engineering</span><span data-v-f17d7642>(10)</span></a><a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-v-f17d7642><span data-v-f17d7642><i class="fa-solid fa-arrow-right me-2" data-v-f17d7642></i>Coal Excavation</span><span data-v-f17d7642>(15)</span></a><a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-v-f17d7642><span data-v-f17d7642><i class="fa-solid fa-arrow-right me-2" data-v-f17d7642></i>Geological Consulting</span><span data-v-f17d7642>(20)</span></a><a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-v-f17d7642><span data-v-f17d7642><i class="fa-solid fa-arrow-right me-2" data-v-f17d7642></i>Mobile Crane Services</span><span data-v-f17d7642>(30)</span></a><a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-v-f17d7642><span data-v-f17d7642><i class="fa-solid fa-arrow-right me-2" data-v-f17d7642></i>Stone Crushers</span><span data-v-f17d7642>(25)</span></a></div></div><div class="widget recent-post mb-4" data-v-f17d7642><h5 class="widget-title" data-v-f17d7642>Recent Post</h5><div class="d-flex mb-3" data-v-f17d7642><img src="https://live.themewild.com/minox/assets/img/blog/bs-1.jpg" class="img-fluid me-3" width="80" alt="thumb" data-v-f17d7642><div class="recent-post-bio" data-v-f17d7642><h6 data-v-f17d7642><a href="#" data-v-f17d7642>There are many variations of passages available</a></h6><span data-v-f17d7642><i class="fa-solid fa-clock" data-v-f17d7642></i> May 19, 2024</span></div></div><div class="d-flex mb-3" data-v-f17d7642><img src="https://live.themewild.com/minox/assets/img/blog/bs-2.jpg" class="img-fluid me-3" width="80" alt="thumb" data-v-f17d7642><div class="recent-post-bio" data-v-f17d7642><h6 data-v-f17d7642><a href="#" data-v-f17d7642>There are many variations of passages available</a></h6><span data-v-f17d7642><i class="fa-solid fa-clock" data-v-f17d7642></i> May 19, 2024</span></div></div><div class="d-flex" data-v-f17d7642><img src="https://live.themewild.com/minox/assets/img/blog/bs-3.jpg" class="img-fluid me-3" width="80" alt="thumb" data-v-f17d7642><div class="recent-post-bio" data-v-f17d7642><h6 data-v-f17d7642><a href="#" data-v-f17d7642>There are many variations of passages available</a></h6><span data-v-f17d7642><i class="fa-solid fa-clock" data-v-f17d7642></i> May 19, 2024</span></div></div></div><div class="blog-author d-flex gap-3 align-items-start" data-v-f17d7642><div class="blog-author-img" data-v-f17d7642><img src="https://live.themewild.com/minox/assets/img/blog/author.jpg" class="img-fluid rounded-circle" alt="" data-v-f17d7642></div><div class="author-info" data-v-f17d7642><h6 data-v-f17d7642>Author</h6><h3 class="author-name" data-v-f17d7642>Agnes F. Natale</h3><p data-v-f17d7642>It is a long established fact that a reader will be distracted...</p><div class="author-social d-flex gap-2" data-v-f17d7642><a href="#" data-v-f17d7642><i class="fa-brands fa-facebook" data-v-f17d7642></i></a><a href="#" data-v-f17d7642><i class="fa-brands fa-twitter" data-v-f17d7642></i></a><a href="#" data-v-f17d7642><i class="fa-brands fa-instagram" data-v-f17d7642></i></a><a href="#" data-v-f17d7642><i class="fa-brands fa-whatsapp" data-v-f17d7642></i></a><a href="#" data-v-f17d7642><i class="fa-brands fa-youtube" data-v-f17d7642></i></a></div></div></div></aside></div></div></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/latestNews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const latestNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f17d7642"]]);
export {
  latestNews as default
};
//# sourceMappingURL=latestNews.vue.mjs.map
