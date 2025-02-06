import React from 'react'
import ProfileAvatar from '../profileAvatar/ProfileAvatar'
import { Users } from '@/types/common'
import { ChatUserListType } from '@/types/chat'

type Props ={
    user:ChatUserListType
}

export default function ChatListItem({user}:Props) {
    return (
        <div className='flex p-2 items-center gap-2 border-b-2'>
            <ProfileAvatar size='md' src={user.userDetails.image} />
            <h3>{user.userDetails.name}</h3>
        </div>
    )
}
