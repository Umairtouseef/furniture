import React from "react";
import prod1 from "../../assets/prod1.png";
import prod2 from "../../assets/prod2.png";
import prod3 from "../../assets/prod3.png";
import prod4 from "../../assets/prod4.png";


import ProductCard from "./Product";

const WelcomeSection = () => {

    const products = [
        {
          id: 1,
          name: "Woodan Diwan",
          image: prod1,
          price: "29.99",
          oldPrice: "49.99",
          rating: 4, 
        },
        {
          id: 2,
          name: "Wing Lounge Chair",
          image: prod2,
          price: "19.99",
          oldPrice: "39.99",
          rating: 3, 
        },
        {
          id: 3,
          name: "Egon Wood Chair",
          image: prod3,
          price: "15.99",
          oldPrice: "25.99",
          rating: 5, 
        },
        {
          id: 4,
          name: "Woodan Center Table",
          image: prod3,
          price: "15.99",
          oldPrice: "25.99",
          rating: 2, 
        },
        {
          id: 5,
          name: "Woodan Center Table",
          image: prod4,
          price: "15.99",
          oldPrice: "25.99",
          rating: 4, 
        },
      ];

    return (
        <section className="container mx-auto px-6 py-12 bg-primary lg:mt-0 md:mt-56 mt-96">

            <div className="text-center">
                <h4 className="text-paragraph font-medium">Special Offer</h4>
                <h2 className="text-h2 text-heading font-bold mt-2">TOP COLLECTION</h2>
                <div className="w-20 border-t-4 border-mainText bg-mainText my-6 mx-auto"></div>
                <p className="text-paragraph text-p leading-normal mt-4 md:max-w-2xl mx-auto">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-2 mt-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>


        </section>
    );
};

export default WelcomeSection;
