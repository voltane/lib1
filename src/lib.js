import * as components from './components/index';
import './styles/lib.scss';

const Lib = {
  install: (Vue, options) => {
    if (Lib.install.installed) return;
    Lib.install.installed = true;
    Vue.prototype.$lib = new Vue({
      primary: options.primary || '#ccc'
    });
    Object.keys(components).forEach((componentName) => {
      Vue.component(componentName, components[componentName]);
    });
  }
};
export default Lib;
