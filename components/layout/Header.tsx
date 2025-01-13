import React from "react";
import {PROPERTY_CATEGORIES} from '../../constants/index'
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
    return (
        <header className="mx-8">
            <div className="container mx-auto py-4 px-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-800">
                    <img src="assets/accomodations/logo.png" alt="" />
                </div>
                
                <SearchBar />
                <div className="flex gap-6">
                    <button className="text-gray-700 font medium hover:bg-green-700 hover:text-white px-7 py-3 border rounded-full">Sign in</button>
                    <button className="text-gray-700 font medium hover:bg-green-700 hover:text-white px-7 py-3 border rounded-full">Sign up</button>
                </div>
            </div>
            <div>
                <div className="container  py-4 flex justify-center items-start gap-8">
                    {PROPERTY_CATEGORIES.map((category, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <img src={category.image} alt={category.name}
                            className=""
                            />
                            <p className="text-[13px] text-gray-400">{category.name}</p>
                        </div>
                    ))}
                    <hr />
                </div>
            </div>
        </header>
    )
}
export default Header