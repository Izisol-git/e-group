import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import Footer from "../footer";

const Mediation: React.FC = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <>
            <section id="services-block-body" className="mt-[100px]">
                <div className="p-6 max-w-6xl mx-auto space-y-6">

                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-snug">
                        {t("mediation_title")}
                    </h2>

                    <p className="text-gray-700">{t("mediation_intro")}</p>

                    <div className="space-y-4 text-gray-800">
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li><strong>{t("mediation_point1_strong")}</strong> {t("mediation_point1_text")}</li>
                        </ul>

                        <p className="font-semibold mt-4">{t("mediation_relationsTitle")}</p>
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t("mediation_relationsText")}</li>
                        </ul>

                        <p className="font-semibold mt-4">{t("mediation_savingTitle")}</p>
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t("mediation_savingText")}</li>
                        </ul>

                        <p className="font-semibold mt-4">{t("mediation_confidentialityTitle")}</p>
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t("mediation_confidentialityText")}</li>
                        </ul>

                        <p className="font-semibold mt-4">{t("mediation_flexibilityTitle")}</p>
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t("mediation_flexibilityText")}</li>
                        </ul>

                        <p className="font-semibold mt-4">{t("mediation_controlTitle")}</p>
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t("mediation_controlText")}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Mediation;
