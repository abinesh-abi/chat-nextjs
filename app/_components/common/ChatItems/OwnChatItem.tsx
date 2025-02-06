import React from 'react'
import ProfileAvatar from '../profileAvatar/ProfileAvatar'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/_store'

export default function OwnChatItem({ content }: { content: string }) {
    const chat = useSelector((state: RootState) => state.chat)
    return (
        <div className='p-2 flex gap-1 items-end'>
            <ProfileAvatar size='sm' src={chat.selectedChat?.userDetails.image} />
            <div className='bg-[#DCE8FF] p-3 rounded-xl'>{content}</div>
        </div>
    )
}
