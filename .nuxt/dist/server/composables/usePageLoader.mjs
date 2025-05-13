import { ref } from "vue";
function usePageLoader(delay = 300) {
  const loading = ref(true);
  return { loading };
}
export {
  usePageLoader
};
//# sourceMappingURL=usePageLoader.mjs.map
