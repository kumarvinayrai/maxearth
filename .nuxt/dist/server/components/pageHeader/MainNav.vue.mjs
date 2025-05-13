import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs";
import { useRoute, navigateTo } from "../../node_modules/nuxt/dist/app/composables/router.mjs";
import "D:/Project_1205/maxearth/node_modules/klona/dist/index.mjs";
import "D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "MainNav",
  __ssrInlineRender: true,
  setup(__props) {
    const navbar = ref({
      logoSrc: "",
      logoAlt: "",
      offcanvasTitle: "",
      navLinks: []
    });
    const isScrolled = ref(false);
    const route = useRoute();
    function handleNav(link) {
      var _a;
      if (link.startsWith("#")) {
        const target = (void 0).querySelector(link);
        if (target) {
          const offset = -70;
          const top = target.getBoundingClientRect().top + (void 0).scrollY + offset;
          (void 0).scrollTo({ top, behavior: "smooth" });
        }
      } else {
        navigateTo(link);
      }
      const offcanvas = (void 0).getElementById("offcanvasNavbar");
      if (offcanvas == null ? void 0 : offcanvas.classList.contains("show")) {
        (_a = bootstrap.Offcanvas.getInstance(offcanvas)) == null ? void 0 : _a.hide();
      }
    }
    function isActive(link) {
      return route.path === link || link.startsWith("#") && route.hash === link;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["navbar navbar-expand-lg navbar-light bg-light", { "fixed-top": isScrolled.value, "navbar-shadow": isScrolled.value }]
      }, _attrs))} data-v-fda55c1b><div class="container" data-v-fda55c1b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "navbar-brand",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", navbar.value.logoSrc)}${ssrRenderAttr("alt", navbar.value.logoAlt)} height="40" data-v-fda55c1b${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: navbar.value.logoSrc,
                alt: navbar.value.logoAlt,
                height: "40"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" data-v-fda55c1b><span class="navbar-toggler-icon" data-v-fda55c1b></span></button><div class="offcanvas offcanvas-end custom-offcanvas d-lg-none" id="offcanvasNavbar" data-v-fda55c1b><div class="offcanvas-header" data-v-fda55c1b><h5 class="offcanvas-title" data-v-fda55c1b>${ssrInterpolate(navbar.value.offcanvasTitle)}</h5><button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-v-fda55c1b></button></div><div class="offcanvas-body" data-v-fda55c1b><ul class="navbar-nav justify-content-end flex-grow-1 pe-3" data-v-fda55c1b><!--[-->`);
      ssrRenderList(navbar.value.navLinks, (item, index) => {
        _push(`<li class="nav-item" data-v-fda55c1b>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: ["nav-link", { active: isActive(item.link) }],
          to: item.link,
          onClick: ($event) => handleNav(item.link)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="collapse navbar-collapse d-none d-lg-flex justify-content-end" id="navbarNav" data-v-fda55c1b><ul class="navbar-nav" data-v-fda55c1b><!--[-->`);
      ssrRenderList(navbar.value.navLinks, (item, index) => {
        _push(`<li class="nav-item" data-v-fda55c1b>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: ["nav-link", { active: isActive(item.link) }],
          to: item.link,
          onClick: ($event) => handleNav(item.link)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pageHeader/MainNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MainNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fda55c1b"]]);
export {
  MainNav as default
};
//# sourceMappingURL=MainNav.vue.mjs.map
