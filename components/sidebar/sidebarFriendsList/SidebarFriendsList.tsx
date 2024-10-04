import FriendsListItem from '@/components/common/friendsListItems/FriendsListItem'
import React from 'react'

export default function SidebarFriendsList() {
  return (
    <div className='mx-2'>
      {
        [1, 2, 3, 4].map((friends, index) => {
          return <FriendsListItem />
        })
      }
    </div>
  )
}
