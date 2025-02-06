import React from 'react'
import ProfileAvatar from '../profileAvatar/ProfileAvatar'
import { Users } from '@/types/common'
import { createChatCrud } from '@/app/_axios/api'
import { CiSquarePlus } from 'react-icons/ci'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/_store'

type Props = {
    user: Users
}


export default function FriendsAddListItem({ user }: Props) {
    const currUser = useSelector((state: RootState) => state.user)
    
    function handleCreateChat() {
        try {
            createChatCrud.post({ user1:currUser.user?._id,user2:user._id})
        } catch (error) {

        }
    }
    return (
        <div className='flex p-2 items-center gap-2 border-b-2'>
            <ProfileAvatar size='md' src={user.image} />
            <h3>{user.name}</h3>
            <CiSquarePlus
                onClick={handleCreateChat}
                className='size-9 text-green-600' />
        </div>
    )
}
