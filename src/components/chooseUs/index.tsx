import { BarChart3, Clock, Scale, Shield, Smile } from "lucide-react";
import React from "react";
import YuristWoman from "../../assets/YURIST-OPA.png";
import Background from "../../assets/bg-yurist-img.png"
interface Feature {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    position: string;
}

const features: Feature[] = [
    {
        id: "economic",
        title: "Iqtisodiy foyda",
        description: "Sizga eng maqbul va tejamkor yuridik yechimlar taklif qilamiz.",
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        position: "top-left",
    },
    {
        id: "time",
        title: "Vaqt tejash",
        description: "Masalalaringizni tez va samarali hal qilish uchun xizmatimiz 24/7 ishlaydi.",
        icon: <Clock className="w-6 h-6 text-white" />,
        position: "top-right",
    },
    {
        id: "professional",
        title: "Professional yondashuv",
        description: "Tajriba va bilimga asoslangan aniq va ishonchli maslahatlar.",
        icon: <Scale className="w-6 h-6 text-white" />,
        position: "middle-left",
    },
    {
        id: "24-7",
        title: "Doimiy qo'llab-quvvatlash",
        description: "Har qanday vaqtda murojaat qilishingiz mumkin, biz doimo yordamga tayyormiz.",
        icon: <Clock className="w-6 h-6 text-white" />,
        position: "middle-right",
    },
    {
        id: "security",
        title: "Maxfiylik va xavfsizlik",
        description: "Sizning ma’lumotlaringiz sir saqlanadi va to‘liq himoyalangan.",
        icon: <Shield className="w-6 h-6 text-white" />,
        position: "bottom-left",
    },
    {
        id: "satisfaction",
        title: "Mijozlar qoniqishi",
        description: "Biz bilan ishlagan mijozlarimizning yuqori baholari va ijobiy fikrlari.",
        icon: <Smile className="w-6 h-6 text-white" />,
        position: "bottom-right",
    },
];

const FeatureItem: React.FC<{ feature: Feature; className?: string }> = ({ feature, className = "" }) => {
    return (
        <div className={`flex items-center space-x-4 sm:space-x-5 ${className}`}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                {feature.icon}
            </div>
            <div className="text-left">
                <h3 className="font-semibold text-gray-900 text-md md:text-xl mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-md leading-relaxed max-w-xs">{feature.description}</p>
            </div>
        </div>
    );
};

const WhyChooseUs = () => {
    return (
        <div
            className="relative bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
                        Nega aynan bizni tanlash kerak?
                    </h1>
                    <div className="w-16 sm:w-20 h-0.5 bg-red-500 mx-auto mt-3 sm:mt-4"></div>
                </div>

                <div className="relative">
                    <div className="hidden lg:block">
                        <div className="relative w-full h-[500px] sm:h-[600px] mx-auto">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-900 to-slate-700 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={YuristWoman}
                                        alt="Yuridik mutaxassis"
                                    />
                                </div>
                            </div>

                            <div className="absolute top-0 left-0 sm:left-4">
                                <FeatureItem feature={features[0]} />
                            </div>

                            <div className="absolute top-0 right-0 sm:right-4">
                                <FeatureItem feature={features[1]} className="flex-row-reverse text-right" />
                            </div>

                            <div className="absolute top-1/2 left-0 sm:left-4 transform -translate-y-1/2">
                                <FeatureItem feature={features[2]} />
                            </div>

                            <div className="absolute top-1/2 right-0 sm:right-4 transform -translate-y-1/2">
                                <FeatureItem feature={features[3]} className="flex-row-reverse text-right" />
                            </div>

                            <div className="absolute bottom-0 left-0 sm:left-4">
                                <FeatureItem feature={features[4]} />
                            </div>

                            <div className="absolute bottom-0 right-0 sm:right-4">
                                <FeatureItem feature={features[5]} className="flex-row-reverse text-right" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <div className="flex justify-center mb-8 sm:mb-12">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-900 to-slate-700 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                                <img
                                    className="w-full h-full object-contain"
                                    src={YuristWoman}
                                    alt="Yuridik mutaxassis"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                            {features.map((feature) => (
                                <FeatureItem key={feature.id} feature={feature} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;