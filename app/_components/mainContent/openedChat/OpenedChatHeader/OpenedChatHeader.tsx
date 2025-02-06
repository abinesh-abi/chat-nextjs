import ProfileAvatar from '@/app/_components/common/profileAvatar/ProfileAvatar'
import { RootState } from '@/app/_store'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { useSelector } from 'react-redux'

export default function OpenedChatHeader() {
    const chat = useSelector((state: RootState) => state.chat)
    return (
        <div className='flex justify-between items-center px-3 p-1 border-b-2'>
            <div className='min-h-[50px] flex items-center gap-2 '>
                <ProfileAvatar size='lg' src={chat.selectedChat?.userDetails.image} />
                <h3>{chat.selectedChat?.userDetails.name}</h3>
            </div>
            <a href="/api/auth/logout"
            className='text-red-700'
            ><FiLogOut /></a>

        </div>
    )
}
