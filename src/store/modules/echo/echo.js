import { createNamespacedHelpers } from 'vuex';

import mutations from './mutations';
import actions from './actions';

const { mapGetters: echoMapGetters, mapActions: echoMapActions } = createNamespacedHelpers('echo');

export { echoMapGetters, echoMapActions };

export default {
    namespaced: true,

    state: {
        token: null,
    },
    getters: {},

    mutations,

    actions,
};
