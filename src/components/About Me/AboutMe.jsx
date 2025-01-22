
function AboutMe() {
    return (
        <div id="about" className='relative px-4 sm:px-10'>
            <div className="mt-[120px] relative flex flex-col xl:flex-row gap-[64px] xl:gap-[148px]">
                <div className='flex flex-col items-center w-full xl:w-1/2'>
                    <img src="/assets/about_me_photo.png" className='h-auto object-cover' alt='developer' />
                </div>
                <div className='xl:w-1/2 flex flex-col justify-center items-center'>
                    <div className="mt-6">
                        <div className="top-0 order-last -mb-3 pt-3 ">
                            <p className="font-semibold text-[45px] lg:text-[65px] leading-[98px]">About Me</p>
                            <p className="font-normal text-[21px] leading-8 mt-[15px]">
                                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
                            </p>
                        </div>
                        <div className='mt-6'>
                            <div className="flex flex-col gap-[30px]">

                                <div className="flex flex-col">
                                    <label for="ux" className="text-[24px] leading-9 font-semibold tracking-[0.03em]">UX</label>
                                    <div className='relative flex items-center h-3'>
                                        <div
                                            className="w-full z-5 h-3 mt-[18px] bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                                        />
                                        <div className='h-3 bg-[#FD6F00] absolute top-2 rounded-lg left-0 right-10 z-10'></div>
                                        <div className='h-[32px] w-[32px] bg-[#EDECEC] border-[3px] drop-shadow-lg rounded-full border-[#FD6F00] absolute -top-[0.5px] right-10 z-10'></div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label for="website-design" className="text-[24px] leading-9 font-semibold tracking-[0.03em]">Website Design</label>
                                    <div className='relative flex items-center h-3'>
                                        <div
                                            className="w-full z-5 h-3 mt-[18px] bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                                        />
                                        <div className='h-3 bg-[#FD6F00] absolute top-2 rounded-lg left-0 right-16 z-10'></div>
                                        <div className='h-[32px] w-[32px] bg-[#EDECEC] border-[3px] drop-shadow-lg rounded-full border-[#FD6F00] absolute -top-[0.5px] right-16 z-10'></div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label for="app-design" className="text-[24px] leading-9 font-semibold tracking-[0.03em]">App Design</label>
                                    <div className='relative flex items-center h-3'>
                                        <div
                                            className="w-full z-5 h-3 mt-[18px] bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                                        />
                                        <div className='h-3 bg-[#FD6F00] absolute top-2 rounded-lg left-0 right-10 z-10'></div>
                                        <div className='h-[32px] w-[32px] bg-[#EDECEC] border-[3px] drop-shadow-lg rounded-full border-[#FD6F00] absolute -top-[0.5px] right-4 z-10'></div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label for="graphic-design" className="text-[24px] leading-9 font-semibold tracking-[0.03em]">Graphic Design</label>
                                    <div className='relative flex items-center h-3'>
                                        <div
                                            className="w-full z-5 h-3 mt-[18px] bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                                        />
                                        <div className='h-3 bg-[#FD6F00] absolute top-2 rounded-lg left-0 right-10 z-10'></div>
                                        <div className='h-[32px] w-[32px] bg-[#EDECEC] border-[3px] drop-shadow-lg rounded-full border-[#FD6F00] absolute -top-[0.5px] right-10 z-10'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
