import React, { useEffect } from 'react'
import OpenedChatHeader from './OpenedChatHeader/OpenedChatHeader'
import OpenedChatContent from './opendChatContent/OpenedChatContent'
import CreateMessage from './CreateMessage/CreateMessage'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/_store'
import { getMessageByChatId } from '@/app/_store/features/chatSlice'

export default function OpenedChat() {
  const chat = useSelector((state: RootState) => state.chat)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    function fetchData() {

      if (chat.selectedChat?._id) {
        dispatch(getMessageByChatId({ chatId: chat.selectedChat?._id }))
      }
    }
    fetchData()
  }, [chat.selectedChat?._id, dispatch])
  return (
    <div className='flex flex-col px-2 pt-2 h-full'>
      <OpenedChatHeader />
      <OpenedChatContent />
      <CreateMessage />
    </div>
  )
}
