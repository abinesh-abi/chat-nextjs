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


export default function FriendsListItem({ user }: Props) {
    const currUser = useSelector((state: RootState) => state.user)
    
    function handleCreateChat() {
        try {
            createChatCrud.post({ user1:currUser.user?._id,user2:user._id})
        } catch (error) {

        }
    }
    return (
        <div className='flex p-2 items-center gap-2 border-b-2'>
            <ProfileAvatar size='md' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.wEsBe2udHBieFeZVmus8qAHaHk%26pid%3DApi&f=1&ipt=d6576018225cdbc15a215bee3f7ff6d05a058bdcff1028a83865b7c0c807e2a0&ipo=images' />
            <h3>{user.name}</h3>
            <CiSquarePlus
                onClick={handleCreateChat}
                className='size-9 text-green-600' />
        </div>
    )
}
