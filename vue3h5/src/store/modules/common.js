import { defineStore } from "pinia";

const useCommonStore = defineStore("common", {
  state: () => ({
    visitUrl: "",
  }),
  actions: {
    saveVisitUrl(url) {
      this.visitUrl = url;
    },
  },
});

export default useCommonStore;
