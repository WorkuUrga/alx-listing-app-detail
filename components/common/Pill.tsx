import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, isSelected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${isSelected ? 'bg-green-200 text-green-600 border-green-600' : 'bg-white text-gray-700 border-gray-300'}`}
        > 
            {label}
        </button>
    );
};

export default Pill;