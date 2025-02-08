import ProfileAvatar from '@/app/_components/common/profileAvatar/ProfileAvatar'
import { AppDispatch, RootState } from '@/app/_store'
import { selectChat } from '@/app/_store/features/chatSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdClose } from "react-icons/md";

export default function OpenedChatHeader() {
    const chat = useSelector((state: RootState) => state.chat)
    const dispatch: AppDispatch = useDispatch()
    function handleCloseSelectedChat() {
        dispatch(selectChat(null))
    }
    return (
        <div className='flex justify-between items-center px-3 p-1 border-b-2'>
            <div className='min-h-[50px] flex items-center gap-2 '>
                <ProfileAvatar size='lg' src={chat.selectedChat?.userDetails.image} />
                <h3>{chat.selectedChat?.userDetails.name}</h3>
            </div>
            <MdClose
                size={25}
                onClick={handleCloseSelectedChat}
            />
        </div>
    )
}
