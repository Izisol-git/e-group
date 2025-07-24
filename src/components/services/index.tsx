import type React from "react";
import {FileText, Building2, Zap, ScrollText, FileCheck, PiggyBank} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";


interface ServiceCard {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    iconBg: string;
    navigate: string;
}



const Services = () => {
    const {t}=useTranslation();
    const navigate=useNavigate();
    const service: ServiceCard[] = [
        {
            id: "normative",
            title: t('normativeCreativity'),
            description: t('normativeDesc') ,
            icon: <FileText className="w-6 h-6 text-amber-600"/>,
            iconBg: "bg-amber-100",
            navigate : '/normative-block',
        },
        {
            id: "court",
            title: t('preTrialResolution'),
            description: t('preTrialDesc') ,
            icon: <Building2 className="w-6 h-6 text-teal-600"/>,
            iconBg: "bg-teal-100",
            navigate : '/court-block',
        },
        {
            id: "mediation",
            title: t('mediation'),
            description: t('mediationDesc') ,
            icon: <Zap className="w-6 h-6 text-purple-600"/>,
            iconBg: "bg-purple-100",
            navigate : '/mediation-block',
        },
        {
            id: "court-collect",
            title: t('courtEnforcement'),
            description: t('courtDesc') ,
            icon: <ScrollText className="w-6 h-6 text-indigo-600"/>,
            iconBg: "bg-indigo-100",
            navigate : '/court-debt-block',
        },
        {
            id: "documentation",
            title: t('executionMonitoring'),
            description: t('executionDesc') ,
            icon: <FileCheck className="w-6 h-6 text-purple-600"/>,
            iconBg: "bg-purple-100",
            navigate : '/compulsory-execution-block',
        },
        {
            id: "asset-recovery",
            title: t('assetRecovery'),
            description: t('assetDesc') ,
            icon: <PiggyBank className="w-6 h-6 text-blue-600"/>,
            iconBg: "bg-blue-100",
            navigate : '/asset-recovery-block',
        },
        {
            id: "Legal",
            title: t('subscriberService'),
            description: t('subscriberDesc') ,
            icon: <PiggyBank className="w-6 h-6 text-blue-600"/>,
            iconBg: "bg-blue-100",
            navigate : '/legal-service-block',

        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
            <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
                    {t('modernPlatform')}
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-red-500">
                    {t('legalSolutionsPlatform')}
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {service.map((service) => (
                    <div data-aos="zoom-in"
                         key={service.id}
                         className="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-start justify-between"
                    >
                        <div >
                            <div
                                className={`w-10 h-10 sm:w-12 sm:h-12 ${service.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                                {service.icon}

                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
                        </div>
                        <div className={'w-full '}>
                            <p onClick={()=> navigate(service.navigate)} className={'mt-4 text-end text-red-500'}>{t('details')}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <button onClick={()=>{
                    const el = document.getElementById("services-block-footer");
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                    }
                }}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500">
                    {t('contactLawyer')}
                </button>
            </div>
        </div>
    );
};

export default Services;