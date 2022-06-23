import smartgoResponse from '@/utils/smartgoResponse';
import dialogUtils from '@/utils/dialogUtils';

const methods = {
    request(_vue, fucName, params, callback) {
        _vue[fucName](params)
            .then(response => {
                smartgoResponse.defaultResponseFormat(response, callback);
            })
            .catch(error => {
                dialogUtils.exceptionDialog(error);
            });
    },
};

export default {
    install(Vue) {
        Vue.prototype.$axiosCommunicator = methods;
    },
};
