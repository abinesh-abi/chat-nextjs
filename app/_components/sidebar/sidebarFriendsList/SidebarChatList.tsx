import { AppDispatch, RootState } from '@/app/_store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChatListItem from '../../common/friendsListItems/ChatListItem'
import { getChatLIst } from '@/app/_store/features/sidebarSlice'

export default function SidebarChatList() {
  const sidebar = useSelector((state: RootState) => state.sidebar)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getChatLIst())
  }, [dispatch])


  return (
    <div className='mx-2'>
      {
        sidebar.chatUsers.map((chat, key) => {
          return <ChatListItem chat={chat} key={key} />
        })
      }
    </div>
  )
}
