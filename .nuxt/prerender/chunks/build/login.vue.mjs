import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain } from 'file://D:/Project_1205/maxearth/node_modules/vue/server-renderer/index.mjs';
import { mergeProps, useSSRContext, ref } from 'file://D:/Project_1205/maxearth/node_modules/vue/index.mjs';
import { useRouter } from 'file://D:/Project_1205/maxearth/node_modules/vue-router/dist/vue-router.node.mjs';
import { H as HeaderTop, F as Footer } from './Footer.vue.mjs';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/ufo/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/hookable/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/unctx/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/h3/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/radix3/dist/index.mjs';
import 'file://D:/Project_1205/maxearth/node_modules/defu/dist/defu.mjs';

const _sfc_main$2 = {
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    type: { type: String, required: true },
    message: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["alert", `alert-${__props.type}`, "alert-dismissible", "fade", "show"],
        role: "alert"
      }, _attrs))}>${ssrInterpolate(__props.message)} <button type="button" class="btn-close" aria-label="Close"></button></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popupAlert/Alert.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "FormInput",
  __ssrInlineRender: true,
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    error: String,
    modelValue: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-group mb-3" }, _attrs))}><label${ssrRenderAttr("for", __props.id)} class="form-label">${ssrInterpolate(__props.label)}</label><input${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", __props.placeholder)} class="form-control">`);
      if (__props.error) {
        _push(`<div class="text-danger small">${ssrInterpolate(__props.error)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/latestNews/FormInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const logoSrc = ref("/img/logo/logo.png");
    const email = ref("");
    const password = ref("");
    const rememberMe = ref(false);
    const errors = ref({});
    const isLoading = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(HeaderTop, null, null, _parent));
      _push(`<section class="login-area py-5" data-v-184b2ce2><div class="container" data-v-184b2ce2><div class="row justify-content-center" data-v-184b2ce2><div class="col-md-6 col-lg-5" data-v-184b2ce2><div class="login-form p-4 shadow rounded bg-white" data-v-184b2ce2><div class="login-header text-center mb-4" data-v-184b2ce2><img${ssrRenderAttr("src", logoSrc.value)} alt="Logo" class="img-fluid mb-3" style="${ssrRenderStyle({ "max-height": "60px" })}" data-v-184b2ce2><p class="mb-0" data-v-184b2ce2>Login with your Minox account</p></div>`);
      if (successMessage.value) {
        _push(ssrRenderComponent(_sfc_main$2, {
          type: "success",
          message: successMessage.value,
          onClose: ($event) => successMessage.value = ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(ssrRenderComponent(_sfc_main$2, {
          type: "warning",
          message: errorMessage.value,
          onClose: ($event) => errorMessage.value = ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<form data-v-184b2ce2>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        id: "email",
        label: "Email Address",
        type: "email",
        modelValue: email.value,
        "onUpdate:modelValue": ($event) => email.value = $event,
        error: errors.value.email,
        placeholder: "Your Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        id: "password",
        label: "Password",
        type: "password",
        modelValue: password.value,
        "onUpdate:modelValue": ($event) => password.value = $event,
        error: errors.value.password,
        placeholder: "Your Password"
      }, null, _parent));
      _push(`<div class="d-flex justify-content-between mb-3" data-v-184b2ce2><div class="form-check" data-v-184b2ce2><input class="form-check-input" type="checkbox" id="remember"${ssrIncludeBooleanAttr(Array.isArray(rememberMe.value) ? ssrLooseContain(rememberMe.value, null) : rememberMe.value) ? " checked" : ""} data-v-184b2ce2><label class="form-check-label" for="remember" data-v-184b2ce2>Remember Me</label></div></div><div class="d-grid" data-v-184b2ce2><button type="submit" class="theme-btn"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-184b2ce2><i class="${ssrRenderClass(isLoading.value ? "fa-solid fa-spinner fa-spin" : "fa-solid fa-right-to-bracket")}" data-v-184b2ce2></i> Login </button></div></form></div></div></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-184b2ce2"]]);

export { login as default };
//# sourceMappingURL=login.vue.mjs.map
