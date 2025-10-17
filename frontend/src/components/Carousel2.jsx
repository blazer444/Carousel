import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Carousel2() {
    const imagesBottom = [
        "https://images.unsplash.com/photo-1629339941379-da30348cdba6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1629339938591-ec5e73815e47?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1639729275509-1c5dc3748e77?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1630048421776-1f552787465d?auto=format&fit=crop&w=1200&q=80",
    ];

    return (
        <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-r from-orange-600 to-yellow-400 min-h-screen">
            <h1 className="font-sans font-bold text-center text-5xl text-red-700 p-4">Carousel 2</h1>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                loop
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="rounded-2xl w-[80%] shadow-lg"
            >
                {imagesBottom.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img src={src} alt={`Slide ${i}`} className="w-full h-[400px] object-cover rounded-xl" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
