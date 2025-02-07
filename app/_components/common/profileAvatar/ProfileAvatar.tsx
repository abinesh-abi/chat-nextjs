import React, { useEffect, useState } from 'react'

const imageSizes = {
    sm: '15px',
    md: '40px',
    lg: '50px'
}

type ProfileAvatarProps = { src: string, size?: keyof typeof imageSizes }


export default function ProfileAvatar({ src, size = 'md' }: ProfileAvatarProps) {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const img = new Image();
                img.src = src;
                img.onload = () => setImageSrc(src);
                img.onerror = () => setError(true);
            } catch (err) {
                setError(true);
            }
        };

        loadImage();
    }, [src]);
    return (
        <img src={imageSrc || '/user/profileAvatar.png'}
            className={`rounded-full aspect-square`}
            style={{ width: imageSizes[size] }}
            alt="profile"
            loading='lazy'
        />
    )
}
