'use client'
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import OpenedChat from './openedChat/OpenedChat'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_store';

export default function MainContent() {
  const { user, error, isLoading } = useUser();
  const chat = useSelector((state: RootState) => state.chat)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;



  return (
    <div className='w-full'>
      {chat.selectedChat?._id ?
        <OpenedChat />
        : <div className='flex justify-center items-center h-full'>Click chat to start conversation</div>
      }
    </div>
  )
}
