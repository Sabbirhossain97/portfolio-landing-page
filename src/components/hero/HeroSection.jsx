import { Facebook, Twitter, Instagram, LinkedIn } from '../SVG/SVGComponents'

function HeroSection() {
    return (
        <div id="hero" className='relative px-4 sm:px-10'>
            <div className="mt-[120px] relative flex flex-col xl:flex-row gap-[148px]">
                <div className='xl:w-1/2 flex flex-col justify-center items-center'>
                    <div className="mt-6">
                        <div className="text-center xl:text-left">
                            <p className="font-semibold text-[24px] leading-9">Hi I am </p>
                            <p className="text-[32px] leading-[48px] font-semibold text-[#FD6F00]">Muhammad Umair  </p>
                            <p className="font-bold text-[84px] sm:text-[100px] leading-[100px] sm:leading-[120px]">UI & UX </p>
                            <p className="font-bold text-[84px] sm:text-[100px] leading-[100px] sm:leading-[120px] xl:text-right">Designer</p>
                            <p className="font-normal text-[21px] leading-8 mt-7 px-4 sm:px-10 md:px-[120px] xl:px-0">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                        </div>
                        <div className='mt-12 xl:mt-6 gap-6 px-4 sm:px-0 flex flex-col sm:flex-row justify-center xl:justify-start'>
                            <button className='rounded-[5px] w-full block 2xl:hidden sm:w-[188px] h-14 transition duration-300 bg-[#FD6F00] hover:bg-[#ff8b32f3] text-[21px] leading-8 text-white'>Download CV</button>
                            <button className='rounded-[5px] w-full sm:w-[188px] h-14 bg-[#FD6F00] transition duration-300 hover:bg-[#ff8b32f3] text-[21px] leading-8 text-white'>Hire Me</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center xl:w-1/2'>
                    <img src="/assets/hero_section_photo.png" className='h-auto object-cover' alt='developer' />
                    <div className='flex mt-[26px] items-center gap-6'>
                        <Facebook className="hover:text-[#FD6F00]" />
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