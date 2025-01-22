import React from 'react'
import { Facebook, Twitter, Instagram, LinkedIn } from '../SVG/SVGComponents'

function Footer() {

    const navigation = [
        { Name: 'Home' },
        { Name: 'About Me' },
        { Name: 'Services' },
        { Name: 'Projects' },
        { Name: 'Testimonials' },
        { Name: 'Contact' },
    ]

    return (
        <footer className='bg-[#F8F8F8] relative left-0 right-0 bottom-0'>
            <div className='flex items-center justify-center gap-4 pt-[109px]'>
                <img src="/assets/logo.png" alt="logo" className='w-[65px] h-[65px]' />
                <h1 className="font-montserrat leading-[58px] text-[#1E1E1E] flex gap-1 font-bold whitespace-nowrap tracking-[1px] text-[48px]">
                    M<span className='font-normal text-[#545454]'>umair</span>
                </h1>
            </div>
            <div className="flex items-center justify-center space-x-8 mt-16">
                {navigation.map((item, key) =>
                (
                    <li
                        key={key}
                        className="list-none rounded-md p-0.5 transition duration-300"
                    >
                        <p className='text-[21px] leading-8'>{item.Name}</p>
                    </li>
                )
                )}
            </div>
            <div className='flex flex-col items-center mt-20'>
                <div className='flex items-center gap-6'>
                    <Facebook />
                    <Twitter />
                    <Instagram />
                    <LinkedIn />
                </div>
            </div>
            <div className='bg-[#545454] text-center text-[21px] leading-8 font-normal tracking-[0.03em] py-[26px] mt-[60px]'>
                <h3 className='text-white'>© 2023 <span className='text-[#FD6F00] font-bold text-[21px] leading-8 tracking-[0.03em]'>Mumair</span> All Rights Reserved , Inc.</h3>
            </div>
        </footer>
    )
}

export default Footer