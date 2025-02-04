import FriendsListItem from '@/app/_components/common/friendsListItems/FriendsListItem'
import { RootState } from '@/app/_store'
import React from 'react'
import { useSelector } from 'react-redux'

export default function SidebarFriendsList() {
  const sidebar = useSelector((state: RootState) => state.sidebar)

  return (
    <div className='mx-2'>
      {
        sidebar.allUsers.map((friends, key) => {
          return <FriendsListItem user={friends} key={key} />
        })
      }
    </div>
  )
}
