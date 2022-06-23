import api from './index';

export default {
    getEcho: config => api.get('/nds/echo', config),
    getTestString: config => api.get('/nds/echo/test', config),
};
