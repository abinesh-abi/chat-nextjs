import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react'

export default function useAxios() {
    const {user} = useUser()
    // axiosInstance
    let header = {};
    if (user.) {
        const tokenString: string | null = localStorage.getItem('authentication');
        if (tokenString) {
            header = {
                authorization: 'Bearer ' + JSON.parse(tokenString).token,
                // 'Content-Type': 'multipart/form-data',
            };
        }
    }
    const axiosInstance = axios.create({
        // baseURL: ,
        headers: header,
        timeout: 2 * 60 * 1000,
    });
    return {

    }
}
