"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './ui/Button'
import Logo from './ui/Logo'

const VerificationCode = () => {
    const [isVerifying, setIsVerifying] = useState(false)
    const [isResending, setIsResending] = useState(false)
    const [code, setCode] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!code.trim()) return

        setIsVerifying(true)

        // Simulate API call
        setTimeout(() => {
            setIsVerifying(false)
            // Handle verification result here
            console.log('Verifying code:', code)
        }, 2000)
    }

    const handleResendCode = async () => {
        setIsResending(true)

        // Simulate API call
        setTimeout(() => {
            setIsResending(false)
            setCode('') // Clear code
        }, 1500)
    }

    return (
        <div className='min-h-screen w-full px-4 flex flex-col'>
            <div className='pt-8 pl-0 sm:pl-7 md:pl-10 lg:pl-16'>
                <Logo />
            </div>
            <div className='flex-1 flex items-center justify-center py-8'>
                <div className='border border-[#3B3D5533] bg-[#13151E] rounded-[10px] w-full max-w-[592px] mx-auto py-6 sm:py-14 px-5 sm:px-6 hover:shadow-lg transition-all duration-300'>
                    <div className='max-w-[442px] w-full mx-auto'>
                        <h2 className='text-white text-[23px] font-semibold mb-2'>Enter Code</h2>
                        <p className='text-[#515A69] text-[16px] font-medium'>Enter code sent in your email</p>

                        <form onSubmit={handleSubmit}>
                            <div className=''>
                                <div className='mt-10'>
                                    <label htmlFor="code" className='block text-white text-[16px] font-medium mb-4 transition-colors duration-200'>
                                        Code
                                    </label>
                                    <input
                                        type="text"
                                        id="code"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        placeholder="Code"
                                        disabled={isVerifying || isResending}
                                        className='w-full px-4 py-2.5 bg-[#191C27] rounded-md text-[16px] font-medium text-white placeholder-[#515A69] focus:outline-none focus:ring-2 focus:ring-[#5A66E8] focus:border-transparent transition-all duration-200 hover:bg-[#1F2330] disabled:opacity-50 disabled:cursor-not-allowed'
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    loading={isVerifying}
                                    loadingText="Verifying..."
                                    disabled={isVerifying || isResending || !code.trim()}
                                    fullWidth
                                    className='w-full mt-8 sm:mt-12 h-[45px] bg-[#5A66E8] text-white text-[17px] font-medium cursor-pointer rounded-md'
                                >
                                    Continue
                                </Button>
                            </div>
                        </form>

                        <div className='relative mb-[30px] mt-10 sm:mt-[60px]'>
                            <div className='absolute inset-0 flex items-center'>
                                <div className='w-full border-t border-[#FFFFFF1A]'></div>
                            </div>
                            <div className='relative flex justify-center'>
                                <span className='px-[15px] bg-[#13151E] text-[14px] font-medium leading-[18px] text-[#515A69]'>Didn't receive?</span>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            onClick={handleResendCode}
                            loading={isResending}
                            loadingText="Sending..."
                            disabled={isVerifying || isResending}
                            fullWidth
                        >
                            Send Code Again
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificationCode