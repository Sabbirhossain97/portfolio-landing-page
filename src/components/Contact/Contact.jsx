
function Contact() {
    return (
        <div id="contact" className='pb-[140px] px-10 md:px-0'>
            <h2
                className="text-center font-semibold text-[45px] lg:text-[65px] leading-0 lg:leading-[98px] tracking-[0.03em]">
                Lets Design Together
            </h2>
            <h3 className='text-center mt-[15px] font-normal text-[21px] leading-[32px] tracking-[0.03em] px-4 sm:px-10 md:px-[120px] lg:px-[240px]'>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
            </h3>
            <div className='flex flex-col items-center lg:flex-row justify-center gap-6 mt-16'>
                <input placeholder='Enter Your Email' className='bg-[#F8F8F8] focus:outline-none transition duration-300 focus:border-[#FD6F00] placeholder:text-[#797979] indent-6 h-[75px] rounded-[14px] border border-[#AFAFAF] w-full sm:w-3/4 lg:w-[600px]'/>
                <button className='rounded-[14px] whitespace-nowrap transition duration-300 bg-[#FD6F00] hover:bg-[#ff8b32f3] text-[21px] py-5 px-9 w-full sm:w-auto leading-8 text-white'>Contact Me</button>
            </div>
        </div>
    )
}

export default Contact