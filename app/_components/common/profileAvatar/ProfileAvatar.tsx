import React from 'react'

const imageSizes={
    sm:'15px',
    md:'40px',
    lg:'50px'
}

type ProfileAvatarProps = { src: string, size?: keyof typeof imageSizes }

export default function ProfileAvatar({ src, size = 'md' }: ProfileAvatarProps) {
    return (
        <img src={src} className={`rounded-full aspect-square`} style={{width:imageSizes[size]}} alt="" />
    )
}
