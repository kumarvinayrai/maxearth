import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import HeaderTop from "../components/pageHeader/HeaderTop.vue.mjs";
import Footer from "../components/pageFooter/Footer.vue.mjs";
import _sfc_main$1 from "../components/popupAlert/Alert.vue.mjs";
import _sfc_main$2 from "../components/latestNews/FormInput.vue.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
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
        _push(ssrRenderComponent(_sfc_main$1, {
          type: "success",
          message: successMessage.value,
          onClose: ($event) => successMessage.value = ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(ssrRenderComponent(_sfc_main$1, {
          type: "warning",
          message: errorMessage.value,
          onClose: ($event) => errorMessage.value = ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<form data-v-184b2ce2>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "email",
        label: "Email Address",
        type: "email",
        modelValue: email.value,
        "onUpdate:modelValue": ($event) => email.value = $event,
        error: errors.value.email,
        placeholder: "Your Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
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
export {
  login as default
};
//# sourceMappingURL=login.vue.mjs.map
