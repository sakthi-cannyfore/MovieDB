import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const post = (url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.post(url, data, config);
};

const get = (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.get(url, config);  
};

const put = (url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.put(url, data, config);
};

const del = (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.delete(url, config);
};

const HttpClient = {
    post,
    get,
    put,
    delete: del
};

export { HttpClient };
