'use client'
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import OpenedChat from './openedChat/OpenedChat'

export default function MainContent() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className='w-full'>
      <div className="flex">
        <a href="/api/auth/logout">Logout</a>
      </div>
      <OpenedChat />
    </div>
  )
}
