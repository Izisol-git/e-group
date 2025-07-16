import type React from "react";
import { FileText, Building2, Zap, ScrollText, FileCheck, PiggyBank } from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

const service: ServiceCard[] = [
  {
    id: "immigration",
    title: "Immigratsiya bo‘yicha yordam",
    description: "Sizning immigratsiya jarayoningizni soddalashtirish uchun professional maslahatlar.",
    icon: <FileText className="w-6 h-6 text-amber-600" />,
    iconBg: "bg-amber-100",
  },
  {
    id: "intellectual",
    title: "Intellektual mulk huquqlari",
    description: "Mualliflik va patent huquqlarini himoya qilish bo‘yicha yuridik yordam.",
    icon: <Building2 className="w-6 h-6 text-teal-600" />,
    iconBg: "bg-teal-100",
  },
  {
    id: "compliance",
    title: "Qonuniy talablar bo‘yicha maslahat",
    description: "Korxonangiz qonunlarga to‘liq mos bo‘lishini ta’minlash uchun xizmatlar.",
    icon: <Zap className="w-6 h-6 text-purple-600" />,
    iconBg: "bg-purple-100",
  },
  {
    id: "will",
    title: "Vasiynoma tayyorlash",
    description: "Meros va vasiylik hujjatlarini rasmiylashtirishda yordam.",
    icon: <ScrollText className="w-6 h-6 text-indigo-600" />,
    iconBg: "bg-indigo-100",
  },
  {
    id: "documentation",
    title: "Yuridik hujjatlarni tayyorlash",
    description: "Shartnomalar, kelishuvlar va boshqa hujjatlarni tayyorlash xizmatlari.",
    icon: <FileCheck className="w-6 h-6 text-purple-600" />,
    iconBg: "bg-purple-100",
  },
  {
    id: "estate",
    title: "Mulkni rejalashtirish",
    description: "Mulk va mol-mulkni boshqarish va meros qoldirish bo‘yicha maslahatlar.",
    icon: <PiggyBank className="w-6 h-6 text-blue-600" />,
    iconBg: "bg-blue-100",
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
          Zamonaviy va
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-red-500">
          yuridik yechimlar platformasi qo‘lingizda
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {service.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 ${service.iconBg} rounded-lg flex items-center justify-center mb-4`}>
              {service.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500">
          Huquqshinoz bilan bog‘lanish
        </button>
      </div>
    </div>
  );
};

export default Services;