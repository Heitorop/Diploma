/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import { i18n } from '@/plugins/i18n'

export function registerPlugins (app) {
  app.config.globalProperties.$i18n = i18n;

  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(i18n)
}
