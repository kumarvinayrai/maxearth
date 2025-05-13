import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/unctx/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/Project_1205/maxearth/node_modules/radix3/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs";
import "D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "directorDesk",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("");
    const description = ref("");
    const boardMembers = ref([]);
    const keyMembers = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-area p-5" }, _attrs))} data-v-7fc01a73><div class="container" data-v-7fc01a73><div class="row align-items-center" data-v-7fc01a73><div class="col-lg-12" data-v-7fc01a73><div class="director-desk" data-v-7fc01a73><div class="site-heading mb-3" data-v-7fc01a73><span class="site-title-tagline" data-v-7fc01a73>Director’s Desk</span><h2 class="site-title" data-v-7fc01a73>${ssrInterpolate(title.value)}</h2></div><p class="about-text" data-v-7fc01a73>${ssrInterpolate(description.value)}</p></div></div></div><section data-v-7fc01a73><div class="row mt-5" data-v-7fc01a73><div class="col-lg-6" data-v-7fc01a73><div class="site-heading" data-v-7fc01a73><h2 data-v-7fc01a73>Board Members</h2></div></div></div><div class="row mt-5" data-v-7fc01a73><!--[-->`);
      ssrRenderList(boardMembers.value, (member, index) => {
        _push(`<div class="col-md-6 col-lg-4" data-v-7fc01a73><div class="team-item wow fadeInUp"${ssrRenderAttr("data-wow-delay", (index + 1) * 0.25 + "s")} style="${ssrRenderStyle({ visibility: "visible", animationDelay: (index + 1) * 0.25 + "s", animationName: "fadeInUp" })}" data-v-7fc01a73><div class="team-img" data-v-7fc01a73><img${ssrRenderAttr("src", member.image)} alt="thumb" data-v-7fc01a73></div><div class="team-content" data-v-7fc01a73><div class="team-bio" data-v-7fc01a73><h5 data-v-7fc01a73><a href="#" data-v-7fc01a73>${ssrInterpolate(member.name)}</a></h5><span data-v-7fc01a73>${ssrInterpolate(member.role)}</span><ul class="team-social mt-2" data-v-7fc01a73>`);
        if (member.facebook) {
          _push(`<li data-v-7fc01a73><a${ssrRenderAttr("href", member.facebook)} target="_blank" data-v-7fc01a73><i class="fab fa-facebook-f" data-v-7fc01a73></i></a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (member.linkedin) {
          _push(`<li data-v-7fc01a73><a${ssrRenderAttr("href", member.linkedin)} target="_blank" data-v-7fc01a73><i class="fab fa-linkedin-in" data-v-7fc01a73></i></a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (member.twitter) {
          _push(`<li data-v-7fc01a73><a${ssrRenderAttr("href", member.twitter)} target="_blank" data-v-7fc01a73><i class="fab fa-twitter" data-v-7fc01a73></i></a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section data-v-7fc01a73><div class="row mt-5" data-v-7fc01a73><div class="col-lg-6" data-v-7fc01a73><div class="site-heading" data-v-7fc01a73><h2 data-v-7fc01a73>Our Key Members</h2></div></div></div><div class="row mt-5" data-v-7fc01a73><!--[-->`);
      ssrRenderList(keyMembers.value, (member, index) => {
        _push(`<div class="col-md-6 col-lg-4" data-v-7fc01a73><div class="team-item wow fadeInUp"${ssrRenderAttr("data-wow-delay", (index + 1) * 0.25 + "s")} style="${ssrRenderStyle({ visibility: "visible", animationDelay: (index + 1) * 0.25 + "s", animationName: "fadeInUp" })}" data-v-7fc01a73><div class="team-img" data-v-7fc01a73><img${ssrRenderAttr("src", member.image)} alt="thumb" data-v-7fc01a73></div><div class="team-content" data-v-7fc01a73><div class="team-bio" data-v-7fc01a73><h5 data-v-7fc01a73><a href="#" data-v-7fc01a73>${ssrInterpolate(member.name)}</a></h5><span data-v-7fc01a73>${ssrInterpolate(member.role)}</span><ul class="team-social mt-2" data-v-7fc01a73>`);
        if (member.facebook) {
          _push(`<li data-v-7fc01a73><a${ssrRenderAttr("href", member.facebook)} target="_blank" data-v-7fc01a73><i class="fab fa-facebook-f" data-v-7fc01a73></i></a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (member.linkedin) {
          _push(`<li data-v-7fc01a73><a${ssrRenderAttr("href", member.linkedin)} target="_blank" data-v-7fc01a73><i class="fab fa-linkedin-in" data-v-7fc01a73></i></a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (member.twitter) {
          _push(`<li data-v-7fc01a73><a${ssrRenderAttr("href", member.twitter)} target="_blank" data-v-7fc01a73><i class="fab fa-twitter" data-v-7fc01a73></i></a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div></div></div></div>`);
      });
      _push(`<!--]--></div></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/directorDesk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const directorDesk = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7fc01a73"]]);
export {
  directorDesk as default
};
//# sourceMappingURL=directorDesk-Bo3Mor9W.js.map
