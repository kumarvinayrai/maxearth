import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "getTouchCard" }, _attrs))} data-v-df3daca1><div class="contact-content" data-v-df3daca1><div class="row" data-v-df3daca1><div class="col-md-3" data-v-df3daca1><div class="contact-info" data-v-df3daca1><div class="contact-info-icon" data-v-df3daca1><i class="fa-solid fa-location-dot" data-v-df3daca1></i></div><div class="contact-info-content" data-v-df3daca1><h5 data-v-df3daca1>Office Address</h5><p data-v-df3daca1>103/104 Wellington Business Park Marol, Andheri East, Mumbai-400059</p></div></div></div><div class="col-md-3" data-v-df3daca1><div class="contact-info" data-v-df3daca1><div class="contact-info-icon" data-v-df3daca1><i class="fa-solid fa-phone-volume" data-v-df3daca1></i></div><div class="contact-info-content" data-v-df3daca1><h5 data-v-df3daca1>Call Us</h5><p data-v-df3daca1> +91 9664233822</p></div></div></div><div class="col-md-3" data-v-df3daca1><div class="contact-info" data-v-df3daca1><div class="contact-info-icon" data-v-df3daca1><i class="fa-solid fa-envelope" data-v-df3daca1></i></div><div class="contact-info-content" data-v-df3daca1><h5 data-v-df3daca1>Email Us</h5><p data-v-df3daca1>support@maxearth.in </p></div></div></div><div class="col-md-3" data-v-df3daca1><div class="contact-info" data-v-df3daca1><div class="contact-info-icon" data-v-df3daca1><i class="fa-solid fa-business-time" data-v-df3daca1></i></div><div class="contact-info-content" data-v-df3daca1><h5 data-v-df3daca1>Open Time</h5><p data-v-df3daca1>Mon - Sat (10.00AM - 05.30PM)</p></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contactUs/getTouchCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const getTouchCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-df3daca1"]]);
export {
  getTouchCard as default
};
//# sourceMappingURL=getTouchCard.vue.mjs.map
