import React from "react";
import { Video, Phone, FileText } from "lucide-react";
import HeroImage from "../../assets/hero-yurisk.png"
const Hero: React.FC = () => {
    const services = [
        {
            icon: <Video className="w-6 h-6 text-blue-500" />,
            title: "Video Maslahat",
            description: "Huquqshunoslar bilan xavfsiz videoqo'ng'iroq orqali maslahat oling.",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
        },
        {
            icon: <Phone className="w-6 h-6 text-orange-500" />,
            title: "Telefon Maslahat",
            description: "Bevosita telefon orqali tezkor huquqiy maslahat oling.",
            bgColor: "bg-orange-50",
            borderColor: "border-orange-200",
        },
        {
            icon: <FileText className="w-6 h-6 text-red-500" />,
            title: "Hujjatlarni Tekshirish",
            description: "Hujjatlaringizni yuridik jihatdan tekshirib, tasdiqlang.",
            bgColor: "bg-red-50",
            borderColor: "border-red-200",
        },
    ];

    return (
        <section className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-teal-800 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-10 left-5 w-24 h-24 bg-white rounded-full blur-2xl md:w-32 md:h-32" />
                <div className="absolute top-20 right-5 w-20 h-20 bg-white rounded-full blur-xl md:w-24 md:h-24" />
                <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-white rounded-full blur-2xl md:w-36 md:h-36" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                        <div className="space-y-3 sm:space-y-4">
                            <p className="text-sm sm:text-base font-medium text-white/90 tracking-wide">
                                Tezkor Huquqiy Yordam
                            </p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Professional Huquqiy Konsultatsiya
                            </h1>
                        </div>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all shadow-md hover:shadow-lg text-sm sm:text-base">
                            Biz bilan bog'lanish
                        </button>
                    </div>

                    <div className="flex flex-col items-center space-y-6 sm:space-y-8 mt-8 lg:mt-0">
                        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                            <div className="w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden">
                                <img
                                    src={HeroImage}
                                    alt="Huquqshinoz professional"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full space-y-4 sm:space-y-5">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start space-x-3 p-4 rounded-lg border ${service.bgColor} ${service.borderColor} shadow-sm hover:shadow-md transition-all cursor-pointer`}
                                >
                                    <div className="mt-1 flex-shrink-0">{service.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                                            {service.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-16 sm:h-20 md:h-24 fill-white"
                >
                    <path d="M0,60 C200,0 400,120 600,60 C800,0 1000,120 1200,60 L1200,120 L0,120 Z" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
