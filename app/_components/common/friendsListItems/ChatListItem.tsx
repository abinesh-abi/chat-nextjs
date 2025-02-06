import React from 'react'
import ProfileAvatar from '../profileAvatar/ProfileAvatar'
import { Users } from '@/types/common'
import { ChatUserListType } from '@/types/chat'
import { AppDispatch } from '@/app/_store'
import { useDispatch } from 'react-redux'
import { selectChat } from '@/app/_store/features/chatSlice'

type Props = {
    chat: ChatUserListType
}

export default function ChatListItem({ chat }: Props) {
    const dispatch: AppDispatch = useDispatch()

    function handleOpenChat() {
        dispatch(selectChat(chat))
    }

    return (
        <div className='flex p-2 items-center gap-2 border-b-2 cursor-pointer rounded-lg bg-white hover:bg-slate-300'
            onClick={handleOpenChat} >
            <ProfileAvatar size='md' src={chat.userDetails.image} />
            <h3>{chat.userDetails.name}</h3>
        </div>
    )
}
