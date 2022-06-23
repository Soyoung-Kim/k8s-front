import msgUtil from '@/utils/msgUtil';
import eventBus from '@/utils/eventBus';

export default {
    exceptionDialog(error) {
        console.log('Exception msg === ', error);
        eventBus.$emit('off:progress');
        let obj = {
            msg: msgUtil.message('E2'),
            type: 1,
            willGoMain: false,
        };
        eventBus.$emit('on:defaultDialog', obj);
    },
    responseErrorDialog(responseData) {
        console.log('err');
        eventBus.$emit('off:progress');
        let obj = {
            msg: responseData ? responseData : msgUtil.message('E1'),
            type: 1,
        };
        eventBus.$emit('on:defaultDialog', obj);
    },
};
