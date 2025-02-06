import React from 'react'
import ProfileAvatar from '../profileAvatar/ProfileAvatar'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/_store'

export default function OtherPersonChatItem({content}:{content:string}) {
    const user = useSelector((state: RootState) => state.user)
    return (
        <div className='p-2 flex gap-1 items-end justify-end'>
            <div className='bg-[#DCE8FF] p-3 rounded-xl'>{content}</div>
            <ProfileAvatar size='sm' src={user.user?.image} />
        </div>
    )
}
