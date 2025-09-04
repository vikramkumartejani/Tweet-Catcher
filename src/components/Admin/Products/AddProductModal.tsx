'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import InputField from '@/components/ui/InputField'
import Image from 'next/image'

interface AddProductModalProps {
    onClose: () => void
}

const CustomDropdown: React.FC<{
    label: string
    value: string
    options: string[]
    onChange: (value: string) => void
    className?: string
}> = ({ label, value, options, onChange, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`relative ${className}`}>
            <label className="block text-[#515A69] text-[14px] font-medium mb-2.5">
                {label}
            </label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-[#212430] rounded-md cursor-pointer px-4 h-[38px] text-[#727A89] text-[14px] font-medium outline-none text-left flex items-center justify-between"
                >
                    {value}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5306 6.53073L8.5306 11.5307C8.46092 11.6007 8.37813 11.6561 8.28696 11.694C8.1958 11.7318 8.09806 11.7513 7.99935 11.7513C7.90064 11.7513 7.8029 11.7318 7.71173 11.694C7.62057 11.6561 7.53778 11.6007 7.4681 11.5307L2.4681 6.53073C2.3272 6.38984 2.24805 6.19874 2.24805 5.99948C2.24805 5.80023 2.3272 5.60913 2.4681 5.46823C2.60899 5.32734 2.80009 5.24818 2.99935 5.24818C3.19861 5.24818 3.3897 5.32734 3.5306 5.46823L7.99997 9.93761L12.4693 5.46761C12.6102 5.32671 12.8013 5.24756 13.0006 5.24756C13.1999 5.24756 13.391 5.32671 13.5318 5.46761C13.6727 5.60851 13.7519 5.7996 13.7519 5.99886C13.7519 6.19812 13.6727 6.38921 13.5318 6.53011L13.5306 6.53073Z" fill="white" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-[#212430] border border-[#3B3D5533] rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                        {options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => {
                                    onChange(option)
                                    setIsOpen(false)
                                }}
                                className="w-full text-left px-4 py-2 cursor-pointer text-white text-[13px] font-medium hover:bg-[#191C27] transition-colors"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

const AddProductModal: React.FC<AddProductModalProps> = ({ onClose }) => {
    const [productName, setProductName] = useState('')
    const [returnUrl, setReturnUrl] = useState('')
    const [description, setDescription] = useState('')
    const [pricingType, setPricingType] = useState('Single Payment')
    const [currency, setCurrency] = useState('EUR')
    const [pricing, setPricing] = useState('USD')
    const [productStatus, setProductStatus] = useState('Active')
    const [taxCategory, setTaxCategory] = useState('')
    const [taxBehavior, setTaxBehavior] = useState('Inclusive')
    const [productImage, setProductImage] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setProductImage(file)
            const reader = new FileReader()
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleRemoveImage = () => {
        setProductImage(null)
        setImagePreview(null)
    }

    return (
        <div
            className='fixed inset-0 bg-[#13151EB2] flex items-center justify-center z-50 p-4'
            onClick={handleOverlayClick}
        >
            <div className='bg-[#191C27] rounded-md w-full max-w-[1143px] px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 max-h-[90vh] hide-scrollbar overflow-y-auto relative'>
                <button onClick={onClose} className='text-[#474D61] hover:text-white transition-colors cursor-pointer absolute top-4 sm:top-[25px] right-4 sm:right-9'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                    </svg>
                </button>

                <h2 className='text-white text-[16px] font-semibold'>Add Product</h2>

                <div className='mt-6'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-9'>
                        {/* Left Column - Product Details */}
                        <div className=''>
                            <h3 className='text-white text-[14px] font-medium mb-3.5'>Product Details</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                <InputField
                                    label="Name"
                                    placeholder="Name"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    className="w-full"
                                    inputClassName="bg-[#212430] border border-[#3B3D5533] text-white h-[38px] placeholder:text-[#727A89]"
                                />
                                <InputField
                                    label="Return URL"
                                    placeholder="Name"
                                    value={returnUrl}
                                    onChange={(e) => setReturnUrl(e.target.value)}
                                    className="w-full"
                                    inputClassName="bg-[#212430] border border-[#3B3D5533] text-white h-[38px] placeholder:text-[#727A89]"
                                />
                            </div>

                            <label className="block text-[#515A69] text-[14px] font-medium mb-3">
                                Description
                            </label>
                            <textarea
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={3}
                                className="w-full bg-[#212430] border border-[#3B3D5533] placeholder:text-[#727A89] rounded-md px-4 py-3 h-[108px] text-white text-[14px] font-medium outline-none resize-none"
                            />

                            <div className='w-full h-[1px] bg-[#FFFFFF1A] my-6 sm:my-9' />

                            {/* Pricing Details */}
                            <div>
                                <h3 className='text-white text-[14px] font-medium mb-4'>Pricing Details</h3>
                                <div className='flex gap-3 sm:gap-5 mb-6 text-left'>
                                    <button
                                        onClick={() => setPricingType('Single Payment')}
                                        className={`flex-1 py-3.5 px-4 rounded-md text-[14px] font-medium cursor-pointer border bg-[#212430] transition-colors ${pricingType === 'Single Payment'
                                            ? ' border-[#535EE1]'
                                            : ' border-[#3B3D5533]'
                                            }`}
                                    >
                                        <h3 className="text-[14px] leading-[20px] font-medium text-left">Single Payment</h3>
                                        <p className="text-[14px] leading-[20px] font-medium text-[#515A69] mt-1 text-left">Charge one-time fee</p>
                                    </button>
                                    <button
                                        onClick={() => setPricingType('Subscription')}
                                        className={`flex-1 py-3.5 px-4 rounded-md text-[14px] font-medium cursor-pointer border bg-[#212430] transition-colors ${pricingType === 'Subscription'
                                            ? 'border-[#535EE1]'
                                            : 'border-[#3B3D5533]'
                                            }`}
                                    >
                                        <h3 className="text-[14px] leading-[20px] font-medium text-left">Subscription</h3>
                                        <p className="text-[14px] leading-[20px] font-medium text-[#515A69] mt-1 text-left">Charge an ongoing fee</p>
                                    </button>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5'>
                                    <CustomDropdown
                                        label="Currency"
                                        value={currency}
                                        options={['EUR', 'USD', 'GBP']}
                                        onChange={setCurrency}
                                    />
                                    <CustomDropdown
                                        label="Pricing"
                                        value={pricing}
                                        options={['USD', 'EUR', 'GBP']}
                                        onChange={setPricing}
                                    />
                                </div>

                                <InputField
                                    label="Tax Category"
                                    placeholder="Name"
                                    value={taxCategory}
                                    onChange={(e) => setTaxCategory(e.target.value)}
                                    className="w-full"
                                    inputClassName="bg-[#212430] h-[38px] placeholder:text-[#727A89]"
                                />

                                <div className="mt-[22px] flex items-center justify-between gap-3">
                                    <h3 className="text-[#515A69] text-[14px] font-medium">Tax Behavior</h3>
                                    <button
                                        type="button"
                                        onClick={() => setTaxBehavior(taxBehavior === 'Inclusive' ? 'Exclusive' : 'Inclusive')}
                                        className={`relative inline-flex h-[28px] w-[57px] items-center rounded-full transition-colors cursor-pointer ${taxBehavior === 'Inclusive' ? 'bg-[#535EE1]' : 'bg-[#212430]'
                                            }`}
                                    >
                                        <span className={`inline-block h-[19px] w-[19px] transform rounded-full transition-transform ${taxBehavior === 'Inclusive' ? 'translate-x-[32px] bg-white' : 'translate-x-1.5 bg-[#343847]'}`} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Product Image & Status */}
                        <div className=''>
                            {/* Product Image */}
                            <div>
                                <h3 className='text-white text-[14px] font-medium mb-3'>Product Image</h3>
                                <p className='text-[#515A69] text-[14px] leading-[20px] max-w-[384px] mb-5 sm:mb-[31px]'>
                                    Optionally upload an image of your product that will be seen by users in the checkout page
                                </p>

                                <button 
                                    type="button"
                                    onClick={() => document.getElementById('product-image')?.click()}
                                    className='border border-dashed border-[#343744] h-[86px] flex items-center justify-center flex-col w-full rounded-md text-center cursor-pointer'
                                >
                                    <Image src='/assets/icons/image-upload.svg' alt='image-upload' width={23} height={23} />
                                    <p className='text-[#515A69] text-[14px] leading-[20px] font-medium mt-1.5'>Upload Image</p>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                        id="product-image"
                                    />
                                </button>

                                {/* Image Preview Area */}
                                <div className='mt-6 sm:mt-10 max-w-[225px] w-full mx-auto bg-[#212430] p-3 rounded-md'>
                                    {imagePreview ? (
                                        <div className='relative'>
                                            <div className='overflow-hidden'>
                                                <img
                                                    src={imagePreview}
                                                    alt="Product preview"
                                                    className="w-full h-fit object-contain"
                                                />
                                            </div>
                                            <div className='flex items-center justify-center mt-3'>
                                                <div className='flex gap-2'>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleImageUpload}
                                                        className="hidden"
                                                        id="change-image"
                                                    />
                                                    <label
                                                        htmlFor="change-image"
                                                        className="bg-[#535EE1] hover:bg-[#4A52D9] text-white px-3 py-1 rounded-md text-[12px] font-medium cursor-pointer transition-colors"
                                                    >
                                                        Change
                                                    </label>
                                                    <button
                                                        onClick={handleRemoveImage}
                                                        className="bg-[#EF4444] hover:bg-[#DC2626] text-white px-3 py-1 rounded-md text-[12px] font-medium transition-colors"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='w-full h-[219px] bg-[#212430] rounded-md flex items-center justify-center'>
                                            
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className='mt-6 mb-6 sm:mb-10 md:mb-[60px]'>
                                <CustomDropdown
                                    label="Product Status"
                                    value={productStatus}
                                    options={['Active', 'Inactive', 'Draft']}
                                    onChange={setProductStatus}
                                />
                            </div>

                            <div className='w-full flex items-end justify-end'>
                                <Button
                                    onClick={async () => {
                                        setIsLoading(true)
                                        // Simulate API call
                                        setTimeout(() => {
                                            console.log('Create Product:', {
                                                productName,
                                                returnUrl,
                                                description,
                                                pricingType,
                                                currency,
                                                pricing,
                                                productStatus,
                                                taxCategory,
                                                taxBehavior,
                                                productImage: productImage?.name,
                                                imagePreview: imagePreview ? 'Image uploaded' : 'No image'
                                            })
                                            setIsLoading(false)
                                            onClose()
                                        }, 1500)
                                    }}
                                    loading={isLoading}
                                    loadingText="Creating..."
                                    disabled={isLoading}
                                    className='bg-[#535EE1] hover:bg-[#4A52D9] text-white px-6 w-[256px] h-[38px] rounded-md text-[13px] font-medium flex items-center gap-1.5'
                                >
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6875 6C10.6875 6.14918 10.6282 6.29226 10.5227 6.39775C10.4173 6.50324 10.2742 6.5625 10.125 6.5625H6.5625V10.125C6.5625 10.2742 6.50324 10.4173 6.39775 10.5227C6.29226 10.6282 6.14918 10.6875 6 10.6875C5.85082 10.6875 5.70774 10.6282 5.60225 10.5227C5.49676 10.4173 5.4375 10.2742 5.4375 10.125V6.5625H1.875C1.72582 6.5625 1.58274 6.50324 1.47725 6.39775C1.37176 6.29226 1.3125 6.14918 1.3125 6C1.3125 5.85082 1.37176 5.70774 1.47725 5.60225C1.58274 5.49676 1.72582 5.4375 1.875 5.4375H5.4375V1.875C5.4375 1.72582 5.49676 1.58274 5.60225 1.47725C5.70774 1.37176 5.85082 1.3125 6 1.3125C6.14918 1.3125 6.29226 1.37176 6.39775 1.47725C6.50324 1.58274 6.5625 1.72582 6.5625 1.875V5.4375H10.125C10.2742 5.4375 10.4173 5.49676 10.5227 5.60225C10.6282 5.70774 10.6875 5.85082 10.6875 6Z" fill="white" />
                                    </svg>
                                    Create product
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProductModal