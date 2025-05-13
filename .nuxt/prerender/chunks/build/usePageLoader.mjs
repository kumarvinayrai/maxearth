import { mergeProps, useSSRContext, ref, withCtx, createVNode, createTextVNode, toDisplayString } from 'file://D:/Project_1205/maxearth/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'file://D:/Project_1205/maxearth/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useRoute, n as navigateTo } from './server.mjs';
import { H as HeaderTop } from './Footer.vue.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';

const _sfc_main$2 = {
  __name: "PageLoader",
  __ssrInlineRender: true,
  props: { show: Boolean },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-loader d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-white z-5" }, _attrs))} data-v-832c491b><div class="spinner-border text-warning" role="status" data-v-832c491b><span class="visually-hidden" data-v-832c491b>Loading...</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pageLoader/PageLoader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PageLoader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-832c491b"]]);

const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pageHeader/MainNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MainNav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fda55c1b"]]);

const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}>`);
      _push(ssrRenderComponent(HeaderTop, null, null, _parent));
      _push(ssrRenderComponent(MainNav, null, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pageHeader/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

function usePageLoader(delay = 300) {
  const loading = ref(true);
  return { loading };
}

export { PageLoader as P, _sfc_main as _, usePageLoader as u };
//# sourceMappingURL=usePageLoader.mjs.map
