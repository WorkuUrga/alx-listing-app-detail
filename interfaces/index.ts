export interface CardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    rating: number;
    type: string;
    features: string[];
}
export interface ButtonProps {
    label: string;
    onClick: ()=> void;
}

export interface address {
    state: string;
    city: string;
    country: string;
}
export interface offers {
    bed: string;
    shower: string;
    occupants: string;
}
export interface PropertyProps {
    name: string;
    address: address;
    rating: string;
    category: string[];
    price: number;
    offers: offers;
    image: string;
    discount: string;
}
export interface PillProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}