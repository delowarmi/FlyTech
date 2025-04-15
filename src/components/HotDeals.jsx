import React, { useState } from 'react';

const dealsData = {
  FLIGHT: [
    { img: '/src/assets/hotdealflightimg1.png', },
    { img: '/src/assets/hotdealflightimg2.png', },
    { img: '/src/assets/hotdealflightimg3.png',  },
  ],
  'GROUP FARE': [
    { img: '/src/assets/hotdealgroupfareimg1.png', text: 'Group Fare to Malaysia' },
    { img: '/src/assets/hotdealgroupfareimg2.png', text: 'Special Group for Dubai' },
    { img: '/src/assets/hotdealgroupfareimg3.png', text: 'Save More on Bulk Booking' },
  ],
  TOUR: [
    { img: '/src/assets/hotdealtourimg1.png', text: 'Explore Cox’s Bazar' },
    { img: '/src/assets/hotdealtourimg2.png', text: 'Nepal Tour Packages' },
    { img: '/src/assets/hotdealtourimg3.png', text: 'Adventure in Thailand' },
  ],
  VISA: [
    { img: '/src/assets/hotdealvisaimg1.png', text: 'Get Dubai Visa Easily' },
    { img: '/src/assets/hotdealvisaimg2.png', text: 'Malaysia Visa Assistance' },
    { img: '/src/assets/hotdealvisaimg3.png', text: 'Quick Schengen Visa' },
  ]
};

const categories = ['FLIGHT', 'GROUP FARE', 'TOUR', 'VISA'];

export default function HotDeals() {
  const [activeCategory, setActiveCategory] = useState('FLIGHT');

  return (
    <div className="bg-gray-100 py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-4 md:gap-0">
        <h2 className="text-xl font-semibold">Hot Deals</h2>
        <div className="flex space-x-2 bg-green-600 px-4 py-3 rounded-full">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gray-600 text-white'
                  : 'text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {dealsData[activeCategory].map((deal, index) => (
          <div
            key={index}
          >
            <img
              src={deal.img}
              alt={deal.text}
              className="rounded mb-2 w-full h-56 object-cover"
            />
            
          </div>
        ))}
      </div>
    </div>
  );
}