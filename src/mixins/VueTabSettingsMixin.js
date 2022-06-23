import eventBus from '@/utils/eventBus';

export default {
    // 재사용할 컴포넌트 옵션
    created() {
        eventBus.$emit('on:tabProgress');
    },
};
