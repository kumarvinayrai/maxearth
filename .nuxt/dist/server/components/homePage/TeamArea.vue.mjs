import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
const _sfc_main = {
  __name: "TeamArea",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionData = ref({});
    const teamMembers = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-area 65rem bg pt-120 pb-50" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6 mx-auto"><div class="site-heading text-center"><span class="site-title-tagline">${ssrInterpolate(sectionData.value.tagline)}</span><h2 class="site-title">${ssrInterpolate(sectionData.value.titleBefore)} <span>${ssrInterpolate(sectionData.value.titleHighlight)}</span></h2></div></div></div><div class="row mt-5"><!--[-->`);
      ssrRenderList(teamMembers.value, (member, index) => {
        _push(`<div class="col-md-6 col-lg-3"><div class="team-item wow fadeInUp"${ssrRenderAttr("data-wow-delay", member.delay)}><div class="team-img"><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)}></div><div class="team-social"><!--[-->`);
        ssrRenderList(member.socials, (social, i) => {
          _push(`<a${ssrRenderAttr("href", `https://${social.platform}.com`)} target="_blank" rel="noopener noreferrer"><i class="${ssrRenderClass(social.iconClass)}"></i></a>`);
        });
        _push(`<!--]--></div><div class="team-content"><div class="team-bio"><h5><a href="#">${ssrInterpolate(member.name)}</a></h5><span>${ssrInterpolate(member.position)}</span></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/TeamArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=TeamArea.vue.mjs.map
