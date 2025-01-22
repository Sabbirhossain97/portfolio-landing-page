import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { testimonials } from '../../helpers/testimonials';

function Testimonials() {

    return (
        <div id="testimonials" className="mx-auto py-36 px-4 sm:px-10">
            <h2
                className="text-center font-semibold text-[45px] lg:text-[65px] leading-[98px] tracking-[0.03em]">
                Testimonials
            </h2>
            <h3 className='text-center mt-[15px] font-normal text-[21px] leading-[32px] tracking-[0.03em] md:px-[120px] lg:px-[240px]'>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
            </h3>
            <Swiper
                modules={[Pagination]}
                spaceBetween={60}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1.5,
                    },
                }}
                pagination={{ clickable: true }}
                initialSlide={1}
                centeredSlides={true}
                className="w-full mx-auto mt-20"
                style={{
                    "--swiper-pagination-color": "#FD6F00",
                    "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "20px",
                    "--swiper-pagination-bullet-horizontal-gap": "9px",
                    "--swiper-pagination-bullet-width": "36px",
                    "--swiper-pagination-bullet-border-radius": "6px",
                    "--swiper-pagination-bullet-height": "10px",

                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full rounded-[14px] mt-[72px]">
                            <div className="flex flex-col items-center xl:flex-row justify-center gap-7 py-14 px-6 md:px-10 xl:pl-12 xl:pr-[77px] bg-[#F8F8F8]">
                                <div className="w-full xl:w-1/4 flex justify-center">
                                    <img src={testimonial.image} />
                                </div>
                                <div className="w-full xl:w-3/4 text-center xl:text-left">
                                    <span className="relative text-[21px] before:content-['“'] after:content-['”'] before:text-orange-500 before:text-3xl after:text-3xl after:text-orange-500 before:absolute before:-top-4 before:-left-3 after:absolute after:-bottom-6 after:-right-4">
                                        {testimonial.quote}
                                    </span>
                                    <div className="mt-4">
                                        <p className="text-[24px] font-medium leading-9 tracking-[0.02em]">{testimonial.name}</p>
                                        <p className="font-normal text-[19px] leading-7 tracking-[0.02em]">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimonials