import SvgIcon from './SvgIcon/SvgIcon.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
const allGlobalComponent: Record<any, any> = { SvgIcon };

export default {
  install(app: any) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key]);
    });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
