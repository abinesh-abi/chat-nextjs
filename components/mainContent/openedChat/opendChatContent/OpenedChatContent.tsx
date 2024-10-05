import OtherPersonChatItem from '@/components/common/ChatItems/OtherPersonChatItem'
import OwnChatItem from '@/components/common/ChatItems/OwnChatItem'
import React from 'react'

export default function OpenedChatContent() {
    return (
        <div className='h-full'>
            {
                [1, 2, 3, 4, 5,].map((message, key) => {
                    return message % 2 === 0 ?
                        <OtherPersonChatItem key={key} />
                        :
                        <OwnChatItem key={key} />
                })
            }
        </div>
    )
}
