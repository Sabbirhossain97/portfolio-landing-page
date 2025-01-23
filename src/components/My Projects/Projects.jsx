import React from 'react'

function Projects() {
    return (
        <div id="projects" className='relative py-20 px-4 sm:px-10'>
            <div className="mx-auto">
                <h2
                    className="text-center font-semibold text-[45px] lg:text-[65px] leading-[98px] tracking-[0.03em]">
                    My Projects
                </h2>
                <h3 className='text-center mt-[15px] font-normal text-[21px] leading-[32px] tracking-[0.03em] px-4 sm:px-10 md:px-[120px] lg:px-[240px]'>
                    Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus
                </h3>
                <div className='flex justify-center flex-wrap gap-[22px] mt-14'>
                    <button className='text-center transition duration-300 bg-[#F8F8F8] border-[0.5px] border-[#545454] hover:bg-[#FD6F00] hover:text-white rounded-xl text-[24px] font-normal leading-9 tracking-[0.03em] px-5 py-[10px]'>All</button>
                    <button className='text-center transition duration-300 bg-[#F8F8F8] border-[0.5px] border-[#545454] hover:bg-[#FD6F00] hover:text-white rounded-xl text-[24px] font-normal leading-9 tracking-[0.03em] px-5 py-[10px]'>UI/UX</button>
                    <button className='text-center transition duration-300 bg-[#F8F8F8] border-[0.5px] border-[#545454] hover:bg-[#FD6F00] hover:text-white rounded-xl text-[24px] font-normal leading-9 tracking-[0.03em] px-5 py-[10px]'>Web Design</button>
                    <button className='text-center transition duration-300 bg-[#F8F8F8] border-[0.5px] border-[#545454] hover:bg-[#FD6F00] hover:text-white rounded-xl text-[24px] font-normal leading-9 tracking-[0.03em] px-5 py-[10px]'>App Design</button>
                    <button className='text-center transition duration-300 bg-[#F8F8F8] border-[0.5px] border-[#545454] hover:bg-[#FD6F00] hover:text-white rounded-xl text-[24px] font-normal leading-9 tracking-[0.03em] px-5 py-[10px]'>Graphic Design</button>
                </div>
                <div className="flex flex-col items-center mt-24">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 custom:grid-cols-3 gap-[44px]">
                        <div className="relative rounded-[14px] col-span-1 sm:w-[440px] sm:h-[601px] flex flex-col">
                            <div className='h-[489px] bg-[#FFEBDB] rounded-xl relative overflow-hidden'>
                                <div className='absolute -bottom-3 left-[40px] z-10 '>
                                    <img src="assets/web_design_top.png" alt="top" className='h-full' />
                                </div>
                                <div className='absolute -top-2 z-0 right-[27px]'>
                                    <img src="assets/web_design_bottom.png" alt="top" />
                                </div>
                            </div>
                            <div className='flex pt-[36px] h-1/5 flex-col text-black justify-start '>
                                <p className='text-[#FD6F00] text-[19px] font-normal leading-7 tracking-[0.03em]'>Web Design</p>
                                <p className='font-bold text-[24px] leading-9 tracking-[0.03em]'>AirCalling Landing Page Design </p>
                            </div>
                        </div>
                        <div className="relative rounded-[14px] col-span-1 sm:w-[440px] sm:h-[601px] flex flex-col">
                            <div className='h-[489px] bg-[#FFEBDB] rounded-xl relative overflow-hidden'>
                                <div className='absolute -bottom-3 left-[40px] z-10'>
                                    <img src="assets/web_design_2_top.png" alt="top" className='h-full' />
                                </div>
                                <div className='absolute -top-2 z-0 right-[27px]'>
                                    <img src="assets/web_design_2_bottom.png" alt="top" />
                                </div>
                            </div>
                            <div className='flex pt-[36px] h-1/5 flex-col text-black justify-start '>
                                <p className='text-[#FD6F00] text-[19px] font-normal leading-7 tracking-[0.03em]'>Web Design</p>
                                <p className='font-bold text-[24px] leading-9 tracking-[0.03em]'>Business Landing Page Design </p>
                            </div>
                        </div>
                        <div className="relative rounded-[14px] col-span-1 sm:w-[440px] sm:h-[601px] flex flex-col">
                            <div className='h-[489px] bg-[#FFEBDB] rounded-xl relative overflow-hidden'>
                                <div className='absolute -bottom-3 left-[40px] z-10'>
                                    <img src="assets/web_design_3_top.png" alt="top" className='h-full' />
                                </div>
                                <div className='absolute -top-2 z-0 right-[27px]'>
                                    <img src="assets/web_design_3_bottom.png" alt="top" />
                                </div>
                            </div>
                            <div className='flex pt-[36px] h-1/5 flex-col text-black justify-start '>
                                <p className='text-[#FD6F00] text-[19px] font-normal leading-7 tracking-[0.03em]'>Web Design</p>
                                <p className='font-bold text-[24px] leading-9 tracking-[0.03em]'>Ecom Web Page Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects