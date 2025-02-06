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
  }, [])


  return (
    <div className='mx-2'>
      {
        sidebar.chatUsers.map((friends, key) => {
          return <ChatListItem user={friends} key={key} />
        })
      }
    </div>
  )
}
