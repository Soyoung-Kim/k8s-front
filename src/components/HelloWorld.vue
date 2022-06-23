<template>
    <div>
        <h1>{{ testString }}</h1>

        <div style="padding: 10px; margin-top: 20px">
            <span v-html="echoTitle"></span>
            <table style="margin-top: 20px">
                <tr>
                    <td style="width: 150px; align: left">ip :</td>
                    <td>{{ echoString.ip }}</td>
                </tr>
                <tr>
                    <td style="width: 150px; align: left">profile :</td>
                    <td>{{ echoString.profile }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { echoMapActions } from '@/store/modules/echo/echo';
export default {
    name: 'HelloWorld',
    data() {
        return {
            echoTitle: '<b style="color: black;">echoString</b>',
            isSameIp: true,
            echoString: {},
            testString: null,
        };
    },
    mounted() {
        setInterval(() => {
            console.log('set');
            this.getEcho();
        }, 10000);
    },
    beforeDestroy() {
        console.log('clear');
        clearInterval();
    },
    created() {
        this.getEcho();
        this.getTestString();
    },
    methods: {
        ...echoMapActions(['fetchEcho', 'fetchTestString']),

        getEcho() {
            let _vue = this;

            _vue.$axiosCommunicator.request(_vue, 'fetchEcho', {}, _vue.fetchEchoCallBack);
        },
        fetchEchoCallBack(response) {
            // if (this.echoString != {}) {
            //     this.echoTitle = this.echoString.ip != response.data.ip ? '<b style="color: red;">echoString</b>' : '<b style="color: black;">echoString</b>';
            // }
            if (this.isSameIp) {
                this.echoTitle = '<b style="color: red;">echoString</b>';
            } else {
                this.echoTitle = '<b style="color: black;">echoString</b>';
            }
            this.isSameIp = !this.isSameIp;
            this.echoString = response.data;
        },
        getTestString() {
            let _vue = this;

            _vue.$axiosCommunicator.request(_vue, 'fetchTestString', {}, _vue.fetchTestStringCallBack);
        },
        fetchTestStringCallBack(response) {
            this.testString = response.data;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
