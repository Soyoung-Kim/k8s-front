import EchoAPI from '../../../api/api-echo';

export default {
    async fetchEcho({ commit }) {
        try {
            return await EchoAPI.getEcho();
        } catch (error) {
            return error.response;
        }
    },
    async fetchTestString({ commit }) {
        try {
            return await EchoAPI.getTestString();
        } catch (error) {
            return error.response;
        }
    },
};
