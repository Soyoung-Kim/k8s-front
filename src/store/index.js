import Vue from 'vue';
import Vuex from 'vuex';
import echo from './modules/echo/echo';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        echo,
    },

    strict: false,
});
