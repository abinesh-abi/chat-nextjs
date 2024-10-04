import React from 'react'
import ProfileAvatar from '../profileAvatar/ProfileAvatar'

export default function OwnChatItem() {
    return (
        <div className='p-2 flex gap-1 items-end'>
            <ProfileAvatar size='4' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.wEsBe2udHBieFeZVmus8qAHaHk%26pid%3DApi&f=1&ipt=d6576018225cdbc15a215bee3f7ff6d05a058bdcff1028a83865b7c0c807e2a0&ipo=images' />
            <div className='bg-[#DCE8FF] p-3 rounded-xl'>.</div>
        </div>
    )
}
