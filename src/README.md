# 원주성지병원 소스코드 작성 규칙 등.
 코드 작성 규칙 또는, 참고할 사항이 있으시면 이곳에 작성 부탁 드립니다.

## 컴포넌트 구조

  1. https://vuejs.org/v2/style-guide/index.html#Component-files-strongly-recommended 에 명시된 가이드 스타일을 참고하여 
이 프로젝트 내 컴포넌트의 작성 구조를 정의하였다.

      ``` javaScript
      <template>
        <div>
          <!-- ... -->
        </div>
      </template>

      <script>
        export default {
          name: 'ComponentName',
          
          // Template Dependencies (assets used in the template)
          components: {},
          directives: {},
          filters: {},

          // Composition (merges properties into the options)
          extends: {},
          mixins: {},

          // Interface (the interface to the component)
          props: {
            bar: {}, // 알파벳순으로 정렬합니다
            foo: {},
            fooBar: {},
          },

          // Local State (local reactive properties)
          data() {},
          computed: {},
          
          // component method group /callbacks triggered by reactive events
          watch: {},
        
          // life-cycle hook
          beforeCreate() {},
          create() {},
          beforeMount() {},
          mounted() {},
          beforeUpdate() {},
          updated() {},
          beforeDestroy() {},
          destroyed() {},
          // Non-Reactive Properties (instance properties independent of the reactivity system)
          methods: {},
      };
      </script>

      <style scoped>
        
      </style>
      ```


  2. 폴더내 파일 경로를 입력할 경우, `../../ *` 의 상대경로 루트 대신 `@/*`(=src/) 의 절대 루트 를 사용하여 작성한다.
---

## api 호출.

 * axios 통신을 사용한다.

 1. 기본 사용 방식은
      ``` javaScript
            async function getUser() {
                try {
                  const response = await axios.get('/user?ID=12345')
                  console.log(response)
                } catch (error) {
                  console.error(error)
                }
              }
      ```

 * axiosCommunicator 를 활용
  
  1. 연관 코드 경로.
      ```
      smartgo-sjmedi-web/src/utils/
      ├── smartgoResponse.js
      ├── dialogUtils.js
      └── axiosCommunicator.js

        // axiosCommunicator를 통해 서비스를 호출하며, 
        // response 응답에 대한 처리가 필요한 경우, smartgoResponse에 작성하고,
        // 사용자에게 보여질 메시지 값의 정의는 dialogUtils 에 한다.
      ```
      
      

  2. 컴포넌트 호출 예시.
      ``` javaScript
      <script>
      // ...
      
      // ...
      </script>
      // ...

      methods: {
      // ...
        getSomeDatas() {
                eventBus.$emit('on:progress');
                let _vue = this;
                const params={count:10};
                _vue.$axiosCommunicator.request(_vue, 'fetchSomeDatas', params, _vue.getSomeDatasCallback);

                },
        getSomeDatasCB(response){
                // 서버 응답 처리 코드 작성.
                }

      // ...

      ```

 
 ---

## 기타 ...
 1. if() 문 작성시.
   javaScript 에서는 `undefined, null, 0, -0, NaN, ''`을 false값으로 판단한다.
      ``` javaScript
      let test = null;
      if(test){
        console.log('a');
      } else {
        console.log('b');
      }
        //b를 반환.
      ```