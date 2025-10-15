import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Carousels() {
    const imagesTop = [
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=1102",
        "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=1246",
        "https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=1172",
        "https://images.unsplash.com/photo-1639825988283-39e5408b75e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=1205",
    ];

    const imagesBottom = [
        "https://images.unsplash.com/photo-1629339941379-da30348cdba6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=1172",
        "https://images.unsplash.com/photo-1629339938591-ec5e73815e47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=1172",
        "https://images.unsplash.com/photo-1639729275509-1c5dc3748e77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=1191",
        "https://images.unsplash.com/photo-1630048421776-1f552787465d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=1172",
        "https://images.unsplash.com/photo-1634386708556-f1a553527aa0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=1171",
        "https://images.unsplash.com/photo-1613575998061-0f59337425f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=687",
        "https://images.unsplash.com/photo-1621264448270-9ef00e88a935?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=657",
        "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=1172",
        "https://images.unsplash.com/photo-1621504450187-89f5076d4355?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800&fit=crop&q=80&w=687",
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-10 p-10 bg-gradient-to-r from-orange-600 to-yellow-400 min-h-screen">
            <div className="w-[60%] rounded-2xl overflow-hidden shadow-lg">
                <h1 className="font-sans font-bold text-center text-5xl text-red-700 p-4">Carousel</h1>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="rounded-2xl"
                >
                    {imagesTop.map((src, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={src}
                                alt={`Slide ${i}`}
                                className="w-full h-[600px] object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="w-[80%] rounded-2xl overflow-hidden shadow-lg">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className="rounded-2xl"
                >
                    {imagesBottom.map((src, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={src}
                                alt={`Slide ${i}`}
                                className="w-full h-[400px] object-cover bg-black rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
