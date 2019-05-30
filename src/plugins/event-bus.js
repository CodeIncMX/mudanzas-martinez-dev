const eventBus = {};

eventBus.install = function install(pVue) {
  const Vue = pVue;
  Vue.prototype.$bus = new Vue();
};

export default eventBus;
