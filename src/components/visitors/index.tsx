import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, FileText, Building, Heart, Users } from "lucide-react";
import {useTranslation} from "react-i18next";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  onClick : ()=> void;
}

const Visitors: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {t} = useTranslation();
  const services: Service[] = [
    {
      id: "immigration",
      title: t('migrationIssues'),
      description: t('migrationDesc'),
      icon: <FileText className="w-8 h-8" />,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      onClick : ()=>{
          const el = document.getElementById('services-block-footer');
          el?.scrollIntoView({ behavior: 'smooth' });
      }

    },
    {
      id: "property",
      title: t('propertyLaw'),
      description: t('propertyDesc'),
      icon: <Building className="w-8 h-8" />,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      onClick : ()=>{
        const el = document.getElementById('services-block-footer');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: "matrimonial",
      title: t('familyIssues'),
      description: t('familyDesc'),
      icon: <Heart className="w-8 h-8" />,
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      onClick : ()=>{
        const el = document.getElementById('services-block-footer');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: "personal",
      title: t('personalAdvice'),
      description: t('personalDesc'),
      icon: <Users className="w-8 h-8" />,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      onClick : ()=>{
        const el = document.getElementById('services-block-footer');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 overflow-hidden ">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left section: Text and Navigation */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {t('secureFuture')}{" "}
                <span className="text-red-600">{t('secureFutureDesc')}</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                {t('legalSolutions')}
              </p>
            </div>

            <div className="flex md:hidden items-center justify-center lg:justify-start space-x-4">
              <button
                  onClick={prevSlide}
                  className="p-2 sm:p-3 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Previous services"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 sm:p-3 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Next services"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Right section: Services Grid (Desktop) */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {services.map((service , index) => (
              <div onClick={service.onClick} data-aos={index%2 === 0 ?  "fade-down-right" : "fade-up-left"}
                key={service.id}
                className={`${service.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200`}
              >
                <div className="space-y-4">
                  <div className={`${service.iconColor} group-hover:scale-110 transition-transform duration-200`}>
                    {service.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Services Carousel */}
        <div className="lg:hidden mt-8 sm:mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div onClick={service.onClick} key={service.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div
                    className={`${service.bgColor} rounded-2xl p-5 sm:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200`}
                  >
                    <div className="space-y-4">
                      <div className={service.iconColor}>{service.icon}</div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? "bg-red-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visitors;