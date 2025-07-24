import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import Footer from "../footer";

const LegalService: React.FC = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <>
            <section id="services-block-body" className="mt-[100px]">
                <div className="p-6 max-w-6xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-snug">
                        {t("legalService_heading")}
                    </h2>

                    <div className="space-y-4 text-gray-800">
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t("legalService_item1")}</li>
                            <li>{t("legalService_item2")}</li>
                            <li>{t("legalService_item3")}</li>
                            <li>{t("legalService_item4")}</li>
                            <li>{t("legalService_item5")}</li>
                            <li>{t("legalService_item6")}</li>
                            <li>{t("legalService_item7")}</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-snug">
                        {t("legalService_benefitsHeading")}
                    </h2>

                    <p className="text-gray-700">
                        <strong>{t("legalService_benefit1_title")}</strong> {t("legalService_benefit1_text")}
                    </p>
                    <p className="text-gray-700">
                        <strong>{t("legalService_benefit2_title")}</strong> {t("legalService_benefit2_text")}
                    </p>
                    <p className="text-gray-700">
                        <strong>{t("legalService_benefit3_title")}</strong> {t("legalService_benefit3_text")}
                    </p>
                    <p className="text-gray-700">
                        <strong>{t("legalService_benefit4_title")}</strong> {t("legalService_benefit4_text")}
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default LegalService;
