'use client'

import React, { useState } from 'react'
import RadioButton from '@/components/ui/RadioButton'
import { createPortal } from 'react-dom'

interface CreateCheckoutLinkProps {
    onClose: () => void
}

const CreateCheckoutLink: React.FC<CreateCheckoutLinkProps> = ({ onClose }) => {
    const [stock, setStock] = useState('1')
    const [password, setPassword] = useState('my-password')
    const [selectedProduct, setSelectedProduct] = useState('Account Automation Tool')
    const [selectedPlan, setSelectedPlan] = useState(0)

    const products = [
        'Cloud Monitor Pro Plan',
        'Monitor 75 Extra Tasks',
        'Monitor 50 Extra Tasks',
        'Monitor 25 Extra Tasks',
        'Tweet Catcher Cloud Monitor',
        'Account Automation Tool',
        'Lifetime Plans',
        'Trial'
    ]

    const planOptions = [
        {
            name: 'Free', price: '', access: [
                { text: '1 Day Access', bgColor: 'bg-[#272A57]', textColor: 'text-[#737DF6]' }
            ]
        },
        { name: 'Free', price: '', access: [{ text: '30 Day Access', bgColor: 'bg-[#272A57]', textColor: 'text-[#737DF6]' }] },
        {
            name: '$30.00 onc', price: '', access: [
                { text: 'Crypto 30 days', bgColor: 'bg-[#2F3343]', textColor: 'text-[#B6B6B6]' },
                { text: '30 Day Access', bgColor: 'bg-[#272A57]', textColor: 'text-[#737DF6]' }
            ], tag: { text: '4', bgColor: 'bg-[#272A57]', textColor: 'text-[#737DF6]' }
        },
        { name: '$37.50 once +$37.50', price: '', access: [{ text: '3 months access', bgColor: 'bg-[#272A57]', textColor: 'text-[#737DF6]' }] },
        { name: '$60.00 once + $60.00', price: '', access: [{ text: '3 months access', bgColor: 'bg-[#272A57]', textColor: 'text-[#737DF6]' }] },
        {
            name: '$75.00 on', price: '', access: [
                { text: 'Crypto 30 days', bgColor: 'bg-[#2F3343]', textColor: 'text-[#B6B6B6]' },
                { text: '3 months access', bgColor: 'bg-[#272A57]', textColor: 'text-[#737DF6]' }
            ]
        },
        {
            name: '$130.00 o', price: '', access: [
                { text: 'Crypto 30 days', bgColor: 'bg-[#2F3343]', textColor: 'text-[#B6B6B6]' },
                { text: '30 Day Access', bgColor: 'bg-[#272A57]', textColor: 'text-[#737DF6]' }
            ]
        }
    ]

    const handleCreateLink = () => {
        console.log('Creating checkout link with:', {
            stock,
            password,
            selectedProduct,
            selectedPlan
        })
        onClose()
    }



    return createPortal(
        <div className="fixed inset-0 bg-[#13151EB2] flex items-center justify-center z-50 p-4">
            <div className="bg-[#191C27] rounded-md w-full max-w-[1169px] px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 max-h-[90vh] hide-scrollbar overflow-y-auto relative">
                <button onClick={onClose} className='text-[#474D61] hover:text-white transition-colors cursor-pointer absolute top-4 sm:top-[25px] right-4 sm:right-9'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                    </svg>
                </button>

                <h2 className='text-white text-[16px] font-semibold'>Create Checkout Link</h2>
                <p className="text-[#515A69] text-[14px] font-medium mt-1.5">
                    Checkout links are direct links to that you can send to people to checkout.
                </p>

                <div className="flex items-start lg:flex-row flex-col justify-between gap-5 lg:gap-6 mt-6">
                    {/* Left Section */}
                    <div className="lg:max-w-[538px] w-full">
                        {/* Stock Input */}
                        <div className="mb-4">
                            <label className="block text-[#515A69] text-[14px] font-medium mb-3">
                                Stock (optional)
                            </label>
                            <input
                                type="text"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                className="w-full bg-[#212430] rounded-md px-3 h-[38px] text-[#727A89] text-[14px] font-medium outline-none"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label className="block text-[#515A69] text-[14px] font-medium mb-3">
                                Password (optional)
                            </label>
                            <input
                                type="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#212430] rounded-md px-3 h-[38px] text-[#727A89] text-[14px] font-medium outline-none"
                            />
                        </div>

                        {/* Product Selection */}
                        <div>
                            <label className="block text-[#515A69] text-[14px] font-medium mb-3">
                                Pricing option for this checkout link:
                            </label>
                            <div className="space-y-[22px]">
                                {products.map((product) => (
                                    <button
                                        key={product}
                                        onClick={() => setSelectedProduct(product)}
                                        className={`w-full text-left bg-[#212430] border rounded-md pl-3 pr-5 h-[38px] text-[#727A89] text-[14px] font-medium flex items-center justify-between hover:bg-[#1A1D2A] transition-colors duration-200 ${selectedProduct === product ? 'border-[#535EE1]' : 'border-transparent hover:border-[#535EE1]'
                                            }`}
                                    >
                                        {product}
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.5306 6.53073L8.5306 11.5307C8.46092 11.6007 8.37813 11.6561 8.28696 11.694C8.1958 11.7318 8.09806 11.7513 7.99935 11.7513C7.90064 11.7513 7.8029 11.7318 7.71173 11.694C7.62057 11.6561 7.53778 11.6007 7.4681 11.5307L2.4681 6.53073C2.3272 6.38984 2.24805 6.19874 2.24805 5.99948C2.24805 5.80023 2.3272 5.60913 2.4681 5.46823C2.60899 5.32734 2.80009 5.24818 2.99935 5.24818C3.19861 5.24818 3.3897 5.32734 3.5306 5.46823L7.99997 9.93761L12.4693 5.46761C12.6102 5.32671 12.8013 5.24756 13.0006 5.24756C13.1999 5.24756 13.391 5.32671 13.5318 5.46761C13.6727 5.60851 13.7519 5.7996 13.7519 5.99886C13.7519 6.19812 13.6727 6.38921 13.5318 6.53011L13.5306 6.53073Z" fill="white" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:max-w-[460px] w-full">
                        <h3 className="text-[#515A69] text-[14px] font-medium mb-3">Account Automation Tool</h3>

                        <div className="space-y-2 sm:space-y-3 bg-[#212430] rounded-md px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 mb-6 sm:mb-[30px]">
                            {planOptions.map((plan, index) => (
                                <div key={index} className="flex items-center gap-2 sm:gap-3">
                                    <RadioButton
                                        id={`plan-${index}`}
                                        name="plan"
                                        value={plan.name}
                                        checked={selectedPlan === index}
                                        onChange={() => setSelectedPlan(index)}
                                    />

                                    <label htmlFor={`plan-${index}`} className="flex-1 flex items-center gap-1 sm:gap-2 min-w-0">
                                        <span className={`text-[12px] sm:text-[14px] font-medium truncate ${selectedPlan === index ? 'text-white' : 'text-[#727A89]'}`}>{plan.name}</span>
                                    </label>

                                    <div className='flex items-center gap-1 sm:gap-2 flex-shrink-0'>
                                        {plan.tag && (
                                            <span className={`${plan.tag.bgColor} ${plan.tag.textColor} text-[9px] sm:text-[10px] md:text-[11px] font-medium px-1 sm:px-1.5 h-[20px] sm:h-[22px] md:h-[25px] rounded-md flex items-center justify-center gap-0.5`}>
                                                <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[10px] sm:h-[10px]">
                                                    <path d="M9.15556 8.20308C8.62 7.26312 7.78372 6.53072 6.78134 6.12378C7.27982 5.74993 7.64802 5.22871 7.83381 4.63396C8.01959 4.03922 8.01354 3.40109 7.8165 2.80998C7.61946 2.21886 7.24143 1.70473 6.73595 1.3404C6.23048 0.976078 5.62318 0.780029 5.00009 0.780029C4.37701 0.780029 3.76971 0.976078 3.26424 1.3404C2.75876 1.70473 2.38073 2.21886 2.18369 2.80998C1.98665 3.40109 1.9806 4.03922 2.16638 4.63396C2.35217 5.22871 2.72037 5.74993 3.21884 6.12378C2.21647 6.53072 1.38019 7.26312 0.844625 8.20308C0.811439 8.25644 0.789321 8.31593 0.779586 8.378C0.76985 8.44008 0.772696 8.50349 0.787953 8.56444C0.803211 8.6254 0.830569 8.68267 0.868401 8.73284C0.906233 8.78302 0.953767 8.82507 1.00818 8.85651C1.06259 8.88794 1.12276 8.90812 1.18512 8.91583C1.24749 8.92355 1.31076 8.91864 1.37119 8.90142C1.43162 8.88419 1.48797 8.85498 1.53689 8.81554C1.58581 8.7761 1.6263 8.72723 1.65595 8.67183C2.36377 7.44839 3.61377 6.7187 5.00009 6.7187C6.38642 6.7187 7.63642 7.44878 8.34423 8.67183C8.4085 8.77516 8.51043 8.84945 8.62847 8.879C8.74651 8.90854 8.87142 8.89103 8.97678 8.83015C9.08215 8.76928 9.15971 8.66982 9.19307 8.55279C9.22644 8.43577 9.21299 8.31036 9.15556 8.20308ZM2.96884 3.74995C2.96884 3.34821 3.08797 2.95549 3.31117 2.62145C3.53437 2.28741 3.85161 2.02706 4.22277 1.87332C4.59393 1.71958 5.00235 1.67935 5.39637 1.75773C5.7904 1.83611 6.15233 2.02956 6.4364 2.31364C6.72048 2.59772 6.91394 2.95965 6.99231 3.35367C7.07069 3.7477 7.03046 4.15611 6.87672 4.52728C6.72298 4.89844 6.46263 5.21568 6.1286 5.43887C5.79456 5.66207 5.40184 5.7812 5.00009 5.7812C4.46156 5.78058 3.94527 5.56638 3.56447 5.18558C3.18367 4.80478 2.96946 4.28848 2.96884 3.74995Z" fill="#737DF6" />
                                                </svg>
                                                {plan.tag.text}
                                            </span>
                                        )}
                                        <div className="flex gap-1 sm:gap-2 md:gap-2.5 flex-wrap">
                                            {plan.access.map((access, accessIndex) => (
                                                <span
                                                    key={accessIndex}
                                                    className={`${access.bgColor} ${access.textColor} flex items-center justify-center text-[9px] sm:text-[10px] md:text-[11px] font-medium px-1.5 sm:px-2 h-[20px] sm:h-[22px] md:h-[25px] rounded-md whitespace-nowrap`}
                                                >
                                                    {access.text}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleCreateLink}
                            className="bg-[#535EE1] hover:bg-[#4A52D9] text-white px-8 h-[38px] cursor-pointer w-full rounded-md text-[14px] font-medium flex items-center justify-center gap-1.5 transition-colors"
                        >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6875 6C10.6875 6.14918 10.6282 6.29226 10.5227 6.39775C10.4173 6.50324 10.2742 6.5625 10.125 6.5625H6.5625V10.125C6.5625 10.2742 6.50324 10.4173 6.39775 10.5227C6.29226 10.6282 6.14918 10.6875 6 10.6875C5.85082 10.6875 5.70774 10.6282 5.60225 10.5227C5.49676 10.4173 5.4375 10.2742 5.4375 10.125V6.5625H1.875C1.72582 6.5625 1.58274 6.50324 1.47725 6.39775C1.37176 6.29226 1.3125 6.14918 1.3125 6C1.3125 5.85082 1.37176 5.70774 1.47725 5.60225C1.58274 5.49676 1.72582 5.4375 1.875 5.4375H5.4375V1.875C5.4375 1.72582 5.49676 1.58274 5.60225 1.47725C5.70774 1.37176 5.85082 1.3125 6 1.3125C6.14918 1.3125 6.29226 1.37176 6.39775 1.47725C6.50324 1.58274 6.5625 1.72582 6.5625 1.875V5.4375H10.125C10.2742 5.4375 10.4173 5.49676 10.5227 5.60225C10.6282 5.70774 10.6875 5.85082 10.6875 6Z" fill="white" />
                            </svg>
                            Create Checkout Link
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default CreateCheckoutLink