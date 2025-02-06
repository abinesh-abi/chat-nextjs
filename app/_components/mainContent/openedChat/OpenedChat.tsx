import React from 'react'
import OpenedChatHeader from './OpenedChatHeader/OpenedChatHeader'
import OpenedChatContent from './opendChatContent/OpenedChatContent'
import CreateMessage from './CreateMessage/CreateMessage'

export default function OpenedChat() {
  return (
    <div className='flex flex-col px-2 pt-2 h-full'>
      <OpenedChatHeader />
      <OpenedChatContent />
      <CreateMessage />
    </div>
  )
}
