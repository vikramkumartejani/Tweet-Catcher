import Link from 'next/link'
import React, { useState } from 'react'
import Button from './ui/Button'
import GoogleButton from './ui/GoogleButton'
import Logo from './ui/Logo'

const Login = () => {
    const [isEmailLoading, setIsEmailLoading] = useState(false)
    const [isGoogleLoading, setIsGoogleLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsEmailLoading(true)

        setTimeout(() => {
            setIsEmailLoading(false)
        }, 2000)
    }

    const handleGoogleLogin = async () => {
        setIsGoogleLoading(true)

        setTimeout(() => {
            setIsGoogleLoading(false)
        }, 1500)
    }

    return (
        <div className='min-h-screen w-full'>
            <div className='pt-8 pl-4 sm:pl-7 md:pl-10 lg:pl-16'>
                <Logo />
            </div>
            <div className='my-14 md:my-[112px] w-full flex items-center justify-center'>
                <div className='border border-[#3B3D5533] bg-[#13151E] rounded-[10px] w-full max-w-[592px] mx-auto py-14 px-6 hover:shadow-lg transition-all duration-300'>
                    <div className='max-w-[442px] w-full mx-auto'>
                        <h2 className='text-white text-[23px] font-semibold mb-2'>Log In</h2>
                        <p className='text-[#515A69] text-[16px] font-medium'>Log into your account to have access</p>

                        <form onSubmit={handleSubmit}>
                            <div className=''>
                                <div className='mt-10'>
                                    <label htmlFor="email" className='block text-white text-[16px] font-medium mb-4 transition-colors duration-200'>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email Address"
                                        disabled={isEmailLoading || isGoogleLoading}
                                        className='w-full px-4 py-3 bg-[#191C27] rounded-md text-[16px] font-medium text-white placeholder-[#515A69] focus:outline-none focus:ring-2 focus:ring-[#5A66E8] focus:border-transparent transition-all duration-200 hover:bg-[#1F2330] disabled:opacity-50 disabled:cursor-not-allowed'
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    loading={isEmailLoading}
                                    loadingText="Logging in..."
                                    disabled={isEmailLoading || isGoogleLoading || !email}
                                    fullWidth
                                    className='mt-12'
                                >
                                    Log In
                                </Button>
                            </div>
                        </form>

                        <div className='relative mb-[30px] mt-[60px]'>
                            <div className='absolute inset-0 flex items-center'>
                                <div className='w-full border-t border-[#FFFFFF1A]'></div>
                            </div>
                            <div className='relative flex justify-center'>
                                <span className='px-[15px] bg-[#13151E] text-[14px] font-medium leading-[18px] text-[#515A69]'>Or continue with</span>
                            </div>
                        </div>

                        <GoogleButton
                            onClick={handleGoogleLogin}
                            loading={isGoogleLoading}
                            disabled={isEmailLoading || isGoogleLoading}
                        />

                        <div className='text-center mt-10'>
                            <p className='text-[#515A69] text-[15px] font-medium'>
                                Already have an account?{' '}
                                <Link href="/sign-up" className='text-[#5A66E8] hover:underline transition-all duration-200 hover:text-[#4A56D8]'>
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login