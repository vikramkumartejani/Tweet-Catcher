import React from 'react'
import Image from 'next/image'
import Button from './Button'

interface GoogleButtonProps {
    onClick?: () => void
    loading?: boolean
    loadingText?: string
    disabled?: boolean
    className?: string
    fullWidth?: boolean
    title?: string
}

const GoogleButton: React.FC<GoogleButtonProps> = ({
    onClick,
    loading = false,
    loadingText = 'Connecting...',
    disabled = false,
    className = '',
    fullWidth = true,
    title = 'Login with Google'
}) => {
    return (
        <Button
            variant="outline"
            onClick={onClick}
            loading={loading}
            loadingText={loadingText}
            disabled={disabled}
            className={`gap-5 ${className}`}
            fullWidth={fullWidth}
        >
            {!loading && (
                <Image
                    src='/assets/icons/google.svg'
                    alt='google'
                    width={22}
                    height={22}
                    className='transition-transform duration-200 hover:scale-110'
                />
            )}
            <span className='text-white text-[16px] leading-[20px] font-medium'>
                {title}
            </span>
        </Button>
    )
}

export default GoogleButton
