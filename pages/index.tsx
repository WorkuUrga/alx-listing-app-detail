import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import Card from "@/components/common/Card";
import FilterSection from "@/components/layout/FilterSection";

const HomePage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
          <div
              className="bg-contain bg-center bg-no-repeat text-white text-center h-[500px] flex flex-col justify-center items-center rounded-lg mb-8"
              style={{
                backgroundImage: "url('/assets/background_image.png')",
              }}
            >
              <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
              <p className="text-lg">
                The best prices for over 2 million properties worldwide
              </p>
            </div>
            <FilterSection />
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PROPERTYLISTINGSAMPLE.map((property, index) => (
                    <Card
                        key={index}
                        image={property.image}
                        title={property.name}
                        location={`${property.address.city}, ${property.address.state}, ${property.address.country}`}
                        price={`$${property.price}/n`}
                        rating={property.rating}
                        features={property.category}
                        details={{
                            beds: Number(property.offers.bed),
                            baths: Number(property.offers.shower),
                            capacity: property.offers.occupants,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
