import * as components from './components/index';
import './styles/lib.scss';

const Lib = {
  install: (Vue, options) => {
    if (install.installed) return;
    install.installed = true;
    Vue.prototype.$lib = new Vue({
      primary: '#ccc'
    });
    Object.keys(components).forEach((componentName) => {
      Vue.component(componentName, components[componentName]);
    });
  }
};
export default Lib;
