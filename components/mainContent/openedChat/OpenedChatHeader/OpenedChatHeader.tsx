import ProfileAvatar from '@/components/common/profileAvatar/ProfileAvatar'
import React from 'react'

export default function OpenedChatHeader() {
    return (
        <div className='min-h-[50px] flex items-center gap-2 border-b-2'>
            <ProfileAvatar size='lg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jtRO1wyV6uRKzNK-NIQ97AHaHa%26pid%3DApi&f=1&ipt=130259e9cd59bc94c8609eae3e9dfa1e3724702437af2c24c9cb637ac108334c&ipo=images' />
            <h3>Name</h3>
        </div>
    )
}
