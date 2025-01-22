import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

function Testimonials() {

    const testimonials = [
        {
            image: "assets/testimonial1.png",
            quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices",
            name: "Name",
            title: "CEO",
        },
        {
            image: "assets/testimonial2.png",
            quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices",
            name: "Name",
            title: "CEO",
        },
        {
            image: "assets/testimonial1.png",
            quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices",
            name: "Name",
            title: "CEO",
        },
        {
            image: "assets/testimonial2.png",
            quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices",
            name: "Name",
            title: "CEO",
        },
    ];

    return (
        <div className="mx-auto py-36">
            <h2
                className="text-center font-semibold text-[65px] leading-[98px] tracking-[0.03em]">
                Testimonials
            </h2>
            <h3 className='text-center mt-[15px] font-normal text-[21px] leading-[32px] tracking-[0.03em] px-[240px]'>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
            </h3>
            <Swiper
                modules={[Pagination]}
                spaceBetween={60}
                slidesPerView={1.5}
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
                            <div className="flex items-center justify-center gap-7 py-14 pl-12 pr-[77px] bg-[#F8F8F8]">
                                <div className="w-1/4">
                                    <img src={testimonial.image} />
                                </div>
                                <div className="w-3/4">
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