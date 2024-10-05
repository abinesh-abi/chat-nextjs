import React from 'react'
import ProfileAvatar from '../profileAvatar/ProfileAvatar'

export default function OtherPersonChatItem() {
    return (
        <div className='p-2 flex gap-1 items-end justify-end'>
            <div className='bg-[#DCE8FF] p-3 rounded-xl'>Hello World</div>
            <ProfileAvatar size='sm' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jtRO1wyV6uRKzNK-NIQ97AHaHa%26pid%3DApi&f=1&ipt=130259e9cd59bc94c8609eae3e9dfa1e3724702437af2c24c9cb637ac108334c&ipo=images' />
        </div>
    )
}
