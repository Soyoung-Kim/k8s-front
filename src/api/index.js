import axios from 'axios';
import { API_BASE_URL } from '../constants/index';

const instance = axios.create({
    // baseURL: API_BASE_URL,
    timeout: 10000,
});

const axiosConfig = {
    setHeader(token) {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    },
};

export { axiosConfig };

export default instance;
