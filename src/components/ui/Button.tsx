import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    loading?: boolean
    loadingText?: string
    disabled?: boolean
    className?: string
    fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'md',
    loading = false,
    loadingText,
    disabled = false,
    className = '',
    fullWidth = false
}) => {
    const baseClasses = 'font-medium transition-all duration-200 cursor-pointer transform flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = {
        primary: 'bg-[#5A66E8] hover:bg-[#505ce2] text-white disabled:bg-[#3B3D55]',
        secondary: 'bg-[#191C27] hover:bg-[#1F2330] text-white border border-[#FFFFFF1A]',
        outline: 'bg-transparent border border-[#FFFFFF1A] text-white hover:bg-[#0E1015]',
        ghost: 'bg-transparent text-white hover:bg-[#0E1015]'
    }

    const sizeClasses = {
        sm: 'px-3 py-2 text-sm rounded-md',
        md: 'px-4 py-3 text-base rounded-lg',
        lg: 'px-6 py-4 text-lg rounded-lg'
    }

    const widthClass = fullWidth ? 'w-full' : ''

    // If custom className is provided, use it instead of default styling
    const hasCustomStyling = className.includes('bg-') || className.includes('text-') || className.includes('px-') || className.includes('py-') || className.includes('h-')
    
    const classes = hasCustomStyling 
        ? `${baseClasses} ${widthClass} ${className}`
        : `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={classes}
        >
            {loading ? (
                <div className='flex items-center space-x-2'>
                    <div className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin'></div>
                    <span>{loadingText || 'Loading...'}</span>
                </div>
            ) : (
                children
            )}
        </button>
    )
}

export default Button
