import DataUtils from './data';

import { strings } from '@/strings';
import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'ko',
    messages: strings,
});

const methods = {
    // AppInfoBridge //
    // 앱 인포 확인
    sendAppInfo: () => {
        console.log('sendAppInfo');
        let params = {
            func: 'getAppInfo',
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['settingsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.AppInfoBridge.sendAppInfo();
        }
    },
    // 안드로이드 스플래시 스크린
    finishLoading: () => {
        console.log('finishLoading');
        if (DataUtils.isIOS()) {
            // 런치스크린 OFF
            // Webview didfinish LifeCycle로 대체
        } else {
            window.AppInfoBridge.finishLoading();
        }
    },
    // 백버튼 누를 시 나오는 팝업창으로 앱 종료(안드로이드 전용)
    appFinish: () => {
        console.log('appFinish');
        if (DataUtils.isIOS()) {
            // iOS 백버튼로직
        } else {
            window.AppInfoBridge.appFinish();
        }
    },
    // 카카오톡으로 이미지
    imageSendKakaoHandler: (imgBase64, patientNo) => {
        var pngImgData = imgBase64.toDataURL('image/png').split(',')[1];
        if (pngImgData !== '' && patientNo !== '') {
            let params = {
                imgData: pngImgData,
                cacheFileName: patientNo,
            };
            if (DataUtils.isIOS()) {
                window.webkit.messageHandlers['imageSendKakaoHandler'].postMessage(JSON.stringify(params));
            } else {
                window.AppInfoBridge.imageSendKakaoHandler(pngImgData, patientNo);
            }
        }
    },
    // AuthBridge //
    // 본인인증 페이지로 전환

    // DeviceBridge //
    // 화면 밝기 최대로 올리기
    setScreenBrightness: boolean => {
        let params = {
            func: 'setScreenBrightness',
            isBrightly: boolean, // true일때 최대밝기, false일때 설정된 화면 밝기
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['settingsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.DeviceBridge.setScreenBrightness(boolean);
        }
    },
    // 알람 세팅 열기
    setAlarmSetting: () => {
        console.log('setAlarmSetting');
        let params = {
            func: 'setAlarmSettings',
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['settingsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.DeviceBridge.setAlarmSetting();
        }
    },
    // 위치 권한 체크
    requestGPSPermission: () => {
        console.log('requestGPSPermission');
        let params = {
            action: 'getLocation',
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['getLocationCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.DeviceBridge.requestGPSPermission();
        }
    },
    // 진동 발생
    onVibe: () => {
        let params = {
            action: 'vibrate',
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['motionsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.DeviceBridge.onVibe();
        }
    },
    // LoginBridge //
    // 구글 로그인
    googleLogin: () => {
        console.log('googleLogin');
        let params = {
            action: 'login',
            type: 0, // 0: Google, 1: Kakao, 2: Naver, 3: Apple
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['snsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.LoginBridge.googleLogin();
        }
    },
    // 구글 로그아웃
    googleLogout: () => {
        console.log('googleLogout');
        let params = {
            action: 'logout',
            type: 0, // 0: Google, 1: Kakao, 2: Naver, 3: Apple
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['snsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.LoginBridge.googleLogout();
        }
    },
    // 구글 계정연동 삭제
    deleteGoogleAccount: () => {
        console.log('deleteGoogleAccount');
        let params = {
            action: 'withdraw',
            type: 0, // 0: Google, 1: Kakao, 2: Naver, 3: Apple
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['snsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.LoginBridge.deleteGoogleAccount();
        }
    },
    // 카카오 로그인
    kakaoLogin: () => {
        console.log('kakaoLogin');
        let params = {
            action: 'login',
            type: 1, // 0: Google, 1: Kakao, 2: Naver, 3: Apple
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['snsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.LoginBridge.kakaoLogin();
        }
    },
    // 카카오 로그아웃
    kakaoLogout: () => {
        console.log('kakaoLogout');
        let params = {
            action: 'logout',
            type: 1, // 0: Google, 1: Kakao, 2: Naver, 3: Apple
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['snsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.LoginBridge.kakaoLogout();
        }
    },
    // 카카오 계정연동 삭제
    deleteKakaoAccount: () => {
        console.log('deleteKakaoAccount');
        let params = {
            action: 'withdraw',
            type: 1, // 0: Google, 1: Kakao, 2: Naver, 3: Apple
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['snsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.LoginBridge.deleteKakaoAccount();
        }
    },
    // 네이버 로그인
    naverLogin: () => {
        console.log('naverLogin');
        let params = {
            action: 'login',
            type: 2, // 0: Google, 1: Kakao, 2: Naver, 3: Apple
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['snsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.LoginBridge.naverLogin();
        }
    },
    // 네이버 로그아웃
    naverLogout: () => {
        console.log('naverLogout');
        let params = {
            action: 'logout',
            type: 2, // 0: Google, 1: Kakao, 2: Naver, 3: Apple
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['snsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.LoginBridge.naverLogout();
        }
    },
    // 네이버 계정연동 삭제
    deleteNaverAccount: () => {
        console.log('deleteNaverAccount');
        let params = {
            action: 'withdraw',
            type: 2, // 0: Google, 1: Kakao, 2: Naver, 3: Apple
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['snsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.LoginBridge.deleteNaverAccount();
        }
    },
    // 애플 로그인
    appleLogin: () => {
        console.log('appleLogin');
        let params = {
            action: 'login',
            type: 3, // 0: Google, 1: Kakao, 2: Naver, 3: Apple
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['snsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.LoginBridge.appleLogin();
        }
    },
    // 애플 로그아웃
    appleLogout: () => {
        console.log('appleLogout');
        let params = {
            action: 'logout',
            type: 3, // 0: Google, 1: Kakao, 2: Naver, 3: Apple
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['snsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.LoginBridge.appleLogout();
        }
    },
    // 애플 계정연동 삭제
    deleteAppleAccount: () => {
        console.log('deleteAppleAccount');
        let params = {
            action: 'withdraw',
            type: 3, // 0: Google, 1: Kakao, 2: Naver, 3: Apple
        };
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['snsCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.LoginBridge.deleteAppleAccount();
        }
    },
    /* UbpayBridge */
    // Ubpay 결제 호출
    ubpay: string => {
        console.log('ubpay');
        if (DataUtils.isIOS()) {
            let params = {
                type: 0, // 0 : UbPay, 1 : KCP (예정)
                data: {
                    menu: 'PAYMENT',
                    tid: string, //결제할 ubpay id값, none일 경우 결제카드 등록으로 이동
                },
            };
            window.webkit.messageHandlers['paymentCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.UbpayBridge.ubpay(string);
        }
    },
    // Ubpay 자동가입 (안드로이드 전용)
    ubpayJoin: params => {
        console.log('ubpayJoin');
        if (DataUtils.isIOS()) {
        } else {
            // let params = {
            //     ci: response.data.userCI,
            //     jumin: birthDateStr,
            //     mdn: response.data.telNo,
            //     name: response.data.userName,
            //     vmtype: telComStr,
            // };
            // 위와 같은 데이터 형태를 params로
            window.UbpayBridge.ubpayJoin(params);
        }
    },
    // Ubpay 결제카드 화면으로 이동
    ubpayMain: () => {
        console.log('ubpayMain');
        if (DataUtils.isIOS()) {
            let params = {
                type: 0,
                data: {
                    menu: 'MANAGEPAYMENT',
                },
            };
            window.webkit.messageHandlers['paymentCallbackHandler'].postMessage(JSON.stringify(params));
        } else {
            window.UbpayBridge.ubpayMain();
        }
    },
    // 휴대폰 번호 가져오기
    phoneNo: () => {
        console.log('phoneNo');
        if (DataUtils.isIOS()) {
            let param = {
                type: 0, // 0 : UbPay, 1 : KCP (예정)
                data: {
                    menu: 'phoneNo',
                },
            };
            window.webkit.messageHandlers['paymentCallbackHandler'].postMessage(
                JSON.stringify(param),
                // callback: phoneNoCallback
            );
        } else {
            window.UbpayBridge.phoneNo();
        }
    },
    ubpayIsAuth: () => {
        console.log('ubpayIsAuth');
        if (DataUtils.isIOS()) {
            let param = {
                type: 0, // 0: UbPay, 1: KCP (예정)
                data: {
                    menu: 'isAuth',
                },
            };
            window.webkit.messageHandlers['paymentCallbackHandler'].postMessage(
                JSON.stringify(param),
                // callback: ubPayIsAuthCallback
            );
        } else {
            window.UbpayBridge.ubpayIsAuth();
        }
    },
    ubpayIsAuthH: () => {
        console.log('ubpayIsAuthH');
        if (DataUtils.isIOS()) {
            let param = {
                type: 0, // 0: UbPay, 1: KCP (예정)
                data: {
                    menu: 'isAuthH',
                },
            };
            window.webkit.messageHandlers['paymentCallbackHandler'].postMessage(
                JSON.stringify(param),
                // callback: ubPayIsAuthHCallback
            );
        } else {
            window.UbpayBridge.ubpayIsAuthH();
        }
    },
    /* WebsiteBridge */
    openWebsiteHandler: params => {
        /*
        var params = {
            type: OPENWEBSITE_TYPE.WEBBROWSER, // 0일시 웹뷰, 1일시 새 브라우저 창을 통해 Url 연결
            title: '카카오맵', // 제목(안드로이드에서는 이 속성값을 안 씀)
            url: 'https://m.map.kakao.com/actions/detailMapView?id=7946555&refService=place', //연결하려는 url
        };
        */
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['openWebsiteHandler'].postMessage(JSON.stringify(params));
        } else {
            window.WebsiteBridge.openWebsiteHandler(JSON.stringify(params));
        }
    },
    /* DownloadBridge */
    fileDownloadHandler: params => {
        if (DataUtils.isIOS()) {
            window.webkit.messageHandlers['fileDownloadHandler'].postMessage(JSON.stringify(params));
        } else {
            window.DownloadBridge.fileDownloadHandler(JSON.stringify(params));
        }
    },
    showPdf: downloadResult => {
        if (DataUtils.isMobile()) {
            if (DataUtils.isIOS()) {
                window.webkit.messageHandlers['showfileOpenHandler'].postMessage(JSON.stringify(downloadResult));
            } else {
                window.DownloadBridge.showPDF(downloadResult.uri, downloadResult.requiredPW);
            }
        }
    },
    /* else */
    clickToCall: number => {
        let phoneNum = null;
        if (number) {
            phoneNum = 'tel://' + number;
        } else {
            phoneNum = 'tel://' + get(i18n.messages[i18n.locale], 'hospitalInfo.PHONE_MAIN');
        }

        if (DataUtils.isIOS()) {
            let param = {
                tel: phoneNum,
            };
            window.webkit.messageHandlers['connectTelCallbackHandler'].postMessage(JSON.stringify(param));
        } else {
            window.open(phoneNum);
        }
    },
};
/**
 * Gets the value at `path` of `object`.
 * lodash _.get
 * @param {Object} object
 * @param {string|Array} path
 * @returns {*} value if exists else undefined
 */
const get = (object, path) => {
    if (typeof path === 'string') path = path.split('.').filter(key => key.length);
    return path.reduce((dive, key) => dive && dive[key], object);
};
export default {
    install(Vue) {
        Vue.prototype.$nativeCommunicator = methods;
    },
};
