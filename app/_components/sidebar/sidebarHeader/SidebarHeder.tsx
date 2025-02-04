'use client'
import ProfileAvatar from '@/app/_components/common/profileAvatar/ProfileAvatar'
import { RootState } from '@/app/_store'
import React from 'react'
import { useSelector } from 'react-redux'

export default function SidebarHeder() {
  const user = useSelector((state: RootState) => state.user)
  console.log(user)
  return (
    <div className='flex py-2 items-center gap-2'>
      <ProfileAvatar size='lg' src={user.user?.image || '/user/profileAvatar.png'} />
      <h3>{user?.user?.name}</h3>
    </div>
  )
}
