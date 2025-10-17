import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel1() {
    const imagesTop = [
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1639825988283-39e5408b75e8?auto=format&fit=crop&w=1200&q=80",
    ];

    return (
        <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-r from-orange-600 to-yellow-400 min-h-screen">
            <h1 className="font-sans font-bold text-center text-5xl text-red-700 p-4">Carousel 1</h1>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="rounded-2xl w-[60%] shadow-lg"
            >
                {imagesTop.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img src={src} alt={`Slide ${i}`} className="w-full h-[600px] object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
