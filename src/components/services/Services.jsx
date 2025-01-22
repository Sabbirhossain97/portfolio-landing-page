import { UI, Web, App, Graphic } from '../SVG/SVGComponents'

function Services() {
    return (
        <div id="services" className='relative py-20 px-4 sm:px-10'>
            <div className="mx-auto">
                <h2
                    className="text-center font-semibold text-[45px] lg:text-[65px] leading-[98px] tracking-[0.03em]">
                    Services
                </h2>
                <h3 className='text-center mt-[15px] font-normal text-[21px] leading-[32px] tracking-[0.03em] px-4 sm:px-10 md:px-[120px] lg:px-[240px]'>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
                </h3>
                <div className="flex flex-col items-center mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
                        <div className="relative bg-[#F8F8F8] rounded-[14px] col-span-1 flex flex-col justify-center items-center">
                            <div className='flex flex-col justify-start px-[18px] pt-[60px] pb-[10px]'>
                                <UI />
                                <p className='font-semibold mt-6 text-[32px] leading-[48px] tracking-[0.03em]'>UI/UX</p>
                                <p className='font-normal mt-[15px] text-[19px] leading-7 tracking-[0.03em]'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                            </div>
                        </div>
                        <div className="relative bg-[#F8F8F8] rounded-[14px] col-span-1 flex flex-col justify-center items-center">
                            <div className='flex flex-col justify-start px-[18px] pt-[60px] pb-[10px]'>
                                <Web />
                                <p className='font-semibold mt-6 text-[32px] leading-[48px] tracking-[0.03em]'>Web Design</p>
                                <p className='font-normal mt-[15px] text-[19px] leading-7 tracking-[0.03em]'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                            </div>
                        </div>
                        <div className="relative bg-[#F8F8F8] rounded-[14px] col-span-1 flex flex-col justify-center items-center">
                            <div className='flex flex-col justify-start px-[18px] pt-[60px] pb-[10px]'>
                                <App />
                                <p className='font-semibold mt-6 text-[32px] leading-[48px] tracking-[0.03em]'>App Design</p>
                                <p className='font-normal mt-[15px] text-[19px] leading-7 tracking-[0.03em]'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                            </div>
                        </div>
                        <div className="relative bg-[#F8F8F8] rounded-[14px] col-span-1 flex flex-col justify-center items-center">
                            <div className='flex flex-col justify-start px-[18px] pt-[60px] pb-[10px]'>
                                <Graphic />
                                <p className='font-semibold mt-6 text-[32px] leading-[48px] tracking-[0.03em]'>Graphic Design</p>
                                <p className='font-normal mt-[15px] text-[19px] leading-7 tracking-[0.03em]'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services