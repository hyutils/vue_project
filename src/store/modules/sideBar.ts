import { defineStore } from 'pinia';

const sideBarStore = defineStore('sideBar', {
  state: () => {
    return {
      isCollpase: false,
    };
  },
  actions: {
    onChangeCollpase() {
      this.isCollpase = !this.isCollpase;
    },
  },
  getters: {},
});
