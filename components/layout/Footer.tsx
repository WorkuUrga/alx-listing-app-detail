import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between gap-8">
        <div className="w-1/3">
          <h2 className="text-white text-2xl font-bold mb-4">alx</h2>
          <p className="text-sm leading-relaxed">
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li> <a href="#" className="hover:text-white">Apartments in Dubai</a> </li>
            <li> <a href="#" className="hover:text-white">Hotels in New York</a> </li>
            <li> <a href="#" className="hover:text-white">Villa in Spain</a> </li>
            <li> <a href="#" className="hover:text-white">Mansion in Indonesia</a> </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li> <a href="#" className="hover:text-white">About us</a> </li>
            <li> <a href="#" className="hover:text-white">Blog</a> </li>
            <li> <a href="#" className="hover:text-white">Career</a> </li>
            <li> <a href="#" className="hover:text-white">Customers</a> </li>
            <li> <a href="#" className="hover:text-white">Brand</a> </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li> <a href="#" className="hover:text-white">Support</a> </li>
            <li> <a href="#" className="hover:text-white">Cancel booking</a> </li>
            <li> <a href="#" className="hover:text-white">Refunds Process</a> </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 px-6 lg:px-12 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          Some hotels require you to cancel more than 24 hours before check-in.
          <a href="#" className="text-green-400 ml-1 hover:underline">Details here</a>
        </p>
        <ul className="flex flex-wrap justify-center gap-4">
          <li> <a href="#" className="hover:text-white">Terms of Service</a> </li>
          <li> <a href="#" className="hover:text-white">Policy service</a> </li>
          <li> <a href="#" className="hover:text-white">Cookies Policy</a> </li>
          <li> <a href="#" className="hover:text-white">Partners</a> </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
