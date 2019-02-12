import MoneyFormat from './components/MoneyFormat.vue';

MoneyFormat.install = (Vue) => {
  Vue.component(MoneyFormat.name, MoneyFormat);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MoneyFormat);
}

export default MoneyFormat;