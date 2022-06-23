export const API_BASE_URL = process.env.VUE_APP_API_SERVER;
export const ACCESS_TOKEN = 'access-token';

export const RESULT_CODE = {
    RESULT_OK: 200,
    RESULT_CREATED: 201,
    RESULT_ACCEPTED: 202,
    RESULT_NO_CONTENT: 204,
    RESULT_DUPLICATED_CONTENT: 208,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    REQUEST_TIME_OUT: 408,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
};

export const DIALOG_STRING = {
    COMMON: {
        SERVER_ERROR: '서버와 통신할 수 없습니다.',
        SERVER_CONNECT_FAIL: '잠시 후 다시 시도해 주세요.',
    },
};
