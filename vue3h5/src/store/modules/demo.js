import { defineStore } from "pinia";

const useDemoStore = defineStore("demo", {
  state: () => ({
    count: 1,
  }),
  actions: {
    setCount(count) {
      this.count = count;
    },
  },
});

export default useDemoStore;
