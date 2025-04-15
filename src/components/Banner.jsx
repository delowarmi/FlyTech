import React, { useState } from "react";
import { FaPlaneDeparture, FaCalendarAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdFlight } from "react-icons/md";

const airports = [
  { code: "DAC", city: "Dhaka", country: "Bangladesh", name: "Hazrat Shahjalal Intl Airport" },
  { code: "DXB", city: "Dubai", country: "United Arab Emirates", name: "Dubai Intl Airport" },
  { code: "CXB", city: "Cox's Bazar", country: "Bangladesh", name: "Cox's Bazar Airport" },
  { code: "JSR", city: "Jashore", country: "Bangladesh", name: "Jashore Airport" },
  { code: "BZL", city: "Barishal", country: "Bangladesh", name: "Barishal Airport" },
];

const dates = ["16 Apr 25", "17 Apr 25", "18 Apr 25", "19 Apr 25"];
const locations=["Dhaka Bangladesh","cox's Bazar Bangladesh","Dubai UAE","jessore Bangladesh","Barishal Bangladesh"]
const country=["Bangladesh","India","Dubai UAE","Canada","USA","UK","Australia","Japan","China","Thailand","Pakistan","Napel","Malaysia"]
export default function Banner() {
  const [activeTab, setActiveTab] = useState("FLIGHT");
  const [fromAirport, setFromAirport] = useState("DAC");
  const [toAirport, setToAirport] = useState("CXB");
  const [fromDate, setFromDate] = useState("16 Apr 25");
  const [toDate, setToDate] = useState("18 Apr 25");

  const tabs = ["FLIGHT", "HOTEL", "TOUR", "VISA"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "FLIGHT":
        return (
          <div className="bg-white bg-opacity-95 rounded-xl shadow-lg p-6 md:flex md:justify-between">
            {/* LEFT SIDE */}
            <div className="md:w-2/3">
              <div className="flex  space-x-8 text-sm font-medium mb-4 text-gray-700">
                <span className="flex items-center gap-2 text-green-500">
                  <input type="radio" checked readOnly /> ROUND-WAY
                </span>
                <span className="flex items-center gap-2">
                  <input type="radio" readOnly /> ONE-WAY
                </span>
                <span className="flex items-center gap-2">
                  <input type="radio" readOnly /> MULTI-CITY
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* FROM */}
                <div className="flex">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">FROM</p>
                  <h1 className="text-4xl font-bold text-green-500">{fromAirport}</h1>
                  <div className="mt-2 bg-blue-100 px-3 rounded-sm text-sm text-gray-700 flex items-center justify-center gap-2">
                    <FaPlaneDeparture className="text-green-500" />
                    <select
                      value={fromAirport}
                      onChange={(e) => setFromAirport(e.target.value)}
                      className="text-sm px-3 py-2 rounded-full bg-transparent border focus:outline-none"
                    >
                      {airports.map((a) => (
                        <option className="bg-green-600" key={a.code} value={a.code}>
                          {a.city}, {a.country} - {a.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2 mt-2 bg-blue-100 px-3 py-2 rounded-sm text-sm justify-center text-gray-700">
                    <FaCalendarAlt className="text-green-500" />
                    <select
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="text-sm px-3 w-full bg-transparent border focus:outline-none"
                    >
                      {dates.map((d, i) => (
                        <option className="bg-green-600" key={i}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* MIDDLE ICON */}
                <div className="hidden md:flex items-center justify-center mx-6">
                  <div className="mt-12">
                    <MdFlight className="text-green-500 text-6xl transform rotate-90" />
                    <MdFlight className="text-green-500 text-6xl transform -rotate-90" />
                  </div>
                </div>

                {/* TO */}
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">TO</p>
                  <h1 className="text-4xl font-bold text-green-500">{toAirport}</h1>
                  <div className="mt-2 bg-blue-100 px-3 py-2 rounded-sm text-sm text-gray-700 flex items-center justify-center gap-2">
                    <FaPlaneDeparture className="text-green-500 rotate-180" />
                    <select
                      value={toAirport}
                      onChange={(e) => setToAirport(e.target.value)}
                      className="text-sm px-3 rounded-full bg-transparent border focus:outline-none"
                    >
                      {airports.map((a) => (
                        <option className="bg-green-600" key={a.code} value={a.code}>
                          {a.city}, {a.country} - {a.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2 mt-2 bg-blue-100 px-3 py-2 rounded-sm text-sm justify-center text-gray-700">
                    <FaCalendarAlt className="text-green-500" />
                    <select
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="text-sm px-3  bg-transparent w-full border focus:outline-none"
                    >
                      {dates.map((d, i) => (
                        <option className="bg-green-600 " key={i}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="md:w-1/3 mt-6 md:mt-0 bg-white p-4 rounded-lg">
              <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  {[...Array(6)].map((_, i) => (
                    <option key={i}>{i + 1} ADULT</option>
                  ))}
                </select>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  {[...Array(6)].map((_, i) => (
                    <option key={i}>{i} CHILD</option>
                  ))}
                </select>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  {[...Array(4)].map((_, i) => (
                    <option key={i}>{i} INFANT</option>
                  ))}
                </select>
              </div>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 text-sm">
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
              <button className="bg-green-500 w-full text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition">
                SEARCH FOR FLIGHT
              </button>
            </div>
          </div>
        );
      case "HOTEL":
        return (
          <div className="bg-white bg-opacity-95 rounded-xl shadow-lg p-6 ">
           <div className="flex justify-between">
            <div className="w-[24%]">
           <h4 className="text-gray-600 text-[18px]">DESTINATION</h4>
           <h1 className="text-green-600 text-[38px]">DHAKA</h1>
            <div className="flex items-center gap-2 mt-2 bg-blue-100 px-3 py-2 rounded-sm text-sm justify-center text-gray-700">
                    <IoLocation className="text-green-500" />
                    <select
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="text-sm px-3 w-full bg-transparent border focus:outline-none"
                    >
                      {locations.map((d, i) => (
                        <option className="bg-green-600" key={i}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

            </div>
            <div className="w-[24%]">
            <h4 className="text-gray-600 text-[18px]">CHACK IN</h4>
            <h1 className="text-green-600 text-[38px]">26 APR,2025</h1>
            <div className="flex items-center gap-2 mt-2 bg-blue-100 px-3 py-2 rounded-sm text-sm justify-center text-gray-700">
                    <FaCalendarAlt className="text-green-500" />
                    <select
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="text-sm px-3 w-full bg-transparent border focus:outline-none"
                    >
                      {dates.map((d, i) => (
                        <option className="bg-green-600" key={i}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
            </div>
            <div className="w-[24%] ">
            <h4 className="text-gray-600 text-[18px]">CHACK OUT</h4>
            <h1 className="text-green-600 text-[38px]">26 APR,2025</h1>
            <div className="flex items-center  gap-2 mt-2 bg-blue-100 px-3 py-2 rounded-sm text-sm  text-gray-700">
                    <FaCalendarAlt className="text-green-500" />
                    <select
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="text-sm px-3 w-full bg-transparent border focus:outline-none"
                    >
                      {dates.map((d, i) => (
                        <option className="bg-green-600" key={i}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
            </div>
            <div className="w-[24%]">
              <p className="text-green-600 text-[16px]">Guests & Rooms</p>
            <h4 className="text-gray-600 text-[16px] bg-slate-400 px-2 mt-5 mb-6 w-[74%]">1 Room , 1 Guests , 1 ADULTS</h4>
           <a href="#"className="text-white text-[14px] px-16 py-2 bg-green-500 mx-auto">SEARCH FOR HOTEL</a>
            </div>
           </div>
          </div>
        );
      case "TOUR":
        return (
          <div className="bg-white bg-opacity-95 rounded-xl shadow-lg p-6 ">
           <div className="flex justify-between">
            <div className="w-[24%]">
           <h4 className="text-gray-600 text-[18px]">DESTINATION TYPE</h4>
           <h1 className="text-green-600 text-[38px]">INTERNATIONAL</h1>
            <div className="flex items-center gap-2 mt-2 bg-blue-100 px-3 py-2 rounded-sm text-sm justify-center text-gray-700">
                    <IoLocation className="text-green-500" />
                    <select
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="text-[18px] px-3 w-full bg-transparent border focus:outline-none"
                    >
                     
                        <option className="bg-green-600">INTERNATIONAL</option>
                        <option className="bg-green-600">DOMESTIC</option>
                    
                    </select>
                  </div>

            </div>
            <div className="w-[24%]">
            <h4 className="text-gray-600 text-[18px]">WHERE ?</h4>
            <h1 className="text-green-600 text-[38px]">ROOM,VASNIS</h1>
            <div className="flex items-center gap-2 mt-2 bg-blue-100 px-3 py-2 rounded-sm text-sm justify-center text-gray-700">
                    <IoLocation className="text-green-500" />
                    <select
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="text-[18px] px-3 w-full bg-transparent border focus:outline-none"
                    >
                      
                        <option className="bg-green-600">BANGLADESH(BD)</option>
                        <option className="bg-white border-green-500 border-2">SEARCH DESTINATION</option>
                      
                    </select>
                  </div>
            </div>
            <div className="w-[24%] ">
            <h4 className="text-gray-600 text-[18px]">WHEN ?</h4>
            <h1 className="text-green-600 text-[38px]">1 APR,2025</h1>
            <div className="flex items-center  gap-2 mt-2 bg-blue-100 px-3 py-2 rounded-sm text-sm  text-gray-700">
                    <FaCalendarAlt className="text-green-500" />
                    <select
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="text-[18px] px-3 w-full bg-transparent border focus:outline-none"
                    >
                      {dates.map((d, i) => (
                        <option className="bg-green-600" key={i}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
            </div>
            <div className="w-[24%]">
           <div className="mb-10 mt-8">

           <a href="#"className="text-white text-[14px] px-16 py-2 bg-green-500 mx-auto">SEARCH ALL TOUR</a>
           </div>
           <div className="">

           <a href="#"className="text-white text-[14px] px-16 py-2 bg-green-500 mx-auto">SEARCH FOR TOUR</a>
           </div>
            </div>
           </div>
          </div>
        );
      case "VISA":
        return (
          <div className="bg-white bg-opacity-95 rounded-xl shadow-lg p-6 ">
           <div className="flex justify-between">
            <div className="w-[36%]">
           <h4 className="text-gray-600 text-[18px]">DESTINATION CITY or COUNTRY</h4>
           <h1 className="text-green-600 text-[38px]">INDIA</h1>
            <div className="flex items-center gap-2 mt-2 bg-blue-100 px-3 py-2 rounded-sm text-sm justify-center text-gray-700">
                    <IoLocation className="text-green-500" />
                    <select
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="text-sm px-3 w-full bg-transparent border focus:outline-none"
                    >
                      {country.map((d, i) => (
                        <option className="bg-green-600" key={i}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

            </div>
            <div className="w-[36%]">
            <h4 className="text-gray-600 text-[18px]">SELECT VISA TYPE</h4>
            <h1 className="text-green-600 text-[38px]">TOURIST VISA</h1>
            <div className="flex items-center gap-2 mt-2 bg-blue-100 px-3 py-2 rounded-sm text-sm justify-center text-gray-700">
                    <FaCalendarAlt className="text-green-500" />
                    <select
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="text-sm px-3 w-full bg-transparent border focus:outline-none"
                    >
                     
                        <option className="bg-green-600">
                          TOURIST VISA
                        </option>
                    
                    </select>
                  </div>
            </div>

            <div className="w-[24%] mt-24 ml-5">

           <a href="#"className="text-white  text-[14px] px-16 py-2 bg-green-500 mx-auto">SEARCH FOR TOUR</a>
            </div>
           </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="rounded-xl p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/mainbannerimg.png')" }}
    >
      {/* Tabs */}
      <div className="flex justify-between space-x-4 mb-6 py-2 px-2 bg-white rounded-full w-[40%] mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-1 rounded-full font-semibold ${
              activeTab === tab
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:underline"
            }`}
          >
            {tab === "FLIGHT" && "✈"} {tab === "HOTEL" && "🏨"}
            {tab === "TOUR" && "🗺️"} {tab === "VISA" && "🛂"} {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}
