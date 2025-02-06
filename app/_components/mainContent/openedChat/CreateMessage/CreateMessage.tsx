import { AppDispatch, RootState } from '@/app/_store'
import { crateMessage } from '@/app/_store/features/chatSlice'
import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

export default function CreateMessage() {
    const dispatch: AppDispatch = useDispatch()
    const chat = useSelector((state: RootState) => state.chat)

    const [message, setMessage] = useState('')


    function handleCreateMessage() {
        if (chat.selectedChat?._id) {
            dispatch(crateMessage({ content: message, chatId: chat.selectedChat?._id }))
            .then(()=>setMessage(''))
        }
    }

    return (
        <div className='flex items-center  bg-slate-200 p-3 h-20 rounded-md'>
            <input type="text" value={message} onChange={(e) => setMessage((e.target as HTMLInputElement).value)}
                className='w-full rounded-lg p-2' />
            <FaPaperPlane className='size-11 text-blue-600 p-2 cursor-pointer'
                onClick={handleCreateMessage}
            />
        </div>
    )
}
