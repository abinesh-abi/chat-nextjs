import axios from "axios";

let header = {};
if (typeof localStorage !== 'undefined' && localStorage.getItem('authentication')) {
    const tokenString: string | null = localStorage.getItem('authentication');
    if (tokenString) {
        header = {
            authorization: 'Bearer ' + JSON.parse(tokenString).token,
            // 'Content-Type': 'multipart/form-data',
        };
    }
}

// axiosInstance
export const axiosInstance = axios.create({
    // baseURL: ,
    headers: header,
    timeout: 2 * 60 * 1000,
});

export class CurdOperations {
    private api: string;
    constructor(api: string) {
        this.api = api;
    }
    get = async (query: string = '') => {
        try {
            const response:Axios.AxiosXHR<any> = await axiosInstance.get(`${this.api}${query}`);
            return response.data;
        } catch (err) {
            throw err;
        }
    };
    retrieve = async (id: number | string, query: string = '') => {
        try {
            const response:Axios.AxiosXHR<any> = await axiosInstance.get(`${this.api}/${id}${query}`);
            return response.data;
        } catch (err) {
            throw err;
        }
    };
    post = async (body = {}, query: string = '') => {
        
        try {
            const response:Axios.AxiosXHR<any> = await axiosInstance.post(`${this.api + query}`, body);
            return response.data;
        } catch (err) {
            throw err;
        }
    };
    patch = async (id: number |string, body = {}, query: string = '') => {
        try {
            const response:Axios.AxiosXHR<any> = await axiosInstance.patch(`${this.api}${id}/${query}`, body);
            return response.data;
        } catch (err) {
            throw err;
        }
    };
    put = async (id: number | string, body = {}, query: string = '') => {
        try {
            const response:Axios.AxiosXHR<any> = await axiosInstance.put(`${this.api}${id}/${query}`, body);
            return response.data;
        } catch (err) {
            throw err;
        }
    };

    delete = async (id: number | string, query: string = '') => {
        try {
            const response:Axios.AxiosXHR<any> = await axiosInstance.delete(`${this.api}${id}/${query}`);
            return response.data;
        } catch (err) {
            throw err;
        }
    };
}