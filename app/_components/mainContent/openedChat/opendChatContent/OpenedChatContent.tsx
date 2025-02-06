import OtherPersonChatItem from '@/app/_components/common/ChatItems/OtherPersonChatItem'
import OwnChatItem from '@/app/_components/common/ChatItems/OwnChatItem'
import { RootState } from '@/app/_store'
import React from 'react'
import { useSelector } from 'react-redux'

export default function OpenedChatContent() {
    const chat = useSelector((state: RootState) => state.chat)
    const user = useSelector((state: RootState) => state.user)

    return (
        <div className='h-full'>
            {
                chat.messageList.map((message, key) => {
                    const isCurrentUser = user.user?._id === message.sender
                    // return message % 2 === 0 ?
                    return isCurrentUser ?
                        <OwnChatItem content={message.content} key={key} />
                        :
                        <OtherPersonChatItem content={message.content} key={key} />
                })
            }
        </div>
    )
}
