import React, { useState } from "react";
import { FiShoppingCart, FiRefreshCw } from "react-icons/fi";
import { FaHeart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled);
    };

    return (
        <div className="relative group bg-secondary p-4 rounded-lg shadow-lg">
            {/* Product Image */}
            <div className="relative w-full h-64 bg-primary flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain bg-secondary"
                />

                {/* Wishlist Button */}
                <div className="absolute right-0 top-0 flex flex-col gap-2">
                    <button
                        className="bg-primary p-2 rounded-full shadow hover:bg-primary transition"
                        onClick={handleHeartClick}
                    >
                        <FaHeart
                            className={`w-5 h-5 ${isHeartFilled ? "text-white" : "text-gray-400"}`}
                            style={{ fill: isHeartFilled ? "white" : "none" }}
                        />
                    </button>
                </div>

                {/* Hover Action Buttons */}
                <div className="absolute right-0 top-11 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-50px] group-hover:translate-y-0">
                    <button className="bg-primary p-2 rounded-full shadow hover:bg-primary transition">
                        <FiShoppingCart className="text-white w-5 h-5" />
                    </button>
                    <button className="bg-primary p-2 rounded-full shadow hover:bg-primary transition">
                        <FiRefreshCw className="text-white w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="mt-4 text-white">
                <h2 className="text-heading">{product.name}</h2>

                {/* Rating */}
                <div className="flex space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={i < product.rating ? "text-yellow-500" : "text-gray-300"}
                            size={18}
                        />
                    ))}
                    <div>(10)</div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between gap-1 mt-2">
                    <h2 className="text-heading">${product.price}</h2>
                    {product.oldPrice && (
                        <div>
                            <span className="text-gray-400 line-through text-sm">
                                ${product.oldPrice}
                            </span>
                            <span className="text-mainText text-sm ml-2">10% Off</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
