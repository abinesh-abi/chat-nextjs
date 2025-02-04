'use client'
import React, { ReactNode, useEffect } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/_store';
import { getProfile } from '@/app/_store/features/userSlice';


export default function UserValidator({ children }: { children: ReactNode }) {
    const { user, error, isLoading } = useUser();
    const route = useRouter()
    const dispatch:AppDispatch = useDispatch()


    useEffect(() => {
        const fetchAccessToken = async () => {
            if (user) {
                try {
                    // dispatch(getAccessToken())
                    dispatch(getProfile())
                } catch (err) {
                    console.error('Error fetching access token:', err);
                }
            }
        };
        fetchAccessToken();
    }, [user]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (!user) route.push('/login')

    else return (
        <div>{children}</div>
    )
}
