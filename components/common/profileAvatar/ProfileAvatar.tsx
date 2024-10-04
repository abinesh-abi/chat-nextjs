import React from 'react'

type ProfileAvatarProps = { src: string, size?: '4' | '8' | '9' }

export default function ProfileAvatar({ src, size ='9' }: ProfileAvatarProps) {
    return (
        <img src={src} className={`rounded-full aspect-square size-${size}`} alt="" />
    )
}
