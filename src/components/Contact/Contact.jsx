import React from 'react'

function Contact() {
    return (
        <div className='pb-[140px]'>
            <h2
                className="text-center font-semibold text-[65px] leading-[98px] tracking-[0.03em]">
                Lets Design Together
            </h2>
            <h3 className='text-center mt-[15px] font-normal text-[21px] leading-[32px] tracking-[0.03em] px-[240px]'>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
            </h3>
            <div className='flex justify-center gap-6 mt-16'>
                <input placeholder='Enter Your Email' className='bg-[#F8F8F8] placeholder:text-[#797979] indent-6 h-[75px] rounded-[14px] border border-[#AFAFAF] w-[600px]'/>
                <button className='rounded-[14px] whitespace-nowrap bg-[#FD6F00] text-[21px] py-5 px-9 leading-8 text-white'>Contact Me</button>
            </div>
        </div>
    )
}

export default Contact