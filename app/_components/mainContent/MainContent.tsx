'use client'
import React, { useEffect } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import OpenedChat from './openedChat/OpenedChat'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/_store';
import { getMessageByChatId } from '@/app/_store/features/chatSlice';

export default function MainContent() {
  const { user, error, isLoading } = useUser();
  const chat = useSelector((state: RootState) => state.chat)
  const dispatch: AppDispatch = useDispatch()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;


  useEffect(() => {
    if (chat.selectedChat?._id) {
      dispatch(getMessageByChatId({chatId:chat.selectedChat?._id}))
    }
  }, [chat.selectedChat?._id])

  return (
    <div className='w-full'>
      {chat.selectedChat?._id ?
        <OpenedChat />
        : <div className='flex justify-center items-center h-full'>Click chat to start conversation</div>
      }
    </div>
  )
}
