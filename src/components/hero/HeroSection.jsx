import React from 'react'
import { Facebook, Twitter,Instagram,LinkedIn } from '../SVG/SVGComponents'

function HeroSection() {
    return (
        <div className='relative'>
            <div className="mt-[120px] relative flex flex-col lg:flex-row gap-[148px]">
                <div className='lg:w-1/2 flex flex-col justify-center items-center'>
                    <div className="mt-6">
                        <div className="top-0 order-last -mb-3 pt-3 ">
                            <p className="font-semibold text-[24px] leading-9">Hi I am </p>
                            <p className="text-[32px] leading-[48px] font-semibold text-[#FD6F00]">Muhammad Umair  </p>
                            <p className="font-bold text-[100px] leading-[120px]">UI & UX </p>
                            <p className="font-bold text-[100px] leading-[120px] text-right">Designer</p>
                            <p className="font-normal text-[21px] leading-8 mt-7">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                        </div>
                        <div className='mt-6'>
                            <div className="flex gap-6">
                                <button className='rounded-[5px] w-[188px] h-14 bg-[#FD6F00] text-[21px] leading-8 text-white'>Hire Me</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:w-1/2'>
                    <img src="/assets/hero_section_photo.png" className='h-auto object-cover' alt='developer' />
                     <div className='flex mt-[26px] items-center gap-6'>
                        <Facebook/>
                        <Twitter />
                        <Instagram />
                        <LinkedIn />
                     </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection