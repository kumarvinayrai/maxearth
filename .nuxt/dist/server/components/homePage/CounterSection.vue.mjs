import { reactive, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "CounterSection",
  __ssrInlineRender: true,
  setup(__props) {
    const counters = reactive([]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "counter-area py-120" }, _attrs))} data-v-fb13a58b><div class="container" data-v-fb13a58b><div class="row g-4" data-v-fb13a58b><!--[-->`);
      ssrRenderList(counters, (counter, index) => {
        _push(`<div class="col-6 col-lg-3" data-v-fb13a58b><div class="counter-box text-center p-3 h-100" data-v-fb13a58b><div class="icon" data-v-fb13a58b><i class="${ssrRenderClass(counter.iconClass)}" data-v-fb13a58b></i></div><div data-v-fb13a58b><span class="counter" data-v-fb13a58b>${ssrInterpolate(counter.current)}</span><h6 class="title" data-v-fb13a58b>${ssrInterpolate(counter.title)}</h6></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homePage/CounterSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CounterSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fb13a58b"]]);
export {
  CounterSection as default
};
//# sourceMappingURL=CounterSection.vue.mjs.map
