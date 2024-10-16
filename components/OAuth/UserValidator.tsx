'use client'
import React, { ReactNode } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import Login from '@/components/login/Login'

export default function UserValidator({ children }: { children: ReactNode }) {
    const { user, error, isLoading } = useUser();
    const route = useRouter()

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (!user) route.push('/login')

    else return (
        <div>{children}</div>
    )
}
