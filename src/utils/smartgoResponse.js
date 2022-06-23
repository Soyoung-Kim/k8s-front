import dialogUtils from '@/utils/dialogUtils';
import dataUtils from '@/utils/data';

export default {
    // 기본적인 예외처리가 되어있는 responseFormat
    defaultResponseFormat(response, func) {
        console.log('response ==== ', response);
        // 요청은 성공하였으나 response가 null 인 경우
        if (response == null) {
            dialogUtils.responseErrorDialog();
        } else if (response.status === 401) {
            // TODO
            console.log('401 Error');
            if (func) func(response);
        } else if (response.status === 403) {
            // TODO
            console.log('403 Error');
            if (func) func(response);
        } else if (response.status !== 200) {
            // 성공은 하였으나 status가 200이 아닌경우
            let msg = null;
            if (!dataUtils.isEmpty(response) && !dataUtils.isEmpty(response.data)) {
                msg = response.data.reason;
            }
            dialogUtils.responseErrorDialog(msg);
        } else {
            // progress bar 는 각 호출부의 기능이 완전히 끝나는 부분의 callback에서 꺼줌.
            // eventBus.$emit('off:progress');
            if (func) func(response);
        }
    },
};
