export default {
    isIOS: () => {
        let userAgent = window.navigator.userAgent;
        return /iPhone|iPad|iPod/i.test(userAgent);
    },
    isMobile: () => {
        let userAgent = window.navigator.userAgent;
        if (/Android/i.test(userAgent)) {
            return true;
        } else return /iPhone|iPad|iPod/i.test(userAgent);
    },
    convertAmountUnit: amountString => {
        return `${Number(amountString).toLocaleString()} 원`;
    },
    isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) return false;
        }
        return true;
    },
    getValueByArrayKey(codeList, keyName, keyValue, returnKeyName) {
        // array 값에서 지정한 키값의 일치하는 value 리턴.
        let returnVal = null;
        if (codeList && keyName && keyValue && returnKeyName) {
            codeList.map(item => {
                if (item[keyName] === keyValue) {
                    returnVal = item[returnKeyName];
                }
            });
        }
        return returnVal;
    },
    b64DecodeUnicode(str) {
        return decodeURIComponent(
            atob(str)
                .split('')
                .map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join(''),
        );
    },
    maxLengthCheck(object) {
        console.log('maxLengthCheck');
        if (object.value.length > object.maxLength) {
            object.value = object.value.slice(0, object.maxLength);
        }
    },
    phoneNumberFormat(str) {
        var cleaned = ('' + str).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
        if (match) {
            return match[1] + '-' + match[2] + '-' + match[3];
        }
    },

    // null 이거나 글자 수가 0 이면 "" 으로 치환
    isEmptyValue(value) {
        if (value == null || value.length === 0) {
            return '';
        } else {
            return value;
        }
    },

    //가격 자릿수 맞추기.
    numberWithCommas(x) {
        if (x != null) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    },
    numberWithUncomma(x) {
        if (x != null) {
            return x.toString().replace(/[^\d]+/g, '');
        }
    },
    numberRemoveZero(x) {
        if (x != null) {
            return x.toString().replace(/(^0+)/, '');
        }
    },
    // 스토어 버전 비교
    isNewerVersion(appVer, storeVer) {
        if (this.isEmpty(appVer) || this.isEmpty(storeVer)) {
            return true;
        }
        const appVerParts = appVer.split('.');
        const storeVerParts = storeVer.split('.');
        for (var i = 0; i < storeVerParts.length; i++) {
            const a = ~~storeVerParts[i];
            const b = ~~appVerParts[i];
            if (a > b) return true;
            if (a < b) return false;
        }
        return false;
    },
    setCookieKeyValue(key, value) {
        var date = new Date();
        date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
        document.cookie = key + '=' + value + ';expires=' + date.toGMTString() + '; path=/';
    },
    getCookieByKey(key) {
        var i, x, y;
        var ARRcookies = document.cookie.split(';');
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1);
            x = x.replace(/^\s+|\s+$/g, '');
            if (x === key) {
                return unescape(y);
            }
        }
    },
};
