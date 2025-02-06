import { AppDispatch, RootState } from '@/app/_store'
import { getOtherUsers } from '@/app/_store/features/sidebarSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FriendsAddListItem from '../../common/friendsListItems/FriendsAddListItem'

export default function SidebarAddFriendsList() {
  const sidebar = useSelector((state: RootState) => state.sidebar)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getOtherUsers())
  }, [])

  return (
    <div className='mx-2'>
      {
        sidebar.allUsers.map((friends, key) => {
          return <FriendsAddListItem user={friends} key={key} />
        })
      }
    </div>
  )
}
