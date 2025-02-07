'use client'
import ProfileAvatar from '@/app/_components/common/profileAvatar/ProfileAvatar'
import { RootState } from '@/app/_store'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { useSelector } from 'react-redux'

export default function SidebarHeder() {
  const user = useSelector((state: RootState) => state.user)
  return (
    <div className='flex justify-between items-center'>
      <div className='flex py-2 items-center gap-2'>
        <ProfileAvatar size='lg' src={user.user?.image } />
        <h3>{user?.user?.name}</h3>
      </div>
      <a href="/api/auth/logout"
        className='text-red-700'
      ><FiLogOut /></a>
    </div>
  )
}
