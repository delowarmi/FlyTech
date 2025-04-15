import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white pt-10 pb-6 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Need Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Need Help</h3>
          <p className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1" /> Ka 11/2A, Bashundhora R/A Road, Jagannathpur, Dhaka 1229</p>
          <p className="flex items-center gap-2 mt-2"><FaEnvelope /> support@flyfarint.com</p>
          <p className="flex items-center gap-2 mt-2"><FaPhoneAlt /> +880 1755 572 099</p>
          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaWhatsapp className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Discover */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Discover</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Payment Method</li>
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
            <li>Refund & Cancellation Policy</li>
          </ul>
        </div>

        {/* Certification */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Certification</h3>
          <div className="flex flex-wrap gap-2">
            <img src="/download (4).png" alt="cert1" className="h-10" />
            <img src="/download (3).png" alt="cert2" className="h-10" />
            <img src="/download (1).png" alt="cert4" className="h-10" />
            <img src="/download.png" alt="cert3" className="h-10" />
            <img src="/download (2).png" alt="cert3" className="h-10" />
          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <p className="mb-2">Question or feedback we would love to hear from you</p>
          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 text-black focus:outline-none"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Payment Logos */}
      <div className="mt-10  border-white/30 pt-6">
        
        <div className="w-[800px] h-[70px] mx-auto ">
          {/* Add logos here */}
          <img src="/paymentgetwayimg.png" alt="visa" className=" w-full h-full" />

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-6 border-t border-white/30 pt-4">
        &copy; Copyright 2025 by Fly Far Tech | B2C OTA Portal
      </div>
    </footer>
  );
};

export default Footer;
