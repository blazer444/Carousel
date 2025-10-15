import { useState, useEffect } from "react";

const images = [
    "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1102",
    "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1246",
    "https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172",
    "https://images.unsplash.com/photo-1639825988283-39e5408b75e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1205",
];


export default function Carousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className="w-full flex-shrink-0"
                    />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white rounded-full p-2"
            >
                ‹
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white rounded-full p-2"
            >
                ›
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${current === index ? "bg-white scale-125" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
