import React from 'react'
import OpenedChatHeader from './OpenedChatHeader/OpenedChatHeader'
import OpenedChatContent from './opendChatContent/OpenedChatContent'

export default function OpenedChat() {
  return (
    <div className='px-2 pt-2 h-full'>
      <OpenedChatHeader />
      <OpenedChatContent />
    </div>
  )
}
