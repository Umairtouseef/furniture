import { useState } from "react";
import { FaStar, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
    "Cannabis Oils",
    "Pre Rolls",
    "Marijuana Edibles",
    "Marijuana Weeds",
    "CBD Oils",
    "Marijuana Seeds",
];

const products = [
    {
        id: 1,
        category: "Cannabis Oils",
        name: "Hybrid Kimber",
        price: "$260.00",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
    },
    {
        id: 2,
        category: "Cannabis Oils",
        name: "Black Cherry Soda",
        price: "$250.30",
        oldPrice: "$290.00",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
        isNew: true,
    },
    {
        id: 3,
        category: "Cannabis Oils",
        name: "Hybrid Blue Dream",
        price: "$260.80",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
        isNew: true,
    },
    {
        id: 4,
        category: "Marijuana Edibles",
        name: "Hybrid Kimber",
        price: "$260.00",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
    },
    {
        id: 5,
        category: "Marijuana Edibles",
        name: "Black Cherry Soda",
        price: "$250.30",
        oldPrice: "$290.00",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
        isNew: true,
    },
    {
        id: 6,
        category: "CBD Oils",
        name: "Hybrid Blue Dream",
        price: "$260.80",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
        isNew: true,
    },
    {
        id: 7,
        category: "Cannabis Oils",
        name: "Hybrid Blue Dream",
        price: "$260.80",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
        isNew: true,
    }, {
        id: 8,
        category: "Cannabis Oils",
        name: "Hybrid Blue Dream",
        price: "$260.80",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
        isNew: true,
    }, {
        id: 9,
        category: "Cannabis Oils",
        name: "Hybrid Blue Dream",
        price: "$260.80",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
        isNew: true,
    },
];



const ProductFilter = () => {
    const [activeCategory, setActiveCategory] = useState("Cannabis Oils");

    const filteredProducts = products.filter(
        (product) => product.category === activeCategory
    );

    return (
        <div className="relative  p-10 flex flex-col lg:flex-row w-[100%]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://themes.pixelstrap.com/multikart/assets/images/marijuana/full-banner/1.jpg')" }}
            />
            <div className="absolute inset-0 bg-black opacity-60" />

            <div className="relative flex flex-col lg:flex-row gap-8 w-[100%]">

                <aside className="w-full lg:w-[25%] p-6 text-white z-10">
                    <h2 className="text-h2 font-bold text-tertiary">Our Shop</h2>
                    <h3 className="text-h2 font-medium mt-2 mb-4">Buy Products</h3>

                    <ul className="border-t border-gray-500 pt-4 flex lg:flex-col overflow-x-auto space-x-4 lg:space-x-0 lg:space-y-3 scrollbar-hide">
                        {categories.map((category) => (
                            <li
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`cursor-pointer text-h4 py-2 border-b lg:border-none border-gray-500 transition-colors whitespace-nowrap ${activeCategory === category ? "text-tertiary font-bold" : "text-white"
                                    }`}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="w-full lg:w-[75%]">
                    {filteredProducts.length > 0 ? (
                        <>

                            <Swiper
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                    1280: { slidesPerView: 4 },
                                }}
                                spaceBetween={20}
                                autoplay={{ delay: 3000 }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                modules={[Autoplay, Navigation]}
                                className="w-full relative"
                            >
                                {filteredProducts.map((product) => (
                                    <SwiperSlide key={product.id} className="flex justify-center">
                                        <div className="relative group border rounded-lg overflow-hidden shadow-md hover:shadow-lg bg-white w-full max-w-[350px]">
                                            <div className="relative w-full h-64">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <button className="bg-white mb-3 p-3 md:p-4 rounded-full transition duration-300 hover:bg-gray-200">
                                                        <FaSearch size={15} className="text-secondary" />
                                                    </button>
                                                </div>
                                                <div className="absolute bottom-2 left-2 right-2 flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                                    <button className="bg-white text-secondary px-6 py-2 mb-2 transition duration-300 hover:bg-gray-200">
                                                        Add to Cart
                                                    </button>
                                                    <div className="flex gap-4">
                                                        <button className="bg-white p-3 md:p-4 rounded-full transition duration-300 hover:bg-gray-200">
                                                            <FaHeart size={15} className="text-secondary" />
                                                        </button>
                                                        <button className="bg-white p-3 md:p-4 rounded-full transition duration-300 hover:bg-gray-200">
                                                             <FaShoppingCart size={15} className="text-secondary" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 text-center">
                                                <div className="flex justify-center space-x-1 text-yellow-500 mb-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"}>
                                                            ★
                                                        </span>
                                                    ))}
                                                </div>
                                                <h3 className="text-lg font-semibold text-heading">{product.name}</h3>
                                                <p className="text-grayText">
                                                    <span className="text-black font-bold">{product.price}</span>
                                                    {product.oldPrice && <span className="text-gray-500 line-through ml-2">{product.oldPrice}</span>}
                                                </p>
                                            </div>

                                        </div>

                                    </SwiperSlide>

                                ))}
                                <div className="swiper-button-prev text-white text-bold !top-1/2 -translate-y-1/2  !text-6xl"></div>
                                <div className="swiper-button-next text-white text-bold  !top-1/2 -translate-y-1/2  !text-6xl"></div>

                            </Swiper>


                        </>

                    ) : (
                        <div className="flex justify-center items-center w-full ">
                            <p className="text-tertiary text-lg font-bold">No products found.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ProductFilter;
