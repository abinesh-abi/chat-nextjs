import FriendsListItem from '@/app/_components/common/friendsListItems/FriendsListItem'
import { AppDispatch, RootState } from '@/app/_store'
import { getOtherUsers } from '@/app/_store/features/sidebarSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function SidebarFriendsList() {
  const sidebar = useSelector((state: RootState) => state.sidebar)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getOtherUsers())
  }, [])

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
