import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "latestNewsupdateFrm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-form p-5 bg-white" }, _attrs))} data-v-a1185b85><div class="quote-content p-0" data-v-a1185b85><div class="quote-header mb-4" data-v-a1185b85><h6 class="site-title-tagline" data-v-a1185b85>Admin Panel</h6><h2 class="site-title" data-v-a1185b85>Update Latest News</h2></div><form data-v-a1185b85><div class="row g-3" data-v-a1185b85><div class="col-md-12" data-v-a1185b85><input type="text" class="form-control" placeholder="News Title" required data-v-a1185b85></div><div class="col-md-6" data-v-a1185b85><input type="date" class="form-control" placeholder="Date" required data-v-a1185b85></div><div class="col-md-6" data-v-a1185b85><input type="text" class="form-control" placeholder="Author or Source" data-v-a1185b85></div><div class="col-md-12" data-v-a1185b85><input type="file" class="form-control" accept=".jpg,.jpeg,.png,.webp" data-v-a1185b85></div></div><div class="mt-3" data-v-a1185b85><textarea class="form-control" placeholder="News Content or Summary" rows="5" required data-v-a1185b85></textarea></div><button type="submit" class="theme-btn mt-3" data-v-a1185b85> Publish News <i class="fas fa-newspaper" data-v-a1185b85></i></button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/latestNewsupdateFrm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const latestNewsupdateFrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1185b85"]]);
export {
  latestNewsupdateFrm as default
};
//# sourceMappingURL=latestNewsupdateFrm.vue.mjs.map
