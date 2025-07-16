"use client";

import { useState } from "react";
import { Phone, Zap, Star } from "lucide-react";

interface PricingOption {
  id: string;
  minutes: number;
  price: number;
  pricePerMinute: string;
  validity: string;
}

const pricingOptions: PricingOption[] = [
  {
    id: "60min",
    minutes: 60,
    price: 20,
    pricePerMinute: "$16.6/ daqiqa",
    validity: "Daqiqa 30 kun davomida amal qiladi",
  },
  {
    id: "45min",
    minutes: 45,
    price: 20,
    pricePerMinute: "$18.80/ daqiqa",
    validity: "Daqiqa 30 kun davomida amal qiladi",
  },
  {
    id: "30min",
    minutes: 30,
    price: 20,
    pricePerMinute: "$23.30/ daqiqa",
    validity: "Daqiqa 30 kun davomida amal qiladi",
  },
  {
    id: "15min",
    minutes: 15,
    price: 20,
    pricePerMinute: "$33.20/ daqiqa",
    validity: "Daqiqa 30 kun davomida amal qiladi",
  },
];

const Consultation = () => {
  const [selectedOption, setSelectedOption] = useState("60min");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="text-center py-8 sm:py-10 px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            Mutaxassis yechimlarini olish uchun{" "}
            <span className="text-red-500 font-bold">paketni tanlang</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Sidebar */}
          <div className="lg:w-1/3 bg-gray-50 p-6 sm:p-8">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-lg sm:text-xl font-medium text-gray-700 leading-relaxed max-w-xs">
                  Bugungi to‘g‘ri huquqiy maslahat — kelajakdagi katta xarajatlardan saqlaydi.
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="text-gray-600 text-sm sm:text-base font-medium">
                    73 mingdan ortiq qo‘ng‘iroq ulandi
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-600 text-sm sm:text-base font-medium">
                    63 mingdan ortiq ijobiy natija
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-pink-500 fill-current" />
                  </div>
                  <span className="text-gray-600 text-sm sm:text-base font-medium">
                    O‘rtacha reyting: 4.6/5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Pricing Options */}
          <div className="lg:w-2/3 p-6 sm:p-8">
            <div className="space-y-3 sm:space-y-4">
              {pricingOptions.map((option) => (
                <div
                  key={option.id}
                  className={`relative rounded-lg border-2 p-4 sm:p-6 cursor-pointer transition-all duration-300 ${
                    selectedOption === option.id
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="relative">
                        <input
                          type="radio"
                          name="pricing"
                          checked={selectedOption === option.id}
                          onChange={() => setSelectedOption(option.id)}
                          className="w-5 h-5 text-purple-500 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 cursor-pointer"
                        />
                      </div>
                      <div>
                        <h3
                          className={`text-base sm:text-lg font-semibold ${
                            selectedOption === option.id ? "text-purple-700" : "text-gray-800"
                          }`}
                        >
                          {option.minutes} daqiqa
                        </h3>
                        <p
                          className={`text-xs sm:text-sm ${
                            selectedOption === option.id ? "text-purple-600" : "text-gray-500"
                          }`}
                        >
                          {option.validity}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-xl sm:text-2xl font-bold ${
                          selectedOption === option.id ? "text-purple-700" : "text-green-500"
                        }`}
                      >
                        ${option.price}
                      </div>
                      <div
                        className={`text-xs sm:text-sm ${
                          selectedOption === option.id ? "text-purple-600" : "text-gray-500"
                        }`}
                      >
                        ({option.pricePerMinute})
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500">
                Tanlang va bog‘laning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;