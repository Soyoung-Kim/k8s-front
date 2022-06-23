import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidate from 'vee-validate';
import vuetify from './plugins/vuetify';
// import VueGtag from 'vue-gtag';
import nativeCommunicator from './utils/nativeCommunicator';
import './styles/index.scss';

import VueI18n from 'vue-i18n';
import { strings } from './strings';
import { axiosConfig } from './api/index';
import axiosCommunicator from './utils/axiosCommunicator';
import eventBus from '@/utils/eventBus';
import DataUtils from '@/utils/data';

Vue.use(VueI18n);
Vue.use(VeeValidate);

const i18n = new VueI18n({
    locale: 'ko',
    messages: strings,
});

Vue.use(
    // VueGtag,
    {
        config: {
            id: 'G-L2H0DZ0KLG',
        },
        pageTrackerTemplate(to) {
            console.log('to :' + to);
            return {
                page_title: to.name,
                page_path: to.path,
            };
        },
    },
    router,
);
Vue.use(nativeCommunicator);
Vue.use(axiosCommunicator);

Vue.config.productionTip = false;
Vue.use(vuetify, { dynamic: true });

let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vw', `${vw}px`);

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

if (process.env.VUE_APP_DEPLOY === 'prod') {
    console.log = () => {};
}
/**
 * Gets the value at `path` of `object`.
 * lodash _.get
 * @param {Object} object
 * @param {string|Array} path
 * @returns {*} value if exists else undefined
 */
const get = (object, path) => {
    if (typeof path === 'string') path = path.split('.').filter(key => key.length);
    return path.reduce((dive, key) => dive && dive[key], object);
};
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    i18n,
}).$mount('#app');
