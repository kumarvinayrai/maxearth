import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { useRoute } from "vue-router";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "SideNav",
  __ssrInlineRender: true,
  props: {
    title: { type: String, default: "Navigation" },
    sectionKey: { type: String, required: true },
    // e.g., "aboutUs"
    baseRoute: { type: String, required: true }
    // e.g., "/aboutUs"
  },
  setup(__props) {
    const route = useRoute();
    const links = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "sidebar h-100 d-flex flex-column" }, _attrs))} data-v-e08d2f43><div class="widget category mb-4" data-v-e08d2f43><h5 class="widget-title" data-v-e08d2f43><a href="#" data-v-e08d2f43>${ssrInterpolate(__props.title)}</a></h5>`);
      if (links.value.length) {
        _push(`<div class="category-list list-group" data-v-e08d2f43><!--[-->`);
        ssrRenderList(links.value, (link, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: index,
            to: `${__props.baseRoute}/${link.path}`,
            class: ["list-group-item list-group-item-action d-flex justify-content-between align-items-center", { active: unref(route).params.section === link.path }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span data-v-e08d2f43${_scopeId}><i class="fa-solid fa-arrow-right me-2" data-v-e08d2f43${_scopeId}></i>${ssrInterpolate(link.label)}</span>`);
              } else {
                return [
                  createVNode("span", null, [
                    createVNode("i", { class: "fa-solid fa-arrow-right me-2" }),
                    createTextVNode(toDisplayString(link.label), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></aside>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SideNav/SideNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SideNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e08d2f43"]]);
export {
  SideNav as default
};
//# sourceMappingURL=SideNav.vue.mjs.map
