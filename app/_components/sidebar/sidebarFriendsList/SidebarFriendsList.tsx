import FriendsListItem from '@/app/_components/common/friendsListItems/FriendsListItem'
import React from 'react'

export default function SidebarFriendsList() {
  return (
    <div className='mx-2'>
      {
        [1, 2, 3, 4].map((friends, key) => {
          return <FriendsListItem key={key} />
        })
      }
    </div>
  )
}
