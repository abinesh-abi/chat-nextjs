import ProfileAvatar from '@/app/_components/common/profileAvatar/ProfileAvatar'
import React from 'react'

export default function SidebarHeder() {
  return (
    <div className='flex py-2 items-center gap-2'>
      <ProfileAvatar size='lg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.wEsBe2udHBieFeZVmus8qAHaHk%26pid%3DApi&f=1&ipt=d6576018225cdbc15a215bee3f7ff6d05a058bdcff1028a83865b7c0c807e2a0&ipo=images' />
      <h3>Name</h3>
    </div>
  )
}
