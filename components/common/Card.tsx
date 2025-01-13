import Image from "next/image";
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

interface CardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    rating: number;
    features: string[];
    details: {
        beds: number;
        baths: number;
        capacity: string;
    };
}
const Card: React.FC<CardProps> =({
    image,
    title,
    location,
    price,
    rating,
    features,
    details,
}) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
                <Image 
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-gray-600 mt-2">{features.map((feature, index) => (
                    <span key={index}>{feature}</span>
                ))}</div>
            </div>
            <div className="pt-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <div>
                        <span className="text-yellow-500">⭐</span>
                        <span>{rating}</span>
                    </div>
                </div>
                <p className="text-gray-500">{location}</p>
                <div className="flex justify-between mt-4">
                    <div className="flex items-center justify-center gap-4 border rounded-full px-3 py-1">
                        <div className="flex items-center justify-center gap-1">
                            <IoIosBed />
                            <p>{details.beds}</p>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <FaBath />
                            <p>{details.baths}</p>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <BsFillPeopleFill />
                            <p>{details.capacity}</p>
                        </div>
                    </div>
                    <p className="text-lg font-semibold">{price}</p>
                </div>
            </div>
        </div>
    );
};
export default Card