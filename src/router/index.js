import Vue from 'vue';

import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

// import checkup from './router-checkup';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'helloworld',
            component: HelloWorld,
            meta: {
                title: '메인',
                isPublic: true,
            },
        },
    ],
});
